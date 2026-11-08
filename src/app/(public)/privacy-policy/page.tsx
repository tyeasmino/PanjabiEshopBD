
import PolicyLayout, {
    PolicySection,
} from "@/components/policies/policy-layout";

export default function PrivacyPolicyPage() {
    return (
        <PolicyLayout
            eyebrow="Privacy & Security"
            title="Your Privacy Matters."
            description="This policy explains how Panjabi Eshop BD may collect, use, store, and protect your personal information when you interact with our website."
        >
            <PolicySection number={1} title="Information We May Collect">
                <p>
                    Depending on the services you use, we may collect information such
                    as your name, phone number, email address, delivery address, order
                    details, and messages sent to our support team.
                </p>
                <p>
                    Basic technical information, such as browser type, device
                    information, and website usage data, may also be collected where
                    applicable.
                </p>
            </PolicySection>

            <PolicySection number={2} title="How We Use Your Information">
                <p>Information may be used to:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Process and manage customer orders.</li>
                    <li>Contact customers about orders and delivery.</li>
                    <li>Respond to questions, complaints, and support requests.</li>
                    <li>Improve our website, products, and shopping experience.</li>
                    <li>Maintain business records and meet applicable legal obligations.</li>
                </ul>
            </PolicySection>

            <PolicySection number={3} title="Sharing of Information">
                <p>
                    We do not intend to sell customers&apos; personal information. Where
                    necessary, relevant information may be shared with service
                    providers involved in fulfilling an order, such as delivery
                    partners or payment service providers.
                </p>
                <p>
                    Information may also be disclosed where required by applicable
                    law or a lawful request from an authorised authority.
                </p>
            </PolicySection>

            <PolicySection number={4} title="Cookies and Website Technologies">
                <p>
                    Our website may use cookies or similar technologies to support
                    essential website functions, remember preferences, and understand
                    website performance where such technologies are enabled.
                </p>
                <p>
                    You can manage cookies through your browser settings. Disabling
                    certain cookies may affect some website features.
                </p>
            </PolicySection>

            <PolicySection number={5} title="Data Security">
                <p>
                    We aim to use reasonable technical and organisational measures
                    to protect personal information from unauthorised access, loss,
                    misuse, or disclosure.
                </p>
                <p>
                    However, no online system can be guaranteed to be completely
                    secure.
                </p>
            </PolicySection>

            <PolicySection number={6} title="Data Retention">
                <p>
                    Personal information may be retained for as long as reasonably
                    necessary for order management, customer support, business
                    records, dispute resolution, and applicable legal requirements.
                </p>
            </PolicySection>

            <PolicySection number={7} title="Your Privacy Choices">
                <p>
                    You may contact us to ask about the personal information associated
                    with your interactions with our store or to request an appropriate
                    correction or other action, subject to applicable law.
                </p>
            </PolicySection>

            <PolicySection number={8} title="Third-Party Services">
                <p>
                    Our website may use third-party services, such as delivery,
                    payment, hosting, or analytics providers. Their own privacy
                    practices may apply when you use their services.
                </p>
            </PolicySection>

            <PolicySection number={9} title="Changes to This Policy">
                <p>
                    We may update this policy when our services, business practices,
                    or applicable legal requirements change. The latest version will
                    be published on this page.
                </p>
            </PolicySection>

            <PolicySection number={10} title="Contact Us">
                <p>
                    For privacy-related questions or requests, please contact us
                    through our Contact Us page.
                </p>
            </PolicySection>
        </PolicyLayout>
    );
}
