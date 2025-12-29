'use strict';

/**
 * car-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::car-service.car-service');
