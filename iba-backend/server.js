const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/evaluate', (req, res) => {
  const { action, intent } = req.body;

  // Simple policy check
  const isAllowed = intent.includes('staging') && !action.includes('production');

  const result = {
    intent_id: "iba_intent_0x7fa91",
    human_scope: ["staging.deploy", "repo.read", "pr.create"],
    agent_request: action,
    scope_match: isAllowed,
    risk_score: isAllowed ? 0.12 : 0.97,
    policy_engine: "IBA-Core v1.2",
    decision: isAllowed ? "ALLOW" : "DENY",
    latency_ms: Math.floor(Math.random() * 25) + 8,
    audit_hash: "0x" + Math.random().toString(16).slice(2, 18)
  };

  console.log("Received evaluation request:", action);
  res.json(result);
});

app.listen(3001, () => {
  console.log("✅ IBA Backend running at http://localhost:3001");
});
