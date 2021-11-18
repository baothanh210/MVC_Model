
class SiteController {
    // Get news
    index(req,res){
       res.render('home')
    }
}

module.exports = new SiteController;