type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  thumbnail: string;
  images: string[];
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type MetaData = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type { MetaData, Review, Dimensions, Product, ProductResponse };
