import React from "react";
import { format } from "date-fns"


const donors = [
  { name: "Ryan Bent", amount: 1600, gaveOn: "2023-10-03T06:00:00.000Z" },
];

const goalAmount = 2400;
const currentAmount = donors.reduce((total, donor) => total + donor.amount, 0);

const neededItems = [
  { name: "RTX 4080 GPU", price: 1200, url: "https://www.amazon.com/Gigabyte-Graphics-WINDFORCE-GV-N4080GAMING-OC-16GD/dp/B0BMN5J1XJ/ref=sr_1_1?keywords=NVIDIA%2BRTX%2B4080&qid=1698870812&sr=8-1&th=1" },
  { name: "AVAX to mint AIR & Governance contracts", price: 50 },
  { name: "OpenAI API costs", price: 100 },
];

function formatCurrency(number) {
  // Check if the input is a valid number
  if (typeof number !== 'number') {
    return 'Invalid input';
  }

  // Format the number as currency
  const formattedCurrency = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formattedCurrency;
}

const Funding = () => {
  const progress = (currentAmount / (goalAmount + neededItems.reduce((acc, item) => acc + item.price, 0))) * 100;

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8 prose">Research Funding</h1>
      <p className="text-sm font-thin">Contributions equals ownership! Earn a private token equal to the amount you contribute, and leverage that ownership in proposing and voting.</p>
      <div className="border-[1px] rounded bg-purple-50 p-4 w-full">
        <div className="text-gray-600 font-medium">
          Goal: {formatCurrency(goalAmount)}
        </div>


        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-gray-600">
              Goal Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-purple-600">
              {progress.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-purple-200">
          <div
            style={{ width: `${progress}%` }}
            className="flex flex-col justify-center text-center text-white bg-purple-500 shadow-none"
          ></div>
        </div>

        <div className=" prose">
          <div className="">
            <a
              href="https://buy.stripe.com/9AQ9Cr55j4k07FS4gg"
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg inline-block no-underline"
              target="_blank"
            >
              Contribute now!
            </a>
            <p className=" text-sm italic">Pick your amount of support - one-time donation.</p>

          </div>
        </div>
      </div>

      <div>
        <p className="text-sm italic font-thin">Have a say in how funding is spent, what avenues of profit we research, get early access to research, weekly updates, monthly reports and more as one of our Investors.</p>
      </div>


      <div className="flex flex-col gap-2 border-[1px] border-purple-200 p-4">
        <h2 className="text-md font-medium prose">Needed Hardware and Software:</h2>
        <ul className="list-disc pl-6 prose">
          {neededItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between text-sm">
              <span>
                {item.name}: {formatCurrency(item.price)}{item.url && (<span> (<a target="_blank" href={item.url}>link</a>)</span>)}
              </span>
            </li>
          ))}

        </ul>
      </div>

      <div className="flex flex-col gap-2 border-[1px] border-purple-200 p-4">
        <h2 className="text-md font-medium prose">Donations this month so far:</h2>
        <ul className="list-disc pl-6 prose">
          {donors.map((donor, index) => (
            <li key={index} className="flex items-center justify-between text-sm">
              {format(new Date(donor.gaveOn), "MMM do")} - {donor.name} donated {formatCurrency(donor.amount)}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Funding;
