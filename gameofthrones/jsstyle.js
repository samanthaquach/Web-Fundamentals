$(document).ready(function() {
    $('img').click(function(){
     var id = $(this).attr("id");
     $.get(`https://anapioficeandfire.com/api/houses/${id}`, function(res){
         console.log(res)
         var string = res.titles[0]
         for (var i = 1; i < res.titles.length; i++) {
             string += ", " + res.titles[i]
         }
         var html = `<ul>

             <li><span>House Detail</span></li>
             <li><h2>Name: ${res.name}</h2></li>
             <li><h3>Words: ${res.words}</h3></li>
             <li><h3>Titles:${string}</h3></li>
             
         </ul>`

         $('#results').html(html);
     }, 'json');
     return false;
    })
 });