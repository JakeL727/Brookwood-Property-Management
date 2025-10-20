import property1 from '../../data/properties/property-1.json';
import property2 from '../../data/properties/property-2.json';
import property3 from '../../data/properties/property-3.json';
import property4 from '../../data/properties/property-4.json';
import property5 from '../../data/properties/property-5.json';

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  status: 'available' | 'rented' | 'maintenance';
  featured: boolean;
  description: string;
  amenities: string[];
  images: string[];
  yearBuilt?: number;
  parking?: string;
  petsAllowed: boolean;
  laundry?: string;
}

const allProperties: Property[] = [
  property1,
  property2,
  property3,
  property4,
  property5,
] as Property[];

export function getAllProperties(): Property[] {
  return allProperties;
}

export function getFeaturedProperties(): Property[] {
  return allProperties.filter((property) => property.featured && property.status === 'available');
}

export function getAvailableProperties(): Property[] {
  return allProperties.filter((property) => property.status === 'available');
}

export function getPropertyById(id: string): Property | undefined {
  return allProperties.find((property) => property.id === id);
}

export interface FilterOptions {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  petsAllowed?: boolean;
  searchQuery?: string;
}

export function filterProperties(options: FilterOptions): Property[] {
  let filtered = getAvailableProperties();

  if (options.type && options.type !== 'all') {
    filtered = filtered.filter((p) => p.type === options.type);
  }

  if (options.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= options.minPrice!);
  }

  if (options.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= options.maxPrice!);
  }

  if (options.bedrooms !== undefined && options.bedrooms > 0) {
    filtered = filtered.filter((p) => p.bedrooms >= options.bedrooms!);
  }

  if (options.bathrooms !== undefined && options.bathrooms > 0) {
    filtered = filtered.filter((p) => p.bathrooms >= options.bathrooms!);
  }

  if (options.petsAllowed !== undefined) {
    filtered = filtered.filter((p) => p.petsAllowed === options.petsAllowed);
  }

  if (options.searchQuery) {
    const query = options.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  return filtered;
}