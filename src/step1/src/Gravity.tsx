/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import {Physics, usePlane, useBox} from '@react-three/cannon'
import {jsx, css} from '@emotion/react'
const theme = css`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;
const Plane:React.FC=()=>{
    const [ref] = usePlane(()=>{return {rotation:[-Math.PI/2,0,0]}})
    return(
        <mesh ref={ref}>
            <planeBufferGeometry args={[100,100]} />
        </mesh>
    )
}

const Cube:React.FC=()=>{
    const [ref] = useBox(()=>{return{mass:1, position:[0,5,0]}})
    return(
        <mesh ref={ref}>
            <boxBufferGeometry />
        </mesh>
    )
}

const Gravity:React.FC=()=>{
    return(
        <div css={theme} >
        <Canvas>
        <pointLight color='#FFFFFF' intensity={1} position={[0, 2000, 1000]} />
            <Physics>
                {/* <Plane /> */}
                <Cube />
            </Physics>
        </Canvas>
        </div>
    )
}
export default Gravity;