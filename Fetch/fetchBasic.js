// const url = 'https://todo-list-dfabf-default-rtdb.firebaseio.com/tasks.json';
const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
    const response = await fetch(url);
    const res = await response.json()
    console.log('res: ', res);
}

getData()