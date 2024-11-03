// components/DisclaimerContent.js
import React from 'react';

const DisclaimerContent = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '500px', color: '#555', lineHeight: '1.4' }}>
            <h2 style={{ color: '#333' }}>Disclaimer</h2>
            <p>
                Welcome to our Image Gallery! All images on this website are displayed for your viewing pleasure free of charge. 
                While you are free to browse and enjoy the artwork, please note that the download, reproduction, or distribution 
                of any image without prior purchase is strictly prohibited.
            </p>
            <p>
                Purchasing an image grants you a license for personal or commercial use, as outlined in our terms and conditions. 
                Unauthorized use of images, including screenshots or downloads without a valid license, may be subject to legal action.
            </p>
            <p>
                By browsing our gallery, you acknowledge that all images remain the intellectual property of their respective creators. 
                We thank you for supporting artists and for respecting copyright laws. Enjoy your stay, and consider purchasing to support 
                the amazing artists whose work is showcased here!
            </p>
        </div>
    );
};

export default DisclaimerContent;
