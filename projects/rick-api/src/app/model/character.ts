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
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
};

export const initialState: ApiResponse = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null,
  },
  results: [
    {
      id: '1',
      name: '',
      status: 'unknown',
      species: '',
      type: '',
      gender: 'Male',
      origin: { name: '' },
      location: { name: '' },
      image: '',
      created: '',
    },
  ],
};
