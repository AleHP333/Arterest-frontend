import React, { useState } from 'react'
import styles from './FAQ.module.css'
import Footer from "../Footer/Footer";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FAQ() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className ="cont">

   
    <Stack alignItems='center' p={2}>
      <Box width={{ xs: '100%', md: '50%' }}>
        <Typography variant='h4' fontWeight={'bold'}>
         FAQ
        </Typography>
        <p className={styles.subtitle}>
          <strong>About Arterest</strong>
        </p>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls='panel1bh-content'
              id='panel1bh-header'
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              What are the benefits of Arterest membership?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              By being a member of Arterest you will be able to review, rate and mark digital works as favorites, for when you decide to buy them. In addition, by completing your profile you will be able to see your purchased artworks and everything related to your tastes and interests.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel2bh-content'
              id='panel2bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              How do I become an Arterest member?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              It's very simple! By registering you are already a member. You will only need to enter your name and surname, your email and a password, you can also do it by third parties. Registering is totally free!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel3bh-content'
              id='panel3bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              How do I cancel my subscription?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              If at any time you want to stop being linked, you will be able to unsubscribe by logging in to: My profile -
                "Edit profile" - "Unsubscribe". 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <p className={styles.subtitle}>
            <strong>Store</strong>
          </p>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel4bh-content'
              id='panel4bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              How do I make a purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {' '}
                If this is your first purchase, you will need to register by filling out your email, first name, last name, and password. If you are already registered you will simply need to log in. Once you have added the works you like in the cart, the steps to follow are as follows are as follows: Click on the Buy button. In the next next step you will be able to see the billing information, Finally, Click on the Checkout button. And that's it. Arterest is fast and intuitive!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Stack>
    <div className= "distance">
      <Footer/>
    </div>
    </div>

  )
}