const request = require ('request')

const weather = (latitude , longtitude , callback ) => {

  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
  
  request ({url, json : true} , (error , response) => {
       
      if(error) {
           callback ("website error" , undefined)
      } else if(response.body.error){
           callback (response.body.error.message , undefined)
      } else {
        
              callback(undefined ,{currentWeather: response.body.current.condition.text,
             temp:  response.body.current.temp_c } )
      }
  })
  }

module.exports = weather;