export interface SponsorsList {
  sponsors: Sponsor[];
}

export interface Sponsor {
  name: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  logo: string;
}
