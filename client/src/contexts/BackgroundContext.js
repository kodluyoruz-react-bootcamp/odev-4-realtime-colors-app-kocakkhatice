import {createContext, useState} from 'react';
const BackgroundContext = createContext(null);

export const BackgroundProvider = ({children}) => {
    const[bgCode, setBgCode] = useState("pink");

    const values = {
        bgCode,
        setBgCode
      }
    return <BackgroundContext.Provider value={values}>{children}</BackgroundContext.Provider>
}
export default BackgroundContext