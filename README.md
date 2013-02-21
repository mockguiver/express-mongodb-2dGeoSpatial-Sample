# Simple Sample Rest-API for 2dSpatial MongoDB with Express

by Mockguiver <mockguiver@gmail.com>

Tutorial on setting up a sample restAPI for 2dSpatial objects using MongoDB and Express

## LINKS:

* [MongoDB 2dGeoSpatial](http://docs.mongodb.org/manual/core/geospatial-indexes/)
* [Express](http://http://expressjs.com)

## DESCRIPTION:

A lightweight restAPI for 2dGeoSpatial objects using MongoDB / Mongoose and Express.js / Node.js

This is not a complete / production rest/api, but a simple sample to start with 2dGeospatial objects in MongoDB.

## FEATURES:

* Insert Object with coords
* Look for Objects near some coords
* Look for all Objects

## REQUIREMENTS:

* (must) install
  - node.js
  - express.js
  - mongoose driver

* (optional) pick some tools like
  - rest client like ECHO 
  - mongoDB GUI like MongoHub 

## INSTALLATION:

    npm install

## QUICK START:

    node app.js


## API:

Here are ALL the available options for the API

1.- Insert Data associated with a 2d position

    POST /rest/insertdata {geo:lon,lat}

2.- Read data with max distance <dis> from a location <loc>
    GET /rest/readlocdata/:loc/:dis

3.- Read all data 
    GET /rest/readalldata