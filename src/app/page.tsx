'use client'

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [personTip, setPersonTip] = useState<string>('0.00');
  const [totalPer, setTotalPer] = useState<string>('0.00');
  const [error, setError] = useState<string>('');


  const handle5 = () => {
    console.log(bill);
    if (bill !== undefined && people !== undefined && people !== 0) {
      let tip = bill * 0.05;
      let total = bill + tip;
      setPersonTip(tip.toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
    }

  }

  const handle10 = () => {
    console.log(bill);
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.10;
      let total = bill + tip;
      setPersonTip(tip.toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
    }
  }

  const handle15 = () => {
    console.log(bill);
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.15;
      let total = bill + tip;
      setPersonTip(tip.toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
    }
  }

  const handle25 = () => {
    console.log(bill);
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.25;
      let total = bill + tip;
      setPersonTip(tip.toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
    }
  }

  const handle50 = () => {
    console.log(bill);
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.5;
      let total = bill + tip;
      setPersonTip(tip.toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
    }
  }

  const handleCustom = () => {

  }

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value))
  }

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
  }


  return (
    <div className="bgCyan pt-36 px-64 min-h-screen">

      <h1 className="text-center spaceMono tracking-[0.4rem] leading-9 text-2xl mb-20">SPLI <br /> TTER</h1>

      <div className="bg-white p-8 rounded-3xl">

        <div className="grid grid-cols-2 gap-4">
          <div className="pl-4 pr-7">

            <h1 className="spaceMono mb-2 grayTxt mt-3">Bill</h1>
            <input className="text-black w-full text-2xl spaceMono text-end min-h-12 bgGray mb-6 px-4 rounded-lg" placeholder="0" type="number" onChange={handleBillChange} />

            <h1 className="spaceMono mb-4 grayTxt">Select Tip %</h1>

            <div className="grid grid-rows-2 grid-cols-3 gap-4 text-2xl spaceMono mb-10">
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md" onClick={handle5}>5%</button>
              </div>
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md" onClick={handle10}>10%</button>
              </div>
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md" onClick={handle15}>15%</button>
              </div>
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md" onClick={handle25}>25%</button>
              </div>
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md" onClick={handle50}>50%</button>
              </div>
              <div>
                <button className="min-h-12 bgDark flex items-center pb-1 justify-center w-full text-white rounded-md">Custom</button>
              </div>
            </div>
            <div>

            </div>

            <div className="flex justify-between">
              <h1 className="grayTxt spaceMono mb-2">Number of People</h1>
              <h1 className="text-red-600 spaceMono">{error}</h1>
            </div>

            <input className="text-black min-h-12 bgGray text-2xl spaceMono text-end w-full mb-4 px-4 rounded-lg" placeholder="0" type="number" onChange={handlePeopleChange} />
          </div>

          <div className="rounded-xl bgDark p-10">
            <div className="flex justify-between">
              <p className="spaceMono text-white">
                Tip Amount <br />
                <span className="grayTxt">/ person</span>
              </p>
              <h1 className="text-5xl text-end spaceMono">
                ${personTip}
              </h1>
            </div>
            <h1>Tip Amount: {personTip}</h1>
            <h1>Total: {totalPer}</h1>
          </div>
        </div>


      </div>
    </div>
  );
}
