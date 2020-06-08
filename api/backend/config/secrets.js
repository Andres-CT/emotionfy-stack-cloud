exports.DOMAIN = process.env.DOMAIN;
exports.CHARGE_PER_FRAME = +process.env.CHARGE_PER_FRAME;

exports.AWS_ACCESS_KEY_ID_NODE = process.env.AWS_ACCESS_KEY_ID_NODE;
exports.AWS_SECRET_ACCESS_KEY_NODE = process.env.AWS_SECRET_ACCESS_KEY_NODE;
exports.AWS_REGION = process.env.AWS_REGION;

exports.GC_BUCKET_NAME = process.env.GC_BUCKET_NAME;
exports.GC_APPLICATION_CREDENTIALS = JSON.parse(process.env.GC_APPLICATION_CREDENTIALS);
exports.FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG);
exports.FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;


exports.MONGO_URI = process.env.MONGO_URI;
exports.REDIS_URL = process.env.REDIS_URL;
exports.REDIS_PASS = process.env.REDIS_PASS;
exports.PYAPI_URI = process.env.PYAPI_URI;
exports.SOCKET_PATH = process.env.SOCKET_PATH;

exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
