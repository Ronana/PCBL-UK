
import React from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const WarrantyInfoPage: React.FC = () => {
    return (
        <StaticPageLayout title="Warranty Information">
            <p>At PCBL UK, we stand behind the quality of our builds. Every custom PC comes with a comprehensive warranty covering parts and labour, giving you complete peace of mind.</p>
            
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Our 3 Year Standard Warranty</h3>
            <p>Our standard warranty provides excellent coverage to protect your investment. The warranty is broken down as follows:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>First 6 Months:</strong> Collect & Return. If your PC develops a fault, we will arrange a courier to collect it, repair it, and return it to you at no cost.</li>
                <li><strong>First 12 Months (1 Year):</strong> Parts cover. We will cover the cost of any faulty component.</li>
                <li><strong>Full 36 Months (3 Years):</strong> Labour cover. You are covered for the cost of labour for any repairs for the full three years.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">What is Covered?</h3>
            <p>The warranty covers hardware failure of the components in your PC. This includes components such as the motherboard, CPU, graphics card, RAM, storage drives, and power supply.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">What is Not Covered?</h3>
            <p>The warranty does not cover the following:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Software issues (e.g., operating system problems, viruses, driver conflicts).</li>
                <li>Accidental damage, misuse, or neglect.</li>
                <li>Damage caused by overclocking beyond manufacturer-recommended settings.</li>
                <li>Any modifications or upgrades performed by the user or a third party not authorized by PCBL UK.</li>
                <li>Cosmetic damage that does not affect the functionality of the PC.</li>
            </ul>
             <h3 className="text-xl font-bold text-white mt-6 mb-2">How to Make a Claim</h3>
            <p>If you believe your PC has developed a fault covered by your warranty, please contact our support team via email at <strong>support@pcbl.uk</strong>. Please provide your order number and a detailed description of the issue. Our team will guide you through the process.</p>
        </StaticPageLayout>
    );
};

export default WarrantyInfoPage;
