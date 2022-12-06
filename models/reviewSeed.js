//! DELETE THIS FILE ONCE PRODUCTION IS DEPLOYED. RUNNING THIS FILE WILL DELETE ALL REIVEW DATA

const db = require('./index');

const reviews = [
    {
        rating: 5,
        comments: 'This person is a great teacher! Thank you for everything!'
    },
    {
        rating: 4,
        comments: 'Had a good experience. Felt like I learned a decent amount.'
    },
    {
        rating: 3,
        comments: 'They were decent at teaching. Was able to learn new things.'
    },
    {
        rating: 2,
        comments: 'Could have been worse. Might have learned a thing or 2 but would not recomend.'
    },
    {
        rating: 1,
        comments: 'Would not recomend. I dont even know why they are on this site.'
    },
]

async function reloadData(){
    try {
        let deletedReviews = await db.Reviews.deleteMany({});

        let reloadReviews = await db.Reviews.insertMany(reviews);
        console.log(`Deleted users: ${deletedReviews}`);
        console.log(`Added Users: ${reloadReviews}`);
    } catch (err) {
        console.log(err);
    }
}

reloadData();