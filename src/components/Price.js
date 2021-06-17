const Price = () => {
    return ( 
      <div style={{paddingTop:'45px'}}>
          <h1 style={{textAlign:'center',fontSize:'35px',color:'gray' }}>Best Price to Trade</h1>
          <div style={{paddingTop:'45px',display:'flex',justifyContent:'space-around'}}>
               <div>
               <h1 style={{color:'darkcyan'}}>0.58 %</h1>
               <p >5 Mins</p>
               </div>
               <div>
               <h1 style={{color:'darkcyan'}}>3.58 %</h1>
               <p>10 Mins</p>
               </div>
              <div>
              <h1 style={{fontSize:'55px'}}>₹ 29,90,697</h1>
              </div>
               <div>
               <h1 style={{color:'darkcyan'}}>1.12 %</h1>
               <p>1 Hour</p>
               </div>
              <div>
              <h1 style={{color:'darkcyan'}}>1.58 %</h1>
               <p>12 Mins</p>
              </div>
          </div>
      </div>
     );
}
 
export default Price;