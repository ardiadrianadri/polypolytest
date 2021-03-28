/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,s,i=null)=>{for(;s!==i;){const i=s.nextSibling;t.removeChild(s),s=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,e=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${e}`);class o{constructor(t,s){this.parts=[],this.element=s;const e=[],o=[],c=document.createTreeWalker(s.content,133,null,!1);let l=0,u=-1,d=0;const{strings:p,values:{length:w}}=t;for(;d<w;){const t=c.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:i}=s;let e=0;for(let t=0;t<i;t++)r(s[t].name,"$lit$")&&e++;for(;e-- >0;){const s=p[d],i=a.exec(s)[2],e=i.toLowerCase()+"$lit$",o=t.getAttribute(e);t.removeAttribute(e);const r=o.split(n);this.parts.push({type:"attribute",index:u,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(i)>=0){const i=t.parentNode,o=s.split(n),c=o.length-1;for(let s=0;s<c;s++){let e,n=o[s];if(""===n)e=h();else{const t=a.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),e=document.createTextNode(n)}i.insertBefore(e,t),this.parts.push({type:"node",index:++u})}""===o[c]?(i.insertBefore(h(),t),e.push(t)):t.data=o[c],d+=c}}else if(8===t.nodeType)if(t.data===i){const s=t.parentNode;null!==t.previousSibling&&u!==l||(u++,s.insertBefore(h(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(e.push(t),u--),d++}else{let s=-1;for(;-1!==(s=t.data.indexOf(i,s+1));)this.parts.push({type:"node",index:-1}),d++}}else c.currentNode=o.pop()}for(const t of e)t.parentNode.removeChild(t)}}const r=(t,s)=>{const i=t.length-s.length;return i>=0&&t.slice(i)===s},c=t=>-1!==t.index,h=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,s){const{element:{content:i},parts:e}=t,n=document.createTreeWalker(i,133,null,!1);let o=d(e),r=e[o],c=-1,h=0;const a=[];let l=null;for(;n.nextNode();){c++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),s.has(t)&&(a.push(t),null===l&&(l=t)),null!==l&&h++;void 0!==r&&r.index===c;)r.index=null!==l?-1:r.index-h,o=d(e,o),r=e[o]}a.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let s=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)s++;return s},d=(t,s=-1)=>{for(let i=s+1;i<t.length;i++){const s=t[i];if(c(s))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,w=t=>"function"==typeof t&&p.has(t),f={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,s,i){this.t=[],this.template=t,this.processor=s,this.options=i}update(t){let s=0;for(const i of this.t)void 0!==i&&i.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const s=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],e=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let o,r=0,h=0,a=n.nextNode();for(;r<e.length;)if(o=e[r],c(o)){for(;h<o.index;)h++,"TEMPLATE"===a.nodeName&&(i.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=i.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(s),customElements.upgrade(s)),s}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${i} `;class g{constructor(t,s,i,e){this.strings=t,this.values=s,this.type=i,this.processor=e}getHTML(){const t=this.strings.length-1;let s="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const c=a.exec(t);s+=null===c?t+(n?v:e):t.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+i}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");let s=this.getHTML();return void 0!==m&&(s=m.createHTML(s)),t.innerHTML=s,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,s,i){this.dirty=!0,this.element=t,this.name=s,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,s=t.length-1,i=this.parts;if(1===s&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!_(t))return t}let e="";for(let n=0;n<s;n++){e+=t[n];const s=i[n];if(void 0!==s){const t=s.value;if(S(t)||!_(t))e+="string"==typeof t?t:String(t);else for(const s of t)e+="string"==typeof s?s:String(s)}}return e+=t[s],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,w(t)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.o(this.startNode=h()),t.o(this.endNode=h())}insertAfterPart(t){t.o(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;w(this.i);){const t=this.i;this.i=f,t(this)}const t=this.i;t!==f&&(S(t)?t!==this.value&&this.h(t):t instanceof g?this.l(t):t instanceof Node?this.u(t):_(t)?this.p(t):t===b?(this.value=b,this.clear()):this.h(t))}o(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.o(t),this.value=t)}h(t){const s=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=i:this.u(document.createTextNode(i)),this.value=t}l(t){const s=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===s)this.value.update(t.values);else{const i=new y(s,t.processor,this.options),e=i._clone();i.update(t.values),this.u(e),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let i,e=0;for(const n of t)i=s[e],void 0===i&&(i=new $(this.options),s.push(i),0===e?i.appendIntoPart(this):i.insertAfterPart(s[e-1])),i.setValue(n),i.commit(),e++;e<s.length&&(s.length=e,this.clear(i&&i.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,s,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=i}setValue(t){this.i=t}commit(){for(;w(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=f}}class A extends k{constructor(t,s,i){super(t,s,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends x{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,s,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=s,this.eventContext=i,this.m=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;w(this.i);){const t=this.i;this.i=f,t(this)}if(this.i===f)return;const t=this.i,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),e=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.m,this.v),e&&(this.v=T(t),this.element.addEventListener(this.eventName,this.m,this.v)),this.value=t,this.i=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function U(t){let s=j.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,s));let e=s.stringsArray.get(t.strings);if(void 0!==e)return e;const n=t.strings.join(i);return e=s.keyString.get(n),void 0===e&&(e=new o(t,t.getTemplateElement()),s.keyString.set(n,e)),s.stringsArray.set(t.strings,e),e}const j=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,s,i,e){const n=s[0];if("."===n){return new A(t,s.slice(1),i).parts}if("@"===n)return[new E(t,s.slice(1),e.eventContext)];if("?"===n)return[new C(t,s.slice(1),i)];return new k(t,s,i).parts}handleTextExpression(t){return new $(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const N=(t,...s)=>new g(t,s,"html",z)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(t,s)=>`${t}--${s}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const F=t=>s=>{const e=V(s.type,t);let n=j.get(e);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(e,n));let r=n.stringsArray.get(s.strings);if(void 0!==r)return r;const c=s.strings.join(i);if(r=n.keyString.get(c),void 0===r){const i=s.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(s,i),n.keyString.set(c,r)}return n.stringsArray.set(s.strings,r),r},R=["html","svg"],I=new Set,q=(t,s,i)=>{I.add(t);const e=i?i.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{R.forEach((s=>{const i=j.get(V(s,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:s}}=t,i=new Set;Array.from(s.querySelectorAll("style")).forEach((t=>{i.add(t)})),l(t,i)}))}))})(t);const c=e.content;i?function(t,s,i=null){const{element:{content:e},parts:n}=t;if(null==i)return void e.appendChild(s);const o=document.createTreeWalker(e,133,null,!1);let r=d(n),c=0,h=-1;for(;o.nextNode();)for(h++,o.currentNode===i&&(c=u(s),i.parentNode.insertBefore(s,i));-1!==r&&n[r].index===h;){if(c>0){for(;-1!==r;)n[r].index+=c,r=d(n,r);return}r=d(n,r)}}(i,r,c.firstChild):c.insertBefore(r,c.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const h=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)s.insertBefore(h.cloneNode(!0),s.firstChild);else if(i){c.insertBefore(r,c.firstChild);const t=new Set;t.add(r),l(i,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const B={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,s)=>s!==t&&(s==s||t==t),J={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:L};class H extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((s,i)=>{const e=this._attributeNameForProperty(i,s);void 0!==e&&(this._attributeToPropertyMap.set(e,i),t.push(e))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,s)=>this._classProperties.set(s,t)))}}static createProperty(t,s=J){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(e){const n=this[t];this[s]=e,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,i=L){return i(t,s)}static _propertyValueFromAttribute(t,s){const i=s.type,e=s.converter||B,n="function"==typeof e?e:e.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const i=s.type,e=s.converter;return(e&&e.toAttribute||B.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,s)=>this[s]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,i){s!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,s,i=J){const e=this.constructor,n=e._attributeNameForProperty(t,i);if(void 0!==n){const t=e._propertyValueToAttribute(s,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,s){if(8&this._updateState)return;const i=this.constructor,e=i._attributeToPropertyMap.get(t);if(void 0!==e){const t=i.getPropertyOptions(e);this._updateState=16|this._updateState,this[e]=i._propertyValueFromAttribute(s,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,s,i){let e=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],s,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):e=!1}!this._hasRequestedUpdate&&e&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,s){return this.requestUpdateInternal(t,s),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t?this.update(s):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,s)=>this._propertyToAttribute(s,this[s],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}H.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const W=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,s){if(s!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...s)=>{const i=s.reduce(((s,i,e)=>s+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[e+1]),t[0]);return new K(i,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const X={};class Y extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const s=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?s(i,t):(t.add(i),t)),i),i=s(t,new Set),e=[];i.forEach((t=>e.unshift(t))),this._styles=e}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!W){const s=Array.prototype.slice.call(t.cssRules).reduce(((t,s)=>t+s.cssText),"");return new K(String(s),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const s=this.render();super.update(t),s!==X&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)})))}render(){return X}}Y.finalized=!0,Y.render=(t,i,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=O.has(i),r=D&&11===i.nodeType&&!!i.host,c=r&&!I.has(n),h=c?document.createDocumentFragment():i;if(((t,i,e)=>{let n=O.get(i);void 0===n&&(s(i,i.firstChild),O.set(i,n=new $(Object.assign({templateFactory:U},e))),n.appendInto(i)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:F(n)},e)),c){const t=O.get(h);O.delete(h);const e=t.value instanceof y?t.value.template:void 0;q(n,h,e),s(i,i.firstChild),i.appendChild(h),O.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};window.customElements.define("calculator-display",class extends Y{static get styles(){return Q`
        .display {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-bottom: var(--general-border-radius);
            padding-left: var(--calculator-margin);
            overflow: hidden;
            height: var(--display-mobile-height);
            background-color: var(--diplay-background-color);
            text-align: start;
            font-size: var(--display-mobile-font-size);
            color: var(--display-font-color);
            border-radius: var(---general-border-radius);
        }

        @media(min-width: 768px) {
          .display {
            height: var(--display-desktop-height);
          }
        }
    `}static get properties(){return{content:{type:String}}}constructor(){super(),this.content=""}render(){return N`
      <div class="display">${this.content}</div>
    `}}),window.customElements.define("calculator-button",class extends Y{static get styles(){return Q`
      .calc-button {
        height: var(--button-mobile-height);
        width: var(--button-mobile-width);
        margin: var(--button-margin);
        border-radius: var(--general-border-radius);
        background-color: var(--button-background-color);
        font-size: var(--button-font-size);
        color: var(--button-font-color);
      }
      .calc-button:focus {
        outline: none;
        background-color: var(--button-press-background-color);
      }

      .calc-button.big {
        width: var(--button-clear-mobile-width);
      }

      .calc-button.medium {
        width: var(--button-0-mobile-width);
      }

      @media(min-width: 768px) {
        .calc-button {
          width: var(--button-desktop-width);
          height: var(--button-desktop-height);
        }

        .calc-button.big {
          width: var(--button-clear-desktop-width);
        }

        .calc-button.medium {
          width: var(--button-0-desktop-width);
        }
      }
    `}static get properties(){return{label:{type:String},type:{type:String},value:{type:String},size:{type:String},keys:{type:Array}}}g(t){t.preventDefault(),this.keys.includes(t.key)&&(this.shadowRoot.querySelector("button").focus(),this.S())}_(t){t.preventDefault(),"Backspace"===t.key&&(this.shadowRoot.querySelector("button").focus(),this.S())}constructor(){super(),this.k=this.g.bind(this),this.$=this._.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("keypress",this.k),this.keys.includes("Backspace")&&window.addEventListener("keyup",this.$)}disconnectedCallback(){window.removeEventListener("keypress",this.k),window.removeEventListener("keyup",this.$)}S(){const t=new CustomEvent("calc-button",{detail:{value:this.value,type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return N`
    <button
      class="calc-button ${this.size}"
      @click=${this.S}
    >${this.label}</button>
    `}}),window.customElements.define("calculator-keyboard",class extends Y{static get styles(){return Q`
      .keyboard {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    `}static get properties(){return{buttons:{type:Array}}}render(){return N`
      <div class="keyboard">
        ${this.buttons.map((t=>N`
            <calculator-button
              .label=${t.label}
              .type=${t.type}
              .value=${t.value}
              .size=${t.size}
              .keys=${t.keys}
            ></calculator-button>
          `))}
      </div>
    `}}),window.customElements.define("calculator-view",class extends Y{static get styles(){return Q`
      .calculator {
        width: var(--calcultor-mobile-width);
        background-color: var(--color-background-calculator);
        margin-left: auto;
        margin-right: auto;
        padding: var(--calculator-margin);
        border-radius: var(--general-border-radius);
      }

      @media(min-width: 768px) {
        .calculator {
          width: var(--calculator-desktop-width);
        }
      }
    `}static get properties(){return{buttons:{type:Array},calculatorDisplay:{type:String},displayValue:{attribute:!1}}}C(t){const s=t.touches[0];this.xDown=s.clientX}A(t){if(this.xDown){const s=t.touches[0].clientX;this.xDown>s&&(this.displayValue="")}}P(t){const{value:s,type:i}=t.detail;let e=null;switch(i){case"number":this.displayValue+=s;break;case"operation":e=new CustomEvent("calc-event",{detail:{number:this.displayValue,operation:s},bubbles:!0,composed:!0}),this.dispatchEvent(e),this.displayValue="";break;default:this.displayValue=""}}constructor(){super(),this.xDown=null,this.displayValue="",this.buttons=[],this.M=this.C.bind(this),this.T=this.A.bind(this)}set calculatorDisplay(t){this.displayValue=t}firstUpdated(){this.shadowRoot.querySelector("calculator-display").addEventListener("touchstart",this.M),this.shadowRoot.querySelector("calculator-display").addEventListener("touchmove",this.T)}disconnectedCallback(){this.shadowRoot.querySelector("calculator-display").removeEventListener("touchstart",this.M),this.shadowRoot.querySelector("calculator-display").removeEventListener("touchmove",this.T)}render(){return N`
      <div class="calculator">
        <calculator-display
          .content=${this.displayValue}
        ></calculator-display>
        <calculator-keyboard
          .buttons=${this.buttons}
          @calc-button=${this.P}
        ></calculator-keyboard>
      </div>
    `}}),window.customElements.define("calculator-logic",class extends Y{static get properties(){return{calculation:{type:Object}}}constructor(){super(),this.store=null,this.operations={divide:(t,s)=>t/s,multiply:(t,s)=>t*s,subtract:(t,s)=>t-s,add:(t,s)=>t+s}}updated(t){const s=this.store?parseFloat(this.store):0,i=this.calculation?parseFloat(this.calculation.number):null,e=t.get("calculation")?t.get("calculation").operation:null;if(null===this.store&&null!==i)this.store=`${i}`;else if(this.calculation&&"calculate"===this.calculation.operation){const t=new CustomEvent("result",{detail:{result:"calculate"===e?i:this.operations[e](s,i)},bubbles:!0,composed:!0});this.store=null,this.dispatchEvent(t)}else e&&(this.store=`${this.operations[e](s,i)}`)}render(){return N``}}),window.customElements.define("test-logic",class extends Y{static get properties(){return{testData:{attribute:!1}}}U(){this.testData={number:"2",operation:"add"}}j(){this.testData={number:"12",operation:"add"}}O(){this.testData={number:"2",operation:"calculate"}}N(t){console.log(t)}render(){return N`
      <button @click=${this.U}>ADD 2</button>
      <button @click=${this.j}>ADD 12</button>
      <button @click=${this.O}>RESULT</button>
      <calculator-logic
        .calculation=${this.testData}
        @result=${this.N}
      ></calculator-logic>
    `}});
