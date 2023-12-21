import { CurrentUserAction } from "./currentUser/CurrentUserAction";
import { UserAction } from "./users/userAction";

export type Action = UserAction | CurrentUserAction;
