import Image from "next/image";

const Footer = () => {
    return ( <div className=" space-x-16 justify-center left-0 font-light h-[120px] text-xs text-white sm:px-[20px] px-[100px] lg:px-[220px] w-ful flex items-center  bg-black">
           
           <div><Image alt="logo" src="/img/logobig.png?cache=${Date.now()}" width="120" height="140"></Image></div>
           
           <div className=" text-sm space-y-2">
               <div>
               ©️2023 GinatSage All Rights Reserved. 北京指行天下科技有限公司
               </div>
               <div>
               北京市朝阳区蓝堡国际中心I座506   邮箱：contact@giantsage.com
               </div>
           </div>
    </div> );
}
 
export default Footer;