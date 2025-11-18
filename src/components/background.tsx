'use client'
import { useEffect, useRef } from "react";

export const GridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let offset = 0;

        const draw = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = "rgba(255,255,255,0.05)";
            ctx.lineWidth = 1;
            const size = 40;
            offset += 0.1;

            for (let x = -offset % size; x < width; x += size) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = -offset % size; y < height; y += size) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        draw();
        return () => window.removeEventListener("resize", resize);
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};
