import IndexContentItem from "./IndexContentItem";
import Image from "next/image";
import StartJourney from "./StartJourney";

const IndexContent = () => {
    const imgURL1 = "/img/indexcontent1.png";
    const imgURL2 = "/img/indexcontent2.png";
    const imgURL3 = "/img/indexcontent3.png";
    
    return ( 
    <div className=" bg-white ">
      {/**帮你完成海外雇佣 */}
      <div className=" flex pt-14 px-24 items-center text-center">
        <div className=" w-1/2 pr-6 space-y-3" >
            <div className=" font-medium text-2xl flex justify-center ">帮你完成<p className=" text-blue-600">海外雇佣</p>，让你专注全球拓展</div>
            <div className="flex justify-center">
            <div className=" font-extralight  text-slate-950 text-sm  text-center w-[102]">通过名义雇主(EOR)服务，大圣国际帮助企业在业务开展地区合法雇佣员工，管理员工的薪资发放以及当地福利的缴纳和申报，并满足所有员工的入职、签约、保险、税务、薪酬的法律要求</div>
            </div>
            <div className=" justify-center flex items-center space-x-2 font-normal text-sm">
            <div>严密的雇佣合同</div>
            <div>严密的雇佣合同</div>
            <div>完善的合规保障</div>
            </div>
            <div className=" text-blue-600 font-normal flex text-center justify-center space-x-2">
              <p>了解更多</p>  
              <Image src="/img/Arrowup.png" height="16" width="24"></Image>
            </div>
              
        </div>
        <div className=" w-1/2 pl-6">        
        <Image className=" rounded-3xl"
            src={imgURL1}
            height="280"
            width="400"
            alt="Uploaded image"
          />
        </div>
      </div>

  {/**帮你完成海外雇佣 */}
      <div className=" flex py-14 px-24 items-center text-center">
        <div className=" w-1/2 pr-6 flex justify-end">        
        <Image className=" rounded-3xl"
            src={imgURL2}
            height="280"
            width="400"
            alt="Uploaded image"
          />
        </div>
        <div className=" w-1/2 pl-6 space-y-3" >
            <div className=" font-medium text-2xl flex justify-center ">我们支持全球范围内的<p className=" text-blue-600">灵活用工</p></div>
            <div className="flex justify-center">
            <div className=" font-extralight  text-slate-950 text-sm  text-center w-[102]">企业和海外顾问提供灵活用工解决方案，支持长期，项目制签约等方式</div>
            </div>
            <div className=" justify-center flex items-center space-x-2 font-normal text-sm">
            <div>安全合规的合同</div>
            <div>便捷的操作流程</div>
            <div>清晰的审计记录</div>
            </div>
            <div className=" text-blue-600 font-normal flex text-center justify-center space-x-2">
              <p>了解更多</p>  
              <Image src="/img/Arrowup.png" height="16" width="24"></Image>
            </div>              
        </div>                
      </div>

      {/**帮你完成海外雇佣 */}
      <div className=" flex pb-14 px-24 items-center text-center">
        <div className=" w-1/2 pr-6 space-y-3" >
            <div className=" font-medium text-2xl flex justify-center ">作为全球猎头为您提供人才<p className=" text-blue-600">招聘服务</p></div>
            <div className="flex justify-center">
            <div className=" font-extralight  text-slate-950 text-sm  text-center w-[102]">无论您的人才需要的是什么，我们团队都会用专业知识和经验来帮助您招聘最优秀最合适的人才</div>
            </div>
            <div className=" justify-center flex items-center space-x-2 font-normal text-sm">
            <div>高管寻访</div>
            <div>专业人才招聘</div>
            <div>批量化招聘</div>
            </div>
            <div className=" text-blue-600 font-normal flex text-center justify-center space-x-2">
              <p>了解更多</p>  
              <Image src="/img/Arrowup.png" height="16" width="24"></Image>
            </div>
              
        </div>
        <div className=" w-1/2 pl-6">        
        <Image className=" rounded-3xl"
            src={imgURL3}
            height="280"
            width="400"
            alt="Uploaded image"
          />
        </div>
      </div>



      <StartJourney></StartJourney>
    </div>
    
    );
}
 
export default IndexContent;