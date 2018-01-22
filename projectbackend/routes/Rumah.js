const ex = require("express")
const Rumah = require("./../models/Rumah.js")

const rout = ex.Router()

rout
.post("/post",(req,res)=>{
    if(!req.body.PeminatId){
        let newRumah = new Rumah({
            Alamat:req.body.Alamat,
            Peminat:"no one wants it yet",
        })
    }
    else{
        let newRumah = new Rumah({
            Alamat:req.body.Alamat,
            Peminat:req.body.PeminatId,
        })
    }
        newRumah.save((error)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(newRumah);
            }
        })
})
.get("/getOne/:id",(req,res)=>{
    Rumah.findById({_id:req.params.id},(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.get("/get",(req,res)=>{
    Rumah.find({},(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.put("/update",(req,res)=>{
    newRumah ={
        Alamat:req.body.Alamat,
        Peminat:req.body.PeminatId,
    }
    Rumah.findByIdAndUpdate(req.body.id,newRumah,(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
.delete("/delete",(req,res)=>{
    Rumah.findByIdAndRemove(req.body.id,(error,result)=>{
        if(error) res.send(error);
        else{
            res.json(result)
        }
    })
})
module.exports = (function(){
    return rout
})();