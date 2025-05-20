"use client";

import React, { useState, useEffect } from 'react';

export default function ClientCopyright({ copyright }: { copyright: string }) {
  const [year, setYear] = useState("2025"); // Default year as fallback
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <p className="text-center text-sm text-gray-400">
      &copy; {year} ClusterEye. {copyright}
    </p>
  );
} 