// task11.3.js

async function fetchTodo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return res.json();
}

async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return res.json();
}

async function executeTasks() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Todo:', todo);
        console.log('User:', user);

        const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Перший завершений запит:', firstResult);
    } catch (err) {
        console.error('Помилка:', err);
    }
}

executeTasks();
