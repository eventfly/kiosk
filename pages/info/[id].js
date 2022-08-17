import {
    Container,
    TableContainer,
    Thead,
    Table,
    TableCaption,
    Td,
    Tfoot,
    Tr,
    Th,
    Tbody,
    Text
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { getData } from "../../services/HttpService";
import CONFIG from "../../config/config.json";


function Info({ props })
{
    const router = useRouter();
    const { id } = router.query;

    //  Need to work
    const getInfoUrl = `${CONFIG.BASE_URL.EVENT}/api/event/info`;


    return (
        <Container>
            <Text textAlign="center" marginTop={10} marginBottom={10} fontSize="3xl" fontWeight="bold">
                Participant Info
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme="blue">
                    <Tbody>
                        <Tr>
                            <Td>ID</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Name</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
                        <Tr>
                            <Td>Contact</Td>
                            <Td>+88 01789 949 615</Td>
                        </Tr>
                        
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Info;