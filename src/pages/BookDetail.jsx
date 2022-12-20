import React from "react";
import { SlArrowRight } from "react-icons/sl";
export const BookDetail = () => {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 font-medium tracking-tighter">
            <p className="text-xs flex text-gray">
                국내도서 <SlArrowRight className="mx-1 pt-1" />
                컴퓨터/IT
            </p>
            <div className="flex flex-col items-center">
                <div className="text-center mt-8">
                    <h2 className="text-3xl">모던 자바스크립트 Deep Dive</h2>
                    <p className="text-subTitle text-base font-thin mt-4">
                        자바스크립트의 기본 개념과 동작 원리
                    </p>
                </div>
                <div className="w-3/6 my-10">
                    <img
                        src="/image/book_1.jpg"
                        alt="책"
                        className="w-full"
                        style={{ boxShadow: "0 20px 60px rgb(0 0 0 / 12%)" }}
                    ></img>
                </div>
                <div>
                    <div className="flex justify-between text-sm">
                        <span>이웅모 저자(글)</span>
                        <span className="text-publisher line-through">
                            36,450원
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray text-xs">
                            위키북스 2020년 09월 25일
                        </span>
                        <div className="text-3xl font-bold">
                            <span className="text-Salegreen mx-1">10%</span>
                            <span className="text-price"> 40,500 원</span>
                        </div>
                    </div>
                    <div className="w-full bg-summary rounded-2xl py-8 px-8 my-10 tracking-tighter">
                        <h1 className="text-2xl font-bold pb-5 border-b border-lightgray">
                            책 소개
                        </h1>
                        <p className="text-lg font-normal pt-5 text-justify">
                            269개의 그림과 원리를 파헤치는 설명으로
                            ‘자바스크립트의 기본 개념과 동작 원리’를
                            이해하자!웹페이지의 단순한 보조 기능을 처리하기 위한
                            제한적인 용도로 태어난 자바스크립트는 과도하다고
                            느껴질 만큼 친절한 프로그래밍 언어입니다. 이러한
                            자바스크립트의 특징은 편리한 경우도 있지만 내부
                            동작을 이해하기 어렵게 만들기도 합니다.
                            <br />
                            <br /> 하지만 자바스크립트는 더 이상 제한적인 용도의
                            프로그래밍 언어가 아닙니다. 오랜 변화를 거쳐 이제
                            자바스크립트는 프런트엔드와 백엔드 영역의 프로그래밍
                            언어로 사용할 수 있는 명실상부한 범용 애플리케이션
                            개발 언어로 성장했습니다. 따라서 자바스크립트를
                            학습하는 방식도 이에 걸맞게 변화해야 하며, 이 책은
                            자바스크립트의 기본 개념과 동작 원리를 깊이 있게
                            학습하고자 하는 독자를 위해 기획되었습니다.
                            <br />
                            <br /> 《모던 자바스크립트 Deep Dive》에서는
                            자바스크립트를 둘러싼 기본 개념을 정확하고
                            구체적으로 설명하고, 자바스크립트 코드의 동작 원리를
                            집요하게 파헤칩니다. 따라서 여러분이 작성한 코드가
                            컴퓨터 내부에서 어떻게 동작할 것인지 예측하고,
                            명확히 설명할 수 있도록 돕습니다. 또한 최신
                            자바스크립트 명세를 반영해 안정적이고 효율적인
                            코드를 작성할 수 있는 기본기를 다지고, 실전에서
                            쓰이는 모던 자바스크립트 프레임워크나 도구를
                            완벽하게 이해하고 활용할 수 있게 도와줍니다.
                        </p>
                    </div>
                </div>
                <button className="w-full bg-price text-white rounded-2xl h-16 text-xl">
                    목록으로 돌아가기
                </button>
            </div>
        </div>
    );
};
export default BookDetail;
