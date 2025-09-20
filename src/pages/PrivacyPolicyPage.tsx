
import React from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <StaticPageLayout title="Privacy Policy">
           <p>Your privacy is important to us. It is PCBL UK's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">1. Information we collect</h3>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">2. How we use your information</h3>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">3. Cookies</h3>
            <p>We use cookies to improve your experience on our website. A cookie is a small file that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site and serve you content based on preferences you have specified.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">4. Third-party services</h3>
            <p>We may employ third-party companies and individuals on our websites. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">5. Security</h3>
            <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">6. Links to other sites</h3>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

            <p className="mt-6">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        </StaticPageLayout>
    );
};

export default PrivacyPolicyPage;
