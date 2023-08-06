import Navbar from "@/scenes/navbar/index.tsx";
import { useState,useEffect } from "react";
import { SelectedPage } from "./shared/types";
 

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);

        setSelectedPage(SelectedPage.Home)
      }
    }
  })

  return (
   <div className='app bg-gray-20'>
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
   </div>
  )
}

export default App
