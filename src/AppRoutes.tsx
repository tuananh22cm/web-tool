 
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { ClientRoutes } from "./Routes";
import { DraphonyAppNav, DraphonyAppNavPath } from "./components/DraphonyAppNav/DraphonyAppNav";
import { IPageProps, connectContainer } from "./containers/ContainerBase";
import { CurrentUserActionType } from "./appState/currentUser/CurrentUserAction";
import { DraphonyAppFooter } from "./components/DraphonyAppFooter/DraphonyAppFooter";
import AccountScreen from "./containers/AccountScreen/AccountScreen";
import MailScreen from "./containers/MailScreen/MailScreen";
import SeedingScreen from "./containers/SeedingScreen/SeedingScreen";
import ScrollScreen from "./containers/ScrollScreen/ScrollScreen";
import LinkScreen from "./containers/LinkScreen/LinkScreen";
import ReactScreen from "./containers/ReactScreen/ReactScreen";

declare const BUILD_VERSION: string;
declare const BUILD_DATETIMESTAMP: string;

interface IState {
    test: string;
}

class AppRoutesRaw extends React.Component<IPageProps, IState> {
    render() {
        const items: Array<DraphonyAppNavPath> = [
            { title: "Home", path: ClientRoutes.home, additional: [ClientRoutes.home] },
            { title: "Seeding", path: ClientRoutes.seeding, additional: [ClientRoutes.seeding] },
            { title: "Mail", path: ClientRoutes.mail, additional: [ClientRoutes.mail] },
            { title: "Scroll", path: ClientRoutes.scroll, additional: [ClientRoutes.scroll] },
            { title: "Link", path: ClientRoutes.link, additional: [ClientRoutes.link] },
            { title: "React", path: ClientRoutes.react, additional: [ClientRoutes.react] },
            { title: "Account", path: ClientRoutes.account, additional: [ClientRoutes.account] },
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
                    <Route exact path={ClientRoutes.react} component={ReactScreen} />
                    <Route exact path={ClientRoutes.account} component={AccountScreen} />
                    <Route exact path={ClientRoutes.mail} component={MailScreen} />
                    <Route exact path={ClientRoutes.seeding} component={SeedingScreen} />
                    <Route exact path={ClientRoutes.scroll} component={ScrollScreen} />
                    <Route exact path={ClientRoutes.link} component={LinkScreen} />
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
