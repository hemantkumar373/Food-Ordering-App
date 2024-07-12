import React, { useState } from 'react'
import MenuItems from '../MealItems'
import Selection from '../PassengerList'
import Meals from '../SelectMeal'
import { useAuthContext } from '../../context/AuthContext'

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
      <MenuItems data={data} setData={setData} className="flex-shrink-0 max-w-[300px] overflow-y-auto" />
      <div className="flex flex-col">
        <Selection className="mb-4" />
        <div className="flex flex-col">
          <Meals className="p-4" />
        </div>
      <button className='bg-[#1D9BF0] border-none hover:bg-blue-500 py-2 my-4 rounded-full text-lg text-white btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home
