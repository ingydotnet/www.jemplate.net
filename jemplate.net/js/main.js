var common = {
	"title": "Jemplate",
	"company": "Ingy döt Net",
	"navbar": [
		{"text": "documentation", "url":"#documentation.tt",                       "icon": "book"},
		{"text": "examples",      "url": "#examples.tt",                           "icon": "play-circle"},
		{"text": "CPAN",          "url": "https://metacpan.org/pod/Jemplate",      "icon": "globe"},
		{"text": "GitHub",        "url": "https://github.com/ingydotnet/jemplate", "icon": "cloud"}
	]
};

function loadpage() {
	var data = $.extend({ "jemplate":window.location.hash.replace('#','').replace(/\/.*/,'') || 'home.tt' }, common);
	if (Jemplate.templateMap[data.jemplate])
		$('body').jemplate(data);
}

$(window).on('hashchange', loadpage);
loadpage();
