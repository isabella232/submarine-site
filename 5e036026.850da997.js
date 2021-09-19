(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),l=(t(0),t(205)),c={title:"Environment REST API"},p={unversionedId:"userDocs/api/environment",id:"version-0.6.0/userDocs/api/environment",isDocsHomePage:!1,title:"Environment REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/api/environment.md",slug:"/userDocs/api/environment",permalink:"/docs/userDocs/api/environment",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/api/environment.md",version:"0.6.0",sidebar:"docs",previous:{title:"Experiment REST API",permalink:"/docs/userDocs/api/experiment"},next:{title:"Experiment Template REST API",permalink:"/docs/userDocs/api/experiment-template"}},b=[{value:"Create Environment",id:"create-environment",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Code Example",id:"code-example",children:[]}]},{value:"List Environment",id:"list-environment",children:[{value:"Code Example",id:"code-example-1",children:[]}]},{value:"Get Environment",id:"get-environment",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Code Example",id:"code-example-2",children:[]}]},{value:"Patch Environment",id:"patch-environment",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Code Example",id:"code-example-3",children:[]},{value:"Delete Environment",id:"delete-environment",children:[]},{value:"Parameters",id:"parameters-3",children:[]},{value:"Code Example",id:"code-example-4",children:[]}]}],i={toc:b};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"create-environment"},"Create Environment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"POST /api/v1/environment\n")),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,"Put EnvironmentSpec in request body."),Object(l.b)("h4",{id:"environmentspec"},Object(l.b)("strong",{parentName:"h4"},"EnvironmentSpec")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Environment name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dockerImage"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Docker image name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"kernelSpec"),Object(l.b)("td",{parentName:"tr",align:null},"KernelSpec"),Object(l.b)("td",{parentName:"tr",align:null},"Environment spec.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"description"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Description of environment.")))),Object(l.b)("h4",{id:"kernelspec"},Object(l.b)("strong",{parentName:"h4"},"KernelSpec")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Kernel name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"channels"),Object(l.b)("td",{parentName:"tr",align:null},"List<String",">"),Object(l.b)("td",{parentName:"tr",align:null},"Names of the channels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"condaDependencies"),Object(l.b)("td",{parentName:"tr",align:null},"List<String",">"),Object(l.b)("td",{parentName:"tr",align:null},"List of kernel conda dependencies.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pipDependencies"),Object(l.b)("td",{parentName:"tr",align:null},"List<String",">"),Object(l.b)("td",{parentName:"tr",align:null},"List of kernel pip dependencies.")))),Object(l.b)("h3",{id:"code-example"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "name": "my-submarine-env",\n  "dockerImage" : "continuumio/anaconda3",\n  "kernelSpec" : {\n    "name" : "team_default_python_3.7",\n    "channels" : ["defaults"],\n    "condaDependencies" :\n      ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n      "alabaster=0.7.12=py37_0",\n      "anaconda=2020.02=py37_0",\n      "anaconda-client=1.7.2=py37_0",\n      "anaconda-navigator=1.9.12=py37_0"],\n    "pipDependencies" :\n      ["apache-submarine==0.5.0",\n      "pyarrow==0.17.0"]\n  }\n}\n\' http://127.0.0.1:32080/api/v1/environment\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "environmentId":"environment_1626160071451_0001",\n    "environmentSpec":{\n      "name":"my-submarine-env",\n      "dockerImage":"continuumio/anaconda3",\n      "kernelSpec":{\n        "name":"team_default_python_3.7",\n        "channels":["defaults"],\n        "condaDependencies":\n          ["_ipyw_jlab_nb_ext_conf\\u003d0.1.0\\u003dpy37_0",\n          "alabaster\\u003d0.7.12\\u003dpy37_0",\n          "anaconda\\u003d2020.02\\u003dpy37_0",\n          "anaconda-client\\u003d1.7.2\\u003dpy37_0",\n          "anaconda-navigator\\u003d1.9.12\\u003dpy37_0"],\n        "pipDependencies":\n          ["apache-submarine\\u003d\\u003d0.5.0",\n          "pyarrow\\u003d\\u003d0.17.0"]\n      },\n      "description":null,\n      "image":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"list-environment"},"List Environment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/environment\n")),Object(l.b)("h3",{id:"code-example-1"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/environment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":[\n    {\n      "environmentId":"environment_1600862964725_0002",\n      "environmentSpec":{\n        "name":"notebook-gpu-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-gpu-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      }\n    },\n    {\n      "environmentId":"environment_1626160071451_0001",\n      "environmentSpec":{\n        "name":"my-submarine-env",\n        "dockerImage":"continuumio/anaconda3",\n        "kernelSpec":{\n          "name":"team_default_python_3.7",\n          "channels":["defaults"],\n          "condaDependencies":\n            ["_ipyw_jlab_nb_ext_conf\\u003d0.1.0\\u003dpy37_0",\n            "alabaster\\u003d0.7.12\\u003dpy37_0",\n            "anaconda\\u003d2020.02\\u003dpy37_0",\n            "anaconda-client\\u003d1.7.2\\u003dpy37_0",\n            "anaconda-navigator\\u003d1.9.12\\u003dpy37_0"],\n          "pipDependencies":\n            ["apache-submarine\\u003d\\u003d0.5.0",\n            "pyarrow\\u003d\\u003d0.17.0"]\n        },\n        "description":null,\n        "image":null\n      }\n    },\n    {\n      "environmentId":"environment_1600862964725_0001",\n      "environmentSpec":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.6.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      }\n    }\n  ],\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"get-environment"},"Get Environment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"GET /api/v1/environment/{name}\n")),Object(l.b)("h3",{id:"parameters-1"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Environment name.")))),Object(l.b)("h3",{id:"code-example-2"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "environmentId":"environment_1626160071451_0001",\n    "environmentSpec":{\n      "name":"my-submarine-env",\n      "dockerImage":"continuumio/anaconda3",\n      "kernelSpec":{\n        "name":"team_default_python_3.7",\n        "channels":["defaults"],\n        "condaDependencies":\n          ["_ipyw_jlab_nb_ext_conf\\u003d0.1.0\\u003dpy37_0",\n          "alabaster\\u003d0.7.12\\u003dpy37_0",\n          "anaconda\\u003d2020.02\\u003dpy37_0",\n          "anaconda-client\\u003d1.7.2\\u003dpy37_0",\n          "anaconda-navigator\\u003d1.9.12\\u003dpy37_0"],\n        "pipDependencies":\n          ["apache-submarine\\u003d\\u003d0.5.0",\n          "pyarrow\\u003d\\u003d0.17.0"]\n      },\n      "description":null,\n      "image":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h2",{id:"patch-environment"},"Patch Environment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"PATCH /api/v1/environment/{name}\n")),Object(l.b)("h3",{id:"parameters-2"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path and body"),Object(l.b)("td",{parentName:"tr",align:null},"Environment name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dockerImage"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Docker image name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"kernelSpec"),Object(l.b)("td",{parentName:"tr",align:null},"KernelSpec"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Environment spec.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"description"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Description of environment. This field is optional.")))),Object(l.b)("h3",{id:"code-example-3"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "name": "my-submarine-env",\n  "dockerImage" : "continuumio/anaconda3",\n  "kernelSpec" : {\n    "name" : "team_default_python_3.7_updated",\n    "channels" : ["defaults"],\n    "condaDependencies" :\n      ["_ipyw_jlab_nb_ext_conf=0.1.0=py37_0",\n      "alabaster=0.7.12=py37_0"],\n    "pipDependencies" :\n      []\n  }\n}\n\' http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "environmentId":"environment_1626160071451_0003",\n    "environmentSpec":{\n      "name":"my-submarine-env",\n      "dockerImage":"continuumio/anaconda3",\n      "kernelSpec":{\n        "name":"team_default_python_3.7_updated",\n        "channels":["defaults"],\n        "condaDependencies":\n          ["_ipyw_jlab_nb_ext_conf\\u003d0.1.0\\u003dpy37_0",\n          "alabaster\\u003d0.7.12\\u003dpy37_0"],\n        "pipDependencies":[]\n      },\n      "description":null,\n      "image":null\n    }\n  },\n  "attributes":{}\n}\n')),Object(l.b)("h3",{id:"delete-environment"},"Delete Environment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"DELETE /api/v1/environment/{name}\n")),Object(l.b)("h3",{id:"parameters-3"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"In"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"Environment name.")))),Object(l.b)("h3",{id:"code-example-4"},"Code Example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"shell")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/environment/my-submarine-env\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "environmentId":"environment_1626160071451_0001",\n    "environmentSpec":{\n      "name":"my-submarine-env",\n      "dockerImage":"continuumio/anaconda3",\n      "kernelSpec":{\n        "name":"team_default_python_3.7",\n        "channels":["defaults"],\n        "condaDependencies":\n          ["_ipyw_jlab_nb_ext_conf\\u003d0.1.0\\u003dpy37_0",\n          "alabaster\\u003d0.7.12\\u003dpy37_0",\n          "anaconda\\u003d2020.02\\u003dpy37_0",\n          "anaconda-client\\u003d1.7.2\\u003dpy37_0",\n          "anaconda-navigator\\u003d1.9.12\\u003dpy37_0"],\n        "pipDependencies":\n          ["apache-submarine\\u003d\\u003d0.5.0",\n          "pyarrow\\u003d\\u003d0.17.0"]\n      },\n      "description":null,\n      "image":null\n    }\n  },"attributes":{}\n}\n')))}o.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=o(t),u=a,s=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return t?r.a.createElement(s,p(p({ref:n},i),{},{components:t})):r.a.createElement(s,p({ref:n},i))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=u;var p={};for(var b in n)hasOwnProperty.call(n,b)&&(p[b]=n[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);