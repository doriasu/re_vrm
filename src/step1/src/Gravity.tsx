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
type PlaneProps={
    rotation:number[];
    position:number[];
}
const Plane:React.FC<PlaneProps>=(props:PlaneProps)=>{
    const [ref] = usePlane(()=>{return {rotation:props.rotation, position:props.position}})
    return(
        <mesh ref={ref}>
            <planeBufferGeometry args={[100,100]} />
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
        particles.push(<Spere position={[Math.random()*10-5, Math.random()*10-5, Math.random()*10]} mass={0.01} />)
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
            <pointLight color='#FFFFFF' intensity={1} position={[0, 25, 0]} />
            <Physics>
                <Plane rotation={[-Math.PI/2,0,0]} position={[0,0,0]} />
                <Plane rotation={[-Math.PI/2,-Math.PI/2,0]} position={[50,50,0]} />
                <Plane rotation={[0,0,0]} position={[0,50,-50]} />
                <Plane rotation={[-Math.PI/2,Math.PI/2,0]} position={[-50,50,0]} />
                <Plane rotation={[Math.PI,0,0]} position={[0,50,50]} />
                <Plane rotation={[-Math.PI*3/2,0,0]} position={[0,100,0]} />
                {/* <Cube mass={1} position={[0,0,0]} /> */}
                <Particles />
                <Cube />
            </Physics>
        </Canvas>
        </div>
    )
}
export default Gravity;