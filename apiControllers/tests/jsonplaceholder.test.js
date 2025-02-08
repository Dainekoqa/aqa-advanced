const jsonPlaceholderController = require('../controllers/jsonplaceholder.controller');

test('Get all posts', async () => {
    const response = await jsonPlaceholderController.getPosts();
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
});

test('Get post by ID', async () => {
    const response = await jsonPlaceholderController.getPostById(1);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
});

test('Create new post', async () => {
    const newPost = { title: 'Irinas new post', body: 'My test post', userId: 1 };
    const response = await jsonPlaceholderController.createPost(newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe('Irinas new post');
});