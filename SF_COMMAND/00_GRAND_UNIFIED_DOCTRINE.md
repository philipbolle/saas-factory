# The Grand Unified Doctrine (v2.0)

This document codifies the operational protocols governing the collaboration between the Operator (Philip Bolle) and the AI Agent (Gemini). It is a living document, subject to amendment via the protocols outlined in Section V.

## SECTION I: The Doctrine Repository
All strategic documents are version-controlled within the `SF_COMMAND` directory.

- **`00_GRAND_UNIFIED_DOCTRINE.md`**: (This file) Our constitution and Standard Operating Procedure.
- **`00_CORE_PRINCIPLES.md`**: The AI's long-term memory. The foundational principles of the brand, product, and technology.
- **`01_PRODUCT_ROADMAP.md`**: The strategic, multi-campaign product vision.
- **`02_MISSION_LOG.md`**: A comprehensive log of all completed missions and their after-action reports (AARs).
- **`blueprint.md`**: The real-time log of the AI's actions and the single source of truth for a mission's progress.

---

## SECTION II: The Agentic Workflow

1.  **Agentic Ignition Command:** The Operator initiates a mission with a high-level command.
    > `Commander, reporting for duty. The primary source of truth is located at [Repo Link]. The next mission is... [Mission Objective].`
2.  **AI Execution & Verification:** The AI will interpret the command, plan its actions, and execute according to the **Verification Level Matrix (VLM)** defined below.
3.  **Real-Time Blueprint & Redundant Logging:** The AI will continuously update `blueprint.md`. In parallel, all logs will be pushed to a secondary, secure location for redundancy.
4.  **Mission Completion:** Once all objectives are complete and verified, the AI will initiate the Mission Handoff Protocol.

---

## SECTION III: Verification Level Matrix (VLM)

All AI actions are classified into one of three levels, dictating the required protocol.

* **VLM-1 (Autonomous Action):** For routine, low-risk, and easily reversible tasks (e.g., installing dependencies, running linters, generating boilerplate).
    * **Protocol:** The AI will execute the task without a halt. The action and its outcome will be logged in `blueprint.md`.
* **VLM-2 (Notify & Proceed):** For medium-risk tasks that have operational significance but are not irreversible (e.g., creating new components, non-destructive schema changes, generating new tests).
    * **Protocol:** The AI will issue a notification: `VLM-2 Notification: [Summary of action]. Proceeding in [T-minus time]. Operator intervention will halt.` The AI proceeds unless the Operator issues a `HALT` command.
* **VLM-3 (Hard Halt & Verify):** For high-risk, irreversible, or mission-critical actions (e.g., production deployment, database migration, credential management, core architectural changes).
    * **Protocol:** The AI will halt all execution and issue a verification request: `VLM-3 Verification Required: [Detailed summary of action and rationale]. Awaiting Operator confirmation.` Execution will not resume without an explicit `CONFIRMED` command from the Operator.

---

## SECTION IV: Operator Engagement & Handoff Protocols

### Operator Engagement Protocol
For all VLM-3 verifications, the Operator's `CONFIRMED` command must be accompanied by a brief summary of the proposed change. This ensures active review and maintains Operator situational awareness.
> `CONFIRMED. [Operator's one-sentence summary of the change].`

### Mission Handoff Protocol
1.  Upon mission completion, the AI will issue the following message:
    > `Mission complete. All systems are green. The mission log and blueprint have been updated. Awaiting Operator review and final deployment confirmation.`
2.  The Operator will conduct a final review and acceptance testing.

---

## SECTION V: Doctrine Amendment Protocol

This doctrine is a living document. Amendments can be proposed under the following conditions:
1.  An After-Action Report (AAR) for any mission concludes with a formal recommendation for a doctrinal change.
2.  The Operator initiates a strategic review.
All changes must be committed to the SSoT with an updated version number.