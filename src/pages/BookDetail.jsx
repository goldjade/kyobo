import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import instance from "../api/axios";
import requests from "../api/request";
export const BookDetail = () => {
    const [detailList, setDetailList] = useState([]);
    const {
        state: { book },
    } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchDate = async () => {
        const params = {
            product: id,
        };
        const resultDetail = await instance.get(requests.fetchDetail, {
            params,
        });
        setDetailList(resultDetail.data.list);
    };
    useEffect(() => {
        fetchDate();
    }, []);
    const year = new Date(detailList.publishdate).getFullYear();
    const month = new Date(detailList.publishdate).getMonth();
    const day = new Date(detailList.publishdate).getDate();
    const fullDate = `${year}년 ${month}월 ${day}일`;
    const price = detailList.price
        ? detailList.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        : "";
    const salePrice = detailList.price
        ? (detailList.price * 0.9).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        : "";
    const introduce = detailList.introduce
        ? detailList.introduce.replaceAll("\n", "<br/><br/>")
        : null;
    return (
        <div className="w-full max-w-3xl mx-auto px-6 font-medium tracking-tighter mt-6 mb-10">
            <p className="text-xs flex text-gray">
                {detailList.maincategory} <SlArrowRight className="mx-1 pt-1" />
                {detailList.middlecategory}
                <SlArrowRight className="mx-1 pt-1" />
                {detailList.subcategory}
            </p>
            <div className="flex flex-col items-center">
                <div className="text-center mt-8">
                    <h2 className="text-3xl">{book.title}</h2>
                    <p className="text-subTitle text-base font-thin mt-4">
                        {book.sub || "No Subtitle"}
                    </p>
                </div>
                <div className="w-3/6 my-10">
                    <img
                        src={detailList.image}
                        alt={book.title}
                        className="w-full"
                        style={{ boxShadow: "0 20px 60px rgb(0 0 0 / 12%)" }}
                    ></img>
                </div>
                <div className="w-full">
                    <div className="flex justify-between text-sm">
                        <span>{book.writer} 저자(글)</span>
                        <span className="text-publisher line-through">{salePrice}원</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray text-xs">
                            {detailList.publisher} {fullDate}
                        </span>
                        <div className="text-3xl font-bold">
                            <span className="text-Salegreen mx-1">10%</span>
                            <span className="text-price"> {price}원</span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-summary rounded-2xl py-8 px-8 mt-8 mb-10 tracking-tighter">
                    <h1 className="text-2xl font-bold pb-5 border-b border-lightgray">책 소개</h1>
                    <p
                        dangerouslySetInnerHTML={{ __html: introduce }}
                        className="text-base font-normal pt-6 text-justify"
                    ></p>
                    <p></p>
                </div>
                <button
                    className="w-full bg-price text-white rounded-2xl h-16 text-xl"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    목록으로 돌아가기
                </button>
            </div>
        </div>
    );
};
export default BookDetail;
