const customerSchema = require('../model/customerSchema');

const create = (req, resp) => {
    const customer = new customerSchema({
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });

    customer.save().then(response => {
        resp.status(201).json({ 'message': 'customer saved' });
    }).catch(error => {
        return resp.status(500).json(error);
    });
}

const findByID = (req, resp) => {
    customerSchema.findOne({ 'id': req.params.id }).then(selectedObject => {
        if (selectedObject != null) {
            resp.status(200).json({ 'message': 'customer found' }); // Fixed the response message
        } else {
            return resp.status(404).json({ 'message': 'customer not found' });
        }
    });
}

const update = async(req, resp) => {
    const updateData = await customerSchema.findOneAndUpdate({ 'id': req.params.id },{

        $set:{
            name: req.body.name,
            address: req.body.address,
            salary: req.body.salary

        }

    },{new:true}); 
    if(updateData){
        return resp.status(200).json({'message':'updated'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }

}

const deleteById =async (req, resp) => {
    
    const deleteData = await customerSchema.findOneAndDelete({ 'id': req.params.id });
    if(deleteData){
        return resp.status(204).json({'message':'deleted'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }
     

}

const findAll = (req, resp) => {
    // Implement find all logic here
}

module.exports = {
    create, findByID, update, deleteById, findAll
}
