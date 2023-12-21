import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

export interface IDraphonyAppFooterProps {
    appName: string;
    build?: string;
    date?: string;
}

export const DraphonyAppFooter = (props: IDraphonyAppFooterProps): JSX.Element => {
    return (
        <Box marginTop={12} marginBottom={4} textAlign="center" component={Container}>
            <img src="/assets/favicon-512.png" height="58px" />
            <Box mt={1}>
                <Typography variant="body1">
                    <strong>{props.appName}</strong> {props.build}
                </Typography>
                {props.date && <Typography variant="body2">{props.date}</Typography>}
            </Box>
        </Box>
    );
};
