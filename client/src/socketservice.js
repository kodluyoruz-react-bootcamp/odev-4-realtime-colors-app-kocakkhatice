import io from 'socket.io-client';

let socket;

export const initSocket = () => {
    socket = io('http://localhost:4000',{
        transports: ['websocket'],

    })
    
    console.log('connecting');
    socket.on('connect', () => console.log('connected'))

}

export const disconnect = () =>{
    console.log("disconnecting")
    if (socket) socket.disconnect();
}
export const sendRGB = (message) => {
    if(socket) socket.emit("new-rgb", message)

} 