import React, {useEffect,useState, useContext} from 'react'
import RGB from './components/RGB';
import {initSocket, disconnect, subscribeToChanges, sendRGB,sendUserName, getNewBackground, getNewUserJoined} from './socketservice';
import BackgroundContext from './contexts/BackgroundContext';
import styles from './styles.module.css';
function Container() {
    
    const {bgCode, setBgCode, username, setUsername}  = useContext(BackgroundContext)
    const [isVisible, setIsVisible] = useState(true);
 
    useEffect(() => {
        console.log("useEffect worked")
        initSocket( )
        subscribeToChanges(({bgCode, msg}) => {
            const a = bgCode.length;
            if(a > 0 ){
                setBgCode(bgCode)
            } 
             console.log(msg);
        }) 
         
    }, [ ])
 
    const getUsernameHandler = async (event) => {
        event.preventDefault()
        setIsVisible(false);
        setUsername(event.target.usernameInfo.value); 
    }

    return (
        <div className = {styles.Container} style={{backgroundColor:`${bgCode}`}}>
            {  
                isVisible ? 
                <div className={styles.getUserInfo}>
                <form onSubmit={getUsernameHandler}>
                    <input name = "usernameInfo"  placeholder='Please enter your name to start...'/>
                    <button>Submit</button>
                </form>
            </div> : <RGB/> 
            } 
        </div>
    )
}

export default Container
