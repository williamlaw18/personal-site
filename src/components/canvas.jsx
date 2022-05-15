import React, { useEffect, useRef, useState } from "react";

const Canvas = (
    {loading, container, type, mouse, rate = 500, colors = [], border = true, minRadius = 10, maxRadius = 100, xMove = 1.5, yMove = 1,}) => {
    
    const canvasRef = useRef()
    const objects = useRef([])

    const animateRef = useRef();
    const interval = useRef(null)
    
    const [canvasHeight, setCanvasHeight] = useState(0);
    const [canvasWidth, setCanvasWidth] = useState(0);

    const initCanvas = () => {
        setCanvasArea();
        resetInterval()
    }

    const setCanvasArea = () => {
        if (container.current != null){
            setCanvasHeight(container.current.offsetHeight)
            setCanvasWidth(container.current.offsetWidth);
        }
    }

    //adds particle to list
    const createObject = (x, y) => {
        const object = {
            type: type,
            x: x,
            y: y,
            border: border,
            color: colors[Math.floor((Math.random() * colors.length))],
            radius: Math.floor(minRadius + (Math.random() * (maxRadius - minRadius))),
        };
        objects.current = [...objects.current, object]
    }

    //draws particles on canvas
    const drawObjects = () => {
        if (canvasRef.current != null){
            const ctx = canvasRef.current?.getContext('2d')
            ctx.clearRect(0, 0, canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
            
            objects.current = objects.current.filter((item) => item.radius > minRadius);
            
            objects.current.forEach((object) => {
                object.radius = (Math.max(0, object.radius - (0.25)));
                object.x = ((object.x).toFixed(1) - xMove);
                object.y = ((object.y).toFixed(1) - yMove);
                ctx.beginPath()

                if (object.type == 'circle'){
                    ctx.arc(object.x, object.y, object.radius, 0, 2 * Math.PI, false)
                } else if (object.type == 'hex'){
                    let a = 2 * (Math.PI) / 6;
                    for (let i = 0; i < 6; i++) {
                        let posA = (object.x + object.radius * Math.cos(a * i))
                        let posB = (object.y + object.radius * Math.sin(a * i))
                        ctx.lineTo(posA.toFixed(1), posB.toFixed(1));
                    }
                }
                if (object.border) {
                    ctx.closePath();
                    ctx.stroke();
                }
                if(colors.length > 0){
                    ctx.fillStyle = object.color;
                    ctx.fill()
                }
            });
        }
    };

    //Creates particle randomly
    const randomObject = () => {
        if (canvasRef.current != null){
            let randomX = 10 + Math.floor(Math.random() * (canvasRef.current.width - 10));
            let randomY = 10 + Math.floor(Math.random() * (canvasRef.current.height - 10));
            createObject(randomX, randomY);
        }
        drawObjects();
    }

    //Creates particle on cursor pos
    const canvasDraw = (e) => {
        const canDraw = (e.nativeEvent.offsetX * e.nativeEvent.offsetY) % 10 == 0
        if (canDraw && mouse == true) createObject(Math.floor(e.nativeEvent.offsetX), Math.floor(e.nativeEvent.offsetY));
        if (mouse == true) drawObjects();
    };

    //Anim frames
    const animate = () => {
        drawObjects();
        animateRef.current = requestAnimationFrame(animate);
    }

    const resetInterval = () => {
        if (interval.current != null) clearInterval(interval.current);
        interval.current = setInterval(() => {
            randomObject();
        }, rate)
    }
    
    //Component update
    useEffect(() => {     
        if (loading == false || loading == null){
            initCanvas()
            animateRef.current = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animateRef.current);
        }
        window.addEventListener('resize', setCanvasArea);

        return () => {
            clearInterval(interval.current);
            window.removeEventListener('resize', setCanvasArea);
        };
    }, [loading, type]);

    return (
        <React.Fragment>
            <canvas
                onMouseMove={canvasDraw}
                ref={canvasRef}
                width={`${canvasWidth}px`}
                height={`${canvasHeight}px`}
            />
        </React.Fragment>
    );
}

export default Canvas
