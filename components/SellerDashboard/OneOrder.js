import React from 'react';
import CustomerDetails from './CustomerDetails';
import ProductDetails from './ProductDetails';
import { AiFillCheckCircle } from 'react-icons/ai';
function OneOrder(props) {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse md:justify-between  w-3/4 border my-5  px-5 py-10 mx-auto shadow-md text-black   rounded-lg dark:border-0 dark:shadow-white dark:shadow-sm ">
        <div className="py-2 md:py-0 justify-between w-full md:w-auto flex flex-col md:flex-row ">
          {props.page2 && (
            <button className="p-3 mt-3 md:mt-0 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl">
              إلغاء الطلبية
            </button>
          )}
          <CustomerDetails value={props} />
          <ProductDetails value={props} />
        </div>

        <div className="flex flex-col  justify-start items-center py-2 md:py-0 border-b md:border-0 ">
          <div className="font-bold dark:text-white">التاريخ والوقت</div>
          <div className="dark:text-white  w-full flex px-5">
            {props.value.Date}
          </div>
        </div>
        <div className="flex flex-col justify-start items-center py-2 md:py-0 border-b md:border-0">
          <div className="font-bold dark:text-white">طريقة الشراء</div>
          <div className="dark:text-white">{props.value.TypeBuy}</div>
        </div>
        {props.page1 && (
          <div className=" flex flex-col justify-start items-center py-2 md:py-0 border-b md:border-0">
            <div className="font-bold dark:text-white">اسم الزبون</div>
            <div className="dark:text-white">{props.value.typeOfCustumer}</div>
          </div>
        )}
        <div className=" flex  flex-col justify-start items-center py-2 md:py-0 border-b md:border-0">
          <label className="font-bold dark:text-white" htmlFor="done">
            تمت معالجته
          </label>
          {props.page1 && (
            <input id="done" type={'checkbox'} className="mt-1 w-4 h-4" />
          )}
          {props.page2 && (
            <AiFillCheckCircle className="text-green-900 mt-1 " size={20} />
          )}
        </div>
      </div>
    </>
  );
}

export default OneOrder;
