var data = [];
function repo_stats(owner, repo) {
  $.ajax({
    datatype: "json",
    type: "GET",
    headers: {'Authorization':'token 5a6f90a1b19f29b38122d71818cc1dfeb0855c3b'},
    url: "https://api.github.com/repos/" + owner + "/" + repo + "/stats/participation",
    success: function(response) {
      var commits = 0;
      for(var i = 39; i<response.all.length; i++){
        commits += response.all[i];
      };
      data.push(commits);
      console.log(data);
    }
  });
};

function starsearch(user) {
  repos = $.get("https://api.github.com/users/" + user + "/starred?access_token=5a6f90a1b19f29b38122d71818cc1dfeb0855c3b", function() {
    for(var i=0; i<repos.responseJSON.length; i++){
      project = repos.responseJSON[i];
      owner = project.owner.login;
      repo = project.name;
      repo_stats(owner, repo);
    };
  });
};



$(document).ready(function() {
  $("#search").click(function(){
    starsearch($("#user").val());
  })
});