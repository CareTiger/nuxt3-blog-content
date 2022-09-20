---
title: My First Blog Post
description: Learning how to use @nuxt/content to create a blog
img: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60
alt: my first blog post
author:
    - Peter
tags:
    - nuxtjs
    - javascript
createdAt: 2022-05-15
updatedAt: 2022-05-15
---

# Welcome to my first blog post using content module

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
