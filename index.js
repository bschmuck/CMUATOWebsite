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
$('#eventlist').gCalReader({
  calendarId:'q8774hmduqesk7mjpt7c5iq530@group.calendar.google.com',
  apiKey:'AIzaSyCH7F6ChOHVASIiOY6QU4KPCVxjLufu0Jc',
  dateFormat: 'LongDate',
  errorMsg: 'No events in calendar',
  maxEvents: 25,
  futureEventsOnly: true,
  sortDescending: false
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