// task11.2.js

function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(err => console.error('Помилка:', err));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => console.log('Перший завершений запит:', result))
    .catch(err => console.error('Помилка:', err));
