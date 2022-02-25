
import sys
sys.path.insert(0, '..')
sys.path.insert(0, '.')

project = "机器学习系统：设计和实现"
copyright = "2022, All authors."
author = "Luo Mai, Hao Dong"
release = "1.0.0"

extensions = ["recommonmark","sphinxcontrib.bibtex","sphinxcontrib.rsvgconverter","sphinx.ext.autodoc","sphinx.ext.viewcode"]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
master_doc = 'index'
numfig = True
numfig_secnum_depth = 2
math_numfig = True
math_number_all = True

suppress_warnings = ['misc.highlighting_failure']
linkcheck_ignore = [r'.*localhost.*']
linkcheck_timeout = 5
linkcheck_workers = 20

autodoc_default_options = {
    'undoc-members': True,
    'show-inheritance': True,
}


html_theme = 'mxtheme'
html_theme_options = {
    'primary_color': 'blue',
    'accent_color': 'deep_orange',
    'header_links': [
        ('GitHub', 'https://github.com/openmlsys/openmlsys-zh', True, 'fab fa-github'),
    ],
    'show_footer': False
}
html_static_path = ['_static']

html_favicon = '_static/favicon.png'

html_logo = ''

latex_documents = [
    (master_doc, "machine laerning system.tex", "机器学习系统：设计和实现",
     author, 'manual'),
]

rsvg_converter_args = ['-z', '0.8']

latex_engine = 'xelatex' # for utf-8 supports
latex_show_pagerefs = True
latex_show_urls = 'footnote'

latex_logo = '_static/logo.png'

latex_elements = {

'figure_align': 'H',

'pointsize': '11pt',
'preamble': r'''

% Page size
\setlength{\voffset}{-14mm}
\addtolength{\textheight}{16mm}

% Chapter title style
\usepackage{titlesec, blindtext, color}
\definecolor{gray75}{gray}{0.75}
\newcommand{\hsp}{\hspace{20pt}}
\titleformat{\chapter}[hang]{\Huge\bfseries}{\thechapter\hsp\textcolor{gray75}{|}\hsp}{0pt}{\Huge\bfseries}

% So some large pictures won't get the full page
\renewcommand{\floatpagefraction}{.8}

\setcounter{tocdepth}{1}
% Use natbib's citation style, e.g. (Li and Smola, 16)
\usepackage{natbib}
\protected\def\sphinxcite{\citep}





% Remove top header
\usepackage[draft]{minted}
\fvset{breaklines=true, breakanywhere=true}
\setlength{\headheight}{13.6pt}
\makeatletter
    \fancypagestyle{normal}{
        \fancyhf{}
        \fancyfoot[LE,RO]{{\py@HeaderFamily\thepage}}
        \fancyfoot[LO]{{\py@HeaderFamily\nouppercase{\rightmark}}}
        \fancyfoot[RE]{{\py@HeaderFamily\nouppercase{\leftmark}}}
        \fancyhead[LE,RO]{{\py@HeaderFamily }}
     }
\makeatother
''',
'sphinxsetup': 'verbatimwithframe=false, verbatimsep=2mm, VerbatimColor={rgb}{.95,.95,.95}'
}

numfig_format = {'figure': '图%s', 'table': '表%s', 'code-block': '列表%s', 'section': '%s节'}
latex_elements = {
'utf8extra' : '',
'inputenc'  : '',
'babel'     : r'''\usepackage[english]{babel}''',
'preamble' : r'''
\usepackage{ctex}
\setmainfont{Source Serif Pro}
\setsansfont{Source Sans Pro}
\setmonofont{Source Code Pro}
\setCJKmainfont[BoldFont=Source Han Serif SC SemiBold]{Source Han Serif SC}
\setCJKsansfont[BoldFont=Source Han Sans SC Medium]{Source Han Sans SC Normal}
\setCJKmonofont{Source Han Sans SC Normal}
\addto\captionsenglish{\renewcommand{\chaptername}{}}
\addto\captionsenglish{\renewcommand{\contentsname}{目录}}
\usepackage[draft]{minted}
\fvset{breaklines=true, breakanywhere=true}
\setlength{\headheight}{13.6pt}
\makeatletter
\fancypagestyle{normal}{
\fancyhf{}
\fancyfoot[LE,RO]{{\py@HeaderFamily\thepage}}
\fancyfoot[LO]{{\py@HeaderFamily\nouppercase{\rightmark}}}
\fancyfoot[RE]{{\py@HeaderFamily\nouppercase{\leftmark}}}
\fancyhead[LE,RO]{{\py@HeaderFamily }}
}
\makeatother
\CJKsetecglue{}
\usepackage{zhnumber}
''',
'pointsize': '10pt',
'figure_align': 'H',
'fncychap': '\\usepackage[Sonny]{fncychap}',
}

def setup(app):
    # app.add_js_file('https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js')
    app.add_js_file('d2l.js')
    app.add_css_file('d2l.css')
    import mxtheme
    app.add_directive('card', mxtheme.CardDirective)
