const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const userSocketMapping = {};

io.on("connection", (socket) => {
  socket.on("join", (username) => {
    if (!userSocketMapping[username] && username != null) {
      userSocketMapping[username] = socket.id;
    }
  });

  socket.on('offer',(data)=>{
    console.log("offer",data);
    socket.broadcast.emit('offer',data);
  })
  socket.on('answer',(data)=>{
    console.log("answer",data);
    socket.broadcast.emit('answer',data);
  })
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
