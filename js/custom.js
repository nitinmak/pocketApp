
    $(document).ready(function () {

 
// To Read

 var username =   $.session.get("user");

 if(username == null){
  // alert('ds');
 location.href = "index.html";
 }else{

 $('.user_name').html(username);
 }
 
})
  