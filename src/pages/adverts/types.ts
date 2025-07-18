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