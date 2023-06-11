import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChechkOutForm from "./ChechkOutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);
const Payment = () => {
    return (
        <div className="w-full text-center">
            <SectionTitle
                subHeading='to get best service make sure'
                heading='Payment'
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <ChechkOutForm></ChechkOutForm>
            </Elements>

        </div>
    );
};

export default Payment;