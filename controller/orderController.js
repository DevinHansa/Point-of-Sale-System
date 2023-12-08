const orderSchema = require('../model/orderSchema');

const create=(re,resp)=>{

    const order = new orderSchema({
        date:req.body.date,
        customerDetails:req.body.customerDetails,
        totalCost:req.body.totalCost,
        products:req.body.products

    });

    order.save().then(response=>{

        resp.status(201).json({'message':'order saved'});

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