cd twitter-service
### `npm nodemon server.js`

cd ..
### `npm start`

what I have done
    - text input to enter the search text
    - search button
    - search results have 5 users
    - user's name, photo, twitter handle and follower count
    - user page and profile page
    - server to server request with Express
    - uni test, then test rendering other components and expect the reuslts
    - create log to check objects

improvement
    - need to pass the props to profile page
    - use Bootstrap, but it clashed with create-react-cli, don't know why
    - redux plan
        use <provider> to pass props from store in context
        design search reducer and its type
        compose the thunk middleware to the reducer
        dispatch the super action to store
        
    It is estimated that redux solve the problems for multi pages. I need to work further to make it.




