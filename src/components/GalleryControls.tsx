import { Grid, LayoutGrid, Rows } from 'lucide-react';

type ViewMode = 'grid' | 'masonry' | 'rows';

interface GalleryControlsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function GalleryControls({ viewMode, onViewModeChange }: GalleryControlsProps) {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl text-gray-700 font-light">Glimpses</h2>
      <div className="flex gap-2">
        {[
          { mode: 'grid' as const, icon: LayoutGrid },
          { mode: 'masonry' as const, icon: Grid },
          { mode: 'rows' as const, icon: Rows },
        ].map(({ mode, icon: Icon }) => (
          <button
            key={mode}
            onClick={() => onViewModeChange(mode)}
            className={`p-2 rounded-md transition-colors ${
              viewMode === mode
                ? 'bg-[#4A4243] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}