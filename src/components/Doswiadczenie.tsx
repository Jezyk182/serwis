import { GraduationCap } from "../icons/GraduationCap";
import { Certificate } from "../icons/Certificate";
import { Briefcase } from "../icons/Briefcase";
import { Wrench } from "../icons/Wrench";

const Doswiadczenie = () => {
    return ( 
        <div className=" bg-white py-24" id="doswiadczenie">
            <h2 className="uppercase text-secText font-semibold text-2xl text-center">Moje Doświadczenie</h2>
            <div className="flex items-center justify-around mt-24 flex-col md:flex-row container m-auto gap-12">
                <div className="max-w-80 aspect-square rounded-full overflow-hidden border-4 border-secText">
                    <img src="./Computer.jpg" alt="Zdjęcie profilowe w sekcji 'o mnie'" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h3 className="font-semibold text-xl mt-4 text-secText">Patryk Plekaniec</h3>
                    <p className="text-lg mt-2">
                        Stawiam pierwsze kroki jako serwisant komputerowy. Mam solidne podstawy z technikum informatycznego i praktyczne doświadczenie zdobyte podczas praktyk. Z zaangażowaniem pomagam przy naprawach sprzętu i rozwijam swoje umiejętności, szczególnie w serwisie komputerów oraz tworzeniu stron internetowych. Moim celem jest oferowanie rzetelnej pomocy technicznej oraz wsparcia w tworzeniu stron dla klientów.
                    </p>
                    <div className="bg-blue-50 rounded-2xl px-6 py-8 m-auto mt-10">
                        <h3 className="text-secText font-semibold text-xl">Doświadczenie i kwalifikacje</h3>
                        <ul className="list-none">
                            <li className="flex gap-3 mt-4">
                                <GraduationCap /> Ukończona szkoła techniczna w Żorach o profilu informatycznym
                            </li>
                            <li className="flex gap-3 mt-2">
                                <Certificate /> Dyplom technika informatyka
                            </li>
                            <li className="flex gap-3 mt-2">
                                <Briefcase /> 2-miesięczne praktyki w serwisie komputerowym
                            </li>
                            <li className="flex gap-3 mt-2">
                                <Wrench /> Doświadczenie w naprawie, optymalizacji komputerów oraz tworzeniu stron WWW
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Doswiadczenie;