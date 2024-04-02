'use client'

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [personTip, setPersonTip] = useState<string>('0.00');
  const [totalPer, setTotalPer] = useState<string>('0.00');
  const [error, setError] = useState<string>('');
  const [focusOne, setFocusOne] = useState<string>('');
  const [focusTwo, setFocusTwo] = useState<string>('');
  const [focusThree, setFocusThree] = useState<string>('');
  const [errorBool, setErrorBool] = useState<boolean>(false);
  const [inputValOne, setInputValOne] = useState<string>('');
  const [inputValTwo, setInputValTwo] = useState<string>('');
  const [inputValThree, setInputValThree] = useState<string>('');
  const [custom, setCustom] = useState<number>(0);

  const handle5 = () => {
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.05;
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handle10 = () => {
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.10;
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handle15 = () => {
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.15;
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handle25 = () => {
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.25;
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handle50 = () => {
    if (people !== undefined && people !== 0) {
      let tip = bill * 0.5;
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handleCustom = (customVal: number) => {
    if (people !== undefined && people !== 0) {
      let tip = bill * (customVal * 0.01);
      let total = bill + tip;
      setPersonTip((tip / people).toFixed(2));
      setTotalPer((total / people).toFixed(2));
    } else if (people === undefined || people === 0) {
      setError("Can't be zero");
      setErrorBool(true);
      setFocusTwo('outline outline-red-600')
    }
  }

  const handleFocusOne = () => {
    focusOne === '' ? setFocusOne('outline outline-[#26c0ab]') : setFocusOne('');
  }

  const handleFocusTwo = () => {
    if (focusTwo === '' && !errorBool) {
      setFocusTwo('outline outline-[#26c0ab]')
    } else if (focusTwo === 'outline outline-[#26c0ab]' && !errorBool) {
      setFocusTwo('')
    }
  }

  const handleFocusThree = () => {
    focusThree === '' ? setFocusThree('outline outline-[#26c0ab]') : setFocusThree('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCustom(custom)
    }
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(e.target.value);
    if (num || e.target.value === "") {
      setCustom(num);
      handleCustom(num);
      setInputValThree(e.target.value);
    }
  }

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(e.target.value);
    if (num || e.target.value === '') {
      setInputValOne(e.target.value);
      setBill(num)
    }
  }

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(e.target.value);
    if (num || e.target.value === '') {
      setPeople(num);
      setInputValTwo(e.target.value);
      if (errorBool && num > 0) {
        setError('');
        setErrorBool(false);
        setFocusTwo('outline outline-[#26c0ab]')
      }
    }

  }

  const resetFunc = () => {
    setPeople(0);
    setBill(0);
    setCustom(0);
    setInputValOne('');
    setInputValTwo('');
    setInputValThree('');
    setPersonTip('0.00');
    setTotalPer('0.00');
  }

  return (
    <div className="bgCyan sm:pt-36 sm:px-64 px-0 pt-10 min-h-screen">

      <h1 className="text-center spaceMono tracking-[0.4rem] leading-9 text-[26px] sm:mb-20 mb-8 grayTxt">SPLI <br /> TTER</h1>

      <div className="bg-white p-6 sm:rounded-3xl rounded-r-3xl rounded-l-3xl">

        <div className="grid sm:grid-cols-2 sm:gap-3 gap-4">
          <div className="pl-2 pr-2">

            <h1 className="spaceMono mb-2 grayTxt mt-3">Bill</h1>

            <button onFocus={handleFocusOne} onBlur={handleFocusOne} className={"w-full bgGray mb-10 rounded-md " + focusOne}>
              <input className="text-black text-2xl w-full bg-transparent spaceMono text-end min-h-12 px-4 grayerTxt" placeholder="0" type="text" onChange={handleBillChange} value={inputValOne} />
            </button>

            <h1 className="spaceMono mb-4 grayTxt">Select Tip %</h1>

            <div className="grid sm:grid-rows-2 sm:grid-cols-3 grid-rows-3 grid-cols-2 gap-4 text-2xl spaceMono mb-10">

              <div>
                <button className="min-h-[52px] bgDark flex items-center pb-1 justify-center w-full text-white rounded-md focus:bg-[#26c0ab] focus:text-[#00494d]" onClick={handle5}>5%</button>
              </div>

              <div>
                <button className="min-h-[52px] bgDark flex items-center pb-1 justify-center w-full text-white rounded-md focus:bg-[#26c0ab] focus:text-[#00494d]" onClick={handle10}>10%</button>
              </div>

              <div>
                <button className="min-h-[52px] bgDark flex items-center pb-1 justify-center w-full text-white rounded-md focus:bg-[#26c0ab] focus:text-[#00494d]" onClick={handle15}>15%</button>
              </div>

              <div>
                <button className="min-h-[52px] bgDark flex items-center pb-1 justify-center w-full text-white rounded-md focus:bg-[#26c0ab] focus:text-[#00494d]" onClick={handle25}>25%</button>
              </div>

              <div>
                <button className="min-h-[52px] bgDark flex items-center pb-1 justify-center w-full text-white rounded-md focus:bg-[#26c0ab] focus:text-[#00494d]" onClick={handle50}>50%</button>
              </div>

              <div>
                <input className="w-full min-h-[52px] rounded-md bgGray text-center grayerTxt placeholder-[#5e7a7d] focus:outline focus:outline-[#26c0ab]" type="string" placeholder="Custom" onKeyDown={handleKeyDown} onChange={handleCustomChange} value={inputValThree} />
              </div>
            </div>

            <div className="flex justify-between">
              <h1 className="grayTxt spaceMono mb-2">Number of People</h1>
              <h1 className="text-red-600 spaceMono">{error}</h1>
            </div>

            <button onFocus={handleFocusTwo} onBlur={handleFocusTwo} className={"w-full bgGray mb-4 rounded-md " + focusTwo}>
              <input className="text-black text-2xl w-full bg-transparent spaceMono text-end min-h-[52px] px-4 grayerTxt" placeholder="0" type="text" onChange={handlePeopleChange} value={inputValTwo} />
            </button>
          </div>

          <div className="rounded-xl bgDark py-6 px-6 flex content-between flex-wrap">
            <div className="w-full">
              <div className="flex justify-between mt-4 mb-11 w-full">

                <p className="spaceMono text-white">
                  Tip Amount <br />
                  <span className="grayTxt text-sm">/ person</span>
                </p>

                <h1 className="2xl:max-w-96 sm:max-w-48 max-w-36 sm:text-5xl text-[32px] text-end spaceMono primaryTxt overflow-x-auto overflow-y-hidden scrollbar flex items-center">
                  ${personTip}
                </h1>
              </div>

              <div className="flex justify-between w-full">

                <p className="spaceMono text-white">
                  Total<br />
                  <span className="grayTxt text-sm">/ person</span>
                </p>
                <h1 className="2xl:max-w-96 sm:max-w-48 max-w-36 sm:text-5xl text-[32px] text-end spaceMono primaryTxt overflow-x-auto overflow-y-hidden scrollbar flex items-center">
                  ${totalPer}
                </h1>

              </div>
            </div>

            <button className="bgPrimary w-full min-h-[52px] text-center spaceMono sm:text-lg text-[22px] rounded-[4px] grayerTxt sm:mt-0 mt-8" onClick={resetFunc}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}
