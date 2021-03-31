
//Loading Functions
var myVar;
function showPage() {
  $('#loading').css('display', 'none');
  $('#page').css('display', 'block');
}
function loadPage() {
  myVar = setTimeout(showPage, 1000);
}


//Local Storage Function
function onsubmitForm() {
  if (typeof(Storage) !== 'undefined') {
    var email = $('#emailAddress').val();
    localStorage.setItem('email', email);

  }
  else {
    alert('Maaf, browser anda tidak support local storage');
  }
}

courses.forEach(function(course){
  $('#program-courses').append('<div class="col-md-4"><div class="card"><img src="'
  + course.picture + '" class="card-img-top" alt="'
  + course.name + '"><div class="card-body"><h5 class="card-title">'
  + course.name + '</h5><p class="card-text">'
  + course.details + '</p></div></div></div>');
});