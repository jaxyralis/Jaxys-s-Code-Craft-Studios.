import { X } from 'lucide-react';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={image}
        alt="Full view"
        className="max-w-full max-h-[90vh] object-contain rounded-xl"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
