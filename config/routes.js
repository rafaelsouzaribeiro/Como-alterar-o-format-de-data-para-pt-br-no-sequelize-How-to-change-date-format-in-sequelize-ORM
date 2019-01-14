
const category = require('../app/controllers/category');

//you can include all your controllers

module.exports = function (app) {
    app.get('/category/:id',category.get);

    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
    })
    
}
