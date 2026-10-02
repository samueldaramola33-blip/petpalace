export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface GalleryPhotoSlot {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fallbackUrl?: string;
}
