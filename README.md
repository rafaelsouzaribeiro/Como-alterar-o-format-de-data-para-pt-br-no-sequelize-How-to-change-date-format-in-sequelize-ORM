# Carregando models em sequelize
Em app/models/index.js está o mapeamento de inclusão dos models
Em app/repositories/category-repository.js temos a chamada:
const Project = require("../models").category;
Possibilitando a chamada dos models de uma forma amigável e também podemos chamar o sequelize objeto:
const sequelize = require("../models").sequelize;

Para iniciar o projeto em seu terminal digite: npm install


