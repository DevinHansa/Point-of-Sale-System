const productSchema = require('../model/productSchema');

const create=(re,resp)=>{

    const product = new productSchema({
        name:req.body.name,
        description:req.body.description,
        unitPrice:req.body.unitPrice,
        image:req.body.image,
        qtyOnHand:req.body.qtyOnHand

    });

    order.save().then(response=>{

        resp.status(201).json({'message':'product saved'});

    }).catch(error=>{
        return resp.status(500).json(error);
    });
}
const findByID=(re,resp)=>{}
const update=(re,resp)=>{}
const deleteById=(re,resp)=>{}
const findAll=(re,resp)=>{}


module.exports={
    create,findByID,update,deleteById,findAll
}