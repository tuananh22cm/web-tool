import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface IData {
  indexProvided: string;
  indexRedirect: string;
}
const CheckStatus: React.FC<any> = ({}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [listData, setListData] = useState<IData[]>([]);
  const handleSendMail = async ()=>{
    console.log("listData"+listData);
     axios.post("http://localhost:3000/linkindex/mail",listData).then(data => console.log("send mail successfully"));
  };
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
    const listUrl = inputFields.map((item) => item.value);
    const apiUrl = "http://localhost:3000/linkindex/";
    axios
      .post(apiUrl, { indexProvided: listUrl })
      .then((response) => {
        console.log("response" + response.data);
        setListData(response.data);
      })
      .catch((error) => {
        console.error("error when fetching data : " + error);
      });
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Check url
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please provided url you want to check</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {inputFields.map((field, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleChange(index, e)}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                  >
                    ❎
                  </button>
                )}
              </div>
            ))}
            <button type="submit">Check</button>
          </form>
          {listData.length > 0 ? (
            <table className="table" width={"1000px"}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">CompanyName</th>
                  <th scope="col">url redirect</th>
                  <th scope="col">provided url</th>
                </tr>
              </thead>
              <tbody>
                {listData.map(({ indexProvided, indexRedirect }, index) => {
                  return (
                    <tr className="table-warning">
                      <th scope="row">{index + 1}</th>
                      <td>draphony.de</td>
                      <td>{indexRedirect}</td>
                      <td>{indexProvided}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>Not found</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div style={{width:'100%',display:'flex',justifyContent:"space-between"}}>
            <Button variant="primary" onClick={handleSendMail}>
              Send Mail
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckStatus;
