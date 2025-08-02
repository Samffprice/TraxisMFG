# WebP Image Conversion Guide

## 🖼️ Creating Proper WebP Images

The website is optimized for WebP images but currently uses JPEG fallbacks. Here's how to create proper WebP versions:

## Option 1: Using Online Tools (Easiest)
1. Go to https://squoosh.app/ or https://convertio.co/jpg-webp/
2. Upload your JPEG images
3. Choose WebP format with 80-90% quality
4. Download and replace in `/public/` directory

## Option 2: Using Command Line Tools

### Install cwebp (Google's WebP tools)
```bash
# macOS (using Homebrew)
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Windows (download from Google)
# https://developers.google.com/speed/webp/download
```

### Convert Images
```bash
# Navigate to your project
cd traxis-website/public

# Convert with high quality (80-90% recommended)
cwebp -q 85 home-hero.jpg -o home-hero.webp
cwebp -q 85 about-us.jpg -o about-us.webp

# Verify file sizes (WebP should be 25-35% smaller)
ls -lh *.jpg *.webp
```

## Option 3: Batch Conversion Script

Create a script to convert all images:

```bash
#!/bin/bash
# save as convert-to-webp.sh

for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        filename="${img%.*}"
        cwebp -q 85 "$img" -o "${filename}.webp"
        echo "Converted: $img → ${filename}.webp"
    fi
done
```

Run with: `chmod +x convert-to-webp.sh && ./convert-to-webp.sh`

## After Creating WebP Files

Update your components to use the OptimizedImage component:

```vue
<!-- Replace regular img tags with -->
<OptimizedImage 
  src="/home-hero.jpg" 
  webp-src="/home-hero.webp"
  alt="Traxis Manufacturing CNC Machining" 
  class="w-full h-full object-cover"
  loading="eager"
  width="1600"
  height="900"
/>
```

## Expected Benefits

| Format | File Size | Quality | Browser Support |
|--------|-----------|---------|-----------------|
| **JPEG** | 4.1MB | Good | 100% |
| **WebP** | ~2.8MB | Better | 95% |
| **Savings** | **32%** | **+10%** | Modern browsers |

## Verification

Test WebP support in different browsers:
- ✅ Chrome, Firefox, Safari (modern versions)
- ✅ Edge, Opera
- ❌ Internet Explorer (fallback to JPEG)

Your OptimizedImage component handles fallbacks automatically!

---

**Quick Start**: Use Squoosh.app for a one-time conversion, then update the image references in your components.