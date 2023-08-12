import Image from "next/image";
import { useRouter } from 'next/router';

const Titlebar = () => {
    const router = useRouter();

    const handleButtonClick = () => {
      router.push('/');
    };

    const logoURL = "/img/logotitle.png?cache=${Date.now()}";
    return ( 
      <nav className="title
      flex
      item-center
      justify-between text-gray-950 space-x-6">
             <div onClick={handleButtonClick} className=" cursor-pointer flex items-center justify-center space-x-[20px]">
                 <Image alt="logo" src={logoURL}  height="280"  width="100" ></Image>
             </div>
             <div className=" flex items-center font-sans justify-between space-x-12 text-[13px] text-white">
                  <div className="cursor-pointer hover:text-blue-600">解决方案</div>
                  <div className="cursor-pointer hover:text-blue-600">全球雇佣指南</div>
                  <div className="cursor-pointer hover:text-blue-600">雇佣成本计算器</div> 
                  <div className="cursor-pointer hover:text-blue-600">关于我们</div>
             </div>
             <div className=" border-white border rounded-3xl  px-6 py-2 flex justify-center items-center font-semibold text-[12px] text-white">获取支持</div>
        
      </nav>
    );
}

export default Titlebar;