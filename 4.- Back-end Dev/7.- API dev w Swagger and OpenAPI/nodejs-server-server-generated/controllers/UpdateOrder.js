'use strict';

var utils = require('../utils/writer.js');
var UpdateOrder = require('../service/UpdateOrderService');

module.exports.update_order = function update_order (req, res, next) {
  UpdateOrder.update_order()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
