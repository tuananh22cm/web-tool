import { Action } from "./Action";
import { AppState } from "./AppState";
import { CurrentUserAction } from "./currentUser/CurrentUserAction";
import { currentUser } from "./currentUser/currentUser";
import { UserAction } from "./users/userAction";
import { users } from "./users/users";

export const reducer = (prevState: AppState, action: Action): AppState => ({
    currentUser: currentUser(prevState.currentUser, action as CurrentUserAction),
    users: users(prevState.users, action as UserAction),
});
