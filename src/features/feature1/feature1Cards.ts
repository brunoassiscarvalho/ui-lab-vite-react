export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  body: string;
  actionLabel: string;
  actionVariant: "primary" | "secondary";
};

export const featureCards: FeatureCard[] = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Monitor your activity and usage in one place.",
    body: "Find trends, spot anomalies, and understand where your team is spending time.",
    actionLabel: "View analytics",
    actionVariant: "primary",
  },
  {
    id: "tasks",
    title: "Task board",
    description: "Organize work with boards, statuses, and cards.",
    body: "Quickly assign, prioritize, and complete tasks across your workspace.",
    actionLabel: "View tasks",
    actionVariant: "secondary",
  },
  {
    id: "insights",
    title: "Insights",
    description: "Get fast access to the metrics that matter.",
    body: "Build reports that surface progress, blockers, and outcomes for every sprint.",
    actionLabel: "View insights",
    actionVariant: "secondary",
  },
  {
    id: "settings",
    title: "Workspace settings",
    description: "Configure preferences, members, and notifications.",
    body: "Control access, customize visibility, and keep the team aligned with a single source of truth.",
    actionLabel: "Open settings",
    actionVariant: "primary",
  },
  {
    id: "reports",
    title: "Reports",
    description: "Create and share summaries for your team.",
    body: "Save recurring reports, export them to PDF, and keep stakeholders informed.",
    actionLabel: "Open reports",
    actionVariant: "secondary",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect your favorite tools and services.",
    body: "Automate updates, sync data across platforms, and reduce one-off work.",
    actionLabel: "Manage integrations",
    actionVariant: "secondary",
  },
  {
    id: "security",
    title: "Security",
    description: "Set permissions and protect your workspace.",
    body: "Review access controls, configure SSO, and keep sensitive projects safe.",
    actionLabel: "Open security",
    actionVariant: "primary",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Collect comments and feature requests.",
    body: "Give the team a place to capture ideas, bugs, and improvement opportunities.",
    actionLabel: "View feedback",
    actionVariant: "secondary",
  },
];

export function getFeatureCardById(id: string | undefined) {
  return featureCards.find((card) => card.id === id);
}
