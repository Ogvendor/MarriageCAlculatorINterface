import './Form.css';




function Form() {
    return (
        <div className="body">
          <h1>Kindly checkout</h1>
           
          <div className="App">
           <label>
            BoyName:
             <input type="text" />
           </label> <br/>
          

           <label>
            GirlName:
             <input type="text"/>
            </label><br/>

            <label>
            BoyAge:
             <input type="text"/>
            </label><br/>

            <label>
            GirlAge:
             <input type="text"/>
            </label>

              <input  type="submit" value="Submit" />
            
          
          </div>
        </div>
      
    );
  }
  
  export default Form;
  