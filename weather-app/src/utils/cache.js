const memoryCache = {};
const EXPIRATION_TIME = 5 * 60 * 1000;

export function getCachedData(key) {

  const cachedMemory = memoryCache[key];
  if (cachedMemory) {
    const isExpired = Date.now() - cachedMemory.timestamp > EXPIRATION_TIME;
    if (!isExpired) {
      return cachedMemory.data;
    }
    delete memoryCache[key];
  }

  const cachedLocal = localStorage.getItem(key);
  if (cachedLocal) {
    const { data, timestamp } = JSON.parse(cachedLocal);
    const isExpired = Date.now() - timestamp > EXPIRATION_TIME;
    if (!isExpired) {
      memoryCache[key] = { data, timestamp };
      return data;
    }
    localStorage.removeItem(key);
  }

  return null;
}

export function setCachedData(key, data) {
  const cacheEntry = { data, timestamp: Date.now() };

  memoryCache[key] = cacheEntry; // Save in-memory

  localStorage.setItem(key, JSON.stringify(cacheEntry)); // Save in localStorage
}

    
    
