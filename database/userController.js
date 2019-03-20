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

const findUserById = async (userId) => {
    try {
        let foundUser = await User.findById(userId);
        console.log(`foundUser = ${JSON.stringify(foundUser)}`);
    } catch (error) {
        console.log(`User not found: ${error}`);
    }
};

const findSomeUsers = async () => {
    try {
        let foundUsers = await User.find(
            {}, // Show all users
            // {age: {$gte: 24}, name: /linh/i}, // Insensitive-case
            ['name', 'email', 'age'], // Show only name, email
            // Sort ?
            {
                sort: {
                    name: 1 // 1: Alphabetically, -1: Reverse Alphabetically
                }
            }
        ).skip(2 * 5).limit(5);

        foundUsers.forEach(user => {
            console.log(`User = ${JSON.stringify(user)}`);
        });

        console.log(`Sum count record found: ${foundUsers.length}`);
    } catch (error) {
        console.log(`User not found: ${error}`);
    }
};

module.exports = {
    insertUser,
    deleteAllUsers,
    findUserById,
    findSomeUsers
};