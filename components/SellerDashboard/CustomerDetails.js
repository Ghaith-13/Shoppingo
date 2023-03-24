import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function CustomerDetails(props) {
  const [change, setChange] = useState(true);
  return (
    <Popup
      trigger={
        <button
          className={`${
            props.value.page1 ? 'px-2' : 'px-6'
          } px-2 py-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl`}
        >
          {' '}
          {props.value.page1 && 'معلومات المستخدم'}
          {props.value.page2 && ' معلوماتي'}{' '}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col justify-between shadow-2xl rounded-lg bg-gray-50 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 w-[250px] md:w-[650px] h-[450px] md:h-[350px] p-3 md:p-10">
          <div className="flex flex-col w-full">
            {/* first row */}
            <div className="flex md:flex-row flex-col w-full justify-between md:px-5 md:pb-5">
              {/* email */}
              <div className="flex flex-col  text-right w-full md:w-1/2 pb-2">
                <div className="font-bold text-lg">الايميل</div>
                <input
                  disabled={change}
                  type="Text"
                  defaultValue={`${props.value.value.email}`}
                  className="rounded-md outline-none text-end pr-2 shadow-sm shadow-shadowColor"
                />
              </div>
              {/* full name */}
              <div className="flex flex-col text-right w-full md:w-1/2 pb-2 md:ml-3 ">
                <div className="font-bold text-lg">الاسم الثلاثي</div>
                <input
                  disabled={change}
                  type="Text"
                  defaultValue={`${props.value.value.fullName}`}
                  className="rounded-md outline-none text-end pr-2 shadow-sm shadow-shadowColor"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col w-full justify-between md:px-5 md:pb-5">
              {/* city */}
              <div className="flex flex-col  text-right w-full md:w-1/2  pb-2">
                <div className="font-bold text-lg">المدينة</div>
                <input
                  disabled={change}
                  type="Text"
                  defaultValue={`${props.value.value.city}`}
                  className="rounded-md outline-none text-end pr-2 shadow-sm shadow-shadowColor"
                />
              </div>
              {/* number */}
              <div className="flex flex-col  text-right w-full md:w-1/2 pb-2 md:ml-3">
                <div className="font-bold text-lg">رقم الموبايل</div>
                <input
                  disabled={change}
                  type="Text"
                  defaultValue={`${props.value.value.number}`}
                  className="rounded-md outline-none text-end pr-2 shadow-sm shadow-shadowColor"
                />
              </div>
            </div>
            {/* address */}
            <div className="flex flex-col  text-right w-full  md:px-5 pb-2">
              <div className="font-bold text-lg">العنوان</div>
              <input
                disabled={change}
                type="Text"
                defaultValue={`${props.value.value.Address}`}
                className="rounded-md outline-none text-end pr-2 shadow-sm shadow-shadowColor"
              />
            </div>
          </div>

          <div className="flex-col-reverse md:flex-row flex w-full justify-between px-5 md:pt-5 ">
            <button
              className="px-4 py-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl"
              onClick={() => close()}
            >
              إغلاق
            </button>
            {props.value.page2 && (
              <button
                onClick={() => {
                  setChange(!change);
                }}
                className="px-4 py-3  mb-3 md:mb-0  dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl"
              >
                {change ? 'تعديل' : 'تم'}
              </button>
            )}
          </div>
        </div>
      )}
    </Popup>
  );
}

export default CustomerDetails;
