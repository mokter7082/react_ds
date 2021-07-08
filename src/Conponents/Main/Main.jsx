import React,{Component} from 'react'
import './Main.css'

class Main extends Component{
      render(){
          return(
              <div className="main">
                <div className="subject">
                   <select className="select">
                       <option value="">Select</option>
                       <option value="">Bangla</option>
                       <option value="">English</option>
                       <option value="">Math</option>
                       <option value="">Biology</option>
                       <option value="">Physics</option>
                   </select>
                </div>
                <div className="text-area">
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Write Your Questions"></textarea>
                </div>
                <div className="submit-area">
                      <button>Submit</button>
                </div>
              </div>
          )
      }
}
export default Main