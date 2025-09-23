import { useEffect, useState } from "react";
import myDoor from "../style/Door.module.css"

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
        <div className={myDoor.door}>
            {
                lightOn ? (
                    <h1 className={myDoor.light}>Light</h1>
                ) : (
                    <h1 className={myDoor.dark}>Dark</h1>
                )
            }
            <button onClick={handleDoorOpen}>{doorOpen ? "Close Door" : "Open Door"}</button>
        </div>
    )
}
export default Door;