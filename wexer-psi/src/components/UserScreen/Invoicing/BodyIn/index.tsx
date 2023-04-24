import InvoicingBar from "./InvoicingBar";
import MyConsumption from "./MyConsumption";
import PaymentMethods from "./PaymentMethods";

const BodyIn = () => {
  return (
    <>
      <div>
        <MyConsumption />
        <PaymentMethods />
        <InvoicingBar />
      </div>
    </>
  );
};

export default BodyIn;
