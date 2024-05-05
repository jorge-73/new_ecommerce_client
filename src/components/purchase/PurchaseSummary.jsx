import Link from "next/link";
import moment from "moment";
moment.locale("es");

const PurchaseSummary = ({ ticket }) => {
  return (
    <>
    {ticket && (
      <div className="container mx-auto my-5">
      <div className="md:w-1/2 mx-auto border border-gray-300 rounded-lg shadow-lg p-5">
        <h5 className="text-xl font-bold text-center">{ticket.purchaser}</h5>
        <h4 className="text-2xl font-bold my-4 text-center">Thanks for your order</h4>
        <h6 className="font-bold text-center">Purchase Summary</h6>
        <div className="my-3">
          <hr className="border-gray-400" />
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Purchase Code</span>
          <span className="font-bold">{ticket.code}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Date</span>
          <span className="font-bold">{moment(ticket.purchase_datetime).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <hr className="border-gray-400" />
        <h6 className="font-bold text-center my-3">Purchased products</h6>

        {ticket?.products?.map((prod, index) => (
          <div key={index} className="my-3 flex justify-between">
            <div className="text-center">
              <span className="font-bold">{prod.product.title}</span>
            </div>
            <div className="text-center">
              <span className="font-bold">quantity: {prod.quantity}</span>
            </div>
            <div className="text-center">
              <span className="font-bold">${prod.product.price} C/U</span>
            </div>
          </div>
        ))}
        <hr className="border-gray-400" />
        <div className="flex justify-between mt-3">
          <span className="font-bold">Total</span>
          <span className="font-bold">${ticket.amount}</span>
        </div>

        <div className="text-center mt-5">
          <Link href={"/products"} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Track your order
          </Link>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default PurchaseSummary;
