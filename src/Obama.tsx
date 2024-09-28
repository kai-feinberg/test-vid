import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { Animated, Fade, Move, Scale } from 'remotion-animated';

import { AbsoluteFill, Img, staticFile } from 'remotion';

export const myCompSchema = z.object({
    titleText: z.string(),
    titleColor: zColor(),
    logoColor: zColor(),
});

export const Obama: React.FC<z.infer<typeof myCompSchema>> =
    ({
        titleText: propOne,
        titleColor: propTwo,
        logoColor: propThree,
    }) => {

        return (
            <AbsoluteFill>
                                {/* <Lottie animationData={lottie1} /> */}
                <Animated animations={[
                    Scale({ by: 10, initial: 1, duration: 180 }),
                    Move({ y: -1000, start: 100 }),
                ]}>
                <Img src={staticFile("download.jpeg")} style={{ width: '100%', height: 'auto' }} />
                </Animated>
            </AbsoluteFill >
        );
    };
