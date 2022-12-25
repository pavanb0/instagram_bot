const Instagram = require('instagram-web-api')
const fs = require('fs')
var content = fs.readFileSync('process.json');
var jsoninit = JSON.parse(content);
const data = (jsoninit.username,jsoninit.password);
// i love a girl but don't know she loves me or not what i should do



function instaINIT(){
var date = new Date();
return date.getSeconds(); 
}

setInterval(() => {console.log(instaINIT())},1000*1);







