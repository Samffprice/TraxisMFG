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
├── components/
│   └── content/
│       └── ContentLayout.vue  # Styled layout component
├── content/
│   ├── index.md          # Main content page
│   ├── about.md          # About page content (with enhanced frontmatter)
│   └── capabilities.md   # Capabilities content
├── content.config.ts     # Content v3 configuration
└── pages/
    ├── [...slug].vue     # Catch-all route (styled)
    └── content-example.vue # Example of styled content
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

## Next Steps

1. **Replace static content** in your existing pages with `<ContentRenderer>` components and `queryCollection()` calls
2. **Move existing content** to markdown files in the `/content` directory
3. **Test the setup** by visiting `/content-example` to see content in action
4. **Use document-driven mode** by accessing `/about` or `/capabilities` directly (via the catch-all route)
5. **Connect to Nuxt Studio** for easy content management

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