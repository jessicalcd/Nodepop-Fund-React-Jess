interface User {
  name: string;
  username: string;
}

export interface Advert {
  id: string;         
  name: string;
  sale: boolean;      
  price: number;
  tags: string[];
  photo?: string;   
  user: User;     
}

export interface AdvertsFilters {
  name: string;
  sale: string;
  priceMin: string;
  priceMax: string;
  tags: string[];
}

export interface CreateAdvertDto {
  name: string;
  price: number;
  sale: boolean;
  tags: string[];
  photo?: File;
}