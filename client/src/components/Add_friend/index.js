import * as React from 'react';
import { styled } from '@mui/material/styles';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import './style.css'

export default function RenderAddFriend() {

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
        expandIcon={<LocalDiningIcon/>}
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
        marginLeft: theme.spacing(0.8),
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
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary className={classes.div_title} aria-controls="panel3d-content" id="panel3d-header">
                    <Typography className={classes.title}>Add Friend</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="add_friend_invite">
                        <h4>Add your friend username</h4>
                        <input placeholder=" username..."/>
                        <div className="button_invite_friend">
                            <button>Send Invite</button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}