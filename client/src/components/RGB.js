import {useState, useContext} from 'react'
import {sendRGB} from '../socketservice';
import BackgroundContext from '../contexts/BackgroundContext';
import styles from '../styles.module.css';
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color';
function RGB() {
    const [rgbCode, setRgbCode] = useState('');
    const {bgCode, setBgCode} = useContext(BackgroundContext);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    
    const colorChangeSubmit = () => {
        setDisplayColorPicker(!displayColorPicker)
        setBgCode(rgbCode);
        console.log("bgCode => " + bgCode);
        sendRGB(bgCode);        

    }
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    }
    const handleClose = () => {
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
        <div>
            <div style={ styles.swatch } onClick={ handleClick }>
                <div style= {styles.color } />
            </div>
            { 
                displayColorPicker ? 
                    <div style={ styles.popover }>
                         <div style={ styles.cover } onClick={ handleClose }/> 
                            <SketchPicker 
                                color = {rgbCode} 
                                onChange = {
                                    (color) => {
                                        console.log("sketchpicker: " + color.hex)
                                        setRgbCode(color.hex);
                                    }
                                }/>
                    </div> 
                    :
                     null
             }
            <button onClick={colorChangeSubmit}>Change color</button>

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
