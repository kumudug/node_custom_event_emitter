'use strict'

var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('myEvent', function (message) {
    console.log('ERR: ' + message);
});

logger.emit('myEvent', 'Oops! Something went wrong');