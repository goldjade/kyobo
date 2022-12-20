import React from "react";
const BookCard = () => {
    return (
        <li className="flex justify-start border-b py-11 px-11 ">
            <div>
                <img className=" w-36 h-44" src="" />
            </div>
            <div className="ml-7 w-full">
                <div>
                    <p className="font-bold text-2xl mb-1">
                        모던 자바스크립트 Deep Dive
                    </p>
                    <p className="text-subTitle text-lg mb-3">
                        자바스크립트의 기본 개념과 동작 원리
                    </p>
                    <span>이웅모</span>
                    <span className="text-publisher ml-3">위키북스</span>
                </div>
                <div className="text-end">
                    <span className="text-originalprice line-through text-2xl">
                        <em className="not-italic">50000 </em>원
                    </span>
                    <p>
                        <span className="text-Salegreen font-bold text-3xl ">
                            <em className="not-italic">10</em>%
                        </span>
                        <span className="text-input text-3xl pl-5 font-bold ">
                            <em className="not-italic text-4xl ">45000</em>원
                        </span>
                    </p>
                </div>
            </div>
        </li>
    );
};
export default BookCard;
