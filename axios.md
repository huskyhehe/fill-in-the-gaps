# Axios 

> https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
> https://www.bezkoder.com/axios-request/
> https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

## Compare Axios with fetch()
- Automatic transformation of data
    - Axios automatically transforms the data returned from the server, returning data by default.
    - With fetch() you have to call the response.json method to parse the data to a JavaScript object.
- Request type
- Axios uses a method for each type of request (get, post, put, delete) 
- fetch() uses the fetch method for all types of requests, and you have to specify the request type (GET, POST, PUT, DELETE) by passing an options object as the second parameter. 
## `GET`
```javascript
// With fetch()
fetch(url)
.then((response) => response.json())    // one extra step
.then((data) => console.log(data))
.catch((error) => console.log(error));

// With Axios
axios.get(url)
.then((response) => console.log(response))  // automatic transformation of data
.catch((error) => console.log(error));
```

<br>

## `POST`
```javascript
const url = 'https://jsonplaceholder.typicode.com/posts'

// With fetch
const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        a: 10,
        b: 20,
    }),
};
fetch(url, options)
.then((response) => response.json())
.then((data) => {
    console.log(data);
});

// With axios
const data = {
    a: 10,
    b: 20,
};
axios
.post(url, data, {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})
.then(({data}) => {
    console.log(data);
});
```

<br>

## Concurrent `GET`
Since Axios returns a promise, we can map through the `API` array and performed the `GET` request on each of them using `Promise.all()`:

```javascript
let API = [
    "https://reqres.in/api/unknown",
    "https://reqres.in/api/users?page=2",
    "https://reqres.in/api/users/2"
];

Promise.all(
    API.map((api) => {
        return axios.get(api).then((res) => {
            console.log(res);
        });
    })
)
.catch((error) => {
    if (error.response) {
        // the request was made and the server responded with a status code
        console.log(error.response);
        console.log(error.response.status);
    } else if (error.request) {
        // the request was made but no response was received
        console.log("network error");
    } else {
        // something happened when setting up the request
        console.log(error.toJSON());
    }
});
```




GET
```javascript
// With Axios:
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });


// With fetch():
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
```