import  express  from "express";
import  dotenv  from "dotenv";
// dotenv.config()




const app=express()
const Port=process.env.PORT || 3000
app.use(express.json())
app.listen(Port,()=>{
    console.log(`server statrted at port ${Port}`)
    console.log('moiz')
})
const products = [
    { id: "1", name: "Laptop", price: 1200, color: "Silver" },
    { id: "2", name: "Smartphone", price: 800, color: "Black" },
    { id: "3", name: "Headphones", price: 100, color: "Red" },
    { id: "4", name: "Camera", price: 600, color: "Blue" },
    { id: "5", name: "Backpack", price: 50, color: "Gray" },
    { id: "6", name: "Watch", price: 300, color: "Gold" },
    { id: "7", name: "Gaming Console", price: 400, color: "Black" },
    { id: "8", name: "Desk Chair", price: 150, color: "Green" },
    { id: "9", name: "Coffee Maker", price: 80, color: "Silver" },
    { id: "10", name: "Bluetooth Speaker", price: 70, color: "Black" }
    ,{ id: "11", name: "Lipstick", price: 15, color: "Red" },
    { id: "12", name: "Foundation", price: 25, color: "Beige" },
    { id: "13", name: "Eyeshadow Palette", price: 30, color: "Neutral" },
    { id: "14", name: "Mascara", price: 12, color: "Black" },
    { id: "15", name: "Blush", price: 18, color: "Rose" },
    { id: "16", name: "Eyeliner", price: 10, color: "Brown" },
    { id: "17", name: "Nail Polish", price: 8, color: "Pink" },
    { id: "18", name: "Highlighter", price: 20, color: "Gold" },
    { id: "19", name: "Makeup Remover", price: 12, color: "Clear" },
    { id: "20", name: "Lip Gloss", price: 14, color: "Peach" },
    { id: "21", name: "Setting Spray", price: 16, color: "Transparent" },
    { id: "22", name: "Contour Kit", price: 28, color: "Bronze" },
    { id: "23", name: "BB Cream", price: 22, color: "Light" },
    { id: "24", name: "Perfume", price: 35, color: "Sweet Floral" },
    { id: "25", name: "Makeup Brushes Set", price: 40, color: "Rose Gold" },
    { id: "26", name: "Facial Cleanser", price: 18, color: "Blue" },
    { id: "27", name: "Hair Spray", price: 14, color: "Strong Hold" },
    { id: "28", name: "Anti-Aging Cream", price: 50, color: "White" },
    { id: "29", name: "Shimmer Body Lotion", price: 25, color: "Champagne" },
    { id: "30", name: "Hair Serum", price: 15, color: "Clear" }
  ];

app.get('/products/:id',(req,res)=>{
    

    let productFinder=products.find((e)=>{
        return req.params.id==e.id})
      if(!productFinder){
        return(
        res.json([
            {
                status:false,
                messsage:'No data Found'
            }
        ]))
      }  
      res.json(productFinder
        )
})
app.get('/products',(req,res)=>{
    res.json([{
        status:true,
        data:products}])
    
})
app.get('/',(req,res)=>{
    res.json({
        status:true,
        data:[]
    })
})

let api=`
http://localhost:8000/products`

