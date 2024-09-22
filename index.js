const todoList = JSON.parse(localStorage.getItem('todoList'));

if(!todoList)
{
        todoList=[{
            name:'going to movies',
            dueDate:'13-12-2024',
        }];
};

        renderTodoList();

        document.querySelector('.addButton').addEventListener('click', () => {
            addToLocalStorage();
            todoadd();
        })

        function addToLocalStorage()
        {
            localStorage.setItem('todoList',JSON.stringify(todoList));
        }

        function todoadd() {
            let inputEle = document.querySelector('.todoName');
            let name = inputEle.value;
            let inputDate = document.querySelector('.todoDate');
            let dueDate = inputDate.value;
            todoList.push({
                name,
                dueDate,
            });

            inputEle.value = '';
            inputDate.value = '';

            addToLocalStorage();
            renderTodoList();
        }

        function renderTodoList() {
            let todoListHTML = '';
            todoList.forEach((todoObject, i) => {
               /* if (i == 0) {
                    return;
                }*/
                const { name, dueDate } = todoObject;
                todoListHTML +=
                    `<div>${name}</div>
           <div>${dueDate}</div>
           <button class="delButton" >Delete
           </button>
            `;
                addToLocalStorage();
            });

            /*
                for (let i = 1; i < todoList.length; i++) {
                    const todoObject = todoList[i];
                    const { name, dueDate } = todoObject;
                    const html =
                        `<div>${name}</div>
               <div>${dueDate}</div>
               <button class="delButton" onclick="
               todoList.splice(${i},1);
               renderTodoList();
               ">Delete
               </button>
                `;
                    todoListHTML += html;
                };
                */

            document.querySelector('.todoList').innerHTML = todoListHTML;


            document.querySelectorAll('.delButton').forEach((button, i) => {
                button.addEventListener('click', () => {
                    todoList.splice(i, 1);
                    addToLocalStorage();
                    renderTodoList();
                });
            });

        }
