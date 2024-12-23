const express = require('express');
const userController = require('../controllers/users-controller');
const fileUpload = require('../middleware/file-upload')

const {
  baseNameChain,
  baseEmailChain,
  basePasswordChain,
} = require('../middleware/param-validator');

const router = express.Router();

router.get('/', userController.getUsers);
router.post(
  '/signup',
  fileUpload.single('image'),
  [baseNameChain, baseEmailChain, basePasswordChain],
  userController.signup
);
router.post(
  '/login',
  [baseEmailChain, basePasswordChain],
  userController.login
);

module.exports = router;
