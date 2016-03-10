'use strict';

var git = require('git-rev');
var async = require('async');

var cmds = ['branch', 'tag', 'short', 'long'];

async.eachSeries(cmds, function (cmd, callback) {
    git[cmd](function (str) {
        console.log(cmd+'='+str);
        callback();
    });
});
