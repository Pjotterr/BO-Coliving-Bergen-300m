PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "100mpxready_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 90,
	        "minpan": 0,
	        "mintilt": -90
	    },
	"data": {
	        "id": "localData",
	        "infoTextBox": {
	            "align": "center",
	            "captureMouse": true,
	            "checkHover": true,
	            "id": "infobox",
	            "maxwidth": "66%",
	            "onclick": function(){ this.viewer.action('hideMessage'); } ,
	            "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	            "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>BO Coliving Vestlandet</div>",
	            "xoff": 0,
	            "yoff": -30
	        }
	    },
	"hotspot": [
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/322789/rom-i-bofellesskap-ovre-korskirkeallmenningen-6-bergen-9/",
	            "opacity": "1.00;1.00",
	            "position": "351.0720,24.4980",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Øvre Korskirkeallmenningen 6"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/258323/rom-i-bofellesskap-nye-sandviksveien-46-bergen-8/",
	            "opacity": "1.00;1.00",
	            "position": "323.1000,10.4400",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nye Sandviksveien 46"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo2",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Norges Handelshøyskole (NHH)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "311.0040,2.3220",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Norges Handelshøyskole (NHH)"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo3",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>NLA HØGSKOLEN</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "329.3820,6.0300",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "NLA HØGSKOLEN"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/257394/rom-i-bofellesskap-storms-gate-2-bergen-6/",
	            "opacity": "1.00;1.00",
	            "position": "162.8460,24.3900",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Stormsgate 2"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/305578/rom-i-bofellesskap-michael-krohns-gate-37-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "140.2200,10.8540",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Michael Krohns Gate 37"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/297786/leilighet-6-roms-jorgen-moes-gate-10c-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "116.8560,9.1980",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Jørgen Moes Gate 10C"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/270282/rom-i-leilighet-stromgaten-54-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "144.2340,29.5920",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Strømgaten 54"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/275311/rom-i-bofellesskap-nygardsgaten-62-bergen-3/",
	            "opacity": "1.00;1.00",
	            "position": "117.9900,34.2000",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 62"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/305481/rom-i-bofellesskap-lyder-sagens-gate-21-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "120.8340,35.1360",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Lyder Sagens Gate 21"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/322631/rom-i-bofellesskap-nygardsgaten-37-bergen-2/",
	            "opacity": "1.00;1.00",
	            "position": "121.6260,37.2420",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 37"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/275515/rom-i-bofellesskap-nygardsgaten-39-bergen-2/",
	            "opacity": "1.00;1.00",
	            "position": "120.9060,36.6300",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 39"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo12",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det juridiske fakultet (UiB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "239.2740,21.9960",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det juridiske fakultet (UiB)"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo13",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det psykologiske fakultet (UiB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "199.0800,73.5300",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det psykologiske fakultet (UiB)\n"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo14",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Handelhøyskolen BI</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "152.5680,16.5240",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Handelhøyskolen BI"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo15",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Universitetet i Bergen Studentsenteret</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "168.3180,30.7440",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Universitetet i Bergen Studentsenteret"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo16",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det matematisk-naturvitenskapelige fakultet (UiB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "134.7300,21.3660",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det matematisk-naturvitenskapelige fakultet (UiB)"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/gY3ZrcnZj8AEm5P68",
	            "opacity": "1.00;1.00",
	            "position": "226.2960,40.7700",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Rosenbergsgate 24AB"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/2BzBAoYnG8GR5xRP6",
	            "opacity": "1.00;1.00",
	            "position": "225.1620,41.4180",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Rosenbergsgate 26"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/zhv5C5eUVicYBMQQ8",
	            "opacity": "1.00;1.00",
	            "position": "228.6180,43.3260",
	            "target": "_self",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Vestre Torggate 13"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/dJ6Ee2hiBJk4JodH7",
	            "opacity": "1.00;1.00",
	            "position": "238.9860,38.7720",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sigurdsgate 25AB"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/JvSq8kT7tvybs4e39",
	            "opacity": "1.00;1.00",
	            "position": "243.3240,31.0860",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sverres Gate 33"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/LYP5mk5GBMEU8iqt7",
	            "opacity": "1.00;1.00",
	            "position": "244.9080,31.4100",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sverres Gate 31"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/afpjStt62TmB8dso6",
	            "opacity": "1.00;1.00",
	            "position": "232.3800,26.7480",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sydnesgate 8"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/NkGVqwLxWFHw4ssC8",
	            "opacity": "1.00;1.00",
	            "position": "273.8340,18.4860",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Vestre Holbergsalmenning 14"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/zsuxjVh3LL6vLP5U7",
	            "opacity": "1.00;1.00",
	            "position": "295.4160,17.9640",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Sundtsgate 30"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/PT9GHqun3rmEEmDU6",
	            "opacity": "1.00;1.00",
	            "position": "294.1020,18.4140",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Holbergsalmenning 11"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/280764/leilighet-5-roms-strandgaten-82-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "294.9300,21.4200",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Strandgaten 82"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/PoSWzwT5cRehBmVW9",
	            "opacity": "1.00;1.00",
	            "position": "281.2500,9.6300",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Haugeveien 17"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/ApTRzW4oR2vgaFPo6",
	            "opacity": "1.00;1.00",
	            "position": "109.3680,4.8780",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Gimlebakken 64"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/wqFAzYjQBWVYQVQK8",
	            "opacity": "1.00;1.00",
	            "position": "109.5660,4.8960",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Ibsens Gate 113A"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/258271/rom-i-bofellesskap-astrups-vei-40-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "118.6920,3.0600",
	            "target": "_parent",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Astrups Vei 40"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/MCq5irbrvEmxVuSD9",
	            "opacity": "1.00;1.00",
	            "position": "113.9580,26.4420",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Hans Tanks Gate 3"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/u5NGbNxpWDZuRjqMA",
	            "opacity": "1.00;1.00",
	            "position": "118.0080,35.4960",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 60"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/K8eqyAwmT1oJqkwr9",
	            "opacity": "1.00;1.00",
	            "position": "118.0080,33.1200",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 66"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://photos.app.goo.gl/tpC4T4oahyja9hAMA",
	            "opacity": "1.00;1.00",
	            "position": "120.9060,37.9080",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 35\n"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo37",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det humanistiske fakultet - (UIB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "204.1020,26.6400",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det humanistiske fakultet - Universitetet i Bergen"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo38",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Fakultet for kunst, musikk og design</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "100.6020,6.8580",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Fakultet for kunst, musikk og design"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo39",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det samfunnsvitenskapelige fakultet (UiB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "163.0080,52.9560",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det samfunnsvitenskapelige fakultet (UiB)\n"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo40",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Høgskulen på Vestlandet (HVL)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "120.0600,5.2740",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Høgskulen på Vestlandet (HVL)"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo41",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Det medisinske fakultet (UiB)\n</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "106.3800,4.7520",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Det medisinske fakultet (UiB)"
	            },
	            "unit": "deg"
	        },
	        {
	            "bitmap": "pap_spot_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo42",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Høyskolen Kristiania</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "78.8400,10.2960",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Høyskolen Kristiania"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo43",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Universitetsbiblioteket Humaniora</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "198.7920,31.6080",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Universitetsbiblioteket Humaniora"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo44",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Bibliotek for samfunnsvitenskap, musikk og psykologi </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "150.5880,50.3640",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Bibliotek for samfunnsvitenskap, musikk og psykologi "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo45",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Bibliotek for juridiske fag</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "238.6440,24.1920",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Bibliotek for juridiske fag"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo46",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Bibliotek for medisin</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "101.0880,4.3920",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Bibliotek for medisin"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo47",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Bibliotek for kunst og design</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "98.9280,7.8840",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Bibliotek for kunst og design"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo48",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for fysikk og teknologi</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "127.1520,19.6920",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for fysikk og teknologi"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo49",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for informatikk </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "132.9480,14.1840",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for informatikk "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo50",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for informatikk</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "129.1320,14.2560",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for informatikk"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo51",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Universitetsmuseet Naturhistorie</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "185.9040,34.9200",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Universitetsmuseet Naturhistorie"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo52",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Universitetsmuseet Kulturhistorie</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "186.0840,27.4320",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Universitetsmuseet Kulturhistorie"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo53",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for fremmedspråk. \n Institutt for lingvistiske, litterære og estetiske studier </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "210.5640,28.2600",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for fremmedspråk. \n Institutt for lingvistiske, litterære og estetiske studier "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo54",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for filosofi og førstesemesterstudier</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "219.5820,32.5260",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for filosofi og førstesemesterstudier"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo55",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for arkeologi, historie, kultur- og religionsvitenskap</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "224.5320,31.3740",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for arkeologi, historie, kultur- og religionsvitenskap"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo56",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Jussformidlingen</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "222.9660,31.1220",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Jussformidlingen"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo57",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Griegakademiet, Institutt for musikk, KMD</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "170.1000,75.3480",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Griegakademiet, Institutt for musikk, KMD"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo58",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for geografi </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "159.4080,50.7960",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for geografi "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo59",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for informasjons- og medievitenskap</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "163.0440,51.1920",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for informasjons- og medievitenskap"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo60",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for sosialantropologi</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "166.8240,51.6240",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for sosialantropologi"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo61",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Bibliotek for matematisk-naturvitenskapelige fag</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "131.2920,20.6280",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Bibliotek for matematisk-naturvitenskapelige fag"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo62",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Institutt for geovitenskap</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "132.6960,21.4920",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Institutt for geovitenskap"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo63",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Kjemisk institutt </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "133.1640,19.7640",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Kjemisk institutt "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo64",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Matematisk institutt </div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "139.4640,23.4360",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Matematisk institutt "
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo65",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Senter for farmasi</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "137.3040,24.1560",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Senter for farmasi"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo66",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Senter for geobiologi</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "137.6280,22.2120",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Senter for geobiologi"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo67",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>Geofysisk institutt</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "129.2040,18.3960",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Geofysisk institutt"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo68",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for informasjons- og medievitenskap</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "112.7340,20.3580",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for informasjons- og medievitenskap"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo69",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style> Institutt for samfunnspsykologi</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "189.6300,75.3300",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": " Institutt for samfunnspsykologi"
	            },
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "100mpxready",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"100mpxready_tiles/100mpxready_t_1b_%0y_%0x.jpg"},"down":{"src":"100mpxready_tiles/100mpxready_t_1d_%0y_%0x.jpg"},"front":{"src":"100mpxready_tiles/100mpxready_t_1f_%0y_%0x.jpg"},"height":6366,"left":{"src":"100mpxready_tiles/100mpxready_t_1l_%0y_%0x.jpg"},"right":{"src":"100mpxready_tiles/100mpxready_t_1r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"100mpxready_tiles/100mpxready_t_1u_%0y_%0x.jpg"},"width":6366},{"back":{"src":"100mpxready_tiles/100mpxready_t_2b_%0y_%0x.jpg"},"down":{"src":"100mpxready_tiles/100mpxready_t_2d_%0y_%0x.jpg"},"front":{"src":"100mpxready_tiles/100mpxready_t_2f_%0y_%0x.jpg"},"height":3183,"left":{"src":"100mpxready_tiles/100mpxready_t_2l_%0y_%0x.jpg"},"right":{"src":"100mpxready_tiles/100mpxready_t_2r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"100mpxready_tiles/100mpxready_t_2u_%0y_%0x.jpg"},"width":3183},{"back":{"src":"100mpxready_tiles/100mpxready_t_3b_%0y_%0x.jpg"},"down":{"src":"100mpxready_tiles/100mpxready_t_3d_%0y_%0x.jpg"},"front":{"src":"100mpxready_tiles/100mpxready_t_3f_%0y_%0x.jpg"},"height":1592,"left":{"src":"100mpxready_tiles/100mpxready_t_3l_%0y_%0x.jpg"},"right":{"src":"100mpxready_tiles/100mpxready_t_3r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"100mpxready_tiles/100mpxready_t_3u_%0y_%0x.jpg"},"width":1592},{"back":{"src":"100mpxready_tiles/100mpxready_t_4b_%0y_%0x.jpg"},"down":{"src":"100mpxready_tiles/100mpxready_t_4d_%0y_%0x.jpg"},"front":{"src":"100mpxready_tiles/100mpxready_t_4f_%0y_%0x.jpg"},"height":796,"left":{"src":"100mpxready_tiles/100mpxready_t_4l_%0y_%0x.jpg"},"right":{"src":"100mpxready_tiles/100mpxready_t_4r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"100mpxready_tiles/100mpxready_t_4u_%0y_%0x.jpg"},"width":796},{"back":{"src":"100mpxready_tiles/100mpxready_t_5b_%0y_%0x.jpg"},"down":{"src":"100mpxready_tiles/100mpxready_t_5d_%0y_%0x.jpg"},"front":{"src":"100mpxready_tiles/100mpxready_t_5f_%0y_%0x.jpg"},"height":398,"left":{"src":"100mpxready_tiles/100mpxready_t_5l_%0y_%0x.jpg"},"right":{"src":"100mpxready_tiles/100mpxready_t_5r_%0y_%0x.jpg"},"tilesize":480,"up":{"src":"100mpxready_tiles/100mpxready_t_5u_%0y_%0x.jpg"},"width":398}],"multilevel":true,"preview":{"src":"100mpxready_tiles/100mpxready_preview.jpg"},"projection":"cubic"},
	"lensflare": [
	        {
	            "brightening": 1,
	            "pan": 228.79799999999997,
	            "scale": 1,
	            "tilt": 44.351999999999975,
	            "type": 6
	        }
	    ],
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}