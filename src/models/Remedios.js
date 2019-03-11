const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RemedioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  horario_tomar: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

RemedioSchema.plugin(mongoosePaginate);

mongoose.model('Remedio', RemedioSchema);