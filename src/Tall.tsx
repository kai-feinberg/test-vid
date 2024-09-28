import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { Animated, Move } from 'remotion-animated';
import { AbsoluteFill, Img, staticFile } from 'remotion';

export const myCompSchema = z.object({
    imagePath: z.string(),
});

export const Tall: React.FC<z.infer<typeof myCompSchema>> = ({
    imagePath: propOne,

}) => {
    const [imageSize, setImageSize] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = staticFile(propOne); // Use the same image path
        img.onload = () => {
            setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        };
    }, []);

    if (!imageSize) {
        return null; // You can add a loading spinner here if needed
    }

    // Calculate the scaling factor to fit the image width to the window width
    const widthScaleFactor = window.innerWidth / imageSize.width;
    const scaledImageHeight = imageSize.height * widthScaleFactor;

    // Calculate the difference between the scaled image height and the viewport height
    const heightToPan = Math.max(0, scaledImageHeight - window.innerHeight - imageSize.height);

    return (
        <AbsoluteFill>
            <Animated
                animations={[
                    Move({ y: 0, initialY: -heightToPan, start: 0, duration: 250 }), // Pans from bottom to top
                    // Move({ y: -heightToPan, initialY: 0, start: 0, duration: 250 }), // Pans from top to bottom
                ]}
            >
                <Img src={staticFile(propOne)} style={{ width: '100%', height: 'auto' }} />
            </Animated>
        </AbsoluteFill>
    );
};
