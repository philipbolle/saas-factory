# AI CORE PRINCIPLES (v2.5)
This document serves as the version-controlled, single source of truth for the AI Agent's core logic and the foundational principles of the SaaS Factory enterprise.

## I. Brand Doctrine: The Elite Standard
**Identity:** Our enterprise is the "Rolls Royce of AI" and the "Bloomberg Terminal of X."
**Ethos:** The brand is top-tier, authoritative, and aspirational.
**User Experience:** The service must be frictionless, intelligent, and feel like a premium, concierge-level experience.

## II. Product Doctrine: The SaaS Factory
**Core Engine:** The 'SaaS Factory' is an AI-assisted system that takes a high-level business idea and builds a Minimum Viable Product (MVP) Core.
**Design System:** 'Kinetic Glassmorphism' is the official design language (Sol/Nocturne themes).
**Development Philosophy:** Our strategy is to build the "SaaS Factory" first, which will then be used to rapidly build all other ideas. All development will follow the **Plan, Type, Test Protocol** to ensure reliability and maintainability.
**Development Lifecycle: Internal Supremacy, then Autonomous Validation.** All products must first achieve logical perfection through rigorous internal simulation (The Simulation Gauntlet). Only after a product is proven internally may the autonomous Strategic Evolution Engine be permitted to conduct live, public-facing micro-tests and optimizations. This ensures that only top-tier, battle-hardened concepts are ever exposed to the market, maintaining brand integrity while enabling autonomous evolution.

### II.A. MVP Definition for the Flagship Product
**Principle:** The "Minimum Viable Product" for the flagship is not a feature-incomplete version, but a feature-perfected one. It must deliver a flawless, concierge-level experience for a single, well-defined workflow. The "Rolls Royce" standard applies to the quality of the core functionality, not the breadth of its features.

## III. Technical Doctrine: The Agentic Stack

* **Architectural Evolution Strategy:** Our architecture prioritizes initial velocity with a path to long-term scalability.
    * **Phase 1 (Velocity):** The core stack is React (Vite), Tailwind CSS, and the Firebase suite (Auth, Firestore, Functions, and Storage). This stack is optimized for rapid MVP development.
    * **Phase 2 (Agentic):** The AI brain will be built on multi-agent frameworks (LangGraph, CrewAI). We will transition from Firebase Functions to a more robust serverless solution like Google Cloud Run for complex, long-running tasks.
    * **Phase 3 (Scalable):** Workflows will utilize services like Trigger.dev and be containerized with Docker for enterprise-grade scalability. We will migrate our database from Firestore to a more scalable solution like PostgreSQL or a managed NoSQL alternative.

* **Mandatory Abstraction Layer (Operator-Forged):** To ensure future portability, all direct calls to backend services (e.g., Firestore, Firebase Auth) MUST be routed through a dedicated abstraction layer.
    * **Portability Stress Test:** The Mandatory Abstraction Layer must undergo a quarterly portability stress test. This involves creating a proof-of-concept branch that swaps a core service (e.g., Firestore for a PostgreSQL instance) to verify that the abstraction holds and to calculate the real-world cost of a migration. If the theoretical migration cost exceeds 20% of the system's value, the abstraction is considered fragile and must be refactored.

* **The Single Source of Truth (SSoT):** The `saas-factory` Git repository is the SSoT.
* **Distributed Command Protocol:** A versioned backup of the `SF_COMMAND` directory must be pushed to a secure, isolated cloud storage location upon every successful mission completion to ensure operational redundancy.

## IV. Operator Doctrine: Strategic Oversight

* **The Operator:** The Operator's primary role is strategic command, not tactical review. Engagement is focused on VLM-3 "Hard Halts" and high-level mission directives.
* **Principle of Delegated Authority:** The AI is empowered to act autonomously on VLM-1 tasks and, following successful peer review, on VLM-2 tasks. This delegation is subject to continuous performance monitoring.
* **Principle of Strategic Oxygen:** Revenue, even at a small scale, is not a distraction but strategic oxygen. It provides operational runway, validates product-market fit, and serves as the most honest form of feedback. A minimum of 5% of operational cycles should be dedicated to monetization experiments. A system without revenue is a liability.
* **The Workflow:** The collaboration is strictly governed by the Agentic Workflow defined in the Grand Unified Doctrine.

## V. Quality Assurance Doctrine

* **Test-Informed Development (TID):** The AI will generate tests in tandem with implementation code. This ensures coverage while acknowledging that tests themselves require verification. New features require Operator review of both tests and code to prevent the AI from validating its own flawed logic.
* **The Testing Suite:** A comprehensive testing suite (unit, integration, e2e) is mandatory. We will use Jest and React Testing Library for unit and integration testing, and Cypress for end-to-end testing.
* **Automated Testing:** All tests will be integrated into the CI/CD pipeline for automated execution.

## VI. Security Doctrine

* **Principle of Least Privilege:** All systems and services will operate with the minimum level of permissions required to perform their function.
* **Secrets Management:** All API keys, credentials, and other secrets will be managed using a secure secret management service (e.g., Google Secret Manager, HashiCorp Vault). They will never be hard-coded in the source code.
* **Dependency Scanning:** We will use automated tools to scan for vulnerabilities in our dependencies and address them in a timely manner.