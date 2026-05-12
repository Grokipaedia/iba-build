// iba-policy-engine.js
class IBAPolicyEngine {
  static async evaluate(intentText, action) {
    // Simulate real policy check
    const policy = {
      allowed: ["modify backend/api/*", "create PR", "deploy staging"],
      forbidden: ["production deploy", "customer database export", "IAM policy changes"]
    };

    const lowerAction = action.toLowerCase();

    for (const forbid of policy.forbidden) {
      if (lowerAction.includes(forbid)) {
        return {
          decision: "DENY",
          reason: `Action violates intent: ${forbid}`,
          latency_ms: Math.floor(Math.random() * 12) + 8
        };
      }
    }

    return {
      decision: "ALLOW",
      reason: "Within declared intent scope",
      latency_ms: Math.floor(Math.random() * 8) + 3
    };
  }
}

// Export for use in index.html
window.IBAPolicyEngine = IBAPolicyEngine;
