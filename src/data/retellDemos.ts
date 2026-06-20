// Shareable Retell AI demo "orbs" — each is a public share URL from Retell.
// To add an industry: create the orb in Retell, hit Share, paste the URL below.
// Note: these share URLs embed a public token by design (they're meant to be shared).
// If you regenerate/revoke a token in Retell, update the matching `orbUrl` here.

export interface RetellDemo {
  /** stable key used for filtering + React keys */
  industry: string;
  /** card title */
  label: string;
  /** one-line card description */
  blurb: string;
  /** single letter for the brand Icon tile */
  icon: string;
  /** Retell orb share URL */
  orbUrl: string;
}

export const retellDemos: RetellDemo[] = [
  {
    industry: 'heating',
    label: 'Heating & Plumbing',
    blurb: 'Hear the AI take a boiler-repair call — book the job, capture the details, never miss a lead.',
    icon: 'H',
    orbUrl:
      'https://agent.retellai.com/orb/agent_e4686e0176e2bdd1eec7c542e6?token=2fbaca22cc6c6090ecff0e2227409dd1',
  },
  // Add more orbs here, e.g.:
  // { industry: 'dental',      label: 'Dental Practice',  blurb: '…', icon: 'D', orbUrl: 'https://agent.retellai.com/orb/agent_…?token=…' },
  // { industry: 'electrician', label: 'Electricians',     blurb: '…', icon: 'E', orbUrl: 'https://agent.retellai.com/orb/agent_…?token=…' },
];
