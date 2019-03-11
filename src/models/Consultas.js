const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ConsultaSchema = new mongoose.Schema({
    name_doctor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    horario_consulta: {
        type: time,
        required: true,
    },
    data_consulta: {
        type: Data,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

RemedioSchema.plugin(mongoosePaginate);

mongoose.model('Consulta', ConsultaSchema);