db.createUser({
    user: 'enzo',
    pwd: '1234',
    roles: ['readWrite', { role: 'readWrite', db: 'shop' }]
})

// db.users.drop()
// db.users.insertMany([
//     {
//         _id: "1",
//         lastname: "Radnaï",
//         firstname: "Enzo",
//         birthdate: "111&"
//     }
// ])