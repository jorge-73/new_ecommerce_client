"use client";
import usePayment from "@/store/PaymentStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const PaymentsPage = () => {
  const params = useParams();
  const { createPayments } = usePayment();
  useEffect(() => {
    if (params.cid) {
      const getPayment = async () => {
        const data = await createPayments(params.cid);
        if (!data.url) return toast.error("Error getting payment");
        window.location.href = data.url;
      };
      getPayment();
    }
  }, []);

  return (
    <>
      <div className="text-center text-white pt-20">
        <span className="loading loading-infinity loading-lg mt-3"></span>
      </div>
    </>
  );
};

export default PaymentsPage;
