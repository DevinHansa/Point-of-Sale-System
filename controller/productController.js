const productSchema = require('../model/productSchema');

const create=(req,resp)=>{

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
const findByID=(req,resp)=>{
    productSchema.findOne({ 'id': req.params.id }).then(selectedObject => {
        if (selectedObject != null) {
            resp.status(200).json({ 'message': 'product found' }); // Fixed the response message
        } else {
            return resp.status(404).json({ 'message': 'product not found' });
        }
    });
}
const update=async(req,resp)=>{


    const updateData = await productSchema.findOneAndUpdate({ 'id': req.params.id },{

        $set:{
            name:req.body.name,
            description:req.body.description,
            unitPrice:req.body.unitPrice,
            image:req.body.image,
            qtyOnHand:req.body.qtyOnHand

        }

    },{new:true}); 
    if(updateData){
        return resp.status(200).json({'message':'updated'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }
}
const deleteById=async(req,resp)=>{

    const deleteData = await productSchema.findOneAndDelete({ 'id': req.params.id });
    if(deleteData){
        return resp.status(204).json({'message':'deleted'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }

}
const findAll=(req,resp)=>{}


module.exports={
    create,findByID,update,deleteById,findAll
}