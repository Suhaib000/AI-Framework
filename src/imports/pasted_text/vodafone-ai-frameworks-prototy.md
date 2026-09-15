Create a desktop interactive prototype for a product called:

Vodafone Egypt AI Frameworks

This prototype is for presentation purposes only. I do not need backend functionality, APIs, databases, authentication, real AI calls, or implementation code.

The goal is to simulate the final user experience and navigation of the application before it is implemented in Django.

Use all attached screenshots as the main visual references for the application.

Keep the same overall visual identity and enterprise design language shown in the screenshots:

Vodafone red as the primary accent color
white/light backgrounds
clean enterprise dashboard styling
left sidebar navigation
modern typography
consistent spacing
cards, tables, tabs, badges, icons, charts, and form elements where shown
professional and polished appearance suitable for presentation to enterprise stakeholders

Do not redesign the application into a completely different visual style.

The attached screenshots represent the existing Agent Framework feature pages and should be used as direct references for those screens.

Overall application structure

The application contains two top-level frameworks:

Agent Framework
ML Frameworks

The prototype should have separate screens and working navigation between them.

Screen 1 — Vodafone Egypt AI Frameworks Welcome

This must be the first screen of the prototype.

The sidebar on this screen should contain only:

Agent Framework
ML Frameworks

Do not show Agents, Knowledge, LLM, Tools, Observability, Guardrails, or Finetuning yet.

The main area should NOT contain large cards asking the user to choose between Agent Framework and ML Frameworks.

Instead, make this a modern enterprise welcome page.

Main heading:

Welcome to Vodafone Egypt AI Frameworks

Add a professional description explaining that the platform provides a centralized environment for building, managing, governing, monitoring, evaluating, and improving enterprise AI solutions.

Present the overall capabilities of the platform in a clean and visually impressive way using typography, subtle illustrations, icons, short capability descriptions, or structured sections.

The page should communicate the purpose of the platform rather than behave like a simple selection menu.

The sidebar itself is how the user selects the framework.

Make both sidebar items interactive.

Screen 2 — Agent Framework Welcome

When the user clicks Agent Framework from the main sidebar, navigate to a separate Agent Framework Welcome screen.

Do not replace or remove the Vodafone Egypt AI Frameworks welcome screen.

On the Agent Framework screen, change the sidebar to:

← Frameworks
Home
Agents
Knowledge
LLM
Tools
Observability
Guardrails
Finetuning

Highlight Home as the selected page using Vodafone red.

Clicking ← Frameworks should return to the main Vodafone Egypt AI Frameworks Welcome screen.

Main heading:

Welcome to Agent Framework

Subtitle:

The Agent Framework provides capabilities to build, configure, manage, evaluate, and monitor enterprise AI agents.

Create a modern and visually impressive welcome area consistent with the screenshots and Vodafone visual identity.

Below the welcome message, present the Agent Framework capabilities clearly:

Agents — Create and configure enterprise AI agents.
Knowledge — Manage knowledge bases, documents, and data sources.
LLM — Configure model providers and available language models.
Tools — Manage tools and integrations available to agents.
Observability — Monitor requests, traces, metrics, logs, and evaluations.
Guardrails — Configure policies and controls for safe AI behavior.
Finetuning — Manage datasets, training jobs, checkpoints, and deployments.

These should be presented as an informative overview of the Agent Framework.

Do not make them large framework-selection cards.

Screen 3 — ML Frameworks Welcome

When the user clicks ML Frameworks from the main Vodafone Egypt AI Frameworks screen, navigate to a separate ML Frameworks welcome screen.

For now, ML Frameworks does not need additional feature pages.

The sidebar should contain:

← Frameworks
Home

Main heading:

Welcome to ML Frameworks

Add a professional subtitle explaining that this area will provide capabilities for building, managing, training, evaluating, and deploying enterprise machine learning solutions.

Keep this page simple and polished.

Clicking ← Frameworks should return to the main Vodafone Egypt AI Frameworks welcome screen.

Agent Framework feature pages

Use the attached screenshots as the visual reference for these pages.

All feature pages must use the same Agent Framework sidebar:

← Frameworks
Home
Agents
Knowledge
LLM
Tools
Observability
Guardrails
Finetuning

Highlight the currently selected page in Vodafone red.

Keep the sidebar and overall shell visually consistent while navigating between pages.

Agents

