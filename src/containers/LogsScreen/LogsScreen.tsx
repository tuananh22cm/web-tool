import React from "react";

const LogsScreen:React.FC = () => {
    return (
        <div className="container">
            <h1>Log Screen</h1>
            <div>
                <p> we are In progress ................</p>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default LogsScreen;
