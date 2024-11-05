import React from "react";
import CreditCard from "../common/CreditCard";

const CreditCards = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4">
      <CreditCard
        balance="$5,756"
        cardHolder="Eddy Cusuma"
        validThru="12/22"
        cardNumber="3778 **** **** 1234"
        isBlack={true}
      />
      <CreditCard
        balance="$5,756"
        cardHolder="Eddy Cusuma"
        validThru="12/22"
        cardNumber="3778 **** **** 1234"
        isBlack={false}
      />
      <CreditCard
        balance="$5,756"
        cardHolder="Eddy Cusuma"
        validThru="12/22"
        cardNumber="3778 **** **** 1234"
        isBlack={true}
      />
      <CreditCard
        balance="$5,756"
        cardHolder="Eddy Cusuma"
        validThru="12/22"
        cardNumber="3778 **** **** 1234"
        isBlack={false}
      />
      <CreditCard
        balance="$5,756"
        cardHolder="Eddy Cusuma"
        validThru="12/22"
        cardNumber="3778 **** **** 1234"
        isBlack={true}
      />
    </div>
  );
};

export default CreditCards;
