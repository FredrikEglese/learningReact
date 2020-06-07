# Notes from ['The React Handbook'](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)

## Useful commands

When creating a new application or just running it, you will probably need to use: 

* npx create-react-app <app_name>
* npm start
* npm run build
* npm test
* npm eject

## Some JS to be aware of

### Arrow functions & implicit return

```javascript
const myFunction = function() {
    // ...
}

const myFunction = () => {
    // ...
}

const myFunction = (param1, param2) => doSomething(param1, param2)

const mySimpleFunction = () => 'test'

mySimpleFunction() // 'test'
```

Because of the way that `this` works, arrow functions should not be used for object methods, EventListeners or constructors. 

### Spread operator `...`

```javascript
const a = [1, 2, 3]

const b = [a, 4, 5, 6] // [[1 ,2 ,3], 4, 5, 6]

const c = [...a, 4, 5, 6] // [1, 2, 3, 4, 5, 6]
```

This can also be used to create a coppy of an array, or an object. Although if you use it on a string, it will turn the string into an array (Which could be useful in some cases).

```javascript
const message = 'hello'

const msgArray = [...message] // ['h', 'e', 'l'. 'l', 'o']
```
This function also gives you the ability to use an array as a function argument very simply.

```javascript
const myFunction = (foo, bar) => {}
const myParams = [1,2]
myFunction(...myParams)
```
#### Rest opearator



