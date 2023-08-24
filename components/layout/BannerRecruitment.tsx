import Titlebar from './Titlebar';
import { useRouter } from 'next/router';

const BannerRecruitment = () => {
   const router = useRouter();

   const supportHandler = () => {
     router.push('/support');
   };

    return ( 
<div  className=" top-0 left-0 right-0 w-full  h-[400px]  ">
       <div className=' h-full w-full sm:px-[20px] px-[100px] lg:px-[220px] py-[30px] bg-no-repeat bg-cover'  style={{backgroundImage:"url('/img/recuritementBanner.png')"}} >
       <Titlebar></Titlebar>
       <div className="flex flex-row h-full w-full items-center space-x-4" >           
          <div className="flex flex-col space-y-12  text-white font-light  w-2/3">   
             <div className="space-y-3">
                <div className=" text-[30px] font-semibold">作为全球猎头为您提供人才招聘服务</div>     
                <div  className=" flex flex-row items-center space-x-4 text-sm">
                高管寻访 专业人才招聘 批量化招聘
                </div>
             </div>
             <div className="flex flex-row items-center space-x-12 text-sm">
                  <div className="w-fit px-6 py-2 rounded-3xl bg-blue-600 text-white font-normal flex text-center items-center justify-center space-x-2">
                     <p className="text-sm cursor-pointer" onClick={supportHandler}> 免费获取用工方案</p>  
                       
                  </div>
                  
             </div>
             </div>
             <div className='flex w-1/3 justify-end'>
              
              </div>
          </div>
          
       </div>
    </div> 

     );
}
 
export default BannerRecruitment;