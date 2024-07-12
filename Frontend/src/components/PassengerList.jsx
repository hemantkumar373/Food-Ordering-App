import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedPassenger } from '../redux/slices/passengerSlice';
import { IoMdAdd } from "react-icons/io";

const PassengerList = () => {
    const data = ["Passenger 1", "Passenger 2"]

    const dispatch = useDispatch();
    const handleSelectedPassenger = (index) => {
        dispatch(updateSelectedPassenger(index))
    }

    const selectedPassenger = useSelector((store) => store.passenger.selectedPassenger);
    return (
        <div className='w-[450px] h-[300px] rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div className='flex items-center pb-6 text-black font-bold text-xl'><IoMdAdd size='24px' />
                SELECT MEALS</div>
            {
                data.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectedPassenger(index)}
                        className={`flex justify-between items-center p-4 mt-2 w-[350px] rounded-lg text-black shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 transition duration-300 ease-in-out ${selectedPassenger === index ? '' : ''
                            }`}
                    >
                        <div>{item}</div>
                        <div className={`px-3 py-1 rounded-lg ${selectedPassenger === index ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300'
                            }`}
                        >
                            {selectedPassenger === index ? 'Selected' : 'Not selected'}
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default PassengerList