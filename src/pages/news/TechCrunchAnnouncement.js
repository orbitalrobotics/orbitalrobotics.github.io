import React from 'react';
import SEO from '../../components/SEO';

const TechCrunchAnnouncement = () => {
    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Orbital Robotics at TechCrunch Disrupt 2025"
                description="Orbital Robotics pitches at TechCrunch Disrupt 2025, showcasing AI solutions for space infrastructure."
            />
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Orbital Robotics at TechCrunch Disrupt 2025
                    </h1>
                    <p className="text-text-secondary">November 24, 2025</p>
                </div>

                <div className="aspect-w-16 aspect-h-9 mb-12">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/B2yQrUy0n5s?si=kS0TDwIRv5lw6uSK&amp;start=2146"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-2xl border border-white/10 shadow-2xl"
                    ></iframe>
                </div>

                <div className="prose prose-lg prose-invert mx-auto">

                    <p className="lead text-xl text-white mb-8">
                        AI is transforming countless industries, and space is no exception. The Aerospace Corporation is hosting a #sponsored pitch-off at TechCrunch Disrupt to showcase startups working on innovative AI solutions to the hardest problems in space exploration, orbital intelligence, and infrastructure.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Participating Companies</h3>
                    <ul className="list-disc pl-6 mb-8 text-text-secondary">
                        <li>Magma Space</li>
                        <li>Little Place Labs</li>
                        <li>Orbital Robotics</li>
                        <li>Scout Space</li>
                    </ul>

                    <p className="text-text-secondary italic mb-8">
                        #TechCrunchDisrupt2025
                    </p>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-lg font-bold text-white mb-4">Follow TechCrunch</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <a href="https://tcrn.ch/youtube" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">YouTube</a>
                            <a href="http://tcrn.ch/instagram" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">Instagram</a>
                            <a href="https://tcrn.ch/tiktok" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">TikTok</a>
                            <a href="https://tcrn.ch/x" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">X (Twitter)</a>
                            <a href="https://tcrn.ch/threads" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">Threads</a>
                            <a href="https://tcrn.ch/facebook" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">Facebook</a>
                            <a href="https://tcrn.ch/bluesky" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">Bluesky</a>
                            <a href="https://tcrn.ch/mstdn" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">Mastodon</a>
                        </div>
                        <p className="mt-6 text-sm text-text-muted">
                            Read more at <a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">TechCrunch.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCrunchAnnouncement;
