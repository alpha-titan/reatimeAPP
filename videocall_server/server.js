const express = require("express");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const { Server } = require("socket.io");
const app = express();
app.use(cors());
app.use(morgan("dev"));
// app.use("/", (req, res) => {
// 	res.send("helooo");
// });
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (serverSocket) => {
	serverSocket.emit("welcome", { data: "Welcome to electron chat" });
	//? broadcast the event to the namspace
	console.log(serverSocket.id);
	io.of("/").emit("messageFromServer", {
		message: `${serverSocket.id} has joined the chat`,
	});
	//? listen for messageFromClient event in the main namespace
	serverSocket.on("messageFromClient", (message) => {
		console.log(message.data);
	});
});

httpServer.listen(4000, () => {
	console.log("Server running on 4000");
});
