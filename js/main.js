
//from Udacity AJAX course
// var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';
// var wikiRequestTimeout = setTimeout(function(){
//     $wikiElem.text("Failed to get Wikipedia resources");
// }, 8000);

// $.ajax({
//     url: wikiUrl,
// 	dataType: "jsonp",
//     success: function( response ){
//     	var articles = response[1];
//     	for (var i = 0; i < locations.length; i++) {
//     		articleStr = articles[i];
//     		var url = 'http://en.wikipedia.org/wiki/' + articleStr;
//     		$wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
//     	};
//     		clearTimeout(wikiRequestTimeout);
//     	}
// });

var ViewModel = function() {
	var self = this;
	
	self.places = ko.observableArray(type);
	self.place = ko.observable('');
	self.locations= ko.observableArray(locations.location);
	self.filteredPlaces = ko.computed(function(){
		var filter = self.filter();
		 if (filter === "All") {

		 	//show all;
		 }
		 else if (filter === "Attractions"){
		 	//hide Beaches
		 }
		 else if (filter === "Beaches"){
		 	//hide Attractions
		 }
	}
)};

ko.applyBindings(new Viewmodel());
