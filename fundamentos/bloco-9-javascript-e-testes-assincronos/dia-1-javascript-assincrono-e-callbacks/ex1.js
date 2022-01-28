const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => setTimeout(() => console.log(callback), messageDelay());

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) => `It is currently ${toFahrenheit(temperature())}ºF at Mars`;

const greet = (temperature) => `Hi there! Curiosity here. Right now is ${temperature()}ºC at Mars`;

// sendMarsTemperature(getMarsTemperature()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature)); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet(getMarsTemperature)); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
