const { promisify } = require('util');

const { REDIS_PASS, REDIS_URL } = require('../config/secrets');
const { url } = require('inspector');

const redis = require('redis').createClient(REDIS_URL);

exports.hset = promisify(redis.hset).bind(redis);
exports.hgetall = promisify(redis.hgetall).bind(redis);
exports.hdel = promisify(redis.hdel).bind(redis);
