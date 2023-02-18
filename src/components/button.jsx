const Button = ({sign , colori ,proditem}) => {
 return ( 
    <>
        <button style={{backgroundColor:{colori}}}>{sign}</button>
    </>     
  );
}
 
export default Button;