var pages = ["#home", "#brothersPage", "#alumniPage", "#aboutPage", "#contactPage"];
var images = ["ato1.jpg", "ato2.jpg", "ato3.jpg", "ato1.jpg", "ato2.jpg", "ato3.jpg"];

var brothers = [
	{
		"name" : "John Doe",
		"title" : "President",
		"image" : "images/ato3.jpg"
	},
	{
		"name" : "John Doe",
		"title" : "President",
		"image" : "images/ato3.jpg"
	},
	{
		"name" : "John Doe",
		"title" : "President",
		"image" : "images/ato3.jpg"
	},
	{
		"name" : "John Doe",
		"title" : "President",
		"image" : "images/ato3.jpg"
	}
];

$(document).ready(function() {
	images.forEach(function(image) {
		$("#photosDiv").append(
			'<div class="col-xs-6 col-md-4"><a href="#" class="thumbnail"><img src="images/' + image + '" style></a></div>');
	});	

	brothers.forEach(function(brother) {
		$("#officersList").append('<div class="col-xs-12 memberDiv" style="background-color:#4A90E2;height:125px;border-radius:100px;box-shadow: inset 0px -1px 5px #000;"><a href="#" class="brotherThumbnail thumbnail col-xs-2"><img class="brotherImage" style="width: 125px;height: 125px;margin-left:-20px;margin-top:-3.5px;" src="' + brother.image + '"></a><div class="col-xs-3"><h3>' + brother.name + '</h3><h4>' + brother.title + '</h3></div></div>');
	});
	brothers.forEach(function(brother) {
		$("#membersList").append('<div class="col-xs-12 memberDiv" style="background-color:#4A90E2;height:125px;border-radius:100px;box-shadow: inset 0px -1px 5px #000;"><a href="#" class="brotherThumbnail thumbnail col-xs-2"><img class="brotherImage" style="width: 125px;height: 125px;margin-left:-20px;margin-top:-3.5px;" src="' + brother.image + '"></a><div class="col-xs-3"><h3>' + brother.name + '</h3><h4>' + brother.title + '</h3></div></div>');
	});
	brothers.forEach(function(brother) {
		$("#nationalAlums").append('<div class="col-xs-12 memberDiv" style="background-color:#4A90E2;height:125px;border-radius:100px;box-shadow: inset 0px -1px 5px #000;"><a href="#" class="brotherThumbnail thumbnail col-xs-2"><img class="brotherImage" style="width: 125px;height: 125px;margin-left:-20px;margin-top:-3.5px;" src="' + brother.image + '"></a><div class="col-xs-3"><h3>' + brother.name + '</h3><h4>' + brother.title + '</h3></div></div>');
	});
	brothers.forEach(function(brother) {
		$("#CMUAlums").append('<div class="col-xs-12 memberDiv" style="background-color:#4A90E2;height:125px;border-radius:100px;box-shadow: inset 0px -1px 5px #000;"><a href="#" class="brotherThumbnail thumbnail col-xs-2"><img class="brotherImage" style="width: 125px;height: 125px;margin-left:-20px;margin-top:-3.5px;" src="' + brother.image + '"></a><div class="col-xs-3"><h3>' + brother.name + '</h3><h4>' + brother.title + '</h3></div></div>');
	});
});

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