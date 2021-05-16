/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import {Physics, usePlane, useBox, useSphere} from '@react-three/cannon'
import {jsx, css} from '@emotion/react'
import Controls from '../utils/Control'
import { Vector3 } from 'three'
const theme = css`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;
type CubeProps={
    position:number[];
    mass:number;
}
const Plane:React.FC=()=>{
    const [ref] = usePlane(()=>{return {rotation:[-Math.PI/2,0,0]}})
    return(
        <mesh ref={ref}>
            <planeBufferGeometry args={[1000,1000]} />
        </mesh>
    )
}

const Spere:React.FC<CubeProps>=(props)=>{
    const [ref] = useSphere(()=>{return{mass:props.mass, position:props.position}})
    return(
        <mesh ref={ref}>
            <meshStandardMaterial attach='material' color='red' />
            <sphereBufferGeometry args={[1]} />
        </mesh>
    )
}
//1000こえると物理演算きかなくなる
const Particles:React.FC=()=>{
    const particles = []
    for(let i =0;i<100;i++){
        particles.push(<Spere position={[Math.random()*10-5, Math.random()*10-5, Math.random()*10-5]} mass={0.01} />)
    }
    return(
        <Fragment>{particles}</Fragment>
    )
}
const Cube:React.FC=()=>{
    const [ref] = useBox(()=>{return{mass:1, position:[0,5,0]}})
    return(
        <mesh ref={ref}>
            <meshStandardMaterial attach="material" color="blue" />
            <boxBufferGeometry />
        </mesh>
    )
}

const Gravity:React.FC=()=>{
    return(
        <div css={theme} >
        <Canvas camera={{position:[0, 5, 50]}}>
            <Controls />
            <pointLight color='#FFFFFF' intensity={1} position={[0, 2000, 1000]} />
            <Physics>
                <Plane />
                {/* <Cube mass={1} position={[0,0,0]} /> */}
                <Particles />
                <Cube />
            </Physics>
        </Canvas>
        </div>
    )
}
export default Gravity;