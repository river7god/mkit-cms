import EmployeeContent from "@/components/business/EmployeeContent";
import BannerEmployee from "@/components/layout/BannerEmployee";
import Head from 'next/head';


const Employee = () => {
    return ( <div>
        <Head>
       <title>海外灵活用工</title>
    </Head>
        <BannerEmployee></BannerEmployee>
        <EmployeeContent></EmployeeContent>
    </div> );
}
 
export default Employee;