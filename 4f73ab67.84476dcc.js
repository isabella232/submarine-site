(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||b[p]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(134)),c={title:"Setup a Kubernetes cluster using Kind"},i={unversionedId:"gettingStarted/kind",id:"gettingStarted/kind",isDocsHomePage:!1,title:"Setup a Kubernetes cluster using Kind",description:"\x3c!--",source:"@site/docs/gettingStarted/kind.md",slug:"/gettingStarted/kind",permalink:"/docs/gettingStarted/kind",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/gettingStarted/kind.md",version:"current"},s=[{value:"Create K8s cluster",id:"create-k8s-cluster",children:[]},{value:"Kubernetes Dashboard (optional)",id:"kubernetes-dashboard-optional",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Create RBAC",id:"create-rbac",children:[]},{value:"Get access token (optional)",id:"get-access-token-optional",children:[]},{value:"Start dashboard service",id:"start-dashboard-service",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-k8s-cluster"},"Create K8s cluster"),Object(o.b)("p",null,"We recommend using ",Object(o.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},Object(o.b)("inlineCode",{parentName:"a"},"kind"))," to setup a Kubernetes cluster on a local machine."),Object(o.b)("p",null,"Running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kind create cluster --image kindest/node:v1.15.6 --name submarine\nkubectl create namespace submarine\n")),Object(o.b)("h2",{id:"kubernetes-dashboard-optional"},"Kubernetes Dashboard (optional)"),Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"To deploy Dashboard, execute following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml\n")),Object(o.b)("h3",{id:"create-rbac"},"Create RBAC"),Object(o.b)("p",null,"Ensure to grant the cluster access permission of dashboard, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl create serviceaccount dashboard-admin-sa\nkubectl create clusterrolebinding dashboard-admin-sa --clusterrole=cluster-admin --serviceaccount=default:dashboard-admin-sa\n")),Object(o.b)("h3",{id:"get-access-token-optional"},"Get access token (optional)"),Object(o.b)("p",null,"If you want to use the token to login the dashboard, run the following command to get key:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl get secrets\n# select the right dashboard-admin-sa-token to describe the secret\nkubectl describe secret dashboard-admin-sa-token-6nhkx\n")),Object(o.b)("h3",{id:"start-dashboard-service"},"Start dashboard service"),Object(o.b)("p",null,"To start the dashboard service, we can run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl proxy\n")),Object(o.b)("p",null,"Now access Dashboard at:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/")))}d.isMDXComponent=!0}}]);