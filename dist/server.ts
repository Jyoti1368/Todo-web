import 'dotenv/config'
import express  from "express";


const app = express();
const PORT =process.env.PORT|| 4000;


app.use(express.json())

app.use(express.urlencoded({extended:false}))


//routes
import routes from './routes/index.js'
app.use(routes)




app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})
