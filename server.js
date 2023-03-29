const express = require('express')
const app = express()

const PORT = 8000

const rappers = {
   
    'sago':{
       
    'birthName': 'Sago',
    'birthLocation': 'Gaziantep',
    'age': 44, 
   },
   'ceza':{
       
    'birthName': 'ceza',
    'birthLocation': 'Ankara',
    'age': 47, 
   },
   'killa':{
       
    'birthName': 'Killa Hakan',
    'birthLocation': 'Berlin',
    'age': 54, 
   },

   'unknown':{
       
    'birthName': 'Unknown',
    'birthLocation': 'Unknown',
    'age': 0, 
   },
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()

    if (rappers[rapperName]){
        //console.log(rappers[rapperName].birthName)
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})