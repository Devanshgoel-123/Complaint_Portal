
export default function generate_otp():number{
    const otp=(Math.floor(Math.random()*9000))+1000;
   return otp;
}


