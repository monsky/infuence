export interface Tab {
  name: string;
  icon: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface Product {
  name: string;
  id_seller: number;
  prize: number;
  color: string;
  // 'sizes': self.sizes,
  img_url: string;
  category_id: number;
  category_name: string;
  items_sold: number;
  approved: boolean;
  name_seller: string;
  processed: boolean;
}

export interface Term {
  id: number;
  percent: number;
}

export interface Country {
  id: number;
  serbianName: string;
}
