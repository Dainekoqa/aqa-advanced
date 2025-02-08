const axios = require('axios');
const jsonData = require('./env.json');

class ApiClient {
    constructor(baseUrl) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    async get(endpoint) {
        return await this.client.get(endpoint);
    }

    async post(endpoint, data) {
        return await this.client.post(endpoint, data);
    }

    async put(endpoint, data) {
        return await this.client.put(endpoint, data);
    }

    async delete(endpoint) {
        return await this.client.delete(endpoint);
    }
}

module.exports = {
    jsonPlaceholderClient: new ApiClient(jsonData.jsonPlaceholderBaseUrl),
    bookstoreClient: new ApiClient(jsonData.bookstoreBaseUrl),
};