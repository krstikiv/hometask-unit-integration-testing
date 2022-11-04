# hometask-unit-integration-testing

Using [Jest](https://jestjs.io/), a Javascript Testing framework, simple unit and integration test have been set up.

The test cases are located in file "./tests/rectangle.js".

## Setup project

Step 1: Clone this repository to your local machine. 

```text
git clone link_to_repository
```
## Install dependencies

Step 2: Open a terminal and navigate to the repository structure.

Step 3: Then install the project dependencies using the `yarn` command.

Step 4: Afterwards, verify your "./package.json" file it has the *jest* dependency installed. 
```text
"devDependencies": {
    "jest": "^29.2.2"
  }
```

Step 5: Make sure the following section is in the "./package.json" file which will allow jest test to be run.
```text
"scripts": {
    "test": "jest"
  }
```
## Run Tests

Step 6: In the terminal run code `yarn jest` to execute the tests.

