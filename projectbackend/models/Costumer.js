const mon = require("mongoose");

mon.connect("mongodb://localhost:27017/backendthingy", { useMongoClient : true })

const sch = mon.Schema;

const Costumersch = new sch({

    nama:String,
    nomorKontak:Number,
    email:String,
    Minat:String,

})


const Costumer = mon.model("Costumer",Costumersch);


module.exports = Costumer;