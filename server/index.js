import http from 'http';
import fs from 'fs/promises';

const server = http.createServer((req,res)=>{
    const path = req.url.split('/').filter(Boolean).slice(2)
    if(req.method === 'GET' && path.length === 1 && path[0] === 'page_data'){
        fs.readFile('./json/test_data.json','utf-8')
        .then((data)=>{
            res.writeHead(200,{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            })
            res.end(data)
        })
        .catch(()=>{
            res.writeHead(404, {"content-type": "text/plain"});
            res.end("Error 404: Page not found.");
        })
    } else if (req.method === 'POST') {
        res.writeHead(200,{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        })
        res.end('')
    }
})

server.listen(8000,()=>{
    console.log('Server...')
})
