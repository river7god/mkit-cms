import IndexContentItem from "./IndexContentItem";
import Image from "next/image";
import StartJourney from "./StartJourney";
import { useRouter } from 'next/router';

const IndexContent = () => {
    const imgURL1 = "/img/indexcontent1.png?cache=${Date.now()}";
    const imgURL2 = "/img/indexcontent2.png?1cache=${Date.now()}";
    const imgURL3 = "/img/indexcontent3.png?cache=${Date.now()}";

    const router = useRouter();

    const handleButtonClick = () => {
      router.push('/hire');
    };

    const handleButtonClick2 = () => {
      router.push('/employee');
    };

    const handleButtonClick3 = () => {
      router.push('/recruitment');
    };
    
    
    return ( 
    <div className=" bg-white sm:px-[20px] px-[100px] lg:px-[220px] ">
      {/**帮你完成海外雇佣 */}
      <div className=" flex pt-14 items-center">
        <div className=" w-1/2 pr-6 space-y-3" >
            <div className=" text-sm">海外·雇佣管理</div>
            <div className=" font-semibold text-2xl flex ">帮您完成海外雇佣，让您专注全球业务拓展</div>
            <div className="flex">
            <div className=" text-sm text-slate-950  w-[102] leading-6">通过名义雇主（EOR）服务，大圣国际协助企业在业务开展地区合规雇佣，一站式解决员工签约、入职、薪资发放、法定福利等日常管理难题，为企业快速拓展全球业务保驾护航。</div>
            </div>
            <div className=" w-8 bg-indexBGColorFrom h-1"></div>
            <div className=" py-10">
            <div onClick={handleButtonClick} className=" cursor-pointer hover:border-l-slate-900 w-fit px-6 py-2 rounded-3xl bg-indexBGColorFrom text-white font-normal flex text-center items-center justify-center space-x-2">
              <p className="text-xs">了解更多</p>  
              <div className="arrow-up"></div>              
            </div>
            </div>             
        </div>
        <div className=" w-1/2 justify-center">        
        <Image className=" rounded-3xl"
            src={imgURL1}
            height="280"
            width="400"
            alt="Uploaded image"
          />
        </div>
      </div>

  {/**帮你完成海外雇佣 */}
      <div className=" flex py-16 items-center">
        <div className=" w-1/2 pr-16 flex justify-center">        
        <Image className=" rounded-3xl"
            src={imgURL2}
            height="280"
            width="400"
            alt="Uploaded image"
          />
        </div>
        <div className=" w-1/2 pl-6 space-y-3" >
            <div className=" text-sm">海外·用工解决方案 </div>
            <div className=" font-semibold text-2xl flex ">我们支持全球范围内的灵活用工</div>
            <div className="flex">
            <div className=" text-sm text-slate-950  w-[102] leading-6">为企业和海外顾问提供灵活用工的解决方案，支持长期，项目制签约等方式。 保证合同合规、操作便携、审计清晰。</div>
            </div>
            <div className=" w-8 bg-indexBGColorFrom h-1"></div>
            <div className=" py-10">
            <div onClick={handleButtonClick2} className=" cursor-pointer w-fit px-6 py-2 rounded-3xl items-center bg-indexBGColorFrom text-white font-normal flex text-center justify-center space-x-2">
              <p className="text-xs">了解更多</p>  
              <div className="arrow-up"></div>
            </div>
            </div>             
        </div>                
      </div>

      {/**帮你完成海外雇佣 */}
      <div className=" flex pb-16 items-center">
        <div className=" w-1/2 pr-6 space-y-3" >
            <div className=" text-sm">海外·招聘服务</div>
            <div className=" font-semibold text-2xl flex ">作为全球猎头为您提供人才招聘服务</div>
            <div className="flex">
            <div className=" text-sm text-slate-950  w-[102] leading-6">大圣国际分布全球的招聘顾问为您提供专属定制化的猎聘服务，精准推荐符合企业素质模型需求的理想人才。</div>
            </div>
            <div className=" w-8 bg-indexBGColorFrom h-1"></div>
            <div className=" py-10">
            <div onClick={handleButtonClick3} className=" cursor-pointer w-fit px-6 py-2 items-center rounded-3xl bg-indexBGColorFrom text-white font-normal flex text-center justify-center space-x-2">
              <p className="text-xs">了解更多</p>  
              <div className="arrow-up"></div>
            </div>
            </div>
        </div>
        <div className=" w-1/2 justify-center flex">        
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