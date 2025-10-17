"use client";

import { useState } from "react";
import { getAvailableProperties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PROPERTIES_PER_PAGE = 6;

export default function PropertiesPage() {
  const allProperties = getAvailableProperties();
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(allProperties.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const endIndex = startIndex + PROPERTIES_PER_PAGE;
  const currentProperties = allProperties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of properties section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Available Properties
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of {allProperties.length} rental properties
            </p>
            {totalPages > 1 && (
              <p className="text-sm text-muted-foreground mt-2">
                Showing {startIndex + 1}-{Math.min(endIndex, allProperties.length)} of {allProperties.length} properties
              </p>
            )}
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No properties found
                </h3>
                <p className="text-muted-foreground">
                  Please check back later for new listings.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}