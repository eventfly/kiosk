import BottomNavChakra from "../components/BottomNavChakra";

import { Container } from "@chakra-ui/layout";
import { useEffect } from "react";

import { isAuthenticated } from "../services/StorageService";



function DefaultLayout({ children })
{
    useEffect(() => {
    }, []);

    if (isAuthenticated()) {
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