const about = document.querySelector('#about')
const exp = document.querySelector('#exp')
const cert = document.querySelector('#cert')
const work = document.querySelector('#work')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const expContent = document.querySelector('#exp-content')
const workContent = document.querySelector('#work-content')
const certContent = document.querySelector('#cert-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 550,
        mount: contactContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})

exp.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Experiences',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 250,
        mount: expContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})

cert.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Certifications',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 350,
        mount: certContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})

work.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Works',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 450,
        mount: workContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        },
    })
})


// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
    this.each(function() {
        var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
        c.html("");
        var e = function() {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                    g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
                else
                    for (;
                        ">" != b.substring(a, a + 1);) a++
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 5 + 100 *
                Math.random())
        };
        e()
    });
    return this
};
$(".terminal").typewriter();