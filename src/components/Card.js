
import React from 'react'
import "./Card.scss";


function Card() {
    const data = [
        
    
            
             {
                 "id":1,
                 "description": "Designing and implementing UI components",
                 "date": "Jan 3."
             },
         
             {"id":2,
             "description": "Creating and implementing design system components",
             "message":"assets/message.png",
             "numberOne":7,
             "numberTwo":2,
             "status":"assets/status.png",
             "image":"assets/user.png",
             "date": "May 8. - Sep 10."},
         
             {"id":3,
             "description": "Implementing UI animations and transitions"
             },
         
         
             {"id":4,
             "description": "Developing and integrating UI libraries and frameworks",
             "color":"assets/allcolors.png",
             "number":"+3",
             "numberOne":7,
             "numberTwo":2,
             "message":"assets/message.png",
             "status":"assets/status.png",
             "image":"assets/user.png",
             "date": "May 8. - Sep 10."},
         
         
             {"id":5,
             "description": "Designing and implementing user flows and interactions",
             "color":"assets/allcolors.png",
             "number":"+3",
             "numberOne":7,
             "numberTwo":2,
             "message":"assets/message.png",
             "status":"assets/status.png",
             "image":"./assets/user.png",
             "date": "May 8. - Sep 10."},
             
    ]
    const listItems = data.map(
        (element) => {
            return (
                
                <ul className='listType fontSize '>
                    <li className='itemType '>
                        {element.description}
                    </li>
                    <li className='rowm itemType middle'>
                    <img src={element.color} className='colorType'/>{element.number}
                   
                    <img src={element.message}/>
                    {element.numberOne} <img src={element.status}/>{element.numberTwo}
                    
                      
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

  export default Card;