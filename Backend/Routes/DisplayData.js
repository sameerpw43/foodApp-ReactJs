const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try{
        //console.log(global.food);
        res.send([global.food,global.foodcat])
    }
    catch(error){
        console.log(error.message);
        res.send("Server Error")
    }
})
module.exports = router;