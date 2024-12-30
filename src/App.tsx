import { useState } from 'react';
import { Header } from './components/Header';
import { GalleryControls } from './components/GalleryControls';
import { PhotoGrid } from './components/PhotoGrid';
import { Footer } from './components/Footer';
import { weddingPhotos } from './data/photos';

type ViewMode = 'grid' | 'masonry' | 'rows';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="min-h-screen bg-white">
      <Header title="Anirudh & Martha" date="13 Jan 2019" />
      <main className="py-8">
        <GalleryControls viewMode={viewMode} onViewModeChange={setViewMode} />
        <PhotoGrid photos={weddingPhotos} viewMode={viewMode} />
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => {/* Implement load more functionality */}}
          >
            Load More
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;