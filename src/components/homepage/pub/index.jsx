import React from 'react';
import { Smartphone, Building2, Building, HomeIcon, Landmark, Factory, Megaphone } from 'lucide-react';
import Countmtl from "./../countmtl"

export function Pub() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

