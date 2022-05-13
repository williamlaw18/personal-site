import React, { useEffect, useRef } from "react";

const Canvas = () => {
    const canvasRef = useRef()
    const bubbles = useRef([])

    const createBubble = (x, y) => {
        const bubble = {
            x: x,
            y: y,
            radius: 10 + (Math.random() * (100 - 10)) 
        };
        bubbles.current = [...bubbles.current, bubble]
    }

    const drawBubbles = () => {
        const ctx = canvasRef.current?.getContext('2d')
        if (ctx != null) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            bubbles.current.forEach((bubble) => {
                bubble.radius = Math.max(0, bubble.radius - (0.01 * bubble.radius));
                ctx.beginPath()
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI, false)
                ctx.fillStyle = "#B4E4FF"
                ctx.fill()
            })
        }
    };

    const canvasDraw = (e) => {
        const canDraw = (e.nativeEvent.offsetX * e.nativeEvent.offsetY) % 10 == 0
        if (canDraw) createBubble(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        drawBubbles();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            drawBubbles();
        }, 10)
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="pagecontainer">
            <section className="page">
                <h1>Bubbles!</h1>
                <canvas
                    onMouseMove={canvasDraw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
            </section>
        </main>
    );
}

export default Canvas
