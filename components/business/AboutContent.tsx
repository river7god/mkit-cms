import Image from "next/image";

const AboutContent = () => {
    return ( <div className="bg-no-repeat relative bg-cover sm:px-[20px] px-[100px] lg:px-[220px] py-10 " style={{backgroundImage:"url('/img/aboutbg.png')"}} >
        <div className="w-full flex justify-between self-baseline ">
            <div className="space-y-4 w-1/2">
            
                    <div className="text-2xl font-medium text-blue-600">关于我们</div>
                    <div className=" text-sm">大圣国际（GiantSage）是北京指行天下科技有限公司旗下全球一站
            式人力服务品牌。

            指行天下成立于2016年，在北京、香港、新加坡、菲律宾、印度等地设
            有分支机构，海内外团队规模超过500人，服务包括小米、TikTok等出海
            企业。

            公司已获得B+轮融资，投资方分别为顺为资本、源码资本等多家一线美元
            投资机构。</div>
            <div className=" w-8 bg-blue-600 h-1"></div>
            
            </div>
            <div className="w-1/2 flex justify-end">
                <Image alt="map" src="/img/aboutcontent.png"  height="600"  width="450"></Image>
            </div>
      </div>
      <div className="m-2 py-12 space-y-12">
            <div className=" flex justify-between ">
                <div className=" space-y-2 flex-col flex bg-white  w-[500px] h-[180px] justify-center items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                        <Image alt="map" src="/img/zixun.png"  height="70"  width="50"></Image>                    
                        <div className="  font-semibold">专业化合规咨询服务</div>
                        <div className=" text-sm font-light">合规规避风险，保障客户业务稳定运营</div>                 
                </div>
                <div className=" space-y-2 flex-col flex bg-white  w-[500px] h-[180px] justify-center items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                        <Image alt="map" src="/img/duandaoduan.png"  height="70"  width="50"></Image>                    
                        <div className="  font-semibold">端到端方案咨询配置</div>
                        <div className=" text-sm font-light">招聘与用工的无缝衔接全流程咨询服务</div>                 
                </div>
            </div>
            <div className=" flex justify-between ">
               <div className=" space-y-2 flex-col flex bg-white  w-[500px] h-[180px] justify-center items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                        <Image alt="map" src="/img/gloabel.png"  height="70"  width="50"></Image>                    
                        <div className="  font-semibold">本地化深度交付服务</div>
                        <div className=" text-sm font-light">中方+本地化项目组织助力客户方案高效落地</div>                 
                </div>
                <div className=" space-y-2 flex-col flex bg-white  w-[500px] h-[180px] justify-center items-center border-[1px] shadow-slate-500 shadow-lg border-shadowcolor rounded-xl px-10 py-6">
                        <Image alt="map" src="/img/yun.png"  height="70"  width="50"></Image>                    
                        <div className="  font-semibold">全球化HR云服务管理平台</div>
                        <div className=" text-sm font-light">统一化、IT化的云服务人力资源管理支撑</div>                 
                </div>
                
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
    </div> );
}
 
export default AboutContent;