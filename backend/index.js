const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.get("/", (req, res) => {
    res.end("odev 4 server");

});
//connection listening 
io.on("connection", (socket) => {
    /*//send response to client
   socket.emit("welcome" )*/

//   socket.broadcast.emit("new-user", {title: "a user joined", joinDate: new Date()})
    socket.on("new-rgb", (message) => {
        console.log(message);
    })
   socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(4000, () => {
    console.log("listening at 4000");
})