
const showRouter = require('./show');
const siteRouter = require('./site')

function route(app){
    // Khi nhập vào đường dẫn là news
    
    app.use('/show',showRouter);
  
    app.use('/',siteRouter);
    
}
module.exports = route;