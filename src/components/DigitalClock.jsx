import { useEffect, useState } from "react"

export default function DigitalClock(){

    const [digital, setDigital] = useState();

    useEffect(() => {
        setInterval(()=>{
            const hora = new Date();
            setDigital(hora.toLocaleTimeString());
        },1000)
    }, [])

    return(
        <div className="reloj-digital">
            <h1>{digital}</h1>
        </div>
    )
}