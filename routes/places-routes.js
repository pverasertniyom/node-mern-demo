const express = require('express');

const placeControllers = require('../controllers/places-controller');
const fileUpload = require('../middleware/file-upload')
const checkAuth = require('../middleware/check-auth')
const {
  baseTitleChain,
  baseDescriptionChain,
  baseAddressChain,
} = require('../middleware/param-validator');

const router = express.Router();

router.get('/:pid', placeControllers.getPlaceById);

router.get('/user/:uid', placeControllers.getPlacesByUserId);

router.use(checkAuth);

router.post(
  '/',
  fileUpload.single('image'),
  [baseTitleChain, baseDescriptionChain, baseAddressChain],
  placeControllers.createPlace
);

router.patch(
  '/:pid',
  [baseTitleChain, baseDescriptionChain],
  placeControllers.updatePlace
);

router.delete('/:pid', placeControllers.deletePlace);

module.exports = router;
