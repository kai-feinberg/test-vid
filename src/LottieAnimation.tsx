import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { Animated, Fade, Move, Scale } from 'remotion-animated';


import { Lottie } from '@remotion/lottie';
import lottie1 from '../public/lottie1.json';

import { AbsoluteFill, Img, staticFile } from 'remotion';

export const myCompSchema = z.object({
    titleText: z.string(),
    titleColor: zColor(),
    logoColor: zColor(),
});

export const LottieAnimation: React.FC<z.infer<typeof myCompSchema>> =
    ({
        titleText: propOne,
        titleColor: propTwo,
        logoColor: propThree,
    }) => {

        return (
            <div className='bg-white flex flex-col justify-center items-center'>
                <Lottie animationData={lottie1} />
            </div  >
        );
    };
