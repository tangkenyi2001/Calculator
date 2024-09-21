import express from "express";
import cors from "cors";
const app=express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.listen(PORT, () => {
    console.log("Server Listening on PORT:",PORT);
  });

app.post('/add',(request,response)=>{
  const num1 = parseInt(request.body.num1);
  const num2 = parseInt(request.body.num2);
  const result = num1 + num2;
  const responseData = {
    result,
    numbers: {
      num1,
      num2,
    },
    message: 'Addition successful',
    operation:'+',
    timestamp: new Date().toISOString(), // Adding a timestamp for tracking
  };
  console.log(responseData);
  response.set("Content-Type","application/json");
  response.json(responseData);
})

app.post('/sub',(request,response)=>{
  const num1 = parseInt(request.body.num1);
  const num2 = parseInt(request.body.num2);
  const result = num1 - num2;
  const responseData = {
    result,
    numbers: {
      num1,
      num2,
    },
    message: 'Subtraction successful',
    operation:'-',
    timestamp: new Date().toISOString(), // Adding a timestamp for tracking
  };
  console.log(responseData);
  response.set("Content-Type","application/json");
  response.json(responseData);
})

export default app; 
