import React, { useRef, useEffect, useState } from 'react';

type MaskDirection = 'vertical' | 'left' | 'none';

interface CheckerboardBackgroundProps {
    className?: string;
    seed?: number;
    boxSize?: number;
    mask?: MaskDirection;
}

const CheckerboardBackground: React.FC<CheckerboardBackgroundProps> = ({
    className = '',
    seed = 42,
    boxSize = 64,
    mask = 'vertical',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    function mulberry32(seed: number) {
        return function () {
            let t = seed += 0x6D2B79F5;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    useEffect(() => {
        const updateGrid = () => {
            if (!containerRef.current) return;
            const { offsetWidth: w, offsetHeight: h } = containerRef.current;
            setCols(Math.ceil(w / boxSize) + 1); // extra column
            setRows(Math.ceil(h / boxSize) + 1); // extra row
        };

        updateGrid();
        window.addEventListener('resize', updateGrid);
        return () => window.removeEventListener('resize', updateGrid);
    }, [boxSize]);

    const rng = mulberry32(seed);
    const total = rows * cols;

    const maskStyle =
        mask === 'vertical'
            ? 'linear-gradient(to bottom, transparent 0%, black 60%, transparent 100%)'
            : mask === 'left'
                ? 'linear-gradient(to left, black 0%, black 0%, transparent 70%)'
                : undefined;

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
            <div
                className="grid w-full h-full pointer-events-none"
                style={{
                    gridTemplateColumns: `repeat(${cols}, ${boxSize}px)`,
                    gridAutoRows: `${boxSize}px`,
                    ...(mask !== 'none' && {
                        maskImage: maskStyle,
                        WebkitMaskImage: maskStyle,
                    }),
                }}
            >
                {Array.from({ length: total }, (_, i) => {
                    const opacity = (rng() * 0.5).toFixed(2);
                    return (
                        <div
                            key={i}
                            className="w-full h-full border border-white/20 box-border"
                            style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CheckerboardBackground;
