
import React from 'react'
import "./Card.scss";


function InProgressCard() {
    const data = [
        
    
            
        {"id":6,
        "description": "Building and integrating UI kits, Implementing responsive design",
        "color":"assets/blueandred.png",
        "numberTwo":2,
        "status":"assets/status.png",
        "image":"assets/groupusers.png",
        "date": "May 8. - Sep 10."},
    
        {"id":7,
        "description": "Implementing UI localization and internationalization, Implementing re…",
        "color":"assets/yellowandgreen.png",
        "numberTwo":2,
        "status":"assets/status.png",
        "image":"assets/user2.png"},
    
        {"id":8,
        "description": "Creating wireframes and mockups ",
        "image":"assets/user.png"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (
                <ul className='listType fontSize'>
                    <li className='itemType '>
                        {element.description}
                    </li>
                    <li className='rowm itemType middle'>
                    <img src={element.color} className='colorType'/>
                   
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

  export default InProgressCard;