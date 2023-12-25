import React, { useEffect,useState } from 'react';
import axios from 'axios';

function HomeScreen(){
    const [progressValue, setProgressValue] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const fetchDataFromDatabase = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos/123');
          const data = response.data;        
          const progress  = 50;
          const total =100;
          setProgressValue(progress );
          setTotalValue(total);
        } catch (error) {
          console.error('Error fetching data from database:', error);
        }
      };
      useEffect(() => {
       
        fetchDataFromDatabase();
      }, []);
    
    return(
      <div className='container'>
        <h1>Report </h1>
      </div>
    );
}
export  default HomeScreen;