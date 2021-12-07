import * as React from 'react';
import { useState } from "react";
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_NEW_FRIEND } from '../../utils/mutations';
import { experimentalStyled } from '@mui/material';

export default function RenderAddFriend() {

    const [friendEmail, setFriendEmail] = useState('')
    const [messageNewFriend, setMessageNewFriend] = useState('')
    const [errorInvite, setErrorInvite] = useState('')
    const [newFriend, { error, data }] = useMutation(ADD_NEW_FRIEND);

    const friend = {emailFriend: friendEmail}

    async function handleFormSubmit (event){
        event.preventDefault();
        if(friendEmail.length === 0){
            setMessageNewFriend('Please, Provide One Email!')
            setErrorInvite('')
        } else {
            try {
                console.log(friend)

                const { data } = await newFriend({
                variables: friend,
                });

                setFriendEmail('')
                setMessageNewFriend('Invitation Sent!')
            } catch (e) {
                console.error(e);
                setMessageNewFriend('')
                setErrorInvite('The email may be invalid, or the user does not exist')
            }
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="add_friend_invite">
                    <h4>Invite a friend (email)</h4>
                    <input className="input_add_friend" placeholder=" email..." type="email" value={friendEmail} onChange={(e) => setFriendEmail(e.target.value)}/>
                    
                    <button className="button_invite_friend" type="submit">Send Invite</button>
                    
                    <div className="text_invite">
                        {messageNewFriend}
                        {errorInvite}
                    </div>
                </div>
            </form>
        </>
    );
}