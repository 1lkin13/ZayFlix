import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";



export default function Login(){
   
    return(
       <div className="mt-24 rounded shadow-[0px_0px_20px_0px_#d69e2e] bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
<form>
    <h1 className="text-2xl font-semibold text-white">Hesabınıza Daxil Olun</h1>
    <div className="space-y-4 mt-5">

<Input 
 type="email"
 name="email" 
 placeholder="Email"
 className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
 
 />
<Button type="submit" variant={"destructive"}  className="w-full bg-orange-500  hover:bg-orange-600">Giriş Edin</Button>

    </div>
</form>
<div className="text-gray-500 text-sm mt-2 ">
  ZayFlixdə yenisiniz? <Link className="text-white  hover:underline " href="/auth/sign-up">Qeydiyyatdan Keçin!</Link>
</div>
<div className="flex w-full justify-center items-center gap-x-3 mt-6">
 <GithubSignInButton/>
      <GoogleSignInButton/>
      </div>
       </div>
    )
}