import { BASE_URL } from "./constants/constants.js";
import { getTasks, postTask, updateTask, deleteTask, updateTaskCompletedField } from "./helpers/helpers.js";

function init(){
    const tasksDiv = document.querySelector(".tasks");
    const completedTasksDiv = document.querySelector(".completed-tasks");
    const addButton = document.querySelector(".add__button");
    const input = document.querySelector(".add__input");
    const dateBtn = document.querySelector('.task__date-btn')
    dateBtn.addEventListener('click',handleDateButtonClick)
    function handleDateButtonClick(e){
        const input = e.currentTarget.previousElementSibling
        input.showPicker()
    }
    async function showTasks(){
        const res = await getTasks()
        const data = await res.json()
        data.forEach(task => {
            if(task.completed) completedTasksDiv.append(createTask(task))
            else tasksDiv.append(createTask(task))
        });
    }
    function createTask({id, description, completed}){
        const task = document.querySelector('.task-temp').content.querySelector('.task').cloneNode(true)
        task.id = id
        task.querySelector('.task__text').append(description)
        if(completed){
            task.querySelector('.task__checkbox').checked = true
            task.querySelector('.task__edit-btn').disabled = true
            task.classList.add('completed')
        }
        task.querySelector('.task__checkbox').addEventListener('click',(e)=>{
            const task = e.target.closest('.task')
            if(e.target.checked) markAsCompleted(task)
            else markAsIncomplete(task)
        })
        task.querySelector('.task__edit-btn').addEventListener('click',(e)=>{
            const task = e.target.closest('.task')
            editTask(task)
        })
        return task
    }
    function calcDelay(time){
        let delay = Date.parse(time)-Date.now()
        if(!delay || delay < 0) delay = 0
        return delay
    }
    async function addTask(e){
        if(e.type === "keydown" && e.keyCode !== 13) return
        if(input.value.trim() === "") return
        const description = input.value
        const dateTimeInput = e.target.parentElement.querySelector('.datetime-input');
        const delay = calcDelay(dateTimeInput.value)
        dateTimeInput.value = ''
        input.value = "";
        const res = await postTask(description,delay)
        const task = await res.json()
        tasksDiv.append(createTask(task))
    }

    function editTask(task){
        const edit = document.querySelector('.edit-temp').content.querySelector('.task').cloneNode(true)
        edit.id = task.id
        const oldTask = task.querySelector(".task__text").innerText
        edit.querySelector('.edit__input').value = oldTask
        document.querySelector('.tasks').replaceChild(edit,task)
        edit.querySelector('.task__date-btn').addEventListener('click',handleDateButtonClick)
        edit.querySelector('.task__delete-btn').addEventListener('click',(e)=>{
            const delay = calcDelay(e.currentTarget.parentElement.querySelector('.datetime-input').value)
            const id = e.target.closest('.task').id
            removeTask(id,delay)
            if(delay) e.target.closest('.task').replaceWith(createTask({description:oldTask,id}))
        })
        edit.querySelector('.task__save-btn').addEventListener('click',async (e)=>{
            const newTask = e.currentTarget.closest('.task').querySelector('.edit__input').value;
            const id = e.target.closest('.task').id
            const delay = calcDelay(e.currentTarget.parentElement.querySelector('.datetime-input').value)
            if(delay) e.target.closest('.task').replaceWith(createTask({description:oldTask,id}))
            const res = await updateTask(id,newTask,delay)
            const task = await res.json()
            document.getElementById(`${task.id}`).replaceWith(createTask(task))
        })
        edit.querySelector('.task__cancel-btn').addEventListener('click',(e)=>{
            const id = e.target.closest('.task').id
            document.getElementById(`${task.id}`).replaceWith(createTask({description:oldTask,id}))
        })
    }

    async function removeTask(id, delay){
        await deleteTask(id, delay)
        document.getElementById(`${id}`).classList.add('removed')
        setTimeout(()=>document.getElementById(`${id}`).remove(),600)
        
    }

    async function markAsCompleted(task){
        updateTaskCompletedField(task.id, true)
        task.classList.add('completed')
        task.querySelector('.task__edit-btn').disabled = true
        document.querySelector('.completed-tasks').append(task)
    }

    function markAsIncomplete(task){
        updateTaskCompletedField(task.id, false)
        task.classList.remove('completed')
        task.querySelector('.task__edit-btn').disabled = false
        document.querySelector('.tasks').append(task)
    }
    addButton.addEventListener('click',addTask);
    input.addEventListener("keydown", addTask);
    showTasks()
}
window.addEventListener('load',init)