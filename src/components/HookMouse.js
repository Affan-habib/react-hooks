import React, { useEffect, useState } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePostion = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePostion)

        return () => {
            console.log('component unmounting Code')
            window.removeEventListener('mousemove' , logMousePostion)
        }
    },[])

    return (
        <div>
            hook x - {x} Y - {y}
        </div>
    );
};

export default HookMouse;