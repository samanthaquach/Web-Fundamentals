$(document).ready(function() {
        $('.form').click(function(){
            console.log('checking weather..');
            var search = $('.location_name').val();
            
            $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=` + search + `&APPID=cb58a8378336f787d5e8e8208e8f9455s`, function(data){
                console.log(Math.floor((data.main.temp * (9/5)-459.67)))
                console.log(data)

            $('.results').append('<h1>' + search + ', ' + data.sys.country + '</h1><h3> Current temp: ' + Math.floor((data.main.temp * (9/5)-459.67)) + '</h3><p>Today\'s High: ' + Math.floor((data.main.temp_max * (9/5)-459.67)) + '</p><p> Today\'s Low: ' + Math.floor((data.main.temp_min * (9/5)-459.67)) + '</p><p>' + data.weather[0].description + '</p>');
            }, 'json');
            
            $('.results').val('');
            return false;
        })
    });
