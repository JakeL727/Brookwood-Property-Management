"use client";

import Link from "next/link";
import Image from "next/image";
import { Property } from "@/lib/properties";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
          {property.status === "available" ? (
            <Badge variant="secondary" className="bg-green-500 text-white">Available</Badge>
          ) : (
            <Badge variant="secondary" className="bg-gray-500 text-white">Rented</Badge>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
          <div className="flex items-start text-muted-foreground text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{property.address}, {property.city}, {property.state}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {property.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-primary">${property.price.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}