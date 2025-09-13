/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import Header from './components/Header';
import PathogenicityPrediction from './components/CodePreview';
import DataExtraction from './components/ToggleButton';

export default function Home() {
  const [activeTab, setActiveTab] = useState('prediction');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'prediction':
        return <PathogenicityPrediction />;
      case 'extraction':
        return <DataExtraction />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs" role="tablist">
            <button
              id="tab-prediction"
              role="tab"
              aria-controls="tabpanel-prediction"
              aria-selected={activeTab === 'prediction'}
              onClick={() => setActiveTab('prediction')}
              className={`${
                activeTab === 'prediction'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300`}
            >
              Pathogenicity Prediction
            </button>
            <button
              id="tab-extraction"
              role="tab"
              aria-controls="tabpanel-extraction"
              aria-selected={activeTab === 'extraction'}
              onClick={() => setActiveTab('extraction')}
              className={`${
                activeTab === 'extraction'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300`}
            >
              Chromosomal & Proteomic Data
            </button>
          </nav>
        </div>
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${activeTab}`}
        >
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}
