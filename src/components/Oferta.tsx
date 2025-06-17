import type React from "react";

interface props {
    icon: React.ComponentType,
    title: string,
    desc: string,
}

const Oferta: React.FC<props> = ({ icon: Icon, title, desc }) => {
    return ( 
        <div className="w-full mx-4 lg:w-1/3 xl:w-1/4 bg-white rounded-xl px-6 py-5 shadow hover:shadow-xl hover:-mt-3 transition-all duration-150 min-h-64">
            <Icon />
            <h3 className="font-semibold text-xl mt-4">{title}</h3>
            <p className="lg:text-lg mt-2 text-base">{desc}</p>
        </div>
     );
}
 
export default Oferta;