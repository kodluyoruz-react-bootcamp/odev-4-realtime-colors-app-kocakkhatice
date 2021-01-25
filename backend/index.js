const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.get("/", (req, res) => {
    res.end("odev 4 server");

});
//connection listening 
io.on("connection", (socket) => { 
    console.log("a user connected")  
    socket.on("disconnect", () => console.log("a user disconnected"));
 
    socket.on("send-code-and-user", ({username, bgCode } )=> {
        let  msg = "" ;
        let uName = "";
        const bgcodeLength = bgCode.length;
        if (bgcodeLength > 0 ){
            uName = username;
            msg = "username: " + uName + " bgCode: "+ bgCode;
        }
        else{
            msg =  username + " is joined";
        }
         
        console.log(msg);
        socket.broadcast.emit("receive-code-and-username", { bgCode , msg} )
    })









});

http.listen(process.env.PORT, () => {
    console.log("listening process.env.PORT");
})