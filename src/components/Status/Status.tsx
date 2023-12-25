import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Status.css";
import { Box, Button, Link, Modal, Typography } from "@mui/material";
export interface IMeta {
    url: string;
    statusCode: number;
}
interface StatusProps {
    img: string;
    pageTitle: string;
    url: string;
    metaDescription: string;
    metaData: Array<IMeta>;
}
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
const Status: React.FC<StatusProps> = ({ img, pageTitle, url, metaDescription, metaData }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Detail
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {pageTitle}
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography variant="subtitle1">{pageTitle}</Typography>
                        <Link href={`${url}`}>{url}</Link>
                        <Typography variant="body2" gutterBottom>
                            {metaDescription}
                        </Typography>
                        {metaData.length > 0 ? <p>Redirect chain 👇 </p> : <></>}
                    {metaData?.map((item: any) => (
                        <div>
                            <i style={{ color: "orange" }}>Code: {item.statusCode}</i>
                            <br />
                            Redirect to: <i style={{ color: "green" }}>{item.url}</i>
                        </div>
                    ))}
                    <p style={{ textAlign: "center" }}>
                        <i>Image screenshot 📷</i>
                    </p>
                    {img && <img className="img-detail" src={`data:image/png;base64,${img}`} />}
                    </Box>
                </Box>
            </Modal>

            {/* <Modal show={show} onHide={handleClose}>
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
                    {metaData?.map((item: any) => (
                        <div>
                            <i style={{ color: "orange" }}>Code: {item.statusCode}</i>
                            <br />
                            Redirect to: <i style={{ color: "green" }}>{item.url}</i>
                        </div>
                    ))}
                    <p style={{ textAlign: "center" }}>
                        <i>Image screenshot 📷</i>
                    </p>
                    {img && <img className="img-detail" src={`data:image/png;base64,${img}`} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    );
};

export default Status;
