import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub,FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function SignUp(){
    return(
       <div className="mt-24 rounded shadow-[0px_0px_20px_0px_#d69e2e] bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
<form>
    <h1 className="text-2xl font-semibold text-white">Qeydiyyatdan Keçin</h1>
    <div className="space-y-4 mt-5">

<Input 
 type="email"
 name="email" 
 placeholder="Email"
 className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
 
 />
<Button type="submit" variant={"destructive"}  className="w-full bg-orange-500  hover:bg-orange-600">Sign Up</Button>

    </div>
</form>
<div className="text-gray-500 text-sm mt-2 ">
   Artıq hesabınız varmı? <Link className="text-white ml-2 hover:underline " href="/auth/login">Giriş Edin!</Link>
</div>
<div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
        <FaGithub />
        
        </Button>
        <Button variant="outline" size="icon">
       
        <FaGoogle />
        </Button>
      </div>
       </div>
    )
}