const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req,res,next)=>{
    res.render('index')

}) 

router.post('/upload', (req,res,next)=>{
  res.send('work')
      
}) 



module.exports = router


