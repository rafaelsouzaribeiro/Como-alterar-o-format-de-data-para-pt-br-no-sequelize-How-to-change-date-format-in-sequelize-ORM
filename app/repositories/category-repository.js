const Project = require("../models").category;
const sequelize = require("../models").sequelize;

exports.getById = async (id) =>{
    const res = await Project.findOne({
    attributes:['id', 'name', 'slug','dateCadastre','dateUpdate','active',
    [sequelize.fn('date_format', 
    sequelize.col("dateCadastre"), '%d/%m/%Y %H:%m:%s'), 'Data_cadastro'],
    [sequelize.fn('date_format', sequelize.col("dateUpdate"),
     '%d/%m/%Y %H:%m:%s'), 'Data_atualizacao']], where:{id:id}  });
    return res;

}


