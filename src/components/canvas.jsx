import React, { useEffect, useRef, useState, useCallback } from "react";
  
function Canvas() {
    const canvasRef = useRef(null);

    const [xy, setxy] = useState(0);
    const [canDraw, setCanDraw] = useState(false);
    const [bubbles, setBubbles] = useState([]);
 
    const draw = (e) => {
        const ctx = canvasRef.current.getContext("2d");
        setxy(e.nativeEvent.offsetX * e.nativeEvent.offsetY);
        xy % 330 == 0 ? setCanDraw(true): setCanDraw(false);
        canDraw && createBubble(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        drawBubbles(ctx);
    };

    const createBubble = (x, y) => {
        const radius = 10 + (Math.random() * (100 - 10));
        const bubble = {
            x: x,
            y: y,
            radius: radius,
        };
        setBubbles(bubbles => [...bubbles, bubble])
    }

    const drawBubbles = useCallback(ctx => {
        if (ctx != null){
            ctx.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
            bubbles.forEach((bubble) => {
                bubble.radius = Math.max(0, bubble.radius - (0.01 * bubble.radius));
                ctx.beginPath()
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI, false)
                ctx.fillStyle = "#B4E4FF"
                ctx.fill()
            }, [])
        }
    });

    useEffect(() => {
    }, []);

    return (
        <main className="pagecontainer">
            <section className="page">
                <h1>Bubbles!</h1>
                <div className="draw-area">
                    <canvas
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                    />
                </div>
            </section>

        </main>
    );
}
  
export default Canvas