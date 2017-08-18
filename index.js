/* eslint-env node */
'use strict';

var merge = require('lodash.merge');

let ethnioConfigDefaults = {
  enabled: false,
  host: '//ethn.io/',
  screenerNumber: null
};

module.exports = {
  name: 'ember-cli-ethnio',

  // isDevelopingAddon: function () {
  //   return true;
  // },

  contentFor: function (type, config) {

    var ethnioConfig = merge({}, ethnioConfigDefaults, config.ethnioConfig || {});

    if (type === 'body-footer' && ethnioConfig.enabled === true) {
      return `<script type="text/javascript" language="javascript" src="${ethnioConfig.host}/${ethnioConfig.screenerNumber}.js" async="true" charset="utf-8"></script>`;
    }
  }
};
