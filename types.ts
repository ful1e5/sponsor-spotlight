interface Goal {
  percentComplete: number;
  title: string;
  targetValueInDollar: number;
  monthlySponsorshipInCents: number;
}

type SponsorshipTiers = {
  [key: string]: number;
};

interface User {
  login: string;
  url: string;
  name: string;
  avatarUrl: string;
  dollar: number;
  tier: string;
}

interface Me {
  login: string;
  url: string;
  name: string;
  avatarUrl: string;
  total_dollar: number;
}

export { User, Me, Goal, SponsorshipTiers };

