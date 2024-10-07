import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserCounter() {
    const [userCount, setUserCount] = useState(0);
    
    const fetchUserCount = async () => {
        try{
          const response = await axios.get('http://localhost:8000/UserCounter');
            setUserCount(response.data.count) // formato: { count: num }
        } catch(e){
            console.log('Error: ', e);
        }
    };

    useEffect(() => {
        fetchUserCount(); // Inicializar el conteo al montar el componente
    
        const interval = setInterval(() => {
          fetchUserCount(); // Actualizar el conteo cada 10 segundos
        }, 5000); // 10000 ms = 10 segundos
    
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
   }, []);
    

  return (
    <div>
      <h2>Usuarios registrados: {userCount || 0}</h2>
    </div>
  )
}

export default UserCounter
