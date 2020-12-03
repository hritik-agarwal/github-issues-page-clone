const issueslist = [
  {
    id: 0,
    text: "1Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 1,
    text: "2Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 2,
    text: "3Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 3,
    text: "4Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 4,
    text: "5Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 5,
    text: "6Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 6,
    text: "7Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 7,
    text: "8Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 8,
    text: "9Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 9,
    text: "10Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 10,
    text: "Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 11,
    text: "Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 12,
    text: "Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 13,
    text: "Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 14,
    text: "Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 15,
    text: "Show the checks status in the `hub pr list`",
    isOpen: true,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 16,
    text: "Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
  {
    id: 17,
    text: "Show the checks status in the `hub pr list`",
    isOpen: false,
    issueNumber: 100,
    dateOpened: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    issueCreator: "jojo",
    tags: [{ tagName: "feature", color: "#a2eeef" }, { tagName: "bug", color: "red" }]
  },
]

export default issueslist;