export interface Artist {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
}

export interface Album {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}
