'use strict';

/**
 * car-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::car-service.car-service');
