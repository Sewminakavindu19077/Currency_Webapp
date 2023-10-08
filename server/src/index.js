const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res)=>{
const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=b60a79f10fb043e594197d73f37895c0";



try{
    const nameResponce = await axios.get(nameURL);
    const nameData = namesResponce.data;
    
    return res.json(nameData);
    
}catch(err){
    console.error(err);
}

})

//listen to a port
app.listen( 5000, ()=>{
    console.log("SERVER STARED");
});