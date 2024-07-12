import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedMeal } from '../redux/slices/passengerSlice'

const Meal = ({ meal }) => {
  const [selectedDrink, setSelectedDrink] = useState(meal.drinks[0].title)
  const [totalPrice, setTotalPrice] = useState(meal.price + meal.drinks[0].price)
  const drinks = meal.drinks

  const handleSelectedDrink = (drink) => {
    setSelectedDrink(drink.title)
    setTotalPrice(+meal.price + +drink.price)
  }

  const dispatch = useDispatch();

  const selectedPassenger = useSelector((store) => store.passenger.selectedPassenger);


  const handleSelectedMeal = () => {
    const addedMeal = {
      id: nanoid(), title: meal.title, selectedDrink: selectedDrink, totalPrice: totalPrice.toFixed(2), selectedPassenger: selectedPassenger
    }


    dispatch(addSelectedMeal(addedMeal));
  }

  return (
    <>
      <div className="w-[800px] max-h-[350px] bg-white rounded-lg shadow-md mt-2 p-6 flex gap-4">
        <div className="relative w-[200px] flex-shrink-0">
          <img
            src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Meal Image"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg  text-black mb-2">{meal.title} + Drink</div>
          <div className="mb-4 space-y-1 text-sm">
            <div><span className="font-semibold text-gray-900">Starter:</span> {meal.starter}</div>
            <div><span className="font-semibold text-gray-900">Dessert:</span> {meal.desert}</div>
            <div><span className="font-semibold text-gray-900">Selected Drink:</span> {selectedDrink}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {drinks.map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => handleSelectedDrink(drink)}
                  className={`px-3 py-1 rounded-md text-xs transition-all ${selectedDrink === drink.title
                      ? 'bg-blue-500 text-white'
                      : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                    }`}
                >
                  {drink.title}
                </button>
              ))}
            </div>
            <div className="text-right">
              <div className="text-base font-bold mb-2">Price: ${parseFloat(totalPrice).toFixed(2)}</div>
              <button
                className="py-2 px-4 rounded-md bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                onClick={handleSelectedMeal}
                disabled={!selectedDrink}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Meal