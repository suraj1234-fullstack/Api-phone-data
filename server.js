import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

const products  = [
  { id: 1, name: "wireless charger 1", Price: 5000, Image: "https://images.unsplash.com/photo-1622445275574-55bcffef8f49?w=500" },
  { id: 2, name: "wireless charger 2", Price: 500, Image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500" },
  { id: 3, name: "wireless charger 3", Price: 100, Image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500" },
  { id: 4, name: "wireless charger 4", Price: 5200, Image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500" },
  { id: 5, name: "iPhone 16", Price: 79900, Image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
  { id: 6, name: "iPhone 16 Pro", Price: 119900, Image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
  { id: 7, name: "iPhone 17", Price: 89900, Image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500" },
  { id: 8, name: "iPhone 17 Pro Max", Price: 139900, Image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
  { id: 9, name: "Samsung Galaxy S24 Ultra", Price: 129999, Image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500" },
  { id: 10, name: "Samsung Galaxy Z Fold 5", Price: 154999, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 11, name: "OnePlus 12", Price: 64999, Image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
  { id: 12, name: "Google Pixel 9 Pro", Price: 99999, Image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500" },
  { id: 13, name: "Type-C Fast Data Cable", Price: 350, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 14, name: "Lightning Cable", Price: 450, Image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500" },
  { id: 15, name: "Braided USB-C Cable", Price: 599, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 16, name: "Magnetic Wireless Power Bank", Price: 2999, Image: "https://images.unsplash.com/photo-1609592424104-94d4d123e42c?w=500" },
  { id: 17, name: "Xiaomi 14 Pro", Price: 59999, Image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
  { id: 18, name: "Vivo X100 Pro", Price: 74999, Image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500" },
  { id: 19, name: "Oppo Find X7 Ultra", Price: 79999, Image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=500" },
  { id: 20, name: "Realme GT 6", Price: 39999, Image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500" },
  { id: 21, name: "MagSafe Charger Stand", Price: 2499, Image: "https://images.unsplash.com/photo-1622445275574-55bcffef8f49?w=500" },
  { id: 22, name: "GaN 65W Fast Charger", Price: 1999, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 23, name: "Dual Port Car Charger", Price: 799, Image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500" },
  { id: 24, name: "AUX Audio Cable", Price: 250, Image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500" },
  { id: 25, name: "OTG Adapter Type-C", Price: 150, Image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500" },
  { id: 26, name: "Nothing Phone 2a", Price: 24999, Image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
  { id: 27, name: "Moto Edge 50 Pro", Price: 31999, Image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500" },
  { id: 28, name: "iQOO 12", Price: 52999, Image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=500" },
  { id: 29, name: "Poco X6 Pro", Price: 26999, Image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500" },
  { id: 30, name: "Redmi Note 13 Pro+", Price: 29999, Image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500" },
  { id: 31, name: "Tempered Glass Screen Protector", Price: 299, Image: "https://images.unsplash.com/photo-1609592424104-94d4d123e42c?w=500" },
  { id: 32, name: "Silicone Back Cover Case", Price: 399, Image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
  { id: 33, name: "Armor Rugged Case", Price: 699, Image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500" },
  { id: 34, name: "Mobile Gaming Triggers", Price: 499, Image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500" },
  { id: 35, name: "Desktop Phone Stand", Price: 349, Image: "https://images.unsplash.com/photo-1622445275574-55bcffef8f49?w=500" },
  { id: 36, name: "Flexible Phone Tripod", Price: 599, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 37, name: "Bluetooth Selfie Stick", Price: 899, Image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500" },
  { id: 38, name: "Wireless Earbuds TWS", Price: 1499, Image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 39, name: "Neckband Bluetooth Earphone", Price: 1199, Image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 40, name: "Smartwatch Series 9", Price: 3499, Image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 41, name: "Fitness Band Pro", Price: 1999, Image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500" },
  { id: 42, name: "Type-C to 3.5mm Jack Adapter", Price: 299, Image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: 43, name: "Micro USB Cable", Price: 199, Image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500" },
  { id: 44, name: "10000mAh Power Bank", Price: 1299, Image: "https://images.unsplash.com/photo-1609592424104-94d4d123e42c?w=500" },
  { id: 45, name: "20000mAh Fast Power Bank", Price: 2299, Image: "https://images.unsplash.com/photo-1609592424104-94d4d123e42c?w=500" },
  { id: 46, name: "Magnetic Phone Ring Holder", Price: 199, Image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
  { id: 47, name: "Camera Lens Protector Glass", Price: 250, Image: "https://images.unsplash.com/photo-1609592424104-94d4d123e42c?w=500" },
  { id: 48, name: "Universal Waterproof Pouch", Price: 299, Image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500" },
  { id: 49, name: "Cleaning Kit for Phones", Price: 199, Image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500" },
  { id: 50, name: "RGB LED Ring Light with Stand", Price: 1599, Image: "https://images.unsplash.com/photo-1622445275574-55bcffef8f49?w=500" }
];


app.get('/products' , (req,res)=>{
    const category =req.query.category

        if(category){
            const filterprodts = products.filter
            (p => p.category.toLowerCase() === category.toLowerCase())
            return res.json({success:true , data : filterprodts}) }
            res.json({success : true , item :products})
}) 

app.get('/products/:id',(req,res)=>{
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product){
        return res.status(404).json({success:false , message:"product id invalid"})

    }
    res.json({success :true , data:product})
})




app.listen(PORT)
