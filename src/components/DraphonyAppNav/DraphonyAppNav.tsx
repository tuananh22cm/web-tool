import {
    styled,
    Box,
    Grid,
    IconButton,
    Typography,
    List,
    ButtonBase,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Popper,
    ClickAwayListener,
    Paper,
    MenuList,
    MenuItem,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { MouseEventHandler, useEffect, useState } from "react";
import { Button, Container, Badge, Popover } from "react-bootstrap";
import { ClientRoutes, ServerRouters } from "../../Routes";
import { makeStyles } from "@mui/styles";

export interface DraphonyAppNavPath {
    title: string;
    path: string;
    to: MouseEventHandler<HTMLButtonElement>;

    /** addition path, that will mark this item as current. Useful when parent of subItems */
    additional?: Array<string>;
}

export interface DraphonyAppNavProps {
    items: Array<DraphonyAppNavPath>;

    /** Logo left to the app-bar */
    logo?: string | JSX.Element;

    /** Current location (pathname). No item is marked as current if omitted. */
    location?: string;

    /** Specify a secondary app-bar below app-bar. Used the path of items as key. */
    subItems?: {
        [path: string]: Array<DraphonyAppNavPath>;
    };

    onLogout: () => void;

    currentUser?: any;
    history?: any;
}

const DraphonyAppNavButton = styled(Button)({
    background: "none",
    color: "rgba(33,33,33,0.8)",
    borderRadius: "8px;",
});

const useStyles = makeStyles({
    labelButton: {
        "& .MuiButton-label": {
            fontWeight: 500,
        },
    },
});

declare const SERVER_SIO_ENDPOINT: string;
const baseUrlIO = SERVER_SIO_ENDPOINT ?? "http://localhost:3000/";

export const DraphonyAppNav = (props: DraphonyAppNavProps): JSX.Element => {
    // disabled Mui Button has a stronger css-bind => using inline styles
    const activeStyle = { color: "rgba(33, 33, 33, 0.35)" };
    const disabledStyle = { color: "rgba(33,33,33,0.8)", backgroundColor: "rgba(33, 33, 33, 0.05", borderRadius: "8px" };
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const onLogout = async () => {
        try {
            await axios.post(ServerRouters.logout);
            props.onLogout();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Box
                mb={props.subItems && props.location && props.subItems[props.location] ? 0 : 3}
                p={2}
                bgcolor="white"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                position="relative"
            >
                <Box display="flex" position="absolute" left={0} top={0} height="100%" alignItems="center" pl={1}>
                    <img src="/assets/PreCare-logo.svg" />
                </Box>
                <Container>
                    <Grid container>
                        {props.items.map((x, index) => (
                            <Grid item key={index}>
                                <Box pr={2} display="inline-block">
                                    {x.path === props.location ||
                                    x?.additional?.find((q) => props.location && props.location.indexOf(q.split("/")[1]) !== -1) ? (
                                        // eslint-disable-next-line no-inline-styles/no-inline-styles
                                        <DraphonyAppNavButton className={classes.labelButton} onClick={x.to} disabled style={disabledStyle}>
                                            {x.title}
                                        </DraphonyAppNavButton>
                                    ) : (
                                        // eslint-disable-next-line no-inline-styles/no-inline-styles
                                        <DraphonyAppNavButton className={classes.labelButton} onClick={x.to} style={activeStyle}>
                                            {x.title}
                                        </DraphonyAppNavButton>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box>
                    <Box style={{ marginLeft: "12px" }}>
                        <Avatar>AH</Avatar>
                        <Popper open={open} anchorEl={anchorEl}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Box component={Paper}>
                                    <MenuList>
                                        <MenuItem onClick={onLogout}>Logout</MenuItem>
                                    </MenuList>
                                </Box>
                            </ClickAwayListener>
                        </Popper>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
