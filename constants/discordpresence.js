import { useLanyard } from "react-use-lanyard";

export default function Discord() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: "366670764939804672",
		socket: true,
	});
	console.log(status)
	return <pre>{!loading && JSON.stringify(status, null, 4)}</pre>;	
}
