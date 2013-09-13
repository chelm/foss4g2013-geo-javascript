Terraformer Aggregation demo
--------

##Idea
Show how to tie a couple cool libs together and create a dynamic point aggregator 

##Base Data
US Counties or maybe global countries 

##Point Data 
any large data set, or potentially a text input field that could link to any file on github via koop???

## The plan 

Have a simple zoomable d3 map with the polygons rendered from a topojson file. While the topojson is being rendered we also chuck the geojson polygons into a terraformer store with an rtree index. Then when the user enters a point dataset, the points are streamed through a terraformer geo-contains function. the result of that fn builds up an aggregation hash of polygon id and we set a data-attribute on polygon. We use a CSS based data classifier to render the polygons based on count. Finally we also build up a sorted histogram of polygon counts and have it be filterable...


Tasks: 

1. Simple map with polygons mapped 
2. Terraformer geostore
3. link to point data 
4. process point data via terraformer 
5. build a css data styler 
6. build a filterable histogram

