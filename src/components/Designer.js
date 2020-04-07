
import React, {Component} from 'react';
import "../App.css"

class Designer extends Component {
    constructor(){
        super();
        this.state = {
            password : "",
            email : "",
            message : "",
            formError: false
        }
    }
  
    getPwd = (e) =>{
      let pwd = e.target.value; 
      this.setState({
          password: pwd
      });
      console.log(this.state.password);
    }
    
    
    getEmail = (e) =>{
      let userEmail = e.target.value; 
      //the most important thing is that we use a RegEx
      //in order to manage the input of the email
      //at least we can get a some what valid email
      if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
        this.setState({
          email: userEmail
      });
        }else{
          this.setState({
            email: ""
        });
        console.log("Incorrect Email, must match Expression");
      }
    
      console.log(this.state.email);
    }
  
    
    getDescription = (e) =>{
      let userMessage = e.target.value; 
      this.setState({
          message: userMessage
      });
      console.log(this.state.message);
    }
    //send the form
    submitForm = (e) =>{
      e.preventDefault();
  
      if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
       this.setState({
          formError: true
       })
         return false;
      }else{
          this.setState({
              formError: false
           })
          console.log(`UserData: {
              Username: ${this.state.pwd},
              Email: ${this.state.email},
              Message: ${this.state.message}
          }`)
      
      
          console.log("form sent")
      
      }
   
    }
  
    render() {
  
    
  
      return (
          <form class="form-all">
            {/* I am just sending a basic error message */}
                {this.state.formError &&
                  <p className="error">
                      Fill all the input fields please.
                  </p>
                }
                
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Your valid email" onChange={this.getName} />
                </div>
                <div>
                  <label htmlFor="pwd">Password</label>
                  <input type="text" name="name" placeholder="Your valid password" onChange={this.getPwd} />
                </div>
                <div>
                  <label htmlFor="name">How much time can you spend on Naya projects per week?
</label>
                  <input type="number" onChange={this.getDescription} maxLength="450"></input>
  
                </div>
                <div>
                    <label htmlFor="material">Which of the following best describes you?
</label>
                    <select>
                        <option value="1">Furniture Designer
</option>
                        <option value="2">Architect</option>
                        <option selected value="3">Interior Designer</option>
                        <option value="4">Industrial Designer</option>
                        <option value="5">Designer Maker</option>
                        <option value="6">Other</option>
                    </select>
                </div>
                <div>
                  <label htmlFor="location">Education level/type</label>
                  <textarea onChange={this.getDescription} maxLength="450"></textarea>
                </div>
                <div>
                  
                  <button type="submit" name="submit" value="Send" onClick= {this.submitForm}>Submit</button>
  
                </div>
                
              </form>
      );
    }
  }
  
  export default Designer;
