import express from 'express'
import { sum } from './helpers/sum.js'

const PORT = 5000

const app = express()

app.listen(PORT, ()=>{
    console.log("Server is running on", PORT)
})

app.get("/", async(req, res)=>{
    res.json({
        message:"Good going on home"
    })
})
app.get("/getSum/:a/:b", async(req, res)=>{
    const {a, b} = req.params;
    res.json({
        "success": "true",
        "sum": sum(parseInt(a), parseInt(b))
    })
})