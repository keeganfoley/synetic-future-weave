import { useState, useRef, useEffect, useCallback, FC, memo } from 'react';
import { ChevronDown } from 'lucide-react';
import './VideoHero.css';

interface VideoHeroProps {
  videoSrc: string;
  posterImage?: string;
  onScrollToContent?: () => void;
}

const VideoHero: FC<VideoHeroProps> = memo(({ videoSrc, posterImage, onScrollToContent }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-play on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Autoplay prevented:", e);
      });
    }
  }, []);

  // Mark as played when video ends
  const handleVideoEnd = useCallback(() => {
    setHasPlayed(true);
  }, []);

  // Restart video on interaction
  const handleInteraction = useCallback(() => {
    if (hasPlayed && videoRef.current && !hasInteracted) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasPlayed(false);
      setHasInteracted(true);
      
      // Reset interaction flag after video duration
      setTimeout(() => {
        setHasInteracted(false);
      }, 8000);
    }
  }, [hasPlayed, hasInteracted]);

  // Scroll and touch detection
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleInteraction();
      }, 50);
    };
    
    const handleTouch = () => {
      handleInteraction();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      clearTimeout(scrollTimeout);
    };
  }, [handleInteraction]);

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion && posterImage) {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        <img 
          src={posterImage} 
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>
    );
  }

  return (
    <div className="video-hero relative w-screen h-screen overflow-hidden bg-black">
      {/* Loading state with spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          {posterImage && (
            <img 
              src={posterImage} 
              alt="Loading..."
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          )}
          <div className="w-16 h-16 border-4 border-cosmic-gold/20 border-t-cosmic-gold rounded-full animate-spin" />
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        onLoadedData={() => setIsLoading(false)}
        onCanPlay={() => setCanPlay(true)}
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>

      {/* Gradient overlay for smooth transition to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Scroll indicator */}
      <button
        onClick={onScrollToContent}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-cosmic-gold/80 
                   hover:text-cosmic-gold transition-all duration-300 cursor-pointer
                   transition-opacity duration-1000
                   ${hasPlayed ? 'opacity-100 animate-bounce' : 'opacity-0'}`}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
});

VideoHero.displayName = 'VideoHero';

export default VideoHero;