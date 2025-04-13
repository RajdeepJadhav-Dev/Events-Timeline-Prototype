
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import Events from "./EvenDetailsdata";
import { useNavigate } from "react-router-dom";
import { Router,Route,Routes } from "react-router-dom";
import TrioConclave from "./EVENTS.jsx/TrioConclave";



export default function EventsPage(){

 const navigate = useNavigate();



    return(
        <>
<img className=" animate-slowspin h-96 bg-blue absolute z-30 top-36 left-28 opacity-100" src="/mars_planet_PNG27.png" alt="Mars" />

    <div id="body-container" className="flex flex-col">     
        <div className="timeline-container">
       
        <section class="wrapper">
   
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
</section>
          <VerticalTimeline lineColor="white">
          <div style={{ fontFamily: 'Nulshock', fontSize: "6rem" }} className="text-white text-[110px] leading-[90px] absolute z-50  top-52 ">Event <br></br>Timeline 
  <div className="flex justify-center mt-3">
  <span className="text-white animate-bounce text-[50px] pt-3">↓</span>
</div>
</div>

            {Events.map((event) => (
              <VerticalTimelineElement
                key={event.id}
                contentStyle={{ 
                  background: "transparent", 
                  color: "#ffffff",
                  padding: "12px", 
                  backdropFilter: "blur(8px) saturate(120%)",  // Reduced blur for better readability
                  WebkitBackdropFilter: "blur(8px) saturate(120%)",
                  backgroundColor: "rgba(20, 20, 30, 0.6)",  // Darker & more transparent for a subtle effect
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.1)" // Very soft white border to match the theme
                }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                date={event.date}
                iconStyle={{ 
                  background: "#00abf0", 
                  color: "#ffffff", 
                  width: "40px", 
                  height: "40px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  transform: "translateX(25%)"  
                }}
                className="fade-in"
                
              >
                <h3   style={{ fontFamily: 'Nulshock', fontSize: "1rem" }}className="text-xl font-bold text-center">{event.title}</h3>
                <p className="text-center"    style={{ fontFamily: 'Marcellus' }}>{event.overview.point1}</p>

             
                {event.img && (
                   <img 
                   src={event.img} 
                   alt={event.title}  
                   className="mt-2 rounded-lg w-[80%] h-auto mx-auto"
                 />
                )}

<div className="flex justify-center">
  <button 
    className="mt-4 px-6 py-3 
               bg-[#003366] text-white font-semibold 
               rounded-lg shadow-md 
               transition-all duration-300 
               hover:bg-[#0077b6] 
               hover:scale-105 
               hover:shadow-[0px_0px_10px_#0077b6]
               active:scale-95"
    onClick={() => navigate(`/${event.title}`)}
  >
    View Event
  </button>
</div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
     
    </>
        
    );
}