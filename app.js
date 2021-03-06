let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

io.on("connect", socket => {
    console.log("user connected");

    socket.on("disconnect", function() {
        console.log("user disconnected");
    });

    socket.on("message", message => {
        console.log("Message Received: " + message);
        io.emit("message", { type: "new-message", text: message});
    });
});

http.listen(process.env.PORT || 5000, () => {
    console.log("started on port 5000");
});
