import React, { useEffect, useState, useCallback, useReducer } from "react";
  
const Canvas = () => {

    const [isMounted, toggle] = useReducer((p) => !p, true);
    const [canvasRef, setCanvasRef] = useState();
    const [ctx, setCtx] = useState();

    const handleCanvas = useCallback((node) => {
        setCanvasRef(node);
        setCtx(node?.getContext("2d"));
    }, []);

    const [xy, setxy] = useState(0);
    const [canDraw, setCanDraw] = useState(false);
    const [bubbles, setBubbles] = useState([]);
 
    const canvasDraw = (e) => {
        setxy(e.nativeEvent.offsetX * e.nativeEvent.offsetY);
        xy % 10 == 0 ? setCanDraw(true): setCanDraw(false);
        canDraw && createBubble(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        drawBubbles();
    };

    const createBubble = (x, y) => {
        const bubble = {
            x: x,
            y: y,
            radius: 10 + (Math.random() * (100 - 10)) 
        };
        setBubbles(bubbles => [...bubbles, bubble])
    }

    const drawBubbles = useCallback(() => {
        if (ctx != null){
            ctx.clearRect(0,0,canvasRef.width,canvasRef.height);
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
        const interval = setInterval(() => {
            console.log(ctx);
            drawBubbles(ctx);
        }, 100)
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="pagecontainer">
            <section className="page">
                <h1>Bubbles!</h1>
                {isMounted && <canvas
                    onMouseMove={canvasDraw}
                    ref={handleCanvas}
                    width={`1000px`}
                    height={`720px`}
                />}
            </section>
        </main>
    );
}
  
export default Canvas