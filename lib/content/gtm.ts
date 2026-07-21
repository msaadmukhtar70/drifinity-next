import { IndustryContent } from "./types";

export const gtmPillar = {
  label: "GTM",
  name: "Go-To-Market",
  href: "/gtm",
  tagline: "Growth that isn't dependent on referrals or founder hustle.",
  summary:
    "We fix the offer, the positioning, and the pipeline — so new business shows up on a schedule, not by accident.",
};

export const gtmIndustries: IndustryContent[] = [
  {
    slug: "startups",
    name: "Startups",
    headline: "Stop selling on founder time. Start selling on a system.",
    dek: "Early traction from founder-led sales feels like progress — until it caps out. We build the offer and pipeline that let growth continue without the founder personally closing every deal.",
    painPoints: [
      "Every deal closes because the founder was in the room — the moment they step back, pipeline dries up.",
      "The offer has drifted across a dozen conversations and no two prospects hear the same pitch.",
      "There's no repeatable process for finding, qualifying, or converting the next 50 customers.",
      "Growth is a founder problem, not a business problem — and it's not built to survive delegation.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We map the current offer, positioning, and pipeline against real deal data — where prospects drop off, why deals stall, and what the founder is doing that no one else can repeat.",
      },
      {
        title: "Implementation",
        description:
          "We rebuild the offer into something sellable by someone other than the founder, and stand up the pipeline mechanics — targeting, messaging, follow-up — needed to run it.",
      },
      {
        title: "Retainer (optional)",
        description:
          "Once the system is live, we stay on to refine it against real results as the business scales past founder-led sales.",
      },
    ],
    outcome:
      "A pipeline that produces qualified conversations without the founder personally generating every one of them.",
  },
  {
    slug: "agencies",
    name: "Agencies",
    headline: "Feast-or-famine client acquisition, fixed.",
    dek: "Most agencies grow in bursts — a referral here, a proposal there — then hit a dry spell with no clear cause. We replace the guesswork with a pipeline that runs whether or not the phone happens to ring.",
    painPoints: [
      "New business is almost entirely referral-driven, with no reliable backup when referrals slow down.",
      "The agency's positioning sounds like every other agency's positioning — commoditized on price, not chosen on fit.",
      "Business development is whatever's left over after client work, not a real function with a process.",
      "Growth is unpredictable quarter to quarter, making it hard to hire, staff, or plan ahead with confidence.",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We look at where your last 20 clients actually came from, where your positioning is losing deals on fit rather than price, and what a repeatable pipeline is worth to you in real numbers.",
      },
      {
        title: "Implementation",
        description:
          "We sharpen the offer and positioning so you're chosen on fit, and build outbound and inbound pipeline mechanics that don't depend on who happens to refer you this month.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We keep the pipeline tuned as your capacity, offer, and market shift — so growth stays intentional, not reactive.",
      },
    ],
    outcome:
      "A second, reliable channel for new business that runs independently of referrals.",
  },
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    headline: "A personal brand isn't a pipeline. We build the pipeline.",
    dek: "Being known in your space gets you some clients. It doesn't get you a predictable number of them, every month, without you personally showing up everywhere. We systematize the parts that shouldn't rely on you.",
    painPoints: [
      "Client flow tracks almost exactly with how much content you personally posted that month.",
      "The offer isn't clearly packaged — prospects have to ask what you actually do and what it costs.",
      "There's no consistent way new leads are followed up with, so warm interest goes cold.",
      "Income is unpredictable because there's no system between 'someone's interested' and 'someone's a client.'",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We map how leads actually reach you today, where your offer creates hesitation instead of clarity, and what a consistent pipeline would be worth in booked revenue.",
      },
      {
        title: "Implementation",
        description:
          "We package the offer so it sells itself on first read, and build the follow-up and conversion system that turns interest into booked calls — without it depending on your posting schedule.",
      },
      {
        title: "Retainer (optional)",
        description:
          "We keep refining positioning and pipeline as your practice grows and your offer evolves.",
      },
    ],
    outcome:
      "A pipeline that keeps producing booked calls even in the weeks you don't post.",
  },
];
