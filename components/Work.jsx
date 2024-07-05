import React from 'react'
import { BottomCardsData, TopCardsData } from './common/Helper';
import Image from 'next/image';
import topDottedLine from "../public/assets/images/svg/topDottoedLine.svg"
import bottomDottedLine from "../public/assets/images/svg/bottomDottoedLine.svg"
    ;
const Work = () => {
    return (
        <div className='bg-[#0A0F1F] py-[130px]'>
            <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold pb-16'>Our Work Process</h2>
            <div className='container relative mx-auto px-3 xl:max-w-[1194px]'>
                <div className="grid md:grid-cols-3 gap-6 max-w-[996px] mr-auto ">
                    {TopCardsData.map((data, index) => {
                        return (
                            <div key={index} className='md:max-w-[300px] max-w-[255px] min-[520px]:max-w-[400px] sm:max-w-[500px] ml-auto w-full md:mr-auto rounded-xl p-6 bg-[#101629]'>
                                <Image src={data.Icon} alt="icon" />
                                <p className='text-white text-base sm:text-xl pt-6 leading-[130%]'>{data.para}</p>
                            </div>
                        );
                    })}
                </div>
                <div className=" pl-3 absolute h-full  flex flex-col top-0 md:flex-row justify-between md:relative max-w-[936px]">
                    <div className='border-t border-[#313543] w-full absolute left-3 top-1/2 max-w-[920px]'></div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto rotate-90 md:rotate-0 absolute md:top-0 top-1/2 -translate-y-1/2 md:translate-y-0 max-md:-right-2 md:left-1/2 -translate-x-1/2' src={topDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">1</p>
                        </div>
                    </div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto -rotate-90 md:rotate-0 absolute md:bottom-0 bottom-1/2 translate-y-1/2 md:translate-y-0  max-md:-right-2 md:left-1/2 -translate-x-1/2' src={bottomDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">2</p>
                        </div>
                    </div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto rotate-90 md:rotate-0 absolute md:top-0 top-1/2 -translate-y-1/2 md:translate-y-0  max-md:-right-2 md:left-1/2 -translate-x-1/2' src={topDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">3</p>
                        </div>
                    </div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto -rotate-90 md:rotate-0 absolute md:bottom-0 bottom-1/2 translate-y-1/2 md:translate-y-0  max-md:-right-2 md:left-1/2 -translate-x-1/2' src={bottomDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">4</p>
                        </div>
                    </div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto rotate-90 md:rotate-0 absolute md:top-0 top-1/2 -translate-y-1/2 md:translate-y-0  max-md:-right-2 md:left-1/2 -translate-x-1/2' src={topDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">5</p>
                        </div>
                    </div>
                    <div className='max-w-[54px] relative py-[52px]'>
                        <Image className='mx-auto -rotate-90 md:rotate-0 absolute md:bottom-0 bottom-1/2 translate-y-1/2 md:translate-y-0  max-md:-right-2 md:left-1/2 -translate-x-1/2' src={bottomDottedLine} height={52} alt='dottedline' />
                        <div className='w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]'>
                            <p className="text-2xl leading-[130%] text-white font-semibold">6</p>
                        </div>
                    </div>

                </div>
                <div className="grid md:grid-cols-3 mt-6 md:mt-0 gap-6 max-w-[996px] ml-auto ">
                    {BottomCardsData.map((data, index) => {
                        return (
                            <div key={index} className='md:max-w-[300px] max-w-[255px] min-[520px]:max-w-[400px] ml-auto sm:max-w-[500px] w-full md:mr-auto rounded-xl p-6 bg-[#101629]'>
                                <Image src={data.Icon} alt="icon" />
                                <p className='text-white text-base sm:text-xl pt-6 leading-[130%]'>{data.para}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    )
}

export default Work