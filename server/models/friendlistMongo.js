const { Schema, model } = require('mongoose');

const friendSchema = new Schema({
        currentUserID: {
            type: Number,
            required: true,
        },
        // this is the username of the currently logged in user
        currentUsername:{
            type: String,
            required: true,
            maxlength: 70
        },
        // this is the id of the friend sending the friend request
        friendUserID: {
            type: Number,
        },
        // this is the status of the friendrequest
        friendRequestStatus:{
            type: Boolean,
            required: true,
        },
});
 

const FriendList = model('FriendList', friendSchema);

module.exports = FriendList;