import * as React from 'react';
import { styled } from '@mui/material/styles';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_FRIENDS_REQUESTS} from '../../utils/queries';
import { DELETE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST } from '../../utils/mutations';
import './style.css'


export default function RenderFriendRequest() {
    // Letting the user decline(delete) the request
    const [deleteFriendRequest] = useMutation(DELETE_FRIEND_REQUEST)

    // Letting the user accept the request
    const [acceptFriendRequest] = useMutation(ACCEPT_FRIEND_REQUEST)

    // Getting the friends requests
    const {data} = useQuery(QUERY_FRIENDS_REQUESTS)
    const friendsRequestData = data?.meFriendRequest || {}

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

    async function handleDeleteFriendRequest(friendID){
        try{
            await deleteFriendRequest({
                variables: {friendID: friendID}
            })
            window.location.replace('/user')
        }catch(e){
            console.error(e)
        }
    }

    async function handleAcceptFriendRequest(friendUsername){
        try{

            console.log(friendUsername)
            await acceptFriendRequest({
                variables: {friendUsername}
            })
            window.location.replace('/user')
        }catch(e){
            console.error(e)
        }
    }

    return (
        <>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className={classes.div_title} aria-controls="panel4d-content" id="panel4d-header">
                    <Typography className={classes.title}>Friends</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {friendsRequestData.length > 0 ?  friendsRequestData.map((friend) =>{
                        return(
                            <div className="each_request_friend" key={friend.friendID}>
                                <h4>{friend.friendUsername}</h4>
                                <div>
                                    {/* Remeber: user ID is who send the invite */}
                                    <button className="button_request_friend" onClick={() => handleAcceptFriendRequest(friend.friendUsername)}>Accept</button>
                                    <button className="button_request_friend" onClick={() => handleDeleteFriendRequest(friend.userID)}>Decline</button>
                                </div>
                            </div>
                        );
                    }) :
                        <h4>No friends requests were found</h4>
                    }
                </AccordionDetails>
            </Accordion>
        </>
    );
}