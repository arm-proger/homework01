## About project

***

* Create 'homework001' folder

    ```
      mkdir homework001
    ```

* Initialized git

  ```
    git init
  ```

Because all files untracked, i should add all files

* Add files

  ```
    git add
  ```

Now all files staged. Now i should commit

* Commit files

  ```
    git commit -m 'my comment'
  ```

Code example:

```javascript
  function itemsLength(array){
    let newArr = []
    array.forEach(el => {
      newArr.push(el.length)
    });

    return newArr
  }
```

Please see [LICENSE](LICENSE.md)