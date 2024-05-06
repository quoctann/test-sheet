# Test project

## Part 1 Checklist

### Question 1

✔ Setup SSR with React, Webpack and Babel, Loader

✔ The entry point localhost:3000 present h1 tag with content Hello world

### Question 2

✔ Initialize feature/environment

✔ Setup project structure, development tools (husky, eslint)

✖ Setup unit test environment using Jest

✔ Merge feature/environment into master without delete current branch

### Question 3

✖ Initialize feature/user-interface to create calculator UI pixel perfect, centered on web layout

## Part 3 Requirement

When user do calculate for example: 2\*3. It should show 2 when user press button 2, after that user press button + the screen should keep showing 2 with operator button like (+/-, %, /, -, +), after that when user press 3 the monitor will show 3. The result should show after user press = (required)

For complex operator like: 2*4-9*6, the calculator should calculate 2*4 and 9*6 first before subtract.

When the user clicks the mouse into a number on screen, the number should show the edit placeholder and flick like this, after that when the user clicks the number on the keypad. The calculator should replace the number zero (0) with a new key. When the user clicks outside the calculator, it should return normal.

The history of the calculation should be stored somewhere locally.

Unit test coverage expecting as 80%
