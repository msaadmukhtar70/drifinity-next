import { IndustryContent } from "./types";

export const automationPillar = {
  label: "Automation",
  name: "Automation",
  href: "/automation",
  tagline: "Remove the manual admin. Keep the software you already use.",
  summary:
    "We build workflows that handle reminders, intake, follow-ups, document handling, and status updates automatically — no new software to learn.",
};

export const automationIndustries: IndustryContent[] = [
  {
    slug: "agencies",
    name: "Agencies",
    headline: "Client work shouldn't stall for status updates.",
    dek: "Account managers spend hours a week on onboarding paperwork, reporting, and 'just checking in' emails. We automate the admin so your team's time goes back into the work clients actually pay for.",
    painPoints: [
      "Onboarding a new client is a manual checklist someone has to remember to run every time.",
      "Status updates and reporting eat hours that should go toward billable work.",
      "Follow-ups on outstanding approvals or feedback fall through the cracks without someone chasing.",
      "Nothing talks to anything else — the same information gets re-typed across three different tools.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We trace exactly where staff time goes on admin instead of client work, and put a real number on what automating it is worth.",
      },
      {
        title: "Implementation",
        description:
          "We build onboarding, reporting, and follow-up workflows directly into the tools you already run — no new software for your team to adopt.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We extend and maintain the workflows as your service lines and headcount change.",
      },
    ],
    outcome:
      "Hours per week returned to billable work, with nothing depending on someone remembering to do it manually.",
  },
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    headline: "Booking, intake, and follow-up — running without you.",
    dek: "Every manual step between 'someone books a call' and 'someone becomes a client' is a place they can fall through. We automate the sequence so nothing depends on you catching it in time.",
    painPoints: [
      "Scheduling back-and-forth costs bookings before the call even happens.",
      "Intake forms get sent manually, filled out late, or not followed up on at all.",
      "Post-call follow-up depends on remembering to send it the same day — and it doesn't always happen.",
      "Client reminders and check-ins are manual, so cancellations and no-shows are higher than they should be.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We map every manual touchpoint between first contact and paying client, and quantify what's leaking at each step.",
      },
      {
        title: "Implementation",
        description:
          "We automate booking, intake, reminders, and follow-up using the tools already in your stack — calendar, email, CRM, whatever you're on.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We keep the sequence tuned as your offer and client volume grow.",
      },
    ],
    outcome:
      "Fewer no-shows, faster follow-up, and a booking-to-client sequence that runs whether or not you're at your desk.",
  },
  {
    slug: "legal",
    name: "Legal Services",
    headline: "Less time on paperwork. More time on casework.",
    dek: "Intake, document requests, and status updates consume associate and staff hours that should go to billable legal work. We automate the repeatable parts of case administration.",
    painPoints: [
      "New client intake is manual data entry, repeated across intake forms, case files, and billing systems.",
      "Document requests and follow-ups with clients require constant manual chasing.",
      "Clients call for status updates because there's no automatic way to keep them informed.",
      "Deadlines and next-steps tracking rely on someone remembering to check a calendar.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We identify where staff and associate time is lost to manual admin versus billable casework, with a real number attached.",
      },
      {
        title: "Implementation",
        description:
          "We automate intake, document collection, status updates, and deadline tracking inside your existing case management and communication tools.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We maintain and extend the workflows as caseload and practice areas grow.",
      },
    ],
    outcome:
      "Fewer status-update calls, faster document turnaround, and more billable hours spent on actual legal work.",
  },
  {
    slug: "immigration",
    name: "Immigration Consultants & Lawyers",
    headline: "Document-heavy cases, running on autopilot.",
    dek: "Immigration casework is defined by paperwork, deadlines, and constant status questions. We automate the document collection, tracking, and communication so nothing slips and nobody's guessing.",
    painPoints: [
      "Collecting and tracking required documents from clients is a manual, case-by-case chase.",
      "Filing deadlines are tracked manually, creating real risk if something is missed.",
      "Clients constantly call or email asking for a status update because there's no automatic way to inform them.",
      "Case status lives in someone's head or a spreadsheet instead of a system everyone can rely on.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We map your current intake-to-filing process and pinpoint where deadline risk and manual chasing are actually costing you.",
      },
      {
        title: "Implementation",
        description:
          "We build automated document collection, deadline tracking, and status-update workflows into the tools you already use — no new case management platform required.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We keep the workflows current as caseload, visa categories, and requirements shift.",
      },
    ],
    outcome:
      "Fewer missed deadlines, less time spent chasing documents, and clients who stay informed automatically.",
  },
  {
    slug: "clinics-healthcare",
    name: "Clinics & Healthcare",
    headline: "Clinical staff shouldn't be doing admin work.",
    dek: "Patient intake, appointment reminders, and follow-ups pull clinical and front-desk staff away from patient care. We automate the administrative load so care time stays care time.",
    painPoints: [
      "Patient intake forms are handled manually, creating bottlenecks and data-entry errors.",
      "No-shows run high because appointment reminders are inconsistent or manual.",
      "Follow-up care instructions and check-ins depend on staff remembering to send them.",
      "Front-desk and clinical staff time goes to admin instead of patients.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We trace where staff time is lost to manual intake, reminders, and follow-up, and quantify the impact on no-shows and patient load.",
      },
      {
        title: "Implementation",
        description:
          "We automate intake, appointment reminders, and follow-up communication inside the systems your clinic already runs — compliant, and with no new software to train staff on.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We maintain and expand the workflows as patient volume and services grow.",
      },
    ],
    outcome:
      "Lower no-show rates, less administrative load on clinical staff, and more consistent patient follow-up.",
  },
];
