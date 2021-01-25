import {createContext, useState} from 'react';
 
const BackgroundContext = createContext(null);

export const BackgroundProvider = ({children}) => {
    const[bgCode, setBgCode] = useState("");
    const [username, setUsername] = useState("");
 
    const values = {
        bgCode,
        setBgCode,
        username,
        setUsername,
      }
    return <BackgroundContext.Provider value={values}>{children}</BackgroundContext.Provider>
}
export default BackgroundContext