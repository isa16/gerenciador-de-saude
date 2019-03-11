const mongoose = require('mongoose');

const Consulta = mongoose.model('Consulta');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const consultas = await Consulta.paginate({}, { page, limit: 10 });

    return res.json(consultas);
  },

  async show(req, res) {
    const consulta = await Consulta.findById(req.params.id);

    return res.json(consulta);
  },

  async store(req, res) {
    const consulta = await Consulta.create(req.body);
    
    return res.json(consulta);
  },

  async update(req, res) {
    const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(consulta);
  },

  async destroy(req, res) {
    await Consulta.findByIdAndRemove(req.params.id);

    return res.send();
  }
};