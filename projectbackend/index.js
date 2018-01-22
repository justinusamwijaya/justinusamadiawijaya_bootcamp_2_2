const ex = require("express")
const bopas = require("body-parser")

const CostumerRoute = require("./routes/Costumer.js")
const RumahRoute = require("./routes/Rumah.js")

const up = ex()



up
.use(bopas.json())
.use(bopas.urlencoded({extended:true}))
.use("/costumer",CostumerRoute)
.use("/rumah",RumahRoute)
.listen(3000)