import React, { useEffect, useState } from "react";
import axios from "axios";
import Status, { IMeta } from "../../components/Status/Status";
import { renderColorStatus } from "../../utils/renderColorStatusCode";
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
  return (
    <div>
        <div className="container">
      <h2 style={{ textAlign: "center" }}>Check Status Index From Google Console </h2>
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
