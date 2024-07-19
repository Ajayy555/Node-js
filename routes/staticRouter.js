const express =require('express');

const router = express.Router();

router.get('/person',(req, res)=>{
    return res.render('hotelHome')
})

module.exports=router;