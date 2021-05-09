/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { css, jsx } from '@emotion/react';
import { Mesh } from 'three'
const theme = css`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

const Thing = () => {
    const ref = useRef<Mesh>(null)
    useFrame(({clock}) => {
        if (ref.current) {
            ref.current.position.x += Math.cos(clock.getElapsedTime())*3
            ref.current.position.y += Math.cos(clock.getElapsedTime())*3
            ref.current.position.z += Math.cos(clock.getElapsedTime())*3
            ref.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh
            ref={ref}
        >
            <boxGeometry attach='geometry' args={[400,400,400]} />
            <meshNormalMaterial attach='material' />
        </mesh>
    );
};

export const Work = () => (
    <div css={theme}>
        <Canvas camera={{position:[1000,0,0]}}>
            <pointLight color='#FFFFFF' intensity={1} position={[0, 2000, 1000]} />
            <Thing />
        </Canvas>
    </div>
);