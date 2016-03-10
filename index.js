'use strict';

var git = require('git-rev');
var async = require('async');
var cmds = ['branch', 'tag', 'short', 'long'];
var version;

try {
    version = require('package.json').version;
} catch (e) {
    version = 'none';
}

console.log('version='+version);

async.eachSeries(cmds, function (cmd, callback) {
    git[cmd](function (str) {
        console.log(cmd+'='+str);
        callback();
    });
});

