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
      login: async (_, args) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(args.password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      newFriend: async (_, args, context) => {
        console.log(args)
        // if (context.user) {
          const newFriend = await User.findOne({
            email: args.email_friend,
          });
  
          await Friendlist.create(
            {
              userID: "61aa3fb8557cf38178718469",//context.user._id,
              friendID: newFriend.id,
              status: 'pending'
            }
          );
  
          return newFriend;
        // }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;