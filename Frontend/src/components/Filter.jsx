import React from 'react'
import useData from '../hooks/useData'
import { Button } from '@mui/material'

const Filter = ({ onFilter }) => {
    const url = 'api/data'
    const labels = useData(url).labels;
    console.log(labels);
    return (
        <div className='labels shadow-md'>
            <Button
                variant="outlined"
                onClick={() => onFilter(null)}
                className="labelItem text-gray-600 hover:bg-white-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white -500 focus:ring-opacity-50"
            >
                All
            </Button>
            {labels ? labels.map((item) => (
                <Button
                    variant="outlined"
                    key={item.id}
                    onClick={() => onFilter(item.label)}
                    className="labelItem"
                >
                    {item.label}
                </Button>
            )) : "Loading..."}
        </div>
    )
}

export default Filter