# Weekend Homework: Pub/Sub Application with Requests

## How to run the app 

Download the repo and enter the following into the console whilst in the root directory: 

```
npm install
```

Run webpack (leave running in a terminal window):
```
npm run build
```
Open webpage

```
open public/index.html
```


### Learning Objectives

- Be able to create a web application with a modular front-end
- Be able to implement reusable and nested views
- Be able to make API requests to load JSON data into your application

## Brief

Your task is to create an application that makes a request to an API and displays the data.

API - http://www.amiiboapi.com/

### MVP

- The application should display data from an API request.
- The application should have a clear separation of concerns using a model and views.

### Extensions

- Take input from the user to update the page. You could update the page by filtering or manipulating the data on user interaction, or you might make further API requests to load more data that is then displayed.

### Advanced Extensions

Looking into a library to visual the data.

- [Leaflet](https://leafletjs.com/) is an open-source library for rendering maps
- [HighCharts](https://www.highcharts.com/) is an open-source library for rendering charts

You will need to use the library's documentation to integrate it into your application.

## Considerations

To make the request you may use either `fetch` or the `XMLHttpRequest` object.

## Planning

- Look at the JSON you are going to be loading into your app and based on the data, draw a wireframe
- Start by loading the data from the API into your application and checking that it has loaded, before doing any work on the views
- Plan your models and your views and draw a diagram of the data flow through the application
