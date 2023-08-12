import Image from "next/image";

const RecruitmentContent = () => {
    return ( 
      <div className="w-full space-y-4 sm:px-[20px] px-[100px] lg:px-[220px] py-10 ">
        
            <div>海外·雇佣招聘</div>
            <div className="text-2xl font-semibold">全球招聘中心+丰富的人才库匹配 助力企业业务发展</div>
            <div className=" w-8 bg-blue-600 h-1"></div>
            <div className=" h-3"></div>
            <div className=" px-8 h-[100px] flex justify-around items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                <div className=" text-xs font-light space-y-3">
                    <div className="font-impact text-[30px] text-NumberBlue ">100 +</div>
                    <div > 全球顾问人数</div>
                </div>
                <div className="border-l border-gray-300 h-10"></div>
                <div className=" text-xs font-light space-y-3">
                    <div className="font-impact text-[30px] text-NumberBlue ">100 +</div>
                    <div > 海外招聘伙伴</div>
                </div>
                <div className="border-l border-gray-300 h-10"></div>
                <div className=" text-xs font-light space-y-3">
                    <div className="font-impact text-[30px] text-NumberBlue ">150 +</div>
                    <div > 人才被调支持区域</div>
                </div>
                <div className="border-l border-gray-300 h-10"></div>
                <div className=" text-xs font-light space-y-3">
                    <div className="font-impact text-[30px] text-NumberBlue ">210 +</div>
                    <div > 服务国家和地区</div>
                </div>
            </div>

            <div className=" p-4">
            <img alt="Uploaded image" src="/img/peoplemap.png?2" className=" w-full h-[500px] m-4"></img>
            </div>
            
            
            <div>海外·用工解决方案 </div>
            <div className="text-2xl font-semibold">专业的服务流程面试推</div>
            <div className=" w-8 bg-blue-600 h-1"></div>
            <div className=" h-1"></div>
            <div className=" flex items-center justify-between">
                <div className=" space-y-4">
                    <div className=" px-8 py-3 w-[180px] space-x-4 flex items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                        <div className=" p-2 rounded-full border border-bgNumberBlue  bg-bgNumberBlue">
                           <Image className=" " alt="map" src="/img/xuqiugoutong.png"  height="14"  width="14"></Image>
                        </div>
                        <div className=" text-sm text-NumberBlue font-semibold">需求沟通</div>
                    </div>
                    
                </div>

                <Image className=" " alt="map" src="/img/arrowright.png"  height="30"  width="30"></Image>

                <div>
                    <div className=" px-8 py-3 w-[180px] space-x-4 flex items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                        <div className=" p-2 rounded-full border border-bgNumberBlue  bg-bgNumberBlue">
                           <Image className=" " alt="map" src="/img/ziyuan.png"  height="14"  width="14"></Image>
                        </div>
                        <div className=" text-sm text-NumberBlue font-semibold">资源调动</div>
                    </div>
                </div>

                <Image className=" " alt="map" src="/img/arrowright.png"  height="30"  width="30"></Image>

                <div>
                    <div className=" px-8 py-3 w-[180px] space-x-4 flex items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                        <div className=" p-2 rounded-full border border-bgNumberBlue  bg-bgNumberBlue">
                           <Image className=" " alt="map" src="/img/shaixuan.png"  height="14"  width="14"></Image>
                        </div>
                        <div className=" text-sm text-NumberBlue font-semibold">筛选评估</div>
                    </div>
                    <div></div>
                </div>

                <Image className=" " alt="map" src="/img/arrowright.png"  height="30"  width="30"></Image>

                <div>
                    <div className=" px-8 py-3 w-[180px] space-x-4 flex items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                        <div className=" p-2 rounded-full border border-bgNumberBlue  bg-bgNumberBlue">
                           <Image className=" " alt="map" src="/img/mianshi.png"  height="14"  width="14"></Image>
                        </div>
                        <div className=" text-sm text-NumberBlue font-semibold">面试推动</div>
                    </div>
                    <div></div>
                </div>

                <Image className=" " alt="map" src="/img/arrowright.png"  height="30"  width="30"></Image>

                <div>
                    <div className=" px-8 py-3 w-[180px] space-x-4 flex items-center border-[1px] shadow-slate-500 shadow-lg  border-shadowcolor rounded-xl">
                        <div className=" p-2 rounded-full border border-bgNumberBlue  bg-bgNumberBlue">
                           <Image className=" " alt="map" src="/img/zhiwei.png"  height="14"  width="14"></Image>
                        </div>
                        <div className=" text-sm text-NumberBlue font-semibold">入职跟进</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className=" flex items-center justify-between py-4">
                <div className=" px-4 w-[180px] py-4 h-52 border-[1px] border-dashed bg-bgNumberBlue2 border-shadowcolor rounded-xl">
                        <ul className=" text-sm space-y-4">
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>澄清并完善岗位需求</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>明确人才画像制定职 位描述</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>制定招聘计划</div>
                            </li>
                        </ul>
                    </div>


                    <div className=" px-4 w-[180px] py-4 h-52 border-[1px] border-dashed bg-bgNumberBlue2 border-shadowcolor rounded-xl">
                        <ul className=" text-sm space-y-4">
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>初步寻猎快速联系目标候选人</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>多渠道职位推广</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>人才数据库全渠道访寻</div>
                            </li>
                        </ul>
                    </div>


                    <div className=" px-4 w-[180px] py-4 h-52 border-[1px] border-dashed bg-bgNumberBlue2 border-shadowcolor rounded-xl">
                        <ul className=" text-sm space-y-4">
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>电话/面谈候选人</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>评估确定推荐人选初步背调</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>提交人选推荐报告</div>
                            </li>
                        </ul>
                    </div>


                    <div className=" px-4 w-[180px] py-4 h-52 border-[1px] border-dashed bg-bgNumberBlue2 border-shadowcolor rounded-xl">
                        <ul className=" text-sm space-y-4">
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>协助客户安排面试</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>及时反馈下一步面试安排</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>针对最终人选正式背调</div>
                            </li>
                        </ul>
                    </div>


                    <div className=" px-4 w-[180px] py-4 h-52 border-[1px] border-dashed bg-bgNumberBlue2 border-shadowcolor rounded-xl">
                        <ul className=" text-sm space-y-4">
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>薪酬谈判</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>入职协调</div>
                            </li>
                            <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/right2.png"  height="20"  width="20"></Image>    
                            <div>入职后跟踪</div>
                            </li>
                        </ul>
                    </div>
            </div>
      </div>

     );
}
 
export default RecruitmentContent;