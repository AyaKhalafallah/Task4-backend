const request=require("request")



const geocode=(location,callback)=>{
    const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url:geocodeUrl,json:true},(error,response)=>{
    
        if(error){
      callback(console.log("website error"),undefined)
          }
        else if(response.body.message){
        callback(console.log(response.body.message),undefined)
    
    }
    else if (response.body.features.length==0){
        callback(console.log("location error"),undefined)
    
        }
        else
        { 
    
            callback(undefined,  {longtitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]})
    
    
        }
    }) }
 

    module.exports = geocode;