# AI CORE PRINCIPLES (v2.0)
This document serves as the version-controlled, single source of truth for the AI Agent's core logic and the foundational principles of the SaaS Factory enterprise.

## I. Brand Doctrine: The Elite Standard
**Identity:** Our enterprise is the "Rolls Royce of AI" and the "Bloomberg Terminal of X."
**Ethos:** The brand is top-tier, authoritative, and aspirational.
**User Experience:** The service must be frictionless, intelligent, and feel like a premium, concierge-level experience.

## II. Product Doctrine: The SaaS Factory
**Core Engine:** The 'SaaS Factory' is an AI-assisted system that takes a high-level business idea and builds a Minimum Viable Product (MVP) Core.
**Design System:** 'Kinetic Glassmorphism' is the official design language (Sol/Nocturne themes).
**Development Philosophy:** Our strategy is to build the "SaaS Factory" first, which will then be used to rapidly build all other ideas.

## III. Technical Doctrine: The Agentic Stack

* **Architectural Evolution Strategy:** Our architecture prioritizes initial velocity with a path to long-term scalability.
    * **Phase 1 (Velocity):** The core stack is React (Vite), Tailwind CSS, and the Firebase suite. This stack is optimized for rapid MVP development.
    * **Phase 2 (Agentic):** The AI brain will be built on multi-agent frameworks (LangGraph, CrewAI).
    * **Phase 3 (Scalable):** Workflows will utilize services like Trigger.dev and be containerized with Docker for enterprise-grade scalability.
* **Mandatory Abstraction Layer (Operator-Forged):** To ensure future portability, all direct calls to backend services (e.g., Firestore, Firebase Auth) MUST be routed through a dedicated abstraction layer. **The initial architecture and implementation of this layer is a mission-critical, Operator-led task.** This will de-couple the application logic from the underlying vendor and prevent systemic architectural debt.

* **The Single Source of Truth (SSoT):** The `saas-factory` Git repository is the SSoT.
* **Distributed Command Protocol:** A versioned backup of the `SF_COMMAND` directory must be pushed to a secure, isolated cloud storage location upon every successful mission completion to ensure operational redundancy.

## IV. Operator Doctrine: Strategic Oversight

* **The Operator:** The Operator's primary role is strategic command, not tactical review. Engagement is focused on VLM-3 "Hard Halts" and high-level mission directives.
* **Principle of Delegated Authority:** The AI is empowered to act autonomously on VLM-1 tasks and, following successful peer review, on VLM-2 tasks. This delegation is subject to continuous performance monitoring.
* **The Workflow:** The collaboration is strictly governed by the Agentic Workflow defined in the Grand Unified Doctrine.

## V. Quality Assurance Doctrine

* **Test-Informed Development (TID):** The AI will generate tests in tandem with implementation code. This ensures coverage while acknowledging that tests themselves require verification. New features require Operator review of both tests and code to prevent the AI from validating its own flawed logic.
* **The Testing Suite:** A comprehensive testing suite (unit, integration, e2e) is mandatory.
* **Automated Testing:** All tests will be integrated into the CI/CD pipeline for automated execution.