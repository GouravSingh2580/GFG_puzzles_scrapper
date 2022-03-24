const request=require("request")
const url="http://api.weatherstack.com/current?access_key=a195a35ecd670202751ab28377131c54&query=28.646680,77.414270"
request(url,function(err,res,html){
    if(err){
        console.log(err)
    }
    else{
        const data=JSON.parse(res.body)
        console.log(data.current)
    }
})