var app = angular.module('plunker', []);

app.service("ContactService",function(){
  var uid=0;
  var contacts=[
    {
      "id":1,
      "name":"Ravi",
      "email":"Ravi@gmail.com",
      "phone":"9865011662"
    }]
    
    this.list=function(){
      return(contacts);
    }
    
    this.save = function (contact) {
        if (contact.id == null) {
            contact.id = uid++;
            contacts.push(contact);
         } 
         //else {
        //     //for existing contact, find this contact using id
        //     //and update it.
        //     for (i in contacts) {
        //         if (contacts[i].id == contact.id) {
        //             contacts[i] = contact;
        //         }
        //     }
        // }

    }
})
app.controller("ContactController",function($scope,ContactService){
  $scope.contacts=ContactService.list();
})


