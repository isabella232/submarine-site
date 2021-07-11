(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{129:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),a=(r(0),r(134)),i={title:"Running Submarine on YARN"},c={unversionedId:"adminDocs/yarn/README",id:"adminDocs/yarn/README",isDocsHomePage:!1,title:"Running Submarine on YARN",description:"\x3c!--",source:"@site/docs/adminDocs/yarn/README.md",slug:"/adminDocs/yarn/README",permalink:"/docs/adminDocs/yarn/README",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/adminDocs/yarn/README.md",version:"current",sidebar:"docs",previous:{title:"Building Submarine Spark Security Plugin",permalink:"/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin"},next:{title:"Project Architecture",permalink:"/docs/devDocs/README"}},u=[{value:"Hadoop version",id:"hadoop-version",children:[]},{value:"Submarine YARN Runtime Guide",id:"submarine-yarn-runtime-guide",children:[]}],s={toc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Submarine for YARN supports TensorFlow, PyTorch and MXNet framework. (Which is leveraging ",Object(a.b)("a",{parentName:"p",href:"https://github.com/linkedin/TonY"},"TonY")," created by Linkedin to run deep learning training jobs on YARN."),Object(a.b)("p",null,"Submarine also supports GPU-on-YARN and Docker-on-YARN feature."),Object(a.b)("p",null,"Submarine can run on Hadoop 2.7.3 or later version, if GPU-on-YARN or Docker-on-YARN feature is needed, newer Hadoop version is required, please refer to the next section about what Hadoop version to choose."),Object(a.b)("h2",{id:"hadoop-version"},"Hadoop version"),Object(a.b)("p",null,"Must:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Apache Hadoop version newer than 2.7.3")),Object(a.b)("p",null,"Optional:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When you want to use GPU-on-YARN feature with Submarine, please make sure Hadoop is at least 2.10.0+ (or 3.1.0+), and follow ",Object(a.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/r2.10.0/hadoop-yarn/hadoop-yarn-site/UsingGpus.html"},"Enable GPU on YARN 2.10.0+")," to enable GPU-on-YARN feature."),Object(a.b)("li",{parentName:"ul"},"When you want to run training jobs with Docker container, please make sure Hadoop is at least 2.8.2, and follow ",Object(a.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/r2.8.2/hadoop-yarn/hadoop-yarn-site/DockerContainers.html"},"Enable Docker on YARN 2.8.2+")," to enable Docker-on-YARN feature.")),Object(a.b)("h2",{id:"submarine-yarn-runtime-guide"},"Submarine YARN Runtime Guide"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"../../userDocs/yarn/YARNRuntimeGuide"},"YARN Runtime Guide")," talk about how to use Submarine to run jobs on YARN, with Docker / without Docker."))}p.isMDXComponent=!0},134:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=t,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:n},s),{},{components:r})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);