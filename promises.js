const user = {username : 'ss',
                updatedactivitytime : '10th of jan',}
const posts = [];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.updatedactivitytime = new Date().getTime();
            resolve(user.updatedactivitytime);
        }, 1000);
    });
}
function createPost(user){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(user);
            resolve(user)
        }, 2000);
    });
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR");
            }
        }, 1000);
    });
}

function userupdate () {
    Promise.all([createPost({username: 'sn', updatedactivitytime: '11th of jan'}), updateLastUserActivityTime()])
    .then(([createPost,updatedactivitytime,deletedPost])=>{
        console.log(updatedactivitytime)
        return deletePost();
    }).then((deletePost)=>{
        console.log(deletePost);
    }).catch(err=>console.log(err))
}
userupdate()

