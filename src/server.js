const express = require('express');
const morgan = require('morgan')
const app    = express();
const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuid/v4')// generador de ramdows

//setting
app.set('puerto', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))


//midddleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//multer functionpara poner el mismo nombre de la imagen 
const storage = multer.diskStorage({
     destination: path.join(__dirname, '../src/public/uploads/'),
     filename:  (req, file, cb) => {
         cb(null,uuidv4() + path.extname(file.originalname).toLocaleLowerCase())
     }
 })
 
 app.use(multer({dest:path.join(__dirname,'../src/public/uploads/'),storage:storage,limits:{fileSize:1000000}})
        .single('image'))
 

//routes
app.use(require('./routes/index.js'))


//static file
app.use(express.static(path.join(__dirname,'public')))


app.listen(app.get('puerto'), ()=> {
     console.log('server on port ', app.get('puerto'))
})

