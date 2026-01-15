#show math.equation: it => html.frame(it)
#show math.equation.where(block: false): box

#html.elem("body", attrs: (class: "spectral-light"))[

    #html.meta(charset: "utf-8")
    #html.meta(name: "viewport", content: "width=device-width, initial-scale=1")
    #html.meta(name: "theme-color", content: "#000000")
    #html.link(rel: "stylesheet", type: "text/css", href: "styles.css")
    #html.link(rel: "stylesheet", type: "text/css", href: "fonts.css")
    #html.link(
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    )
    #html.link(href: "https://fonts.googleapis.com", rel: "preconnect")
    #html.link(rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous")
    #html.title("Matthew Hagan Personal Site")
    #html.elem("div", attrs: (class: "outermost"))[
        = A First Derivation
        Testing a html page written in typst $integral_(-infinity)^(+infinity) e^(-i omega t) e^(-i H t) A e^(+ i H f) d t$. Is this equation inline?
    ]
]
