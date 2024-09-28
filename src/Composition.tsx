import { AbsoluteFill, Sequence, Series } from 'remotion';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { Animated, Fade, Move, Scale } from 'remotion-animated';

import { Lottie } from '@remotion/lottie';
import lottie1 from '../public/lottie1.json';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {

	return (
		<div className='bg-slate-100 h-full w-full flex flex-col justify-center items-center'>
			<div>
				<Animated animations={[
					Scale({ by: 10, initial: 1, duration: 90 }),
					Move({ y: -100, start: 100 }),
				]}>
					<p className='text-gray-700 font-bold'>Hello</p>
				</Animated>
			</div>
			<div>
				<Animated in={150} delay={150} animations={[
					Fade({ to: 1, initial: 0, duration: 30 }),
				]}>
					<p className='text-gray-700 font-bold text-3xl'>{propOne}</p>
				</Animated>
			</div>
		</div>
	);
};
