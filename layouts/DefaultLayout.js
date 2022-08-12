import BottomNav from "../components/BottomNav";
import BottomNavChakra from "../components/BottomNavChakra";

import Box from "@mui/material/Box";
// import { Container } from "@mui/system";
import { Container } from "@chakra-ui/layout";
import { useEffect } from "react";


function DefaultLayout({ children }) {

    var authenticated = false;

    useEffect(() => {
        if ("auth_key" in localStorage) {
            authenticated = true;
        }
    })

    if (authenticated) {
        return (
            <Container>
                {children}
                <BottomNavChakra />
            </Container>
        );    
    }
    else {
        return (
            <Container>
                { children }
            </Container>
        )
    }
}

export default DefaultLayout;