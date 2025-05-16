#!/bin/bash

# İlgili sayfaların içindeki 2023 tarihlerini 2025 olarak güncelle

echo "Tarihleri güncelleniyor..."

# Status sayfasını güncelle
sed -i '' 's/2023-/2025-/g' app/[lang]/status/page.tsx

# Blog sayfasını güncelle
cat app/[lang]/blog/page.tsx | 
sed 's/2023/2025/g' > temp_file && mv temp_file app/[lang]/blog/page.tsx

# Privacy sayfasını güncelle
cat app/[lang]/privacy/page.tsx | 
sed 's/2023/2025/g' > temp_file && mv temp_file app/[lang]/privacy/page.tsx

# Terms sayfasını güncelle
cat app/[lang]/terms/page.tsx | 
sed 's/2023/2025/g' > temp_file && mv temp_file app/[lang]/terms/page.tsx

echo "Tüm tarihler 2023'ten 2025'e güncellendi!" 