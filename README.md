# without aading return() in functional component data not rendered.

# to remove the console.log from browser console steps--> npm install babel-transform-console --> for configuration create a file name .babelrc --> add code {"plugins" : ["transform-remove-console"]} --> to get console add empty {} inn.babelrc.

# by default the border-style property set to none .If in case after adding border css properties to a div and it won't show then we need to add border-style : solid ; in css file

# Error 1 ---> Access to script at 'file:///C:/Users/baljo/folder-name/App.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

# Probelm --------> I am trying to open the web-page locally (via file:// protocol) i.e. double clicking the .html file. Unfortunately modules only work via HTTP(s).if you try to load the HTML file locally (i.e. with a file:// URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.

# Solution ------> so all you need to do is use a local web server (vscode live server, parcel servers)
