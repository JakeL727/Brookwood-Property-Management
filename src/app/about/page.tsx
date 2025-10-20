import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Brookwood Property Management
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in finding quality rental homes since 2013
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="prose max-w-none text-muted-foreground space-y-4">
                  <p>
                    Brookwood Property Management was founded in 2013 with a simple mission: to provide quality, 
                    affordable rental properties to families and individuals in the greater Atlanta area. 
                    What started as a small operation has grown into a trusted rental company managing 
                    5 well-maintained homes throughout Snellville and Lawrenceville, Georgia.
                  </p>
                  <p>
                    Over the years, we've built our reputation on transparency, responsiveness, and a 
                    genuine commitment to our tenants' satisfaction. We believe that everyone deserves 
                    a comfortable, safe place to call home, and we work hard every day to deliver on 
                    that promise.
                  </p>
                  <p>
                    Our properties range from charming family homes in quiet neighborhoods to modern homes 
                    with updated features. Each property is carefully maintained and regularly inspected 
                    to ensure it meets our high standards of quality and safety. We specialize in single-family 
                    homes in the Snellville and Lawrenceville areas, offering flexible payment options to 
                    accommodate our tenants' needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    We maintain all our properties to the highest standards
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm">
                    We're proud members of our community
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    We strive for excellence in every interaction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Care</h3>
                  <p className="text-muted-foreground text-sm">
                    We genuinely care about our tenants' happiness
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
            <Card>
              <CardContent className="p-8">
                  <p className="text-muted-foreground text-center mb-8">
                  Our dedicated team is committed to providing exceptional service to every tenant. 
                  We're available to answer questions, handle maintenance requests, and help you find the 
                  perfect rental home. We understand that every tenant's situation is unique, which is why 
                  we offer flexible payment plans and work with our tenants to find solutions that work for everyone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Property Management</h3>
                    <p className="text-muted-foreground">
                      Our experienced property managers oversee all aspects of property maintenance and 
                      tenant relations.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Maintenance Team</h3>
                    <p className="text-muted-foreground">
                      Our responsive maintenance team ensures that any issues are addressed quickly and 
                      professionally.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}