interface Goal {
  percentComplete: number;
  title: string;
  targetValueInDollar: number;
  monthlySponsorshipInCents: number;
}

interface User {
  login: string;
  url: string;
  name: string;
  avatarUrl: string;
}

export { User, Goal };
