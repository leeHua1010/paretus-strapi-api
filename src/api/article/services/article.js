"use strict";

/**
 * article service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::article.article", ({ strapi }) => ({
  async findOne(entityId, params) {
    try {
      const result = await super.findOne(entityId, params);
      const updateParams = {
        data: { ...result, views: result.views + 1, user: { connect: [result.user.id] } },
      };
      console.log(updateParams, "updateParams");
      await strapi.service("api::article.article").update(entityId, updateParams);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
}));
