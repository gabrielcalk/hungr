import * as React from 'react';
import { useState } from "react";
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_NEW_FRIEND } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function RenderAddFriend() {

    const [friendEmail, setfriendEmail] = useState('')
    const [newFriend, { error, data }] = useMutation(ADD_NEW_FRIEND);


    async function handleFormSubmit (event){
        event.preventDefault();
        try {
            console.log(friendEmail)
            const { data } = await newFriend({
              variables: {friendEmail},
            });

      
            Auth.login(data.addFriend.token);
          } catch (e) {
            console.error(e);
          }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="add_friend_invite">
                    <h4>Add your friend email</h4>
                    <input placeholder=" email..." type="email" value={friendEmail} onChange={(e) => setfriendEmail(e.target.value)}/>
                    <div className="button_invite_friend">
                        <button type="submit">Send Invite</button>
                    </div>
                </div>
            </form>
        </>
    );
}