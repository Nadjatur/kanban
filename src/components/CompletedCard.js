
import React from 'react'
import "./Card.scss";


function CompletedCard() {
    const data = [
        
    
        {"id":13,
        "description": "Developing and integrating UI forms and validation",
        "status":"assets/status.png",
        "numberTwo":2,
        "image":"assets/user.png",
        "date": "May 8. - Sep 10."},
    
        {"id":14,
        "description": "Creating and implementing UI patterns for the page"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (
                <ul className='listType fontSize colorGreen'>
                    <li className='itemType '>
                        {element.description}
                    </li>
                    <li className='rowm itemType middle'>
                    
                   
                    <img src={element.status}/>{element.numberTwo}
                    
                      
                    </li>
                    <li className='rowCard itemType bottom'><b>{element.date}</b> <img src={element.image} className="picture" /></li>
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

  export default CompletedCard;