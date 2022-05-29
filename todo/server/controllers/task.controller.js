const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.findAll = async function (req, res) {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
};
exports.create = async function (req, res) {
    const {description, delay} = req.body
    if(delay >= 120000){
        setTimeout(()=>{
        console.log('There are 2 minutes left until completion!!!')
    },delay-120000)
    }
    setTimeout(async ()=>{
        const task = await prisma.task.create({
            data:{
                description,
            }
        })
        res.json(task)
    }, delay)    
};
exports.findById = async function (req, res) {
    const task = await prisma.task.findUnique({
        where: {
            id: +req.params.id
        }
    })
    res.json(task)
};
exports.update = async function (req, res) {
    const {description, delay} = req.body
    if(delay >= 120000){
        setTimeout(()=>{
        console.log('There are 2 minutes left until completion!!!')
    },delay-120000)
    }
    setTimeout(async ()=>{
        const updateTask = await prisma.task.update({
            where:{
                id: +req.params.id
            },
            data:{
                description,
                completed:false
            }
        })
        res.json(updateTask)
    },delay)
};
exports.updateCompleted = async function (req, res) {
    const {completed} = req.body
    const updateTask = await prisma.task.update({
        where:{
            id: +req.params.id
        },
        data:{
            completed
        }
    })
    res.json(updateTask)
};
exports.delete = async function (req, res) {
    const {delay} = req.body
    if(delay >= 120000){
        setTimeout(()=>{
        console.log('There are 2 minutes left until completion!!!')
    },delay-120000)
    }
    setTimeout(async ()=>{
        const deleteTask = await prisma.task.delete({
            where: {
                id: +req.params.id
            }
        })
        res.json(deleteTask)
    }, delay)
};
