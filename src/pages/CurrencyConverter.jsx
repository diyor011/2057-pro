import { useEffect, useState } from "react";

export default function MoneyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UZS");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then(res => res.json())
      .then(data => setRates(data.rates));
  }, [from]);

  const convert = () => {
    if (!rates[to]) return;
    setResult((amount * rates[to]).toFixed(2));
  };

  return (
    <div className="flex h-fullr w-full items-center justify-center bg-slate-900">
      <div className="w-80 bg-slate-800 p-6 rounded-2xl shadow-lg text-white">
        
        <h2 className="text-xl font-bold text-center mb-4">
          Money Converter koroche
        </h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-slate-700 outline-none"
          placeholder="Amount"
        />

        <div className="flex gap-2 mb-4">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 rounded bg-slate-700"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>UZS</option>
            <option>RUB</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 rounded bg-slate-700"
          >
            <option>UZS</option>
            <option>USD</option>
            <option>EUR</option>
            <option>RUB</option>
          </select>
        </div>

        <button
          onClick={convert}
          className="w-full bg-primary hover:bg-primary-focus p-2 rounded font-semibold"
        >
          Convert
        </button>

        {result && (
          <p className="text-center mt-4 text-lg font-bold text-success">
            {result} {to}
          </p>
        )}
      </div>
    </div>
  );
}
