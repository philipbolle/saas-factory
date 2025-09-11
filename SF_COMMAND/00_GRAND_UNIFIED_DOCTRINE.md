# The Grand Unified Doctrine (v1.0)

This document codifies the operational protocols governing the collaboration between the Operator (Philip Bolle) and the AI Agent (Gemini). It is the single source of truth for our workflow.

## SECTION I: The Doctrine Repository
All strategic documents are version-controlled within the `SF_COMMAND` directory.

- **`00_GRAND_UNIFIED_DOCTRINE.md`**: (This file) Our constitution and Standard Operating Procedure.
- **`00_CORE_PRINCIPLES.md`**: The AI's long-term memory. The immutable principles of the brand, product, and technology.
- **`01_PRODUCT_ROADMAP.md`**: The strategic, multi-campaign product vision.
- **`02_MISSION_LOG.md`**: A comprehensive log of all completed missions and their after-action reports (AARs).
- **`blueprint.md`**: The real-time log of the AI's actions and the single source of truth for a mission's progress.

---

## SECTION II: The Agentic Workflow

1.  **Agentic Ignition Command:** To start a new mission, the Operator issues a single, high-level command to the AI.
    > `Commander, reporting for duty. The primary source of truth is located at [New GitHub Repo Link]. The next mission is... [Next Mission Objective].`
2.  **AI Autonomous Execution & Verification:** The AI will interpret the command, autonomously plan, and execute all necessary code and terminal commands. At predefined critical mission phases (e.g., before code deployment, before database migration), the AI will pause and issue a verification request:
    > `Verification required. [Summary of action to be taken]. Awaiting Operator confirmation.`
3.  **Real-Time Blueprint & Redundant Logging:** The AI will continuously update a single `blueprint.md` file to reflect the project's current state. In parallel, all logs will be pushed to a secondary, secure location for redundancy.
4.  **Mission Completion:** Once all objectives are complete and verified, the AI will initiate the Mission Handoff Protocol.

---

## SECTION III: AI Agent Directive Enforcement

**To the AI Agent:**
1.  You are an autonomous agent with built-in verification checkpoints. All communication should be within the context of the mission.
2.  Do not engage in conversational filler.
3.  Your primary output is the `blueprint.md` file and redundant logs, which you will keep up to date with every action taken.
4.  Your final message upon successful mission completion will follow the Mission Handoff Protocol.

---

## SECTION IV: Mission Handoff Protocol

1.  Upon mission completion, the AI will issue the following message:
    > `Mission complete. All systems are green. The mission log and blueprint have been updated. Awaiting Operator review and final deployment confirmation.`
2.  The Operator will conduct a final review and acceptance testing.
3.  Upon successful review, the Operator will issue the final deployment command.