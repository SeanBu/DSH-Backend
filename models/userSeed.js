//! DELETE THIS FILE ONCE PRODUCTION IS DEPLOYED. RUNNING THIS FILE WILL DELETE ALL USER DATA

const db = require('./index');

const users = [
    {
       username: 'horrifiedchair',
       password: 'bankpin',
       firstName: 'Bob',
       lastName: 'Smith',
       email: 'bobsmith@sbcglobal.net',
       skills: ['cooking', 'cleaning', 'sleeping'],
       rating: 5 
    },
    {
        username: 'bageltasteful',
        password: '1234',
        firstName: 'Sarah',
        lastName: 'White',
        email: 'swhite@gmail.com',
        skills: ['archery', 'mountain biking', 'swimming'],
        rating: 3 
     },
     {
        username: 'anymode',
        password: 'mybirthday',
        firstName: 'Henery',
        lastName: 'Mustang',
        email: 'henerymustang@hotmail.com',
        skills: ['drawing', 'photography'],
        rating: 2 
     },
     {
        username: 'casserolepeas',
        password: 'bannana',
        firstName: 'Joey',
        lastName: 'Garlic',
        email: 'jaygarl@yahoo.com',
        skills: ['video editing', 'writing', 'eating', 'cooking'],
        rating: 1 
     },
     {
        username: 'dejectedtent',
        password: 'tree',
        firstName: 'Alyssa',
        lastName: 'Ford',
        email: 'aford@aol.com',
        skills: ['coding', 'video games', 'computers', 'flying'],
        rating: 4 
     },
]

async function reloadData(){
    try {
        let deletedUsers = await db.User.deleteMany({});

        let reloadUsers = await db.User.insertMany(users);
        console.log(`Deleted users: ${deletedUsers}`);
        console.log(`Added Users: ${reloadUsers}`);
    } catch (err) {
        console.log(err);
    }
}

reloadData();