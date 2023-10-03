import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordianData from './Accordian';
import { Stack } from '@mui/material';

export default function SimpleAccordion() {
  return (
    <div>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Popular Cuisines Near Me</Typography>
        </AccordionSummary>
   <Stack direction={'row'}>
   {
            AccordianData.map((value,index) =>{
                return(
                    <>
                    <AccordionDetails key={index}>
                        <Typography>
                          {value.cuisines}
                        </Typography>
                      </AccordionDetails>
                    </>
                )
            })
        }
   </Stack>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Popular Restaurant types near me</Typography>
        </AccordionSummary>

  <Stack direction={'row'}>
  {
            AccordianData.map((value,index) =>{
                return(
                    <>
                    <AccordionDetails key={index}>
                       <Typography>
                        {value.restaurents}
                      </Typography>
                    </AccordionDetails>
        
                    </>
                )
            })
        }
  </Stack>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Top Restaurant chains</Typography>
        </AccordionSummary>

   <Stack direction={'row'}>
   {
            AccordianData.map((value,index) =>{
                return(
                    <>
                    <AccordionDetails key={index}>
                      <Typography>
                       {value.Top}
                      </Typography>
                    </AccordionDetails>
        
                    </>
                )
            })
        }
   </Stack>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cities we deliver To</Typography>
        </AccordionSummary>
     <Stack direction={"row"}>
     {
            AccordianData.map((value,index) =>{
                return(
                    <>
                    
        <AccordionDetails key={index}>
          <Typography>{value.city}</Typography>
        </AccordionDetails>
        
                    </>
                )
            })
        }
     </Stack>
      </Accordion>
    </div>
  );
}