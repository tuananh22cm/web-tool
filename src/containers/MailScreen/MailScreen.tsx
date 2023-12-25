import { Box, Container, Grid, Typography, ListItem, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import  React,{useState} from "react";

const MailScreen:React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('Weekly report from Zeroti by Draphony');
  const [description, setDescription] = useState('Dear my customer , this is the weekly report from Zeroti provide result about last 6 months');
  
  const handleChangeFrom = (event: any) => {
    setFrom(event.target.value as string);
  };
    return (
        <Container>
            <Typography variant="h4">Mail Report 📩</Typography>
            <Grid container marginTop={4} spacing={2}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="mailfrom-select-label">From</InputLabel>
                        <Select labelId="mailfrom-select-label" id="mailfrom-input" value={from} label="mailfrom" onChange={handleChangeFrom}>
                            <MenuItem value={"tuananka5@gmail.com"}>tuananka5@gmail.com</MenuItem>
                            <MenuItem value={"tuan.anh.tran@draphony.com"}>tuan.anh.tran@draphony.com</MenuItem>
                            <MenuItem value={"Doan.Dong.Bui@draphony.com"}>Doan.Dong.Bui@draphony.com</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth id="mailto" label="To" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth id="subject" value={subject} label="subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth id="description" value={description} label="description" variant="outlined" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MailScreen;
