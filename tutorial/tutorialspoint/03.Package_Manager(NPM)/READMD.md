# Index  

- <a href="#npm">Installing modules using npm</a>
- <a href="#global_local_install">Global vs Local installation</a>
- <a href="#package_json">package.json</a>
- <a href="#handle_module">Uninstalling & Updating & Search a Module</a>

---  

<div id="npm"></div>  

## Installing Modules using NPM  

> Check version  

```
$ npm -v  
```  

> Upgrade npm version  

```
$ sudo npm install npm -g
```

> Installing Modules using NPM  

```
$ npm install <Module Name>
```  

> express web framework module  

```
$ npm install express  

var express = require('express');
```  

<div id="global_local_install></div>  

## Global vs Local Installation  

> Local install express  
(default : local)  


```
[nodejstest@localhost npmtest]$ ll
합계 0
[nodejstest@localhost npmtest]$ ll
합계 4
drwxrwxr-x. 50 nodejstest nodejstest 4096  8월 18 11:42 node_modules

[nodejstest@localhost npmtest]$ npm ls
/home/nodejstest/npmtest
└─┬ express@4.16.3
  ├─┬ accepts@1.3.5
  │ ├─┬ mime-types@2.1.19
  │ │ └── mime-db@1.35.0
  │ └── negotiator@0.6.1
  ├── array-flatten@1.1.1
  ├─┬ body-parser@1.18.2
  │ ├── bytes@3.0.0
  │ ├─┬ http-errors@1.6.3
  │ │ └── inherits@2.0.3
  │ ├── iconv-lite@0.4.19
  │ └─┬ raw-body@2.3.2
  │   └─┬ http-errors@1.6.2
  │     ├── depd@1.1.1
  │     └── setprototypeof@1.0.3
  ├── content-disposition@0.5.2
  ├── content-type@1.0.4
  ├── cookie@0.3.1
  ├── cookie-signature@1.0.6
  ├─┬ debug@2.6.9
  │ └── ms@2.0.0
  ├── depd@1.1.2
  ├── encodeurl@1.0.2
  ├── escape-html@1.0.3
  ├── etag@1.8.1
  ├─┬ finalhandler@1.1.1
  │ └── unpipe@1.0.0
  ├── fresh@0.5.2
  ├── merge-descriptors@1.0.1
  ├── methods@1.1.2
  ├─┬ on-finished@2.3.0
  │ └── ee-first@1.1.1
  ├── parseurl@1.3.2
  ├── path-to-regexp@0.1.7
  ├─┬ proxy-addr@2.0.4
  │ ├── forwarded@0.1.2
  │ └── ipaddr.js@1.8.0
  ├── qs@6.5.1
  ├── range-parser@1.2.0
  ├── safe-buffer@5.1.1
  ├─┬ send@0.16.2
  │ ├── destroy@1.0.4
  │ └── mime@1.4.1
  ├── serve-static@1.13.2
  ├── setprototypeof@1.1.0
  ├── statuses@1.4.0
  ├─┬ type-is@1.6.16
  │ └── media-typer@0.3.0
  ├── utils-merge@1.0.1
  └── vary@1.1.2
```

> Global install express  

```
[root@localhost ~]# npm install express -g
/usr/lib
└─┬ express@4.16.3 
  ├─┬ accepts@1.3.5 
  │ ├─┬ mime-types@2.1.19 
  │ │ └── mime-db@1.35.0 
  │ └── negotiator@0.6.1 
  ├── array-flatten@1.1.1 
  ├─┬ body-parser@1.18.2 
  │ ├── bytes@3.0.0 
  │ ├─┬ http-errors@1.6.3 
  │ │ └── inherits@2.0.3 
  │ ├── iconv-lite@0.4.19 
  │ └─┬ raw-body@2.3.2 
  │   └─┬ http-errors@1.6.2 
  │     ├── depd@1.1.1 
  │     └── setprototypeof@1.0.3 
  ├── content-disposition@0.5.2 
  ├── content-type@1.0.4 
  ├── cookie@0.3.1 
  ├── cookie-signature@1.0.6 
  ├─┬ debug@2.6.9 
  │ └── ms@2.0.0 
  ├── depd@1.1.2 
  ├── encodeurl@1.0.2 
  ├── escape-html@1.0.3 
  ├── etag@1.8.1 
  ├─┬ finalhandler@1.1.1 
  │ └── unpipe@1.0.0 
  ├── fresh@0.5.2 
  ├── merge-descriptors@1.0.1 
  ├── methods@1.1.2 
  ├─┬ on-finished@2.3.0 
  │ └── ee-first@1.1.1 
  ├── parseurl@1.3.2 
  ├── path-to-regexp@0.1.7 
  ├─┬ proxy-addr@2.0.4 
  │ ├── forwarded@0.1.2 
  │ └── ipaddr.js@1.8.0 
  ├── qs@6.5.1 
  ├── range-parser@1.2.0 
  ├── safe-buffer@5.1.1 
  ├─┬ send@0.16.2 
  │ ├── destroy@1.0.4 
  │ └── mime@1.4.1 
  ├── serve-static@1.13.2 
  ├── setprototypeof@1.1.0 
  ├── statuses@1.4.0 
  ├─┬ type-is@1.6.16 
  │ └── media-typer@0.3.0 
  ├── utils-merge@1.0.1 
  └── vary@1.1.2 

$ npm ls -g  
```  

<div id="package_json"></div>  

## Using package.json  

> express sample  
node_modules/express/package.json  

```

```

#### Attributes   
- name  
: name of the package  
- version  
: version of the package  
- description  
: description of the package
- author  
: author of the package  
- contributors  
: name of the contributors to the package  
- dependencies    
: list of dependencies. npm automatically installs all the dependencies 
- repository  
: repository type and URL of the package  
- main 
: entry point of the package  
- keywords  
: keywords  


<div id="handle_module"></div>  

## Handle modules

> Uninstalling a Module  

```
[nodejstest@localhost npmtest]$ npm uninstall express
[nodejstest@localhost npmtest]$ npm ls
/home/nodejstest/npmtest
└── (empty)
```  

> Updating a Module  

```
$ npm update express
```  

> Search a Module  

```
$ npm search express
```  

> Create a Module  

```
[nodejstest@localhost npmtest]$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (npmtest) 
version: (1.0.0) 
description: npm test module
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: zaccoding
license: (ISC) 
About to write to /home/nodejstest/npmtest/package.json:

{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "npm test module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "zaccoding",
  "license": "ISC"
}


Is this ok? (yes) 
[nodejstest@localhost npmtest]$ ll
합계 4
-rw-rw-r--. 1 nodejstest nodejstest 227  8월 18 11:58 package.json
```  

> Publish 

```
$ npm adduser
$ npm publish
```  














---  

- search.nodejs.org  
- https://www.tutorialspoint.com/nodejs/nodejs_npm.htm  




