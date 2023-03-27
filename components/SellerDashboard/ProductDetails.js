import React from 'react';
import Popup from 'reactjs-popup';

function ProductDetails(props) {
  console.log(props.value.value.sizes);
  return (
    <Popup
      trigger={
        <button className="p-3 dark:bg-gradient-to-tr  mb-3 md:mb-0 dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl ">
          {' '}
          معلومات المنتج{' '}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <div className="fixed z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col justify-between shadow-2xl rounded-lg bg-gray-50 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 w-[250px] md:w-[650px] h-[500px] md:h-[400px] p-3 md:p-10">
            <div className="flex justify-between md:px-5 pt-10 w-full flex-col md:flex-row overflow-y-auto sliderScroll">
              <img
                src={props.value.value.img}
                className=" mx-auto w-40 h-52 rounded"
              />

              <div className=" flex flex-col justify-start items-end pl-5 text-end">
                <div className="font-bold text-lg"> السعر </div>
                <div className="flex justify-end">
                  {props.value.value.price}
                </div>
                <div className="font-bold text-lg">معلومات حول المنتج</div>
                <div className="flex justify-end">
                  {props.value.value.TypeOfProduct}
                </div>
                <div className="flex w-full justify-end font-bold text-lg">
                  القياسات والألوان
                </div>

                <div className="w-full h-24 flex overflow-y-auto sliderScroll justify-evenly flex-wrap space-x-1 space-y-1">
                  {Object.keys(props.value.value.sizes).map(function (
                    key,
                    index
                  ) {
                    return (
                      <div className="flex w-1/3 flex-col  " key={index}>
                        <div className="font-bold w-full">{key}</div>
                        <div className="flex h-14 flex-wrap justify-evenly overflow-y-auto sliderScroll space-x-1  space-y-2">
                          {props.value.value.sizes[key].map(function (
                            value,
                            index
                          ) {
                            return (
                              <div
                                key={index}
                                style={{
                                  backgroundColor: `${props.value.value.sizes[key][index]}`,
                                }}
                                className=" w-4 h-4 mx-1 rounded-full bg-black my-2"
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* sizes section */}
            {/* <div className="flex flex-col w-full ">
              <div className=" pb-3 text-lg font-bold w-full text-center">
                القياسات
              </div>
              <div className="flex w-full justify-evenly flex-wrap text-right">
                {props.value.value.sizes.map(function (value, index) {
                  return <div key={index}>{value} &nbsp; </div>;
                })}
              </div>
            </div> */}
            {/* colors section */}
            {/* <div className="flex flex-col w-full">
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
            </div> */}
            <div className="flex w-full justify-start px-5">
              <button
                className="px-4 py-3 mt-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl"
                onClick={() => close()}
              >
                إغلاق
              </button>
            </div>
          </div>
          <div className="z-0 relative w-screen h-screen bg-black opacity-50"></div>
        </>
      )}
    </Popup>
  );
}

export default ProductDetails;
