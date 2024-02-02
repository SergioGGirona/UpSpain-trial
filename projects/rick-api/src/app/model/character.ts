export type ApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: null | string;
  };
  results: Character[];
};

export type Character = {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
};
