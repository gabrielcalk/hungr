//import user model
const { User } = require('../models');
//import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
      const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
      if (!foundUser) {
        return res.status(400).json({ message: 'User cannot be found please check your information' });
      }

      res.json(foundUser);
    },

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
      const user = await User.create(body);
  
      if (!user) {
        return res.status(400).json({ message: 'Whoopsie Something Went Wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    },

     // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Sorry can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'The password entered does not match our records' });
    }
    const token = signToken(user);
    res.json({ token, user });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorret password' });
    }
    
  },

  // add a friend from 'friendslist'
  async addFriend({ body }, res) {
    console.log(body);
    // try {
    //   const updatedUser = await User.findOneAndUpdate(
    //     { _id: user._id },
    //     { $addToSet: { userFriend: body } },
    //     { new: true, runValidators: true }
    //   );
    //   return res.json(updatedUser);
    // } catch (err) {
    //   console.log(err);
    //   return res.status(400).json(err);
    // }
  },
  // remove a friend from `friendlist`
  async deleteFriend({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedFriends: { friendId: params.friendId } } },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};