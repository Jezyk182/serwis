import { Exclamation } from "../icons/Exclamation";

const Cennik = () => {
    return ( 
        <div className="py-24 container m-auto" id='cennik'>
            <h2 className="uppercase text-secText font-semibold text-2xl text-center">Cennik</h2>
            <div className="w-full px-4 m-auto">
                <div className="overflow-x-auto">
                    <table className="w-full text-left rounded-lg mt-12 overflow-hidden">
                        <thead className="bg-second text-white">
                            <tr>
                                <th className="py-3 px-4 ">Usługa</th>
                                <th className="py-3 px-4 ">Opis</th>
                                <th className="py-3 px-4 text-right">Cena</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 [&>tr:nth-child(odd)]:bg-gray-200">
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Diagnoza sprzętu
                                </td>
                                <td className="py-3 px-4 ">
                                    Wstępna diagnoza komputera / laptopa
                                </td>
                                <td className="py-3 px-4 text-right">
                                    20 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Naprawa laptopa / komputera
                                </td>
                                <td className="py-3 px-4 ">
                                    Naprawa laptopa / komputera (odliczając części)
                                </td>
                                <td className="py-3 px-4 text-right">
                                    od <span className="whitespace-nowrap">100 zł *</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Czyszczenie + pasta
                                </td>
                                <td className="py-3 px-4 ">
                                    Wyczyszczenie laptopa / komputera z kurzu + wymiana pasty termoprzewodzącej
                                </td>
                                <td className="py-3 px-4 text-right">
                                    50 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Instalacja Windows
                                </td>
                                <td className="py-3 px-4 ">
                                    Pełna instalacja ze sterownikami
                                </td>
                                <td className="py-3 px-4 text-right">
                                    75 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Instalacja Linux
                                </td>
                                <td className="py-3 px-4 ">
                                    Pełna instalacja wybranej dystrybucji Linuxa
                                </td>
                                <td className="py-3 px-4 text-right">
                                    50 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Montaż komputera
                                </td>
                                <td className="py-3 px-4 ">
                                    Składanie PC z dostarczonych części
                                </td>
                                <td className="py-3 px-4 text-right">
                                    100 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Przenoszenie danych między telefonami
                                </td>
                                <td className="py-3 px-4 ">
                                    Przeniesienie danych z starego telefonu na nowy
                                </td>
                                <td className="py-3 px-4 text-right">
                                    75 zł *
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">
                                    Tworzenie stron internetowych
                                </td>
                                <td className="py-3 px-4 ">
                                    Stworzenie witryny WWW wedle preferencji
                                </td>
                                <td className="py-3 px-4 text-right">
                                    od <span className="whitespace-nowrap">300 zł</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-amber-100 border-l-4 border-yellow-400 text-yellow-500 flex py-3 px-2 items-center justify-start gap-4 mt-8">
                    <Exclamation />
                    <p className="text-sm text-yellow-700"><strong>UWAGA!</strong> Podane ceny są orientacyjne. Ostateczna wycena usługi może się różnić w zależności od stopnia skomplikowania naprawy. Koszt części zamiennych nie jest wliczony w cenę usługi. Możliwa jest negocjacja</p>
                </div>
                <div className="flex px-2 items-center justify-start gap-4 mt-4">
                    <p className="text-sm"><strong>*</strong> Cena może wzrosnąć w zależności od odległości dojazdu — doliczane jest 10 zł za każde rozpoczęte <span className="whitespace-nowrap">5 km</span> poza promieniem 10 km od Woszczyc.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Cennik;