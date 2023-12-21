import { UserDto } from "../currentUser/CurrentUserState";

export enum UserActionType {
    load = "user.load",
    add = "user.add",
    edit = "user.edit",
    delete = "user.delete",
}

export type UserAction =
    | {
          type: UserActionType.load;
          payload: Array<UserDto>;
      }
    | {
          type: UserActionType.add;
          payload: UserDto;
      }
    | {
          type: UserActionType.edit;
          payload: Pick<UserDto, "id"> & Partial<UserDto>;
      }
    | {
          type: UserActionType.delete;
          payload: { id: string };
      };
