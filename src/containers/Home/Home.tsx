import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import * as Mui from "@mui/material";
import Nav from "react-bootstrap/Nav";
import ProgressBar from "react-bootstrap/ProgressBar";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
    const [progressValue, setProgressValue] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const fetchDataFromDatabase = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/123");
            const data = response.data;
            const progress = 50;
            const total = 100;
            setProgressValue(progress);
            setTotalValue(total);
        } catch (error) {
            console.error("Error fetching data from database:", error);
        }
    };

    useEffect(() => {
        fetchDataFromDatabase();
    }, []);

    const renderProgressBar = (progress: number, total: number) => {
        const variant = "red";

        const progressBarStyle = {
            backgroundColor: variant === "red" ? "blue" : "màuMặcĐịnh",
        };

        return (
            <ProgressBar style={progressBarStyle} now={(progress / total) * 100}>
                {`${progress}/${total}`}
            </ProgressBar>
        );
    };

    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        <h3>
                            <b>Zeroti-Botseo</b>
                        </h3>
                    </th>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-sharp fa-solid fa-bell"></i>
                </tr>
            </thead>
            <div className="body" style={{ width: "100%" }}>
                <div className="left" style={{ width: "10%", float: "left" }}>
                    <ul>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/home">Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/logs">Logs</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/queue">Queue</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/index">Index</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/setting">Setting</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant="danger" style={{ width: "110px" }}>
                                <Link to="/logout">Logout</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="center" style={{ width: "70%", float: "left" }}>
                    <p>
                        Home <ProgressBar variant="warning" now={(progressValue / totalValue) * 100} label={`${(progressValue / totalValue) * 100}%`} />
                    </p>
                    <p>
                        Page1 <ProgressBar variant="warning" now={(progressValue / totalValue) * 100} label={`${(progressValue / totalValue) * 100}%`} />
                    </p>

                    <h5>
                        <b>Key Word(Top 10)</b>
                    </h5>
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Month</th>
                            <th>Azure devops</th>
                            <th>Keyword2</th>
                            <th>Keyword3</th>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>d</td>
                            <td>e</td>
                            <td>f</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>g</td>
                            <td>h</td>
                            <td>i</td>
                        </tr>
                    </table>
                </div>
                <div className="right" style={{ width: "20%", float: "left" }}>
                    <div className="chart" style={{ justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "30%" }}>
                        {" "}
                        <PieChart
                            data={[
                                { title: "One", value: 10, color: "blue" },
                                { title: "Two", value: 15, color: "red" },
                                { title: "Three", value: 20, color: "yellow" },
                            ]}
                        />
                        ;
                    </div>
                </div>
            </div>
        </Table>
    );
}
export default Home;
