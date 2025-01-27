const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com';

// GET 
async function getPosts() {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// POST 
async function createPost() {
    try {
        const response = await axios.post(`${API_URL}/posts`, {
            title: 'New Post',
            body: 'This is the content of the post',
            userId: 1
        });
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

//  (GET, POST, PUT, DELETE)

module.exports = { getPosts, createPost };

if (response.status === 200) {
    console.log('Response is valid:', response.data);
} else {
    console.error('Invalid response:', response.status);
}