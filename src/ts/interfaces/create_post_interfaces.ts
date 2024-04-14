export interface IPostCategory {
  id: string;
  title: string;
  subTitle: string;
  image: string;
}

export interface IPostCategories {
  selectedCategory: null | string;
  categories: IPostCategory[];
}

export interface IImagePreview {
  imageUrl: string;
  name: string;
}

export interface IViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface INewPlace {
  latitude: number;
  longitude: number;
}
