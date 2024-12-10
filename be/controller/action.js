const Emp = require('./../modals/modal');

const handleGetAction = async (req, res) => {
    const allEmp = await Emp.find({});
    console.log('all Emp', allEmp);
    return res.json(allEmp);
}

const handlePostAction = async (req, res) => {
    console.log(req.body)
    const body = req.body;
    if(!body || !body.fname) return res.status(404).json({msg: 'First name is required'});
    
    const newEmp = await Emp.create({
        fname: body.fname,
        lname: body.lname
    });

    return res.status(200).json({msg: 'Employee created', id:newEmp._id});
}

module.exports = {
    handleGetAction,
    handlePostAction
}