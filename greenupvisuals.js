document.addEventListener('DOMContentLoaded',function(){
	var map = L.map('map').setView([43.876, -72.081], 8)
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/hyrule10.i5lkp4k8/{z}/{x}/{y}.png', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    	maxZoom: 18
	}).addTo(map);


	heatmapDatum = [[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],[43.876, -72.081, 1000],
	[43.876, -72.3745188667, "571"],
[43.876, -72.3657417333, "486"],
[43.876, -72.4015351167, "807"],
[43.876, -72.4087452333, "899"],
[43.876, -72.4453463833, "1273"],
[43.876, -72.4441556833, "1258"],
[43.876, -72.4463564333, "1279"],
[43.876, -72.4244005667, "1078"],
[43.876, -72.4492620333, "1309"],
[43.876, -72.4445613167, "1261"]
	]
	var options = {
		maxZoom: 12,
		gradient: {0: 'blue', 0.5: 'lime', 1: 'green'}
	}
	var heat = L.heatLayer(heatmapDatum, options).addTo(map);


})