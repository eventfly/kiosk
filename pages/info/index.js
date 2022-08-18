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
import { getJSON_Session } from "../../services/StorageService";
import { useEffect, useState } from "react";


function Info({ props })
{
    const [ ticket, setTicket ] = useState(null);
    const [ loaded, setLoaded ] = useState(false);

    const [ eventStartDate, setEventStartDate ] = useState("");
    const [ eventEndDate, setEventEndDate ] = useState("");
    const [ purchasedAt, setPurchasedAt ] = useState(""); 

    useEffect(() => {
        
        if (!loaded)
        {
            const ticket = getJSON_Session("cachedTicket");
            setTicket(ticket);
            setEventStartDate(new Date(ticket.event.start_date).toDateString());
            setEventEndDate(new Date(ticket.event.end_date).toDateString());
            setPurchasedAt(new Date(ticket.created_at).toDateString());

            setLoaded(true);    
        }

    })

    return (
        loaded ?
            <Container>
                <Text textAlign="center" marginTop={5} marginBottom={2} fontSize="2xl" fontWeight="bold">
                    Event Info
                </Text>
                <Text textAlign="center" marginTop={2} marginBottom={5} fontSize="md" fontWeight="semibold">
                    Last User
                </Text>
                <TableContainer>
                    <Table variant='striped' colorScheme="blue">
                        <Tbody>
                            <Tr>
                                <Td>Event ID</Td>
                                <Td>{ ticket.event.id }</Td>
                            </Tr>
                            <Tr>
                                <Td>Event Name</Td>
                                <Td>{ ticket.event.name }</Td>
                            </Tr>
                            <Tr>
                                <Td>Date</Td>
                                <Td>{ eventStartDate } - { eventEndDate }</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Text textAlign="center" marginTop={5} marginBottom={2} fontSize="2xl" fontWeight="bold">
                    Participant Info
                </Text>
                <Text textAlign="center" marginTop={2} marginBottom={5} fontSize="md" fontWeight="semibold">
                    Last User
                </Text>
                <TableContainer>
                    <Table variant='striped' colorScheme="blue">
                        <Tbody>
                            <Tr>
                                <Td>Ticket ID</Td>
                                <Td>{ ticket._id }</Td>
                            </Tr>
                            <Tr>
                                <Td>Name</Td>
                                <Td>{ ticket.participant.name }</Td>
                            </Tr>
                            <Tr>
                                <Td>Email</Td>
                                <Td>{ ticket.participant.email }</Td>
                            </Tr>
                            <Tr>
                                <Td>Ticket Class</Td>
                                <Td>{ ticket.class }</Td>
                            </Tr>
                            <Tr>
                                <Td>Ticket Price</Td>
                                <Td>BDT { ticket.price }</Td>
                            </Tr>
                            <Tr>
                                <Td>Purchased</Td>
                                <Td>{ purchasedAt }</Td>
                            </Tr>
                            
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        :
        <></>
    )
}

export default Info;