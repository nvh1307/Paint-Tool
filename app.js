var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')

var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(300,150);
// ctx.stroke()

var currentPos= {
    x:0,
    y:0
}
var currentPosAfter= {
    x:0,
    y:0
}

var isDrawing = false

var size = 10
sizeEl.innerText = size


var colorPaint = '#000000'
document.addEventListener('mousedown',function(e){
    currentPos = {
        x:e.offsetX,
        y:e.offsetY
    }
    isDrawing = true
})

document.addEventListener('mousemove',function(e){
    if(isDrawing){

        currentPosAfter = {
            x:e.offsetX,
            y:e.offsetY
        }

        // ve hinh tron o dau va cuoi cua duong thang
        
        
        ctx.beginPath();
        ctx.arc(currentPos.x,currentPos.y,size,0,2*Math.PI)
        ctx.fillStyle=colorPaint
        ctx.fill();

        // fill outline
        ctx.beginPath();
        ctx.moveTo(currentPos.x,currentPos.y);
        ctx.lineTo(currentPosAfter.x,currentPosAfter.y);
        ctx.strokeStyle = colorPaint ; 
        ctx.lineWidth = size * 2;  
        ctx.stroke();

        currentPos.x = currentPosAfter.x
        currentPos.y = currentPosAfter.y
    }
})

document.addEventListener('mouseup',function(e){
    isDrawing=false
})

color.addEventListener('change',function(e){
    colorPaint = e.target.value
})

eraser.addEventListener('click',function(e){
    colorPaint = '#ffffff'
})

decrease.addEventListener('click',function(){
    if(size>5){
        size-=5
        sizeEl.innerText = size
    }
    else{
        size = 5
        sizeEl.innerText = size

    }
})

increase.addEventListener('click',function(){
    if(size<30){
        size+=5
        sizeEl.innerText = size

    }
    else{
        size = 30
        sizeEl.innerText = size

    }
})

clear.addEventListener('click', function(){
    var canvasStart = canvas.getClientRects()[0]
    ctx.clearRect(0,0,canvasStart.width,canvasStart.height)
})

