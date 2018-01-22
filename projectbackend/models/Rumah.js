const mon = require("mongoose");

mon.connect("mongodb://localhost:27017/backendthingy", { useMongoClient : true })

const sch = mon.Schema;

const Rumahsch = new sch({

    Alamat:String,
    Peminat:String,

})


const Rumah = mon.model("Rumah",Rumahsch);


module.exports = Rumah;