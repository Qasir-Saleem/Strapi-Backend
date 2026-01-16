'use strict';

/**
 * route-1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::route-1.route-1');
