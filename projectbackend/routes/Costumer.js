const ex = require("express")
const Costumer = require("./../models/Costumer.js")

const rout = ex.Router()

rout
.post("/post",(req,res)=>{


        let newCostumer = new Costumer({
            nama:req.body.nama,
            nomorKontak:req.body.nomorKontak,
            email:req.body.email,
            Minat:req.body.RumahId,
        })
    
        newCostumer.save((error)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(newCostumer);
            }
        })
})
.get("/getOne/:id",(req,res)=>{
    Costumer.findById({_id:req.params.id},(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.get("/get",(req,res)=>{
    Costumer.find({},(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.put("/update",(req,res)=>{
    newCostumer ={
        nama:req.body.nama,
        nomorKontak:req.body.nomorKontak,
        email:req.body.email,
        Minat:req.body.RumahId,
    }
    Costumer.findByIdAndUpdate(req.body.id,newCostumer,(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.delete("/delete",(req,res)=>{
    Costumer.findByIdAndRemove(req.body.id,(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
module.exports = (function(){
    return rout
})();