import { Box, Container, Typography, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component="footer">
      <Container sx={{ py: 3, backgroundColor: 'red', textAlign: 'center' }}>
        <Typography variant="body2" color="black">
          ©{' '}
          <Link
            href="mailto:sachinrahangdale@gmail.com"
            underline="none"
            color="inherit"
          >
            Sachin Rahangdale
          </Link>
          , All Rights Reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
