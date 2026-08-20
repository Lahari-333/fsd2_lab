const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.json({message:"Welcome to our API!",
        status:"Active",
    timestamp:new Date()});
});
app.get('/students',(req,res)=>{
    const studentList=[{id:101,name:"Alice",course:"Mern stack"},
        {id:102,name:"Bob",course:"Datascience"},
        {id:103,name:"Charlie",course:"UI/UX"}
    ];
});
app.get('/product/:id',(req,res)=>{
    const productId=req.params.id;
    req.json({requestedId:productId,
        category:"electronics",
        inStock:true,
        tags:["gadget","new-arrival"]
    });
});
app.listen(PORT,()=>{
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});