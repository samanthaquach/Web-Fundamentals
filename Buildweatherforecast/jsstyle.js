$(document).ready(function() {
        $('.form').submit(function(){
            $('.results').html('');
            console.log('checking weather..');
            var citySearch = $('.location_name').val();
            var key = "&&APPID=cb58a8378336f787d5e8e8208e8f9455";
            var url = ("http://api.openweathermap.org/data/2.5/weather?q=" + key);
            var proxyurl = ("http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + key);
            
            
            $.get(proxyurl, function(res){
                
                console.log(Math.floor((res.main.temp * (9/5)-459.67)))
                console.log(res)

            $('.results').append('<h1>' + citySearch + ', ' + res.sys.country + '</h1><h3> Current temp: ' + Math.floor((res.main.temp * (9/5)-459.67)) + '</h3><p>Today\'s High: ' + Math.floor((res.main.temp_max * (9/5)-459.67)) + '</p><p> Today\'s Low: ' + Math.floor((res.main.temp_min * (9/5)-459.67)) + '</p><p>' + res.weather[0].description + '</p>');
            }, 'json');
            
            $('.results').val('');
            return false;
        })
    });
