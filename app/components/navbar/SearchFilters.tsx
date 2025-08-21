const SearchFilters = () => {

    return (
        <div className="h-[48px] lg:h-[66px] flex flex-row items-center justify-between rounded-full shadow-md border border-gray-300">
            <div className="hidden lg:block">
                <div className="cursor-pointer flex flex-row items-center justify-between">
                    <div className="h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold ">Where</p>
                        <p className="text-sm">Wanted location</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold ">Check In</p>
                        <p className="text-sm">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold ">Check Out</p>
                        <p className="text-sm">Add dates</p>
                    </div>
                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold ">Who</p>
                        <p className="text-sm">Add guests</p>
                    </div>
                </div>
            </div>
            <div className="p-2 ">
                <div className="cursor-pointer p-2 lg:p-4 bg-red-500 hover:bg-red-700 transition rounded-full text-white">
                    <svg 
                        viewBox="0 0 32 32" 
                        style={{display:'block', fill:'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                        aria-hidden="true" role="presentation" focusable="false"
                    >
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>

            </div>
        </div>
    )

}

export default SearchFilters