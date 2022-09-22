import React, { useState } from 'react'
import Footer from "../Footer/Footer";
import styles from './Terms.module.css';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Terms() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  
  
  return (
    <div>
    <Stack alignItems='center' p={2}>
      <Box width={{ xs: '100%', md: '50%' }}>
        <Typography variant='h4' fontWeight={'bold'}>
        Arterest Terms & Conditions
        </Typography>
        <p className={styles.subtitle}>
          <strong>Any doubt consult the list below</strong>
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
              Terms and Conditions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              These terms and conditions and the annexes explaining Arterest ecommerce services
             (hereinafter: "Terms and Conditions") govern the relationship between Arterest and
              the persons who use its services ("User Persons"). <br />
              <br />
              Users accept these Terms and Conditions from the moment they register on the Site
               and participate in it. When we have to make important changes in our services, we
                will publish the modifications 10 days in advance so that the Users can review them
                 and continue using the page without problems. In no case will they affect those that have
                  already been finalized.
              <br />
              <br />
              Users who have no outstanding obligations with Arterest or with other Users may terminate
               the relationship by cancelling their account.
              <br />
              <br />
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
              Capability
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Our services may be used by persons of legal age who have the legal capacity to contract.
               Minors, from 13 years of age, may only use their account with the authorization of the legal
                representative, who will be responsible for all actions and obligations arising from the use
                 of that account and who must ensure the responsible and appropriate use of it in attention to
                  the maturity of the minor who authorizes.
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
              Registration and Account
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Anyone wishing to use our services must complete the registration form with the required data.
              By completing it, he/she undertakes to do so in an accurate, precise and true manner and to keep his/her data
               always up to date. The User shall be solely responsible for the accuracy of his/her registration data. Without
               prejudice to the information provided in the form, we may request and/or consult additional information to
               corroborate the identity of the User.
             <br /> <br />
              The account is personal, unique and non-transferable, which means that under no circumstances may
              it be sold or transferred to another person. It is accessed with the personal security password chosen by the User,
              which must be kept strictly confidential. Therefore, the User shall be solely responsible for the operations carried
              out on his/her account. In case of detecting an unauthorized use of your account, you must immediately and reliably
              notify the administrator of Arterest. 
              </Typography>
            </AccordionDetails>
          </Accordion>
         
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
              Privacy Policy
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              In Arterest we make a responsible use of personal information, protecting the privacy
               of the Users who entrusted us with their data and taking the necessary measures to ensure security.
              </Typography>
            </AccordionDetails>
          </Accordion> 
          
          <Accordion //5
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel5bh-content'
              id='panel5bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              Penalties
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              In the event that the User breaches a law or the Terms and Conditions, we may warn, suspend,
               restrict or disable temporarily or permanently your account, without prejudice to other sanctions
                set out in the rules of use particular to the services of Arterest.
              </Typography>
            </AccordionDetails>
          </Accordion> 
          
          <Accordion 
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel6bh-content'
              id='panel6bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              Disclaimer
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Arterest shall be liable for any defect in the provision of its service, to the extent
               attributable to it and to the extent provided for in the laws in force.
              </Typography>
            </AccordionDetails>
          </Accordion> 
          
          <Accordion 
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel7bh-content'
              id='panel7bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              Fees
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Arterest may charge for its services and the User agrees to pay for them on time.
              <br />
              <br />
              We may modify or eliminate the rates at any time with the due notice established in clause
               2 of these Terms and Conditions. In the same way, we may modify the rates temporarily for promotions
                in favor of the Users.
              <br />
              <br />
              The User authorizes Arterest to withhold and/or debit existing and/or future funds from his/her account
               and/or the bank accounts he/she has registered therein, to settle unpaid fees or any other debt
                he/she may have.
              <br />
              <br />
              For details of the rates for each service, Users should consult the corresponding terms and conditions.
              <br />
              <br />
              In all cases, the invoice will be issued in accordance with the fiscal data that the individuals
               have charged to their account.           
              </Typography>
            </AccordionDetails>
          </Accordion> 
          
          <Accordion 
            expanded={expanded === 'panel8'}
            onChange={handleChange('panel8')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel8bh-content'
              id='panel8bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              Intellectual Property
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Arterest and/or its related companies own all intellectual property rights over their sites, all content,
               services, products, trademarks, trade names, logos, designs, images, advertising phrases, copyrights, domains,
                computer programs, codes, developments, software, databases, information, technology, patents and utility models,
                 industrial designs and models, trade secrets, among others ("Intellectual Property") and are protected by national
                  and international laws.
              <br />
              <br />
              Although Arterest grants permission to use its products and services as provided in the Terms and Conditions,
               this does not imply an authorization to use its Intellectual Property, except with the express prior consent
                of Arterest and/or its related companies.
              </Typography>
            </AccordionDetails>
          </Accordion> 
          
          <Accordion //9
            expanded={expanded === 'panel9'}
            onChange={handleChange('panel9')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                  }}
                />
              }
              aria-controls='panel9bh-content'
              id='panel9bh-header'
              sx={{
                backgroundColor: '#e90606',
                color: 'white',
              }}
            >
              <Typography fontWeight={'bold'}>
              Jurisdiction and Applicable Law
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              These Terms and Conditions are governed by Argentine law. Any dispute arising from their application,
               interpretation, execution or validity shall be resolved by the competent ordinary national courts,
                located in the City of Buenos Aires, except as specifically provided by public policy rules, such as,
                 for example, legislation relating to the Consumer. For all purposes related to these
                  Terms and Conditions and the use of the site, Arterest.
              </Typography>
            </AccordionDetails>
          </Accordion> 
        </div>
      </Box>
    </Stack>
    
       <div>
      <Footer class="pt-0" />
      </div>
    </div>
  )
}