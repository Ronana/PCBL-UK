
import React from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const TermsAndConditionsPage: React.FC = () => {
    return (
        <StaticPageLayout title="Terms and Conditions">
            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">1. Interpretation and Definitions</h3>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">2. Acknowledgment</h3>
            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
            <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">3. Orders for Goods</h3>
            <p>By placing an Order for Goods through the Service, You warrant that You are legally capable of entering into binding contracts.</p>
            <p>The Company reserves the right to refuse or cancel Your Order at any time for certain reasons including but not limited to: Goods availability, errors in the description or prices for Goods, error in Your Order.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">4. Prices and Payment</h3>
            <p>All prices are quoted in Pound Sterling (£) and are inclusive of VAT (where applicable) at the current rates. The Company reserves the right to change prices at any time. Payment can be made by any major credit or debit card.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">5. Limitation of Liability</h3>
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">6. Governing Law</h3>
            <p>The laws of the United Kingdom, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
        </StaticPageLayout>
    );
};

export default TermsAndConditionsPage;
