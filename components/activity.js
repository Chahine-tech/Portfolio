import { useEffect, useMemo, useState } from "react";
import Discord from "../constants/discordpresence"
import { useLanyard } from "react-use-lanyard";

export default function activity() {
    const { loading, status /*, websocket */ } = useLanyard({
        userId: "366670764939804672",
        socket: true,
    });
    console.log(status?.activities[0])
    const name = status?.activities[0]?.name?.replace("Code", "Visual Studio Code");

    const setActivity = () => {
        if (status) {
            return status;
        }
        else {
            return 
        }
    }

    return (

        <div className="w-80 bg-gray-800 bg-opacity-20 text-white rounded p-4 m-8 dark:text-gray-300">
            {status?.activities[0].assets.small_text==="Visual Studio Code"?
                <div className="flex items-center space-x-4">
                    <img src={`https://cdn.discordapp.com/app-assets/${status?.activities[0]?.application_id}/${status?.activities[0].assets.large_image}.png`} className="flex-shrink-0 w-16 h-16 rounded-xl" />
                    <div className="flex flex-col space-y-1 text-sm">
                        <h1> {name} </h1>
                        <h1> {status?.activities[0].details}</h1>
                        <h1> {status?.activities[0].state}</h1>
                    </div>
                </div>
                : <h1> test</h1>}
        </div>

    )
}