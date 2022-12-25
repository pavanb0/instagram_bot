
const api_url ="https://zenquotes.io/api/random";
const fs = require('fs');

async function getQuote(){
    const response = await fetch(api_url);
    const data = await response.json();
    // const quote = data[0]['q'] + "-" + data[0]['a'];
    return data[0]['q']+"\n"+data[0]['a'];
}

async function main(){
    const quote =await getQuote();
    console.log(quote);
}


module.exports = getQuote;