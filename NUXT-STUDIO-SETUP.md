# Nuxt Studio Setup Guide

Your Traxis Manufacturing website is now ready for Nuxt Studio integration! 🎉

## What's Been Added

✅ **@nuxt/content v3** module installed and configured
✅ **Content directory** created with sample markdown files
✅ **Content v3 configuration** file (`content.config.ts`) added
✅ **Document-driven mode** implemented with catch-all route
✅ **Example usage** page created with v3 API

## File Structure

```
traxis-website/
├── content/
│   ├── index.md          # Main content page
│   ├── about.md          # About page content
│   └── capabilities.md   # Capabilities content
├── content.config.ts     # Content v3 configuration
└── pages/
    ├── [...slug].vue     # Catch-all route for document-driven mode
    └── content-example.vue # Example of using content
```

## How to Connect to Nuxt Studio

1. **Push your code to GitHub** (if not already done)
2. **Go to [Nuxt Studio](https://nuxt.studio)**
3. **Connect your GitHub repository**
4. **Import your project** - Nuxt Studio will automatically detect the @nuxt/content setup

## Using Content in Your Pages (v3 API)

You can now replace static content in your pages with dynamic content:

```vue
<template>
  <div>
    <!-- Load content from markdown files (v3) -->
    <ContentRenderer v-if="page" :value="page" />
    
    <!-- Or query multiple content items -->
    <ContentRenderer 
      v-for="item in capabilities" 
      :key="item.path" 
      :value="item" 
    />
  </div>
</template>

<script setup>
// Single content item
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('content').path('/about').first()
})

// Multiple content items
const { data: capabilities } = await useAsyncData('capabilities', () => {
  return queryCollection('content')
    .where('path', 'LIKE', '/capabilities%')
    .find()
})
</script>
```

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