import Titlebar from './Titlebar';

const BannerEmployee = () => {
    return ( 
<div  className=" top-0 left-0 right-0 w-full  h-[400px] bg-gradient-to-r from-indexBGColorFrom to-indexBGColorTo ">
       <div className=' h-full w-full sm:px-[20px] px-[100px] lg:px-[220px] py-[40px] bg-no-repeat bg-cover'  style={{backgroundImage:"url('/img/employeeBanner.png')"}} >
       <Titlebar></Titlebar>
       <div className="flex flex-row h-full w-full items-center space-x-4" >           
          <div className="flex flex-col space-y-12  text-white font-light  w-2/3">   
             <div className="space-y-3">
                <div className=" text-[30px] font-semibold">我们支持全球范围内的灵活用工</div>     
                <div  className=" flex flex-row items-center space-x-4 text-sm">
                安全合规的合同 便捷的操作流程 清晰的审计记录
                </div>
             </div>
             <div className="flex flex-row items-center space-x-12 text-sm">
                  <div className="w-fit px-6 py-2 rounded-3xl bg-blue-600 text-white font-normal flex text-center items-center justify-center space-x-2">
                     <p className="text-sm"> 免费获取用工方案</p>  
                       
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
 
export default BannerEmployee;