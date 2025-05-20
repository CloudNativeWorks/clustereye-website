"use client";

import React, { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number;
    vy: number;
    type: 'primary' | 'secondary' | 'replica';
}

export default function DatabaseClusterBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full width/height of parent with correct pixel ratio
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            const devicePixelRatio = window.devicePixelRatio || 1;
            const rect = parent.getBoundingClientRect();

            canvas.width = rect.width * devicePixelRatio;
            canvas.height = rect.height * devicePixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Create database nodes
        const nodes: Node[] = [];
        const primaryNode = {
            x: canvas.width / (2 * (window.devicePixelRatio || 1)),
            y: canvas.height / (2 * (window.devicePixelRatio || 1)),
            radius: 10,
            color: 'rgba(139, 92, 246, 0.8)',  // Purple
            vx: 0,
            vy: 0,
            type: 'primary' as const
        };

        nodes.push(primaryNode);

        // Add secondary nodes
        for (let i = 0; i < 5; i++) {
            nodes.push({
                x: canvas.width / (2 * (window.devicePixelRatio || 1)) + (Math.random() - 0.5) * 200,
                y: canvas.height / (2 * (window.devicePixelRatio || 1)) + (Math.random() - 0.5) * 200,
                radius: 6,
                color: 'rgba(79, 70, 229, 0.6)',  // Indigo
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                type: 'secondary' as const
            });
        }

        // Add replica nodes
        for (let i = 0; i < 15; i++) {
            nodes.push({
                x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
                y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
                radius: 3,
                color: 'rgba(99, 102, 241, 0.4)',  // Light indigo
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                type: 'replica' as const
            });
        }

        // Animation function
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                if (node.type === 'secondary') {
                    // Connect secondary nodes to primary
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(primaryNode.x, primaryNode.y);
                    ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Data transfer animation along connection
                    const time = Date.now() / 1000;
                    const dataPointX = primaryNode.x + (node.x - primaryNode.x) * (0.5 + 0.5 * Math.sin(time * 2 + i));
                    const dataPointY = primaryNode.y + (node.y - primaryNode.y) * (0.5 + 0.5 * Math.sin(time * 2 + i));

                    ctx.beginPath();
                    ctx.arc(dataPointX, dataPointY, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
                    ctx.fill();
                }

                if (node.type === 'replica') {
                    // Find closest secondary node
                    let closestSecondary = null;
                    let minDist = Infinity;

                    for (const otherNode of nodes) {
                        if (otherNode.type === 'secondary') {
                            const dx = node.x - otherNode.x;
                            const dy = node.y - otherNode.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);

                            if (dist < minDist) {
                                minDist = dist;
                                closestSecondary = otherNode;
                            }
                        }
                    }

                    if (closestSecondary && minDist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(closestSecondary.x, closestSecondary.y);
                        ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes and update positions
            for (const node of nodes) {
                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();

                // Add "database" look to the node
                if (node.type !== 'replica') {
                    ctx.beginPath();
                    ctx.ellipse(node.x, node.y - node.radius * 0.6, node.radius * 0.8, node.radius * 0.3, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }

                // Update positions for all except primary
                if (node.type !== 'primary') {
                    node.x += node.vx;
                    node.y += node.vy;

                    // Bounce on edges
                    if (node.x < node.radius || node.x > canvas.width / (window.devicePixelRatio || 1) - node.radius) {
                        node.vx *= -1;
                    }

                    if (node.y < node.radius || node.y > canvas.height / (window.devicePixelRatio || 1) - node.radius) {
                        node.vy *= -1;
                    }

                    // Slow down over time
                    node.vx *= 0.99;
                    node.vy *= 0.99;

                    // Add slight random movement
                    if (Math.random() < 0.05) {
                        node.vx += (Math.random() - 0.5) * 0.2;
                        node.vy += (Math.random() - 0.5) * 0.2;
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full -z-10 opacity-30"
        />
    );
} 