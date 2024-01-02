import React, { useEffect, useState } from "react";
import axios from "axios";
import Status, { IMeta } from "../../components/Status/Status";
import { renderColorStatus } from "../../utils/renderColorStatusCode";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styled } from "@mui/material/styles";
import { RefreshCcw} from "lucide-react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    tableCellClasses,
} from "@mui/material";
import Input from "@mui/material/Input";
export interface IData {
    url: string;
    statusCode: number;
    pageTitle: string;
    screenshot: string;
    metaDescription: string;
    beRedirect: string[];
    metaData: Array<IMeta>;
}
const IndexScreen: React.FC = () => {
    const [listData, setListData] = useState<IData[]>([]);
    const [timeSnapshot, setTimeSnapshot] = useState();
    useEffect(() => {
        const apiUrl = "http://localhost:3000/linkindex";
        axios
            .get(apiUrl)
            .then((response) => {
                setListData(response.data);
                setTimeSnapshot(response.data[0].createdAt);
            })
            .catch((error) => {
                console.error("error when fetching data : " + error);
            });
    }, []);

    const [statuscode, setStatusCode] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(new Date(new Date("Mon Sep 18 2023 08:50:58 GMT+0700 (Indochina Time)").toISOString()));
    const [endDate, setEndDate] = useState<Date | null>(new Date(new Date("Mon Dec 18 2023 08:50:58 GMT+0700 (Indochina Time)").toISOString()));

    const handleSelectDate = () => {
        const apiUrl = "http://localhost:3000/linkindex";
        axios
            .post(apiUrl, {
                startDate,
                endDate,
            })
            .then((response) => {
                setListData(response.data);
                setTimeSnapshot(response.data[0].createdAt);
            })
            .catch((error) => {
                console.error("error when fetching data : " + error);
            });
    };
    const handleInputChange = (event: any) => {
        setSearchQuery(event.target.value);
    };
    const handleSearch = () => {
        const apiSearch = "http://localhost:3000/linkindex/search";
        const queryParams = {
            q: searchQuery,
        };
        axios
            .get(apiSearch, { params: queryParams })
            .then((response) => {
                setListData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        setSearchQuery("");
    };
    const handleStatusChange = (e: any) => {
        setStatusCode(e.target.value);
        const apiSearch = "http://localhost:3000/linkindex/filter";
        const queryParams = {
            q: e.target.value,
        };
        axios
            .get(apiSearch, { params: queryParams })
            .then((response) => {
                setListData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleSetTimeout = (e: any) => {
        const callApi = () => {
            const apiUrl = "http://localhost:3000/linkindex";
            axios
                .post(apiUrl, {
                    startDate,
                    endDate,
                })
                .then((response) => {
                    setListData(response.data);
                    setTimeSnapshot(response.data[0].createdAt);
                })
                .catch((error) => {
                    console.error("error when fetching data : " + error);
                });
        };
        setInterval(callApi, Number(e.target.value) * 60 * 1000);
    };
    function formatDateToDateTimeString(date:any) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,

        },
    }));
    const handleRefresh = ()=>{
        const apiUrl = "http://localhost:3000/linkindex";
        axios
          .post(apiUrl,{
            startDate,
            endDate
          })
          .then((response) => {
            setListData(response.data);
            setTimeSnapshot(response.data[0].createdAt);
          })
          .catch((error) => {
            console.error("error when fetching data : " + error);
          });
      }
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Check Status Index From Google Console
            </Typography>
            <Stack direction={"row"} sx={{ marginBottom: "20px" }}>
                <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                <DatePicker showIcon selected={endDate} onChange={(date) => setEndDate(date)} />
                <Button onClick={handleSelectDate}>Query</Button>
            </Stack>
            <Stack sx={{ marginBottom: "20px" }} justifyContent="space-between" direction={"row"}>
                <Stack direction={"row"}>
                    <Box sx={{ minWidth: 420 }}>
                        <FormControl fullWidth>
                            <InputLabel id="statuscode">code</InputLabel>
                            <Select labelId="statuscode-label" id="statuscode" value={statuscode} onChange={handleStatusChange} label="statuscode">
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={201}>201</MenuItem>
                                <MenuItem value={301}>301</MenuItem>
                                <MenuItem value={302}>302</MenuItem>
                                <MenuItem value={404}>404</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                <Stack direction={"row"}>
                    <Input fullWidth type="text" onChange={handleInputChange} placeholder="Enter url"></Input>
                    <Button id="index-search" onClick={handleSearch} variant="contained">
                        Search
                    </Button>
                </Stack>
            
            </Stack>
            <Stack direction={'row'}>
          <p>Last time Snapshot : <span>{formatDateToDateTimeString(new Date(timeSnapshot+""))}</span> 
          <Button  variant="contained" onClick={handleRefresh} ><RefreshCcw color="#333" strokeWidth={1.75} /></Button></p>
            </Stack>
            <TableContainer component={Paper}>
                <Table aria-aria-label="index">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">#</StyledTableCell>
                            <StyledTableCell align="left">company name</StyledTableCell>
                            <StyledTableCell align="left">url</StyledTableCell>
                            <StyledTableCell align="left">status code</StyledTableCell>
                            <StyledTableCell align="left">redirect by</StyledTableCell>
                            <StyledTableCell align="left">title</StyledTableCell>
                            <StyledTableCell align="left">description</StyledTableCell>
                            <StyledTableCell align="left">screenshot</StyledTableCell>
                            <StyledTableCell align="left">action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listData.map(({ url, statusCode, screenshot, metaData, metaDescription, beRedirect, pageTitle }, index) => {
                            return (
                                <tr style={{background:`${renderColorStatus(statusCode)}`}}>
                                    <StyledTableCell scope="row">{index + 1}</StyledTableCell>
                                    <StyledTableCell>Draphony</StyledTableCell>
                                    <StyledTableCell>{url}</StyledTableCell>
                                    <StyledTableCell>{statusCode}</StyledTableCell>
                                    <StyledTableCell>
                                        {beRedirect.map((item) => (
                                            <p>{item}</p>
                                        ))}
                                    </StyledTableCell>
                                    <StyledTableCell>{pageTitle}</StyledTableCell>
                                    <StyledTableCell>{metaDescription}</StyledTableCell>
                                    {screenshot && <img style={{ width: "100px" }} className="img-detail" src={`data:image/png;base64,${screenshot}`} />}
                                    <StyledTableCell>
                                        <Status metaData={metaData} metaDescription={metaDescription} url={url} img={screenshot} pageTitle={pageTitle} />
                                    </StyledTableCell>
                                </tr>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default IndexScreen;
