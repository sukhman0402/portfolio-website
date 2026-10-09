// MyJio Customer Assistance HIGHLIGHTS (5 steps): the sections on
// /projects/myjio-customer-assistance (what "View Project" opens).
//
// FORMAT: the same Highlights rules as every project
// (claude/case-study-short-format-rules.md, Placement Drive project), rendered
// by src > components > ShortStep.js. MyJio changes the accent to the MyJio
// red-to-blue gradient and uses the MyJio kinds added on 2026-10-08
// (compare, hmw, invert, sheet, learn; `align` on flow and personas).
// Content from the FINAL stage docs (claude/myjio/04 to 13) and the approved
// Highlights preview (claude/myjio/highlights-data.json). No em dashes.
// Images: public > images > projects > myjio-customer-assistance > highlights.
// Video: public > videos > myjio-walkthrough.*
// endLinks: "View the Deep Dive" is added when the Deep Dive goes live.

const GRADIENT = "linear-gradient(90deg, #e30513 0%, #0a2885 100%)";

export const myjioShortCaseStudy = {
  sections: [
    {
      id: "research",
      tocLabel: "Research",
      short: true,
      accent: "#0a2885",
      gradient: GRADIENT,
      heading: "Research",
      phase: [
        {
          name: "Empathy",
          mode: "diverge"
        }
      ],
      intro: [
        "Research started with the bot itself: two real support conversations in JioCare, taken as a customer. Public complaints about the MyJio app were then coded to see which problems, and which feelings, customers bring to support. Two other telecom apps and a large consumer survey filled in the wider picture."
      ],
      open: {
        text: "The bot answers the question",
        accent: "it expects, not the one the customer asks."
      },
      parts: [
        {
          heading: "Methods",
          text: [
            "Five methods, from the bot itself outward: first-hand conversations, public complaints, competitors, and published research."
          ],
          visual: {
            kind: "stats",
            items: [
              {
                tag: "Primary",
                n: "2",
                l: "Real JioCare conversations"
              },
              {
                tag: "Primary",
                n: "502",
                l: "Support complaints coded",
                accent: true
              },
              {
                tag: "Primary",
                n: "2",
                l: "Telecom apps compared"
              },
              {
                tag: "Secondary",
                n: "1,554",
                l: "People in a consumer survey"
              },
              {
                tag: "Secondary",
                n: "8",
                l: "Peer-reviewed studies"
              }
            ],
            label: "Research methods: 2 conversations walked through, 502 complaints coded, 2 competitor bots compared, 1,554 survey respondents, 8 studies read."
          }
        },
        {
          heading: "JioCare Walkthrough",
          text: [
            "Two real issues were raised in the JioCare chat as a customer, a SIM change and a SIM status check. Each step was judged on five questions: did the bot understand the request, use what it already knew, sound human, offer a way to a person, and keep typing low?"
          ],
          visual: {
            kind: "lines",
            rows: [
              {
                label: "Understands intent · 3",
                lines: [
                  {
                    t: "Did not acknowledge the request or its urgency"
                  },
                  {
                    t: "Replies driven by the system, not the customer"
                  },
                  {
                    t: "Generic answers instead of the actual SIM status"
                  }
                ]
              },
              {
                label: "Uses what it knows · 4",
                lines: [
                  {
                    t: "Asked for the Jio number although the customer was logged in",
                    accent: true
                  },
                  {
                    t: "Flagged a valid number as invalid"
                  },
                  {
                    t: "Ignored account data it had"
                  },
                  {
                    t: "Contradicted what the app showed"
                  }
                ]
              },
              {
                label: "Sounds human · 1",
                lines: [
                  {
                    t: "Generic, robotic tone throughout"
                  }
                ]
              },
              {
                label: "Way to a person · 1",
                lines: [
                  {
                    t: "No clear path to a human agent"
                  }
                ]
              },
              {
                label: "Low typing · 2",
                lines: [
                  {
                    t: "Few actionable options for SIM issues"
                  },
                  {
                    t: "Long manual explanations needed"
                  }
                ]
              }
            ],
            note: "11 failures in two conversations. Walkthrough by one person on one account."
          }
        },
        {
          heading: "Customer Complaints",
          text: [
            "The 12,000 newest Google Play reviews of the MyJio app (India, 4 September to 6 October 2026) were filtered to low ratings that mention support: customer care, chat, the bot, complaints, executives or refunds. That left 502 reviews. Each was coded by what went wrong with support and by the feelings it carries."
          ],
          visual: {
            kind: "quotes",
            quotes: [
              {
                who: "1-star review",
                meta: "5 Oct 2026",
                text: "the chatbot doesn't understand at all",
                noteBold: "Not understood.",
                note: "36 of the 70 complaints about the bot itself are about loops or not being understood."
              },
              {
                who: "1-star review",
                meta: "6 Oct 2026",
                text: "After live chat it keeps going in circles with AI asking to select irrelevant options",
                noteBold: "Stuck in a loop.",
                note: "71 of 502 had to complain again and again."
              },
              {
                who: "1-star review",
                meta: "6 Oct 2026",
                text: "No option to speak with human representative.",
                noteBold: "No way out.",
                note: "After the network itself, this is the most common complaint."
              },
              {
                who: "1-star review, in Hinglish",
                meta: "3 Oct 2026",
                text: "na internet chal raha h ..na my jio app . complaint b nhi kar sakte",
                noteBold: "Neither the internet nor the MyJio app works, and I can't even complain.",
                note: "60 of 502 complaints are in Romanised Hindi and 6 in Devanagari; the bot has to read both."
              }
            ],
            counts: [
              {
                k: "94",
                small: "of 502",
                v: "could not reach a person"
              },
              {
                k: "90",
                small: "of 502",
                v: "say the issue was never resolved"
              },
              {
                k: "252",
                small: "of 502",
                v: "carry frustration words"
              }
            ]
          }
        },
        {
          heading: "Competitor Comparison",
          text: [
            "Airtel Thanks and Vi were compared with JioCare on the same questions, from public sources only: company help pages, press coverage and recent store reviews. The apps were not used first-hand."
          ],
          visual: {
            kind: "compare",
            columns: [
              {
                name: "JioCare",
                sub: "Walkthrough",
                logo: "/images/projects/myjio-customer-assistance/highlights/logo-jio.png"
              },
              {
                name: "Airtel Thanks",
                sub: "Public sources",
                logo: "/images/projects/myjio-customer-assistance/highlights/logo-airtel.png"
              },
              {
                name: "Vi",
                sub: "Public sources",
                logo: "/images/projects/myjio-customer-assistance/highlights/logo-vi.png"
              }
            ],
            rows: [
              {
                label: "Understands intent",
                cells: [
                  "Missed it",
                  "Promises AI agents; users describe set replies",
                  "Old AI claims, no recent evidence"
                ]
              },
              {
                label: "Uses what it knows",
                cells: [
                  "Asked for the number while logged in",
                  "Asks for the number and location",
                  "Users report repeated logins"
                ]
              },
              {
                label: "Sounds human",
                cells: [
                  "Robotic",
                  "No sign of empathy features",
                  "No public evidence"
                ]
              },
              {
                label: "Way to a person",
                cells: [
                  "None found",
                  "Live chat, callback and email on paper; reports say hard to reach",
                  "Chat, call and WhatsApp on paper; a user says the app \"will say we can't\""
                ]
              },
              {
                label: "Low typing",
                cells: [
                  "Few options, much typing",
                  "Menus, then \"type out your query\"",
                  "No public evidence"
                ]
              },
              {
                label: "Reads emotion",
                accent: true,
                cells: [
                  "No",
                  "No evidence",
                  "No evidence"
                ]
              }
            ],
            note: "Desk comparison, not hands-on. Where official claims and user reports disagree, both are shown."
          },
          after: [
            "On paper, Airtel offers more routes to a person. In public reports, all three leave customers stuck with the bot, and none shows any sign of reading how the customer feels."
          ]
        },
        {
          heading: "Consumer Survey",
          text: [
            "A large consumer survey sets the scale of the problem. Eight peer-reviewed studies on what helps when a support bot fails are in the Deep Dive, and are cited where they shaped a decision."
          ],
          visual: {
            kind: "numbers",
            size: "mid",
            items: [
              {
                value: "Almost half",
                cap: "got chatbot answers that made no sense for their question",
                accent: true
              },
              {
                value: "50%",
                cap: "often feel frustrated with chatbots"
              },
              {
                value: "6.4",
                small: " / 10",
                cap: "average rating consumers gave chatbots"
              }
            ],
            note: "Forrester Consulting for Cyara, November 2022: 1,554 consumers in the US, UK, Ireland, Australia and New Zealand. Western markets; used for scale only."
          }
        }
      ],
      close: {
        text: "Customers arrive frustrated, and what they want most is",
        accent: "to be understood, or to reach someone who will."
      }
    },
    {
      id: "insight-define",
      tocLabel: "Insight & Define",
      short: true,
      accent: "#0a2885",
      gradient: GRADIENT,
      heading: "Insight & Define",
      phase: [
        {
          name: "Empathy",
          mode: "diverge"
        },
        {
          name: "Re-frame",
          mode: "converge"
        }
      ],
      intro: [
        "Every finding from the walkthrough, the 502 complaints, the competitor scan and the survey was grouped by what the customer experiences. Four themes held across all sources.",
        "The themes were then turned around: who the bot has to serve, what each of them needs from it, and which customers feel the failures most."
      ],
      open: {
        text: "The bot does not fail at one thing. It",
        accent: "misreads, forgets, ignores feelings and keeps the customer stuck."
      },
      parts: [
        {
          heading: "Thematic Analysis",
          text: [
            "A thematic network groups findings into basic themes, then into a few organising themes, and finally one idea that explains them all. Each theme is supported by at least three of the four research sources."
          ],
          visual: {
            kind: "lines",
            rows: [
              {
                label: "Intent",
                lines: [
                  {
                    t: "It doesn't get what I mean."
                  },
                  {
                    t: "3 of 11 walkthrough failures · 36 bot complaints about loops or not being understood"
                  }
                ]
              },
              {
                label: "Context",
                lines: [
                  {
                    t: "It doesn't use what it knows."
                  },
                  {
                    t: "4 of 11 walkthrough failures · Vi users report the same"
                  }
                ]
              },
              {
                label: "Emotion",
                lines: [
                  {
                    t: "It doesn't notice how I feel."
                  },
                  {
                    t: "Frustration in 252 of 502 complaints · no competitor reads emotion"
                  }
                ]
              },
              {
                label: "Escape",
                lines: [
                  {
                    t: "I can't get out."
                  },
                  {
                    t: "94 could not reach a person · 90 not resolved · 71 repeated contact"
                  }
                ]
              },
              {
                label: "Under all four",
                lines: [
                  {
                    t: "The bot follows its script, not the customer.",
                    accent: true
                  },
                  {
                    t: "The customer does the work: re-typing, re-explaining, trying again."
                  }
                ]
              }
            ]
          }
        },
        {
          heading: "Key Insights",
          text: [
            "Five insights carry forward into the design."
          ],
          visual: {
            kind: "insights",
            rows: [
              {
                no: "01",
                title: "Frustration is the starting point, not an edge case",
                value: "252",
                cap: "of 502 complaints carry frustration, so the bot responds to feeling from the first message.",
                accent: true
              },
              {
                no: "02",
                title: "The bot already has the answer",
                value: "4 of 11",
                cap: "walkthrough failures ignored data the app shows, so the chat starts from context."
              },
              {
                no: "03",
                title: "Loops push people out",
                value: "94",
                cap: "of 502 could not reach a person, so the bot spots the request and never ends in a dead end."
              },
              {
                no: "04",
                title: "Confusion happens inside the chat",
                value: "34",
                cap: "of 502 public complaints carry confusion words, yet the walkthrough is full of it, so clarity is designed into the chat."
              },
              {
                no: "05",
                title: "Customers write in Hinglish",
                value: "60",
                cap: "of 502 complaints are Romanised Hindi, so the rulebook reads both."
              }
            ],
            center: true
          }
        },
        {
          heading: "Personas",
          text: [
            "Two composite customers were built from the 502 complaints: one stuck in a problem that keeps coming back, and one confused about money that has already left their account."
          ],
          visual: {
            kind: "personas",
            people: [
              {
                name: "Arjun",
                type: "Stuck in a loop · frustrated",
                line: "He has explained it three times. He should not have to again.",
                points: [
                  "Home internet down for days; complained more than once",
                  "Today: the bot loops, cannot see his open ticket, offers no person",
                  "Needs: acknowledgement, the status, a next step or a person",
                  "Based on: frustration 252 · no person 94 · repeat contact 71"
                ],
                photo: "/images/projects/myjio-customer-assistance/highlights/persona-arjun.jpg"
              },
              {
                name: "Neha",
                type: "Wrong recharge · confused, turning frustrated",
                line: "She knows what went wrong. She needs the bot to know it too.",
                points: [
                  "Recharged the wrong plan and wants the money back",
                  "Today: the bot ignores her last recharge and gives generic policy text",
                  "Needs: the recharge found, the rule explained, a fair alternative",
                  "Based on: money or refund 84 · confusion 34 · urgency 58"
                ],
                photo: "/images/projects/myjio-customer-assistance/highlights/persona-neha.jpg"
              }
            ],
            shared: {
              name: "Both of them",
              type: "What they share",
              line: "Both arrive upset. Both need the bot to know their case.",
              points: [
                "Context first: the open ticket or the last recharge, without being asked",
                "A reply that fits the mood: calmer and slower when upset",
                "A way forward: a next step, an alternative or a person",
                "Maps to: context · emotion · escape"
              ]
            },
            align: true
          }
        },
        {
          heading: "Stakeholders & How Might We",
          text: [
            "Three people shape every support chat: the customer in it, the person responsible for support quality, and the developer who has to make the bot behave. Each need became a How might we question to design against."
          ],
          visual: {
            kind: "hmw",
            cols: [
              {
                tag: "End user",
                accent: true,
                need: "Be understood, get a fix fast, and reach a person when the bot cannot help.",
                qs: [
                  {
                    no: "01",
                    pre: "design JioCare interactions that make users feel ",
                    key: "understood, acknowledged and taken seriously",
                    post: " instead of redirected or disregarded?"
                  },
                  {
                    no: "02",
                    pre: "design a JioCare support system that provides ",
                    key: "context-aware solutions",
                    post: ", access to suggested resources, clear human-agent escalation, issue-specific responses and visibility of past interactions?"
                  }
                ]
              },
              {
                tag: "Head of Customer Support",
                need: "Automated answers that resolve issues without sending people in circles.",
                qs: [
                  {
                    no: "03",
                    pre: "design a JioCare support system that combines automated responses with ",
                    key: "smooth flow and clear solutions",
                    post: ", without leading interactions into repetitive redirections?"
                  }
                ]
              },
              {
                tag: "Developer",
                need: "Read open-ended queries, handle uncertain cases, and hand over cleanly.",
                qs: [
                  {
                    no: "04",
                    pre: "improve the JioCare support system to better ",
                    key: "interpret open-ended queries",
                    post: ", manage uncertain cases gracefully, and enable a smooth transition when automation can no longer continue?"
                  }
                ]
              }
            ]
          }
        },
        {
          heading: "Problem Statement",
          text: [
            "Customer support chatbots often fail to understand user intent, emotions and context, leading to repetitive interactions, irrelevant responses, and unresolved issues. These inefficiencies increase user effort, reduce trust and significantly degrade the overall customer experience during critical moments."
          ],
          visual: {
            kind: "numbers",
            items: [
              {
                value: "11",
                cap: "failures in two real JioCare conversations"
              },
              {
                value: "252",
                small: "/502",
                cap: "support complaints carry frustration",
                accent: true
              },
              {
                value: "94",
                small: "/502",
                cap: "could not reach a person"
              }
            ]
          }
        }
      ],
      close: {
        text: "Customers do not need a smarter-sounding bot. They need one that",
        accent: "knows them, hears them, and lets them out."
      }
    },
    {
      id: "ideation",
      tocLabel: "Ideation",
      short: true,
      accent: "#0a2885",
      gradient: GRADIENT,
      heading: "Ideation",
      phase: [
        {
          name: "Ideation",
          mode: "diverge"
        }
      ],
      intro: [
        "Ideas came from three exercises: listing every way to make support worse, borrowing from brands people already trust, and swapping in new forms of interaction. Then one approach was chosen for reading the customer, and one problem was followed end to end."
      ],
      open: {
        text: "First, make it as bad as possible.",
        accent: "Then turn every failure around."
      },
      parts: [
        {
          heading: "Reverse Ideation",
          text: [
            "Reverse ideation lists everything that would ruin the experience, then flips each point into an opportunity.",
            "The 22 failures grouped into eight opportunities, and each opportunity led to something in the redesign."
          ],
          visual: {
            kind: "invert",
            head: [
              "What would ruin it",
              "Turned around",
              "Led to"
            ],
            rows: [
              {
                fails: "03 Robot tone · 08 Blaming the customer · 18 Making a fool of them",
                flip: "Speak to how the customer feels, without blame",
                lead: "Emotion-linked colour coding",
                accent: true
              },
              {
                fails: "02 No status after an action · 14 \"We'll take time to solve your problem\"",
                flip: "Always show where the problem stands",
                lead: "Progress bar"
              },
              {
                fails: "04 Open-ended replies · 06 Unexplained buttons · 11 No menu options · 22 No screenshots",
                flip: "Clear choices to tap; let the customer show the problem",
                lead: "Simplified interaction"
              },
              {
                fails: "17 Copy-pastes the same content · 20 Resolves nothing",
                flip: "Let the customer reject an answer and get a new one",
                lead: "Interactive response"
              },
              {
                fails: "01 Drops the problem · 05 No record of past queries · 16 Sends people elsewhere",
                flip: "Remember the problem and act inside the chat",
                lead: "Context-first replies, in-chat actions"
              },
              {
                fails: "12 Replies in a different language",
                flip: "Read the customer's own words, Hinglish included",
                lead: "Keyword rulebook"
              },
              {
                fails: "07 The text bar disappears · 19 Cramped lines",
                flip: "Keep the input visible; space the text for reading",
                lead: "Chat layout"
              },
              {
                fails: "21 Turns the topic to selling bigger plans",
                flip: "Offer plans only when they help, and let the customer say no",
                lead: "Keep or change choice"
              }
            ],
            note: "Four were not taken forward (09, 10, 13, 15): they are about operations, not the conversation."
          }
        },
        {
          heading: "Brand Swap",
          text: [
            "Brand swap borrows what trusted brands already do well. IKEA gives structured, step-by-step help with nothing missing; WhatsApp makes conversation effortless."
          ],
          visual: {
            kind: "flow",
            steps: [
              {
                tag: "Brand 01",
                title: "JioCare x IKEA",
                items: [
                  "Structured, step-by-step guidance",
                  "Visual cues: icons and imagery",
                  "No missing information",
                  "Direct action from the chat",
                  "Chat history for reference"
                ]
              },
              {
                tag: "Brand 02",
                title: "JioCare x WhatsApp",
                items: [
                  "Simple, natural language",
                  "Smooth conversational flow",
                  "Minimal effort for the customer",
                  "Familiar, intuitive interface",
                  "Works on any device"
                ]
              },
              {
                tag: "In the redesign",
                title: "What JioCare took",
                accent: true,
                items: [
                  "Step-by-step options (IKEA)",
                  "Recharge cards and in-chat payment (IKEA)",
                  "Chat bubbles and tap-to-reply chips (WhatsApp)",
                  "Plain, everyday wording (WhatsApp)"
                ]
              }
            ],
            align: true
          }
        },
        {
          heading: "Form Swap",
          text: [
            "Form swap changes the form the conversation takes, instead of its content. Five features came out of it, and all five are in the final screens."
          ],
          visual: {
            kind: "flow",
            steps: [
              {
                tag: "Feature 01",
                title: "Emotion-linked colour coding",
                accent: true,
                items: [
                  "The customer picks Frustration, Confusion or Satisfied on a slider: red, yellow and green, always labelled.",
                  "More care when frustrated, clearer steps when confused."
                ],
                img: {
                  src: "/images/projects/myjio-customer-assistance/highlights/feat-1-colour.jpg",
                  width: 660,
                  height: 400,
                  alt: "The emotion slider in its three states: Frustration, Confusion and Satisfied selected"
                }
              },
              {
                tag: "Feature 02",
                title: "Progress bar",
                items: [
                  "A bar under the header shows how close the problem is to a fix.",
                  "It moves faster when things go well and steps back when frustration builds."
                ],
                img: {
                  src: "/images/projects/myjio-customer-assistance/highlights/feat-2-progress.jpg",
                  width: 660,
                  height: 400,
                  alt: "Two progress bars under bot replies: short early in the chat, longer near the fix"
                }
              },
              {
                tag: "Feature 03",
                title: "Simplified interaction",
                items: [
                  "Tap options instead of typing.",
                  "Attach a screenshot or a file to show the problem."
                ],
                img: {
                  src: "/images/projects/myjio-customer-assistance/highlights/feat-3-simple.jpg",
                  width: 660,
                  height: 400,
                  alt: "Tap-to-reply options and the input bar with attach and mic"
                }
              },
              {
                tag: "Feature 04",
                title: "Interactive response",
                items: [
                  "Thumbs up or down on any reply.",
                  "Refresh to ask for a different answer."
                ],
                img: {
                  src: "/images/projects/myjio-customer-assistance/highlights/feat-4-response.jpg",
                  width: 660,
                  height: 400,
                  alt: "The control row under a reply: read aloud, thumbs up, thumbs down, refresh"
                }
              },
              {
                tag: "Feature 05",
                title: "Live voice guide",
                items: [
                  "A spoken, step-by-step guide for tasks inside the app.",
                  "Started from the mic in the input bar."
                ],
                img: {
                  src: "/images/projects/myjio-customer-assistance/highlights/feat-5-voice.jpg",
                  width: 660,
                  height: 400,
                  alt: "The live voice guide: the highlighted language button and the voice bar at step 2"
                }
              }
            ],
            align: true
          }
        },
        {
          heading: "Weighted Matrix",
          text: [
            "Three ways to read the customer were compared: a keyword rulebook with an emotion slider the customer controls, an open language model that reads emotion from text, and the fixed menu tree JioCare uses today.",
            "Each was scored from 1 to 5 on six criteria, weighted by how much they matter in a conversation about money."
          ],
          visual: {
            kind: "compare",
            columns: [
              {
                name: "Rulebook + slider",
                sub: "Chosen"
              },
              {
                name: "Open language model",
                sub: "Reads emotion from text"
              },
              {
                name: "Fixed menu tree",
                sub: "JioCare today"
              }
            ],
            rows: [
              {
                label: "Predictable answers in a money flow · ×3",
                cells: [
                  "5 · fixed rules, policy text written by people",
                  "2 · can state a policy that does not exist",
                  "5 · fixed paths"
                ]
              },
              {
                label: "Handles failure · ×3",
                cells: [
                  "4 · no match leads to options and a question",
                  "2 · confident wrong answers; misreads sarcasm",
                  "2 · loops and dead ends"
                ]
              },
              {
                label: "Reads open-ended queries · ×2",
                cells: [
                  "3 · only words in the rulebook",
                  "5 · its main strength",
                  "1 · only its own buttons"
                ]
              },
              {
                label: "Tone control · ×2",
                cells: [
                  "4 · four set states with written tone rules",
                  "3 · adapts, but cannot be audited",
                  "1 · one tone"
                ]
              },
              {
                label: "Customer control · ×2",
                cells: [
                  "5 · the customer says how they feel",
                  "2 · the model decides how they feel",
                  "3 · choices, but no way out"
                ]
              },
              {
                label: "Build effort · ×1",
                cells: [
                  "4",
                  "3 · easy to start, costly to test and guard",
                  "5"
                ]
              },
              {
                label: "Total, of 65",
                accent: true,
                big: true,
                cells: [
                  "55",
                  "35",
                  "36"
                ]
              }
            ],
            note: "Scores are reasoned judgements, not measurements."
          },
          after: [
            "The language model loses on trust, not on intelligence. Its strength, reading open-ended questions, comes back in Future Scope as a model guarded by the rulebook."
          ]
        },
        {
          heading: "User Flow",
          text: [
            "The flow follows one problem end to end: a customer who recharged the wrong plan and wants their money back.",
            "A refund rule splits it into two paths. Path B is the one built in the prototype; Path A is designed as a flow and script."
          ],
          visual: {
            kind: "flow",
            steps: [
              {
                tag: "Shared start",
                title: "Find the recharge",
                items: [
                  "MyJio, then JioCare, then the chat",
                  "Help, then wrong recharge",
                  "The bot shows the last recharge: \"Is this the one?\"",
                  "Refund rule: within 24 hours, or later?"
                ]
              },
              {
                tag: "Path A",
                title: "Within 24 hours: refund",
                items: [
                  "Confirm the UPI ID, or change it",
                  "Refund started, with a pending notice",
                  "Next: see plans, or exit",
                  "Ends: refunded, pending or exited"
                ]
              },
              {
                tag: "Path B",
                title: "After 24 hours: swap",
                accent: true,
                items: [
                  "The rule explained in plain words",
                  "Offer: swap to the right plan, with what was used adjusted",
                  "Keep or change; see the adjustment; pay",
                  "Ends: new plan active, invoice sent"
                ]
              }
            ],
            note: "The 24-hour refund rule is assumed for this concept.",
            align: true
          }
        }
      ],
      close: {
        text: "The chosen approach is not the smartest option.",
        accent: "It is the most trustworthy one."
      }
    },
    {
      id: "design",
      tocLabel: "Design",
      short: true,
      accent: "#0a2885",
      gradient: GRADIENT,
      heading: "Design",
      phase: [
        {
          name: "Prototype",
          mode: "converge"
        }
      ],
      intro: [
        "The design has two halves: a rulebook and a slider that decide how the bot reads the customer, and a chat that shows the customer what the bot already knows."
      ],
      open: {
        text: "The bot reads the words.",
        accent: "The customer sets the feeling."
      },
      parts: [
        {
          heading: "Keyword Rulebook",
          text: [
            "The rulebook sorts the customer's words into 11 categories. Four find the problem, six read the mood, and one spots that the customer wants a person.",
            "The first draft had 10 categories; the 502 complaints added new phrases, Hinglish, and the 11th category."
          ],
          visual: {
            kind: "sheet",
            label: "Keyword rulebook: 11 categories of customer words",
            bands: [
              {
                name: "Find the problem",
                span: 4,
                does: "Picks the flow: \"recharge\" with \"refund\" opens the wrong-recharge flow."
              },
              {
                name: "Read the mood",
                span: 6,
                does: "Urgency shortens the path. The other words ask the customer to set the slider; sarcasm is never read as praise."
              },
              {
                name: "Route",
                span: 1,
                does: "Acknowledged at once, with the contact option shown."
              }
            ],
            cols: [
              {
                name: "Issue",
                words: [
                  {
                    w: "internet"
                  },
                  {
                    w: "data"
                  },
                  {
                    w: "call"
                  },
                  {
                    w: "sms"
                  },
                  {
                    w: "network"
                  },
                  {
                    w: "recharge"
                  },
                  {
                    w: "sim"
                  },
                  {
                    new: true,
                    w: "jio fiber",
                    n: 35
                  },
                  {
                    new: true,
                    w: "air fiber",
                    n: 18
                  },
                  {
                    new: true,
                    w: "wifi"
                  },
                  {
                    new: true,
                    w: "refund"
                  }
                ]
              },
              {
                name: "Condition",
                words: [
                  {
                    w: "slow"
                  },
                  {
                    w: "not working"
                  },
                  {
                    w: "failed"
                  },
                  {
                    w: "pending"
                  },
                  {
                    w: "blocked"
                  },
                  {
                    w: "expired"
                  },
                  {
                    w: "missing"
                  },
                  {
                    new: true,
                    w: "till now",
                    n: 10
                  },
                  {
                    new: true,
                    w: "chal raha",
                    n: 7,
                    hi: true
                  },
                  {
                    new: true,
                    w: "nahi ho raha",
                    n: 6,
                    hi: true
                  },
                  {
                    new: true,
                    w: "still not"
                  }
                ]
              },
              {
                name: "Action",
                words: [
                  {
                    w: "check"
                  },
                  {
                    w: "activate"
                  },
                  {
                    w: "cancel"
                  },
                  {
                    w: "change"
                  },
                  {
                    w: "update"
                  },
                  {
                    w: "fix"
                  },
                  {
                    w: "replace"
                  }
                ]
              },
              {
                name: "Context",
                words: [
                  {
                    w: "prepaid"
                  },
                  {
                    w: "postpaid"
                  },
                  {
                    w: "roaming"
                  },
                  {
                    w: "international"
                  },
                  {
                    w: "5G"
                  },
                  {
                    w: "VoLTE"
                  }
                ]
              },
              {
                name: "Emotion",
                words: [
                  {
                    w: "urgent"
                  },
                  {
                    w: "immediately"
                  },
                  {
                    w: "worst"
                  },
                  {
                    w: "again"
                  },
                  {
                    w: "frustrated"
                  },
                  {
                    w: "complaint"
                  }
                ]
              },
              {
                name: "Urgency",
                words: [
                  {
                    w: "urgent"
                  },
                  {
                    w: "immediately"
                  },
                  {
                    w: "asap"
                  },
                  {
                    w: "now"
                  },
                  {
                    w: "today"
                  },
                  {
                    w: "emergency"
                  },
                  {
                    w: "important"
                  },
                  {
                    new: true,
                    w: "abhi",
                    n: 7,
                    hi: true
                  },
                  {
                    new: true,
                    w: "jaldi",
                    n: 3,
                    hi: true
                  }
                ]
              },
              {
                name: "Frustration",
                words: [
                  {
                    w: "slow"
                  },
                  {
                    w: "stuck"
                  },
                  {
                    w: "again"
                  },
                  {
                    w: "still"
                  },
                  {
                    w: "worst"
                  },
                  {
                    w: "useless"
                  },
                  {
                    w: "irritating"
                  },
                  {
                    w: "fed up"
                  },
                  {
                    w: "annoying"
                  },
                  {
                    w: "pathetic"
                  },
                  {
                    w: "tired"
                  },
                  {
                    w: "why always"
                  },
                  {
                    w: "not fair"
                  },
                  {
                    new: true,
                    w: "worst service",
                    n: 45
                  },
                  {
                    new: true,
                    w: "many times",
                    n: 17
                  },
                  {
                    new: true,
                    w: "extremely disappointing",
                    n: 12
                  },
                  {
                    new: true,
                    w: "third class",
                    n: 11
                  },
                  {
                    new: true,
                    w: "multiple times",
                    n: 10
                  },
                  {
                    new: true,
                    w: "ghatiya",
                    n: 15,
                    hi: true
                  },
                  {
                    new: true,
                    w: "bekar",
                    n: 13,
                    hi: true
                  }
                ]
              },
              {
                name: "Anger",
                words: [
                  {
                    w: "angry"
                  },
                  {
                    w: "nonsense"
                  },
                  {
                    w: "scam"
                  },
                  {
                    w: "cheating"
                  },
                  {
                    w: "useless service"
                  },
                  {
                    w: "ridiculous"
                  },
                  {
                    w: "hate"
                  },
                  {
                    w: "unacceptable"
                  },
                  {
                    w: "fraud"
                  },
                  {
                    new: true,
                    w: "cheater"
                  },
                  {
                    new: true,
                    w: "liar"
                  }
                ]
              },
              {
                name: "Confusion",
                words: [
                  {
                    w: "confused"
                  },
                  {
                    w: "don't understand"
                  },
                  {
                    w: "what is this"
                  },
                  {
                    w: "how"
                  },
                  {
                    w: "why"
                  },
                  {
                    w: "explain"
                  },
                  {
                    w: "meaning"
                  },
                  {
                    w: "not clear"
                  },
                  {
                    new: true,
                    w: "doesn't understand"
                  }
                ]
              },
              {
                name: "Sarcasm",
                words: [
                  {
                    w: "great"
                  },
                  {
                    w: "nice service"
                  },
                  {
                    w: "wow"
                  },
                  {
                    w: "amazing"
                  },
                  {
                    w: "thanks a lot"
                  }
                ]
              },
              {
                name: "Wants a person",
                accent: true,
                words: [
                  {
                    new: true,
                    w: "customer care",
                    n: 144
                  },
                  {
                    new: true,
                    w: "live chat",
                    n: 12
                  },
                  {
                    new: true,
                    w: "raise a complaint",
                    n: 9
                  },
                  {
                    new: true,
                    w: "talk to a human"
                  },
                  {
                    new: true,
                    w: "speak with a human"
                  },
                  {
                    new: true,
                    w: "executive"
                  }
                ]
              }
            ],
            legend: [
              [
                "Regular",
                " first draft"
              ],
              [
                "Bold",
                " added from the 502 complaints"
              ],
              [
                "(n)",
                " complaints containing the phrase"
              ],
              [
                "HI",
                " Hinglish"
              ],
              [
                "101",
                " keywords · scroll sideways for all 11 categories"
              ]
            ],
            note: "Counts are from 502 coded Google Play complaints. Wants a person appears in 94 of them. \"cheater\", \"liar\" and \"doesn't understand\" were seen in quotes, not counted."
          }
        },
        {
          heading: "Chat States",
          text: [
            "The customer's slider picks set the chat state. Each state changes how the bot moves, sounds and answers.",
            "One pick changes the tone of the next reply. Three in a row change the whole chat, so one bad moment does not turn the conversation around."
          ],
          visual: {
            kind: "compare",
            columns: [
              {
                name: "Red chat",
                sub: "Frustration",
                swatch: "#E10000"
              },
              {
                name: "Yellow chat",
                sub: "Confusion",
                swatch: "#FFD000"
              },
              {
                name: "Green chat",
                sub: "Satisfied",
                swatch: "#026D00"
              }
            ],
            rows: [
              {
                label: "Set by",
                cells: [
                  "3 Frustration picks in a row",
                  "3 Confusion picks in a row",
                  "One Satisfied pick"
                ]
              },
              {
                label: "Progress bar",
                cells: [
                  "Steps back",
                  "Moves forward slowly",
                  "Moves forward quickly"
                ]
              },
              {
                label: "Tone",
                cells: [
                  "Empathetic",
                  "Clarifying",
                  "Reassuring"
                ]
              },
              {
                label: "Reply",
                cells: [
                  "Step by step",
                  "Simple language",
                  "Short"
                ]
              },
              {
                label: "Action",
                cells: [
                  "Faster alternatives",
                  "Checks understanding: \"Is this clear?\"",
                  "Confirms the fix"
                ]
              }
            ],
            note: "Before any pick, the chat is White: a neutral tone that invites the customer to set the slider. Colours always appear with their label.",
            labelCol: true
          },
          after: [
            "Keywords only suggest. When the rulebook spots frustration, the bot asks the customer to set the slider; it never changes the chat state on its own."
          ]
        },
        {
          heading: "Screens",
          text: [
            "Four screens make up the support journey: subject selection, problem identification, the chat with its emotion slider, and the live voice assistant."
          ],
          visual: {
            kind: "walkthrough",
            video: {
              mp4: "/videos/myjio-walkthrough.mp4",
              webm: "/videos/myjio-walkthrough.webm",
              poster: "/videos/myjio-walkthrough-poster.jpg",
              width: 600,
              height: 1000,
              label: "Walkthrough of the redesigned JioCare chat, from picking the problem to a completed plan swap",
              credit: "Prototype walkthrough. Screens from the Figma prototype; phone number blurred."
            },
            screens: [
              {
                name: "Subject selection",
                text: "Category chips: Recharge & Payment, Data Usage, Network and six more."
              },
              {
                name: "Problem identification",
                text: "Likely issues as cards, each with its common questions and a CONTACT button."
              },
              {
                name: "Chatbox",
                text: "Replies with a progress bar, and the emotion slider above the input."
              },
              {
                name: "Live voice assistant",
                text: "Spoken, step-by-step guidance for tasks inside the app."
              },
              {
                name: "Controls",
                text: "Under every reply: read aloud, thumbs up or down, refresh. In the input bar: attach and mic. In the header: language switch."
              }
            ],
            prototype: {
              embedSrc: "https://embed.figma.com/proto/cnMnyMGdbUHpn9XdAsD0SI/MyJio-Customer-Assistance?node-id=3-11419&starting-point-node-id=3%3A11419&scaling=scale-down&content-scaling=fixed&hotspot-hints=1&embed-host=sukhman-portfolio",
              openHref: "https://www.figma.com/proto/cnMnyMGdbUHpn9XdAsD0SI/MyJio-Customer-Assistance?node-id=3-11419&starting-point-node-id=3%3A11419&scaling=scale-down&content-scaling=fixed&hotspot-hints=1",
              buttonLabel: "Try the prototype",
              openLabel: "Open the prototype in Figma",
              title: "MyJio Customer Assistance prototype (Figma)"
            }
          }
        },
        {
          heading: "Conversation Design",
          text: [
            "The conversation was scripted turn by turn for one problem: a recharge made by mistake, more than 24 hours ago. Each turn was written with a tone and a principle.",
            "Three of the eight turns are shown."
          ],
          visual: {
            kind: "screens",
            screens: [
              {
                src: "/images/projects/myjio-customer-assistance/highlights/convo-1.jpg",
                alt: "Chat: the bot shows the last recharge, the customer confirms it, and the bot explains why a refund is not possible",
                tag: "Turns 1 and 2 · polite, honest",
                accent: true,
                title: "Start from context",
                text: "The bot shows the last recharge and asks if it is the one, then explains the refund rule instead of looping.",
                width: 480,
                height: 1041
              },
              {
                src: "/images/projects/myjio-customer-assistance/highlights/convo-2.jpg",
                alt: "Chat: a summary of the plan change with old plan, new plan and adjustment, and the amount to pay",
                tag: "Turn 5 · transparent",
                title: "The full amount before paying",
                text: "Old plan, new plan and the adjustment, then \"you only need to pay ₹395\".",
                width: 480,
                height: 1041
              },
              {
                src: "/images/projects/myjio-customer-assistance/highlights/convo-3.jpg",
                alt: "Chat: a summary of the current plan with data left and the expiry date, and options to continue",
                tag: "Turn 8 · informative",
                title: "No guessing what is left",
                text: "A plan summary with the data left and the expiry date, then a way back home.",
                width: 480,
                height: 1041
              }
            ],
            note: "Path A, the refund within 24 hours, is written as a script and not built in the prototype. The 24-hour rule is assumed for this concept; the script's \"As per Jio's policy\" is not Jio's published policy.",
            framed: true
          }
        },
        {
          heading: "Iteration",
          text: [
            "The problem picker went through three versions. The first two asked for three picks in a fixed order before any help.",
            "The final one shows the likely issues straight away, with a way to contact support on every card."
          ],
          visual: {
            kind: "screens",
            screens: [
              {
                src: "/images/projects/myjio-customer-assistance/highlights/picker-v1.jpg",
                alt: "Version 1 of the problem picker: menu, subject and reason chips stacked on one screen",
                tag: "Version 1",
                title: "Three picks, stacked",
                text: "Menu, subject and reason on one screen, in a fixed order.",
                width: 480,
                height: 1041
              },
              {
                src: "/images/projects/myjio-customer-assistance/highlights/picker-v2.jpg",
                alt: "Version 2 of the problem picker: the same three steps with more options and icons",
                tag: "Version 2",
                title: "More choices, same three steps",
                text: "10 subjects and 7 issues, with icons, but still three picks in order.",
                width: 480,
                height: 1041
              },
              {
                src: "/images/projects/myjio-customer-assistance/highlights/picker-final.jpg",
                alt: "Final problem picker: category chips and issue cards, each with a CONTACT button",
                tag: "Final",
                accent: true,
                title: "From three steps to one look",
                text: "Category chips, then the likely issues as cards, each with its common questions and CONTACT.",
                width: 480,
                height: 1041
              }
            ],
            note: "Design rationale from comparing the three versions, not a test result.",
            framed: true
          },
          after: [
            "The final version has fewer steps, lets the customer recognise their issue instead of hunting for it, and keeps the way to a person visible from the start."
          ]
        }
      ],
      close: {
        text: "The chat starts from what the app already knows,",
        accent: "and lets the customer say how they feel."
      }
    },
    {
      id: "outcome",
      tocLabel: "Outcome & Reflection",
      short: true,
      accent: "#0a2885",
      gradient: GRADIENT,
      heading: "Outcome & Reflection",
      intro: [
        "Three people reviewed the prototype, and the redesign was checked against the eleven failures found in today's JioCare. The measures that would prove it better were then set out, followed by the next steps and what the project taught."
      ],
      open: {
        text: "Eight of the eleven failures are designed out.",
        accent: "Whether that makes JioCare better is the next test."
      },
      parts: [
        {
          heading: "Concept Review",
          text: [
            "Three people, classmates and others, were told the problem (a recharge made by mistake, refund wanted) and then used the prototype for that flow. Features that did not work yet were explained as concepts.",
            "Their feedback fell into three groups: what worked, what confused them, and what they asked."
          ],
          visual: {
            kind: "flow",
            steps: [
              {
                tag: "Worked",
                title: "Seeing progress",
                items: [
                  "The progress bar under each reply: they could see the problem moving towards a fix.",
                  "The coloured emotion options, once explained, felt like they answered how the customer was feeling."
                ]
              },
              {
                tag: "Confused",
                title: "How the colours work",
                items: [
                  "The slider had to be explained before they used it."
                ]
              },
              {
                tag: "Asked",
                title: "Is it actually better?",
                accent: true,
                items: [
                  "How do we know this is better than a normal chatbot, apart from the visual cues?"
                ]
              }
            ],
            note: "Paraphrased from the designer's notes; an informal review of the first iteration, not recorded.",
            align: true
          },
          after: [
            "The slider's caption says what to do, not what happens next, so the colours need teaching inside the chat. And the best question came from a reviewer: this case study does not claim the redesign is better yet; it sets out how to find out."
          ]
        },
        {
          heading: "Before and After",
          text: [
            "Every failure found in the walkthrough of today's JioCare was checked against the redesign."
          ],
          visual: {
            kind: "numbers",
            items: [
              {
                value: "8",
                small: "/11",
                cap: "failures designed out: the account data, the number, the tone, tap-to-reply options and more",
                accent: true
              },
              {
                value: "3",
                small: "/11",
                cap: "partly addressed: urgency handling, matching the app's data, and the hand-over to a person"
              },
              {
                value: "0",
                small: "/11",
                cap: "left untouched"
              }
            ],
            note: "\"Designed out\" means the design addresses the failure; it has not been measured with customers."
          }
        },
        {
          heading: "Measures",
          text: [
            "A side-by-side test, running the same task in today's JioCare and in the redesign, would answer the reviewer's question. These are the measures it would use."
          ],
          visual: {
            kind: "kpis",
            tag: "Same task, both bots",
            heads: [
              "Today's signal",
              "Target"
            ],
            rows: [
              [
                "Resolved in the chat",
                "90 / 502",
                "Up ↑"
              ],
              [
                "Repeat contacts",
                "71 / 502",
                "Down ↓"
              ],
              [
                "Could not reach a person",
                "94 / 502",
                "Down ↓"
              ],
              [
                "Effort per issue: turns and typing",
                "No baseline yet",
                "Down ↓"
              ]
            ],
            note: "Today's signal is the share of 502 support complaints: a signal from unhappy customers, not a rate across all chats. Targets stay as directions until a pilot gives a baseline."
          }
        },
        {
          heading: "What's Next",
          text: [
            "The next steps run in order: prove the idea against today's JioCare, build the parts the concept only names, and only then bring in more automation."
          ],
          visual: {
            kind: "flow",
            steps: [
              {
                tag: "Phase 1 · Prove it",
                title: "Comparison test",
                accent: true,
                items: [
                  "The same wrong-recharge task in today's JioCare and in the redesign, with 8 to 10 customers.",
                  "Answers the reviewer: better, or only different?"
                ]
              },
              {
                tag: "Phase 2 · Complete it",
                title: "Hand-over to a person",
                items: [
                  "When the customer asks, or after a Red chat, offer a person and pass on the chat summary.",
                  "94 of 502 complaints could not reach a person."
                ]
              },
              {
                tag: "Phase 3 · Scale carefully",
                title: "A guarded language model",
                items: [
                  "A model reads open-ended questions; approved policy text decides what the bot says about money.",
                  "The customer still sets the feeling."
                ]
              }
            ],
            align: true
          }
        },
        {
          heading: "Learnings",
          text: [
            "Three lessons this project taught, and what I would do differently next time."
          ],
          visual: {
            kind: "learn",
            head: [
              "Learning",
              "What happened",
              "Next time"
            ],
            rows: [
              {
                no: "01",
                title: "Start from what the system already knows.",
                accent: true,
                happened: "4 of the 11 failures came from a bot ignoring data the app already had. Opening with \"I see that your last activity was...\" removed the most typing in one move.",
                next: "Map what the product knows about the user before designing a single message."
              },
              {
                no: "02",
                title: "Let the person decide how they feel.",
                happened: "A model could guess emotion from text, but it misreads sarcasm and cannot be checked. A slider the customer controls kept them in charge.",
                next: "In any AI feature, decide early what the system may infer and what the person must confirm."
              },
              {
                no: "03",
                title: "Looking better is not proof of working better.",
                happened: "A reviewer asked how this beats a normal chatbot apart from the visual cues. A concept review could not answer that.",
                next: "Plan the comparison and the measures before the prototype, not after."
              }
            ]
          }
        }
      ],
      close: {
        text: "The best support bot is not the one that sounds most human.",
        accent: "It is the one that knows the customer, listens to them, and lets them out."
      }
    }
  ],
  endLinks: []
};
