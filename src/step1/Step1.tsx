import React, {useRef} from 'react'
import {Canvas, MeshProps, useFrame} from 'react-three-fiber'
import {Mesh} from 'three'
const Thing:React.FC=()=>{
    const ref = useRef<Mesh>(null)
    useFrame(()=>{if(ref.current){ref.current.rotation.z+=0.01}})
    return(
        <mesh
         ref={ref}
         onClick={e=>console.log('click')}
         onPointerOver={e=>console.log('hover')}
         onPointerOut={e=>console.log('unhover')}>
             <planeBufferGeometry attach='geometry' args={[1,1]} />
             <meshBasicMaterial
             attach='material'
             color='pink'
             opacity={0.5}
             transparent />
         </mesh>
    )
}
const Step1:React.FC=()=>{
    return(
        <Canvas>
            <Thing />
        </Canvas>
    )
}
export default Step1;