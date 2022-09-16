import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        borderLeft: "2px solid #000",
        borderRight: "2px solid #000",
      }}
    >
      <NavBar />
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
      <Footer />
    </div>
  );
}

export default MyApp;
