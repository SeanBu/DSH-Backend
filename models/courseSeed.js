//! DELETE THIS FILE ONCE PRODUCTION IS DEPLOYED. RUNNING THIS FILE WILL DELETE ALL REIVEW DATA

const db = require('./index');

const d = new Date();
const time = d.getTime();

const courses = [
    {
        courseName: 'Learn Javascript',
        location: 'Online',
        online: true,
        time: time,
        courseDescription: 'Learn the basics of Javascript!'
    },
    {
        courseName: 'Learn HTML',
        location: 'Online',
        online: true,
        time: time,
        courseDescription: 'Learn the basics of HTML!'
    },
    {
        courseName: 'Learn CSS',
        location: 'Online',
        online: true,
        time: time,
        courseDescription: 'Learn the basics of CSS!'
    },
    {
        courseName: 'Learn UX Design',
        location: 'Online',
        online: true,
        time: time,
        courseDescription: 'Learn the basics of UX Design!'
    },
]

async function reloadData(){
    try {
        let deletedCourses = await db.Course.deleteMany({});

        let reloadCourses = await db.Course.insertMany(courses);
        console.log(`Deleted users: ${deletedCourses}`);
        console.log(`Added Users: ${reloadCourses}`);
    } catch (err) {
        console.log(err);
    }
}

reloadData();