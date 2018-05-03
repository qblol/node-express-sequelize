
const models = require('../models');

const { User } = models;

module.exports = {
  list: async (req, res) => {
    try {
      const list = await User.findAll();
      res.status(200).json({
        status: 'success',
        data: list,
      });
    } catch (e) {
      res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  },
  // register: ,
  // edit: ,
  // delete: ,
  // login: ,
};
