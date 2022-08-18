import {
	Container,
	Stack,
	Heading,
	Box
} from "@chakra-ui/react";
import QrScanner from "qr-scanner";
import { useEffect } from "react";
import { useRouter } from "next/router";



function ScanQRView()
{
    var router = useRouter();
    var decodedValue = "";

    //  useEffect because we want to run it during Client side
    useEffect(() => {

        var video = document.querySelector("#preview");
        var qrScanner = new QrScanner(video, result => {
            console.log(result);
            decodedValue = result;
    
            //  Visit the output from the QR code
            const ticketUrl = `/info/${result}`;
            router.push(ticketUrl);
        });

        if (navigator.mediaDevices.getUserMedia)
        {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then (function (stream)
            {
                video.srcObject = stream;
                qrScanner.start();

                //  the JavaScript equivalent of sleep
                new Promise(r => setTimeout(r, 200)).then(() => {
                    qrScanner.stop();
                });
            })
            .catch (function (error)
            {
                console.log("Something went wrong!");
                console.log(error);
            });
        }
    });

    return (
        <Container>
            <Stack>
                <Heading textAlign={"center"} marginTop={"10px"} fontSize={'3xl'}>
                    Scan QR
                </Heading>
                <Box bgColor={"black"} height={"md"} width={"100%"}>
                    <video id="preview" height={"inherit"} width={"inherit"}></video>
                </Box>
            </Stack>
        </Container>
    );
}

export default ScanQRView;