import Prodouct from "./prodouct";


const ProdouctItems = ({onin , onde , proditem}) => {
        console.log(proditem)
         return ( 
                 <>   
                           
                      <Prodouct onin={onin} onde={onde} proditem={proditem} />                               
                </>
                 );
}
 
export default ProdouctItems;