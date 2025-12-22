import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SegmentationDemoVideo from '../../assets/video/segmentation_demo2.mp4';

const NavIQ = () => {
    return (
        <div className="min-h-screen bg-background text-text-primary pt-20">
            <SEO
                title="NavIQ - Orbital Robotics"
                description="NavIQ: Real-time pose and velocity estimation of Resident Space Objects without CAD models or fiducial markers."
            />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                            Software Product
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                            Nav<span className="text-primary">IQ</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                            Real-time pose and velocity estimation of Resident Space Objects without CAD models or fiducial markers.
                        </p>
                    </div>
                </div>
                {/* Background gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            </section>

            {/* Performance Specifications - Scaffolding (TODO: Fill in real values)
            <section className="py-16 bg-surface">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">Algorithm Performance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-4">Pose Estimation Accuracy</h3>
                            <p className="text-text-secondary">
                                TODO: Add translation error (cm) and rotation error (deg) metrics here.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-4">Inference Speed</h3>
                            <p className="text-text-secondary">
                                TODO: Add processing speed (Hz) on standard flight hardware.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-4">Resource Efficiency</h3>
                            <p className="text-text-secondary">
                                TODO: Add RAM/CPU usage statistics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            }

            {/* Demos Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Demos</h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            See NavIQ in action performing advanced segmentation and tracking tasks.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-black">
                            {/* Video container with aspect ratio */}
                            <div className="aspect-w-16 aspect-h-9">
                                <video
                                    src={SegmentationDemoVideo}
                                    controls
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-text-secondary">
                                Demonstration of real-time segmentation and object recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <Link
                            to="/products"
                            state={{ keepScroll: true }}
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-medium transition-all backdrop-blur-sm"
                        >
                            ← Back to Products
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NavIQ;
