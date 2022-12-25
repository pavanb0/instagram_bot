const { createCanvas, loadImage } = require('canvas')
async function generateImage(img, quote) {
    const canvas = createCanvas(1080, 1080)
    const ctx = canvas.getContext('2d')
    let [x, y] = img.size;

    x = Number(x)
    y = Number(y)

    let scale = Math.max(canvas.width / x, canvas.height / y);
    let xx = (canvas.width / 2) - (x / 2) * scale;
    let yy = (canvas.height / 2) - (y / 2) * scale;

    ctx.drawImage(await loadImage(img.url), xx, yy, x * scale, y * scale);

    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "#000000"
    ctx.fill()
    ctx.globalAlpha = 1;

    ctx.font = `bold 20px soft`
    ctx.fillStyle = `#FFFFFF`
    ctx.textAlign = "end"
    ctx.fillText(`${quote.character} •`, 1050, 1050)
    ctx.textAlign = "start"
    ctx.fillText(`• ${quote.anime}`, 20, 50)


    ctx.font = `bold 40px soft`;
    const words = quote.quote.split(' ');
    drawWords(ctx, quote.quote, 50, 540 - ((words.length / 6) * 10), 1000, 40, 30, words)

    const image = await jimp.read(canvas.toBuffer())
    return image.write("image.jpg")
}


function drawWords(context, text, x, y, maxWidth, lineHeight, rectHeight, words) {
    var line = '';
    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
    rectHeight = rectHeight + lineHeight;
}
 generateImage('Screenshot 2022-12-24 211211.png','hello mom')
module.exports = {generateImage, drawWords};