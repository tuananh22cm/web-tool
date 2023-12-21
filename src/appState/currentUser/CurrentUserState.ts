import axios from "axios";
import { Base64 } from "js-base64";
import { appStorage } from "../appStorage";
import { v4 as uuid } from "uuid";

export class UserDto {
    id = uuid();
    email = "";
    lastName = "";
    firstName = "";
    avatar = "/uploads/avatars/guest-user.png";

    static createObj = (src?: Partial<UserDto>): UserDto => {
        const obj = new UserDto();

        return {
            ...obj,
            ...src,
        };
    };
}
export class CurrentUserState extends UserDto {
    accessToken = appStorage.getItem("accessToken") ?? "";
    isLogin = false;
    id = "";
    lastName = "";
    firstName = "";
    avatar = "";
    email = "";

    constructor() {
        super();
        if (this.accessToken) {
            const payloadToken = JSON.parse(Base64.decode(this.accessToken.split(".")[1]) || "{}");
            axios.defaults.headers.common.Authorization = `Bearer ${this.accessToken}`;
            this.isLogin = true;
        }
        this.id = appStorage.getItem("id") ?? "";
        this.lastName = appStorage.getItem("lastName") ?? "";
        this.firstName = appStorage.getItem("firstName") ?? "";
        this.avatar = appStorage.getItem("avatar") ?? "/assets/avatars/no-avatar.png";
        this.email = appStorage.getItem("email") ?? "";
    }
}
