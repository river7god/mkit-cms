import Image from "next/image";

const HireContent = () => {
    const yewutuozhan = "/img/yewutuozhan.png";
    const yuangongruzhi = "/img/yuangongruzhi.png";
    const pay = "/img/pay.png";
    const money1 = "/img/money1.png";
    const needURL = "/img/need.png";

    return ( <div className="w-full sm:px-[20px] px-[100px] lg:px-[220px] py-10 space-y-4">
        <div>海外·雇佣管理</div>
        <div className="text-[26px] font-semibold">每个国家和地区对于合规雇用人才都有自己独特而复杂的法规要求</div>
        <div className=" text-sm">作为您的直接名义雇主EOR合作伙伴，我们可以帮助您</div>
        <div className=" w-8 bg-blue-600 h-1"></div>

        <div className=" py-8 space-y-12">
            <div className=" flex justify-between space-x-12">
                <div className="flex space-x-6  w-[580px] h-[160px] items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                    <Image alt="map" src={yewutuozhan}  height="160"  width="100"></Image>
                    <div className=" space-y-3">
                        <div className=" font-semibold">业务扩展</div>
                        <div className=" text-sm">为您在全球范围内招募和雇用顶尖人才扫清障碍</div>
                    </div>
                </div>
                <div className="flex space-x-6 w-[580px] h-[160px]  items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                    <Image alt="map" src={yuangongruzhi}  height="160"  width="100"></Image>
                    <div className=" space-y-3">
                        <div className=" font-semibold">员工入职</div>
                        <div className=" text-sm">提供满足当地劳动法要求的员工文件,确保流畅的员工人职体验。</div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between  space-x-12">
                <div className="flex space-x-6 w-[580px] h-[160px] items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                    <Image alt="map" src={pay}  height="160"  width="100"></Image>
                    <div className=" space-y-3">
                        <div className=" font-semibold">员工管理</div>
                        <div className=" text-sm">提供服务和当地劳动法规定的人力资源及簖资福利服务, 帮助客户做好海外员工的站式管理及关怀。</div>
                    </div>
                </div>
                <div className="flex space-x-6 w-[580px] h-[160px] items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                    <Image alt="map" src={money1}  height="160"  width="100"></Image>
                    <div className=" space-y-3">
                        <div className=" font-semibold">薪酬支付</div>
                        <div className=" text-sm">专属客户经理跟进,全化实现对帐,薪资支付流程并保证及时行。</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-[26px] font-semibold pt-10">为您提供灵活性的解决方案，提升您的雇主竞争力</div>
        <div className=" w-8 bg-blue-600 h-1"></div>

        <div className="flex items-center py-6 justify-between">
            <div className=" border-[1px] rounded-2xl shadow-lg shadow-slate-500 w-[300px] h-[520px] ">
                 <div className="py-6 justify-center rounded-t-2xl flex space-y-2 text-center items-center flex-col bg-blue-500">
                      <Image alt="map" src={needURL}  height="80"  width="60"></Image>
                      <div className=" text-lg text-white ">您需要什么？</div>
                 </div>
                 <div className=" py-6 px-8 text-base ">
                    <ul className=" space-y-8">
                        <li className="flex items-center space-x-4">
                        <Image alt="map" src="/img/right.png"  height="20"  width="20"></Image>    
                        <div> 中国企业走向海外，增强全球 经济竞争力</div>
                        </li>
                        <li className="flex items-center space-x-4">
                        <Image alt="map" src="/img/right.png"  height="20"  width="20"></Image>    
                        <div> 了解当地用户政策及风险控</div>
                        </li>
                        <li className="flex items-center space-x-4">
                        <Image alt="map" src="/img/right.png"  height="20"  width="20"></Image>    
                        <div> 希要整合的运营全球员工的 服务模式</div>
                        </li>
                        <li className="flex items-center space-x-4">
                        <Image alt="map" src="/img/right.png"  height="20"  width="20"></Image>    
                        <div> 全球薪酬竞争性及工资服务 的属地化</div>
                        </li>
                        <li className="flex items-center space-x-4">
                        <Image alt="map" src="/img/right.png"  height="20"  width="20"></Image>    
                        <div> 全球人力资源管理技术平台 的整合</div>
                        </li>   
                    </ul>
                 </div>
            </div>

            <div className=" border-[1px] rounded-2xl shadow-lg shadow-slate-500 w-[300px] h-[520px] ">
                 <div className="py-6 justify-center rounded-t-2xl flex space-y-2 text-center items-center flex-col bg-blue-500">
                      <Image alt="map" src="/img/folder.png"  height="80"  width="60"></Image>
                      <div className=" text-lg text-white ">我们能提供什么？</div>
                 </div>
                 <div className=" py-8 px-8 grid grid-cols-2 gap-10">
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/chart.png"  height="30"  width="30"></Image> 
                        <div>一个时区</div>
                    </div>
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/block.png"  height="30"  width="30"></Image> 
                        <div>统一模式</div>
                    </div>
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/temple.png"  height="30"  width="30"></Image> 
                        <div>一个平台</div>
                    </div>
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/wallet.png?${Math.random()}"  height="30"  width="30"></Image> 
                        <div>一次支付</div>
                    </div>
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/book.png"  height="30"  width="30"></Image> 
                        <div>一套报表</div>
                    </div>
                    <div className="flex text-center items-center flex-col space-y-2">
                        <Image alt="map" src="/img/language.png"  height="30"  width="30"></Image> 
                        <div>统一语言</div>
                    </div>
                 </div>
            </div>

            <div className=" border-[1px] rounded-2xl shadow-lg shadow-slate-500 w-[300px] h-[520px] ">
                 <div className="py-6 justify-center rounded-t-2xl flex space-y-2 text-center items-center flex-col bg-blue-500">
                      <Image alt="map" src="/img/hand.png"  height="80"  width="60"></Image>
                      <div className=" text-lg text-white ">为什么选择我们？</div>
                 </div>
                 <div className=" py-4 px-8 text-base ">
                    <ul className=" space-y-6">
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/phone.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div>专业化合规咨询服务</div>
                                <div className=" font-light text-sm">合规规避风险，保障客户业务稳定运营</div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/chart2.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div>专业化合规咨询服务</div>
                                <div className=" font-light text-sm">合规规避风险，保障客户业务稳定运营</div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/arrow2.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div>端到端方案咨询配置</div>
                                <div className=" font-light text-sm">招聘与用工的无缝衔接，全流程咨询服务</div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/people.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div>本地化深度交付服务</div>
                                <div className=" font-light text-sm">中方+本地化项目组织，助力客户方案高效落地</div>
                            </div>
                        </li>   
                    </ul>
                 </div>
            </div>
        </div>

        <div className="text-[26px] font-semibold pt-10">大圣国际名义雇主EOR解决方案的优势</div>
        <div className=" w-8 bg-blue-600 h-1"></div>

        <div className="  py-6 relative space-y-14">
            <div className=" flex justify-between">
                <div className=" z-10 bg-white border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 h-fit py-6 w-[480px] space-y-3">
                    <div className="font-semibold">在满足当地法规的同时，扩大您的全球业务足迹</div>
                    <div className=" text-sm font-light">使用合规目集成的全球名义雇主EOR解决方案，在全球10多个国家和地区雇佣人才</div>
                </div>
                <Image alt="map" className="absolute z-0 top-28 left-[22rem]" src="/img/connection.png"  height="360"  width="360"></Image>
                
                <div className=" mt-8 items-start justify-start border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6 w-[350px] space-y-3">
                    <div className="font-semibold">快速应对市场变化</div>
                    <div className=" text-sm font-light">为您提供单一且可拓展的全方位名义雇主EOR 解决方案,包括快速且合规的员工人职、薪酬管 理和关于当地税务和雇佣法规的洞察。</div>
                </div>
            </div>

            <div className=" flex justify-between">
            <div className=" border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6 w-[350px] space-y-3">
                <div className="font-semibold">低成本入市，速度提高80%</div>
                <div className=" text-sm font-light">采用直接名义雇主EOR模式，无任何第三方、 供应商和当地合作伙伴参与，大幅降低成本</div>
            </div>

            <div className=" border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6 w-[420px] space-y-3">
                <div className="font-semibold">获得当地人力资源法规支持</div>
                <div className=" text-sm font-light">我们的全球人力资源、法律和合規团队为您提供全天候支持,井且您还可以在我们的平台内获取最新的全球人力资源参考指南</div>
            </div>

            </div>
        </div>

       

    </div> );
}
 
export default HireContent;