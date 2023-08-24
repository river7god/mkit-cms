import Titlebar from './Titlebar';

const BannerAbout = () => {
    return ( 
       <div  className=" top-0 left-0 right-0 w-full bg-white">
           <div className='  h-full w-full sm:px-[20px] px-[100px] lg:px-[220px] pt-[30px]  pb-6 shadow-lg shadow-slate-500'  >
           <Titlebar textStyle="slate-800" logoURL="/img/logo2.png"></Titlebar>   
            </div>
        </div>
     );
}
 
export default BannerAbout;