/// <reference types="vite/client" />
import { useEffect } from 'react';

export const useSiteProtection = () => {
    useEffect(() => {
        // Prevent Right Click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Prevent specific keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent F12 (DevTools)
            if (e.key === 'F12') {
                e.preventDefault();
            }

            // Prevent Ctrl+Shift+I / Cmd+Option+I (DevTools)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
                e.preventDefault();
            }

            // Prevent Ctrl+Shift+J / Cmd+Option+J (DevTools Console)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
                e.preventDefault();
            }

            // Prevent Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
                e.preventDefault();
            }

            // Prevent Ctrl+U / Cmd+U (View Source)
            if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
                e.preventDefault();
            }

            // Prevent Ctrl+S / Cmd+S (Save Page)
            if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's')) {
                e.preventDefault();
            }
        };

        // Prevent drag/drop of images specific handler attached to window
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        // 1. Console Warning (Social Engineering Protection)
        const showConsoleWarning = () => {
            const styleTitle = 'color: #E5C15D; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 0px #050a14; font-family: sans-serif;';
            const styleMsg = 'color: #94A3B8; font-size: 14px; font-family: monospace;';

            console.clear();
            console.log(`%c🛑 LORE SECURITY`, styleTitle);
            console.log(`%cThis interface is protected. Any attempt to reverse-engineer or extract assets is monitored.`, styleMsg);
        };

        // 2. Debugger Trap (Active Defense) - Only active in production to allow development
        if (import.meta.env.PROD) {
            const antiDebug = setInterval(() => {
                const start = performance.now();
                // This debugger statement pauses execution if DevTools is open
                // @ts-ignore
                debugger;
                const end = performance.now();

                // If execution paused for more than 100ms, DevTools is likely open
                if (end - start > 100) {
                    // Optional: Clear DOM or redirect
                    // document.body.innerHTML = '<div style="background:black;color:red;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">ACCESS DENIED</div>';
                }
            }, 1000);

            // Cleanup
            return () => clearInterval(antiDebug);
        }

        showConsoleWarning();
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('dragstart', handleDragStart);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('dragstart', handleDragStart);
        };
    }, []);
};
