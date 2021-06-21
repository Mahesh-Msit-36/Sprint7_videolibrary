import React, { Component } from 'react'




export class Home extends Component {  
  render() {  
      return ( 

        <div>
                         
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <br/>
       
      
        
        <div class="carousel-inner">
          <div class="carousel-item active">
                        <img src="assets/8.jpg" alt="Los Angeles" style={{width:'100%', height:'450px' }} />
                      </div>
      
                      <div class="carousel-item">
                        <img src="assets/1.jpg" alt="Chicago" style={{width:'100%',height:'450px' }} />
                      </div>
                    
                      <div class="carousel-item">
                        <img src="assets/3.jpg" alt="New york" style={{width:'100%', height:'450px' }} />
                      </div>
      
                      <div class="carousel-item">
                        <img src="assets/4.jpg" alt="New york" style={{width:'100%',height:'450px' }} />
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
      
                      <div class="carousel-item">
                        <img src="assets/5.jpg" alt="New york" style={{width:'100%',height:'450px' }} />
                      </div>
                      <div class="carousel-item">
                        <img src="assets/6.jpg" alt="New york" style={{width:'100%',height:'450px' }} />
                      </div>
                      <div class="carousel-item">
                        <img src="assets/7.jpg" alt="New york" style={{width:'100%',height:'450px' }} />
                      </div>
                    </div>     
			            <hr/>
              </div> 
        
      <div> 
      <p class="text" align="center"><h1>
            ABOUT MSIT
          <div/>
          <p class="text" align="justify"><h5>
          
          MSIT (MS in IT or Master of Science in Information Technology) is a two year post graduate program in Computer Science started in 2001.
          MSIT is an innovative multi-university interdisciplinary post-graduate program. 
          MSIT program is being offered by “Consortium of Institutions of Higher Learning” (CIHL),formed by the Universities.
          Under MOU with CMU, some Carnegie Mellon Researchers are providing guidance on the course content.
          MSIT is currently offered at International Institute of Information Technology (IIIT-H), 
          Hyderabad, School of IT, Jawaharlal Nehru Technological University Hyderabad (JNTUH), 
          College of Engineering, Jawaharlal Nehru Technological University Kakinada (JNTUK), 
          College of Engineering, Jawaharlal Nehru Technological University Anantapur (JNTUA) and Sri Venkateswara University Tirupati (SVU).	
          <br/>
          <br/>
          MSIT has been designed to develop technically competent, highly productive, and 
          self motivated professionals in tune with the demands of an ever changing market.
          The program aims to groom not only IT professionals, but also experts from other domains 
          offering a unique and comprehensive program that exposes the learners to some of the finest 
          universities both in India and abroad. At the end of their stint with MSIT, they will be armed as
           they are with new found confidence and vigor,step out into the world to further practice the skills 
           they have learnt in this program.</h5></p>
           </h1></p>
      
          </div> 
          
        </div>
      

      )   
    }
}
export default Home;