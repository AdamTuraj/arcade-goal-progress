"use client";

import { useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const goalRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);

  const [result, setResultData] = useState<{
    percent: number;
    timePercentage: number;
    hours: number;
    hoursToGetBackOnTrack: number;
  } | null>(null);

  const onCalculate = () => {
    if (!goalRef.current || !hoursRef.current) {
      toast.error("Internal Error (Ref's broken)");
    }

    if (!goalRef.current?.value) {
      toast.error("Please enter a goal");
      return;
    }

    if (!hoursRef.current?.value) {
      toast.error("Please enter your slack ID");
      return;
    }

    const goal = parseInt(goalRef.current?.value || "0", 10);
    const hours = parseInt(hoursRef.current?.value || "0", 10);

    if (goal < 0) {
      toast.error("Goal must be a positive number");
      return;
    }

    if (goal === 0) {
      toast.error("Goal cannot be zero");
      return;
    }

    if (hours < 0) {
      toast.error("Hours must be a positive number");
      return;
    }

    const percent = (hours / goal) * 100;

    const startDate = new Date("2024-06-17");
    const endDate = new Date("2024-08-31");

    const today = new Date();

    const eventTime = endDate.getTime() - startDate.getTime();
    const currentTime = today.getTime() - startDate.getTime();

    const timePercentage = (currentTime / eventTime) * 100;

    // Set hoursToGetBackOnTrack to the hours you would have to work every day starting today to still reach your goal by the end of the event
    const hoursToGetBackOnTrack =
      (endDate.getTime() - today.getTime()) /
      1000 /
      60 /
      60 /
      24 /
      (goal - hours);
  };

  return (
    <>
      <div className="pt-8 flex flex-col gap-5">
        <div>
          <label className="block text-center text-xl" htmlFor="goal">
            Enter your goal (# of tickets){" "}
          </label>
          <input
            type="number"
            className="block mx-auto mt-4 p-2 border-2 border-black rounded-xl"
            id="goal"
            ref={goalRef}
          />
        </div>
        <div>
          <label className="block text-center text-xl" htmlFor="slack">
            Enter the amount of hours you have currently done
          </label>
          <input
            className="block mx-auto mt-4 p-2 border-2 border-black rounded-xl"
            id="slack"
            ref={hoursRef}
          />
        </div>
        <button
          className="block mx-auto px-5 py-2 text-xl hover:bg-blue-400 bg-blue-500 text-white rounded-xl"
          onClick={onCalculate}
        >
          Calculate
        </button>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Form;