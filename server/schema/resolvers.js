const { AuthenticationError } = require('apollo-server-express');
const { User, FriendInvitation, Meal } = require('../models');
const { findOneAndRemove } = require('../models/userMongo');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      me: async (_, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id });
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },

      meFriendRequest: async (_, args, context)=>{
        if (context.user){
            return await FriendInvitation.find(
              {
                friendID: context.user._id
              }
            )
        }
        throw new AuthenticationError('Not logged in');
      },

      meFriends: async (_, args, context) =>{
        if (context.user){
          const userFriends = await User.findOne(
            {_id: context.user._id},
            { friends: true}
          )
          return userFriends
        }
        throw new AuthenticationError('Not logged in');
      }
    },
  
    Mutation: {
      addUser: async (_, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      
      login: async (_, {username, password}) => {
        const user = await User.findOne({username});
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },

      newFriend: async (_, {emailFriend}, context) => {
        if (context.user) {
          const friend = await User.findOne({
            email: emailFriend,
          });
          
          if(context.user._id === friend.id){
            throw new Error('You cannot invite to yourself');
          }
          // if the user already sent this invite, then show one error
          const findFriend = await FriendInvitation.findOne(
            {
              $and: [{userID: context.user._id}, {friendID: friend.id}]
            }
          )

          if(findFriend !== null){
            throw new Error('You have already sent the request for this person')
          }
  
          await FriendInvitation.create(
            {
              userID: context.user._id,
              friendUsername: context.user.username,
              friendID: friend.id,
              status: 'pending'
            }
          );
  
          return friend;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      deleteFriendRequest: async (_, {friendID}, context)=>{
        if(context.user){
            return await FriendInvitation.findOneAndRemove(
              {userID: friendID},
              {new: true}
            )
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      acceptFriendRequest: async (_, {friendUsername}, context)=>{
        
        if(context.user){
          // push user id to friends array
          const userUpdate = await User.findOneAndUpdate(
            { username: friendUsername },
            { $push: { friends: context.user.username } },
            { new: true }
          );
            
          // push friend id to the user friends array
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { friends: friendUsername} },
            { new: true }
          );

          await FriendInvitation.findOneAndRemove(
            {friendID: context.user._id},
            {new: true}
          )
          return userUpdate
        }

        throw new AuthenticationError('You need to be logged in!');
      },

      deleteFriend: async (_, {friendUsername}, context) =>{
        if(context.user){
            const deleteFriend = await User.findOneAndUpdate(
              {_id: context.user._id},
              {$pull: {friends: friendUsername}}
            )

            return deleteFriend
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      createOneMeal: async (_, {guestUsername, inputs}, context) =>{
        console.log(inputs)
        if(context.user){
          const newMeal = await Meal.create({
            principalUser: context.user._id,
            guestUsername: guestUsername,
            inputs: inputs
          })

          return newMeal
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      
      addRestaurant: async (_, {principalMealPreferences}, context) =>{
        if(context.user){
          const addRestaurant = await Meal.findOneAndUpdate(
            { principalUser: context.user._id },
            { $push: { principalMealPreferences: principalMealPreferences } },
            { new: true },
          ).sort({createdAt: -1});

          return addRestaurant
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;