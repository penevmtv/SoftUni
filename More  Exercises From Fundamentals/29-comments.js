// Write a function that stores information about users and their comments on a website. 
// You have to store the users, the comments as an object with title and content, and the article that the comment is about. 
// The user can only comment, when he is on the list of users and the article is in the list of articles. 
// The input comes as an array of strings. The strings will be in the format:
// "user {username}" – add the user to the list of users
// "article {article name}" – add the article to the article list
// "{username} posts on {article name}: {comment title}, {comment content}" – save the info
// At the end sort the articles by a count of comments and print the users with their comments ordered by usernames in ascending.
// Output
// Print the result in the following format:
// "Comments on {article1 name}
// --- From user {username1}: {comment title} - {comment content}
// --- From user {username2}: …
// Comments on {article2 name}
// …"




function comments(arrOfStrs) {
    let articleObj = {};
    let addedUsersSet = new Set();

    for (let string of arrOfStrs) {
        if (string.includes(`: `)) {
            const [userPart, commentPart] = string.split(`: `);

            const [userName, articleName] = userPart.split(` posts on `);

            if (articleObj[articleName] && addedUsersSet.has(userName)) {
                if (!articleObj[articleName][userName]) {
                    articleObj[articleName][userName] = [];
                }

                articleObj[articleName][userName].push(commentPart);
            }
        } else if (string.includes(`user `)) {
            const userName = string.split(`user `)[1];

            addedUsersSet.add(userName);
            
        } else if (string.includes(`article `)) {
            const articleName = string.split(`article `)[1];

            if (!articleObj[articleName]) {
                articleObj[articleName] = {};
            }
        }
    }
    const sortedArticleArr = Object.entries(articleObj).sort((a, b) => {
        const aCommentsCount = Object.values(a[1]).flat().length;
        const bCommentsCount = Object.values(b[1]).flat().length;

        return bCommentsCount - aCommentsCount;
    })

    for (const [articleName, userObj] of sortedArticleArr) {
        console.log(`Comments on ${articleName}`);

        const sortedUsers = Object.entries(userObj).sort((a, b) => a[0].localeCompare(b[0]));

        for (const [userName, commentPartArr] of sortedUsers) {
            for (const comment of commentPartArr) {

                console.log(`--- From user ${userName}: ${comment.split(`, `).join(` - `)}`);
            }
        }
    }
}
comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
