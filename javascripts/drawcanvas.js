var canvas, boundings,ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

var x = "black",
    y = 2;
	
	
window.onload = init(); 
   
    function init() {
        canvas = document.getElementById('drawing');
        ctx = canvas.getContext("2d");
		boundings = canvas.getBoundingClientRect();
		
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    
	function findxy(res, e) {
        if (res == 'down') {
            setMouseCoordinates(e);
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                setMouseCoordinates(e);
                draw();
            }
        }
    }
	
	function setMouseCoordinates(e) {
		prevX = currX;
		prevY = currY;
		currX = e.clientX - boundings.left;
		currY = e.clientY - boundings.top;
		
	}
	function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = 15;
		ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
    }
    
    function color(colorName) {
		var currentSoundEffect = new Audio("assets/sounds/effects/select color.mp3");
		currentSoundEffect.play();
			
        switch (colorName) {
            case "green":
                x = "rgb(173, 255, 47)";
                break;
            case "blue":
                x = "rgb(70, 130, 180)";
                break;
            case "red":
                x = "red";
                break;
            case "yellow":
                x = "yellow";
                break;
            case "orange":
                x = "rgb(255, 165, 0)";
                break;
            case "black":
                x = "black";
                break;
            case "white":
                x = "white";
                break;
        }
        if (x == "white") y = 14;
        else y = 2;
    
    }
    
    function erase() {
		var currentSoundEffect = new Audio("assets/sounds/effects/wipe.mp3");
			currentSoundEffect.play();
			
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }