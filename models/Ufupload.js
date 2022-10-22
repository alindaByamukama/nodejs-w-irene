const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const ufuploadSchema = new mongoose.Schema({
    producename: {
        type: String,
        required: true,
    },
    produceprice: {
        type: String,
        required: true,
    },
    producetype: {
        type: String,
        required: true,
    },
    deliverymode: {
        type: String,
        required: true,
    },
    producequantity: {
        type: String,
        required: true,
    },
    paymentmode: {
        type: String,
        required: true,
    },
    ufname: {
        type: String,
        required: true,
    },
    ufid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RegisterUser',
        required: true
    },
    division: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RegisterUser',
        required: true
    },
    uplodDate: {
        type: String,
        required: true,
    },
    produceimg: {
        type: String,
        required: true,
    },   
    status: {
        type: String,
        default: 'pending',
        enum: ['pedning', 'approved'],
    }
})

// collection is called RegisterUser in mongodb
module.exports = mongoose.model("UploadProduce", ufuploadSchema);