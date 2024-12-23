const { body } = require('express-validator');

const baseNameChain = body('name').notEmpty().trim();
const baseEmailChain = body('email').notEmpty().trim().isEmail();
const basePasswordChain = body('password')
  .isLength({ min: 8 })
  .matches(/[A-Z]/);
const baseTitleChain = body('title').notEmpty();
const baseAddressChain = body('address').notEmpty();
const baseDescriptionChain = body('description')
  .notEmpty()
  .isLength({ min: 5 });
exports.baseNameChain = baseNameChain;
exports.baseEmailChain = baseEmailChain;
exports.basePasswordChain = basePasswordChain;
exports.baseTitleChain = baseTitleChain;
exports.baseDescriptionChain = baseDescriptionChain;
exports.baseAddressChain = baseAddressChain;
