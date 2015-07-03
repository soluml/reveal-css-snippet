# reveal-css-snippet

A [Reveal.js](https://github.com/hakimel/reveal.js) plugin that allows live CSS editing in code blocks.


## Usage

`reveal-css-snippet` gives you a code block that can live edit the page styles. This can be very useful when giving live code demo's. The plugin allows you to target the entire presentation or scope it to a single element. 


**Presentation Wide CSS Snippet:**

_HTML:_
```html
<!-- This section is a slide. -->
<section id="csssnip-slide">
    <h2>CSS Snippet Example</h2>
</section>
```

_In Reveal.initialize [index.html]:_
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

**Element Scoped CSS Snippet:**

_HTML:_
```html
<!-- This section is a slide. -->
<section id="csssnip-slide">
    <h2>CSS Snippet Example</h2>
    <div id="targetElement"></div>
</section>
```

_In Reveal.initialize [index.html]:_
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
