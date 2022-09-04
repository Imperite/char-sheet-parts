let lineWidth = 25
let progress = 0
function getCanvasData() {
    let canvas = document.getElementById('percentage');
    let context = canvas.getContext('2d');
    context.lineWidth = lineWidth;
    context.lineCap = "round";
    // context.fillStyle = '#0000'
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = canvas.width / 2 - lineWidth;
    return { context, x, y, radius };
}

function drawBar(data) {
    let context = data.context
    context.strokeStyle = 'teal';
    context.beginPath();
    context.arc(data.x, data.y, data.radius, radian(135), radian(43));
    context.stroke();
}

function radian(degree) {
    return (Math.PI / 180) * degree;
}

function drawProgress(xp) {
    // do something for above 300 and for higher levels
    data = getCanvasData()
    let context = data.context

    let newProgress = 272 * xp / 300
    let direction = (newProgress > progress ? 1 : -1)

    var extend = setInterval(function () {
        context.clearRect(0, 0, 300, 300)
        drawBar(data)
        context.strokeStyle = 'lightblue';
        context.beginPath();
        context.arc(data.x, data.y, data.radius, radian(135), radian(135 + progress));
        context.stroke();
        progress += direction;
        if ((newProgress - progress) * direction <= 2) clearInterval(extend)
    }, 5)
}