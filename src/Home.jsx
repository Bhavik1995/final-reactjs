import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Home = () =>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center main-heading">My Portfolio</h1>
            <p className="text-center sub-heading">Let's get started</p>
        </div>

      
        <div className="container-fluid mb-5">
            <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row gy-6">
                            {
                                Sdata.map((val,index)=>{
                                    return<Card 
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    // description={val.description}
                                    btnName={val.btnName}
                                    visit={val.visit}
                                    icon={val.icon}
                                    />
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
    
        </>
    );
};

export default Home;