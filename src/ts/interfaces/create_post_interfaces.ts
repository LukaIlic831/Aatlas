export interface IPostCategory {
    id: string;
    text: string;
  }
  
  export interface IPostCategories {
    selectedCategory: null | string;
    categories: IPostCategory[];
  }