const posts = [
    { title: "Post One", body: "This is post One" },
    { title: "Post Two", body: "This is post Two" },
];

function getPosts(){
    setTimeout(() => {
        let outpout = '';
        posts.forEach((post, index) => {
            outpout += `
                <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = outpout;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
getPosts();

createPost({ title: 'Post Three', body: 'This is post Three'}, getPosts);
getPosts();