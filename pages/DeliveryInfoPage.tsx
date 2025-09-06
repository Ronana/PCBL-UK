
import React from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const DeliveryInfoPage: React.FC = () => {
    return (
        <StaticPageLayout title="Delivery Information">
            <p>We are committed to getting your custom-built PC to you safely and as quickly as possible. Here is what you need to know about our delivery process.</p>
            
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Build & Testing Time</h3>
            <p>Each PC is built to order and undergoes rigorous testing to ensure it meets our high standards. Our standard build and testing time is approximately <strong>7 to 9 working days</strong>. You will be notified via email once your system has passed quality control and is ready for dispatch.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">UK Mainland Delivery</h3>
            <p>We offer fully insured delivery to the UK Mainland. Once dispatched, your PC will typically arrive the next working day (Monday-Friday).</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Service:</strong> Standard Insured Delivery (Next Working Day)</li>
                <li><strong>Cost:</strong> A standard fee applies at checkout.</li>
                <li><strong>Courier:</strong> We use reputable couriers such as DPD or Parcelforce.</li>
                <li><strong>Tracking:</strong> You will receive a tracking number via email as soon as your order is dispatched.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Packaging</h3>
            <p>Your PC will be securely packaged in a custom-fitted box with internal foam padding to prevent any damage during transit. All accessory boxes and manuals will be included in a separate compartment.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Receiving Your Delivery</h3>
            <p>A signature will be required upon delivery. Please inspect the outer box for any signs of significant damage before signing. If you have any concerns, please note them with the courier and contact us immediately.</p>
        </StaticPageLayout>
    );
};

export default DeliveryInfoPage;
