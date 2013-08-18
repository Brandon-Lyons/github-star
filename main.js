function starsearch(user) {
  repos = $.get("https://api.github.com/users/" + user + "/starred", function() {
    console.log(repos.responseJSON);
  })
};

$(document).ready(function() {
  $("#search").click(function(){
    starsearch($("#user").val());
  })
});