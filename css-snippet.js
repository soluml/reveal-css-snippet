window.RevealCSSSnippet = function (O) {
    'use strict';

    var pre = document.createElement('pre'),
        txt = document.createElement('code'),
        stl = document.createElement('style'),
        ts;

    do {
        ts = parseInt((Math.random() * 100000), 10);
    } while (document.getElementById('csssnippet-' + ts));

    function addEvent(el, type, fn) {
        if (el.attachEvent) {
            el['e' + type + fn] = fn;
            el[type + fn] = function () {
                el['e' + type + fn](window.event);
            };
            el.attachEvent('on' + type, el[type + fn]);
        } else {
            el.addEventListener(type, fn, false);
        }
    }
    
    function insertTextAtCursor(text) {
        var sel,
            range,
            textNode;

        if (window.getSelection) {
            sel = window.getSelection();

            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                textNode = document.createTextNode(text);
                range.insertNode(textNode);
                range.setStart(textNode, textNode.length);
                range.setEnd(textNode, textNode.length);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.pasteHTML(text);
        }
    }
    
    function keyup() {
        var stl = document.getElementById('csssnippet-' + ts),
            val = (txt.textContent || txt.innerText).replace(/\s/g, ' ').trim();

        if (O.el) {
            stl.innerHTML = '[data-csssnippet="' + ts + '"]{' + val + '}';
        } else {
            stl.innerHTML = val;
        }
    }

    function keydown(e) {
        var key = e.which || e.keyCode || e.charCode,
            val = txt.textContent || txt.innerText;
        
        //Tab Button
        if (key === 9) {
            insertTextAtCursor('  ');
            e.preventDefault();
        }
    }

    stl.setAttribute('id', 'csssnippet-' + ts);
    document.head.appendChild(stl);
    txt.setAttribute('contenteditable', 'true');
    txt.setAttribute('class', 'css');
    txt.setAttribute('autocapitalize', 'off');
    txt.setAttribute('autocorrect', 'off');
    txt.setAttribute('autocomplete', 'off');
    txt.setAttribute('spellcheck', 'false');
    pre.setAttribute('class', 'css-snippet');
    pre.appendChild(txt);
    addEvent(txt, 'keydown', keydown);
    addEvent(txt, 'keyup', keyup);

    if (O.el) {
        O.el.setAttribute('data-csssnippet', ts);
    }
    
    if (O.cssValue) {
        txt.appendChild(document.createTextNode(O.cssValue));
        keyup();
    }

    return pre;
};
