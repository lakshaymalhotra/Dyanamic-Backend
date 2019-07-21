// module.exports=function(template,jsonobj){
//     const fs=require("fs");
//     let jsonobj=fs.readFileSync("./data.json");
//     jsonobj=JSON.parse(jsonobj);
// var htmltemplate=template;
// let htmlstring=htmltemplate.replace(/{%PRODUCTNAME%}/g.jsonobj["productName"]);
// // console.log(data);

// // var html= fs.readFileSync("./template-product.html","utf8");
// // htmlstring=htmlstring.replace( /{%PRODUCTNAME%}/g , json[].productName);
// htmlstring=htmlstring.replace( /{%PRICE%}/g , jsonobj["price"]);
// htmlstring=htmlstring.replace( /{%DESCRIPTION%}/g , jsonobj["description"]);
// htmlstring=htmlstring.replace( /{%QUANTITY%}/g , jsonobj["quantity"]);
// htmlstring=htmlstring.replace( /{%NUTRIENTS%}/g , jsonobj["nutrients"]);
// htmlstring=htmlstring.replace( /{%FROM%}/g , jsonobj["from"]);
// htmlstring=htmlstring.replace( /{%IMAGE%}/g , jsonobj["image"]);
// if(jsonobj["organic"]===false){
//     htmlstring=htmlstring.replace(/{%NOT_ORGANIC%}/g ,"not-organic");
// }
// return htmlstring;
// }
// console.log(htmlstring);


///////////////////////////////

module.exports=function(template,json){
    // const fs = require("fs");
    // let json = fs.readFileSync("./data.json");
    // json=JSON.parse(json);
  
    var productAt0=json[0];
    console.log(typeof json);
    let htmlTemplate = template;
    let output=htmlTemplate.replace(/{%PRODUCTNAME%}/g,json["productName"]);
     output=output.replace(/{%IMAGE%}/g,json["image"]);
     output=output.replace(/{%QUANTITY%}/g,json["quantity"]);
     output=output.replace(/{%PRICE%}/g,json["price"]);
     output=output.replace(/{%DESCRIPTION%}/g,json["description"]);
     output=output.replace(/{%FROM%}/g,json["from"]);
     output=output.replace(/{%NUTRIENTS%}/g,json["nutrients"]);
     output=output.replace(/{%ID%}/g,json["id"]);
     if(json["organic"]===false){
    output=output.replace(/{%NOT_ORGANIC%}/g,"not-organic");
     }
     
     return output;
  }









































