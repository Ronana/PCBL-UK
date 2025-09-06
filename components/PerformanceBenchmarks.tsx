import React, { useState, useMemo } from 'react';
import { Benchmark } from '../types';

interface PerformanceBenchmarksProps {
    benchmarks: Benchmark[];
}

type Resolution = '1080p' | '1440p' | '4K';

const PerformanceBenchmarks: React.FC<PerformanceBenchmarksProps> = ({ benchmarks }) => {
    const [activeResolution, setActiveResolution] = useState<Resolution>('1440p');

    const availableResolutions = useMemo(() => {
        const resolutions = new Set(benchmarks.map(b => b.resolution));
        const ordered: Resolution[] = [];
        if (resolutions.has('1080p')) ordered.push('1080p');
        if (resolutions.has('1440p')) ordered.push('1440p');
        if (resolutions.has('4K')) ordered.push('4K');
        return ordered;
    }, [benchmarks]);

    const filteredBenchmarks = useMemo(() => {
        return benchmarks.filter(b => b.resolution === activeResolution);
    }, [benchmarks, activeResolution]);

    const TabButton: React.FC<{ resolution: Resolution }> = ({ resolution }) => (
        <button
            onClick={() => setActiveResolution(resolution)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeResolution === resolution
                    ? 'bg-brand-purple text-white'
                    : 'bg-brand-dark text-gray-300 hover:bg-gray-800'
            }`}
        >
            {resolution.toUpperCase()}
        </button>
    );
    
    // Find the max FPS for scaling the bars, capped at a reasonable number like 240
    const maxFps = Math.min(Math.max(...benchmarks.map(b => b.fps), 144), 300);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Estimated Performance</h3>
                <div className="flex space-x-2 p-1 bg-brand-dark rounded-lg">
                    {availableResolutions.map(res => <TabButton key={res} resolution={res} />)}
                </div>
            </div>

            <div className="space-y-4">
                {filteredBenchmarks.map((bench, index) => (
                    <div key={index} className="space-y-1">
                        <div className="flex justify-between items-baseline text-sm">
                            <span className="font-semibold text-gray-200">{bench.game}</span>
                            <span className="text-gray-400">{bench.settings} Settings</span>
                        </div>
                        <div className="w-full bg-brand-dark rounded-full h-6 overflow-hidden relative">
                            <div
                                className="bg-gradient-to-r from-brand-teal to-brand-purple h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                                style={{ width: `${(bench.fps / maxFps) * 100}%` }}
                            >
                               <span className="font-bold text-sm text-white">{bench.fps} FPS</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">
                * Performance figures are estimates based on component specifications and internal testing. Actual FPS may vary depending on game updates, driver versions, and background applications.
            </p>
        </div>
    );
};

export default PerformanceBenchmarks;
