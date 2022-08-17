import {
    Box,
    VStack,
    Text
} from "@chakra-ui/react";

import {} from "@chakra-ui/icons";


function Footer()
{
    return (
        <Box
            bg="white"
            _dark={{
                bg: "gray.600",
            }}
        >
            <VStack py={3}>
                <Text
                    textAlign="center"
                    fontSize="smaller"
                    _dark={{
                        color: "white",
                    }}
                >
                    &copy; EventFly Inc. All rights reserved.
                </Text>
            </VStack>
        </Box>
    );
}

export default Footer;