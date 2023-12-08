const customerSchema = require('../model/customerSchema');
const userSchema = require('../model/customerSchema');

const create=(re,resp)=>{

    const customer = new customerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary

    });

    customer.save().then(response=>{

        resp.status(201).json({'message':'customer saved'});

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