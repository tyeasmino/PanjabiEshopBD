
import PolicyLayout, {
    PolicySection,
} from "@/components/policies/policy-layout";

export default function ShippingReturnsPage() {
    return (
        <PolicyLayout
            eyebrow="Delivery & Customer Care"
            title="Shipping & Return Policy."
            description="We want your Panjabi shopping experience to be clear and convenient. Please review our delivery, return, exchange, and refund guidelines."
        >
            <PolicySection number={1} title="Delivery Coverage">
                <p>
                    Panjabi Eshop BD aims to serve customers in Dhaka and other
                    serviceable areas of Bangladesh. Delivery availability will be
                    confirmed based on the address and courier service coverage.
                </p>
            </PolicySection>

            <PolicySection number={2} title="Delivery Charges">
                <p>
                    Applicable delivery charges will be displayed during checkout
                    or communicated before order confirmation. Charges may vary
                    depending on the delivery location, order, or delivery service.
                </p>
                <p>
                    Please review the final order amount before confirming your
                    purchase.
                </p>
            </PolicySection>

            <PolicySection number={3} title="Delivery Time">
                <p>
                    Estimated delivery information will be communicated during
                    checkout or order confirmation whenever available.
                </p>
                <p>
                    Delivery may take longer due to courier availability, weather,
                    public holidays, transportation issues, or circumstances beyond
                    our reasonable control. If a significant delay occurs, we aim
                    to inform the customer.
                </p>
            </PolicySection>

            <PolicySection number={4} title="Order Processing">
                <p>
                    Orders are subject to product availability and confirmation.
                    Please provide a complete and accurate phone number and delivery
                    address to help avoid delays.
                </p>
                <p>
                    Our team or delivery partner may contact you to verify delivery
                    details before or during delivery.
                </p>
            </PolicySection>

            <PolicySection number={5} title="Receiving Your Order">
                <p>
                    Customers are encouraged to check the delivered package and
                    product condition at the time of receiving, where possible.
                    If you notice an incorrect, damaged, or defective item, please
                    contact our support team promptly.
                </p>
            </PolicySection>

            <PolicySection number={6} title="Return Eligibility">
                <p>
                    If you receive an incorrect, damaged, defective, or materially
                    different product, please contact us with your order details
                    and a description of the issue.
                </p>
                <p>
                    Return requests will be reviewed based on the nature of the
                    issue, product condition, and applicable consumer protection
                    requirements.
                </p>
                <p>
                    For hygiene and product-condition reasons, customers should
                    avoid using, washing, altering, or damaging a product they
                    intend to return, except where necessary to identify a defect
                    or where applicable law provides otherwise.
                </p>
            </PolicySection>

            <PolicySection number={7} title="Size Issues and Exchanges">
                <p>
                    If you have a size-related concern or wish to request an
                    exchange, please contact our support team before sending
                    any product back.
                </p>
                <p>
                    Exchange requests may depend on product condition, available
                    stock, and the applicable exchange arrangements confirmed
                    by our team.
                </p>
            </PolicySection>

            <PolicySection number={8} title="Refunds">
                <p>
                    Where a refund is appropriate, our team will communicate the
                    refund process and any information required to complete it.
                </p>
                <p>
                    The refund method and processing time may depend on the original
                    payment method, payment provider, and applicable requirements.
                    We will communicate the relevant details when a refund is approved.
                </p>
            </PolicySection>

            <PolicySection number={9} title="How to Request Support">
                <p>
                    To report a delivery or product issue, please contact us through
                    our Contact Us page and include your order details, phone number,
                    and a clear explanation of the issue.
                </p>
                <p>
                    Our team will review your request and guide you through the
                    next steps.
                </p>
            </PolicySection>

            <PolicySection number={10} title="Policy Updates">
                <p>
                    We may update this policy as our delivery and customer service
                    arrangements evolve. The latest version will be available on
                    this page.
                </p>
            </PolicySection>
        </PolicyLayout>
    );
}
