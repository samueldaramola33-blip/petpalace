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
  objectPosition?: string;
}

export const BUSINESS_INFO = {
  name: 'Pet Palace',
  fullName: 'Pet Palace Veterinary Services',
  phone: '07065832371',
  phoneDisplay: '+234 706 583 2371',
  whatsappNumber: '2347065832371',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'pet-sales',
    title: 'Pet Sales (Cats & Dogs)',
    subtitle: 'Healthy Purebred Puppies & Kittens',
    description: 'We connect families with healthy, well-cared-for cats and dogs. Contact us to learn more about available pets and our process.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'import-export',
    title: 'Importation & Exportation',
    subtitle: 'International Pet Sourcing & Transport',
    description: 'We help source and safely transport pedigree pets internationally, with full support throughout the process. Contact us for details on a specific breed or destination.',
    iconName: 'Globe',
  },
  {
    id: 'accessories',
    title: 'Pet Accessories',
    subtitle: 'Quality Gear & Daily Essentials',
    description: 'We offer a curated selection of quality pet accessories, comfortable bedding, secure carriers, and daily essentials to keep your pets happy and healthy.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'delivery',
    title: 'Nationwide Delivery',
    subtitle: 'Safe Doorstep Transit',
    description: 'We provide safe, reliable delivery across the country to bring your new companion directly to your doorstep with care and updates along the way.',
    iconName: 'Truck',
  },
];

// The 4 client pet photos with general labels (Kitten / Puppy)
export const FOUR_GALLERY_SLOTS: GalleryPhotoSlot[] = [
  {
    id: 'slot-1',
    title: 'Kitten',
    category: 'Kitten',
    imageUrl: '/pet1.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    objectPosition: 'center 80%',
  },
  {
    id: 'slot-2',
    title: 'Cat',
    category: 'Cat',
    imageUrl: '/pet2.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    objectPosition: 'center 25%',
  },
  {
    id: 'slot-3',
    title: 'Puppy',
    category: 'Puppy',
    imageUrl: '/pet4.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'slot-4',
    title: 'Puppy',
    category: 'Puppy',
    imageUrl: '/pet3.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
  },
];
