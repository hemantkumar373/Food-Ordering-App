import MenuItem from './Meal'
import useData from '../hooks/useData'
import Filter from './Filter'
import Meal from './Meal'

const MealItems = ({ data, setData }) => {
  const url = 'http://localhost:3000/api/data'
  const meals = useData(url).meals
  const handleData = (labelName) => {
    setData(labelName)
  }
  const filtered = data ? meals.filter(meal => meal.labels.includes(data.toLowerCase())) : meals;
  return (
    <div className='flex flex-col ml-4'>
      <Filter onFilter={handleData} />
      <div>
        {
          filtered ? filtered.map((meal) => {
            return <Meal key={meal.id} meal={meal} />
          }) : "Loading..."
        }
      </div>
    </div>
  )
}

export default MealItems
