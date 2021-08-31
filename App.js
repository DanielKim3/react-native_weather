import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY ="7af99e4b7fafdaedcf6ecaf1e698db62"

export default class extends React.Component { 
    
      state = {
        isLoading : true
      };
      getWeather = async(latitude, longitude) => {
        const {
          data: {
            main: {temp},
            weather
            }
        } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); //`백틱을 쓰는 이유는 변수를 문자열에다 포함시킬꺼기 때문
        this.setState({isLoading:false, condition:  weather[0].main, temp
      });
    };
      getLocation = async() => {
      try{      
      await Location.requestBackgroundPermissionsAsync();
      console.log(response);      
      const {coords : { latitude, longitude} } = await Location.getCurrentPositionAsync();
      //send to API and get weather
      this.getWeather(latitude, longitude)
      this.state({isLoading:false});
    } catch (error){
      Alert.alert("caa't find you", "So sad");
    }
  };
    componentDidMount(){
      this.getLocation();
    };
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}


