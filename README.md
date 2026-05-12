# iba-build

**The governed desktop coding app.**

Every AI action (file edit, terminal command, API call) must pass through a cryptographically signed human intent certificate before execution.

No more "it worked in the prompt" surprises.

Built on top of your existing IBA Governor.

## Features
- Full IDE-like interface
- IBA enforcement on every action
- Scope, limits, expiry, and kill threshold
- Immutable audit trail
- Works with Claude, Grok, Gemini, etc.

## Quick Start
```bash
git clone https://github.com/Grokipaedia/iba-build
cd iba-build
npm install
npm run dev
