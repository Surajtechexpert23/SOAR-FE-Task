import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";

const Card = ({ balance, cardHolder, validThru, cardNumber, isBlack }) => {
  return (
    <div
      className={`rounded-2xl ${
        isBlack ? "bg-black text-white" : "bg-white text-black border-2"
      }`}
    >
      <div className="p-8">
        <div className="mt-2 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-sm">Balance</p>
            <p>{balance}</p>
          </div>
          <FcSimCardChip className="text-5xl" />
        </div>

        <div className="mt-5 grid grid-cols-2 flex flex-col">
          <div>
            <p className="uppercase text-sm">Card Holder</p>
            <p>{cardHolder}</p>
          </div>
          <div>
            <p className="uppercase text-sm">Valid Thru</p>
            <p>{validThru}</p>
          </div>
        </div>

        <div
          className={` flex justify-between items-center ${
            isBlack ? "bg-gray-700" : "border-t-2"
          } p-5 px-8 `}
        >
          <p className="text-sm">{cardNumber}</p>
          <RiMastercardFill className="text-5xl" />
        </div>
        
      </div>
    </div>
  );
};

const CreditCards = () => {
  return (
    <>
      <h2 className="text-xl">My Cards</h2>

      <div className="mt-5">
        <div className="grid grid-cols-2 gap-10">
          <Card
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
            isBlack={true}
          />
          <Card
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
            isBlack={false}
          />
        </div>
      </div>
    </>
  );
};

export default CreditCards;
