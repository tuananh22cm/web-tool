import React, { useEffect, useState } from "react";
import axios from "axios";
import Status, { IMeta } from "../../components/Status/Status";
import { renderColorStatus } from "../../utils/renderColorStatusCode";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/esm/Button";
import Dropdown from 'react-bootstrap/Dropdown';


export interface IData {
    url: string;
    statusCode: number;
    pageTitle:string;
    screenshot:string;
    metaDescription:string;
    metaData:Array<IMeta>;
  }
  const IndexScreen = () => {
    const [listData, setListData] = useState<IData[]>([]);
    useEffect(() => {
      const apiUrl = "http://localhost:3000/linkindex";
      axios
        .get(apiUrl)
        .then((response) => {
            console.log(response.data[0].metaData);
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
      <h2 style={{ textAlign: "center" }}>Check Status Index From Google Console </h2>
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
      {/* <DatePicker selected={startDate}    onChange={(date: Date | null) => setStartDate(date)} />
      <DatePicker selected={startDate}    onChange={(date: Date | null) => setStartDate(date)} />
      <DatePicker selected={startDate}    onChange={(date: Date | null) => setStartDate(date)} /><br></br> */}
      <input type="text" placeholder="enter here" ></input>
      <Button variant="primary">Search</Button><br></br>
      {/* <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
       By code
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">200</Dropdown.Item>
        <Dropdown.Item href="#/action-2">301</Dropdown.Item>
        <Dropdown.Item href="#/action-3">302</Dropdown.Item>
        <Dropdown.Item href="#/action-3">404</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
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
            <th scope="col">status code</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {listData.map(({url,statusCode,screenshot,metaData,metaDescription,pageTitle},index) => {
            return (
              <tr className={`table-${renderColorStatus(statusCode)}`}>
                <th scope="row">{index+1}</th>
                <td>draphony.de</td>
                <td>{url}</td>
                <td >{statusCode}</td>
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
