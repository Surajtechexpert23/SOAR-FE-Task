import React from "react";
import { Link } from "react-router-dom";
import CreditCard from "../common/CreditCard";
import { CiCreditCard1, CiBadgeDollar } from "react-icons/ci";
import { PiPaypalLogo } from "react-icons/pi";
import TransactionItem from "../common/TransactionItem";
import BarChart from "../components/chart/BarChart";
import PieChart from "../components/chart/PieChart";

const Dashboard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-1 lg:gap-10 ">
        {/* Row 1 */}

        {/* Grid Column 1 */}
        <div className="col-span-4  md:w-full">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">My Cards</h2>
            <Link
              to="/credit_cards"
              className="flex items-center cursor-pointer transition"
            >
              See all
            </Link>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10">
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
            </div>
          </div>
        </div>

        {/* Grid Column 2 */}
        <div className="col-span-2  md:w-full">
          <h2 className="text-lg font-medium">Recent Transaction</h2>
          <div className="rounded-xl p-8 bg-white shadow-lg mt-5 space-y-5 border">
            <TransactionItem
              icon={<CiCreditCard1 className="text-3xl text-yellow-600" />}
              title="Deposit from my card"
              date="28 January 2021"
              amount="850"
              amountType="negative"
              iconbg={"bg-[#ffc10763]"}
            />
            <TransactionItem
              icon={<PiPaypalLogo className="text-2xl text-blue-500" />}
              title="Deposit Paypal"
              date="25 January 2021"
              amount="2500"
              amountType="positive"
              iconbg={"bg-[#213bcd3d]"}
            />
            <TransactionItem
              icon={<CiBadgeDollar className="text-3xl text-[#0b750f]" />}
              title="Jemi Wilson"
              date="21 January 2021"
              amount="5400"
              amountType="positive"
              iconbg={"bg-[#8bc34a73]"}
            />
          </div>
        </div>

        {/* Row 2 */}

        {/* Grid Column 1 */}
        <div className="col-span-4  md:w-full">
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-xl font-medium">Weekly Activity</h2>
            <div className="bg-white shadow-lg px-4 py-2 border rounded-2xl mt-5">
              <BarChart />
            </div>
          </div>
        </div>

        {/* Grid Column 2 */}
        <div className="col-span-2  md:w-full">
          {/* Content for Column 2 can go here */}
          <h2 className="text-lg font-medium">Expense Statistics</h2>
          <div className="bg-white shadow-lg p-10 border rounded-2xl mt-5">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
