import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./Status.css";
export interface IMeta {
  url:string;
  statusCode:number;
 }
interface StatusProps {
  img: string;
  pageTitle: string;
  url: string;
  metaDescription: string;
  metaData:Array<IMeta>;
}
const Status: React.FC<StatusProps> = ({
  img,
  pageTitle,
  url,
  metaDescription,
  metaData
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DETAIL Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{ color: "green" }}>{pageTitle}</h4>
          <a href={`${url}`}> {url}</a>
          <p>
            <b>Description</b>: {metaDescription}
          </p>
          {metaData.length > 0 ? <p>Redirect chain 👇 </p> : <></>}
          {metaData?.map((item:any)=><div>
             <i style={{color:'orange'}}>Code: {item.statusCode}</i><br />
           Redirect to: <i style={{color:'green'}}>{item.url}</i>
            </div>) }
          <p style={{ textAlign: "center" }}>
            <i>Image screenshot 📷</i>
          </p>
          {img && (
            <img className="img-detail" src={`data:image/png;base64,${img}`} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Status;
