export interface MobileSpecificationItem {
  label: string;
  value: string;
  status?: boolean;
}

export interface MobileSpecificationSubgroup {
  title: string;
  items: MobileSpecificationItem[];
}

export interface MobileSpecificationGroup {
  title: string;
  score?: number;
  items?: MobileSpecificationItem[];
  subgroups?: MobileSpecificationSubgroup[];
}

export interface MobileDetailData {
  phone: {
    name: string;
    image: string;
    marketStatus: string;
    releaseDate: string;
    brand: string;
    price: number;
    priceStatus: string;
    score: number;
    variant: string;
    variantRegion: string;
    variantPrice: number;
    updatedAt: string;
    imageCount: number;
    colorCount: number;
  };
  highlights: {
    phoneName: string;
    text: string;
  };
  quickSpecifications: { label: string; value: string }[];
  operatingSystem: string;
  features: string[];
  fullSpecificationPreview: { label: string; value: string }[];
  bannerColorOptions: string[];
  specificationGroups: MobileSpecificationGroup[];
  productInfo: {
    title: string;
    rows: { label: string; value: string }[];
  };
  relatedProducts?: {
    title: string;
    products: {
      name: string;
      price: string;
      status: string;
      image: string;
    }[];
  };
  reviews: {
    title: string;
    initialAverageRating: number;
    initialRatingCount: number;
    initialReviewCount: number;
    sentimentStats: {
      label: string;
      count: number;
      percentage: number;
      color: string;
    }[];
    reviewFields: {
      id: string;
      label: string;
      type: "text" | "email" | "textarea";
    }[];
    reviewFormTitle: string;
    reviewFormGuidance: string;
    reviewFormInitialRating: number;
    inlineReviewFormInitialRating: number;
  };
}
