/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useRef} from 'react'
import {Canvas, MeshProps, useFrame} from 'react-three-fiber'
import {css, Global, jsx} from '@emotion/react'
import emotionReset from 'emotion-reset'
import {Work} from './src/work'
import Gravity from './src/Gravity'
const globalStyles = css`
   ${emotionReset} 
   *, *::after, *::before {
       box-sizing: border-box;
       -moz-osx-font-smoothing: grayscale;
       -webkit-font-smoothing: antialiased;
       font-smoothing: antialiased;
   }
`

const Step1:React.FC=()=>{
    return(
        <div>
            <Global styles={globalStyles} />
        <Gravity />
        </div>
    )
}
export default Step1;