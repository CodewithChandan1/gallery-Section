interface Photo {
  url: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
  viewMode: 'grid' | 'masonry' | 'rows';
}

export function PhotoGrid({ photos, viewMode }: PhotoGridProps) {
  const gridClasses = {
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
    masonry: 'columns-1 sm:columns-2 lg:columns-3 gap-4',
    rows: 'flex flex-col gap-4',
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 ${gridClasses[viewMode]}`}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${
            viewMode === 'masonry' ? 'mb-4' : ''
          } overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]`}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}