 
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { ClientRoutes } from "./Routes";
import { DraphonyAppNav, DraphonyAppNavPath } from "./components/DraphonyAppNav/DraphonyAppNav";
import { IPageProps, connectContainer } from "./containers/ContainerBase";
import { CurrentUserActionType } from "./appState/currentUser/CurrentUserAction";
import { DraphonyAppFooter } from "./components/DraphonyAppFooter/DraphonyAppFooter";
import IndexScreen from "./containers/IndexScreen/IndexScreen";
import MailScreen from "./containers/MailScreen/MailScreen";
import LogsScreen from "./containers/LogsScreen/LogsScreen";
import QueueScreen from "./containers/QueueScreen/QueueScreen";
import HomeScreen from "./containers/HomeScreen/HomeScreen";

declare const BUILD_VERSION: string;
declare const BUILD_DATETIMESTAMP: string;

interface IState {
    test: string;
}

class AppRoutesRaw extends React.Component<IPageProps, IState> {
    render() {
        const items: Array<DraphonyAppNavPath> = [
            { title: "Home", path: ClientRoutes.home, additional: [ClientRoutes.home] },
            { title: "Index", path: ClientRoutes.index, additional: [ClientRoutes.index] },
            { title: "Mail", path: ClientRoutes.mail, additional: [ClientRoutes.mail] },
            { title: "Queue", path: ClientRoutes.queue, additional: [ClientRoutes.queue] },
            { title: "Setting", path: ClientRoutes.setting, additional: [ClientRoutes.setting] },
            { title: "Logs", path: ClientRoutes.log, additional: [ClientRoutes.log] },
        ].map((x) => ({
            ...x,
            to: () => this.props.history.push(x.path),
        }));

        const pathName = this.props.location.pathname;
        const paths = pathName.split("/");
        const subItemsCategory = {
            [this.checkPathName(pathName)]: [
                { title: "Video", to: () => this.props.history.push(`/${paths[1]}/${paths[2]}/video`), path: `/${paths[1]}/${paths[2]}/video` },
                { title: "Live stream", to: () => this.props.history.push(`/${paths[1]}/${paths[2]}/stream`), path: `/${paths[1]}/${paths[2]}/stream` },
            ],
        };

        const hasSignature = new URLSearchParams(this.props.location.search).has("signature");
        const hasAuth = this.props.location.pathname.search("auth") !== -1;
        const isCallVideo = this.props.location.pathname.search("video-call") !== -1;
        const disabledAppNav = hasSignature || isCallVideo || hasAuth;

        // Without passing the history object, this.props.history.push outside a <Route /> will not rerender!
        return (
            <Router history={this.props.history}>
                {disabledAppNav ? null : (
                    <DraphonyAppNav
                        items={items}
                        location={this.props.history.location.pathname}
                        onLogout={() => this.props.dispatch({ type: CurrentUserActionType.logout })}
                        currentUser={this.props.appState.currentUser}
                        history={this.props.history}
                    />
                )}
                <Switch>
                    <Route exact path={ClientRoutes.home} component={HomeScreen} />
                    <Route exact path={ClientRoutes.index} component={IndexScreen} />
                    <Route exact path={ClientRoutes.mail} component={MailScreen} />
                    <Route exact path={ClientRoutes.log} component={LogsScreen} />
                    <Route exact path={ClientRoutes.queue} component={QueueScreen} />
                    <Route exact path={ClientRoutes.setting} component={QueueScreen} />
                    <Redirect exact from={ClientRoutes.home} to={ClientRoutes.home} />
                </Switch>

                {disabledAppNav ? null : <DraphonyAppFooter appName="zeroti" build={BUILD_VERSION} date={BUILD_DATETIMESTAMP} />}
            </Router>
        );
    }

    private checkPathName = (pathName: string) => {
        if (pathName.search("categories") !== -1 && (pathName.search("video") !== -1 || pathName.search("stream") !== -1)) {
            return pathName;
        }

        return "no-route";
    };
}

export const AppRoutes = connectContainer(AppRoutesRaw as any);
