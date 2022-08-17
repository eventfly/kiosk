import SideNavBar from "../components/SideNavBar";
import Footer from "../components/Footer";

import { isAuthenticated } from "../services/StorageService";
import { useEffect, useState } from "react";


function DefaultLayout({ children })
{
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        setAuthenticated(isAuthenticated());
        console.log("isauth", isAuthenticated());
    }, []);

    if (authenticated)
    {
        return (
            <>
                <SideNavBar>   
                    {children}
                </SideNavBar>
                <Footer/>    
            </>
        );
    }
    else
    {
        return (
            <>
                { children }
            </>
        );
    }
}

export default DefaultLayout;