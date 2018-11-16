import React from "react";

class Form extends React.Component{
  render(){
    return (
      <form className="form" onSubmit={this.props.weatherMethod}>
        <input className="weatin" type="text" name="city" placeholder="Город" />
        <button className="enter">Погода</button>
      </form>
    );
  }
}


export default Form;
