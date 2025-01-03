/**
 * Phần thử thách 1: GET thời tiết hiện tại cho thành phố của bạn với 
 * Open Weather API và ghi vào console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * LƯU Ý: Nó nói rằng bạn cần phải bao gồm `appid` trong query, nhưng bạn có thể bỏ qua điều này lần này
    
 * Phần thử thách 2: thay đổi đơn vị thành một cái gì đó dễ hiểu hơn so với Kelvin 😂
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=salt lake city&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))
    
/**

{
	coord: {
		lon: -111.8911,
		lat: 40.7608
	},
	weather: [{
		id: 803,
		main: "Clouds",
		description: "broken clouds",
		icon: "04d"
	}],
	base: "stations",
	main: {
		temp: 299.87,
		feels_like: 299.22,
		temp_min: 295.22,
		temp_max: 303,
		pressure: 1005,
		humidity: 25
	},
	visibility: 10000,
	wind: {
		speed: 2.24,
		deg: 299,
		gust: 4.92
	},
	clouds: {
		all: 75
	},
	dt: 1621458383,
	sys: {
		type: 2,
		id: 2032870,
		country: "US",
		sunrise: 1621425998,
		sunset: 1621478505
	},
	timezone: -21600,
	id: 5780993,
	name: "Salt Lake City",
	cod: 200
}

 */