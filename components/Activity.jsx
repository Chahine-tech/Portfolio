import { useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";

export default function activity() {
    const { loading, status /*, websocket */ } = useLanyard({
        userId: "837752010870095943",
        socket: true,
    });
    const [name, setName] = useState('')
    //console.log(status)
    //console.log(status?.activities[0])
    
    useEffect(() => {
        if (status) {
            if (status.activities[0]) {
                const name = status?.activities[0]?.name;
                return setName(name)
            } else {
                setName('')
            }
        } else {
            setName('')
        }

    }, [status])

    /* const setActivity = () => {
            if (status) {
                return status;
            }
            else {
                return 
            }
        }
    */
    return (

        <div className="w-80 bg-gray-300 text-black bg-opacity-20 p-4 rounded-md m-8 dark:text-gray-300 dark:bg-gray-800 dark:bg-opacity-20">
            {name !== '' && status?.activities[0].assets.small_text === "Working with Visual Studio Code 💫" ?
                <div className="flex items-center space-x-4">
                    <img src={status?.activities[0]?.assets?.large_image?.startsWith(`mp:external`) ? status?.activities[0]?.large_image?.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/') : `https://cdn.discordapp.com/app-assets/${status?.activities[0]?.application_id}/${status?.activities[0]?.assets?.large_image}.webp`} className="flex-shrink-0 w-16 h-16 rounded-xl" alt="Visual Studio Code" />
                    <div className="flex flex-col space-y-1 text-sm">
                        <h1> {name} </h1>
                        <h1> {status?.activities[0].details}</h1>
                        <h1> {status?.activities[0].state}</h1>
                    </div>
                </div>
                : <div className="">
                    <h1 className="text-sm font-bold mb-2">Activity</h1>
                    <div className="flex items-center space-x-2">
                        <div className="bg-pink-800 w-16 h-16 rounded-xl">
                            <div className="flex my-4 mx-4 z-50">
                                <div class="relative flex flex-col items-center group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500 flex justify-center z-50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                                    </svg>
                                    <div class="absolute bottom-4 flex-col items-center hidden mb-6 group-hover:flex">
                                        <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Idle</span>
                                        <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-sm">I'm not currently doing anything</h1>
                    </div>
                </div>
            }
        </div>

    )
}