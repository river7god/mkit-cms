//npm install react-slick slick-carousel 多张图的banner
import Titlebar from './Titlebar';
import Image from 'next/image';

const Banner = () => {
   const mapURL = "/img/map.png";
   const flagURL = "/img/flag.png";
   const moneyURL = "/img/money.png";

    return (               
    <div  className=" top-0 left-0 right-0 w-full bg-gradient-to-r from-indexBGColorFrom to-indexBGColorTo  h-[550px] ">
       <div className=' h-full w-full sm:px-[20px] px-[100px] lg:px-[220px] py-[40px] bg-no-repeat'  style={{backgroundImage:"url('/img/banner.png')"}} >
       <Titlebar></Titlebar>
       <div className="flex flex-row h-full w-full items-center space-x-4" >           
          <div className="flex flex-col space-y-12  text-white font-light  w-1/2">   
             <div className="space-y-3">
                <div className=" text-[30px] font-semibold">一站式全球雇佣平台</div>     
                <div  className=" flex flex-row items-center space-x-4 text-sm">
                    <div>海外雇佣</div>
                    <div>|</div>
                    <div>灵活用工</div>
                    <div>|</div>
                    <div>全球招聘</div>
                </div>
             </div>
             <div className='flex text-[14px] pr-10 leading-8'>
                <p>大圣国际 (GiantSage)为您的企业在海外业务拓展中提供员工管理、合法合规、薪酬福利等一站式海外雇佣解决方案。帮助您快速实现全球布局，合规高效，杨帆出海。</p>
             </div>
             <div className="flex flex-row items-center space-x-12 text-sm">
                  <div className=" flex-row items-center space-x-3 border rounded-xl  px-4  py-1 flex justify-center">
                     <div className='flex-row'><Image alt="flag" src={flagURL} height="42"  width="20"></Image></div>
                     <div >
                        <div>100+</div> 
                        <div>服务国家</div>
                     </div>  
                  </div>
                  <div className="  flex-row items-center space-x-3 border rounded-xl  px-4  py-1 flex justify-center ">
                     <Image alt="flag" src={moneyURL}  height="52"  width="30"></Image>
                     <div >
                     <div>130+</div> 
                     <div>主流货币</div>
                     </div>  
                  </div>
                  
             </div>
             </div>
             <div className='flex w-1/2 justify-end'>
              <Image alt="map" src={mapURL}  height="260"  width="500"></Image>
          </div>
          </div>
          
       </div>
    </div> 
  
  );
}
 
export default Banner;