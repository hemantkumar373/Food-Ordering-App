import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import MealItems from '../MealItems'
import SelectMeal from '../SelectMeal'
import PassengerList from '../PassengerList'

const Home = () => {
  const [data, setData] = useState(null)
  const { setAuthUser } = useAuthContext();

  const handleLogout = async () => {
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
    });
	  
    setAuthUser(null);
  }
  return (
    <div className='flex w-full h-full overflow-x-hidden'>
      <MealItems data={data} setData={setData} className="flex-shrink-0 max-w-[300px] overflow-y-auto" />
      <div className="flex flex-col">
        <PassengerList className="mb-4" />
        <div className="flex flex-col">
          <SelectMeal className="p-4" />
        </div>
        <button className='bg-blue-500 border-none hover:bg-blue-600 py-2 my-4 rounded-full text-lg text-white btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home
