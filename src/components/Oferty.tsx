import Oferta from "./Oferta";
import { Laptop } from "../icons/Laptop";
import { Fan } from "../icons/Fan";
import { Windows } from "../icons/Windows";
import { Computer } from "../icons/Computer";
import { Mobile } from "../icons/Mobile";
import { Code } from "../icons/Code";

const Oferty = () => {
    return ( 
        <div id="oferty">
            <div
                className="w-full h-32 bg-primary z-50 -mt-22"
                style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 50%)',
                }}
            />
            <h2 className="uppercase text-secText font-semibold text-2xl text-center">Oferowane usługi</h2>
            <div className="my-24 m-auto flex flex-wrap gap-10 items-center justify-center container">
                <Oferta icon={Laptop} title="Naprawa laptopów i komputerów" desc="Diagnoza i naprawa usterek sprzętowych oraz programowych. Wymiana uszkodzonych komponentów, rozwiązywanie problemów z uruchamianiem."/>

                <Oferta icon={Fan} title="Czyszczenie sprzętu" desc="Czyszczenie komputerów i laptopów oraz wymiana pasty termoprzewodzącej"/>

                <Oferta icon={Windows} title="Instalacja systemów" desc="Instalacja i konfiguracja systemów Windows i Linux. Instalacja oprogramowania oraz optymalizacja systemu pod kątem wydajności."/>

                <Oferta icon={Computer} title="Składanie i modernizacja PC" desc="Składanie komputerów stacjonarnych od podstaw lub modernizacja istniejącego sprzętu. Dobór kompatybilnych komponentów."/>

                <Oferta icon={Mobile} title="Przenoszenie danych między telefonami" desc="Bezpieczne przenoszenie kontaktów, wiadomości, zdjęć i innych danych ze starego telefonu na nowy, niezależnie od systemu operacyjnego."/>

                <Oferta icon={Code} title="Tworzenie stron internetowych" desc="Projektowanie i tworzenie nowoczesnych, responsywnych stron internetowych dopasowanych do potrzeb klienta."/>

            </div>
        </div>
     );
}
 
export default Oferty;