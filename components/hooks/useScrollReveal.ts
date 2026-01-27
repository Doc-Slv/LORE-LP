import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once visible, we can stop observing this element
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px' // Start revealing slightly before they enter the viewport
        });

        const observeNewElements = () => {
            const reveals = document.querySelectorAll('.reveal:not(.active)');
            reveals.forEach((el) => observer.observe(el));
        };

        // Initial check in case some elements are already there
        observeNewElements();

        // Watch for DOM changes (to catch elements added during transitions)
        const mutationObserver = new MutationObserver(() => {
            observeNewElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Small delay to ensure everything is caught after transition starts
        const timeoutId = setTimeout(observeNewElements, 100);
        const timeoutId2 = setTimeout(observeNewElements, 500);

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            clearTimeout(timeoutId);
            clearTimeout(timeoutId2);
        };
    }, [location.pathname]);
};
