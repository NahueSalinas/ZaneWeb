import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserCounter() {
    const [userCount, setUserCount] = useState('0');
    const fetchUserCount = async () => {
        try {
            const response = await axios.get('http://localhost:8000/UserCounter');
            setUserCount(response.data.data); // Asegúrate de acceder al valor de count
            console.log('User Count Response:', JSON.stringify(response.data.data, null, 2));
            console.log(response.data);
        } catch (e) {
            console.log('Error:', e);
        }
    };

    useEffect(() => {
        fetchUserCount(); // Inicializar el conteo al montar el componente

        const interval = setInterval(() => {
            fetchUserCount(); // Actualizar el conteo cada 5 segundos
        }, 5000); // 5000 ms = 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className='usuarios-registrados'>
            <h2>Usuarios registrados: {userCount || 0}</h2>
        </div>
    );
}

export default UserCounter;
