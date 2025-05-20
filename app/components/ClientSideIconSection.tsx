"use client";

import React from 'react';
import { FaExchangeAlt, FaChartBar, FaLayerGroup } from "react-icons/fa";

interface IconSectionProps {
  autoFailover: {
    title: string;
    desc: string;
  };
  monitoring: {
    title: string;
    desc: string;
  };
  scaling: {
    title: string;
    desc: string;
  };
}

export default function ClientSideIconSection({ autoFailover, monitoring, scaling }: IconSectionProps) {
  return (
    <>
      <div className="flex items-start mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 flex-shrink-0">
          <FaExchangeAlt className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{autoFailover.title}</h3>
          <p className="text-gray-300">
            {autoFailover.desc}
          </p>
        </div>
      </div>
      
      <div className="flex items-start mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 flex-shrink-0">
          <FaChartBar className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{monitoring.title}</h3>
          <p className="text-gray-300">
            {monitoring.desc}
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 flex-shrink-0">
          <FaLayerGroup className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{scaling.title}</h3>
          <p className="text-gray-300">
            {scaling.desc}
          </p>
        </div>
      </div>
    </>
  );
} 