interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up expired entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipMap.entries()) {
      if (now > record.resetAt) {
        ipMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Checks whether an IP has exceeded the allowed limit within a timeframe.
 * @param ip Client IP address
 * @param limit Max allowed requests (default: 3)
 * @param windowMs Time window in milliseconds (default: 10 minutes)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 3,
  windowMs: number = 10 * 60 * 1000
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = ipMap.get(ip);

  if (!existing || now > existing.resetAt) {
    const resetAt = now + windowMs;
    ipMap.set(ip, { count: 1, resetAt });
    return { success: true, remaining: limit - 1, resetAt };
  }

  if (existing.count >= limit) {
    return { success: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    success: true,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}
