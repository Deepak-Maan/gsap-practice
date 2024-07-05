"use client";
import React, { useEffect, useRef } from 'react';
import { BottomCardsData, TopCardsData } from './common/Helper';
import Image from 'next/image';
import gsap from 'gsap';
import topDottedLine from "../public/assets/images/svg/topDottoedLine.svg";
import bottomDottedLine from "../public/assets/images/svg/bottomDottoedLine.svg";

const Work = () => {
    const topCardsRef = useRef([]);
    const bottomCardsRef = useRef([]);
    const circlesRef = useRef([]);
    const dottedLinesRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(topCardsRef.current, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
        });
        gsap.fromTo(bottomCardsRef.current, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
        });

        gsap.fromTo(circlesRef.current, {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "bounce.out",
        });
        gsap.fromTo(dottedLinesRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className='bg-[#0A0F1F] pt-12 sm:py-14 md:py-16 lg:py-24 xl:py-[130px]'>
            <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold pb-16'>Our Work Process</h2>
            <div className='container relative mx-auto px-3 xl:max-w-[1194px]'>
                <div className="grid md:grid-cols-3 gap-6 max-w-[996px] mr-auto ">
                    {TopCardsData.map((data, index) => (
                        <div
                            key={index}
                            ref={el => topCardsRef.current[index] = el}
                            className='md:max-w-[300px] max-w-[255px] min-[520px]:max-w-[400px] sm:max-w-[500px] ml-auto w-full md:mr-auto rounded-xl p-6 bg-[#101629]'
                        >
                            <Image src={data.Icon} alt="icon" />
                            <p className='text-white text-base sm:text-xl pt-6 leading-[130%]'>{data.para}</p>
                        </div>
                    ))}
                </div>
                <div className="pl-3 absolute h-full flex flex-col top-0 md:flex-row justify-between md:relative max-w-[936px]">
                    <div className='border-t border-[#313543] hidden md:flex w-full absolute left-3 top-1/2 max-w-[920px]'></div>
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <div key={index} className='max-w-[54px] relative py-[52px]'>
                            <Image
                                className={`mx-auto ${index % 2 === 0 ? 'rotate-90 md:rotate-0' : '-rotate-90 md:rotate-0'} absolute ${index % 2 === 0 ? 'md:top-0 top-1/2' : 'md:bottom-0 bottom-1/2'} ${index % 2 === 0 ? '-translate-y-1/2 md:translate-y-0' : 'translate-y-1/2 md:translate-y-0'} max-md:-right-2 md:left-1/2 -translate-x-1/2`}
                                src={index % 2 === 0 ? topDottedLine : bottomDottedLine}
                                height={52}
                                alt='dottedline'
                                ref={el => dottedLinesRef.current[index] = el}
                            />
                            <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]' ref={el => circlesRef.current[index] = el}>
                                <p className="text-2xl leading-[130%] text-white font-semibold">{num}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 mt-6 md:mt-0 gap-6 max-w-[996px] ml-auto ">
                    {BottomCardsData.map((data, index) => (
                        <div
                            key={index}
                            ref={el => bottomCardsRef.current[index] = el}
                            className='md:max-w-[300px] max-w-[255px] min-[520px]:max-w-[400px] ml-auto sm:max-w-[500px] w-full md:mr-auto rounded-xl p-6 bg-[#101629]'
                        >
                            <Image src={data.Icon} alt="icon" />
                            <p className='text-white text-base sm:text-xl pt-6 leading-[130%]'>{data.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
