# Homework 001
## About project
This is my first project that I add to the GitHub.

***

Project map:

* src
  * `index.html`
  * `index.js`
  * `taskOne.js`
* .gitignore
* README
* [LICENSE](./LICENSE.md)

***

Create 'homework001' folder
```
  mkdir homework001
```

Initialized git
```
  git init
```

Because all files untracked, i should add all files

Add files
```
  git add
```

Now all files staged. Now i should commit

Commit files
```
  git commit -m 'my comment'
```

Code example:

HTML 5
```html
  <p>Hello world!</p>
```

JS

```javascript
  function itemsLength(array){
    let newArr = []
    array.forEach(el => {
      newArr.push(el.length)
    });

    return newArr
  }
```