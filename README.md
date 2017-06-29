# Using Fetch In React
This repository was created for bridge, a free coding course for women hosted by Rangle.io. For more information on this course [click here.](https://rangle.io/bridge/)

In this repository we will look at promises, the fetch api, and how to to use them in React. So let's get started!

### What Is A Promise?

Promises are a way to respond asynchronously to something in javascript. Whenever the code inside a promise is completed the promise will `resolve` and we can run code in response to that completion. however, if the code inside the promise fails in some way the promise will `reject` and we can decide how to handle that error.

Consider the code snippet below. `promiseFunc` is a function that takes a string named `phrase` as a parameter and returns a promise. Inside of that promise we check whether or not `phrase` is an empty string. If `phrase` is not empty we wait 5 seconds before resolving the promise. However if `phrase` is empty, the promise is rejected with an error message.

```js
const promiseFunc = (phrase) => {
  return new Promise((resolve, reject) => {
    if (phrase.length > 0) {
      setTimeout(() => resolve(phrase), 5000);
    }
    else {
      reject('Uh oh, there is no phrase to send');
    }
  });
};
```

Now that we have our function, let's try it out.

Below you can see we have passed the string `'This promise is now complete'` into `promiseFunc`. Since this string is not empty, after 5 seconds the promise will resolve. Using the promise's `.then()` method, we can take the phrase that was returned by `resolve` and do something with it.

```js
promiseFunc('This promise is now complete')
  // When this promise resolves, console.log the result
  .then(response => console.log(`RESPONSE: ${response}`))
```
But what if the promise gets rejected? Promises also have a `.catch()` method to catch the error and do something with it.

```js
promiseFunc('')
  .then(response => console.log(`RESPONSE: ${response}`))
  // When this promise rejects, console.error out the error
  .catch(error => console.error(`ERROR: ${error}`))
```

[See the full example here](https://repl.it/JG1l/2)

### What Is Fetch?

Fetch is a way for us to make http requests to an API and guess what? It returns a promise!

Consider this fetch request. We're making a request to `'http://someapi/endpoint'` and adding on a `.then()` to take the server's successful response and returning that response converted into JSON.

```js
fetch('http://someapi/endpoint')
  .then(response => response.json())
```

Now what have our data converted into JSON we want to display that data. To do this we can chain another `.then()` onto our first one to log our data into the console like so:

```js
fetch('http://someapi/endpoint')
  .then(response => response.json())
  .then(data => console.log(data))
```

But what if something goes wrong? What if a user's internet goes down or the api url doesn't exist? We can use the `.catch()` method to handle that error like so:

```js
fetch('http://someapi/endpoint')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### How Can We Use This In React?

Now that we've talked about fetch, let's look at how to use it in React. Below is a component that has a button and when a user presses the button a request using fetch to an API is made that returns a random name. Once the name is received, we store it in the component's state and display it to the user.

```js
class ExampleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
    this._getRandomName = this.getRandomName.bind(this);
  }

  render() {
    const { name } = this.state;
    return(
      <div>
        <h1>{name}</h1>
        <button
          onClick={this._getRandomName}
        >
          PRESS ME!
        </button>
      </div>
    );
  }

  getRandomName() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const person = data.results[0];
        this.setState({ name: `${person.name.first} ${person.name.last}` })
      })
  }
}
```

[See Full CodePen example here](https://codepen.io/ShaunLloyd/pen/owpyQo?editors=1010)

<hr>

### The Exercise

For this exercise we have a react application that takes a number. When this number is submitted, an API call is made to find the pokemon associated with that number. When the pokemon is returned it is stored in state and displayed to the user. If there is an error with the request (maybe there is no associated pokemon) an error message is stored in state and displayed to the user.

Your task is to write the fetch request that will retrieve the pokemon and store it to state or store the error if no pokemon is found.

To get started with this exercise run the following commands:
```bash
  # Clone the repository
  git clone https://github.com/ShaunLloyd/fetch-in-react-example.git

  # Move into the project directory
  cd fetch-in-react-example

  # Install the project dependencies
  npm install

  # Launch the application
  npm run start
```
