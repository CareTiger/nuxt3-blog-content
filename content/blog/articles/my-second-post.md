---
title: My Second Blog Post
description: Learning how to use @nuxt/content to create a blog
img: https://images.unsplash.com/photo-1588432415392-51f6e1a61d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: my second blog post
author:
    - Maria
tags:
    - nuxtjs
createdAt: 2022-06-15
updatedAt: 2022-06-15
---

# Welcome to my second blog post using content module

## This is a heading

This is some more info

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class some classes
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

```js[nuxt.config.js]
export default {
  nuxt: "is the best"
}
```

```html[my-first-blog-post.md]
<p>code styling is easy</p>
```

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info
