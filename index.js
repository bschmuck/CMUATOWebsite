var pages = ["#home", "#brothersPage", "#alumniPage", "#aboutPage", "#contactPage"];


var showPage = function(selectedPage) {
	pages.forEach(function(page) {
		if(page != selectedPage) {
			$(page).hide();
		} else {
			$(page).show();
		}
	});
}

jQuery(document).ready(function(){ 
	jQuery("#gallery").unitegallery(); 
}); 

$('#eventlist').gCalReader({

  // Public Google Calendar
  calendarId:'q8774hmduqesk7mjpt7c5iq530@group.calendar.google.com',

  // Google API KEY
  apiKey:'801068891742-l65t1tadp02v7dcv69dgqn3fo4eulhl8.apps.googleusercontent.com',


  // <a href="http://www.jqueryscript.net/time-clock/">date</a> format
  dateFormat: 'LongDate',

  // error message
  errorMsg: 'No events in calendar',

  // maximum events
  maxEvents: 25,

  // future-events filter
  futureEventsOnly: true,

  // descending sort order
  sortDescending: true

});

$("#homeSelect").on("click", function() {
	showPage("#home");
});

$("#brothersSelect").on("click", function() {
	showPage("#brothersPage");
});

$("#alumniSelect").on("click", function() {
	showPage("#alumniPage");
});

$("#aboutSelect").on("click", function() {
	showPage("#aboutPage");
});

$("#contactSelect").on("click", function() {
	showPage("#contactPage");
});