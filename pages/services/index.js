import React, {useState, useEffect} from "react";

const HomePage = () =>{
    const imagesList = [
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',
        'images/baby.jpg',  
    ]

    return (
        <>
            <div className="container">
                <div style={{textAlign:"center", margin:1}}>
                    <h1>My Photo Gallery!!</h1>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', margin:50 }}>
                    {imagesList.map((item, index) => (
                        <img key={index} src={item} style={{ width: 200, height: 200, padding: 10 }} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;