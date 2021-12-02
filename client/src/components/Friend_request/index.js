import * as React from 'react';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

export default function RenderFriendRequest() {

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));
      
    const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<FavoriteIcon/>}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    }));
    
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));
      
    const [expanded, setExpanded] = React.useState('panel1');
    
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const useStyles = makeStyles({
        div_title: {
            '&:hover':{
                backgroundColor: '#808080',
                color: 'white'
            }
        },
        title:{
            fontWeight:'bold',
            fontFamily:'Arima Madurai, sans-serif',
        },
        text:{
            fontFamily:'Arima Madurai, sans-serif',
        }
    });

    const classes = useStyles();

    return (
        <>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className={classes.div_title} aria-controls="panel4d-content" id="panel4d-header">
                    <Typography className={classes.title}>Friend Requests</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}