import React, { useState, useCallback, useEffect } from 'react';

import { AiFillThunderbolt } from "react-icons/ai";



export default function SaleTimer() {
    const [countDownTime, setCountDownTIme] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const getTimeDiffrence = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownTime - currentTime;
        const hours =
            Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
                10
                ? `${Math.floor(
                    (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`
                : `0${Math.floor(
                    (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`;
        const minutes =
            Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
                : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
        const seconds =
            Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
                ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
                : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
        if (timeDiffrence < 0) {
            setCountDownTIme({
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
            clearInterval();
        } else {
            setCountDownTIme({
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };
    const startCountDown = useCallback(() => {
        {
            const customDate = new Date();
            const countDownDate = new Date(
                customDate.getFullYear(),
                customDate.getMonth() + 1,
                customDate.getDate() + 6,
                customDate.getHours(),
                customDate.getMinutes(),
                customDate.getSeconds() + 1
            );
            setInterval(() => {
                getTimeDiffrence(countDownDate.getTime());
            }, 1000);
        }
    }, []);
    useEffect(() => {
        startCountDown();
    }, [startCountDown]);
    return (
        <>

            <div className="w-full  max-w-[1440px] mx-auto lg:flex justify-start mt-10">
                <div className="flex justify-center items-center mr-10 text-[30px]">
                    <AiFillThunderbolt className="bg-black rounded-full text-white p-1 mr-2" />
                    <h1 className="font-semibold">Flash Sale</h1>
                </div>
                <div className="flex justify-center flex-col gap-4">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex gap-1">
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.hours?.charAt(0)}
                            </span>
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.hours?.charAt(1)}
                            </span>
                        </div>
                        <span className="text-black text-[20px] sm:text-[30px]">:</span>
                        <div className="flex gap-1">
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.minutes?.charAt(0)}
                            </span>
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.minutes?.charAt(1)}
                            </span>
                        </div>
                        <span className="text-black text-[20px] sm:text-[30px]">:</span>
                        <div className="flex gap-1">
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.seconds?.charAt(0)}
                            </span>
                            <span className="bg-pink-500 font-semibold text-[#FBFAF8] text-[20px] sm:text-[20px]  px-3 py-1  rounded-full">
                                {countDownTime?.seconds?.charAt(1)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}