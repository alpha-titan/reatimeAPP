import React from "react";

const Sidebar = () => {
	return (
		<div className="w-[20%] bg-blue-400 flex flex-col gap-y-40 items-center">
			<div className=" text-3xl font-bold">Video Chat </div>
			<div className="w-full p-2">
				{/* Meeting Link */}
				<div className="flex w-full p-2 flex-col">
					<label htmlFor="passcode">Enter Meeting Code</label>
					<div className="w-full flex">
						<span
							className="flex-1 bg-white rounded-l-lg "
							id="meeting-link"
						/>
						<button className="p-2 bg-yellow-600 rounded-r-lg">
							Copy
						</button>
					</div>
				</div>
				{/* Passcode */}
				<div className="flex w-full p-2 flex-col">
					<label htmlFor="passcode">Enter Meeting Code</label>
					<div className="w-full flex">
						<input
							className="flex-1 rounded-l-lg p-1 "
							type="text"
							id="passcode"
						/>
						<button className="p-2 bg-yellow-600 rounded-r-lg ">
							Join
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
