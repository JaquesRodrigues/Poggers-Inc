import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import '../index.css'

function ChartsPage({ chartsData }) {
    return (
        <div className='my-0 mx-auto chart w-[700px]'>
            <Bar data={chartsData} />
        </div>
    )
}

export default ChartsPage