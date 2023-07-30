const express=require("express")
const app=express()
const geocode=require("./geocode")
const weather=require("./weather")
const port=process.env.PORT || 3000

console.log("Please enter the country")
const country = process.argv[2]
geocode(country,(error,data)=>{
    console.log("error",error)
    console.log("data",data)
    var latitude=data.latitude
    var longtitude=data.longtitude

    if (data) {
    weather( data.latitude , data.longtitude ,(error,data)=>{
        // la=data.latitude
        console.log("error: ",error)
        console.log("wether: ",data)
        var condition
       var temp=data.temp
        app.get("/weather",(req,res)=>
        {res.render("weather",{country:country,
            latitude:latitude,
            longitude:longtitude,
            temp:temp
        })})
    })}
        else{
            console.log("there is no data")
        }

})





app.set("view engine","hbs")

app.get("/",(req,res)=>
{res.render("index",{
    title:"welcome to our website",
})})
// app.get("/weather",(req,res)=>
// {res.render("weather",{country:country
//     latitude:latitude,longitude:longitude
// })})

// app.get("/service",(req,res)=>
// {res.render("service",{
//     name:"aya",age:"this is home page"
// })})
// endpoint
// app.get("/service",(req,res)=>{
//     res.render("service",{
//         name:"aya",age:25
//     })
// })

app.listen(port,()=>{
console.log(port)})