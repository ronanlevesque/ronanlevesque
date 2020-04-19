---
title: 'React and Atomic CSS'
description: 'How to combine the flexibility of Atomic CSS and the composability of React to create highly maintainable components.'
date: 2020-04-20T00:00:00Z
path: '/articles/react-and-atomic-css/'
---

If I had to name one CSS methodology that has completey changed my life as a front-end developer, it would undoubtedly be Atomic CSS (also called Functional CSS, or Utility-first CSS). Here is a small definition of it, taken from [CSS-Tricks](https://css-tricks.com/lets-define-exactly-atomic-css/):

> Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.

The most famous Atomic CSS frameworks are [ACSS](https://acss.io/), [Tachyons](http://tachyons.io/), and my personal favorite, [Tailwind](https://tailwindcss.com/).

Here’s a basic example:

```css
.color-red {
  color: red;
}

.font-size-12 {
  font-size: 12px;
}
```

At first, it seems like inline styles all over again, but in practice that methodology brings incredibly high maintainability and flexibility, to the point that I have never looked back after adopting it. I could write for hours about its benefits, but I think that my colleague [Sarah](https://sarahdayan.dev/) has nailed it way better than I could possibly do in her article called [In Defense of Utility-First CSS](https://frontstuff.io/in-defense-of-utility-first-css). If you haven’t read yet, I encourage you to do so before going further.

Instead, this article will focus on combining React and Atomic CSS in order to create components that are easy to style, adapt and reuse.

## Styling with React

There are plenty of ways to write CSS along with React components. Each one has their own specificities, as well as their pros and cons. Most famous ones are:

- Inline styles, under the shape of a JavaScript object
- CSS modules: normal CSS, but scoped locally to a specific component. Works well with methologies such as [BEM](https://css-tricks.com/bem-101/)
- CSS-in-JS: CSS written as JavaScript template litterals. It was made popular by the [styled-components](https://github.com/styled-components/styled-components) library
- Simply linking to a CSS stylesheet

The last one is the one we want to use when implementing Atomic CSS.

## The power of Atomic

Let’s go back to our methodology in order to understand why it can be so powerful and flexible. At its core, a Utility-first CSS framework should be _design agnostic_: it means that I could potentially adapt it to any kind of design: colors, spacings, sizes, and so on.

The first step when working with such a tool is to write all those rules inside a configuration file that will then automatically generate a set of CSS classes based on said rules.

Let’s take an excerpt from the configuration file I used for my own website:

```js
const config = {
  // I’m defining my colors here
  colors: {
    white: '#fff',
    zircon: '#ecedef',
    linkWater: '#c6cacf',
    manatee: '#8d96a0',
    ...
  },
};
```

Upon compilation it will generate the following:

```css
.color-white {
  color: #fff;
}

.color-zircon {
  color: #ecedef;
}

etc.
```

Writing all those rules will provide us with a solid way to ensure that we follow design guidelines: at Algolia, if a designer wants to add a new color to the website, the only thing to do will be adding it inside my configuration file. It will be available as a single, one-purpose class.

To sum things up, the goal of Atomic CSS is to:

1. Enforce design consistency
2. Avoid writing more CSS than you should
3. Provide strong code maintainability

## Creating modular components

With that in mind, let’s move to the next step: mixing Atomic CSS with React. We will go with a very simple `Title` component, using the `classnames` (`cx`) [package](https://github.com/JedWatson/classnames) for improved readability:

```jsx
const Title = ({ children, className, ...other }) => (
  <h1
    className={cx('font-size-32 color-zircon md:font-size-56', className)}
    {...other}
  >
    {children}
  </h1>
);
```

<p class="info">Please note that we are using very explicit class names for the sake of clarity, but there are frameworks which use shorter names: with the internal one we use at <a href="https://www.algolia.com/">Algolia</a>, we would have gone with <code>fsz-32 fw-normal color-zircon md:fsz-56</code>.</p>

Now, we would like to add a `color` property to make our component easier to customize.

```jsx
const Title = ({ children, className, color = 'zircon', ...other }) => (
  <h1
    className={cx('font-size-32 md:font-size-56', `color-${color}`, className)}
    {...other}
  >
    {children}
  </h1>
);
```

Our component is ready to be used in any kind of context: it has a few base styles, but it can be placed within different color themes thanks to the flexibility that we just added. We didn’t have to write any kind of specific CSS, our predefined classes did the job for us. We can also be sure that design guidelines are followed, since we used values taken from our configuration file.

The simple example above demonstrates the power of React and Atomic CSS combined, and how they follow the same pattern (even though CSS is not considered as an actual programming language): _composition over inheritance_. Its [Wikipedia definition](https://en.wikipedia.org/wiki/Composition_over_inheritance) states:

> Composition over inheritance (or composite reuse principle) in object-oriented programming (OOP) is the principle that classes should achieve polymorphic behavior and code reuse by their composition (by containing instances of other classes that implement the desired functionality) rather than inheritance from a base or parent class.

That principle avoids uncontrolled side effects, something that unfortunately happens very easily when writing CSS. It is also a good way to ensure that our code follows the [Don’t Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) rule.

## Limitations

Even though Atomic CSS is very versatile, there are some edge cases which it won’t always be able to cover: very custom styles, pseudo-elements, etc.

Going back to our `Title` example, we realize it would look really amazing if it had a beautiful “❧” right in front of it. In that kind of situation, my tool of choice is [Emotion](https://github.com/emotion-js/emotion). It allows me to create locally-scoped classes via the `css` property, like this:

```jsx
const Title = ({ children, className, color = 'zircon', ...other }) => (
  <h1
    css={css`
      &:before {
        content: '❧';
        margin-right: 1em;
      }
    `}
    className={cx('font-size-32 md:font-size-56', `color-${color}`, className)}
    {...other}
  >
    {children}
  </h1>
);
```

The takeway here is that Utility-first CSS shouldn’t try and cover all CSS possibilities. It’s up to us, developers, to understand when not to use it.

## Keeping the CSS bundle size in control

By default, an Atomic CSS framework will generate a ton of selectors, resulting in a big bundle. For this very website, the minified bundle is `312 Ko`, way too much given the small amount of content it holds. Fortunately, we have a way to ensure we **only load what we need**, thanks to [PurgeCSS](https://github.com/FullHuman/purgecss). It will read the content of your files and will only keep the selectors that show in you source code. After being cleaned, my CSS bundle goes down to `7 Ko`, way better!

One thing to keep in mind with PurgeCSS: in the `Title` example above, I have interpolated some code. The tool won’t understand that, so we need to whitelist the pattern in its configuration file:

```js
module.exports = {
  whitelistPatterns: [/^color-/],
};
```

## Closing words

Like Sarah, at first I wasn’t convinced by the Utility-first CSS methodology. I could not understand its benefits, and the HTML bloat it generated was a no-go for me. I have to say that her article opened my eyes, and when I decided to give it a try I finally understood why its defenders were so positive about its benefits.

Atomic and React share the same principles about componentization and modularity of code. Combined, they offer a solid way to build maintainable applications while keeping a low technical debt. For me, this really is the future of CSS.

Do you think otherwise? Let’s discuss it on [Twitter](https://twitter.com/ronanlevesque)!
