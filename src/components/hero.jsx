import Prodouct from "./prodouct";

const Hero = () => {
    return ( 
        <>
            <div className="hero-container">
                <div className="title-hero">
                    <h1>newst prodoucts</h1>
                </div>
                <div className="prodoucts-news">
                    <Prodouct/>
                    <Prodouct/>
                    <Prodouct/>
                </div>
            </div>
        </>
     );
}
 
export default Hero;