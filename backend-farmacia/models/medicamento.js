const{Schema, model} = require('mongoose');

const MedicamentoSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    laboratorio: {
        type: String,
        require: true,
    },
    fechaVencimiento: {
        type: Date,
        require: true,
    },
    img: {
        type: String,
    },
    cantidad:{
        type: Number,
    }
    
});

MedicamentoSchema.method('toJSON', function(){
    const { __v, _id, ...Object } = this.toObject();
    Object.medid = _id;
    return Object;
})


module.exports = model ('Medicamento',MedicamentoSchema);