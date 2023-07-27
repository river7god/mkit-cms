import Image from "next/image";

const Footer = () => {
    return ( <div className="left-0 font-light h-[250px] text-xs text-white px-36 w-ful flex items-center justify-between bg-blue-900">
           <div className="flex-col space-y-4">
              <div className=" flex space-x-4">
               <Image src="/img/logo.png" width="22" height="15"></Image>
                <p className=" text-xl">Greate Stage</p>
              </div>
              <div>业务电话:1111111</div>
              <div>业务邮箱:</div>
           </div>
           <div className="flex-col space-y-4 py-5">
              <div className=" text-xl">解决方案</div>
              <div>名义雇主(EOR)</div>
              <div>灵活用工</div>
              <div>招聘服务</div>
           </div>
           <div className="flex-col space-y-4 py-5">
              <div className=" text-xl">资源中心</div>
              <div>全球雇佣指南</div>
              <div>全球税收政策</div>
              <div>全球劳动法</div>
           </div>
           <div className="flex-col space-y-4 py-5">
              <div className=" text-xl">关于我们</div>
              <div>关于公司</div>
           </div>

    </div> );
}
 
export default Footer;