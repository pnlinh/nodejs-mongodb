const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose;

// Connect to DB
const connectDatabase = async () => {
    try {
        let uri = 'mongodb://pnlinh:123456@127.0.0.1:27017/nodejs';
        let options = {
            connectTimeoutMS: 10000,
            useNewUrlParser: true,
            useCreateIndex: true
        };
        await mongoose.connect(uri, options);
        console.log('Connect to MongoDB successfully !');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

connectDatabase();

const UserSchema = new Schema({
    name: {type: String, default: 'unknown'},
    age: {type: Number, min: 18, index: true},
    email: {type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/}
});

// Transform Schema to Model
const User = mongoose.model('User', UserSchema);

module.exports = {User};