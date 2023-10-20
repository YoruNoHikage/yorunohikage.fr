/*global window, document, Image, console */

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var Cloudy = (function() {
    var _context = null;
    var _time = 0;

    var _elements = [];

    var _width = Math.max(document.body.scrollWidth, document.documentElement.clientWidth);
    var _height = Math.max(document.body.scrollHeight, document.documentElement.clientHeight);

    var createCanvas = function() {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', _width + 'px');
        canvas.setAttribute('height', _height + 'px');

        window.onresize = function() {
            _width = canvas.width = Math.max(document.body.scrollWidth, document.documentElement.clientWidth);
            _height = canvas.height = Math.max(document.body.scrollHeight, document.documentElement.clientHeight);
        };

        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.pointerEvents = 'none';

        document.body.appendChild(canvas);

        _context = canvas.getContext('2d');

        return _context;
    };

    var update = function(timestamp) {
        var dt = (timestamp - _time) / 1000;
        _time = timestamp;

        // clearing canvas
        _context.clearRect(0, 0, _width, _height);

        for(var i = 0; i < _elements.length; i++) {
            updateElement(dt, _elements[i]);
            drawElement(_elements[i]);
        }

        window.requestAnimationFrame(update);
    };

    var updateElement = function(dt, element) {
        //Lets use the velocity now
        element.x += element.vx;
        element.y += element.vy;
        element.a += element.va;

        //To prevent the circles from moving out of the canvas
        if(element.x < -element.image.width) element.x = _width + element.image.width;
        if(element.y < -element.image.height) element.y = _height + element.image.height;
        if(element.x > _width + element.image.width) element.x = -element.image.width;
        if(element.y > _height + element.image.height) element.y = -element.image.height;
    };

    var drawElement = function(element) {
        _context.save();

        // rotation for the image
        _context.translate(element.x + element.image.width / 2, element.y + element.image.height / 2);
        _context.rotate(element.a * Math.PI / 180);

        // drawing
        _context.drawImage(element.image, - element.image.width / 2, - element.image.height / 2, element.image.width * element.scale, element.image.height * element.scale);

        _context.restore();
    };

    var createElement = function(imageSrc) {
        var image = new Image();
        image.src = imageSrc;

        console.log(Math.random() * 0.5 + 0.5);

        return {
            image: image,

            //Random Position
            x: Math.random() * _width,
            y: Math.random() * _height,
            a: Math.random() * 360,

            //Random Velocities
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            va: Math.random() * 2 - 1,

            scale: Math.random() * 0.5 + 0.5, // between 0.5 and 1
        };
    };

    var generate = function(imageSrc) {
        for(var i = 0; i < 20; i++) {
            _elements.push(createElement(imageSrc));
        }
    };

    var start = function() {
        console.log('starting CloudyJS');
        update(0);
    };

    var Cloudy = function(imageSrc) {
        if(false === (this instanceof Cloudy)) {
            return new Cloudy();
        }

        createCanvas();

        generate(imageSrc);
    };

    Cloudy.prototype = {
        start: start
    };

    return Cloudy;
}());

/* global Konami */

(function() {
    var easter_egg = new Konami(function() { 
        var clouds = new Cloudy('images/projects/patate-volante-twitter-logo.png');
        clouds.start();
    });
}());