const orderSchema = require('../model/orderSchema');

const create=(req,resp)=>{

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
const findByID=(req,resp)=>{

    orderSchema.findOne({ 'id': req.params.id }).then(selectedObject => {
        if (selectedObject != null) {
            resp.status(200).json({ 'message': 'order found' }); // Fixed the response message
        } else {
            return resp.status(404).json({ 'message': 'order not found' });
        }
    });
}
const update=async(req,resp)=>{

    const updateData = await orderSchema.findOneAndUpdate({ 'id': req.params.id },{

        $set:{
            date:req.body.date,
            customerDetails:req.body.customerDetails,
            totalCost:req.body.totalCost,
            products:req.body.products

        }

    },{new:true}); 
    if(updateData){
        return resp.status(200).json({'message':'updated'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }

}
const deleteById=(req,resp)=>{}
const findAll=(req,resp)=>{}


module.exports={
    create,findByID,update,deleteById,findAll
}