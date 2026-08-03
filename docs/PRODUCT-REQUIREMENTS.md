# Anis — product requirements & truthful-claims gate

This repository is the **marketing site** (static Astro). It does **not** contain
the product/app. The items below describe the **product** that must be built for
the marketing claims on this site to be true. Nothing here is implemented by this
repo; it is captured so the product team can build to it and so we never advertise
a capability before it ships.

**Golden rule (acceptance criterion #12):** every marketing claim must map to a
working feature. When a feature is not yet real, the site must hide it or mark it
`Soon` / `Sample`. This doc is the source of truth for that mapping.

---

## 1. Positioning (implemented on the site)

Anis = **Arabic-first AI customer support** for businesses and agencies serving
Europe and the Arab world. Core value:

- Natural Arabic with excellent RTL + Arabic/English code-switching
- Answers grounded in the business's approved sources
- **Clear refusal** when reliable info is unavailable → human escalation
- One knowledge base across supported channels
- European privacy & data controls
- One-line website install
- White-label agency accounts
- Actions (booking, lead capture, order lookup) **only when genuinely implemented**

Primary buyers, in priority order: **(1) agencies, (2) e-commerce, (3) local
businesses, (4) support teams.**

---

## 2. Launch scope — website widget (must all be operational before "widget" claims)

- [ ] Add a website as a knowledge source (crawl + status)
- [ ] Add PDF / text / FAQ sources
- [ ] Refresh / retrain sources; show processing status
- [ ] Generate installation script; restrict widget to authorized domains
- [ ] Full RTL + LTR; automatic language detection
- [ ] Custom colours, name, logo, greeting, suggested questions
- [ ] Conversation history + central inbox
- [ ] Lead capture
- [ ] Human escalation (see §4)
- [ ] Low-confidence refusal (see §3)
- [ ] Source references / internal source traceability
- [ ] Unanswered-question reporting (knowledge gaps, see §5)
- [ ] Usage limits + billing/credit management (see §6)
- [ ] Rate limiting + abuse protection
- [ ] Data deletion + export; configurable retention period
- [ ] Accessible privacy information

**Do not delay the widget launch for WhatsApp / Messenger / advanced actions.**
Hide unfinished channels or mark them `Soon` (already done on the site).

---

## 3. Grounded answering & refusal (marketing claim: "Answers from your sources")

- Answer **only** from approved sources; cite/trace the source internally.
- When sources don't support an answer, respond naturally, e.g.:
  > لم أجد هذه المعلومة في مصادر الشركة. هل ترغب في تحويل سؤالك إلى أحد الموظفين؟
- Never invent an answer. Streaming may make replies feel immediate, but the
  site must **not** publish a response-time guarantee (we removed "<1s").

## 4. Human escalation (marketing claim: "Human handoff when needed")

- Collect name + preferred contact method when appropriate.
- Preserve full conversation context; mark the conversation "needs attention".
- Notify the business via its configured channel; allow a human to take over.
- While a human is active, Anis must **not** keep answering; allow return to auto.
- Never pretend a human is available when nobody is online.

## 5. Analytics (marketing claim: dashboard metrics — shown on site as `Sample`)

Prioritise: total conversations · auto-resolved · escalations · unanswered ·
leads captured · top topics · languages · **avg first response** · helpful/unhelpful
· source gaps · usage vs plan limit.

**"Auto-resolved" requires a defensible signal** — user marked helpful, a
configured action completed, user confirmed resolution, or the conversation ended
without requesting a human after a relevant answer. **Do not** count every
abandoned conversation as resolved.

Knowledge-gaps area: unanswered questions + the source that may need updating +
frequency + a way to add the answer directly to the knowledge base.

The public landing dashboard is **illustrative** and labelled `Sample dashboard`
/ `نموذج توضيحي`. Authenticated accounts must show **only real data**.

## 6. Pricing enforcement & billing (site shows the plans; product enforces them)

Plans/limits/prices are **centrally configurable**. Public structure (USD):
Free $0 · Starter $29 · Growth $79 · Pro $149 · Agency $299 · extra agency
workspace $10–15/mo + usage.

- Enforce per-plan AI-reply limits — **no unlimited usage**.
- Automatic top-ups, manual credits, usage warnings, **hard spending limit**,
  clear overage pricing, annual discount.
- WhatsApp/Meta fees billed separately or passed through — never bundled as
  "unlimited".
- Before finalising limits, confirm each plan is profitable against real model,
  hosting, storage and channel costs.

## 7. Agency workflow (primary path — priority order for v1)

1. Multiple client workspaces
2. Separate usage tracking per workspace
3. Branding removal
4. Client invitations
5. Workspace duplication
6. Branded reports

Later: custom agency domain, automated reseller billing, reusable industry
templates, per-workspace purchasing.

## 8. Instant demo flow (marketing: currently a lead form / "Book a demo")

Enter a public website → build a temporary assistant from public content →
private demo link → prospect tests → invite to claim & connect → unclaimed demos
expire. Agencies can create demos for their own prospects. The demo must state it
was built from **public** content and is **not** connected to private systems.
(On the marketing site this is represented by the early-access / book-a-demo lead
capture until the live generator exists.)

## 9. Privacy & European positioning (site wording softened accordingly)

The product + docs must accurately explain: where data is processed; retention of
conversations & sources; delete/export; third-party processors; whether customer
data trains models (it must not train shared models); consent controls; cookies;
the DPA; security contact.

**Do not** use "GDPR compliant" as a bare badge until the technical, contractual
and operational work is done. The site now says "built with privacy by design /
aligned with GDPR principles" and notes pre-launch controls are being finalised.

---

## Claim → status map (keep in sync with the site)

| Marketing claim on site | Backed by | Status |
| --- | --- | --- |
| Arabic-first, natural RTL, AR/EN code-switching | model + widget | build |
| Answers only from your sources | RAG + refusal (§3) | build |
| Human handoff when needed | escalation (§4) | build |
| One-line website install, domain-locked | widget (§2) | build |
| WhatsApp / Messenger / Instagram | channels | **Soon** on site |
| Order lookup / refunds / label emails | actions | removed from demo until real |
| Dashboard numbers (1,248 / 82% / …) | analytics (§5) | **Sample** on site |
| "40+ languages" hard claim | tested coverage | softened to AR+EN + more |
| "<1s reply" guarantee | measured prod latency | removed |
| Agency white-label / workspaces | agency (§7) | build |
| GDPR compliant (badge) | legal/technical (§9) | softened wording |
| Pricing limits & overages | billing (§6) | build |

**Before public launch, re-verify the full acceptance checklist (brief item 12).**
