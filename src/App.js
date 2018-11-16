import React from "react";
import Info from "./comp/info";
import Form from "./comp/form";
import Weather from "./comp/weather";
import NotFound from "./comp/not";

const API_KEY = "be5220a340da94bb96bf35c164dd2c0c";
// Ваш ключ, который можно получить зарегестрировавшить на OpenWeatherMap


class App extends React.Component {

  state = {
    temp: undefined,
    //clouds: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    wind: undefined,
    atmo: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
        try {
          const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
          const data = await api_url.json();
          let sunset = data.sys.sunset*1000;
          let sunrise = data.sys.sunrise*1000;

          let rise = new Date();
          let date = new Date();

          date.setTime(sunset);
          rise.setTime(sunrise);
          var sunrise_d = rise.toLocaleTimeString();
          var sunset_d = date.toLocaleTimeString();
          console.log(data);

          this.setState({
            temp: Math.round(data.main.temp),
            //clouds: data.weather.main,
            city: city,
            country: data.sys.country,
            sunrise: sunrise_d,
            sunset: sunset_d,
            wind: data.wind.speed,
            atmo: data.main.pressure,
            error: ""
          });
        } catch (e) {
          this.setState({
            error: "NotFound"
          });
        }
      }
    }

  render(){
    return (
      <div className="adaptive">
        <Info />
        <Form weatherMethod={this.gettingWeather} />

        {this.state.error  &&
            <NotFound />
        }

        <Weather
          temp={this.state.temp}
          city={this.state.city}
          clouds={this.state.clouds}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          wind={this.state.wind}
          atmo={this.state.atmo}
          error={this.state.error}
        />

      </div>
    );
  }
}

export default App;
