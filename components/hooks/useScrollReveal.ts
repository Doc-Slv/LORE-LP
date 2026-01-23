import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
    const location = useLocation();

    useEffect(() => {
        // Reset classes
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el) => el.classList.remove('active'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach((el) => observer.observe(el));

        return () => reveals.forEach((el) => observer.unobserve(el));
    }, [location]); // Re-run on route change
};
