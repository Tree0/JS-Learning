let arr = [];
let inputBox = document.querySelector('input');
let todoList = document.querySelector('#todoList');
let done = document.querySelector('#done');

document.querySelector('#add').addEventListener('click', function(){

        arr.push(inputBox.value);
        inputBox.value = '';
        displayArray();
        console.log(arr);

      })

      function displayArray() {
        todoList.innerHTML ='';
        done.innerHTML ='';
        arr.forEach(function(n,i){
          todoList.innerHTML += '<li class="list-group-item m-1">' + n + '</li>';
          done.innerHTML += '<button type="button" name="button" class="m-2 btn-sm" onclick="taskCompleted('+i+')">Done</button>';
        })

      }

      function taskCompleted(i) {
        let completedTodo= arr.splice(i,1);
            completedList.innerHTML += '<li class="list-group-item m-1">' + completedTodo + '</li>';

        displayArray();

      }
