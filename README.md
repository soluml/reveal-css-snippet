# reveal-css-snippet

A [Reveal.js](https://github.com/hakimel/reveal.js) plugin that allows live CSS editing in code blocks.

## Installation

Using [npm](https://www.npmjs.com/):

```bash
npm install --save reveal-css-snippet
```

## Demo
Play with it on [Codepen](http://codepen.io/soluml/pen/QbQmoa)!

## Usage

`RevealCSSSnippet()` returns a `<pre><code>` DOM node that allows you to live edit the presentations css styles which is useful for giving live coding demo's. You can then append this DOM node to any element in the presentation that you wish.

Optionally, you can pass in an object with two properties defined below. Both are optional:

```js
RevealCSSSnippet({
    //el is a DOM node that you wish to scope the CSS too. The scoping is done via attribute selector, so beware of specificity issues with existing styles. The default is no scoping, which allows you to write CSS to target anything in the presentation.
    el: document.getElementById('targetElement'),
    
    //cssValue is the default CSS to be loaded into the block at initialization. The default is empty string.
    cssValue: "background: #ff0;\r\nwidth: 500px;\r\nheight: 50px;"
});
```

## Examples

### Presentation Wide CSS Snippet:

**_HTML:_**
```html
<!-- This section is a slide. -->
<section id="csssnip-slide">
    <h2>CSS Snippet Example</h2>
</section>
```

**_In Reveal.initialize [index.html]:_**
```js
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    ...
    // Optional reveal.js plugins
    dependencies: [
        ...
        { src: 'plugin/reveal-css-snippet/css-snippet.js', callback: function() {
            document.getElementById('csssnip-slide').appendChild(RevealCSSSnippet({
                //Default CSS I want automatically loaded in...
                //Make background red and my specific slide's heading black
                cssValue: "body {\r\n  background: #f00;\r\n}\r\n\r\n#csssnip-slide h2 {\r\n  color: #000;\r\n}"
            }));
        } },
        ...
    ]
```

###Element Scoped CSS Snippet:

**_HTML:_**
```html
<!-- This section is a slide. -->
<section id="csssnip-slide">
    <h2>CSS Snippet Example</h2>
    <div id="targetElement"></div>
</section>
```

**_In Reveal.initialize [index.html]:_**
```js
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    ...
    // Optional reveal.js plugins
    dependencies: [
        ...
        { src: 'plugin/reveal-css-snippet/css-snippet.js', callback: function() {
            document.getElementById('csssnip-slide').appendChild(RevealCSSSnippet({
                //Element I want it scoped too
                el: document.getElementById('targetElement'),
                //Default CSS I want automatically loaded in
                cssValue: "background: #ff0;\r\nwidth: 500px;\r\nheight: 50px;"
            }));
        } },
        ...
    ]
```

## License

The MIT License (MIT)

## Author

[![twitter/soluml](http://www.gravatar.com/avatar/832fa8588ea749ba2a83672fa36b8981?s=100)](https://twitter.com/soluml "Follow @soluml on Twitter")
