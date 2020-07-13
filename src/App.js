import React , {Component} from 'react';
import Box from './Component/Box/Box';
import Result from './Component/Result/Result'
import Message from './Component/resultF/Message'
import 'tachyons'

const initialState={
   route:'idle',
    attempts:0,
    lucky_attempts:0,
    wrong_attempts:0,
    variable:between(0,100),
    num:0
}
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}



class App extends Component {
 constructor(){
    super();
    this.state=initialState
    }

onClickChange=(route)=>{
  if(route==='ansa1'){
    this.setState({route:'ans'})
    this.setState({lucky_attempts:this.state.lucky_attempts+1})
    this.setState({num:1})

  }
  else if(route==='ansa'){
    this.setState({route:'ans'})
    this.setState({wrong_attempts:this.state.wrong_attempts+1})
     this.setState({num:1})

  }
   if(route==='ansb1'){
    this.setState({route:'ans'})
    this.setState({lucky_attempts:this.state.lucky_attempts+1})
 this.setState({num:2})
  }
  else if(route==='ansb'){
    this.setState({route:'ans'})
    this.setState({wrong_attempts:this.state.wrong_attempts+1})
     this.setState({num:2})
  }
   if(route==='ansc1'){
    this.setState({route:'ans'})
    this.setState({lucky_attempts:this.state.lucky_attempts+1})
    this.setState({num:3})
  }
  else if(route==='ansc'){
    this.setState({route:'ans'})
    this.setState({wrong_attempts:this.state.wrong_attempts+1})
     this.setState({num:3})
  }
  else if(route==='idle'){
    this.setState({route:route})
    this.setState({variable:between(0,100)})
    this.setState({attempts:this.state.attempts+1})
  }
}






  render(){
  return (
    <div>
    {this.state.attempts<11?
    this.state.route==='idle'?
  <Box onClickChange={this.onClickChange} attempts={this.state.attempts} variable={this.state.variable} num={this.state.num} la={this.state.lucky_attempts} wa={this.state.wrong_attempts} />:
  <Result onClickChange={this.onClickChange} attempts={this.state.attempts} variable={this.state.variable} num={this.state.num} la={this.state.lucky_attempts} wa={this.state.wrong_attempts}/>
:
<div>
<Message la={this.state.lucky_attempts}/>
</div>
}
</div>

    );
}
}

export default App;
