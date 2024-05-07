import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../../assets/images/logo3.png"
// import profile from "../assets/profile.png"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)
    const [isMobileScreen,setIsMobileScreen] = useState(false)
    const { user } = useContext(authContext)


    // fxn to adjust sidebar 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setExpanded(false);
                setIsMobileScreen(true)
            }else{
                setExpanded(true)
                setIsMobileScreen(false)
            }
        };
        handleResize()


        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(()=> console.log(expanded, "Expanded"), [expanded])

    if(expanded)
    {
        window.addEventListener('onClick',()=>setExpanded(false))
    }


    return (
        <div
            className={`${isMobileScreen && expanded && 'absolute w-screen h-screen'}`} 
            style={{ background: `${isMobileScreen && 'rgba(0, 0, 0, 0.5)'}` }} 
            onClick={() => setExpanded(false)} 
        >
            <div className={`${isMobileScreen && 'absolute left-0 z-1'} min-h-custom-height`} onClick={(e) => e.stopPropagation()}>
                <nav className={`h-full  flex flex-col ${expanded ? "w-52" : "w-14 sm:w-20"} bg-white border-r shadow-sm`}>
                    <div className="p-2 sm:p-4  pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-[80px] sm:w-[125px]" : "hidden"}`} />

                        <button onClick={() => {console.log("changing sidebar opening", !expanded), setExpanded((curr) => !curr)}} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>
                   

                   <SidebarContext.Provider value={{ expanded, isMobileScreen }}>
                        <ul className="flex-1  px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t mt-0 sm:mt-20 flex p-3">
                         {/* <img src={profile} className="w-10 h-10 rounded-md" />  */}
                         <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">{user.name}</h4>
                                <span className="text-xs text-gray-600">{user.email}</span>
                            </div>
                            <MoreVertical size={20} />
                        </div> 
                    </div>  
                </nav>
            </div>
        </div>
    )
}

export function SidebarItem({ icon, text, active, alert,to }) {
    const { expanded, isMobileScreen } = useContext(SidebarContext)
    return (
        <Link to={to} className={`max-w-[32] flex items-center py-2 sm:px-3 my-3 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {/* <button  > */}
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {alert && (
                    <div className={` right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                    </div>
                )}

                {!expanded && (
                    <div className={` absolute rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm  opacity-20 -translate-x-3 invisible  transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-3`}>
                        {text}
                    </div>
                )}
            {/* </button> */}
        </Link>
    )
}