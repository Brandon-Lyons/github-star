var numbers = [];
var names = [];
var counter = 0;
function counter_decrease(){
  counter--;
  if(counter <= 0){
    //final array combine
  }
}
function repo_stats(owner, repo) {
  counter++;
  $.ajax({
    datatype: "json",
    type: "GET",
    headers: {'Authorization':'token 9ddbc0b8610772cbec22be1860332cb928e32d14'},
    url: "https://api.github.com/repos/" + owner + "/" + repo + "/stats/participation",
    complete: function(data) {
      add_commits(data.responseJSON.all);
      counter_decrease();
    }
  });
};

function starsearch(user) {
  counter++;
  $.ajax({
    datatype: "json",
    type: "GET",
    headers: {'Authorization':'token 9ddbc0b8610772cbec22be1860332cb928e32d14'},
    url: "https://api.github.com/users/" + user + "/starred",
    complete: function(data){
      parser(data.responseJSON);
      counter_decrease();
    }
  });
  //   for(var i=0; i<repos.responseJSON.length; i++){
  //     project = repos.responseJSON[i];
  //     owner = project.owner.login;
  //     repo = project.name;
  //     repo_stats(owner, repo);
  //   };
  // });
};
function add_commits(array){
  var commits = 0;
  for(var i = 39; i<array.length; i++){
    commits = commits + array[i];
  };
  numbers.push(commits);
  console.log(numbers);
};

function parser(data){
  for (var i = 0; i < data.length; i++){
    owner = data[i].owner.login;
    repo = data[i].name;

    repo_stats(owner, repo);
  }

}

$(document).ready(function() {
  $("#search").click(function(){
    starsearch($("#user").val());
  })
});