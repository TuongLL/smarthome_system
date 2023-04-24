import ReactWeather, { useWeatherBit } from "react-open-weather";

import React from "react";

function Weather() {
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "05c4e371245e4f3986628a4b3b1c6019",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "M", // values are (M,S,I)
  });
  const customStyles = {
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };
  if (data) {
    data.current.temperature.current = "100";
  }
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Ho Chi Minh"
      unitsLabels={{ temperature: `℃`, windSpeed: "Km/h" }}
      showForecast
      theme={customStyles}

    />
  );
}

export default Weather;
