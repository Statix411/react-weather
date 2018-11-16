import React from "react";


class Weather extends React.Component{
  render(){
    return (
      <div>
        { this.props.city &&
          <div className="info">
            <p className="city">{this.props.city}</p>
            <p className="temp">{this.props.temp}</p>
            <p className="wind">Ветер: {this.props.wind} м/с</p>
            <p className="sunr">Восход: {this.props.sunrise}</p>
            <p className="suns">Заход: {this.props.sunset}</p>
            <p className="atmo">Давление: {this.props.atmo}</p>

          </div>
        }

      </div>
    );
  }
}


export default Weather;
