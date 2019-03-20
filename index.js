const {User} = require('./database/models');
const user = new User();
user.name = 'pnlinh';
user.age = 24;
user.email = 'pnlinh1207@gmail.com';
user.save(error => {
    if (error) {
        console.log(`Can not save to db`);
    } else {
        console.log(`Save to db successfully`);
    }
});
