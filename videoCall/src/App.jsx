import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

import "tailwindcss/tailwind.css";
import ChatLayout from "./components/Chat";
import Sidebar from "./components/sidebar";

function App() {
	const [socket, setSocket] = useState();
	const handleSocket = () => {
		let newSocket = io("ws://localhost:4000");
		newSocket.connect();
		console.log(newSocket.connected);
		setSocket(newSocket);
		newSocket.on("connect", function (socket) {
			console.log("connected to backend");

			socket.on("disconnect", function () {
				console.log("disconnected: ", socket);
			});
		});
	};
	useEffect(() => {
		handleSocket();
	}, [setSocket]);
	console.log(socket);
	return (
		<div className="bg-blue-500 flex h-screen w-screen ">
			{/* meetink link or pass code */}
			<Sidebar />

			{/* video call */}
			<div className="flex-1 p-3 bg-gray-200">
				<div className="w-full h-[80%] flex flex-col gap-y-8 items-center">
					<video
						className="flex-1"
						controls
						muted
						src="http://techslides.com/demos/sample-videos/small.mp4"
					></video>
					<button className="bg-red-400 text-white w-40 p-2 rounded-lg">
						End call
					</button>
				</div>
			</div>
			{/* chat */}
			<ChatLayout />
		</div>
	);
}

export default App;
