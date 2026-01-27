
import React, { useEffect, useRef } from 'react';

export const BackgroundEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 15, 100); // Responsive count

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.5
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Subtle interaction: Particles move slightly away from mouse
            const mouseX = (window.mouseX || window.innerWidth / 2);
            const mouseY = (window.mouseY || window.innerHeight / 2);

            particles.forEach((p) => {
                // Calculate distance to mouse
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 200;

                let moveX = p.speedX;
                let moveY = p.speedY;

                // Push particles away if close
                if (dist < interactionRadius) {
                    const force = (interactionRadius - dist) / interactionRadius;
                    moveX += (dx / dist) * force * 3.0; // Stronger push
                    moveY += (dy / dist) * force * 3.0;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2); // Larger size

                // Gold color with varying opacity for "twinkle" effect - HIGHER OPACITY
                const opacity = p.opacity + Math.sin(Date.now() * 0.005 + p.x) * 0.2; // Faster twinkle
                ctx.fillStyle = `rgba(229, 193, 93, ${Math.max(0.1, Math.min(1, opacity * 0.8))})`; // Much more visible
                ctx.shadowBlur = p.size * 4; // Stronger glow
                ctx.shadowColor = "rgba(229, 193, 93, 0.5)"; // Glow
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for performance

                // Move
                p.x += moveX;
                p.y += moveY;

                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        // Add mouse tracking to window for canvas access (simple global state hack for effect)
        const handleMouseMove = (e: MouseEvent) => {
            (window as any).mouseX = e.clientX;
            (window as any).mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};
