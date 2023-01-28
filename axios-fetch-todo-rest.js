// GET
// with Axios
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

// with fetch()
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });



// POST
// With Axios
axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New todo',
        completed: false
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });


// With fetch()
fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: 'New todo',
            completed: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });



// PUT
// With Axios
axios.put('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'Updated todo',
        completed: true
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });


fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'Updated todo',
            completed: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });



// DELETE
// With Axios
axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

// With fetch()
fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });



// PATCH
// With Axios
axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'Patched todo'
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

// With fetch()
fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Patched todo'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


