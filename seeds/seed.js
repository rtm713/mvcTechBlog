const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async() => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log("_________USERS_____________SEEDED___________");

    await Post.bulkCreate(postData, {
        returning: true,
    });
    console.log("_________POSTS_____________SEEDED___________");

    await Comment.bulkCreate(commentData, {
        returning: true,
    });
    console.log("_________COMMENTS_____________SEEDED___________");

    process.exit(0);
};

seedDatabase();