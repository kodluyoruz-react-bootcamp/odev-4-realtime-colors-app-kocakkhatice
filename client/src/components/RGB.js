import {useState} from 'react'
import {sendRGB} from '../socketservice';
function RGB() {
    const [rgbCode, setRgbCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRGB(rgbCode)
        console.log(rgbCode);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={rgbCode} onChange={(event) => setRgbCode(event.target.value)}/>

            </form>
            
        </div>
    )
}

export default RGB
