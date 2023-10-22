import React from "react";

const donors = [
  { name: "Ryan Bent", amount: 3600 },
  { name: "Chris Loggins", amount: 2250 },
  { name: "Alex Tseitlin", amount: 1500 },
];

const goalAmount = 30000; // $30,000 MXN (set in JSON)
const currentAmount = donors.reduce((total, donor) => total + donor.amount, 0);

const neededItems = [
  { name: "Descript Monthly Subscription", price: 500 },
  { name: "Envato Elements Monthly Subscription", price: 325 },
  { name: "OpenAI API costs", price: 5000 },
];

const Funding = () => {
  const progress = (currentAmount / goalAmount) * 100;

  return (
    <div className="p-4 prose flex flex-col">
      <h1 className="text-4xl font-bold mb-8 prose">Research Funding</h1>

      <div className="border-[1px] rounded bg-purple-50 p-4 prose">
        <div className="text-gray-600 font-medium">
          Goal: ${goalAmount} MXN
        </div>

        <div className="relative pt-1">
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
        </div>


        <div className=" prose">
          <div className="">
            <a
              href="https://buy.stripe.com/9AQ9Cr55j4k07FS4gg"
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg inline-block"
              target="_blank"
            >
              Contribute now!
            </a>
            <p className=" text-sm italic">Pick your amount of support - one-time donation.</p>

          </div>
        </div>
      </div>

      <div>
        <p className="text-md">Contributions equals ownership! Earn a private token equal to the amount you contribute, and leverage that ownership in proposing and voting.</p>
        <p className="text-sm italic">Have a say in how funding is spent, what avenues of profit we research, get early access to research, weekly updates, monthly reports and more as one of our Investors.</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold prose">Needed Hardware and Software:</h2>
        <ul className="list-disc pl-6 prose">
          {neededItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>
                {item.name}: ${item.price} MXN
              </span>
              <a
                href={`https://buy.stripe.com/9AQ9Cr55j4k07FS4gg`}
                className="text-purple-500 border-purple-500 border-[1px] px-3 py-[1px] rounded-md inline-block ml-auto"
              >
                Contribute
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold prose">Donations this month so far:</h2>
        <ul className="list-disc pl-6 prose">
          {donors.map((donor, index) => (
            <li key={index} className="flex items-center justify-between">
              {donor.name} donated ${donor.amount} MXN
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Funding;
