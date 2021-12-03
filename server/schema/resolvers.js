const { AuthenticationError } = require('apollo-server-express');
const { User, Friendlist } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
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
  
          await Friendlist.create(
            {
              userID: context.user._id,
              friendID: friend.id,
              status: 'pending'
            }
          );
  
          return friend;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;