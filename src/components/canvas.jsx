import React, { useEffect, useRef, useState } from "react";

const Canvas = ({type, mouse, loading, container}) => {
    const canvasRef = useRef()
    const objects = useRef([])
    
    const [canvasHeight, setCanvasHeight] = useState(0);
    const [canvasWidth, setCanvasWidth] = useState(0);

    const setCanvasArea = () => {
        if (container.current != null){
            setCanvasHeight(container.current.offsetHeight)
            setCanvasWidth(container.current.offsetWidth);
        }
    }

    const createObject = (x, y) => {
        const object = {
            type: type,
            x: x,
            y: y,
            radius: Math.floor(10 + (Math.random() * (100 - 10))) 
        };
        objects.current = [...objects.current, object]
    }

    const drawObjects = () => {
        const ctx = canvasRef.current?.getContext('2d')
        ctx.clearRect(0, 0, canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);

        objects.current = objects.current.filter((item) => item.radius > 10);
            
        objects.current.forEach((object) => {
            object.radius = (Math.max(0, object.radius - (0.25)));
            object.x = ((object.x).toFixed(1) - 0.5);
            object.y = ((object.y).toFixed(1) - 1);
            ctx.beginPath()
            if (object.type == 'circle'){
                ctx.arc(object.x, object.y, object.radius, 0, 2 * Math.PI, false)
                ctx.fillStyle = "#B4E4FF"
                ctx.fill()
            } else if (object.type == 'hex'){
                let a = 2 * (Math.PI) / 6;
                for (let i = 0; i < 6; i++) {
                    let posA = (object.x + object.radius * Math.cos(a * i))
                    let posB = (object.y + object.radius * Math.sin(a * i))
                    ctx.lineTo(posA.toFixed(1), posB.toFixed(1));
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
        if (canDraw && mouse == true) createObject(Math.floor(e.nativeEvent.offsetX), Math.floor(e.nativeEvent.offsetY));
        if (mouse == true) drawObjects();
    };
    
    const requestRef = useRef();

    const animate = () => {
        drawObjects();
        requestRef.current = requestAnimationFrame(animate);
    }
    
    useEffect(() => {     
    
        const addObject = setInterval(() => {
            randomObject();
        }, 500)
                
        if (loading == false || loading == null){
            setCanvasArea();

            requestRef.current = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(requestRef.current);
        }
        window.addEventListener('resize', setCanvasArea);

        return () => {
            clearInterval(addObject)
            window.removeEventListener('resize', setCanvasArea);
        };
    }, [loading]);

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
