import { File } from "../components/File.js"
import { BASE_URL } from "../constants/constants.js"

export const preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
}

export const fetchData = async (url) => {
    try{
        const response = await fetch(`${BASE_URL}${url}`)
        return response.json()
    } catch (e){
        console.log(e)
        alert('Something went wrong. Please, reload the page!')
    }
}

export const getContent = (tabs) => {
    let data = null;
    tabs.every(tab => {
        if(!Object.keys(tab.data).length) return true
        data = tab.data
    });
    data.systems.forEach(system =>{
        const filteredSubsystems = data.subsystems.filter(subsystem => subsystem.system_id === system.id)
        system.subsystems = filteredSubsystems
    })
    console.log(data.systems)
    return data.systems;
}

export const addDropdownEventListeners = (input) => {
    const highlight = (e) => {
        input.classList.add('hovered')
    }
    
    const unhighlight = (e) => {
        input.classList.remove('hovered')
    }
    
    const handleDrop = (e) => {
        console.log(e.target.files)
        const dt = e.dataTransfer
        const files = [...dt.files]
        files.forEach(uploadFile)
        files.forEach(previewFile)
    }

    const handleBrowse = (e) => {
        const files = [...e.target.files]
        files.forEach(uploadFile)
        files.forEach(previewFile)
    }
    
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', ({target:{result}})=>{
            document.querySelector('.file-input__arrow')?.remove()
            document.querySelector('.file-input__text')?.remove()
            document.querySelector('.file-input__label').append(File(result))
        })
    }
    function uploadFile(file) {
        const formData = new FormData()
        formData.append('file', file)
    //     fetch(`${BASE_URL}upload`, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(()=>console.log('File uploaded!'))
    //     .catch(() => console.log('Something went wrong!Try to upload file again!'))
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        input.addEventListener(eventName, preventDefaults)   
        document.body.addEventListener(eventName, preventDefaults)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        input.addEventListener(eventName, highlight)
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        input.addEventListener(eventName, unhighlight)
    });

    input.addEventListener('drop', handleDrop)
    input.querySelector('input').addEventListener('change', handleBrowse)
    
}