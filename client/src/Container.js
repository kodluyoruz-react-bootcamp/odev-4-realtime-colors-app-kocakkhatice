import React, {useEffect, useContext} from 'react'
import RGB from './components/RGB';
import {initSocket, disconnect, sendRGB} from './socketservice';
import BackgroundContext from './contexts/BackgroundContext';
import styles from './styles.module.css';
function Container() {
    
    const {bgCode}  = useContext(BackgroundContext);
    useEffect(() => {
        initSocket( )
        //  setTimeout(() => {
        //     sendRGB("mesaj")
        // }, 3000)
        return () => disconnect()
    }, [])
    return (
        <div className = {styles.Container} style={{backgroundColor:`${bgCode}`}}>
            <RGB/>
        </div>
    )
}

export default Container
