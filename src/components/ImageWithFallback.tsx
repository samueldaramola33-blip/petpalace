import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackTitle?: string;
  fallbackIcon?: React.ReactNode;
  fallbackGradient?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt = 'Pet Palace',
  fallbackTitle,
  fallbackIcon,
  fallbackGradient = 'from-purple-600 via-fuchsia-600 to-pink-500',
  containerClassName = '',
  className = '',
  objectPosition = 'center',
  ...props
}: ImageWithFallbackProps & { objectPosition?: string }) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasTriedFallback && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!hasError && currentSrc ? (
        <>
          <img
            src={currentSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            style={{ objectPosition }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            {...props}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-purple-100/60 animate-pulse flex items-center justify-center">
              <PawPrint className="w-8 h-8 text-purple-300 animate-bounce" />
            </div>
          )}
        </>
      ) : (
        <div
          className={`w-full h-full min-h-[180px] bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-6 text-white text-center select-none`}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 shadow-inner">
            {fallbackIcon || <PawPrint className="w-6 h-6 text-white" />}
          </div>
          <span className="text-sm font-semibold tracking-wide text-white drop-shadow-sm">
            {fallbackTitle || alt || 'Pet Palace'}
          </span>
          <span className="text-xs text-white/80 mt-0.5">Pet Palace Veterinary Services</span>
        </div>
      )}
    </div>
  );
};
