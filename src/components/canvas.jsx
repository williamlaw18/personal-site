import React, { useEffect, useRef, useState } from "react";

const Canvas = ({type, mouse}) => {
    const canvasRef = useRef()
    const objects = useRef([])

    const createObject = (x, y) => {
        const object = {
            type: type,
            x: x,
            y: y,
            radius: 10 + (Math.random() * (100 - 10)) 
        };
        objects.current = [...objects.current, object]
    }

    const drawObjects = () => {
        const ctx = canvasRef.current?.getContext('2d')
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        objects.current = objects.current.filter((item) => item.radius > 10);
            
        objects.current.forEach((object) => {
            object.radius = Math.max(0, object.radius - (0.01 * object.radius));
            object.x = object.x - 0.3;
            object.y = object.y - 0.5;
            ctx.beginPath()
            if (object.type == 'circle'){
                ctx.arc(object.x, object.y, object.radius, 0, 2 * Math.PI, false)
                ctx.fillStyle = "#B4E4FF"
                ctx.fill()
            } else if (object.type == 'hex'){
                let a = 2 * Math.PI / 6;
                for (let i = 0; i < 6; i++) {
                    ctx.lineTo(object.x + object.radius * Math.cos(a * i), object.y + object.radius * Math.sin(a * i));
                }
                ctx.closePath();
                ctx.stroke();
            }
            
        });
    };

    const randomObject = () => {
        let randomX = 10 + Math.floor(Math.random() * (canvasRef.current.width - 10));
        let randomY = 10 + Math.floor(Math.random() * (canvasRef.current.height - 10));
        createObject(randomX, randomY);
        drawObjects();
    }

    const canvasDraw = (e) => {
        const canDraw = (e.nativeEvent.offsetX * e.nativeEvent.offsetY) % 10 == 0
        if (canDraw && mouse == true) createObject(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        if (mouse == true) drawObjects();
    };

    useEffect(() => {

        const addObject = setInterval(() => {
            randomObject();
        }, 500)

        const interval = setInterval(() => {
            drawObjects();
        }, 20)
        
        return () => {
            clearInterval(addObject)
            clearInterval(interval);
        };
    }, []);

    return (
        <canvas
            onMouseMove={canvasDraw}
            ref={canvasRef}
            width={`1280px`}
            height={`900px`}
        />
    );
}

export default Canvas
