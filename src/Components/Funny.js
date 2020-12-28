import React,{useState} from 'react'
import '../index.css'

export default function Funny(props) {
    
    const [Off, setOff] = useState(true)
    
    let Hover = () => {
        setOff(false)
    }

    return (
        <section className='joke' >
            <h1 className='setup' >{props.setup}</h1>
            {  Off ? 
            <h3 className='delivery' onMouseEnter={Hover}>Hover over me! </h3> :
            <h3 className='delivery'>{props.delivery}</h3>}
        </section>
    )
}
