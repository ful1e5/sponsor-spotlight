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
  dollar: number;
}

interface Me {
  login: string;
  url: string;
  name: string;
  avatarUrl: string;
  total_dollar: number;
}

export { User, Me, Goal };

