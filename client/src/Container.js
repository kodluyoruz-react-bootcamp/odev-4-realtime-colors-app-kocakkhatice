import React, {useEffect} from 'react'
import RGB from './components/RGB';
import {initSocket, disconnect, sendRGB} from './socketservice';
function Container() {
    useEffect(() => {
        initSocket( )
        setTimeout(() => {

            sendRGB("mesaj")
        }, 3000)
        return () => disconnect()
    }, [])
    return (
        <div>
            <RGB/>
        </div>
    )
}

export default Container
