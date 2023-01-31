
import React from 'react'
import "./Card.scss";


function TestCard() {
    const data = [
        
    
            
        {"id":12,
        "description": "Creating and implementing UI tests",
        "color":"assets/allcolors.png",
        "number":"+3",
        "numberOne":7,
        "numberTwo":2,
        "message":"assets/message.png",
        "status":"assets/status.png",
        "image":"assets/user.png",
        "date": "May 8. - Sep 10."}
    ]
    const listItems = data.map(
        (element) => {
            return (
                <ul className='listType fontSize'>
                    <li className='itemType'>
                        {element.description}
                    </li>
                    <li className='rowm itemType middle'>
                    <img src={element.color} className='colorType'/>{element.number}
                   
                    <img src={element.message}/>{element.numberOne} <img src={element.status}/>{element.numberTwo}
                    
                      
                    </li>
                    <li className='rowCard itemType bottom '><b>{element.date}</b> <img src={element.image} className="picture" /></li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
  }

  export default TestCard;