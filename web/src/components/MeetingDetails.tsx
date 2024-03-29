import React from "react";
import { useState } from "react";

function MeetingDetails() {
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [showEditTooltip, setShowEditTooltip] = useState(false);
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);

  return (
    <div className="bg-second p-6">
      <header className="group bg-second flex w-full max-w-full items-center justify-between overflow-hidden py-4 ">
        <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
          <h3 className="font-heading max-w-28 sm:max-w-72 md:max-w-80 text-mainText inline truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl">
            15 Min Meeting
          </h3>
        </div>
        <div className="mt-4 hidden sm:mt-0 sm:flex">
          <div className="flex justify-between space-x-2 rtl:space-x-reverse">
            <button
              data-state="closed"
              type="button"
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
              onMouseEnter={() => setShowCopyTooltip(true)}
              onMouseLeave={() => setShowCopyTooltip(false)}
            >
              {showCopyTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Copy
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <button
              type="button"
              data-testid="event-type-edit-705355"
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default "
              onMouseEnter={() => setShowEditTooltip(true)}
              onMouseLeave={() => setShowEditTooltip(false)}
            >
              {showEditTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Edit
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </button>
            <button
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition flex justify-center text-mainText border border-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
              onMouseEnter={() => setShowDeleteTooltip(true)}
              onMouseLeave={() => setShowDeleteTooltip(false)}
            >
              {showDeleteTooltip && (
                <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 text-white text-[12px] px-2 py-1 ">
                  Delete
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="border-subtle space-y-6 rounded-lg border p-6 mt-6">
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            placeholder=""
            className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent placeholder:text-muted text-mainText font-heading focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed"
            name="title"
            value="15 Min Meeting"
          />
        </div>
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="duration"
          >
            Duration
          </label>
          <div
            dir="ltr"
            className="focus-within:ring-brand-default group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2"
          >
            <input
              data-testid="duration"
              id=":r2g:"
              type="number"
              placeholder=""
              className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent text-mainText font-heading placeholder:text-muted text-emphasis focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed rounded-r-none border-r-0 !my-0 !ring-0"
              name="length"
              min="1"
              value="15"
            />
            <div className="addon-wrapper border-default [input:hover_+_&amp;]:border-emphasis [input:hover_+_&amp;]:border-l-default [&amp;:has(+_input:hover)]:border-emphasis [&amp;:has(+_input:hover)]:border-r-default h-9 border px-3 bg-input bg-opacity-40 ltr:rounded-r-md rtl:rounded-l-md">
              <div className="min-h-9 flex flex-col justify-center text-sm leading-7 text-default">
                <span className="flex whitespace-nowrap text-mainText font-heading">
                  Minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="info"
          >
            Information
          </label>
          <input
            id="title"
            placeholder=""
            className="hover:border-emphasis dark:focus:border-emphasis border-default bg-transparent placeholder:text-muted text-mainText font-heading focus:ring-brand-default focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 w-full disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed"
            name="info"
            value="15 Min Meeting"
          />
        </div>
        <div className="">
          <label
            className="text-mainText font-heading mb-2 block text-sm font-medium leading-none"
            htmlFor="info"
          >
            Availability
          </label>
          <div className="border-subtle space-y-4 border rounded-2xl p-6">
            <ol className="table border-collapse text-sm">
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading">
                  Monday
                </span>
                <div className="space-y-3 text-right">
                  <div className="text-default flex items-center leading-4">
                    <span className="w-16 sm:w-28 sm:text-left text-mainText font-heading">
                      9:00 AM
                    </span>
                    <span className="ms-4 text-mainText font-heading">-</span>
                    <div className="ml-6 sm:w-28 text-mainText font-heading">
                      5:00 PM
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading">
                  Tuesday
                </span>
                <div className="space-y-3 text-right">
                  <div className="text-mainText font-heading flex items-center leading-4">
                    <span className="w-16 sm:w-28 sm:text-left">9:00 AM</span>
                    <span className="ms-4">-</span>
                    <div className="ml-6 sm:w-28">5:00 PM</div>
                  </div>
                </div>
              </li>
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading line-through">
                  Wednesday
                </span>
                <span className="text-subtle ml-6 sm:ml-0 text-mainText font-heading">
                  Unavailable
                </span>
              </li>
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading line-through">
                  Thursday
                </span>
                <span className="text-subtle ml-6 sm:ml-0 text-mainText font-heading">
                  Unavailable
                </span>
              </li>
              <li className="my-6 flex border-transparent last:mb-2 text-mainText font-heading">
                <span className="w-20 font-medium sm:w-32 text-default">
                  Friday
                </span>
                <div className="space-y-3 text-right">
                  <div className="text-default flex items-center leading-4">
                    <span className="w-16 sm:w-28 sm:text-left">9:00 AM</span>
                    <span className="ms-4">-</span>
                    <div className="ml-6 sm:w-28">5:00 PM</div>
                  </div>
                </div>
              </li>
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading line-through">
                  Saturday
                </span>
                <span className="text-subtle ml-6 sm:ml-0 text-mainText font-heading">
                  Unavailable
                </span>
              </li>
              <li className="my-6 flex border-transparent last:mb-2">
                <span className="w-20 font-medium sm:w-32 text-mainText font-heading line-through">
                  Sunday
                </span>
                <span className="text-subtle ml-6 text-mainText font-heading sm:ml-0">
                  Unavailable
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingDetails;
