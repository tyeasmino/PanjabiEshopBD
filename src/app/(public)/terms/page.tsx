
import PolicyLayout, {
    PolicySection,
} from "@/components/policies/policy-layout";

export default function TermsPage() {
    return (
        <PolicyLayout
            eyebrow="Website Terms"
            title="Terms & Conditions."
            description="Please read these terms before browsing or placing an order through Panjabi Eshop BD."
        >
            <PolicySection number={1} title="About These Terms">
                <p>
                    These terms apply to your access to and use of the Panjabi Eshop BD
                    website. By using our website or placing an order, you agree to
                    follow the applicable terms and policies published here.
                </p>
            </PolicySection>

            <PolicySection number={2} title="Product Information">
                <p>
                    We aim to display accurate product descriptions, images, sizes,
                    colours, and prices. Actual product appearance may vary slightly
                    due to lighting, photography, or screen settings.
                </p>
                <p>
                    Customers should review the available product information and
                    size details before placing an order. Please contact us if you
                    need clarification.
                </p>
            </PolicySection>

            <PolicySection number={3} title="Prices and Additional Charges">
                <p>
                    Product prices are displayed in Bangladeshi Taka (BDT), unless
                    stated otherwise. Applicable delivery charges or other additional
                    charges will be communicated during checkout or order confirmation.
                </p>
                <p>
                    Any promotional price or discount is subject to its stated
                    conditions and availability.
                </p>
            </PolicySection>

            <PolicySection number={4} title="Orders and Confirmation">
                <p>
                    Submitting an order request does not necessarily mean that the
                    order has been accepted. Orders may be subject to product
                    availability and confirmation by our team.
                </p>
                <p>
                    We may contact customers to verify order details, delivery
                    information, or other necessary information before processing
                    an order.
                </p>
                <p>
                    If an item becomes unavailable or an order cannot be fulfilled,
                    we will contact the customer to discuss the appropriate next
                    steps.
                </p>
            </PolicySection>

            <PolicySection number={5} title="Payment">
                <p>
                    Available payment methods will be displayed during checkout or
                    communicated during order confirmation. Customers should follow
                    the payment instructions provided for their selected method.
                </p>
                <p>
                    Any applicable payment-related conditions will be communicated
                    before payment is completed.
                </p>
            </PolicySection>

            <PolicySection number={6} title="Order Changes and Cancellation">
                <p>
                    If you need to change or cancel an order, please contact us as
                    soon as possible and provide your order information.
                </p>
                <p>
                    Whether a requested change or cancellation can be accommodated
                    may depend on the order&apos;s processing and delivery status, subject
                    to applicable consumer rights.
                </p>
            </PolicySection>

            <PolicySection number={7} title="Shipping, Returns and Exchanges">
                <p>
                    Delivery, return, exchange, and refund conditions are explained
                    in our Shipping & Return Policy. Please review that policy before
                    placing an order.
                </p>
            </PolicySection>

            <PolicySection number={8} title="Website Use">
                <p>
                    You agree not to misuse the website, interfere with its operation,
                    attempt unauthorised access, or use the website for unlawful
                    purposes.
                </p>
                <p>
                    Website content, branding, product photographs, text, and design
                    elements may not be copied or commercially reused without
                    appropriate permission.
                </p>
            </PolicySection>

            <PolicySection number={9} title="Errors and Availability">
                <p>
                    We may correct website errors, update product information, or
                    change product availability when necessary. If an error affects
                    an order you have placed, we will contact you to discuss a fair
                    resolution.
                </p>
            </PolicySection>

            <PolicySection number={10} title="Applicable Law">
                <p>
                    These terms are intended to operate in accordance with the
                    applicable laws and regulations of Bangladesh. Nothing in these
                    terms is intended to remove any consumer right that cannot
                    lawfully be excluded.
                </p>
            </PolicySection>

            <PolicySection number={11} title="Changes to These Terms">
                <p>
                    We may revise these terms when our website, services, or
                    applicable requirements change. Updated terms will be published
                    on this page.
                </p>
            </PolicySection>

            <PolicySection number={12} title="Contact">
                <p>
                    For questions about these terms, please contact us through our
                    Contact Us page.
                </p>
            </PolicySection>
        </PolicyLayout>
    );
}
