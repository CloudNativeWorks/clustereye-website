#!/bin/bash

# Next.js 15 için params tipini düzelten script

# Tüm page.tsx dosyalarını bul
find app/[lang] -name "page.tsx" -type f | while read file; do
  echo "Updating $file..."
  
  # Prop tipini güncelle
  sed -i '' 's/{ params: LangParams }/{ params: LangParams \| Promise<{lang: Language}> }/g' "$file"
  
  # use(params) kullanımını güncelle
  sed -i '' 's/const lang = use(params).lang;/const resolvedParams = use(params);\n  const lang = resolvedParams.lang;/g' "$file"
done

echo "All files have been updated!" 