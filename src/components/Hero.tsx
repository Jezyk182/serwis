import { Telephone } from "../icons/Telephone";
import { Email } from "../icons/Email";

const Hero = () => {
    return ( 
        <div className="h-[740px] w-full relative md:h-[680px]">
            <div className="bg-[url('/background.jpg')] bg-cover bg-center h-full absolute top-0 left-0 w-full">
            </div>
            <div className="bg-[#000000BF] min-h-full absolute top-0 left-0 w-full">
                <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-12">
                    <div className="flex flex-col gap-6">
                        <h1 className="uppercase text-white text-3xl sm:text-4xl md:text-5xl font-bold position text-center">Mobilny serwis komputerowy</h1>
                        <p className="text-white text-lg sm:text-xl uppercase text-center">Naprawy, modernizacje i czyszczenie komputerów oraz laptopów z opcją dojazdu do klienta</p>
                    </div>
                    <div className="flex flex-col text-center gap-2.5">
                        <div className="flex justify-center items-center gap-2.5">
                            <Telephone />
                            <p className="text-white text-lg sm:text-xl">
                                <a href="tel:+48797692516">
                                    +48 797 692 516
                                </a>
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-2.5">
                            <Email />
                            <p className="lowercase text-white  text-lg sm:text-xl"><a href="mailto:plekus73@gmail.com">plekus73@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col sm:flex-row gap-8 sm:gap-28">
                        <div className="w-40 h-16 text-lg sm:text-xl font-semibold bg-second text-white rounded-2xl opacity-100 cursor-pointer flex justify-center items-center hover:scale-105 transition-all duration-100">
                            <a href="#cennik">CENY</a>
                        </div>
                        <div className="w-40 h-16 text-lg sm:text-xl font-semibold border-4 border-second text-white rounded-2xl cursor-pointer flex justify-center items-center hover:scale-105 transition-all duration-100">
                            <a href="#kontakt">KONTAKT</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute -bottom-44 h-[225.5px] bg-primary rotate-[-3deg] origin-top -ml-4 w-[105vw]"></div> */}
        </div>
     );
}
 
export default Hero;