export type Property = {
    id: string;
    price_per_night: number;
}

interface ReservationSideBarProps {
    property: Property
}

const ReservationSideBar: React.FC<ReservationSideBarProps> = ({
    property
}) => {
    return (
        <aside className="p-6 mt-3 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-4 text-2xl">${property.price_per_night} per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Nights</label>
                <select className="w-full -ml-1 text-sm mb-2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="cursor-pointer w-full mb-3 py-6 text-center text-white bg-red-500 hover:bg-red-700 rounded-xl">
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>${property.price_per_night} * 4 nights</p>
                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Django Fee</p>
                <p>$40</p>
            </div>

            <hr/>

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$840</p>
            </div>
        </aside>
    )
}

export default ReservationSideBar