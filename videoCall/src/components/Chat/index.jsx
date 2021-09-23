import React from "react";

const ChatLayout = () => {
	return (
		<div className=" w-[30%] flex flex-col p-2 bg-yellow-100 ">
			{/* Chat Messages */}
			<div className="flex-1 bg-white rounded-md border"></div>
			{/* Caht Input */}
			<div className="w-full p-2 flex">
				<input
					className="flex-1 rounded-l-lg p-1"
					type="text"
					name="chat_message"
				/>
				<button className="rounded-r-lg bg-yellow-600 p-2">send</button>
			</div>
		</div>
	);
};

export default ChatLayout;
