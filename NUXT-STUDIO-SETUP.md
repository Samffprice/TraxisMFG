# Nuxt Studio Setup Guide

Your Traxis Manufacturing website is now ready for Nuxt Studio integration! 🎉

## What's Been Added

✅ **@nuxt/content v3** module installed and configured  
✅ **Content directory** created with enhanced markdown files  
✅ **Content v3 configuration** file (`content.config.ts`) added  
✅ **ContentLayout component** - integrates content with your existing design  
✅ **Document-driven mode** implemented with beautiful styling  
✅ **Enhanced content structure** with frontmatter support for values, images, etc.  
✅ **Seamless integration** with your existing components and design system

## File Structure

```
traxis-website/
├── content/
│   ├── home-testimonials.md  # Customer testimonials for home page
│   ├── home-services.md      # Service cards for home page
│   └── home-faqs.md          # FAQ section for home page
├── content.config.ts         # Content v3 configuration
└── pages/
    └── index.vue             # ✅ Updated to use content collections
```

## How to Connect to Nuxt Studio

1. **Push your code to GitHub** (if not already done)
2. **Go to [Nuxt Studio](https://nuxt.studio)**
3. **Connect your GitHub repository**
4. **Import your project** - Nuxt Studio will automatically detect the @nuxt/content setup

## Using Content with Your Existing Design System

Your content now seamlessly integrates with your beautiful existing styling, components, and design system:

```vue
<template>
  <div>
    <!-- Your content now uses all your existing styling! -->
    <ContentLayout v-if="page" :content="page" />
  </div>
</template>

<script setup>
// Single content item with full styling applied
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about').first()
})
</script>
```

### What You Get:

✅ **Your existing styling** - All Tailwind classes, colors, and design  
✅ **Your components** - Icons, OptimizedImage, SocialShare, etc.  
✅ **Your layout structure** - Headers, sections, grids, all preserved  
✅ **Enhanced content** - Structured data from frontmatter (values, images, etc.)  

### Content Structure Example:

```yaml
---
title: About Traxis Manufacturing
description: Your page description
image: /about-us.webp
imageCaption: Optional image caption
values:
  - title: Partnership
    description: We work as an extension of your team
    icon: mdi:handshake
  - title: Precision
    description: Uncompromising commitment to accuracy
    icon: mdi:target
---

## Your Content Here

This content will be styled with your existing design system!
```

## How It Works: ContentLayout Component

The `ContentLayout` component seamlessly integrates your markdown content with your existing design:

### Features:
- **Header Section**: Uses your existing gradient background and styling
- **Content Section**: Two-column layout with content + image
- **Values Section**: Dynamic cards based on frontmatter data
- **Proper Typography**: All your existing text styles and spacing
- **Components**: Integrates your Icons, OptimizedImage, SocialShare
- **Responsive**: All your existing responsive breakpoints

### For Your Client:
They can now edit:
- ✅ **Page titles and descriptions**
- ✅ **Main content** (markdown with rich formatting)
- ✅ **Values/features** (title, description, icons)
- ✅ **Images and captions**
- ✅ **All content structure**

But the **design, styling, and layout remain controlled by you!**

## Content Management

Once connected to Nuxt Studio, your client can:

- ✅ Edit markdown content through a visual editor
- ✅ Add new pages and content
- ✅ Upload and manage images
- ✅ Preview changes before publishing
- ✅ Publish changes directly to the website

## ✅ **Home Page Integration Complete!**

Your home page now uses content collections for:

### **Dynamic Sections:**
- ✅ **Service Cards** - Title, description, icons, and links
- ✅ **Customer Testimonials** - Quotes, names, companies, ratings
- ✅ **FAQ Section** - Questions and answers with collapsible interface

### **What Your Client Can Now Edit:**
- **Service cards**: Change descriptions, button text, links
- **Testimonials**: Add/remove testimonials, edit quotes and attribution
- **FAQs**: Update questions/answers, add new FAQs
- **Section titles and descriptions**

All while **your design remains completely controlled by you!**

## Next Steps

1. ✅ **Home page complete** - Test at `http://localhost:3000/`
2. **Move to next page** when you give approval
3. **Connect to Nuxt Studio** for easy content management

## Example Content Usage (v3)

Instead of hardcoded HTML like:
```vue
<div>
  <h1>About Us</h1>
  <p>We are a precision manufacturing company...</p>
</div>
```

You can now use:
```vue
<template>
  <ContentRenderer v-if="about" :value="about" />
</template>

<script setup>
const { data: about } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about').first()
})
</script>
```

And your client can edit the content in `/content/about.md` through Nuxt Studio!

## Support

If you need help with the setup, check the [Nuxt Content documentation](https://content.nuxt.com/) or [Nuxt Studio documentation](https://nuxt.studio/docs).