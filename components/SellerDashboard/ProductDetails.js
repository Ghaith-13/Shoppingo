import React from 'react';
import Popup from 'reactjs-popup';

function ProductDetails(props) {
  return (
    <Popup
      trigger={
        <button className="px-2 py-3 dark:bg-gradient-to-tr md:mr-10 mb-3 md:mb-0 dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl ">
          {' '}
          معلومات المنتج{' '}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col justify-between shadow-2xl rounded-lg bg-gray-50 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 w-[250px] md:w-[650px] h-[450px] md:h-[600px] p-3 md:p-10">
          <div className="flex justify-between md:px-5 pt-10 w-full">
            <img
              src={props.value.value.img}
              className=" w-20 h-36 md:w-40 md:h-52 rounded"
            />

            <div className=" flex flex-col justify-start items-end pl-5 text-end">
              <div className="font-bold text-lg">معلومات حول المنتج</div>
              <div className="flex justify-end">
                {props.value.value.TypeOfProduct}
              </div>
            </div>
          </div>
          {/* sizes section */}
          <div className="flex flex-col w-full ">
            <div className=" pb-3 text-lg font-bold w-full text-center">
              القياسات
            </div>
            <div className="flex w-full justify-evenly flex-wrap text-right">
              {props.value.value.sizes.map(function (value, index) {
                return <div key={index}>{value} &nbsp; </div>;
              })}
            </div>
          </div>
          {/* colors section */}
          <div className="flex flex-col w-full">
            <div className="  text-lg font-bold w-full  text-center pb-3">
              الألوان
            </div>
            <div className="flex w-full justify-evenly flex-wrap text-right scroll">
              {props.value.value.colors.map(function (value, index) {
                return value == null ? (
                  'loading ...'
                ) : (
                  <div
                    key={index}
                    style={{ backgroundColor: `${value}` }}
                    className={` h-5 w-5 rounded-full`}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-start px-5">
            <button
              className="px-4 py-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl"
              onClick={() => close()}
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ProductDetails;
