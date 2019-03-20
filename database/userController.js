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

const deleteAllUsers = async () => {
    try {
        await User.deleteMany({});
        console.log(`Delete all record successfully`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = {insertUser, deleteAllUsers};