const { Schema, model } = require('mongoose');

const friendSchema = new Schema({
        userID:{
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
 

const FriendList = model('FriendList', friendSchema);

module.exports = FriendList;