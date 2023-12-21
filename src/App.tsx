import Axios from "axios";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AppState } from "./appState/AppState";
import { reducer } from "./appState/reducer";
import { AppContext } from "./containers/AppContext";

declare const SERVER_API_URI: string;
const baseURL = SERVER_API_URI ?? "http://localhost:3000/";

interface IProps {
    baseURL: string;
    initialState: AppState;
}

export const App = (props: IProps): JSX.Element => {
    Axios.defaults.baseURL = props.baseURL ?? "http://localhost:3000/";
    const [appState, dispatch] = React.useReducer(reducer, props.initialState);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <AppContext.Provider value={{ appState, dispatch }}>
                    <AppRoutes />
                </AppContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

render(<App baseURL={baseURL} initialState={new AppState()} />, document.getElementById("app"));
