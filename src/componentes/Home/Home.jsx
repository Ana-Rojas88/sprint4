import React from 'react'
import Footer from '../footer/Footer'
import './style.scss'

const Home = () => {
  return (
    <>
    <header className='header'>
        <div className='title'>
            <span>DELIVER TO</span>
            <p>882 Well St, New-York</p>
        </div>
        <nav className='navbar'>
         <div className='navbar__img'>
            <img className='imgMenu' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRgBoWGw5JvdDBsoZEB6dWVVUegC2yv_XuCRGZiMOFoHUCyj_J" alt="Menu Special Todays" />
            <img className='imgDelivery' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAa7X2qPss8Zlko3ZF1GsEs9lglJ7aWNSFxh8eG8HbAf-doS32" alt="Delivery" />
            </div>  
            <h3>Restaurants and cafes</h3> 
            <div className='menuFood'>
              <button>All</button>
              <button>Fast food</button>
              <button>Pizza</button>
            </div>
        </nav>
    </header>
    <main className='main'>
     <article className='card'>
      <img src="https://www.imagelato.com/images/article-cover-restaurant-floor-plan-1a89418b-1024w.jpg" alt="" />
      <div className='info'>
        <h3>Glamour Kafe</h3>
        <span>⭐⭐⭐⭐⭐</span>
        <p>Work time 09:00-21:00</p>
        <h6>Before you 13$</h6>
      </div>
     </article>
     <article className='card'>
      <img src="https://www.imagelato.com/images/article-cover-restaurant-floor-plan-1a89418b-1024w.jpg" alt="" />
      <div className='info'>
        <h3>Glamour Kafe</h3>
        <span>⭐⭐⭐⭐⭐</span>
        <p>Work time 09:00-21:00</p>
        <h6>Before you 13$</h6>
      </div>
     </article>
     <article className='card'>
      <img src="https://www.imagelato.com/images/article-cover-restaurant-floor-plan-1a89418b-1024w.jpg" alt="" />
      <div className='info'>
        <h3>Glamour Kafe</h3>
        <span>⭐⭐⭐⭐⭐</span>
        <p>Work time 09:00-21:00</p>
        <h6>Before you 13$</h6>
      </div>
     </article>
     
    </main>
  <Footer/>
    </>
  )
}

export default Home