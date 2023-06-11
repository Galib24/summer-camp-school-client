import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChechkOutForm from "./ChechkOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useEnrolled from "../../../hooks/useEnrolled";

// TODO provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);
const Payment = () => {
    const [enroll] = useEnrolled();
    const total = enroll.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full text-center">
            <SectionTitle
                subHeading='to get best service make sure'
                heading='Payment'
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <ChechkOutForm  price = {price} enroll={enroll}></ChechkOutForm>
            </Elements>

        </div>
    );
};

export default Payment;