import React from 'react';
import "./Card.css";

const Card = ({data}) => {

    return (
        <>
        <div class="row justify-content-around">
        <div class="card-group">
            {data.map((ele)=>{
                return (
                    <>
                    <div class="col">
                        
                        <div class="card h-75">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-body-secondary">{ele.title}</h6>
                                <h4 class="card-title">{ele.price}</h4>
                                <hr />
                                <h6 className="card-title">{ele.user}</h6>
                                <h6 className="card-title">{ele.storage}</h6>
                                <h6 className="card-title">{ele.project1}</h6>
                                <h6 className="card-title">{ele.community}</h6>
                                <h6 className="card-title">{ele.project2}</h6>
                                <h6 className="card-title">{ele.support}</h6>
                                <h6 className="card-title">{ele.subdomain}</h6>
                                <h6 className="card-title">{ele.report}</h6>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary">Button</button>
                            </div>
                        </div>
                    </div>  
                    
                    </>
                )
            })}
        </div>
        </div>
        
        </>
    );
};

export default Card;