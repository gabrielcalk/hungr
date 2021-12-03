const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    addFriend,
    deleteFriend,
    login,
  } = require('../../controllers/user-controller');
  
  // import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/signup').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/add').post(addFriend);

router.route('/delete').post(deleteFriend);

router.route('/me').get(authMiddleware, getSingleUser);




module.exports = router;