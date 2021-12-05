const { Schema, model } = require('mongoose');

const friendInvitationsSchema = new Schema({
        userID:{
            type: String,
            required: true
        },
        friendUsername:{
            type: String,
            required: true
        },
        friendID: {
            type: String,
            required: true,
        },
        status:{
            type: String,
            required: true,
        },
});
 

const FriendInvitation = model('FriendList', friendInvitationsSchema);

module.exports = FriendInvitation;