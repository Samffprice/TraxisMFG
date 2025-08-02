<template>
  <div class="flex items-center space-x-4">
    <span class="text-sm font-medium text-traxis-grey-700">Share:</span>
    
    <!-- Facebook -->
    <button
      @click="shareOn('facebook')"
      class="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
      :aria-label="`Share on Facebook: ${title}`"
    >
      <Icon name="mdi:facebook" class="w-5 h-5" />
    </button>
    
    <!-- Twitter/X -->
    <button
      @click="shareOn('twitter')"
      class="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-colors duration-200"
      :aria-label="`Share on Twitter: ${title}`"
    >
      <Icon name="mdi:twitter" class="w-5 h-5" />
    </button>
    
    <!-- LinkedIn -->
    <button
      @click="shareOn('linkedin')"
      class="flex items-center justify-center w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors duration-200"
      :aria-label="`Share on LinkedIn: ${title}`"
    >
      <Icon name="mdi:linkedin" class="w-5 h-5" />
    </button>
    
    <!-- Email -->
    <button
      @click="shareOn('email')"
      class="flex items-center justify-center w-10 h-10 bg-traxis-grey-600 hover:bg-traxis-grey-700 text-white rounded-full transition-colors duration-200"
      :aria-label="`Share via email: ${title}`"
    >
      <Icon name="mdi:email" class="w-5 h-5" />
    </button>
    
    <!-- Copy Link -->
    <button
      @click="copyLink"
      class="flex items-center justify-center w-10 h-10 bg-traxis-red-600 hover:bg-traxis-red-700 text-white rounded-full transition-colors duration-200"
      :aria-label="linkCopied ? 'Link copied!' : 'Copy link'"
    >
      <Icon :name="linkCopied ? 'mdi:check' : 'mdi:link'" class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: null
  }
})

const route = useRoute()
const config = useRuntimeConfig()
const linkCopied = ref(false)

const currentUrl = computed(() => {
  return props.url || `${config.public.siteUrl}${route.path}`
})

const shareUrls = {
  facebook: (url, title) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  twitter: (url, title, description) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + (description ? ' - ' + description : ''))}`,
  linkedin: (url, title, description) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  email: (url, title, description) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent((description || '') + '\n\n' + url)}`
}

const shareOn = (platform) => {
  const url = shareUrls[platform](currentUrl.value, props.title, props.description)
  
  if (platform === 'email') {
    window.location.href = url
  } else {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }
  
  // Track sharing event (if analytics is setup)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'share', {
      method: platform,
      content_type: 'page',
      item_id: route.path
    })
  }
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    linkCopied.value = true
    
    // Reset after 2 seconds
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
    
    // Track copy event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'share', {
        method: 'copy_link',
        content_type: 'page',
        item_id: route.path
      })
    }
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = currentUrl.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    linkCopied.value = true
    
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  }
}
</script>