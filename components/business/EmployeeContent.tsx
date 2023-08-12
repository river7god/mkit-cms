import Image from "next/image";

const EmployeeContent = () => {
    return ( 
      <div className="w-full flex justify-between items-end self-baseline sm:px-[20px] px-[100px] lg:px-[220px] py-10 ">
        <div className="space-y-4 w-1/2">
        <div>海外·用工解决方案</div>
        <div className="text-2xl font-semibold">确保支付便捷性</div>
        <div className=" text-sm">减少您支付给全球零工人员的时间，并通过多种付款方式为他们提供最佳体验，同时减少费用和麻烦。</div>
        <div className=" w-8 bg-blue-600 h-1"></div>
        <div className=" py-5">
              <ul className=" space-y-6">
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/calendar.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div className=" font-bold">自动创建发票</div>
                                <div className=" font-light text-xs">平台支持自动化处理发票，即时为每笔付款生成数字发票，并将您的所有数据与 您最喜欢的会计工具无缝同步。</div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Image alt="map" src="/img/ehand.png"  height="30"  width="30"></Image>
                            <div className=" space-y-1">                            
                                <div className=" font-bold">一次支付给所有人</div>
                                <div className=" font-light text-xs">查看您整个团队的薪水，并通过便捷操作向每个人支付当地货币。平台支持一 键完成130+币种的批量付款。</div>
                            </div>
                        </li>
               </ul>
        </div>
        </div>
        <div className="w-1/2 flex justify-end">
            <Image alt="map" src="/img/employeeBG.png"  height="600"  width="450"></Image>
        </div>
      </div>

     );
}
 
export default EmployeeContent;