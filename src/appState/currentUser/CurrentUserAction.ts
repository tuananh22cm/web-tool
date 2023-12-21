import { UserDto } from "./CurrentUserState";

export enum CurrentUserActionType {
    login = "currentUser.login",
    logout = "currentUser.logout",
}

export type CurrentUserAction =
    | ({
          type: CurrentUserActionType.login;
          accessToken?: string;
      } & UserDto)
    | {
          type: CurrentUserActionType.logout;
      };
