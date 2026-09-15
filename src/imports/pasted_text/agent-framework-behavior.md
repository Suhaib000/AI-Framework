IMPORTANT NAVIGATION AND SCREEN BEHAVIOR CORRECTIONS

Please follow the behavior below exactly. Do not merge these screens together.

1. Agent Framework Welcome Page

When the user clicks Agent Framework from the main Vodafone Egypt AI Frameworks sidebar, do NOT navigate to the Home page.

Instead, open a separate Agent Framework Welcome page.

This welcome page is NOT the Home tab. It is a separate landing page shown when entering the Agent Framework.

The Agent Framework sidebar should already be visible on this page with:

Home
Agents
Knowledge
LLM
Tools
Observability
Guardrails
Finetuning

However, do not highlight Home, because the user has not opened Home yet.

The main content of the Agent Framework Welcome page should contain ONLY a welcome section and descriptive content.

Do NOT show cards, dashboards, statistics, feature-selection cards, tables, or configuration forms on this page.

Display:

Welcome to Agent Framework

Followed by:

The Agent Framework provides a centralized environment for building, configuring, managing, evaluating, and monitoring enterprise AI agents. It brings together the capabilities required to create agents, connect them to enterprise knowledge, select and manage language models, provide tools and integrations, monitor their behavior and performance, apply safety guardrails, and improve models through finetuning.

Present this text using a clean, modern and premium Vodafone enterprise design with good typography and spacing.

This page should feel like an introduction to the Agent Framework, not a dashboard.

2. Home Page Is Separate From the Agent Framework Welcome Page

The Home sidebar item must navigate to a different screen.

Do not use the Agent Framework Welcome page as the Home page.

I will provide a screenshot for the Home page.

When the user clicks Home, reproduce the layout and content shown in the supplied Home screenshot as closely as possible.

Therefore, the flow must be:

Click Agent Framework
→ Agent Framework Welcome page

Click Home
→ Home page based on the supplied screenshot

These must remain two separate screens.

3. Agents Section — Separate the Different States

Do NOT display the agent list, agent configuration form and Agent Preview on one page at the same time.

They are separate states/screens.

Agents List

When the user clicks Agents in the sidebar, show the existing agents as cards.

This should be the main Agents screen.

Each agent card should be clickable.

Add a Create Agent button in the top-right corner of this page.

Do NOT show the configuration form or Agent Preview on this initial Agents page.

Existing Agent

When the user clicks one of the agent cards, open that agent's Agent Preview.

The Agent Preview should allow the user to visually simulate starting a conversation with the selected agent.

Only show the Agent Preview after an agent card has been selected.

Do not show it by default on the Agents list page.

The flow is:

Agents
→ list of agent cards
→ click an agent
→ Agent Preview / conversation screen

Create Agent

When the user clicks the Create Agent button, open the agent creation/configuration screen that already exists in the current design.

Keep the existing sections/tabs:

Configure
Access Point
Logs
Monitoring

Keep all of the fields, controls and details that currently exist inside those sections.

This configuration screen should be shown only after clicking Create Agent.

Do not show it together with the Agents list.

At the end of the agent configuration flow, keep the Publish Agent button.

When the user clicks Publish Agent, navigate to the Agent Preview screen so the newly configured agent can be visually tested through a conversation.

The complete Create Agent flow should therefore be:

Agents
→ Create Agent
→ Configure / Access Point / Logs / Monitoring
→ Publish Agent
→ Agent Preview

The existing-agent flow should be:

Agents
→ click an existing agent card
→ Agent Preview

4. LLM Section — Separate Model Providers and Models

The LLM section has two tabs:

Model Providers
Models

These tabs must display different content.

Model Providers tab

When Model Providers is selected, show only the provider cards, such as:

OpenAI
Azure OpenAI
Anthropic
Google Gemini
Local Models

Show their connection/configuration status as currently designed.

Do not show the Available Models list/table underneath the providers anymore.

Models tab

Move the existing Available Models content to the Models tab.

When the user clicks Models, hide the provider cards and show the list/table of available models.

Preserve the model information already present in the current design.

The interaction should therefore be:

LLM → Model Providers
→ provider cards only

LLM → Models
→ available models list/table only

Do not show both sections on the same tab.

Important Prototype Rule

Treat all of these as separate interactive screens or states.

Do not place content for multiple states on one long page.

The purpose of the prototype is to demonstrate how the actual application will behave when the user clicks through it.

Preserve the existing Vodafone visual style and reuse the existing designs wherever possible. Only reorganize the screens and interactions according to the behavior described above.