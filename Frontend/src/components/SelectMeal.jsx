import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMeal } from '../redux/slices/passengerSlice';

const SelectMeal = () => {
    const [totalmealPrice, setTotalMealPrice] = useState(0);
    const selectedMeal = useSelector((store) => store.passenger.selectedMeal);

    let passenger1Data = selectedMeal?.filter((data, index) => data.selectedPassenger === 0);
    let passenger2Data = selectedMeal?.filter((data, index) => data.selectedPassenger === 1);


    const calculateTotalMealPrice = () => {
        let mealPrice = 0;
        selectedMeal?.forEach((meal) => {
            console.log(meal);
            mealPrice = mealPrice + +meal.totalPrice;
        })
        setTotalMealPrice(mealPrice);
    }

    useEffect(() => {
        calculateTotalMealPrice();
    }, [selectedMeal.length])



    const dispatch = useDispatch();

    const handleRemoveMeal = (mealId) => {
        let selectedMealIndex = null;
        for (let i = 0; i < selectedMeal.length; i++) {
            if (selectedMeal[i].id === mealId) {
                selectedMealIndex = i;

            }
        }

        dispatch(removeSelectedMeal(selectedMealIndex));
    }
    return (
        <div className="flex flex-col gap-4 overflow-y-auto ml-[22px] mt-5">
            
            <div className="bg-gray-100 p-4 w-[450px] text-black text-center rounded-md shadow-md">
                Total Price: <span className="font-bold">{totalmealPrice === 0 ? "$0.00" : `$${totalmealPrice.toFixed(2)}`}</span>
            </div>
                
            {passenger1Data.length > 0 && (
                <div className="border border-gray-200 rounded-lg p-4 max-w-md">
                    <h2 className="text-lg font-semibold text-black mb-2">Passenger 1</h2>
                    {passenger1Data.map((meal) => (
                        <div key={meal.id} className="bg-gray-100 text-black rounded-lg p-2 mb-2">
                            <p>{meal.title} + {meal.selectedDrink}</p>
                            <p className="text-gray-600">Price: ${meal.totalPrice}</p>
                            <button
                                onClick={() => handleRemoveMeal(meal.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {passenger2Data.length > 0 && (
                <div className="border border-gray-200 rounded-lg p-4 max-w-md">
                    <h2 className="text-lg font-semibold text-black mb-2">Passenger 2</h2>
                    {passenger2Data.map((meal) => (
                        <div key={meal.id} className="bg-gray-100 text-black rounded-lg p-2 mb-2">
                            <p>{meal.title} + {meal.selectedDrink}</p>
                            <p className="text-gray-600">Price: ${meal.totalPrice}</p>
                            <button
                                onClick={() => handleRemoveMeal(meal.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectMeal
