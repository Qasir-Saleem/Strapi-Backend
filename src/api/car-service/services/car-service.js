'use strict';

/**
 * car-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-service.car-service');
