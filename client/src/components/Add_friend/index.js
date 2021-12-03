import * as React from 'react';
import { useState } from "react";
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_NEW_FRIEND } from '../../utils/mutations';

export default function RenderAddFriend() {

    const [friendEmail, setFriendEmail] = useState('')
    const [messageNewFriend, setMessageNewFriend] = useState('')
    const [newFriend, { error, data }] = useMutation(ADD_NEW_FRIEND);

    const friend = {emailFriend: friendEmail}

    async function handleFormSubmit (event){
        event.preventDefault();
        if(friendEmail.length === 0){
            setMessageNewFriend('Please, Provide One Email!')
        }
        try {
            console.log(friend)

            const { data } = await newFriend({
              variables: friend,
            });

            setFriendEmail('')
            setMessageNewFriend('Invitation Sent!')
          } catch (e) {
            console.error(e);
          }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="add_friend_invite">
                    <h4>Add your friend email</h4>
                    <input placeholder=" email..." type="email" value={friendEmail} onChange={(e) => setFriendEmail(e.target.value)}/>
                    <div className="button_invite_friend">
                        <button type="submit">Send Invite</button>
                    </div>
                    <div className="text_invite">
                        {messageNewFriend}
                    </div>
                </div>
            </form>
        </>
    );
}