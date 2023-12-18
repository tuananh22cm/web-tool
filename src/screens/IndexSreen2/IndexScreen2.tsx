import React, { useEffect, useState } from "react";
import axios from "axios";
import { renderColorStatus } from "../../utils/renderColorStatusCode";
export interface IData {
  url: string;
  status: number;
  pageTitle:string;
  indexed:boolean
}
const IndexScreen2: React.FC = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [listData, setListData] = useState<IData[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    const lastField = inputFields[inputFields.length - 1];
    if (lastField.value !== "") {
      setInputFields([...inputFields, { value: "" }]);
    }
  };

  const handleRemoveField = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const listUrl = inputFields.map(item=>item.value);
      const apiUrl = "http://localhost:3000/linkindex/check";
      axios
        .post(apiUrl,{listIndexProvided:listUrl})
        .then((response) => {
            console.log("response" +(response.data));
            setListData(response.data);
        })
        .catch((error) => {
          console.error("error when fetching data : " + error);
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveField(index)}>
                ❎
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          ➕
        </button>
        <button type="submit">Check</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">CompanyName</th>
            <th scope="col">url index</th>
            <th scope="col">status code</th>
            <th scope="col">Indexed</th>
          </tr>
        </thead>
        <tbody>
          {listData.map(({url,status,indexed},index) => {
            return (
              <tr className={`table-${renderColorStatus(status)}`}>
                <th scope="row">{index+1}</th>
                <td>draphony.de</td>
                <td>{url}</td>
                <td >{status}</td>
                <td>
                 {indexed ? "true" : "false"}
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
};
export default IndexScreen2;
