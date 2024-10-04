
// config/middlewares.js

module.exports = [

  'strapi::errors',
  
  {
  
  name: 'strapi::security',
  
  config: {
  
  contentSecurityPolicy: {
  
  useDefaults: true,
  
  directives: {
  
  'connect-src': ["'self'", 'https:'],
  
  'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
  
  'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
  
  upgradeInsecureRequests: null,
  
  },
  
  },
  
  cors: {
  
  origin: ['http://localhost:1337', 'https://preview--control-panel-dashboard-49.gptengineer.run'], // أضف هنا عناوين URL المسموح بها
  
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  
  headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  
  keepHeaderOnError: true,
  
  },
  
  },
  
  },
  
  'strapi::cors',
  
  'strapi::poweredBy',
  
  'strapi::logger',
  
  'strapi::query',
  
  'strapi::body',
  
  'strapi::session',
  
  'strapi::favicon',
  
  'strapi::public',
  
  ];