const repository = require("../repositories/category-repository");

exports.get = async(req, res,next)=>{
   var e = await repository.getById(req.params.id);

   res.status(201).send({e});
}

