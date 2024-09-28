import { Composition } from 'remotion';
import { MyComposition, myCompSchema } from './Composition';
import { Obama } from './Obama';
import { LottieAnimation } from './LottieAnimation';
import { Tall } from './Tall';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>

			<Composition
				id="Obama"
				component={Obama}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}} />

			<Composition
				id="LottieAnimation"
				component={LottieAnimation}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}} />

			<Composition
				id="Tall"
				component={Tall}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					imagePath: 'tall.jpeg',
				}} />

		</>
	);
};
