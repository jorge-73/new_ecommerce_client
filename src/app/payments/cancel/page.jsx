import Link from "next/link";

const PaymentCancelPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Cancelled</h2>
        <p className="text-lg mb-4">Your payment has been cancelled.</p>
        <Link
          href={"/products"}
          className="btn btn-primary font-bold"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelPage;
