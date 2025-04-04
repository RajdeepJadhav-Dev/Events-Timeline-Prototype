import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import Events from "./EvenDetailsdata";
import { useNavigate } from "react-router-dom";
import { Router,Route,Routes } from "react-router-dom";
import TrioConclave from "./EVENTS.jsx/TrioConclave";
import EventsPage from "./EventsPage";
import AstroGazing from "./EVENTS.jsx/AstroGazing";
import SateliteWorkshop from './EVENTS.jsx/SateliteWorkshop';
import SpaceDay from './EVENTS.jsx/SpaceDay';
import ModelRocketry from './EVENTS.jsx/ModelRocketry';
import IsroStart from './EVENTS.jsx/IsroStart';



export default function App() {

  
  return (
    <>
     
      
        <Routes> 
          <Route path="/" element={<EventsPage />} />
          <Route path="/TRIO-CONCLAVE 2024" element={<TrioConclave />} />
          <Route path="/Astro-Gazing 2024" element={<AstroGazing/>}></Route>
          <Route path='/Satellite Development and Model Rocketry Workshop' element={<SateliteWorkshop/>}></Route>
          <Route path='National Space Day 2024 Celebration' element={<SpaceDay/>}></Route>
          <Route path='Model Rocketry Workshop of Somaiya School' element={<ModelRocketry/>}></Route>
          <Route path='ISRO START Programme 2024 Inauguration' element={<IsroStart/>}></Route>
        </Routes>
 
    </>
  );

}
