import {useState, useContext} from 'react'
import {sendRGB} from '../socketservice';
import BackgroundContext from '../contexts/BackgroundContext';
import styles from '../styles.module.css';
function RGB() {
    const [rgbCode, setRgbCode] = useState('');
    const {bgCode, setBgCode} = useContext(BackgroundContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        //1 soket
        sendRGB(rgbCode)

        //2 context
        setBgCode(rgbCode)
        //3 clear input
        setRgbCode('');
        
        console.log(rgbCode);
    }
    return (
        <div className = {styles.RGBInput}>
            <form onSubmit={handleSubmit}>
            <input value={rgbCode} onChange={(event) => setRgbCode(event.target.value)}/>

            </form>
            
        </div>
    )
}

export default RGB
