# Leaflet-IIIF-GeoJSON

## Introduction

View and annotate IIIF images in a Leaflet.js interactive map.

With Leaflet-IIIF-GeoJSON you can:

1. View IIIF images inside a Leaflet map
2. Using the drawing tools you can then annotate the image
3. Save your annotations as a GeoJSON file
4. Load and view GeoJSON data on top of any IIIF image

<a href="https://leaflet-iiif-geojson.glitch.me/" target="_blank"><b>Demo</b></a> - this will open a blank copy of Leaflet-IIIF-GeoJSON. 

If you want to view an image then you need to append the URL of a IIIF manifest to the URL of Leaflet-IIIF-GeoJSON. For example,

`https://leaflet-iiif-geojson.glitch.me/?manifest=https://media.getty.edu/iiif/manifest/85f146bd-257f-4ecf-bd2c-50beb045fda5`

will open 
<a href="https://leaflet-iiif-geojson.glitch.me/?manifest=https://media.getty.edu/iiif/manifest/85f146bd-257f-4ecf-bd2c-50beb045fda5" target="_blank"><b>The Drawing Lesson</b></a> by Jan Steen inside Leaflet-IIIF-GeoJSON


## Examples of Images in Leaflet-IIIF-GeoJSON with GeoJSON Data
 
### Maps


<a href="https://leaflet-iiif-geojson.glitch.me/?manifest=https://www.davidrumsey.com/luna/servlet/iiif/m/RUMSEY~8~1~343041~90111248/manifest" target="_blank"><b>The Borgia World Map</b></a> with <a href="https://github.com/mapsmania/Leaflet-IIIF-GeoJSON/blob/main/geojson/borgia.geojson" target="_blank"><b>borgia.geojson</b></a>

<a href="https://leaflet-iiif-geojson.glitch.me/?manifest=https://www.davidrumsey.com/luna/servlet/iiif/m/RUMSEY~8~1~304729~90075291/manifest" target="_blank"><b>The Emigrants of the World</b></a> with <a href="https://github.com/mapsmania/Leaflet-IIIF-GeoJSON/blob/main/geojson/borgia.geojson" target="_blank"><b>borgia.geojson</b></a>


### Paintings


<a href="https://leaflet-iiif-geojson.glitch.me/?manifest=https://media.getty.edu/iiif/manifest/85f146bd-257f-4ecf-bd2c-50beb045fda5" target="_blank"><b>The Drawing Lesson by Jan Steen</b></a> with <a href="https://github.com/mapsmania/Leaflet-IIIF-GeoJSON/blob/main/geojson/steen.geojson" target="_blank"><b>steen.geojson</b></a>

<a href="https://leaflet-iiif-geojson.glitch.me/?manifest=https://www.nga.gov/api/v1/iiif/presentation/manifest.json?cultObj:id=1138" target="_blank"><b>Feast of the Gods by Giovanni Bellini</b></a> with <a href="https://github.com/mapsmania/Leaflet-IIIF-GeoJSON/blob/main/geojson/bellini.geojson" target="_blank"><b>bellini.geojson</b></a>

## A Warning About Loading and Exporting GeoJSON

If you load a geoJSON file into Leaflet-IIIF-GeoJSON and then add more annotations be aware that when you 'Export GeoJSON' you will save a new geoJSON file. WARNING - this new file will only contain the annotations you have made in the current session (it will exclude all the data you loaded from your previously saved file). Your annotations will now therefore exist in two separate geoJSON files. At the moment the only way around this is to combine the two files using a  geoJSON editing application, such as geojson.io. If you open both your saved geoJSON files in <a href="http://geojson.io/" target="_blank"><b>geojson.io</b></a> and then press Save  > GeoJSON you will now have a third geoJSON file (which contains the annotations from both of your original two geoJSON files).

Leaflet-IIIF-GeoJSON can load and display more than one geoJSON file at a time. So if you are happy to work with two (or more files) you can!
