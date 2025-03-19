import React, { useState } from 'react';
import { 
  Leaf, 
  MapPin, 
  Calendar, 
  ShoppingBag, 
  Star, 
  Clock, 
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('lisas_natural_path_email_list')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for your 10% discount code.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/background-Lavender-header.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-10"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-purple mb-6 max-w-5xl">
            Holistic Wellness Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-brand-purple/90 mb-12 max-w-3xl">
            Premium Herbal Remedies, Supplements & Wellness Support for Your Natural Health Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag size={20} />
              Shop Now
            </Link>
            <Link 
              to="/consultation"
              className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar size={20} />
              Book a Consultation
            </Link>
            <Link 
              to="/location"
              className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <MapPin size={20} />
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-serif mb-6">
            Holistic Health Services Tailored to You
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Experience the transformative power of our comprehensive wellness services. 
            From personalized nutritional consultations to therapeutic massage and herbal 
            guidance, our expert practitioners are dedicated to supporting your journey 
            to optimal health and vitality.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-white hover:bg-white/90 text-brand-purple px-8 py-4 rounded-full text-lg transition-colors"
          >
            Learn More
            <ChevronRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/Lisa_at-desk.jpg"
                alt="Lisa at her desk"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-brand-purple mb-6">About Lisa's Natural Path</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a passion for holistic healing, Lisa's Natural Path provides high-quality 
                herbal supplements, natural remedies, and expert wellness guidance. With over 15 years 
                of experience in natural medicine, we're committed to helping you achieve optimal health 
                through nature's wisdom.
              </p>
              <Link 
                to="/about" 
                className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-full flex items-center w-fit"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-brand-purple mb-12">
            Our Best-Selling Herbal Remedies & Supplements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Probiotic Eleven",
                price: "$42.95",
                image: "/assets/supplements/NaturesSunshine_ProbioticEleven.png",
                description: "A comprehensive probiotic blend supporting digestive and immune health."
              },
              {
                name: "Chlorophyll Stick Packs",
                price: "$34.50",
                image: "/assets/supplements/NaturesSunshine_Chlorophyll-detox-stick-pack.png",
                description: "Convenient, on-the-go packs for natural detoxification and energy support."
              },
              {
                name: "Calm Day 120 ct.",
                price: "$59.50",
                image: "/assets/supplements/NutritionalFrontiers_CalmDay_120ct.png",
                description: "Natural stress relief and mood support supplement."
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <p className="text-brand-green font-bold mb-4">{product.price}</p>
                  <Link
                    to="/shop"
                    className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white px-4 py-2 rounded-full inline-block text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-full inline-flex items-center"
            >
              Shop All Products
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-brand-purple mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex text-brand-purple mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Dr. Lisa, your CleanStart Program has transformed my health. I've eliminated prescription meds, lost a jean size, and no longer crave coffee or sweets. Thank you!"
              </p>
              <p className="font-semibold text-gray-900">- Karen Landers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex text-brand-purple mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "After one week of using CBD Hemp Bomb capsules, my IBS, rheumatoid arthritis, and gout symptoms improved significantly. I now have normal bowel movements, reduced pain, increased energy, and enjoy restful sleep."
              </p>
              <p className="font-semibold text-gray-900">- Sharon</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex text-brand-purple mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "After NAET treatments with Dr. Lisa, my headaches vanished, heartburn subsided, and seasonal allergies improved. I feel revitalized and healthier now."
              </p>
              <p className="font-semibold text-gray-900">- Sandy B.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-brand-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Join Our Wellness Community</h2>
          <p className="text-xl mb-8">Subscribe & Get 10% Off Your First Order</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-800 w-full sm:w-96"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail className="mr-2" size={20} />
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-300' : 'text-red-300'
            }`}>
              {message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}