
import React from 'react'
import "./Card.scss";


function ReadyCard() {
    const data = [
        
    
            
        {"id":9,
        "description": "Ensuring UI consistency across different platforms and devices",
        "color":"assets/blue.png",
        "date": "May 8. - Sep 10."},
    
        {"id":10,
        "description": "Creating and implementing UI guidelines and best practices",
       
        "date": "May 8."},
    
        {"id":11,
        "description": "Developing and integrating UI icons and images"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (
                <ul className='listType fontSize'>
                    <li className='itemType'>
                        {element.description}
                    </li>
                    <li className='rowm itemType middle'>
                    <img src={element.color} className='colorType'/>
                   
                    <img src={element.message}/> <img src={element.status}/>
                    {element.numberTwo}
                      
                    </li>
                    <li className='rowCard itemType bottom'><b>{element.date}</b><img src={element.image} className="picture" /> </li>
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

  export default ReadyCard;