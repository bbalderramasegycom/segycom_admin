
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

interface Props {
    color: string,
    bgcolor: string,
    title: string,
    dataDb: number[],
}

export const LineChart = ({color, bgcolor, title, dataDb}: Props) => {
   
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
      );
      
    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top' as const,
        },
        title: {
        display: true,
        text: title,
        },
    },
    };
    
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const data = {
    labels,
    datasets: [
        {
            label: 'Altas',
            data: dataDb,
            borderColor: color,
            backgroundColor: bgcolor,
        },
        
    ],
    };
   
    return (
        <>
          <Line options={options} data={data} />
            
        </>
    )
}
