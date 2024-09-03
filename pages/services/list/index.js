import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const servicesDetail = () =>{
    const [allSpecificServices, setallSpecificServices] = useState();

    const router = useRouter();
    const id = router?.query?.id;

    const fetchSpecificService = async() =>{
        try{
            const response = await fetch(`https://5456-2600-8803-950d-fd00-68d7-1ec2-4845-a81d.ngrok-free.app/api/services/${id}/lists/`);
            const data = await response.json();

            setallSpecificServices(data);
        }catch (error){
            console.error("Unable to fetch the services",error);
        }
    };

    useEffect(() =>{
        fetchSpecificService();
    }, []);

    return(
        <>
            <div>
                <ul>
                    {allSpecificServices?.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default servicesDetail;