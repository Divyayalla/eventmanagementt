import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import cors from "cors";
import student from './models/student.js';
import Router from './src/router/studentPostRouter.js'
import mail from './models/contact.js'
import Events from './models/event.js'
import nodemailer from 'nodemailer'
import multer from 'multer';
const app = express();//express for creating route paths.it will worth
app.use(bodyParser.json())
app.use(cors())
app.use('/', Router)
app.use(express.json())
app.use(express.static('public'));

// mongoose.connect()
mongoose.connect("mongodb+srv://21a91a04p5:rNk4RB9rLeKGsero@cluster0.jlmiz8f.mongodb.net/Cluster0?retryWrites=true&w=majority")
.then(() => app.listen(5000))
.then(() =>console.log("Connected to Database & Listining to localhost 5000")
)
.catch((err) => console.log(err));
app.post('/api/add-details',async(req,res,next)=>{
    console.log(req.body)

    const {username,email,password}=req.body;
    const stud =new student({
        username,
        email,
        password
    });
    try{
       let user=await stud.save();
       if(user){
        return res.status(201).json({msg:"success",user})
       }else{
        return res.status(404).json({msg:"failed"})
       }
        
    }catch(err){
        return console.log(err)
    }
    
})
app.post('/api/login-user',async (req,res,next)=>{
      const {email,password}=req.body;
      try{
          const  existingUser = await student.findOne({email:email});
          if(existingUser){
              if(existingUser.password==req.body.password){
                  return res.status(200).json({msg:"login successfull",userdata:existingUser})
              }
              else{
                  return res.status(201).json({msg:"incorrect password"})
              }
          }else{
              return res.status(201).json({msg:"user not found"})
          }
      }catch(err){
          return console.log(err)
      }
      })
// app.get('/getstudent',async(req,res,next)=>{
//     let studentdata
//     try{
//        studentdata = await student.find()
//     }
//     catch(err){
//        console.log(err)
//     }
//     if(!studentdata){
//        console.log("no students found")
//     }
//     res.send("success")
    
//     return res.status(200).json({studentdata})
  
//   })
// app.get('/text/:id',(req,res)=>{
//     try{
//         const txt_name=req.params.id;
//         res.sendFile(txt_name,{root:"Content"});
//     }
//     catch(error){
//         console.log(error)
//     }
// })
app.post('/api/add-email',(req,res,next)=>{
    console.log(req.body)
    const {email,date,events}=req.body;
    const mailer =new mail({
        email,
        date,
        events
    });
   try{
    
    mailer.save()
   }
   catch(err){
    console.log(err);
   }
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kavyaachanta2004@gmail.com',
      pass: 'ublo cphw wdoa nuea'
    }
  });
var mailOptions = {
    from: 'kavyaachanta2004@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'Thank you for registered to '+ events
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });




})
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })
//add product 
app.post("/addevent",upload.single("myfile"),async(req, res, next)=>{
  const eventpic=(req.file)? req.file.filename:null
  console.log(req.body)
  const {event,price} =req.body
  const even = new Events({
      eventpic,
      price,
      event
     
    })
  try{
      let eventsdata = even.save()//for saving the data into the database
      return res.status(200).json({ message: 'event successfully',eventsdata });
  }catch(err){
         return res.status(200).json({message:"not uploaded"})
  }      
})

app.get('/getallevents',async(req,res,next)=>{
  let eventsdata; 
  try{
      eventsdata=await Events.find();
  }catch(err){
      console.log(err);
  }
  if(!eventsdata){

      return res.status(204).json({message:"no data found."})

  }
  return res.status(200).json(eventsdata)
})

