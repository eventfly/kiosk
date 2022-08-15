/*
    This page is for scanning QR code through the PWA
*/

import QrScanner from "qr-scanner";
import { useEffect } from "react";
import { useRouter } from "next/router";

function ScanQRView() {

    var router = useRouter();
    var decodedValue = "";
    var isDecoded = false;


    //  useEffect because we want to run it during Client side
    useEffect(() => {

        var video = document.querySelector("#preview");
        var qrScanner = new QrScanner(video, result => {
            console.log(result);
            decodedValue = result;
            isDecoded = true;
    
            //  Visit the output from the QR code
            router.push(result);
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
            });
        }
    });

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <br />
            <video id="preview"></video>
            <h2>{decodedValue}</h2>
        </div>
    );
}

export default ScanQRView;