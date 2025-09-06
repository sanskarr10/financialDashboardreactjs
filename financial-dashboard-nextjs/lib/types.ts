export type Summary = {
  aum: { value: number; mom: number };
  sip: { value: number; mom: number };
  stats: {
    purchases: number;
    redemptions: number;
    rejected: number;
    sipRejections: number;
    newSip: number;
  }
};

export type ClientsPoint = { name: string; value: number; x: number; y: number; z: number };
export type SipBizRow = { month: string; amount: number; count: number };
export type MonthlyRow = { month: string; purchases: number; redemptions: number; sip: number };
