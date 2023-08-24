import Image from "next/image";
import axios from "axios";
import {Toaster, toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import Input from "../inputs/Input";

const SupportContent = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
  
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
          setIsLoading(true);
          
          await axios.post('/api/mkit/ask', {
            name,
            phone,
            email,
            company,           
          });
    
          setIsLoading(false)
    
          toast.success('提交成功.');    
        } catch (error) {
          toast.error('Something went wrong');
        } finally {
          setIsLoading(false);
        }
      }, [email, company, phone, name]);


    return (<div className="bg-no-repeat relative bg-cover sm:px-[20px] px-[100px] lg:px-[220px] py-12 " style={{backgroundImage:"url('/img/supportbg.png')"}} >
    <div className="w-full flex justify-between self-baseline pb-10">
        <div className="space-y-4 w-1/2">
        
                <div className="text-2xl font-medium text-blue-600">资深海外雇佣人力专家在线服务</div>
                <div className=" text-sm">150+个国家/地区的专业合规雇佣建议 全球薪资政策解读 来自国际专家团队的实时本地化支持 免费定制最适合的海外雇佣方案</div>
                <div className=" w-8 bg-blue-600 h-1"></div>
        
                <Image alt="map" src="/img/supportcontent.png"  height="500"  width="400"></Image>
        </div>
        <div className="w-1/2 flex justify-center">
            <div className="text-slate-900 text-sm  border-[1px] space-y-2 w-[400px] p-12 bg-white shadow-slate-500 shadow-lg border-shadowcolor rounded-xl">
                <div className="text-xl ">获取支持</div>
                <div className=" font-light">立即安排30分钟产品demo和专家问答</div>
                <div className=" py-4 space-y-6">
                    <div className=" space-y-1">
                        <div>姓名：</div>
                        <Input type="text"
                          disabled={isLoading}
                          placeholder="Name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} ></Input>
                    </div>
                    <div className=" space-y-1">
                        <div>电话：</div>
                        <Input type="text"
                          disabled={isLoading}
                          placeholder="Phone" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} ></Input>
                    </div>
                    <div className=" space-y-1">
                        <div>邮箱：</div>
                        <Input type="text"
                        disabled={isLoading}
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                    </div>
                    
                    <div className=" space-y-1">
                        <div>公司：</div>
                        <Input type="text"
                         disabled={isLoading}
                         placeholder="Company" 
                         value={company} 
                         onChange={(e) => setCompany(e.target.value)}
                        ></Input>
                    </div>
                </div>
                <Toaster/>
                <button onClick={onSubmit} disabled={isLoading}  className=" cursor-pointer bg-blue-600 px-9 py-2 w-full rounded-2xl text-white text-center mt-8 mb-8">提交</button>
            </div>
        </div>
     </div>

     <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white"></div>
  </div>
    );
}
 
export default SupportContent;