import {useState, useContext, useEffect } from 'react'
import {sendRGB, sendCodeandUser,sendUserName} from '../socketservice';
import BackgroundContext from '../contexts/BackgroundContext';
import styles from '../styles.module.css';
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color';
function RGB() {
    const [rgbCode, setRgbCode] = useState("");
    const {bgCode, setBgCode, username} = useContext(BackgroundContext);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    
    const colorChangeSubmit = () => {
      setDisplayColorPicker(!displayColorPicker);
    }
    const applyNewColor = async () => {
      await setBgCode(rgbCode);
    }
    useEffect ( () => {
      sendCodeandUser( {username, bgCode});
    }, [bgCode])
    const handlePickerOpen = () => {
      setDisplayColorPicker(!displayColorPicker);
    }
    const handlePickerClose = () => {
      setDisplayColorPicker(false);
    }
    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `${bgCode}`
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
             
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
   

    return (
        <div style = { {border: "1px solid red", width:"200px", height:"200px" , margin: "auto"}   }>
            <div style={ styles.swatch } onClick={ handlePickerOpen }>
                <div style= {styles.color } />
            </div>
            { 
                displayColorPicker ? 
                    <div style={ styles.popover } >
                         <div style={ styles.cover } onClick={ handlePickerClose }/> 
                            <SketchPicker 
                                color = {rgbCode} 
                                onChange = {
                                    (color) => {
                                      setRgbCode(color.hex); 
                                    }
                                }/>
                    </div> 
                    :
                     null
             }
            <button onClick={colorChangeSubmit}>Change color</button>
            <button onClick={applyNewColor}>Apply</button>

        </div>
 
    )
}

export default RGB

    // const handleClick = () =>{
    //     setDisplayColorPicker(!displayColorPicker);
    // }
    // const handleClose = () => {
    //     setDisplayColorPicker(false);
    // }
    // const handleSubmit = (color) => {
    //     sendRGB( color.hex)
    //     console.log("seçilen renk: "  + color.hex)
    //     setBgCode(color.hex)       
    //     console.log(bgCode);
    // }
    // const popover = {
    //     position: 'absolute',
    //     zIndex: '2',
    //   }
    //   const cover = {
    //     position: 'fixed',
    //     top: '0px',
    //     right: '0px',
    //     bottom: '0px',
    //     left: '0px',
    //   }


     {/*onClick={ handleClose }*/ }