Use the attached Agent Configure screenshot as the main visual reference.

The page should include elements such as:

Agent name
Agent description
Configure
Access Point
Logs
Monitoring
Model selector
Instructions
Knowledge
Tools
Agent Preview
Publish Agent

This is only a UI prototype.

The controls do not need real backend behavior.

Knowledge

Use the attached Knowledge screenshot as the visual reference.

Include tabs:

Knowledge Bases
Documents
Data Sources

Show sample knowledge bases such as:

Legal Documents
Product Manuals
Company Policies

Include the document upload area visually.

It does not need to perform real file uploading.

LLM

Use the attached LLM screenshot as the visual reference.

Include:

Model Providers
Models

Show example providers such as:

OpenAI
Azure OpenAI
Anthropic
Google Gemini
Local Models

Use states such as:

Connected
Configure

Include the Available Models table shown in the reference style.

Use mock data.

Tools

Use the attached Tools screenshot as the visual reference.

Include tabs:

Tools
MCP
A2A

Show example tools such as:

Web Search
File Parser
SQL Database
REST API
Python Runner
Vector Database

Show mock states such as:

Connected
Configure
Observability

Use the attached Observability screenshot as the visual reference.

Include tabs:

Overview
Traces
Metrics
Logs
Evaluations

On the Overview tab, show sample metrics such as:

Total Requests
Success Rate
Average Latency
Token Usage

Include:

a sample latency/request-volume chart
a Recent Traces table

Use mock/static data only.

Guardrails

Use the attached Guardrails screenshot as the visual reference.

Include tabs:

Policies
Rules
Test Cases
Violations

Show sample statistics such as:

Active Policies
Blocked Requests
Warnings

Include sample policies and a Recent Violations section.

Use mock data.

Finetuning

Use the attached Finetuning screenshot as the visual reference.

Include tabs:

Datasets
Jobs
Checkpoints
Deployments

Show summary information such as:

Training Jobs
Running
Completed
GPU Hours

Include the Training Jobs table shown in the screenshot style.

Use mock data.

Prototype interaction requirements

This must be an interactive clickable prototype, not only a static design.

Create these navigation flows:

Vodafone Egypt AI Frameworks Welcome
→ click Agent Framework
→ Agent Framework Welcome

Vodafone Egypt AI Frameworks Welcome
→ click ML Frameworks
→ ML Frameworks Welcome

From the Agent Framework sidebar:

Home
→ Agent Framework Welcome

Agents
→ Agents page

Knowledge
→ Knowledge page

LLM
→ LLM page

Tools
→ Tools page

Observability
→ Observability page

Guardrails
→ Guardrails page

Finetuning
→ Finetuning page

← Frameworks
→ Vodafone Egypt AI Frameworks Welcome

From ML Frameworks:

← Frameworks
→ Vodafone Egypt AI Frameworks Welcome

Interaction behavior

Use simple professional transitions.

Sidebar navigation should feel like a real enterprise web application.

The selected navigation item should clearly show an active state.

You may make important tabs inside feature pages clickable if easy, but the primary priority is the sidebar navigation and framework navigation.

Do not spend effort implementing functionality that is unnecessary for the presentation.

Design consistency

Do not design each feature page as an unrelated screen.

Treat the application as one consistent product.

Reuse the same:

sidebar structure
spacing
typography
colors
navigation styling
status badges
buttons
card styling
tables
tabs

The application should feel like a single coherent Vodafone Egypt enterprise AI platform.

Use the attached screenshots to maintain visual similarity.

Important scope

This is a UI/UX prototype only.

Do not:

create backend services
create APIs
create databases
implement authentication
implement real file upload
connect to real LLMs
connect to external services
implement actual model training
generate unnecessary backend functionality

The goal is simply to create a polished, clickable prototype that demonstrates:

what the application looks like
how the frameworks are organized
how the Agent Framework features are organized
how users navigate through the application

The prototype will later be used as the visual specification for a Django implementation.

Final prototype structure

Create separate screens for:

Vodafone Egypt AI Frameworks Welcome
Agent Framework Welcome
ML Frameworks Welcome
Agents
Knowledge
LLM
Tools
Observability
Guardrails
Finetuning

Keep all screens separate and connect them using prototype interactions.

Do not replace earlier screens when creating later screens.

The final result should be suitable for opening in Figma Present/Prototype mode and clicking through it as though it were a real application.