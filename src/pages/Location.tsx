import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // Replace with actual API key
const STORE_LOCATION = { lat: 40.8612, lng: -79.8961 }; // Butler, PA coordinates

export function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly"
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: STORE_LOCATION,
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#757575" }]
            }
          ]
        });

        new google.maps.Marker({
          position: STORE_LOCATION,
          map: map,
          title: "Lisa's Natural Path",
          animation: google.maps.Animation.DROP
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-purple text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Visit Our Store</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experience our natural wellness products in person and get expert guidance from our knowledgeable staff.
          </p>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg" ref={mapRef}></div>

            {/* Store Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-brand-purple mb-6">Store Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-purple mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">
                        1779 N Main St<br />
                        Butler, PA 16001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-brand-purple mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Hours</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                        <li>Saturday: 10:00 AM - 4:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-purple mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">(724) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-brand-purple mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@lisasnaturalpath.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif text-brand-purple mb-4">Plan Your Visit</h3>
                <p className="text-gray-600 mb-4">
                  Our store features a wide selection of natural supplements, herbal remedies, and wellness products. 
                  Our knowledgeable staff is always ready to help you find the perfect solutions for your health needs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Free parking available</li>
                  <li>• Wheelchair accessible</li>
                  <li>• Private consultation rooms</li>
                  <li>• Product sampling available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}