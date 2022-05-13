
import React, { useEffect, useRef, useState } from "react";

const HexEffect = (container) => {

    const canvasRef = useRef()
    const hexes = useRef([])

    const createHexagon = (x, y) => {
        const hex = {
            x: x,
            y: y,
            radius: 10 + (Math.random() * (100 - 50)),
        };
        hexes.current = [...hexes.current, hex]
    }

    function drawHexagons() {
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx != null) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            hexes.current = hexes.current.filter((item) => item.radius > 10);
            
            hexes.current.forEach((hex) => {
                let a = 2 * Math.PI / 6;
                hex.radius = Math.max(0, hex.radius - hex.radius * 0.01);
                hex.x = hex.x -1;
                hex.y = hex.y -1;

                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    ctx.lineTo(hex.x + hex.radius * Math.cos(a * i), hex.y + hex.radius * Math.sin(a * i));
                }
                ctx.closePath();
                ctx.stroke();
            });
        }
    }

    const randomHexagon = () => {
        let randomX = 10 + Math.floor(Math.random() * (canvasRef.current.width - 10));
        let randomY = 10 + Math.floor(Math.random() * (canvasRef.current.height - 10));
        createHexagon(randomX, randomY);
        drawHexagons();
    }

    const canvasDraw = (e) => {
        const canDraw = (e.nativeEvent.offsetX * e.nativeEvent.offsetY) % 50 == 0
        if (canDraw) createHexagon(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        drawHexagons();
    };

    useEffect(() => {
        const addHex = setInterval(() => {
            randomHexagon();
        }, 80)

        const interval = setInterval(() => {
            drawHexagons();
        }, 10)

        return () => {
            clearInterval(interval);
            clearInterval(addHex)
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            onMouseMove={canvasDraw}
            width={1000}
            height={800}
            // style={{width: window.innerWidth, height: innerHeight}}
        />
    );
}

export default HexEffect


