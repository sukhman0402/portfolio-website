// MyJio Customer Assistance case study: the top block on
// /projects/myjio-customer-assistance (label, intro, info row, Brief, The Problem),
// read by ProjectHeroTop.js. Copy from the FINAL stage docs
// (claude/myjio/01-overview.md to 03-problem.md). No em dashes.

export const myjioCaseStudy = {
  introLabel: "MyJio Customer Assistance",
  intro: "A concept redesign of JioCare, the support chatbot in the MyJio app, built around how the customer feels. While chatting, the customer picks Frustration, Confusion or Satisfied, and the bot changes its tone, detail and pace to match; a keyword rulebook reads what each message is about.",
  infoFields: [
    {
      label: "Discipline",
      value: "Telecom"
    },
    {
      label: "Role",
      value: "UX Designer"
    },
    {
      label: "Tools Used",
      value: "Figma"
    },
    {
      label: "Timeline",
      value: "9 days"
    }
  ],
  briefLabel: "Brief",
  brief: "Choose an app with a customer-support chatbot and redesign the conversation between the bot and the customer, so that it becomes more helpful, more empathetic and more effective, above all in high-stress moments. Follow the Double Diamond process throughout.",
  process: {
    label: "Double Diamond",
    intro: "The project followed the Double Diamond throughout. It begins with empathy for the customer's needs and pain points, re-frames the insights into one clear problem, widens again into ideation to explore many solutions, and narrows through prototyping, where the ideas become screens that can be tested.",
    phases: [
      {
        name: "Empathy",
        alt: "Discover",
        mode: "diverge",
        text: "Understanding customers' emotions, needs and pain points by stepping into their context.",
        links: [
          {
            label: "Step 1 Research",
            href: "#research"
          },
          {
            label: "Step 2 Insights",
            href: "#insight-define"
          }
        ]
      },
      {
        name: "Re-frame",
        alt: "Define",
        mode: "converge",
        text: "Turning the insights into a clear, human-centred problem statement worth solving.",
        links: [
          {
            label: "Step 2 Define",
            href: "#insight-define"
          }
        ]
      },
      {
        name: "Ideation",
        alt: "Develop",
        mode: "diverge",
        text: "Exploring and generating many possible solutions before narrowing to the strongest.",
        links: [
          {
            label: "Step 3 Ideation",
            href: "#ideation"
          }
        ]
      },
      {
        name: "Prototype",
        alt: "Deliver",
        mode: "converge",
        text: "Turning ideas into tangible, testable screens to validate and refine the solution.",
        links: [
          {
            label: "Step 4 Design",
            href: "#design"
          }
        ]
      }
    ]
  },
  problemLabel: "The Problem",
  problem: "When a recharge fails or money goes to the wrong plan, customers open the in-app support chat at a stressful moment. A bot that misreads the question, asks for details the app already has, or answers every mood in the same flat tone turns a quick fix into a loop of typing and repeating. What is missing is a bot that understands both the problem and the person."
};
