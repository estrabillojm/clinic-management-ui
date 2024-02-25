type Props = {
    isActive: boolean
}

const Card = ({ isActive } : Props) => {
    return ( 
        <>
            <div className={`border rounded-md p-4 mt-4  ${isActive ? "bg-green-200 cursor-default" : "bg-yellow-100 cursor-pointer hover:bg-yellow-50 transition-all"}`}>
                <section className="border-b border-green-400">
                    <h2 className="font-bold text-green-600">TR-04</h2>
                </section>
                <section className="border-b border-green-400">
                    <p className="text-gray-500 py-2">
                        <span className="font-bold text-gray-600">Remarks:</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum vitae quae exercitationem maiores deleniti.
                    </p>
                </section>
                <section>
                    <p className="text-gray-500 pt-2">
                        Physician: Karl Soriano
                    </p>
                    <p className="text-gray-500 pb-2">
                        Date: January 15, 2024
                    </p>
                </section>
            </div>

        </>
    );
}
 
export default Card;