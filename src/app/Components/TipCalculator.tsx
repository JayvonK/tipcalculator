'use client'

import { useState } from "react";
import { switchFalse, switchOff } from "../utils/setButtonClasses";
import billIcon from '../../../public/icon-dollar.svg';
import personIcon from '../../../public/icon-person.svg'
import ButtonComponent from "./ButtonComponent";

const TipCalculator = () => {
    const [bills, setBill] = useState<number>(0);
    const [peoples, setPeople] = useState<number>(0);
    const [personTip, setPersonTip] = useState<string>('0.00');
    const [totalPer, setTotalPer] = useState<string>('0.00');
    const [error, setError] = useState<string>('');
    const [focusOne, setFocusOne] = useState<string>('');
    const [focusTwo, setFocusTwo] = useState<string>('');
    const [errorBool, setErrorBool] = useState<boolean>(false);
    const [inputValOne, setInputValOne] = useState<string>('');
    const [inputValTwo, setInputValTwo] = useState<string>('');
    const [inputValThree, setInputValThree] = useState<string>('');
    const [handle5Class, setHandle5Class] = useState<string>(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    const [handle10Class, setHandle10Class] = useState<string>(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    const [handle15Class, setHandle15Class] = useState<string>(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    const [handle25Class, setHandle25Class] = useState<string>(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    const [handle50Class, setHandle50Class] = useState<string>(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    const [bool5, setBool5] = useState<boolean>(false);
    const [bool10, setBool10] = useState<boolean>(false);
    const [bool15, setBool15] = useState<boolean>(false);
    const [bool25, setBool25] = useState<boolean>(false);
    const [bool50, setBool50] = useState<boolean>(false);
    const [boolCustom, setBoolCustom] = useState<boolean>(false);
    const [handleCustomClass, setHandleCustomClass] = useState<string>('');
    const [custom, setCustom] = useState<number>(0);
    const [reset, setReset] = useState<boolean>(false);

    const handle5 = (bill: number, people: number) => {

        setBool5(true);

        switchFalse(setBool10, setBool15, setBool25, setBool50, setBoolCustom);

        setHandleCustomClass(' ');

        setHandle5Class(' bg-[#26c0ab] text-[#00494d] ')

        switchOff(setHandle10Class, setHandle15Class, setHandle25Class, setHandle50Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * 0.05;
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handle10 = (bill: number, people: number) => {

        setBool10(true);

        switchFalse(setBool5, setBool15, setBool25, setBool50, setBoolCustom);

        setHandleCustomClass(' ');

        setHandle10Class(' bg-[#26c0ab] text-[#00494d] ')

        switchOff(setHandle5Class, setHandle15Class, setHandle25Class, setHandle50Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * 0.10;
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handle15 = (bill: number, people: number) => {

        setBool15(true);

        switchFalse(setBool10, setBool5, setBool25, setBool50, setBoolCustom);

        setHandleCustomClass(' ');

        setHandle15Class(' bg-[#26c0ab] text-[#00494d] ')

        switchOff(setHandle10Class, setHandle5Class, setHandle25Class, setHandle50Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * 0.15;
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handle25 = (bill: number, people: number) => {

        setBool25(true);

        switchFalse(setBool10, setBool15, setBool5, setBool50, setBoolCustom);

        setHandleCustomClass(' ');

        setHandle25Class(' bg-[#26c0ab] text-[#00494d] ')

        switchOff(setHandle10Class, setHandle5Class, setHandle15Class, setHandle50Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * 0.25;
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handle50 = (bill: number, people: number) => {

        setBool50(true);

        switchFalse(setBool10, setBool15, setBool25, setBool5, setBoolCustom);

        setHandleCustomClass(' ');

        setHandle50Class(' bg-[#26c0ab] text-[#00494d] ')

        switchOff(setHandle10Class, setHandle5Class, setHandle25Class, setHandle15Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * 0.5;
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handleCustom = (bill: number, people: number, customVal: number) => {

        setBoolCustom(true);

        switchFalse(setBool10, setBool15, setBool25, setBool50, setBool5);

        setHandleCustomClass(' outline outline-2 outline-[#26c0ab] ');

        setHandle5Class(' bg-[#00494d] text-white ');

        switchOff(setHandle10Class, setHandle15Class, setHandle25Class, setHandle50Class);

        if (people !== undefined && people !== 0) {
            let tip = bill * (customVal * 0.01);
            let total = bill + tip;
            setPersonTip((tip / people).toFixed(2));
            setTotalPer((total / people).toFixed(2));
            setReset(true);
        } else if (people === undefined || people === 0) {
            setError("Can't be zero");
            setErrorBool(true);
            setFocusTwo('outline outline-2 outline-red-600')
        }
    }

    const handleFocusOne = () => {
        focusOne === '' ? setFocusOne('outline outline-2 outline-[#26c0ab]') : setFocusOne('');
    }

    const handleFocusTwo = () => {
        if (focusTwo === '' && !errorBool) {
            setFocusTwo('outline outline-2 outline-[#26c0ab]')
        } else if (focusTwo === 'outline outline-2 outline-[#26c0ab]' && !errorBool) {
            setFocusTwo('')
        }
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCustom(bills, peoples, custom)
        }
    }

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = Number(e.target.value);
        if (num || e.target.value === "") {
            setCustom(num);
            handleCustom(bills, peoples, num);
            setInputValThree(e.target.value);
        }
    }

    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = Number(e.target.value);
        const targetSplit = e.target.value.split('.')
        if ((num || e.target.value === '') && (targetSplit[1] === undefined || targetSplit[1].length < 3)) {
            setInputValOne(e.target.value);
            setBill(num)
            if (bool5) {
                handle5(num, peoples)
            } else if (bool10) {
                handle10(num, peoples)
            } else if (bool15) {
                handle15(num, peoples);
            } else if (bool25) {
                handle25(num, peoples);
            } else if (bool50) {
                handle50(num, peoples);
            } else if (boolCustom) {
                handleCustom(num, peoples, custom)
            }
        }
    }

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = Number(e.target.value);
        if ((num || e.target.value === '') && !e.target.value.includes('.')) {
            setPeople(num);
            setInputValTwo(e.target.value);
            if (bool5) {
                handle5(bills, num)
            } else if (bool10) {
                handle10(bills, num)
            } else if (bool15) {
                handle15(bills, num);
            } else if (bool25) {
                handle25(bills, num);
            } else if (bool50) {
                handle50(bills, num);
            } else if (boolCustom) {
                handleCustom(bills, num, custom)
            }

            if (errorBool && num > 0) {
                setError('');
                setErrorBool(false);
                setFocusTwo('outline outline-2 outline-[#26c0ab]')
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
        switchOff(setHandle10Class, setHandle15Class, setHandle25Class, setHandle50Class);
        setHandle5Class(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ')
        setBoolCustom(false);
        switchFalse(setBool10, setBool15, setBool25, setBool50, setBool5);
        setHandleCustomClass('');
        setError('');
        setErrorBool(false);
        setReset(false);
    }

    return (
        <div className="bgCyan xl::pt-36 xl:px-64 sm:px-24 sm:pt-20 px-0 pt-10 min-h-screen">

            <h1 className="text-center spaceMono tracking-[0.4rem] leading-9 text-2xl sm:mb-20 mb-8 grayerTxt">SPLI <br /> TTER</h1>

            <div className="bg-white sm:p-8 pt-[18px] pb-7 px-6 sm:rounded-3xl rounded-tr-3xl rounded-tl-3xl rounded-br-none rounded-bl-none">

                <div className="grid lg:grid-cols-2 lg:gap-3 gap-4">
                    <div className="sm:pl-3 sm:pr-8 pl-2 pr-2">

                        <h1 className="spaceMono mb-2 grayTxt mt-3">Bill</h1>

                        <button onFocus={handleFocusOne} onBlur={handleFocusOne} className={"w-full bgGray sm:mb-10 mb-8 sm:rounded-sm rounded-md flex justify-between items-center px-4 " + focusOne}>
                            <img src={billIcon.src} alt="" />
                            <input className="text-black text-2xl w-full bg-transparent spaceMono text-end min-h-11 grayerTxt pl-1" placeholder="0" type="text" onChange={handleBillChange} value={inputValOne} />
                        </button>

                        <h1 className="spaceMono mb-4 grayTxt">Select Tip %</h1>

                        <div className="grid sm:grid-rows-2 sm:grid-cols-3 grid-rows-3 grid-cols-2 gap-4 text-2xl spaceMono mb-10">

                            <div>
                                <ButtonComponent handleClass={handle5Class} handle={handle5} percent="5%" bills={bills} peoples={peoples} />
                            </div>

                            <div>
                                <ButtonComponent handleClass={handle10Class} handle={handle10} percent="10%" bills={bills} peoples={peoples} />
                            </div>

                            <div>
                                <ButtonComponent handleClass={handle15Class} handle={handle15} percent="15%" bills={bills} peoples={peoples} />
                            </div>

                            <div>
                                <ButtonComponent handleClass={handle25Class} handle={handle25} percent="25%" bills={bills} peoples={peoples} />
                            </div>

                            <div>
                                <ButtonComponent handleClass={handle50Class} handle={handle50} percent="50%" bills={bills} peoples={peoples} />
                            </div>

                            <div>
                                <input className={"w-full min-h-[50px] sm:rounded-sm rounded-md bgGray text-center grayerTxt placeholder-[#5e7a7d] focus:outline focus:outline-2 focus:outline-[#26c0ab] hover:cursor-pointer " + handleCustomClass} type="string" placeholder="Custom" onKeyDown={handleKeyDown} onChange={handleCustomChange} value={inputValThree} onClick={() => handleCustom(bills, peoples, custom)} />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <h1 className="grayTxt spaceMono mb-2">Number of People</h1>
                            <h1 className="text-red-600 spaceMono">{error}</h1>
                        </div>

                        <button onFocus={handleFocusTwo} onBlur={handleFocusTwo} className={"w-full bgGray mb-4 sm:rounded-sm rounded-md flex justify-between items-center px-4 " + focusTwo}>
                            <img src={personIcon.src} alt="" />
                            <input className="text-black text-2xl w-full bg-transparent spaceMono text-end min-h-11 grayerTxt" placeholder="0" type="text" onChange={handlePeopleChange} value={inputValTwo} />
                        </button>
                    </div>

                    <div className="rounded-2xl bg-[#00494d] sm:py-10 sm:px-10 py-6 px-6 flex content-between flex-wrap">
                        <div className="w-full">
                            <div className="flex justify-between mt-4 sm:mb-11 mb-7 w-full">

                                <p className="spaceMono text-white sm:pt-2 pt-0">
                                    Tip Amount <br />
                                    <span className="grayTxt2 text-sm">/ person</span>
                                </p>

                                <h1 className="2xl:max-w-96 sm:max-w-48 max-w-36 sm:text-5xl text-[32px] text-end spaceMono primaryTxt overflow-x-auto overflow-y-hidden scrollbar flex items-center pl-1">
                                    ${personTip}
                                </h1>
                            </div>

                            <div className="flex justify-between w-full">

                                <p className="spaceMono text-white ">
                                    Total<br />
                                    <span className="grayTxt2 text-sm">/ person</span>
                                </p>
                                <h1 className="2xl:max-w-96 sm:max-w-48 max-w-36 sm:text-5xl text-[32px] text-end spaceMono primaryTxt overflow-x-auto overflow-y-hidden scrollbar flex items-center pl-1">
                                    ${totalPer}
                                </h1>

                            </div>
                        </div>
                        {
                            reset ? (
                                <button className="w-full min-h-[50px] text-center spaceMono sm:text-lg text-[22px] rounded-[4px] grayerTxt lg:mt-0 mt-8 bgPrimary" onClick={resetFunc}>RESET</button>
                            ) : (
                                <button className="w-full min-h-[50px] text-center spaceMono sm:text-lg text-[22px] rounded-[4px] grayerTxt lg:mt-0 mt-8 bgPrimary opacity-30 text-opacity-5">RESET</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TipCalculator
