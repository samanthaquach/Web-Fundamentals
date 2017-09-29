var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
function printThings(users){
    for (var i in users){
        console.log(i)
    var people=users[i];
    for(var x in people){
        console.log(people[x].first_name, people[x].last_name)
    }
    }

}
printThings(users);
