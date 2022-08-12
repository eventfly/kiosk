import {
    BottomNavigation,
    BottomNavigationAction
} from "@mui/material";

import { useState } from "react";
import { useRouter } from "next/router";

import QrCodeIcon from "@mui/icons-material/QrCode";
import FeedIcon from "@mui/icons-material/Feed";
import SettingsIcon from "@mui/icons-material/Settings";

function BottomNav({ childComponents }) {

    const [value, setValue] = useState("");
    const router = useRouter();

    function handleChange(event, newValue) {
        setValue(newValue);
        console.log("Redirecting to:", newValue);
        
        if (newValue == 0)      router.push("/scan");
        else if (newValue == 1) router.push("/feed");
        else if (newValue == 2) router.push("/settings");
        else                    router.push("/");
    }

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={ handleChange }
        >
            <BottomNavigationAction label="Scan Code" icon={<QrCodeIcon />} />
            <BottomNavigationAction label="Feed" icon={<FeedIcon />} />
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
    );
}

export default BottomNav;