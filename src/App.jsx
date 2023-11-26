
import './App.css'
//import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import { useState } from 'react';
//import DashboardCard from './Components/DashboardCard';
import usersData from './Components/ObjectData';
import Sidebar from './Components/Navbar';

import CardList from './Components/DashboardCard';


function App() {

  const [selectedSkill, setSelectedSkill] = useState('ALL');

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <>
      {/* <Navbar onSkillClick={handleSkillClick}/ > */}
      <Sidebar onSkillClick={handleSkillClick} />

      <div className='flex ml-20 pl-20'>
      {/* <DashboardCard selectedSkill={selectedSkill}/> */}
      <CardList selectedSkill={selectedSkill} />
      <div className='pl-10'>
      {/* <DashboardCard selectedSkill={selectedSkill}/>    */}
      </div>
      </div>

      <Footer/>
    </>
  )
}

export default App
