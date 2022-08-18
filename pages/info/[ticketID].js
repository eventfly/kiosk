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
import { putData } from "../../services/HttpService";
import { storeJSON_Session } from "../../services/StorageService";
import CONFIG from "../../config/config.json";
import { useEffect, useState } from "react";


function Info(props)
{
    function cacheTicketInfo(ticket)
    {
        storeJSON_Session("cachedTicket", ticket);
    }

    const router = useRouter();
    const [ loaded, setLoaded ] = useState(false);

    const [ ticketID, setTicketID ] = useState("");
    const [ participantName, setParticipantName ] = useState("");
    const [ participantEmail, setParticipantEmail ] = useState("");
    const [ ticketPrice, setTicketPrice ] = useState(0);
    const [ purchasedAt, setPurchasedAt ] = useState(""); 
    const [ ticketClass, setTicketClass ] = useState("");

    const [ eventID, setEventID ] = useState("");
    const [ eventName, setEventName ] = useState("");
    const [ eventStartDate, setEventStartDate ] = useState("");
    const [ eventEndDate, setEventEndDate ] = useState("");

    useEffect(() => {        

        if (! router.isReady) {
            return;
        }
        else {
            const { ticketID } = router.query;
            const ticketInfoUrl = `${CONFIG.BASE_URL.PARTICIPANT}/api/participant/checkin`;
            const payload = {
                ticket_id: ticketID
            }

            if (!loaded)
            {
                putData(ticketInfoUrl, payload)
                .then((res) => {
                    console.log("Ticket info:", res);
                    cacheTicketInfo(res);

                    setTicketID(ticketID);
                    setParticipantName(res.participant.name);
                    setParticipantEmail(res.participant.email);
                    setTicketClass(res.class);
                    setTicketPrice(res.price);
                    setPurchasedAt(new Date(res.created_at).toDateString());
                    
                    setEventID(res.event.id);
                    setEventName(res.event.name);
                    setEventStartDate(new Date(res.event.start_date).toDateString());
                    setEventEndDate(new Date(res.event.end_date).toDateString());

                    setLoaded(true);
                })
                .catch((err) => {
                    console.error(err);
                });
            }
        }

    });

    return (
        <Container>
            <Text textAlign="center" marginTop={5} marginBottom={5} fontSize="2xl" fontWeight="bold">
                Event Info
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme="blue">
                    <Tbody>
                        <Tr>
                            <Td>Event ID</Td>
                            <Td>{ eventID }</Td>
                        </Tr>
                        <Tr>
                            <Td>Event Name</Td>
                            <Td>{ eventName }</Td>
                        </Tr>
                        <Tr>
                            <Td>Date</Td>
                            <Td>{ eventStartDate } - { eventEndDate }</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Text textAlign="center" marginTop={5} marginBottom={5} fontSize="2xl" fontWeight="bold">
                Participant Info
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme="blue">
                    <Tbody>
                        <Tr>
                            <Td>Ticket ID</Td>
                            <Td>{ ticketID }</Td>
                        </Tr>
                        <Tr>
                            <Td>Name</Td>
                            <Td>{ participantName }</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>{ participantEmail }</Td>
                        </Tr>
                        <Tr>
                            <Td>Ticket Class</Td>
                            <Td>{ ticketClass }</Td>
                        </Tr>
                        <Tr>
                            <Td>Ticket Price</Td>
                            <Td>BDT { ticketPrice }</Td>
                        </Tr>
                        <Tr>
                            <Td>Purchased</Td>
                            <Td>{ purchasedAt }</Td>
                        </Tr>
                        
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Info;