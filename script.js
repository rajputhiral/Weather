const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5b4f7ae1fmsh6f7eaad3f894469p1afa82jsn117f6f7b18c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



//getWeather("london")

const rajput=() => {
   // e.preventDefault()
    var city= document.getElementById("city2").value;
    alert(city);
     getWeather(city)

}


/*hiral.addEventListener("click",(e)=>{
    
})/*




/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/