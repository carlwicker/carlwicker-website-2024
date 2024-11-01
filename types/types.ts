export interface Store {
  name: string;
  website: string;
  location: string;
}

export interface Seed {
  id: string;
  name: string;
  type: string;
  thc_content: string;
  cbd_content: string;
  effects: string[];
  flavor_profile: string[];
  price_per_seed: string;
  availability: boolean;
}

export interface SeedData {
  store: Store;
  seeds: Seed[];
}
