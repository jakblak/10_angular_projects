(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$rootScope', '$location', 'PubNub'];

  function MainCtrl($scope, $rootScope, $location, PubNub) {
    var _ref;
    if (!PubNub.initialized()) {
      $location.path('/join');
    }

    $scope.controlChannel = '__controlchannel';

    $scope.channels = [];

    // Publish Chat
    $scope.publish = function() {
      if (!$scope.selectedChannel) {
        return;
      }
      PubNub.ngPublish({
        channel: $scope.selectedChannel,
        message: {
          text: $scope.newMessage,
          user: $scope.data.username
        }
      });
      return $scope.newMessage = '';
    }

    // Create Channel
    $scope.createChannel = function() {
      var channel;
      console.log('Creating channel... ');
      channel = $scope.newChannel;

      $scope.newChannel = '';

      PubNub.ngGrant({
        channel: channel,
        read: true,
        write: true,
        callback: function() {
          return console.log(channel + ' ready ' + arguments);
        }
      });
      PubNub.ngGrant({
        channel: channel + '-pnpres',
        read: true,
        write: false,
        callback: function() {
          return console.log(channel + 'Presence all ready ' + arguments);
        }
      });
      PubNub.ngPublish({
        channel: $scope.controlChannel,
        message: channel
      });
      return setTimeout(function() {
        $scope.subscribe(channel);
        return $scope.showCreate = false;
      }, 100);
    }

    $scope.subscribe = function(channel) {
      var _ref;
      console.log('Subscribing... ');
      if (channel === $scope.selectedChannel) {
        return;
      }
      if ($scope.selectedChannel) {
        PubNub.ngUnsubscribe({
          channel: $scope.selectedChannel
        });
      }
      $scope.selectedChannel = channel;
      $scope.messages = ['Welcome to ' + channel];

      PubNub.ngSubscribe({
        channel: $scope.selectedChannel,
        state: {
          city: ((_ref = $rootScope.data) != null ? _ref.city : void 0) || 'unkown'
        },
        error: function() {
          return console.log(arguments);
        }
      });

      $rootScope.$on(PubNub.ngPrsEv($scope.selectedChannel), function(ngEvent, payload) {
        return $scope.$apply(function() {
          var newData, userData;
          userData = PubNub.ngPresenceData($scope.selectedChannel);
          newData = {};
          $scope.users = PubNub.map(PubNub.ngListPresence($scope.selectedChannel), function(x) {
            var newX;
            newX = x;
            if (x.replace) {
              newX = x.replace(/\w+__/, "");
            }
            if (x.uuid) {
              newX = x.uuid.replace(/\w+__/, "");
            }
            newData[newX] = userData[x] || {};
            return newX;
          });
          return $scope.userData = newData;
        });
      });

      PubNub.ngHereNow({
        channel: $scope.selectedChannel
      });

      $rootScope.$on(PubNub.ngMsgEv($scope.selectedChannel), function(ngEvent, payload) {
        var msg;
        msg = payload.message.user ? "[" + payload.message.user + "] " + payload.message.text : "[unknown] " + payload.message;
        return $scope.$apply(function() {
          return $scope.messages.unshift(msg);
        });
      });

      return PubNub.ngHistory({
        channel: $scope.selectedChannel,
        auth_key: $scope.authKey,
        count: 500
      });
    }

    // Subscribe to retrieve channels from "control channel"
    PubNub.ngSubscribe({
      channel: $scope.controlChannel
    });

    // Register for channel creation message events
    $rootScope.$on(PubNub.ngMsgEv($scope.controlChannel), function(ngEvent, payload) {
      return $scope.$apply(function() {
        if ($scope.channels.indexOf(payload.message) < 0) {
          return $scope.channels.push(payload.message);
        }
      });
    });

    // Get a reasonable historical backlog of messages to populate the channels list
    PubNub.ngHistory({
      channel: $scope.controlChannel,
      count: 500
    });

    // Create "Waiting Room" Channel
    $scope.newChannel = 'Waiting Room';
    return $scope.createChannel();

  };
})();