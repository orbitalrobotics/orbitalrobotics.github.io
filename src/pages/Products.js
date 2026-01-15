import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigationType } from 'react-router-dom';
import SEO from '../components/SEO';
import { services, hardwareProducts, softwareProducts } from '../data/productsData';
import ComingSoonImg from '../assets/images/coming_soon.png';

const ProductCard = ({ id, title, description, image, video, videos, category, imageFit = "cover", imageBg = "", videoFit = "cover", videoBg = "", videoPosition = "center", onSaveScroll }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    // Handle video sequencing if 'videos' array is present
    const handleVideoEnded = () => {
        if (videos && videos.length > 1) {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        }
    };

    // Reset video source when index changes
    useEffect(() => {
        if (videoRef.current && videos && videos.length > 0) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
        }
    }, [currentVideoIndex, videos]);

    const activeVideo = videos ? videos[currentVideoIndex] : video;

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-surface border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
            <Link to={`/products/${id}`} onClick={onSaveScroll} className="block flex-1 flex flex-col">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                    {activeVideo ? (
                        <video
                            ref={videoRef}
                            src={activeVideo}
                            autoPlay
                            loop={!videos} // Loop only if not using sequential videos
                            muted
                            playsInline
                            onEnded={handleVideoEnded}
                            className={`w-full h-64 object-${videoFit} ${videoBg} transform group-hover:scale-105 transition-transform duration-700`}
                            style={{ objectPosition: videoPosition }}
                        />
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-64 object-${imageFit} ${imageBg} transform group-hover:scale-105 transition-transform duration-700`}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8 relative z-10 flex flex-col flex-1">
                    <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">{category}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">{title}</h3>
                    <p className="text-text-secondary mb-6 line-clamp-3 flex-1">{description}</p>
                    <span
                        className="inline-flex items-center text-white font-medium hover:text-primary transition-colors mt-auto"
                    >
                        Learn More <span className="ml-2">→</span>
                    </span>
                </div>
            </Link>
        </div>
    );
};

const Products = () => {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // If returning to the page (POP action) OR if keeping scroll via state
        if (navigationType === 'POP' || location.state?.keepScroll) {
            const savedPosition = sessionStorage.getItem('productsScrollPosition');
            if (savedPosition) {
                // Short timeout to ensure DOM is ready
                setTimeout(() => {
                    window.scrollTo(0, parseInt(savedPosition, 10));
                }, 0);
            }
        }
    }, [navigationType, location]);

    const saveScrollPosition = () => {
        sessionStorage.setItem('productsScrollPosition', window.scrollY.toString());
    };

    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Products"
                description="Explore our advanced space hardware and software products, including robotic arms, AstroBot free-flyers, and SatelliteOS."
            />
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Products & Services</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Advanced robotics and software infrastructure enabling the future of space operations.
                    </p>
                </div>

                {/* Hardware Section - Updated Order: First */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Hardware</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hardwareProducts.map((product, index) => (
                            <ProductCard key={index} {...product} onSaveScroll={saveScrollPosition} />
                        ))}
                    </div>
                </div>

                {/* Software Section - Updated Order: Second */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Software</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {softwareProducts.map((product, index) => (
                            <ProductCard key={index} {...product} onSaveScroll={saveScrollPosition} />
                        ))}
                    </div>
                </div>

                {/* Services Section - Updated Order: Third */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Future Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ProductCard key={index} {...service} onSaveScroll={saveScrollPosition} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center bg-surface rounded-3xl p-12 border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to upgrade your mission?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Contact our engineering team to discuss how Orbital Robotics can support your specific mission requirements.
                    </p>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;
