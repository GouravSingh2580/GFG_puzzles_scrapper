// function dso(){
//     return new Promise(res=>{
//       setTimeout(()=>{
//         res("after 0.5")
//       },500)
//     })
//   }
//   function dso1(){
//     return new Promise(res=>{
//       setTimeout(()=>{
//         res("after 1")
//       },1000)
//     })
//   }
//   function dso2(){
//     return new Promise(res=>{
//       setTimeout(()=>{
//         res("after 1.5")
//       },10000)
//     })
//   }
//   (async ()=>{
//     console.log("start");
//     let x= await dso();
//     let y= await dso1();
//     let z= await dso2();
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log("end");
//   })();
  
  
  
  // //promise ka obj
  
  
  
  // console.log("start")
  
  // setTimeout(()=>{
  //   console.log("timeout")
  // },0)
  
  
  // function a(){
  //   console.log("iffie")
  // }a()

// let i=0;
// (function a(){
//     if(i<10){console.log(i)
//     i+=1; setTimeout(a(),1000);}
// } )()


// let i=10,j=90;
// if(i==100 || j==100 || i+j==100) console.log("yes")


// let fname="abc"  //output=bcd

// for(let i=0;i<fname.length;i++){
//   console.log(String.fromCharCode((fname.charCodeAt(i)+1))) //console.log(fname.charCodeAt(i))
// }
//console.log(fname)


// var today=new Date();
// console.log(today.toString())


// const a=null;
// if(a) console.log("true")
// else console.log("false")

// const api="a195a35ecd670202751ab28377131c54"
const request=require("request")
const cheerio=require("cheerio")

const url = "https://www.screener.in/company/ITC/consolidated/";

request(url, function (err, res, html) {
  if (err) {
    console.log(err);
  } else {
    getData(html);
  }
});

function getData(html){
  let $=cheerio.load(html);
  let t=$(".sub.show-more-box.about.highlight");
  console.log(t.text());
}
