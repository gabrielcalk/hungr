import * as React from 'react';
import { styled } from '@mui/material/styles';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useQuery} from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_RESTAURANTS_REQUEST} from '../../utils/queries';

export default function RenderRestaurantRequest() {

    const {data} = useQuery(QUERY_RESTAURANTS_REQUEST)
    const restaurantsRequestData = data?.meRestaurantsRequests || {}
    console.log(restaurantsRequestData)

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
            marginTop: '10px',
        },
        text:{
            fontFamily:'Arima Madurai, sans-serif',
        }
    });

    const classes = useStyles();

    function handleMeal(inputs, id, userPreferences){
        localStorage.setItem('id', id);
        localStorage.setItem('inputs', inputs)
        localStorage.setItem('principalMealPreferences', userPreferences)
        window.location.replace('/preferences')
    }

    return (
        <>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className={classes.div_title} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography className={classes.title} fontWeight='bold' fontFamily='Arima Madurai, sans-serif'>Restaurant Requests</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {restaurantsRequestData.length ? restaurantsRequestData.map((request) =>{
                        return(
                            <div key={request._id}>
                                <h4>{request.principalUser} invited you to one meal</h4>
                                <Link className="footerItem" to="/preferences">
                                <button onClick={() => handleMeal(request.inputs, request._id, request.principalMealPreferences)}>Click here to see more about it</button>
                                </Link>
                            </div>
                        )
                    }): 
                        <h4>No restaurant requests were found</h4>
                    }
                </AccordionDetails>
            </Accordion>
        </>
    );
}