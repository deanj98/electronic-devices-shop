import Header from '../components/header';
import Hero from '../components/hero';
import FilterSide from '../components/FilterSide';
import ProdouctsItems from '../components/prodouctsItems';
// import { useState } from 'react';



export default function Home() {

  // const [nightmode , setNightmode]= useState(
  //   {bodytext : "night mode" , bodycolor: "black" , bgcolor:"#b3d618"}
  // );


  return(
    <>
        <Header 
          // nightmode={nightmode}
          // bgcolor={nightmode.bgcolor}
          // onbgcolor={handletogglenight}
          // bodycolor={nightmode.bodycolor} 
          // bodytext={nightmode.bodytext}
         />
        <div
        //  style={{backgroundColor:`${nightmode.bgcolor}` , color:`${nightmode.bodycolor}`}} 
         className="whole-body">

            <div className="body-section">
             <Hero/>
              <ProdouctsItems/>
            </div>
            <FilterSide/>

        </div>

    </>
  )
//   function handletogglenight(){
//     console.log("click")
//     setNightmode.bodytext("light mode");
//     setNightmode.bodycolor("white");
//     setNightmode.bgcolor("black")

// }
}