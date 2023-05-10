if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }
  
const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")

const Product = require('./models/product')
const UserModel = require('./models/user')

// const DATABASE_URL = 'mongodb+srv://Jana:todo@cluster0.zpqndab.mongodb.net/?retryWrites=true&w=majority'
// const DATABASE_URL = 'mongodb+srv://dhanushya2211:dhanu@123@cluster0.oqbbqbb.mongodb.net/technet'
mongoose.connect("mongodb+srv://fahima:passpass@cluster0.oz07pn2.mongodb.net/technet")
// mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }))


app.use(cors())

app.post("/add",async(req, res) => {
  // res.send(req.file); 
  const saveImage = Product({
    title: req.body.title,
    upload: req.body.upload,
    description: req.body.description,
  });
  await saveImage
    .save()
    // .then((res) => {
    //   console.log("image is saved");
    // })
    // .catch((err) => {
    //   console.log(err, "error has occur");
    // });
    const products= await Product.find({})
    res.send(products)
});

app.get('/get',async(req,res)=>{
    try{
        const products= await Product.find({})
        res.status(200).json(products)
    }catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
})

app.post('/edit/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const {title,description,upload}=req.body
        const product = await Product.findOneAndUpdate({_id:id},{...req.body})
        console.log(product);
        await product.save()
        const products= await Product.find({})
        res.status(200).json(products)
    }catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
})

app.get('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id);
        await Product.deleteOne({_id:id})
        const products= await Product.find({})
        res.status(200).json(products)
    }catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
})

app.get('/fetchUser', async (req, res) => {
  const allData = await UserModel.find()
  res.json(allData)
})

app.post("/uploadSignup", (req, res) => {
  const saveSignupData = UserModel({
    name: req.body.name,
    uname: req.body.uname,
    email: req.body.email,
    password: req.body.password
  });
  saveSignupData
    .save()
    .then((res) => {
      console.log("Signup Data is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send('Signup data is saved')
});

app.get('/',(req,res)=>{
  res.send('Product List')
})


const port = process.env.PORT || 4000
app.listen(port,()=> console.log("server is running"))
