const {User} = require('./models');

const insertUser = async (name, age, email) => {
    try {
        const user = new User();
        user.name = name;
        user.age = age;
        user.email = email;
        await user.save();
        console.log(`Insert record to db successfully`);
    } catch (error) {
        console.log(`Can not insert to db`);
    }
};

module.exports = {insertUser};