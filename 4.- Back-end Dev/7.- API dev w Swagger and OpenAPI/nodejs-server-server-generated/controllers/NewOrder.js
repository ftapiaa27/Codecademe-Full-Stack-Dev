'use strict';

var utils = require('../utils/writer.js');
var NewOrder = require('../service/NewOrderService');

module.exports.add_order = function add_order (req, res, next, body) {
  NewOrder.add_order(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
