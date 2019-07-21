// const http=require("http");
// var fs=require("fs");
// var replace=require("./replace.js");
// var reader=fs.createReadStream("data.json");
// let json=fs.readFileSync("data.json");
// var jsonObj=JSON.parse(json);
// var templateProduct=fs.readFileSync("./template-product.html");
// var templateCard=fs.readFileSync("./template-card.html");
// var templatOverview=fs.readFileSync("./template-overview.html");




// const server=http.createServer(function(req,res)
// {   var makecard=function(templateCard,json){
//     return(templateCard,json);
// }
//     // res.writeHead(200 , {"content-type":"text/plain"});
//     var path=req.url;
//     if(path=="/products"){
//        var producthtml=replace(templateProduct,jsonObj[0]);
//        res.writeHead(200,{"content-type":"text/html"})

//         res.end(replace);
        
//     }else if ( path =="/"){
//         var cardarr="";
//         for(var i=0;i<jsonObj.listen;i++){
//             cardarr=makecard(templateCard,jsonObj[i]);
//         }
//         var output=templatOverview.replace(/{%PRODUCT_CARDS%}/,cardarr);
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("home page ");
//     }else if(path =="/overview"){
//         res.end(" home page");
//     }else if(path =="/api"){
//         var data=fs.readFileSync("./data.json");
//         res.writeHead(200,{"content-type":"application/json"});
//         res.write(data);
//         res.end();
//     }
//             // reader.pipe(res);}
//     else {
//         res.end(" ERROR PAGE NOT FOUND");

//     }

//     // res.write("hi");
//     // res.end(" we have created node server");
// });   
// //git inint , git status, git add , git commit -m"first dynamic website"
// server.listen(3000);
// console.log("server is listening at port 3000")
// imports
var http = require("http");
var fs = require("fs");
var url=require("url");
// 
var replace = require("./replace.js");
// json file
var obj = fs.readFileSync("./data.json");
var jsonObj = JSON.parse(obj);

// templates
var templateProduct = fs
  .readFileSync("./template-product.html")
  .toString();
var templateCards = fs
  .readFileSync("./template-card.html")
  .toString();
var templateOverview = fs
  .readFileSync("./template-overview.html")
  .toString();
  var MakeCard = function(templateCards, json) {
    return replace(templateCards, json);
  };
var server = http.createServer(function(req, res) {
  // console.log(req.url);
  // requested path
  var path = req.url;

  // console.log(url.parse(path,true));

  var id=url.parse(path,true).query.id;
//   console.log(id);
   var path=url.parse(path,true).pathname;
  
  // console.log( path);
  if (path == "/product") {

    var ProductHtml = replace(templateProduct, jsonObj[id]);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(ProductHtml);
    // res.end("products page");
  } else if (path == "/" || path == "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    // var cardArr=jsonObj.map(function(el){
    //   return MakeCard(templateCards,el);
    // })
    var cards = "";
    for (let i = 0; i < jsonObj.length; i++) {
      cards += MakeCard(templateCards, jsonObj[i]);
    }
// overview product card =>cards
    let OverviewHTML = templateOverview.replace("{%PRODUCT_CARDS%}", cards);

    res.end(OverviewHTML);
    // res.end("Home page");
  } else if (path == "/api") {
    res.writeHead(200, {
      "content-type": "application/json"
    });
    res.write(obj);
 res.end();
  } else {
    res.writeHead(404);
    res.end("Error 404 Page not found");
  }
});
var port=process.env.PORT||80;
server.listen(3000);
console.log("Server is listening at port 3000");