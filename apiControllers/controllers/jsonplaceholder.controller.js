const { jsonPlaceholderClient } = require('../apiClient');

class JSONPlaceholderController {
    async getPosts() {
        return await jsonPlaceholderClient.get('/posts');
    }

    async getPostById(postId) {
        return await jsonPlaceholderClient.get(`/posts/${postId}`);
    }

    async createPost(postData) {
        return await jsonPlaceholderClient.post('/posts', postData);
    }
}

module.exports = new JSONPlaceholderController();