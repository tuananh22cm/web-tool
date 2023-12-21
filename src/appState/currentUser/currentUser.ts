import axios from "axios";
import { Base64 } from "js-base64";
import { appStorage } from "../appStorage";
import { CurrentUserAction, CurrentUserActionType } from "./CurrentUserAction";
import { CurrentUserState } from "./CurrentUserState";

/**
 * Don't confuse with PrivateAccount, CompanyAccount
 */
export type CurrentUserStore = CurrentUserState;

export const currentUser = (prevState: CurrentUserStore, action: CurrentUserAction): CurrentUserStore => {
    switch (action.type) {
        case CurrentUserActionType.login:
            axios.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;

            appStorage.setItem("accessToken", action.accessToken as string);
            appStorage.setItem("id", action.id as string);
            appStorage.setItem("lastName", action.lastName as string);
            appStorage.setItem("firstName", action.firstName as string);
            appStorage.setItem("email", action.email as string);
            appStorage.setItem("avatar", action.avatar as string);

            // get role from accessToken
            const payloadToken = JSON.parse(Base64.decode((action?.accessToken || "").split(".")[1]) || "{}");
            return {
                ...prevState,

                accessToken: action.accessToken as string,
                id: action.id,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                avatar: action.avatar,
                isLogin: true,
            };

        case CurrentUserActionType.logout:
            delete axios.defaults.headers.common.Authorization;

            appStorage.clear();
            return {
                ...new CurrentUserState(),
            };

        default:
            return prevState;
    }
};
