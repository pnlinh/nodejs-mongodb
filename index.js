const {insertUser, deleteAllUsers, findUserById, findSomeUsers} = require('./database/userController');

// insertUser('pnlinh', 24, 'pnlinh1207@gmail.com');
// insertUser('pnlinh2', 25, 'pnlinh1207abc@gmail.com');
// insertUser('pnlinh3', 26, 'pnlinh1207xyz@gmail.com');

// Becareful
// deleteAllUsers();

// findUserById('5c921af2a522553ecd90db57');

findSomeUsers();