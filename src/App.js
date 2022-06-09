
import './App.css';
import { Component } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import Message from './components/Message/Message';


class App extends Component{
  state={
    amdhp:100,
    intelhp:100,
    message:'',
  }

  intelDamage=()=>{
    if(this.state.intelhp>0){
    let damage = this.state.intelhp-10
    let message = this.state.message="Amd attacks"
    this.setState({intelhp:damage,messgae:"Amd attacks"})
    if(damage === 0){
    message = this.state.message="Intel has fallen" 
    this.setState({messgae:"intel has fallen"})
  }
}

  }

  amdDamage=()=>{
    if(this.state.amdhp>0){
    let damage = this.state.amdhp-10
    let message = this.state.message="Intel attacks" 
    this.setState({amdhp:damage,messgae:"Intel attacks"})
    if(damage === 0){
    message = this.state.message="Amd has fallen" 
    this.setState({messgae:"Amd has fallen"})
  }
}
  }




render(){
  return(
    <div className='App'>
      <div className='techs'>

      <Pokemon hp={this.state.amdhp} img={"https://seeklogo.com/images/A/amd-logo-427958DBFB-seeklogo.com.png"} handleClick={this.intelDamage} />
      
      
      <Pokemon hp={this.state.intelhp} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png"} handleClick={this.amdDamage} />
      </div>

      {this.state.message}
    </div>
  )
}
}


export default App;
