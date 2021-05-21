const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Abn0rmal', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
];

module.exports = users;