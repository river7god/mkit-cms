import Company from "./Company";

const Customs = () => {
    return ( 
    
    <div className=" flex-col customs list space-y-6">
        {/*第一行显示 */}
        <div className="flex justify-center items-center space-x-3">
           <Company icon="/img/company/xiaomi.png"/><Company icon="/img/company/tiktok.png"/>
           <Company icon="/img/company/shuidi.png"/><Company icon="/img/company/tencent.png"/>
           <Company icon="/img/company/vivo.png"/>
        </div>
        {/*第一行显示 */}
        <div className="flex justify-center items-center space-x-3">
        <Company icon="/img/company/bigolive.png"/>
        <Company icon="/img/company/resso.png"/>
        <Company icon="/img/company/relx.png"/>
        <Company icon="/img/company/okcredit.png"/>
        </div>
        

    </div> );
}
 
export default Customs;