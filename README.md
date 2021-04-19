# Patagonian Nodejs Challenge
This project is Node js project was generated using NPM (6.14.10) and Node(v14.15.4)

# Task
Build an API with a single endpoint that accepts a file upload in the CSV format and the provider name that sent the file, looks up a configuration defining the column layout and parses the CSV into either a file or - as a stretch goal - into an in-memory database (see below)

# Clone repository
The first thing to do is to clone the repository:
```sh
$ git clone https://github.com/Danielh002/PatagonianTask2.git
$ cd patagonian_task
```
## Install dependencies
Run `npm install`

## Development server
Run `npm run start:dev` for a dev server. should be at `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

And Try to POST `http://127.0.0.1:3000/api/uploadfile`. 

You can see the api.html(Root of the proyect) To see more information about how to use the services
After you exceuted `npm run start:dev`in the console you can find the MongoURL, i recommend to use MongoDB Compass to see the saved data.

## Running unit tests
Run `npm run test` to execute the unit tests via [Mocha](https://mochajs.org/).
