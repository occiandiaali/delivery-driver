// ENVIRONMENT & GAME CONFIGURATIONS

const CONFIG = {
  ORS_API_KEY: OPEN_ROUTING_SERVICE_API_KEY,
  OPENWEATHER_API_KEY: "", // Free OpenWeatherMap API key

  //   // Fallback Location (Lagos)
  //   DEFAULT_LAT: 6.5244,
  //   DEFAULT_LON: 3.3792,
  // Fallback Location (Magboro / Lagos Region)
  DEFAULT_LAT: 6.6853,
  DEFAULT_LON: 3.4211,

  // Environment Physics & Road Settings
  ROAD_WIDTH: 12,
  LAYBY_X: 7.5,
  LANES: [-4, 0, 4],
  MAX_SPEED: 32,
  ACCELERATION: 20,
  DECELERATION: 15,
  BRAKE_FORCE: 40,
};
