import Image from "next/image";

const Titlebar = () => {
    const logoURL = "/img/logotitle.png";
    return ( 
      <nav className="title 
      bg-slate-50
      px-24
      py-2
      flex
      item-center
      justify-between font-light text-gray-950 space-x-6">
             <div className="">
                 <Image alt="titlelogo" src={logoURL}  height="90"  width="150" ></Image>       

             </div>
             <div className=" flex items-center justify-between space-x-12 text-lg">
                  <div className="cursor-pointer hover:text-blue-600">解决方案</div>
                  <div className="cursor-pointer hover:text-blue-600">全球雇佣指南</div>
                  <div className="cursor-pointer hover:text-blue-600">雇佣成本计算器</div> 
                  <div className="cursor-pointer hover:text-blue-600">关于我们</div>
             </div>
             <div className=" border-blue-500 border rounded-3xl  px-6 flex justify-center items-center font-semibold text-sm text-blue-500">获取支持</div>
        
      </nav>
    );
}

export default Titlebar;