import React from "react"
import img from '../components/photo.jpg'
import IMG2 from '../components/decor.jpg'
import IMG3 from '../components/haldi.jpg'
import IMG4 from '../components/bride.jpg'
import { Link } from 'react-router-dom';
//import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import IMG5 from '../components/mehandi.jpg'
import IMG6 from '../components/day.jpg'

export default Event=()=>{
    return(
        <div class="card-group">
        <div class="card" >
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">PHOTOGRAPHY</h5>
            <p class="card-text">Photography is a powerful art form that allows us to capture and preserve memories, tell stories, and convey messages. It has become an integral part of our daily lives, and with the rise of digital technology, it has become more accessible than ever before.</p>
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        <div class="card" >
          <img src={IMG2} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">RECEPTION DECOR</h5>
            <p class="card-text">The wedding is the ceremony when guests gather together in a church or event venue and watch the couple say their vows and officially become wedded. Afterward, when those wedding guests head to another venue or area outside of the ceremony space to party, eat, and dance the night away, that is the reception..</p>
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        <div class="card" >
          <img src={IMG3} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">HALDI DECOR</h5>
            <p class="card-text">The color theme for a haldi function is typically centered around bright and cheerful colors, symbolizing joy and prosperity. The most popular color for the haldi ceremony is yellow, as it represents the auspiciousness of turmeric.</p>
            
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        <div class="card-group">
        <div class="card"  >
          <img src={IMG4} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">BRIDE TO BE DECOR</h5>
            <p class="card-text">A bride is a vision of love and hope. She's the embodiment of a dream come true, and her wedding day is the start of a beautiful adventure.” “The bride is a symbol of love and commitment. She's the promise of a lifetime of happiness, and her wedding day is the start of a beautiful journey..</p>
            
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        <div class="card">
          <img src={IMG5} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">MEHANDI DECOR</h5>
            <p class="card-text">Mehndi is the art of applying designs to the skin through the application of pastes made with henna powder on different parts of the body. Henna was most often applied to the hands and feet. Henna was first applied as a means to cool down the body. A dot was applied to the palm of the hands and helped to cool the bod.</p>
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        <div class="card"  >
          <img src={IMG6} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">BIRTHDAY PARTY DECOR</h5>
            <p class="card-text">A birthday party is an occasion to celebrate a person’s birth. It can be a small gathering of friends and family, or a large affair with many guests. A birthday party may be held at home, in a restaurant, or at a public place such as a park. The purpose of a birthday party is to enjoy the company of friends and family.</p>
            {/* <a href="#" class="btn btn-primary">MORE INFO</a> */}
            <Link to="../eventshow">
        <button  type="button" class="btn btn-primary">MORE INFO</button>
      </Link>
          </div>
        </div>
        </div>

      </div>
      
      
    
    
  
  


    )
}
