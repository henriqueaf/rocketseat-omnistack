const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    try {
      const spots = await Spot.find({ user: user_id });

      return res.json(spots);
    } catch (error) {
      return res.status(400).json({ error: 'Probably user does not exists' });
    }
  }
}
