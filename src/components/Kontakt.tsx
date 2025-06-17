import { PhoneFill } from "../icons/PhoneFill";
import { MailFill } from "../icons/MailFill";
import { MapMarker } from "../icons/MapMarker";
import { Clock } from "../icons/Clock";
import CustomMap from "./CustomMap";

const Kontakt = () => {
    return ( 
        <div id="kontakt" className="bg-second text-white py-24 m-auto">
            <h2 className="uppercase font-semibold text-2xl text-center">Skontaktuj się ze mną</h2>
            <div className="flex container m-auto justify-center items-center gap-24 flex-col md:flex-row">
                <div className="mt-12 w-fit mx-4">
                    <h3 className="uppercase font-semibold text-xl">Dane kontaktowe</h3>
                    <div className="flex items-center gap-4 mt-4">
                        <PhoneFill />
                        <div>
                            <p className="text-lg font-medium">Telefon:</p>
                            <p className="text-lg">+48 797 692 516</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <MailFill />
                        <div>
                            <p className="text-lg font-medium">E-mail:</p>
                            <a href="mailto:plekus73@gmail.com" className="text-lg">plekus73@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <MapMarker />
                        <div>
                            <p className="text-lg font-medium">Obszar działania:</p>
                            <a href="mailto:plekus73@gmail.com" className="text-lg">Woszczyce i okolice (do 10km)</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <Clock />
                        <div>
                            <p className="text-lg font-medium">Godziny pracy:</p>
                            <a href="mailto:plekus73@gmail.com" className="text-lg">Pon-Pt: 11:00 - 20:00 <br /> Sob: 11:00 - 18:00</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 w-full">
                    <CustomMap />
                </div>
            </div>
        </div>
     );
}
 
export default Kontakt;