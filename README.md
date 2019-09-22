cd twitter-service
### `npm nodemon server.js`

cd ..
### `npm start`

what I have done
    1. text input to enter the search text
    2. search button
    3. search results have 5 users
    4. user's name, photo, twitter handle and follower count
    5. user page and profile page
    6. server to server request with Express
    7. uni test, then test rendering other components and expect the reuslts
    8. create log to check objects

improvement
    1. need to pass the props to profile page
    2. use Bootstrap, but it clashed with create-react-cli, don't know why
    3. redux plan
        a. use <provider> to pass props from store in context
        b. design search reducer and its type
        c. compose the thunk middleware to the reducer
        d. dispatch the super action to store

    It is estimated that redux solve the problems for multi pages. I need to work further to make it.




