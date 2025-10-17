import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProperties, getPropertyById } from "@/lib/properties";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Square, MapPin, Calendar, Car, Waves, PawPrint, Check } from "lucide-react";

export function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Image Gallery */}
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative h-96 md:h-[600px]">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-48 md:h-[296px]">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {property.featured && (
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    )}
                    {property.status === "available" ? (
                      <Badge variant="secondary" className="bg-green-500 text-white">Available</Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-gray-500 text-white">Rented</Badge>
                    )}
                    <Badge variant="outline" className="capitalize">{property.type}</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {property.title}
                  </h1>
                  <div className="flex items-start text-muted-foreground mb-6">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      {property.address}, {property.city}, {property.state} {property.zipCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-lg">
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Property Details */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.yearBuilt && (
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Year Built</p>
                            <p className="font-medium">{property.yearBuilt}</p>
                          </div>
                        </div>
                      )}
                      {property.parking && (
                        <div className="flex items-center">
                          <Car className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Parking</p>
                            <p className="font-medium">{property.parking}</p>
                          </div>
                        </div>
                      )}
                      {property.laundry && (
                        <div className="flex items-center">
                          <Waves className="h-5 w-5 mr-3 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Laundry</p>
                            <p className="font-medium">{property.laundry}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center">
                        <PawPrint className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Pets</p>
                          <p className="font-medium">{property.petsAllowed ? "Allowed" : "Not Allowed"}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Amenities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2">Monthly Rent</p>
                        <p className="text-4xl font-bold text-primary">
                          ${property.price.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground">/month</p>
                      </div>

                      <div className="space-y-3">
                        <Button asChild className="w-full" size="lg">
                          <Link href="/contact">Schedule Viewing</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full" size="lg">
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>

                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground text-center">
                          Interested in this property? Get in touch to schedule a viewing or ask questions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}