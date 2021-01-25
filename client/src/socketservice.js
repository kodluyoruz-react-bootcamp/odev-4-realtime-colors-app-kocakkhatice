import io from 'socket.io-client';

let socket; 

export const initSocket = () => {
    socket = io('https://change-background.herokuapp.com:443',{
        transports: ['websocket'],
    }) 
    socket.on('connect', () => console.log('connected to server')) 
}

export const disconnect = () =>{
    console.log("disconnecting")
    if (socket) socket.disconnect();
}

 
export const sendCodeandUser = ({username, bgCode} ) =>{
    if(socket) socket.emit("send-code-and-user", ({username, bgCode} ) )
}
//degişiklikleri almak için subscribe metodu
export const subscribeToChanges = (cb ) => {
    if(!socket) return true;
    socket.on('receive-code-and-username', ( {bgCode, msg}) => {
        cb(  { bgCode, msg} ); 
    } ) 
}

 