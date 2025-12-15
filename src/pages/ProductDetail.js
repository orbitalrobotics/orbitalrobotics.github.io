import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ComingSoonImg from '../assets/images/coming_soon.png';

const ProductDetail = () => {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center">
            <SEO title="Product Detail" />
            <div className="text-center px-6">
                <img src={ComingSoonImg} alt="Coming Soon" className="w-32 h-32 mx-auto mb-8 opacity-80" />
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8">Coming Soon</h1>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                    Detailed specifications and information for this product are currently being updated. Please check back shortly.
                </p>
                <Link
                    to="/products"
                    state={{ keepScroll: true }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-medium transition-all backdrop-blur-sm"
                >
                    ← Back to Products
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;
