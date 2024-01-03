import { Box, Button, Container } from '@mui/material'
import React from 'react'

const AccountScreen = () => {
  return (
    <Container>
      <Box>account 1 <Button>Check Status</Button> <i style={{color:'green'}}>active</i></Box>
      <Box>account 2 <Button>Check Status</Button> <i style={{color:'red'}}>not active</i></Box>
      <Box>account 3 <Button>Check Status</Button> <i style={{color:'red'}}>not active</i></Box>
      <p>check status and get amount of message also</p>
    </Container>
  )
}

export default AccountScreen