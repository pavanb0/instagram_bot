const fs = require('fs');
var createHash = require('hash-generator');
var content = fs.readFileSync('process.json');
var jsoninit = JSON.parse(content);
const apikey = jsoninit.api_key;
const tags = jsoninit.tags;
// const {generateImage, drawWords} = require('./imagewriter.js');
// const getQuote = require('./quotes.js');




async function image(tags, api_key = apikey) {
    const url = `https://api.unsplash.com/search/photos?query=${tags}&client_id=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function bestpic(data) {
    const len = data['results'].length;
    let likes = [];
    let li = 0;
    for (let i = 0; i < len; i++) {
        const element = data['results'][i];
        if (element["sponsorship"] == null) {
            if (li < element["likes"]) {
                likes = []
                likes.push(element["likes"], element['urls']['regular'])
                li = element["likes"]
            }
        }
    }
    return likes;
}

async function main() {
    const data = await image(tags[Math.floor(Math.random() * tags.length)]);
    const best = bestpic(data);
    console.log(best);
    // const quote = await (await getQuote()).toString();
    // const img = await generateImage(best[1],"hello mom");

    // open a file called "lenna.png"
  }
main()
module.exports = image;