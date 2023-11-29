import './App.css'
import Footer from "./Components/Footer"
import { useState } from 'react';
//import usersData from './Components/ObjectData';
import Sidebar from './Components/Navbar';
import CardList from './Components/DashboardCard';
import SignIn from './Components/SignIn';

 

function App() {

  const [selectedSkill, setSelectedSkill] = useState('ALL');

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <>
   
   <SignIn/>
   <Sidebar onSkillClick={handleSkillClick} />

      <div className='flex ml-20 pl-20'>
      <CardList selectedSkill={selectedSkill} />
      <div className='pl-10'>
      </div>
      </div>
      <Footer/> 
    </> 
  )
}

export default App
