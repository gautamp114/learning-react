import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';

const HomePage = () =>{
    const [servicesList, setServicesList] = useState();
    const router = useRouter();

    const goToServiceWithId = (id) => {
        router.push({
            pathname: "services/list",
            query: {id:id}
        });
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('https://5456-2600-8803-950d-fd00-68d7-1ec2-4845-a81d.ngrok-free.app/api/services');
                const data = await response.json();
                setServicesList(data);
            }catch (error) {
                console.error('Error fetching images:', error)
            }

        };
        fetchServices();
    }, [])

    return (
        <>
            <div className="container">
                <div style={{textAlign:"center", margin:1}}>
                    <h1>My Photo Gallery!!</h1>
                </div>

                <div>
                    {servicesList ?.map((item, index) => (
                        <button key={index} onClick={() => goToServiceWithId(item.id)}>{item.name}</button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;