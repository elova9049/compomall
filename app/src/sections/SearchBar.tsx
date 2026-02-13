import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-murata-light py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch}>
          <label className="block text-sm text-murata-gray mb-3">
            通过关键词搜索
          </label>
          <div className="flex flex-col sm:flex-row gap-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="请输入产品型号、产品名等"
              className="flex-1 px-4 py-4 text-base border border-gray-300 rounded-sm sm:rounded-r-none focus:outline-none focus:border-murata-red focus:ring-1 focus:ring-murata-red"
            />
            <button
              type="submit"
              className="bg-murata-red hover:bg-red-700 text-white px-8 py-4 text-base font-medium transition-colors flex items-center justify-center sm:rounded-l-none rounded-sm mt-2 sm:mt-0"
            >
              <Search className="w-5 h-5 mr-2" />
              搜索
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
