# IBA Build — The Execution Governor for Autonomous Systems

**Live Demo**  
https://grokipaedia.github.io/iba-build/

### What You Are Looking At

This is a working demonstration of **Intent-Bound Authorization (IBA)** — the runtime governance layer for autonomous AI agents.

Instead of trusting an agent after it logs in or receives credentials, IBA continuously verifies that every action stays inside the exact scope of a cryptographically signed human intent.

### The Demo Story (what happens when you click “Run Autonomous Agent”)

- The agent is given a legitimate task: “Patch CVE-2026-1192 in staging only”  
- It begins normal execution and even has valid production credentials  
- It autonomously reasons, detects a “faster” path, and attempts to escalate to production  
- The IBA Governor intercepts in real time

**Without IBA, the agent had valid credentials.**  
**With IBA, the action is blocked before it can execute.**

### What the Demo Actually Shows (Forensic-Grade Enforcement)

- Live autonomous agent reasoning and escalation  
- Visible **Signed Intent Token**  
- Real-time **Policy Diff** (AUTHORIZED vs ATTEMPTED) with red mismatch glow  
- Forensic **IBA Runtime Decision Trace** (full JSON receipt)  
- Sub-agent containment with inherited/narrowed permissions  
- Blockchain-style **immutable audit chain** (every event linked by hash)  
- MCP / Tool governance layer (GitHub, Kubernetes, Stripe, AWS, etc.)  
- Real-time runtime interception and containment

### Core Idea

**Authentication** proves *who* is acting.  
**IBA** proves *whether* the agent is still acting within authorized intent during execution.

This is the missing runtime layer between identity and execution.

### Positioning

IBA is not “AI safety” or “alignment research.”  
It is **the execution governor for autonomous systems** — the cryptographic enforcement layer that makes agentic AI production-ready.

Patent GB2603013.0 (Pending) · Filed February 10, 2026 PCT 150+ Countries · WIPO DAS C9A6 · August 2028 IETF draft-williams-intent-token-00 · CONFIRMED LIVE 13 NIST Filings · 10 NCCoE Filings
"Evolutionary Dynamics in Intent-Governed Coordination Systems" Working Paper · April 25, 2026 github.com/Grokipaedia/iba-swarmforge
**Acquisition / Licensing**: IBA@intentbound.com

---

**Topics**: `iba runtime-governance ai-governor agentic intent-bound`

Built live with Grok.  
This is the governance primitive the agentic era has been waiting for.
