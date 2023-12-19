import React, { useEffect, useState } from "react";
import axios from "axios";
import Status, { IMeta } from "../../components/Status/Status";
import { renderColorStatus } from "../../utils/renderColorStatusCode";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/esm/Button";
import Dropdown from 'react-bootstrap/Dropdown';


import CheckStatus from "../../components/CheckIndex/CheckStatus";
export interface IData {
    url: string;
    statusCode: number;
    pageTitle:string;
    screenshot:string;
    metaDescription:string;
    beRedirect:string[];
    metaData:Array<IMeta>;
  }
  const IndexScreen = () => {
    const [listData, setListData] = useState<IData[]>([]);
    useEffect(() => {
      const apiUrl = "http://localhost:3000/linkindex";
      axios
        .get(apiUrl)
        .then((response) => {
          setListData(response.data);
        })
        .catch((error) => {
          console.error("error when fetching data : " + error);
        });
    }, []);

    const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div>
        <div className="container">
      <h2 style={{ textAlign: "center" }}>Check Status Index From Google Console </h2> <CheckStatus/>
      <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /><br></br>
      <input type="text" placeholder="enter here" ></input>
      <Button variant="primary">Search</Button><br></br>
     <label>by code</label>

<select id="cars">
  <option value="200">200</option>
  <option value="301">301</option>
  <option value="302">302</option>
  <option value="404">404</option>
</select>



      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">CompanyName</th>
            <th scope="col">url index</th>
            <th scope="col"> code</th>
            <th scope="col">be redirect</th>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">screenshot</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {listData.map(({url,statusCode,screenshot,metaData,metaDescription,beRedirect,pageTitle},index) => {
            return (
              <tr className={`table-${renderColorStatus(statusCode)}`}>
                <th scope="row">{index+1}</th>
                <td>draphony.de</td>
                <td>{url}</td>
                <td >{statusCode}</td>
                <td >{beRedirect.map(item=><p>{item}</p>)}</td>
                <td >{pageTitle}</td>
                <td >{metaDescription}</td>
                {screenshot && (
                <img style={{width:'100px'}} className="img-detail" src={`data:image/png;base64,${screenshot}`} />
                )}
                <td>
                  <Status metaData={metaData} metaDescription={metaDescription} url={url} img={screenshot} pageTitle={pageTitle}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default IndexScreen;
