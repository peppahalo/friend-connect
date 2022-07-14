import { Session } from "../dist/index.js";
import auth from "prismarine-auth";
const { Authflow, Titles } = auth;

const token = await new Authflow("TailvileMC", "./auth", {
	authTitle: Titles.MinecraftNintendoSwitch,
	deviceType: "Nintendo",
}).getXboxToken();

new Session(
	{
		hostName: "Tailvile.xyz",
		worldName: "Fun Fact: Tailvile is almost 2 years old.",
		version: "1.19.10",
		protocol: 534,
		players: 0,
		maxPlayers: 20,
		ip: "tailvile.xyz",
		port: 19132,
		log: true,
		connectionType: 6,
		keepVersionAndProtocolConstant: true,
	},
	token
);
