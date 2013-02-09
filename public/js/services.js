angular.module('myApp.services', [])
.value('version', '0.1')
.factory('socket', function ($log, $rootScope) {
  var socket = io.connect('http://localhost');
  return {
    on: function (eventName, callback) {
      $log.info(eventName, callback);
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      $log.info(eventName, data, callback);
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});