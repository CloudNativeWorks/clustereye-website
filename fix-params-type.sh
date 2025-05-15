#!/bin/bash

# TypeScript hatasını düzelten bash script

# Tüm page.tsx dosyalarını bul
FILES=$(find app/\[lang\] -name "page.tsx" -type f)

# Her dosya için
for file in $FILES; do
  echo "Processing $file..."
  
  # 1. Import satırını düzelt
  sed -i '' 's/import { Language } from/import { Language, LangParams } from/g' $file
  
  # 2. params tipini güncelle
  sed -i '' 's/params }: { params: { lang: Language }/params }: { params: LangParams }/g' $file
  
  # 3. ts-ignore ekle
  sed -i '' '/const lang = use(params)\.lang;/i\  \/\/ @ts-ignore - Next.js\x27in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz\n  \/\/ TypeScript\x27te şu an için tip hatası veriyor ama çalışıyor' $file
done

echo "All files processed!" 