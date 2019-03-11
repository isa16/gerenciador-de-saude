const mongoose = require('mongoose');

const Remedio = mongoose.model('Remedio');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const remedios = await Remedio.paginate({}, { page, limit: 10 });

    return res.json(remedios);
  },

  async show(req, res) {
    const remedio = await Remedio.findById(req.params.id);

    return res.json(remedio);
  },

  async store(req, res) {
    const remedio = await Remedio.create(req.body);
    
    return res.json(remedio);
  },

  async update(req, res) {
    const remedio = await Remedio.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(remedio);
  },

  async destroy(req, res) {
    await Remedio.findByIdAndRemove(req.params.id);

    return res.send();
  }
};