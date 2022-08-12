/*
    This page is for scanning QR code through the PWA
*/

import QrScanner from "qr-scanner";
import { useEffect } from "react";


function ScanQRView() {

    useEffect(() => {
        const videoElement = document.getElementById("preview");
        const qrScanner = new QrScanner(videoElement, result => {
            console.log("Video Element");
            console.log(result);
        })

        qrScanner.start();
    });

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <br />
            <video id="preview"></video>
        </div>
    );
}

export default ScanQRView;