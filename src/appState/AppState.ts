import { CurrentUserState } from "./currentUser/CurrentUserState";
import { CurrentUserStore } from "./currentUser/currentUser";
import { UserStore } from "./users/users";

export class AppState {
    currentUser: CurrentUserStore = new CurrentUserState();
    users: UserStore = [];
}
