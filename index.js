import express from 'express';import cors from 'cors';
const app=express();app.use(cors());app.use(express.json());
app.get('/api/health',(req,res)=>res.json({ok:true,service:'inventory-api'}));
app.get('/api',(req,res)=>res.json({name:'Inventory API',status:'ready'}));
const port=process.env.PORT||4000;app.listen(port,()=>console.log(`Inventory API listening on ${port}`));
