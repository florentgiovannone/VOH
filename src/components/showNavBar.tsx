import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface ShowNavItemPropsType {
    children: React.ReactNode;
}

export default function ShowNavBar({children}: ShowNavItemPropsType){
    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(true);

    useEffect(() => {console.log(`this is locatiom: ${location}`);
    if (location.pathname === `/`) {
        setShowNavBar(false)
    } else {
        setShowNavBar(true)
    }
    }, [location])
return (
    <div className="bg-green text-pink">{showNavBar && children}</div>
)
}