"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import usePayment from "@/store/PaymentStore";
import PurchaseSummary from "@/components/purchase/PurchaseSummary";

const PaymentSuccessPage = () => {
  const params = useParams();
  const [ticket, setTicket] = useState(null);
  const [getTicket, setGetTicket] = useState(false);
  const { getPurchase, getTicketPurchase } = usePayment();

  useEffect(() => {
  }, []);

  const generateTicket = async () => {
    setGetTicket(true);

    if (params.cid) {
      const createTicket = async () => {
        const res = await getPurchase(params.cid);
        const resTicket = await getTicketPurchase(res._id);
        console.log(resTicket);
        setTicket(resTicket);
      };
      createTicket();
    }
  };

  return (
    <div className="flex flex-col items-center pt-20 h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Thanks for your purchase!</h1>
      <p className="text-lg mb-8">
        Your payment has been processed successfully.!
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={generateTicket}
      >
        Generate ticket
      </button>

      {getTicket && <PurchaseSummary ticket={ticket} />}
    </div>
  );
};

export default PaymentSuccessPage;
