import { useEffect, useState } from "react";


const Door = () => {
    const [doorOpen, setDoorOpen] = useState(false);
    const [lightOn, setLightOn] = useState(false);
    useEffect(() => {
        doorOpen ? setLightOn(true) : setLightOn(false);
    }, [doorOpen]);

    const handleDoorOpen = () => {
        setDoorOpen(!doorOpen);
    }
    return (
        <div>
            {
                lightOn ? (
                    <h1>Light</h1>
                ) : (
                    <h1>Dark</h1>
                )
            }
            <button onClick={handleDoorOpen}>{doorOpen ? "Close Door" : "Open Door"}</button>
        </div>
    )
}
export default Door;