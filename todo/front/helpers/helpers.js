import { BASE_URL } from "../constants/constants.js";

export async function getTasks(data){
    return fetch(`${BASE_URL}tasks`)
}
export async function postTask(data, delay){
    return fetch(`${BASE_URL}tasks`,{
        method:'POST',
        body:JSON.stringify({
            description: data,
            delay
        }),
        headers:{
            'Content-type':'application/json'
        }    })
}
export async function updateTask(id, data, delay){
    return fetch(`${BASE_URL}tasks/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            description:data,
            delay
        }),
        headers:{
            'Content-type':'application/json'
        }    })
}
export async function updateTaskCompletedField(id, completed){
    return fetch(`${BASE_URL}tasks/${id}`,{
        method:'PATCH',
        body:JSON.stringify({
            completed
        }),
        headers:{
            'Content-type':'application/json'
        }    })
}
export async function deleteTask(id,delay){
    return fetch(`${BASE_URL}tasks/${id}`,{
        method:'DELETE',
        body:JSON.stringify({
            delay
        }),
        headers:{
            'Content-type':'application/json'
        }    })
}