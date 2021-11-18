const mongoose = require('mongoose');
// Hàm giúp connect tới mongodb
    async function connect() {
        try {
            await mongoose.connect('mongodb://localhost:27017/f8_student_dev',{
                useNewUrlParser: true,
                useUnifiedTopology:true,
            });
            console.log('Connect successfully');
        } catch (error) {
            console.log('Connect Failure');
        }

    }

module.exports = {connect}