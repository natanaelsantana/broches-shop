import React from 'react';

const Loading = () => {
  const items = [];

  for (let i = 0; i < 8; i++) {
    items.push(
      <div
        key={i}
        class="p-4 bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg"
        style={{ width: '300px', height: '250px' }}
      >
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>,
    );
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
      {items}
    </div>
  );
};

export default Loading;
