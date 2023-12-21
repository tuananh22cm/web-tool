import { UserDto } from "../currentUser/CurrentUserState";
import { UserAction, UserActionType } from "./userAction";

export type UserStore = Array<UserDto>;

export const users = (prevState: UserStore, action: UserAction): UserStore => {
    switch (action.type) {
        case UserActionType.load:
            return action.payload;

        case UserActionType.add:
            return [...prevState, action.payload];

        case UserActionType.edit: {
            if (prevState.length === 0) {
                console.warn("Cannot edit an empty store.", action);
                return prevState;
            }

            const index = prevState.findIndex((x) => x.id === action.payload.id);

            if (index === -1) {
                console.warn("Cannot find item in store.", action);
                return prevState;
            }

            return [...prevState.slice(0, index), { ...prevState[index], ...action.payload }, ...prevState.slice(index + 1)];
        }

        case UserActionType.delete: {
            if (prevState.length === 0) {
                console.warn("Cannot delete an empty store!", action);
                return prevState;
            }

            const index = prevState.findIndex((x) => x.id === action.payload.id);

            if (index === -1) {
                console.warn("Cannot find item in store.", action);
                return prevState;
            }

            return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
        }

        default:
            return prevState;
    }
};
