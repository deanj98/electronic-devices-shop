import Button from "./button";
import '../css/prodouct.css';


const Prodouct = ({onin , onde ,  proditem  }) =>{
    return ( 
        <>
            <div className="prodouct-container">
                <div className="top-prodouct">
                    <i className="fa fa-heart like-prodouct" aria-hidden="true"></i>
                    <img src="sss.jpg" alt="" />
                </div>
                <div className="buttom-prodouct">
                    <div className="title-prodouct"><h5>BRAND: {proditem.brand} </h5> </div>
                    <div className="text-prodouct"><p>{proditem.body}</p></div>
                    <div className="price-prodouct"><h5>price:</h5><p>{proditem.price}</p></div>
                    <div className="counts-prodouct">
                            <div className="count-prodouct">
                                <h3 className="count">count : {proditem.count}</h3>
                                
                                <input className="input-pro" type="text" name="count" placeholder="0"/>
                                
                            </div>
                            <div className="button-count">
                                <Button  onClick={()=>onde()} sign="-" onin={onin} colori="red"/>        
                                <Button  onClick={()=>onin()}  sign="+" onde={onde} colori="green"/> 
                            </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Prodouct;