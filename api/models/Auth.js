/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({

    name:{
      type: 'string'
    },
    about:{
      type: 'string'
    },
    age_range:{
      type: 'json'
    },
    birthday:{
      type: 'string'
    },
    cover:{
      type: 'json'
    },
    education:{
      type: 'json'
    },
    email: {
      type: 'string'
    },
    first_name: {
      type: 'string'
    },
    hometown: {
      type: 'json'
    },
    last_name:{
      type: 'string'
    },
    link:{
      type: 'string'
    },
    locale:{
      type: 'string'
    },
    middle_name:{
      type: 'string'
    },
    name:{
      type: 'string'
    },
    name_format:{
      type: 'string'
    },
    gender:{
      type: 'string'
    },
    currency:{
      type: 'json'
    },
    timezone:{
      type: 'float'
    },
    website:{
      type: 'string'
    },
    verified:{
      type: 'boolean'
    },
    work:{
      type: 'json'
    },
    updated_time:{
      type: 'string'
    },
    religion:{
      type: 'string'
    },
    quotes:{
      type: 'string'
    },
    languages:{
      type: 'json'
    },
    devices:{
      type: 'json'
    },
    installed:{
      type: 'boolean'
    },
    is_verified:{
      type: 'boolean'
    },
    inspirational_people:{
      type: 'json'
    },
    is_shared_login:{
      type: 'boolean'
    },
    sports:{
      type: 'json'
    },
    short_name:{
      type: 'string'
    },
    test_group:{
      type: 'json'
    },
    public_key:{
      type: 'string'
    },
    install_type:{
      type: 'json'
    },
    payment_pricepoints:{
      type: 'json'
    }

  }),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
