import { SimpleGrid, Center, Flex, Box, Text, Link } from "@chakra-ui/react";
import { SettingsIcon, UnlockIcon, PlusSquareIcon } from "@chakra-ui/icons";

function BottomNavChakra() {

    return (
        <Box>
            <Center bottom={0} position={'fixed'}>
                <SimpleGrid columns={3} spacing={10}>
                    <Link href="/scan">
                    <Box padding={5} textAlign='center'>
                        <UnlockIcon w={6} h={6} />
                        <br />
                        <Text fontSize={'sm'}>Scan
                        </Text>
                    </Box>

                    </Link>
                    <Link href="/feed">
                    <Box padding={5} textAlign='center'>
                        <PlusSquareIcon w={6} h={6} />
                        <br />
                        <Text fontSize={'sm'}>Feed
                        </Text>
                    </Box>
                    </Link>
                    
                    <Link href="/settings">
                    <Box padding={5} textAlign='center'>
                        <SettingsIcon w={6} h={6} />
                        <br />
                        <Text fontSize={'sm'}>Settings
                        </Text>
                    </Box>

                    </Link>
                </SimpleGrid>
            </Center >
        </Box>
    );
}

export default BottomNavChakra;