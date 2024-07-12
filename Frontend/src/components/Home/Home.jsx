import React, { useState } from 'react'
import MenuItems from '../MealItems'
import Selection from '../PassengerList'
import Meals from '../SelectMeal'

const Home = () => {
  const [data, setData] = useState(null)
  return (
    <div className='flex w-full h-full overflow-x-hidden'>
      <MenuItems data={data} setData={setData} className="flex-shrink-0 max-w-[300px] overflow-y-auto" />
      <div className="flex flex-col">
        <Selection className="mb-4" />
        <div className="flex flex-col">
          <Meals className="p-4" />
        </div>
      </div>
    </div>
  )
}

export default Home