import TodoList from "./TodoList.js";

// alert('Hello World!');

/* eslint-env jquery */
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);

