$( document ).ready(function() {
      $(".form1").submit(function(){
          console.log('submitted');
          var firstName = $("#first_name").val();
          var lastName = $("#last_name").val();
          var email = $("#email").val();
          var contact = $("#contact").val();

          console.log(firstName, lastName, email, contact);

          $('.table').append("<tr><td>" + firstName +"</td>"+"<td>"+lastName+
          "</td>"+"<td>"+email+"</td>"+"<td>"+contact+"</td>");
          return false;

        
  });
});