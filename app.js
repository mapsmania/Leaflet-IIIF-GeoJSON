var map;
var iiifLayers = {};

map = L.map("map", {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

// choose file and load geojson

window.onload = function (event) {
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileSelect, false);
};

function handleFileSelect(event) {
  var fileReader = new FileReader();
  fileReader.onload = function (event) {
   
    // parse as geojson
    var data = JSON.parse(event.target.result);
 
    console.log(data);
    
    //add to map
    L.geoJSON(data).addTo(map);
    var layerGroup = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.text);
    },
  }).addTo(map);

  };
  var file = event.target.files[0];
  fileReader.readAsText(file, "UTF-8");

  }

// load the iiif manifest from the URL parameters

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var manifestUrl = urlParams.get("manifest");

$.getJSON(manifestUrl, function (data) {
  // For each image create a L.TileLayer.Iiif object and add that to an object literal for the layer control
  $.each(data.sequences[0].canvases, function (_, val) {
    iiifLayers[val.label] = L.tileLayer.iiif(
      val.images[0].resource.service["@id"] + "/info.json"
    );
  });

  // Access the first Iiif object and add it to the map
  iiifLayers[Object.keys(iiifLayers)[0]].addTo(map);
});

$.getJSON(manifestUrl, function (data) {
  // For each image create a L.TileLayer.Iiif object and add that to an object literal for the layer control
  $.each(data.sequences[0].canvases, function (_, val) {
    iiifLayers[val.label] = L.tileLayer.iiif(
      val.images[0].resource.service["@id"] + "/info.json"
    );
  });

  // Access the first Iiif object and add it to the map
  iiifLayers[Object.keys(iiifLayers)[0]].addTo(map);
});

// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
  draw: {
    circle: false,
    circlemarker: false,
  },
  edit: {
    featureGroup: drawnItems,
  },
});

map.addControl(drawControl);

map.on("draw:created", function (e) {
  var type = e.layerType;
  var layer = e.layer;
  var feature = (layer.feature = layer.feature || {}); // Intialize layer.feature

  feature.type = feature.type || "Feature"; // Intialize fueature.type
  var props = (feature.properties = feature.properties || {}); // Intialize feature.properties

  if (type === "polygon") {
    props.text = prompt("Add Text");
    var popContent = props.text;
    layer.bindPopup(popContent);
  }
  if (type === "polyline") {
    props.text = prompt("Add Text");
    var popContent = props.text;
    layer.bindPopup(popContent);
  }
  if (type === "rectangle") {
    props.text = prompt("Add Text");
    var popContent = props.text;
    layer.bindPopup(popContent);
  }
  if (type === "marker") {
    props.text = prompt("Add Text");
    var popContent = props.text;
    layer.bindPopup(popContent);
  }
  drawnItems.addLayer(layer);
});

// export drawn elements as geoJSON

document.getElementById("export").onclick = function (e) {
  // Extract GeoJson from featureGroup
  var data = drawnItems.toGeoJSON();

  // Stringify the GeoJson
  var convertedData =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));

  // Create export
  document
    .getElementById("export")
    .setAttribute("href", "data:" + convertedData);
  document.getElementById("export").setAttribute("download", "data.geojson");
};