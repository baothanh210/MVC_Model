const Student = require('../models/Student');
class ShowController {
    // List
    index(req,res) {
        Student.find({}, (err, student)=> {
            if(!err){
                res.render('show',{student})
            }else{

                res.writeHead(400).json({error: 'ERROR!!!'});
            }
        })
        
    }
    // Detail
    show(req,res){
        Student.findOne({idStudent: req.params.idStudent}, (err,student) =>{
            if(!err){
                res.render('detail',{student})
            }else{
                res.writeHead(400).json({error: 'ERROR!!!'});
            }
        })
        
    }
    // Create
    create(req,res){
        res.render('create')
    }
    // Store
    store(req,res){
        const student = new Student(req.body);
        student.save()
            .then(() => {
                res.redirect('/show')
            })
            .catch(error => {
                console.log('error')
            })
    }
}

module.exports = new ShowController;