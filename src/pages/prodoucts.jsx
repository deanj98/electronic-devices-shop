// import { useEffect, useState } from "react";
import { useState } from "react";
import Header  from "../components/header";
import ProdouctsItems from "../components/prodouctsItems";
// import Footer from '../components/footer';


const Prodoucts = () => {
  const [proditem ,setProditem ]=useState({
    brand:"asus",
    body:"corei5 , 8Gb RAM , 500Gb ssd",
    price:"$100",
    count:3
  });

    return( 
          <>
              <Header />
              <ProdouctsItems onin={handleincrease} onde={handledecrease} proditem={proditem} />
          </>
     );

  function handleincrease(proditem){
    setProditem(proditem.count++);
  }
  function handledecrease(proditem){
    setProditem(proditem.count--);
  }
}
 
export default Prodoucts;
