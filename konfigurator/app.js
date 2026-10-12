(()=>{var rt=(i,e)=>()=>(i&&(e=i(i=0)),e);var Np=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);function $i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function f0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function d0(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function p0(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function m0(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function g0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function x0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function v0(i,e){return i+Math.random()*(e-i)}function y0(i){return i*(.5-Math.random())}function M0(i){i!==void 0&&(Mu=i);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function S0(i){return i*ar}function b0(i){return i*pr}function E0(i){return(i&i-1)===0&&i!==0}function T0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function A0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),g=r((n-e)/2),d=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*d,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*d,a*c);break;case"ZYZ":i.set(l*d,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function R0(){let i=mr("canvas");return i.style.display="block",i}function Lo(i){i in Su||(Su[i]=!0,console.warn(i))}function C0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function P0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function I0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function W0(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);let h=W0(i,e,t,n,co,ho,uo,Ou);if(h){let f=new L;Fi.getBarycoord(Ou,co,ho,uo,f),s&&(h.uv=Fi.getInterpolatedAttribute(s,a,l,c,f,new ne)),r&&(h.uv1=Fi.getInterpolatedAttribute(r,a,l,c,f,new ne)),o&&(h.normal=Fi.getInterpolatedAttribute(o,a,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new L,materialIndex:0};Fi.getNormal(co,ho,uo,p.normal),h.face=p,h.barycoord=f}return h}function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function X0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ff(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}function zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function K0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((g,d)=>g.start-d.start);let p=0;for(let g=1;g<f.length;g++){let d=f[p],_=f[g];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++p,f[p]=_)}f.length=p+1;for(let g=0,d=f.length;g<d;g++){let _=f[g];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Ig(i,e,t,n,s,r,o){let a=new ze(0),l=r===!0?0:1,c,h,f=null,p=0,g=null;function d(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,M=d(y);M===null?u(a,l):M&&M.isColor&&(u(M,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let M=d(x);M&&(M.isCubeTexture||M.mapping===ga)?(h===void 0&&(h=new Ge(new Ut(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Ui)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,(f!==M||p!==M.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,g=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ge(new zn(2,2),new bt({name:"BackgroundMaterial",uniforms:Is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,g=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,x){y.getRGB(_o,Ff(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:_,addToRenderList:m}}function Lg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(v,b,D,O,H){let $=!1,k=f(O,D,b);r!==k&&(r=k,c(r.object)),$=g(v,O,D,H),$&&d(v,O,D,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(v,b,D,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,b,D){let O=D.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let $=H[b.id];$===void 0&&($={},H[b.id]=$);let k=$[O];return k===void 0&&(k=p(l()),$[O]=k),k}function p(v){let b=[],D=[],O=[];for(let H=0;H<t;H++)b[H]=0,D[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function g(v,b,D,O){let H=r.attributes,$=b.attributes,k=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let oe=H[B],he=$[B];if(he===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function d(v,b,D,O){let H={},$=b.attributes,k=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let oe=$[B];oe===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor));let he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),H[B]=he,k++}r.attributes=H,r.attributesNum=k,r.index=O}function _(){let v=r.newAttributes;for(let b=0,D=v.length;b<D;b++)v[b]=0}function m(v){u(v,0)}function u(v,b){let D=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;D[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),H[v]!==b&&(i.vertexAttribDivisor(v,b),H[v]=b)}function y(){let v=r.newAttributes,b=r.enabledAttributes;for(let D=0,O=b.length;D<O;D++)b[D]!==v[D]&&(i.disableVertexAttribArray(D),b[D]=0)}function x(v,b,D,O,H,$,k){k===!0?i.vertexAttribIPointer(v,b,D,H,$):i.vertexAttribPointer(v,b,D,O,H,$)}function M(v,b,D,O){_();let H=O.attributes,$=D.getAttributes(),k=b.defaultAttributeValues;for(let j in $){let B=$[j];if(B.location>=0){let Y=H[j];if(Y===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){let oe=Y.normalized,he=Y.itemSize,Fe=e.get(Y);if(Fe===void 0)continue;let Xe=Fe.buffer,q=Fe.type,ie=Fe.bytesPerElement,Me=q===i.INT||q===i.UNSIGNED_INT||Y.gpuType===ch;if(Y.isInterleavedBufferAttribute){let le=Y.data,Ie=le.stride,Pe=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)u(B.location+Ne,le.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)m(B.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<B.locationSize;Ne++)x(B.location+Ne,he/B.locationSize,q,oe,Ie*ie,(Pe+he/B.locationSize*Ne)*ie,Me)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<B.locationSize;le++)u(B.location+le,Y.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<B.locationSize;le++)m(B.location+le);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let le=0;le<B.locationSize;le++)x(B.location+le,he/B.locationSize,q,oe,he*ie,he/B.locationSize*le*ie,Me)}}else if(k!==void 0){let oe=k[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(B.location,oe);break;case 3:i.vertexAttrib3fv(B.location,oe);break;case 4:i.vertexAttrib4fv(B.location,oe);break;default:i.vertexAttrib1fv(B.location,oe)}}}}y()}function R(){C();for(let v in n){let b=n[v];for(let D in b){let O=b[D];for(let H in O)h(O[H].object),delete O[H];delete b[D]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let D in b){let O=b[D];for(let H in O)h(O[H].object),delete O[H];delete b[D]}delete n[v.id]}function w(v){for(let b in n){let D=n[b];if(D[v.id]===void 0)continue;let O=D[v.id];for(let H in O)h(O[H].object),delete O[H];delete D[v.id]}}function C(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Dg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let g=0;for(let d=0;d<f;d++)g+=h[d];t.update(g,n,1)}function l(c,h,f,p){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<c.length;d++)o(c[d],h[d],p[d]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];for(let _=0;_<p.length;_++)t.update(d,n,p[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ug(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){let w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function Ng(i){let e=this,t=null,n=0,s=!1,r=!1,o=new wn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){let d=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||d===null||d.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,M=u.clippingState||null;l.value=M,M=h(d,p,x,g);for(let R=0;R!==x;++R)M[R]=t[R];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,g,d){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,d!==!0||m===null){let u=g+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=g;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Og(i){let e=new WeakMap;function t(o,a){return a===fr?o.mapping=Rs:a===Vl&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fr||a===Vl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Mc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Fg(i){let e=[],t=[],n=[],s=i,r=i-Ms+1+ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ms?l=ku[o-i+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,d=6,_=3,m=2,u=1,y=new Float32Array(_*d*g),x=new Float32Array(m*d*g),M=new Float32Array(u*d*g);for(let T=0;T<g;T++){let w=T%3*2/3-1,C=T>2?0:-1,U=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(U,_*d*T),x.set(p,m*d*T);let v=[T,T,T,T,T,T];M.set(v,u*d*T)}let R=new At;R.setAttribute("position",new zt(y,_)),R.setAttribute("uv",new zt(x,m)),R.setAttribute("faceIndex",new zt(M,u)),e.push(R),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function zg(i,e,t){let n=new Float32Array(zi),s=new L(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Gu(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Wu(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===fr||l===Vl,h=l===Rs||l===Cs;if(c||h){let f=e.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Ds(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new Ds(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Lo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let d in p.attributes)e.remove(p.attributes[d]);for(let d in p.morphAttributes){let _=p.morphAttributes[d];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let d in p)e.update(p[d],i.ARRAY_BUFFER);let g=f.morphAttributes;for(let d in g){let _=g[d];for(let m=0,u=_.length;m<u;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){let p=[],g=f.index,d=f.attributes.position,_=0;if(g!==null){let y=g.array;_=g.version;for(let x=0,M=y.length;x<M;x+=3){let R=y[x+0],T=y[x+1],w=y[x+2];p.push(R,T,T,w,w,R)}}else if(d!==void 0){let y=d.array;_=d.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let R=x+0,T=x+1,w=x+2;p.push(R,T,T,w,w,R)}}else return;let m=new(Nf(p)?Go:Vo)(p,1);m.version=_;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let p=r.get(f);if(p){let g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Vg(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,g){i.drawElements(n,g,r,p*o),t.update(g,n,1)}function c(p,g,d){d!==0&&(i.drawElementsInstanced(n,g,r,p*o,d),t.update(g,n,d))}function h(p,g,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,d);let m=0;for(let u=0;u<d;u++)m+=g[u];t.update(m,n,1)}function f(p,g,d,_){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,g[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,_,0,d);let u=0;for(let y=0;y<d;y++)u+=g[y];for(let y=0;y<_.length;y++)t.update(u,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Gg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,e,t){let n=new WeakMap,s=new ot;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==f){let U=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();let g=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;g===!0&&(x=1),d===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*f),w=new ko(T,M,R,f);w.type=Fn,w.needsUpdate=!0;let C=x*4;for(let v=0;v<f;v++){let b=m[v],D=u[v],O=y[v],H=M*R*4*v;for(let $=0;$<b.count;$++){let k=$*C;g===!0&&(s.fromBufferAttribute(b,$),T[H+k+0]=s.x,T[H+k+1]=s.y,T[H+k+2]=s.z,T[H+k+3]=0),d===!0&&(s.fromBufferAttribute(D,$),T[H+k+4]=s.x,T[H+k+5]=s.y,T[H+k+6]=s.z,T[H+k+7]=0),_===!0&&(s.fromBufferAttribute(O,$),T[H+k+8]=s.x,T[H+k+9]=s.y,T[H+k+10]=s.z,T[H+k+11]=O.itemSize===4?s.w:1)}}p={count:f,texture:w,size:new ne(M,R)},n.set(a,p),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];let d=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Xg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),Ct(t,n)}}function Jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ct(t,n)}}function jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),Ct(t,n)}}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function t2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function n2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function i2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function r2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function o2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function a2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=Uf,r=Xu):r=kf,t.setTexture2D(e||r,s)}function l2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hf,s)}function c2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vf,s)}function h2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bf,s)}function u2(i){switch(i){case 5126:return Yg;case 35664:return qg;case 35665:return $g;case 35666:return Zg;case 35674:return Kg;case 35675:return Jg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e2;case 35668:case 35672:return t2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return s2;case 36295:return r2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return h2}}function f2(i,e){i.uniform1fv(this.addr,e)}function d2(i,e){let t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function p2(i,e){let t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function m2(i,e){let t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function g2(i,e){let t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _2(i,e){let t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x2(i,e){let t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v2(i,e){i.uniform1iv(this.addr,e)}function y2(i,e){i.uniform2iv(this.addr,e)}function M2(i,e){i.uniform3iv(this.addr,e)}function S2(i,e){i.uniform4iv(this.addr,e)}function b2(i,e){i.uniform1uiv(this.addr,e)}function E2(i,e){i.uniform2uiv(this.addr,e)}function T2(i,e){i.uniform3uiv(this.addr,e)}function w2(i,e){i.uniform4uiv(this.addr,e)}function A2(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kf,r[o])}function R2(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hf,r[o])}function C2(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vf,r[o])}function P2(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bf,r[o])}function I2(i){switch(i){case 5126:return f2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return _2;case 35676:return x2;case 5124:case 35670:return v2;case 35667:case 35671:return y2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return b2;case 36294:return E2;case 36295:return T2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return A2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return P2}}function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function L2(i,e,t){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),o=wl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ju(t,c===void 0?new Sc(a,i,e):new bc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ec(a),Ju(t,f)),t=f}}}function ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function N2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function O2(i){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i),n;switch(e===t?n="":e===Oo&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case yi:case _a:return[n,"LinearTransferOETF"];case pt:case _h:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N2(i.getShaderSource(e),o)}else return s}function F2(i,e){let t=O2(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function z2(i,e){let t;switch(e){case sh:t="Linear";break;case rh:t="Reinhard";break;case oh:t="Cineon";break;case Ar:t="ACESFilmic";break;case ah:t="AgX";break;case lh:t="Neutral";break;case e0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k2(){et.getLuminanceCoefficients(vo);let i=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function H2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function or(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Tc(i){return i.replace(G2,X2)}function X2(i,e){let t=$e[e];if(t===void 0){let n=W2.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}function nf(i){return i.replace(Y2,q2)}function q2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Z2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function J2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bf:e="ENVMAP_BLENDING_MULTIPLY";break;case jp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function j2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Q2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$2(t),c=Z2(t),h=K2(t),f=J2(t),p=j2(t),g=B2(t),d=H2(r),_=s.createProgram(),m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(or).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(or).join(`
`),u.length>0&&(u+=`
`)):(m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),u=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?$e.tonemapping_pars_fragment:"",t.toneMapping!==di?z2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,F2("linearToOutputTexel",t.outputColorSpace),k2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Tc(o),o=ef(o,t),o=tf(o,t),a=Tc(a),a=ef(a,t),a=tf(a,t),o=nf(o),a=nf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=y+m+o,M=y+u+a,R=ju(s,s.VERTEX_SHADER,x),T=ju(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(b){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(T).trim(),$=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{let j=Qu(s,R,"vertex"),B=Qu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+j+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||H==="")&&(k=!1);k&&(b.diagnostics={runnable:$,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(R),s.deleteShader(T),C=new ws(s,_),U=V2(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let U;this.getAttributes=function(){return U===void 0&&w(this),U};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,D2)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}function t_(i,e,t,n,s,r,o){let a=new Bo,l=new wc,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,g=s.vertexTextures,d=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function u(v,b,D,O,H){let $=O.fog,k=H.geometry,j=v.isMeshStandardMaterial?O.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),Y=B&&B.mapping===ga?B.image.height:null,oe=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let he=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Fe=he!==void 0?he.length:0,Xe=0;k.morphAttributes.position!==void 0&&(Xe=1),k.morphAttributes.normal!==void 0&&(Xe=2),k.morphAttributes.color!==void 0&&(Xe=3);let q,ie,Me,le;if(oe){let jt=On[oe];q=jt.vertexShader,ie=jt.fragmentShader}else q=v.vertexShader,ie=v.fragmentShader,l.update(v),Me=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);let Ie=i.getRenderTarget(),Pe=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,Ye=!!v.map,ee=!!v.matcap,I=!!B,ue=!!v.aoMap,ce=!!v.lightMap,se=!!v.bumpMap,fe=!!v.normalMap,Ae=!!v.displacementMap,xe=!!v.emissiveMap,P=!!v.metalnessMap,E=!!v.roughnessMap,V=v.anisotropy>0,Z=v.clearcoat>0,te=v.dispersion>0,K=v.iridescence>0,Ee=v.sheen>0,de=v.transmission>0,ge=V&&!!v.anisotropyMap,qe=Z&&!!v.clearcoatMap,re=Z&&!!v.clearcoatNormalMap,_e=Z&&!!v.clearcoatRoughnessMap,ke=K&&!!v.iridescenceMap,Be=K&&!!v.iridescenceThicknessMap,be=Ee&&!!v.sheenColorMap,Je=Ee&&!!v.sheenRoughnessMap,We=!!v.specularMap,Qe=!!v.specularColorMap,N=!!v.specularIntensityMap,me=de&&!!v.transmissionMap,X=de&&!!v.thicknessMap,Q=!!v.gradientMap,ve=!!v.alphaMap,Se=v.alphaTest>0,je=!!v.alphaHash,yt=!!v.extensions,Jt=di;v.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let tt={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:ie,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:yi,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:ee,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:Y,aoMap:ue,lightMap:ce,bumpMap:se,normalMap:fe,displacementMap:g&&Ae,emissiveMap:xe,normalMapObjectSpace:fe&&v.normalMapType===s0,normalMapTangentSpace:fe&&v.normalMapType===gh,metalnessMap:P,roughnessMap:E,anisotropy:V,anisotropyMap:ge,clearcoat:Z,clearcoatMap:qe,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:te,iridescence:K,iridescenceMap:ke,iridescenceThicknessMap:Be,sheen:Ee,sheenColorMap:be,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Qe,specularIntensityMap:N,transmission:de,transmissionMap:me,thicknessMap:X,gradientMap:Q,opaque:v.transparent===!1&&v.blending===bs&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:je,combine:v.combine,mapUv:Ye&&m(v.map.channel),aoMapUv:ue&&m(v.aoMap.channel),lightMapUv:ce&&m(v.lightMap.channel),bumpMapUv:se&&m(v.bumpMap.channel),normalMapUv:fe&&m(v.normalMap.channel),displacementMapUv:Ae&&m(v.displacementMap.channel),emissiveMapUv:xe&&m(v.emissiveMap.channel),metalnessMapUv:P&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:ge&&m(v.anisotropyMap.channel),clearcoatMapUv:qe&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Je&&m(v.sheenRoughnessMap.channel),specularMapUv:We&&m(v.specularMap.channel),specularColorMapUv:Qe&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:me&&m(v.transmissionMap.channel),thicknessMapUv:X&&m(v.thicknessMap.channel),alphaMapUv:ve&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(Ye||ve),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_t,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function y(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){let b=_[v.type],D;if(b){let O=On[b];D=In.clone(O.uniforms)}else D=v.uniforms;return D}function T(v,b){let D;for(let O=0,H=h.length;O<H;O++){let $=h[O];if($.cacheKey===b){D=$,++D.usedTimes;break}}return D===void 0&&(D=new Q2(i,b,v,r),h.push(D)),D}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function C(v){l.remove(v)}function U(){l.dispose()}return{getParameters:u,getProgramCacheKey:y,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:U}}function n_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,g,d,_,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:d,renderOrder:f.renderOrder,z:_,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=d,u.renderOrder=f.renderOrder,u.z=_,u.group=m),e++,u}function a(f,p,g,d,_,m){let u=o(f,p,g,d,_,m);g.transmission>0?n.push(u):g.transparent===!0?s.push(u):t.push(u)}function l(f,p,g,d,_,m){let u=o(f,p,g,d,_,m);g.transmission>0?n.unshift(u):g.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||i_),n.length>1&&n.sort(p||rf),s.length>1&&s.sort(p||rf)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function s_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new of,i.set(n,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function r_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function o_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function l_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c_(i){let e=new r_,t=o_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ke,o=new Ke;function a(c){let h=0,f=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let g=0,d=0,_=0,m=0,u=0,y=0,x=0,M=0,R=0,T=0,w=0;c.sort(l_);for(let U=0,v=c.length;U<v;U++){let b=c[U],D=b.color,O=b.intensity,H=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=D.r*O,f+=D.g*O,p+=D.b*O;else if(b.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(b.sh.coefficients[k],O);w++}else if(b.isDirectionalLight){let k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=b.shadow.matrix,y++}n.directional[g]=k,g++}else if(b.isSpotLight){let k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=H,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,n.spot[_]=k;let j=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,j.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,b.castShadow){let B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=$,M++}_++}else if(b.isRectAreaLight){let k=e.get(b);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=k,m++}else if(b.isPointLight){let k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){let j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,n.pointShadow[d]=B,n.pointShadowMap[d]=$,n.pointShadowMatrix[d]=b.shadow.matrix,x++}n.point[d]=k,d++}else if(b.isHemisphereLight){let k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(O),k.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[u]=k,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==g||C.pointLength!==d||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=_,n.rectArea.length=m,n.point.length=d,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=g,C.pointLength=d,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=R,C.numLightProbes=w,n.version=a_++)}function l(c,h){let f=0,p=0,g=0,d=0,_=0,m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){let x=c[u];if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let M=n.rectArea[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),d++}else if(x.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function af(i){let e=new c_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function h_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new af(i),e.set(s,[a])):r>=o.length?(a=new af(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function d_(i,e,t){let n=new gr,s=new ne,r=new ne,o=new ot,a=new Rc({depthPacking:i0}),l=new Cc,c={},h=t.maxTextureSize,f={[mi]:Qt,[Qt]:mi,[_t]:_t},p=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:u_,fragmentShader:f_}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let d=new At;d.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ge(d,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let u=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let U=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(wt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=u!==$n&&this.type===$n,H=u===$n&&this.type!==$n;for(let $=0,k=T.length;$<k;$++){let j=T[$],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Y=B.getFrameExtents();if(s.multiply(Y),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y)),B.map===null||O===!0||H===!0){let he=this.type!==$n?{minFilter:Ft,magFilter:Ft}:{};B.map!==null&&B.map.dispose(),B.map=new Gt(s.x,s.y,he),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let oe=B.getViewportCount();for(let he=0;he<oe;he++){let Fe=B.getViewport(he);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),D.viewport(o),B.updateMatrices(j,he),n=B.getFrustum(),M(w,C,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===$n&&y(B,C),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,v,b)};function y(T,w){let C=e.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gt(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,C,p,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,C,g,_,null)}function x(T,w,C,U){let v=null,b=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=v.uuid,O=w.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let $=H[O];$===void 0&&($=v.clone(),H[O]=$,w.addEventListener("dispose",R)),v=$}if(v.visible=w.visible,v.wireframe=w.wireframe,U===$n?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:f[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=i.properties.get(v);D.light=C}return v}function M(T,w,C,U,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===$n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let O=e.update(T),H=T.material;if(Array.isArray(H)){let $=O.groups;for(let k=0,j=$.length;k<j;k++){let B=$[k],Y=H[B.materialIndex];if(Y&&Y.visible){let oe=x(T,Y,U,v);T.onBeforeShadow(i,T,w,C,O,oe,B),i.renderBufferDirect(C,null,O,oe,T,B),T.onAfterShadow(i,T,w,C,O,oe,B)}}}else if(H.visible){let $=x(T,H,U,v);T.onBeforeShadow(i,T,w,C,O,$,null),i.renderBufferDirect(C,null,O,$,T,null),T.onAfterShadow(i,T,w,C,O,$,null)}}let D=T.children;for(let O=0,H=D.length;O<H;O++)M(D[O],w,C,U,v)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let U=c[C],v=T.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}function m_(i){function e(){let N=!1,me=new ot,X=null,Q=new ot(0,0,0,0);return{setMask:function(ve){X!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Se,je,yt,Jt){Jt===!0&&(ve*=yt,Se*=yt,je*=yt),me.set(ve,Se,je,yt),Q.equals(me)===!1&&(i.clearColor(ve,Se,je,yt),Q.copy(me))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function t(){let N=!1,me=!1,X=null,Q=null,ve=null;return{setReversed:function(Se){me=Se},setTest:function(Se){Se?Me(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(Se){X!==Se&&!N&&(i.depthMask(Se),X=Se)},setFunc:function(Se){if(me&&(Se=p_[Se]),Q!==Se){switch(Se){case Nl:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Se}},setLocked:function(Se){N=Se},setClear:function(Se){ve!==Se&&(i.clearDepth(Se),ve=Se)},reset:function(){N=!1,X=null,Q=null,ve=null}}}function n(){let N=!1,me=null,X=null,Q=null,ve=null,Se=null,je=null,yt=null,Jt=null;return{setTest:function(tt){N||(tt?Me(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(tt){me!==tt&&!N&&(i.stencilMask(tt),me=tt)},setFunc:function(tt,jt,Vn){(X!==tt||Q!==jt||ve!==Vn)&&(i.stencilFunc(tt,jt,Vn),X=tt,Q=jt,ve=Vn)},setOp:function(tt,jt,Vn){(Se!==tt||je!==jt||yt!==Vn)&&(i.stencilOp(tt,jt,Vn),Se=tt,je=jt,yt=Vn)},setLocked:function(tt){N=tt},setClear:function(tt){Jt!==tt&&(i.clearStencil(tt),Jt=tt)},reset:function(){N=!1,me=null,X=null,Q=null,ve=null,Se=null,je=null,yt=null,Jt=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,p=[],g=null,d=!1,_=null,m=null,u=null,y=null,x=null,M=null,R=null,T=new ze(0,0,0),w=0,C=!1,U=null,v=null,b=null,D=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,k=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=k>=2);let B=null,Y={},oe=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Fe=new ot().fromArray(oe),Xe=new ot().fromArray(he);function q(N,me,X,Q){let ve=new Uint8Array(4),Se=i.createTexture();i.bindTexture(N,Se),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<X;je++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Se}let ie={};ie[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(As),ce(!1),se(uu),Me(i.CULL_FACE),I(wt);function Me(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function le(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function Ie(N,me){return h[N]!==me?(i.bindFramebuffer(N,me),h[N]=me,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Pe(N,me){let X=p,Q=!1;if(N){X=f.get(me),X===void 0&&(X=[],f.set(me,X));let ve=N.textures;if(X.length!==ve.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,je=ve.length;Se<je;Se++)X[Se]=i.COLOR_ATTACHMENT0+Se;X.length=ve.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function Ne(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Ye={[gn]:i.FUNC_ADD,[zp]:i.FUNC_SUBTRACT,[kp]:i.FUNC_REVERSE_SUBTRACT};Ye[Bp]=i.MIN,Ye[Hp]=i.MAX;let ee={[Fs]:i.ZERO,[Vp]:i.ONE,[Gp]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[ma]:i.DST_COLOR,[pa]:i.DST_ALPHA,[Wp]:i.ONE_MINUS_SRC_COLOR,[Ul]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[$p]:i.CONSTANT_COLOR,[Zp]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[Jp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,me,X,Q,ve,Se,je,yt,Jt,tt){if(N===wt){d===!0&&(le(i.BLEND),d=!1);return}if(d===!1&&(Me(i.BLEND),d=!0),N!==ih){if(N!==_||tt!==C){if((m!==gn||x!==gn)&&(i.blendEquation(i.FUNC_ADD),m=gn,x=gn),tt)switch(N){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fu:i.blendFunc(i.ONE,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,y=null,M=null,R=null,T.set(0,0,0),w=0,_=N,C=tt}return}ve=ve||me,Se=Se||X,je=je||Q,(me!==m||ve!==x)&&(i.blendEquationSeparate(Ye[me],Ye[ve]),m=me,x=ve),(X!==u||Q!==y||Se!==M||je!==R)&&(i.blendFuncSeparate(ee[X],ee[Q],ee[Se],ee[je]),u=X,y=Q,M=Se,R=je),(yt.equals(T)===!1||Jt!==w)&&(i.blendColor(yt.r,yt.g,yt.b,Jt),T.copy(yt),w=Jt),_=N,C=!1}function ue(N,me){N.side===_t?le(i.CULL_FACE):Me(i.CULL_FACE);let X=N.side===Qt;me&&(X=!X),ce(X),N.blending===bs&&N.transparent===!1?I(wt):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);let Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function se(N){N!==Op?(Me(i.CULL_FACE),N!==v&&(N===uu?i.cullFace(i.BACK):N===Fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),v=N}function fe(N){N!==b&&($&&i.lineWidth(N),b=N)}function Ae(N,me,X){N?(Me(i.POLYGON_OFFSET_FILL),(D!==me||O!==X)&&(i.polygonOffset(me,X),D=me,O=X)):le(i.POLYGON_OFFSET_FILL)}function xe(N){N?Me(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+H-1),B!==N&&(i.activeTexture(N),B=N)}function E(N,me,X){X===void 0&&(B===null?X=i.TEXTURE0+H-1:X=B);let Q=Y[X];Q===void 0&&(Q={type:void 0,texture:void 0},Y[X]=Q),(Q.type!==N||Q.texture!==me)&&(B!==X&&(i.activeTexture(X),B=X),i.bindTexture(N,me||ie[N]),Q.type=N,Q.texture=me)}function V(){let N=Y[B];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(N){Fe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Fe.copy(N))}function be(N){Xe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function Je(N,me){let X=l.get(me);X===void 0&&(X=new WeakMap,l.set(me,X));let Q=X.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(me,N.name),X.set(N,Q))}function We(N,me){let Q=l.get(me).get(N);a.get(me)!==Q&&(i.uniformBlockBinding(me,Q,N.__bindingPointIndex),a.set(me,Q))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},B=null,Y={},h={},f=new WeakMap,p=[],g=null,d=!1,_=null,m=null,u=null,y=null,x=null,M=null,R=null,T=new ze(0,0,0),w=0,C=!1,U=null,v=null,b=null,D=null,O=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Me,disable:le,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:Ne,setBlending:I,setMaterial:ue,setFlipSided:ce,setCullFace:se,setLineWidth:fe,setPolygonOffset:Ae,setScissorTest:xe,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:_e,texImage3D:ke,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:re,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Be,viewport:be,reset:Qe}}function lf(i,e,t,n){let s=g_(n);switch(t){case Rf:return i*e;case Pf:return i*e;case If:return i*e*2;case fh:return i*e/s.components*s.byteLength;case dh:return i*e/s.components*s.byteLength;case Lf:return i*e*2/s.components*s.byteLength;case ph:return i*e*2/s.components*s.byteLength;case Cf:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case mh:return i*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case ql:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case $l:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case uc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Df:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g_(i){switch(i){case Rn:case Tf:return{byteLength:1,components:1};case dr:case wf:case yn:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case Hi:case ch:case Fn:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function __(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,E){return g?new OffscreenCanvas(P,E):mr("canvas")}function _(P,E,V){let Z=1,te=xe(P);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let K=Math.floor(Z*te.width),Ee=Math.floor(Z*te.height);f===void 0&&(f=d(K,Ee));let de=E?d(K,Ee):f;return de.width=K,de.height=Ee,de.getContext("2d").drawImage(P,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ee+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Ft&&P.minFilter!==An}function u(P){i.generateMipmap(P)}function y(P,E,V,Z,te=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),E===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){let Ee=te?Uo:et.getTransfer(Z);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Ee===ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,E){let V;return P?E===null||E===Hi||E===gi?V=i.DEPTH24_STENCIL8:E===Fn?V=i.DEPTH32F_STENCIL8:E===dr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===gi?V=i.DEPTH_COMPONENT24:E===Fn?V=i.DEPTH_COMPONENT32F:E===dr&&(V=i.DEPTH_COMPONENT16),V}function M(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ft&&P.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=P.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),U(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let V=P.source,Z=p.get(V);if(Z){let te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(P),Object.keys(Z).length===0&&p.delete(V)}n.remove(P)}function C(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let V=P.source,Z=p.get(V);delete Z[E.__cacheKey],o.memory.textures--}function U(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=P.textures;for(let Z=0,te=V.length;Z<te;Z++){let K=n.get(V[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(P)}let v=0;function b(){v=0}function D(){let P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function O(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){let V=n.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(V,P,E);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function $(P,E){let V=n.get(P);if(P.version>0&&V.__version!==P.version){Xe(V,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function k(P,E){let V=n.get(P);if(P.version>0&&V.__version!==P.version){Xe(V,P,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function j(P,E){let V=n.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let B={[St]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Gl]:i.MIRRORED_REPEAT},Y={[Ft]:i.NEAREST,[t0]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},oe={[r0]:i.NEVER,[u0]:i.ALWAYS,[o0]:i.LESS,[Uf]:i.LEQUAL,[a0]:i.EQUAL,[h0]:i.GEQUAL,[l0]:i.GREATER,[c0]:i.NOTEQUAL};function he(P,E){if(E.type===Fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===ja||E.magFilter===jr||E.magFilter===Bi||E.minFilter===An||E.minFilter===ja||E.minFilter===jr||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,B[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,B[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,B[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Y[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ft||E.minFilter!==jr&&E.minFilter!==Bi||E.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));let Z=E.source,te=p.get(Z);te===void 0&&(te={},p.set(Z,te));let K=O(E);if(K!==P.__cacheKey){te[K]===void 0&&(te[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[K].usedTimes++;let Ee=te[P.__cacheKey];Ee!==void 0&&(te[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),P.__cacheKey=K,P.__webglTexture=te[K].texture}return V}function Xe(P,E,V){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);let te=Fe(P,E),K=E.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+V);let Ee=n.get(K);if(K.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+V);let de=et.getPrimaries(et.workingColorSpace),ge=E.colorSpace===fi?null:et.getPrimaries(E.colorSpace),qe=E.colorSpace===fi||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let re=_(E.image,!1,s.maxTextureSize);re=Ae(E,re);let _e=r.convert(E.format,E.colorSpace),ke=r.convert(E.type),Be=y(E.internalFormat,_e,ke,E.colorSpace,E.isVideoTexture);he(Z,E);let be,Je=E.mipmaps,We=E.isVideoTexture!==!0,Qe=Ee.__version===void 0||te===!0,N=K.dataReady,me=M(E,re);if(E.isDepthTexture)Be=x(E.format===_i,E.type),Qe&&(We?t.texStorage2D(i.TEXTURE_2D,1,Be,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Be,re.width,re.height,0,_e,ke,null));else if(E.isDataTexture)if(Je.length>0){We&&Qe&&t.texStorage2D(i.TEXTURE_2D,me,Be,Je[0].width,Je[0].height);for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],We?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,_e,ke,be.data):t.texImage2D(i.TEXTURE_2D,X,Be,be.width,be.height,0,_e,ke,be.data);E.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(i.TEXTURE_2D,me,Be,re.width,re.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,_e,ke,re.data)):t.texImage2D(i.TEXTURE_2D,0,Be,re.width,re.height,0,_e,ke,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Be,Je[0].width,Je[0].height,re.depth);for(let X=0,Q=Je.length;X<Q;X++)if(be=Je[X],E.format!==un)if(_e!==null)if(We){if(N)if(E.layerUpdates.size>0){let ve=lf(be.width,be.height,E.format,E.type);for(let Se of E.layerUpdates){let je=be.data.subarray(Se*ve/be.data.BYTES_PER_ELEMENT,(Se+1)*ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Se,be.width,be.height,1,_e,je,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,re.depth,_e,be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Be,be.width,be.height,re.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,re.depth,_e,ke,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Be,be.width,be.height,re.depth,0,_e,ke,be.data)}else{We&&Qe&&t.texStorage2D(i.TEXTURE_2D,me,Be,Je[0].width,Je[0].height);for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],E.format!==un?_e!==null?We?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,_e,ke,be.data):t.texImage2D(i.TEXTURE_2D,X,Be,be.width,be.height,0,_e,ke,be.data)}else if(E.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Be,re.width,re.height,re.depth),N)if(E.layerUpdates.size>0){let X=lf(re.width,re.height,E.format,E.type);for(let Q of E.layerUpdates){let ve=re.data.subarray(Q*X/re.data.BYTES_PER_ELEMENT,(Q+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,_e,ke,ve)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,ke,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,re.width,re.height,re.depth,0,_e,ke,re.data);else if(E.isData3DTexture)We?(Qe&&t.texStorage3D(i.TEXTURE_3D,me,Be,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,ke,re.data)):t.texImage3D(i.TEXTURE_3D,0,Be,re.width,re.height,re.depth,0,_e,ke,re.data);else if(E.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(i.TEXTURE_2D,me,Be,re.width,re.height);else{let X=re.width,Q=re.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,Be,X,Q,0,_e,ke,null),X>>=1,Q>>=1}}else if(Je.length>0){if(We&&Qe){let X=xe(Je[0]);t.texStorage2D(i.TEXTURE_2D,me,Be,X.width,X.height)}for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],We?N&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,_e,ke,be):t.texImage2D(i.TEXTURE_2D,X,Be,_e,ke,be);E.generateMipmaps=!1}else if(We){if(Qe){let X=xe(re);t.texStorage2D(i.TEXTURE_2D,me,Be,X.width,X.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,ke,re)}else t.texImage2D(i.TEXTURE_2D,0,Be,_e,ke,re);m(E)&&u(Z),Ee.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,V){if(E.image.length!==6)return;let Z=Fe(P,E),te=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);let K=n.get(te);if(te.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);let Ee=et.getPrimaries(et.workingColorSpace),de=E.colorSpace===fi?null:et.getPrimaries(E.colorSpace),ge=E.colorSpace===fi||Ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let qe=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!qe&&!re?_e[Q]=_(E.image[Q],!0,s.maxCubemapSize):_e[Q]=re?E.image[Q].image:E.image[Q],_e[Q]=Ae(E,_e[Q]);let ke=_e[0],Be=r.convert(E.format,E.colorSpace),be=r.convert(E.type),Je=y(E.internalFormat,Be,be,E.colorSpace),We=E.isVideoTexture!==!0,Qe=K.__version===void 0||Z===!0,N=te.dataReady,me=M(E,ke);he(i.TEXTURE_CUBE_MAP,E);let X;if(qe){We&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Je,ke.width,ke.height);for(let Q=0;Q<6;Q++){X=_e[Q].mipmaps;for(let ve=0;ve<X.length;ve++){let Se=X[ve];E.format!==un?Be!==null?We?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Se.width,Se.height,Be,be,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,Se.width,Se.height,0,Be,be,Se.data)}}}else{if(X=E.mipmaps,We&&Qe){X.length>0&&me++;let Q=xe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Be,be,_e[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,_e[Q].width,_e[Q].height,0,Be,be,_e[Q].data);for(let ve=0;ve<X.length;ve++){let je=X[ve].image[Q].image;We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,je.width,je.height,Be,be,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,je.width,je.height,0,Be,be,je.data)}}else{We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,be,_e[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Be,be,_e[Q]);for(let ve=0;ve<X.length;ve++){let Se=X[ve];We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Be,be,Se.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,Be,be,Se.image[Q])}}}m(E)&&u(i.TEXTURE_CUBE_MAP),K.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ie(P,E,V,Z,te,K){let Ee=r.convert(V.format,V.colorSpace),de=r.convert(V.type),ge=y(V.internalFormat,Ee,de,V.colorSpace);if(!n.get(E).__hasExternalTextures){let re=Math.max(1,E.width>>K),_e=Math.max(1,E.height>>K);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,K,ge,re,_e,E.depth,0,Ee,de,null):t.texImage2D(te,K,ge,re,_e,0,Ee,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,n.get(V).__webglTexture,0,ce(E)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,n.get(V).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(P,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=x(E.stencilBuffer,te),Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=ce(E);se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,K,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,P)}else{let Z=E.textures;for(let te=0;te<Z.length;te++){let K=Z[te],Ee=r.convert(K.format,K.colorSpace),de=r.convert(K.type),ge=y(K.internalFormat,Ee,de,K.colorSpace),qe=ce(E);V&&se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ge,E.width,E.height):se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,ge,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ge,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let Z=n.get(E.depthTexture).__webglTexture,te=ce(E);if(E.depthTexture.format===Es)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(E.depthTexture.format===_i)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ie(P){let E=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),Me(E.__webglDepthbuffer[Z],P,!1);else{let te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Me(E.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(P,E,V){let Z=n.get(P);E!==void 0&&ie(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ie(P)}function Ne(P){let E=P.texture,V=n.get(P),Z=n.get(E);P.addEventListener("dispose",T);let te=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ge=0;ge<E.mipmaps.length;ge++)V.__webglFramebuffer[de][ge]=i.createFramebuffer()}else V.__webglFramebuffer[de]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)V.__webglFramebuffer[de]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let de=0,ge=te.length;de<ge;de++){let qe=n.get(te[de]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&se(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){let ge=te[de];V.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[de]);let qe=r.convert(ge.format,ge.colorSpace),re=r.convert(ge.type),_e=y(ge.internalFormat,qe,re,ge.colorSpace,P.isXRRenderTarget===!0),ke=ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,_e,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,V.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),he(i.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ie(V.__webglFramebuffer[de][ge],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ie(V.__webglFramebuffer[de],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,ge=te.length;de<ge;de++){let qe=te[de],re=n.get(qe);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),he(i.TEXTURE_2D,qe),ie(V.__webglFramebuffer,P,qe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(qe)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),he(de,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ie(V.__webglFramebuffer[ge],P,E,i.COLOR_ATTACHMENT0,de,ge);else ie(V.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,de,0);m(E)&&u(de),t.unbindTexture()}P.depthBuffer&&Ie(P)}function Ye(P){let E=P.textures;for(let V=0,Z=E.length;V<Z;V++){let te=E[V];if(m(te)){let K=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(te).__webglTexture;t.bindTexture(K,Ee),u(K),t.unbindTexture()}}}let ee=[],I=[];function ue(P){if(P.samples>0){if(se(P)===!1){let E=P.textures,V=P.width,Z=P.height,te=i.COLOR_BUFFER_BIT,K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),de=E.length>1;if(de)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let qe=n.get(E[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,i.NEAREST),l===!0&&(ee.length=0,I.length=0,ee.push(i.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let qe=n.get(E[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ce(P){return Math.min(s.maxSamples,P.samples)}function se(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ae(P,E){let V=P.colorSpace,Z=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==yi&&V!==fi&&(et.getTransfer(V)===ct?(Z!==un||te!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=Pe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=se}function x_(i,e){function t(n,s=fi){let r,o=et.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return i.BYTE;if(n===wf)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Rf)return i.ALPHA;if(n===Cf)return i.RGB;if(n===un)return i.RGBA;if(n===Pf)return i.LUMINANCE;if(n===If)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===dh)return i.RED_INTEGER;if(n===Lf)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Po)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===Yl||n===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Zl||n===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Zl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===uc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Df||n===dc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function b_(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ff(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),d(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,y,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=e.get(u),x=y.envMap,M=y.envMapRotation;x&&(m.envMap.value=x,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(d(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let T=e.render.frame;r[y.id]!==T&&(p(y),r[y.id]=T)}function h(y){let x=f();y.__bindingPointIndex=x;let M=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let x=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,v=C.length;U<v;U++){let b=C[U];if(g(b,T,U,R)===!0){let D=b.__offset,O=Array.isArray(b.value)?b.value:[b.value],H=0;for(let $=0;$<O.length;$++){let k=O[$],j=_(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+H,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,x,M,R){let T=y.value,w=x+"_"+M;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{let C=R[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(y){let x=y.uniforms,M=0,R=16;for(let w=0,C=x.length;w<C;w++){let U=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=U.length;v<b;v++){let D=U[v],O=Array.isArray(D.value)?D.value:[D.value];for(let H=0,$=O.length;H<$;H++){let k=O[H],j=_(k),B=M%R,Y=B%j.boundary,oe=B+Y;M+=Y,oe!==0&&R-oe<j.storage&&(M+=R-oe),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=j.storage}}}let T=M%R;return T>0&&(M+=R-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function So(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),Ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Zo,Ko,Al,ff)>n)return;Al.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Al);if(!(l<e.near||l>e.far))return{distance:l,point:ff.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function yh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,g*=h,s(o,a,p,g)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function df(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function w_(i,e){let t=1-i;return t*t*e}function A_(i,e){return 2*(1-i)*i*e}function R_(i,e){return i*i*e}function hr(i,e,t,n){return w_(i,e)+A_(i,t)+R_(i,n)}function C_(i,e){let t=1-i;return t*t*t*e}function P_(i,e){let t=1-i;return 3*t*t*i*e}function I_(i,e){return 3*(1-i)*i*i*e}function L_(i,e){return i*i*i*e}function ur(i,e,t,n,s){return C_(i,e)+P_(i,t)+I_(i,n)+L_(i,s)}function Gf(i,e,t,n,s){let r,o;if(s===Z_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=pf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=pf(r,i[r],i[r+1],o);return o&&va(o,o.next)&&(br(o),o=o.next),o}function Gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(va(t,t.next)||mt(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&G_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?N_(i,n,s,r):U_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=O_(Gi(i),e,t),Mr(i,e,t,n,s,r,2)):o===2&&F_(i,e,t,n,s,r):Mr(Gi(i),e,t,n,s,r,1);break}}}function U_(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,d=n.next;for(;d!==e;){if(d.x>=h&&d.x<=p&&d.y>=f&&d.y<=g&&Ss(s,a,r,l,o,c,d.x,d.y)&&mt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function N_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,g=a<l?a<c?a:c:l<c?l:c,d=h<f?h<p?h:p:f<p?f:p,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>p?h:p:f>p?f:p,u=Hc(g,d,e,t,n),y=Hc(_,m,e,t,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=u&&M&&M.z<=y;){if(x.x>=g&&x.x<=_&&x.y>=d&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,f,c,p,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=g&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,l,f,c,p,M.x,M.y)&&mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=u;){if(x.x>=g&&x.x<=_&&x.y>=d&&x.y<=m&&x!==s&&x!==o&&Ss(a,h,l,f,c,p,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=g&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,l,f,c,p,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function O_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!va(s,r)&&Wf(s,n,n.next,r)&&Sr(s,r)&&Sr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function F_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Y_(o,a)){let l=Xf(o,a);o=Gi(o,o.next),l=Gi(l,l.next),Mr(o,e,t,n,s,r,0),Mr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function z_(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Gf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(X_(c));for(s.sort(k_),r=0;r<s.length;r++)t=B_(s[r],t);return t}function k_(i,e){return i.x-e.x}function B_(i,e){let t=H_(i,e);if(!t)return e;let n=Xf(t,i);return Gi(n,n.next),Gi(t,t.next)}function H_(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ss(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Sr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&V_(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function V_(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function G_(i,e,t,n){let s=i;do s.z===0&&(s.z=Hc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W_(s)}function W_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Hc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ss(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Y_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!q_(i,e)&&(Sr(i,e)&&Sr(e,i)&&$_(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||va(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function va(i,e){return i.x===e.x&&i.y===e.y}function Wf(i,e,t,n){let s=To(mt(i,e,t)),r=To(mt(i,e,n)),o=To(mt(t,n,i)),a=To(mt(t,n,e));return!!(s!==r&&o!==a||s===0&&Eo(i,t,e)||r===0&&Eo(i,n,e)||o===0&&Eo(t,i,n)||a===0&&Eo(t,e,n))}function Eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function To(i){return i>0?1:i<0?-1:0}function q_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Sr(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function $_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xf(i,e){let t=new Vc(i.i,i.x,i.y),n=new Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pf(i,e,t,n){let s=new Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function mf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function J_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function j_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function wo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mf(){return performance.now()}var th,qi,kn,Op,uu,Fp,Sf,nh,$n,mi,Qt,_t,wt,bs,fu,du,pu,ih,gn,zp,kp,Bp,Hp,Fs,Vp,Gp,Wp,Dl,Ul,pa,Xp,ma,Yp,qp,$p,Zp,Kp,Jp,Nl,Ol,Fl,As,zl,kl,Bl,Hl,bf,jp,Qp,di,sh,rh,oh,Ar,e0,ah,lh,Ef,Rs,Cs,fr,Vl,ga,St,ki,Gl,Ft,t0,jr,An,ja,Bi,Rn,Tf,wf,dr,ch,Hi,Fn,yn,hh,uh,gi,Af,Rf,Cf,un,Pf,If,Es,_i,fh,dh,Lf,ph,mh,Ao,Ro,Co,Po,Wl,Xl,Yl,ql,$l,Zl,Kl,Jl,jl,Ql,ec,tc,nc,ic,sc,rc,oc,ac,lc,cc,hc,Io,uc,fc,Df,dc,pc,mc,Do,gc,Qa,mu,gu,_u,n0,i0,gh,s0,fi,pt,yi,_h,_a,Uo,ct,No,Oo,rs,xu,r0,o0,a0,Uf,l0,c0,h0,u0,vu,yu,Zn,Fo,Kn,Bt,Mu,ar,pr,Pn,ne,Ze,el,Su,bu,Eu,Js,L0,et,os,_c,D0,zo,U0,qt,ot,xc,Gt,ko,vc,$t,L,il,Tu,Jn,Gn,bn,Qr,as,ls,cs,oi,ai,Pi,js,eo,to,Ii,N0,Qs,rl,xi,Wn,ol,no,li,al,io,ll,Ps,Ke,hs,En,O0,F0,ci,so,cn,wu,Au,fn,Bo,z0,Ru,us,Xn,ro,er,k0,B0,Cu,Pu,Iu,Lu,H0,fs,cl,Dt,Tn,Yn,hl,qn,ds,ps,Du,ul,fl,dl,pl,ml,gl,Fi,Of,hi,oo,ze,Ht,V0,jn,Ho,Mt,ao,zt,Vo,Go,at,G0,mn,xl,ms,hn,tr,Lt,At,Uu,Li,lo,Nu,co,ho,uo,vl,fo,Ou,po,Ge,Ut,In,Y0,q0,bt,Wo,ui,Fu,zu,Vt,gs,_s,yc,Xo,Mc,yl,$0,Z0,wn,Di,go,gr,zn,J0,j0,Q0,em,tm,nm,im,sm,rm,om,am,lm,cm,hm,um,fm,dm,pm,mm,gm,_m,xm,vm,ym,Mm,Sm,bm,Em,Tm,wm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Om,Fm,zm,km,Bm,Hm,Vm,Gm,Wm,Xm,Ym,qm,$m,Zm,Km,Jm,jm,Qm,e1,t1,n1,i1,s1,r1,o1,a1,l1,c1,h1,u1,f1,d1,p1,m1,g1,_1,x1,v1,y1,M1,S1,b1,E1,T1,w1,A1,R1,C1,P1,I1,L1,D1,U1,N1,O1,F1,z1,k1,B1,H1,V1,G1,W1,X1,Y1,q1,$1,Z1,K1,J1,j1,Q1,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,_g,xg,vg,yg,Mg,Sg,bg,Eg,Tg,wg,Ag,Rg,Cg,$e,pe,On,_o,Ui,Pg,Ls,Ms,ku,zi,Ml,Bu,Sl,bl,El,Tl,Oi,xs,Hu,Ds,Us,kf,Xu,Bf,Hf,Vf,Yu,qu,$u,Zu,Ku,Sc,bc,Ec,wl,ws,D2,U2,vo,G2,W2,Y2,e_,wc,Ac,a_,Rc,Cc,u_,f_,p_,Pc,dt,v_,cr,y_,M_,Ic,Lc,Ni,S_,Yo,qo,$o,Vi,_r,vs,cf,yo,hf,T_,nr,ir,Ns,xr,Zo,Ko,uf,sr,Mo,Al,ff,vr,_n,xn,yr,Dc,bo,Rl,Cl,Pl,Uc,Jo,Nc,jo,Oc,Qo,Fc,ea,zc,kc,ta,Qn,Bc,en,D_,pi,Wi,K_,na,vi,ia,sa,Oe,vn,ra,Os,Gc,Wc,Xc,Cn,Xi,Yc,qc,$c,oa,Yi,Zc,_f,Kc,ex,Er,Jc,aa,Tr,la,Il,xf,vf,ca,yf,rr,Ll,jc,ha,Qc,ua,fa,Mh,tx,Sh,nx,ix,sx,rx,ox,ax,lx,eh,ft,Mv,wr,da,Pt=rt(()=>{th="169",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Op=0,uu=1,Fp=2,Sf=1,nh=2,$n=3,mi=0,Qt=1,_t=2,wt=0,bs=1,fu=2,du=3,pu=4,ih=5,gn=100,zp=101,kp=102,Bp=103,Hp=104,Fs=200,Vp=201,Gp=202,Wp=203,Dl=204,Ul=205,pa=206,Xp=207,ma=208,Yp=209,qp=210,$p=211,Zp=212,Kp=213,Jp=214,Nl=0,Ol=1,Fl=2,As=3,zl=4,kl=5,Bl=6,Hl=7,bf=0,jp=1,Qp=2,di=0,sh=1,rh=2,oh=3,Ar=4,e0=5,ah=6,lh=7,Ef=300,Rs=301,Cs=302,fr=303,Vl=304,ga=306,St=1e3,ki=1001,Gl=1002,Ft=1003,t0=1004,jr=1005,An=1006,ja=1007,Bi=1008,Rn=1009,Tf=1010,wf=1011,dr=1012,ch=1013,Hi=1014,Fn=1015,yn=1016,hh=1017,uh=1018,gi=1020,Af=35902,Rf=1021,Cf=1022,un=1023,Pf=1024,If=1025,Es=1026,_i=1027,fh=1028,dh=1029,Lf=1030,ph=1031,mh=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Wl=35840,Xl=35841,Yl=35842,ql=35843,$l=36196,Zl=37492,Kl=37496,Jl=37808,jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,Io=36492,uc=36494,fc=36495,Df=36283,dc=36284,pc=36285,mc=36286,Do=2300,gc=2301,Qa=2302,mu=2400,gu=2401,_u=2402,n0=3200,i0=3201,gh=0,s0=1,fi="",pt="srgb",yi="srgb-linear",_h="display-p3",_a="display-p3-linear",Uo="linear",ct="srgb",No="rec709",Oo="p3",rs=7680,xu=519,r0=512,o0=513,a0=514,Uf=515,l0=516,c0=517,h0=518,u0=519,vu=35044,yu="300 es",Zn=2e3,Fo=2001,Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,ar=Math.PI/180,pr=180/Math.PI;Pn={DEG2RAD:ar,RAD2DEG:pr,generateUUID:$i,clamp:Tt,euclideanModulo:xh,mapLinear:f0,inverseLerp:d0,lerp:lr,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:_0,randInt:x0,randFloat:v0,randFloatSpread:y0,seededRandom:M0,degToRad:S0,radToDeg:b0,isPowerOfTwo:E0,ceilPowerOfTwo:T0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:A0,normalize:Xt,denormalize:ys},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],g=n[5],d=n[8],_=s[0],m=s[3],u=s[6],y=s[1],x=s[4],M=s[7],R=s[2],T=s[5],w=s[8];return r[0]=o*_+a*y+l*R,r[3]=o*m+a*x+l*T,r[6]=o*u+a*M+l*w,r[1]=c*_+h*y+f*R,r[4]=c*m+h*x+f*T,r[7]=c*u+h*M+f*w,r[2]=p*_+g*y+d*R,r[5]=p*m+g*x+d*T,r[8]=p*u+g*M+d*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,g=c*r-o*l,d=t*f+n*p+s*g;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=g*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new Ze;Su={};bu=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eu=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[yi]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[pt]:{transfer:ct,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_a]:{transfer:Uo,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Eu),fromReference:i=>i.applyMatrix3(bu)},[_h]:{transfer:ct,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Eu),fromReference:i=>i.applyMatrix3(bu).convertLinearToSRGB()}},L0=new Set([yi,_a]),et={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!L0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Js[e].toReference,s=Js[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Js[i].primaries},getTransfer:function(i){return i===fi?Uo:Js[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Js[e].luminanceCoefficients)}};_c=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=mr("canvas")),os.width=e.width,os.height=e.height;let n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},D0=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};U0=0,qt=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ki,s=ki,r=An,o=Bi,a=un,l=Rn,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=$i(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case St:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case St:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ef;qt.DEFAULT_ANISOTROPY=1;ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],d=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(d-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(d+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(g+1)/2,R=(u+1)/2,T=(h+p)/4,w=(f+_)/4,C=(d+m)/4;return x>M&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-d)*(m-d)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-d)/y,this.y=(f-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ko=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vc=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],g=r[o+1],d=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=d,e[t+3]=_;return}if(f!==_||l!==p||c!==g||h!==d){let m=1-a,u=l*p+c*g+h*d+f*_,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,u*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let M=a*y;if(l=l*m+p*M,c=c*m+g*M,h=h*m+d*M,f=f*m+_*M,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],p=r[o+1],g=r[o+2],d=r[o+3];return e[t]=a*d+h*f+l*g-c*p,e[t+1]=l*d+h*p+c*f-a*g,e[t+2]=c*d+h*g+a*p-l*f,e[t+3]=h*d-a*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),p=l(n/2),g=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*g*d,this._y=c*g*f-p*h*d,this._z=c*h*d+p*g*f,this._w=c*h*f-p*g*d;break;case"YXZ":this._x=p*h*f+c*g*d,this._y=c*g*f-p*h*d,this._z=c*h*d-p*g*f,this._w=c*h*f+p*g*d;break;case"ZXY":this._x=p*h*f-c*g*d,this._y=c*g*f+p*h*d,this._z=c*h*d+p*g*f,this._w=c*h*f-p*g*d;break;case"ZYX":this._x=p*h*f-c*g*d,this._y=c*g*f+p*h*d,this._z=c*h*d-p*g*f,this._w=c*h*f+p*g*d;break;case"YZX":this._x=p*h*f+c*g*d,this._y=c*g*f+p*h*d,this._z=c*h*d-p*g*f,this._w=c*h*f-p*g*d;break;case"XZY":this._x=p*h*f-c*g*d,this._y=c*g*f-p*h*d,this._z=c*h*d+p*g*f,this._w=c*h*f+p*g*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new L,Tu=new $t,Jn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),eo.subVectors(this.max,js),as.subVectors(e.a,js),ls.subVectors(e.b,js),cs.subVectors(e.c,js),oi.subVectors(ls,as),ai.subVectors(cs,ls),Pi.subVectors(as,cs);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!sl(t,as,ls,cs,eo)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,as,ls,cs,eo))?!1:(to.crossVectors(oi,ai),t=[to.x,to.y,to.z],sl(t,as,ls,cs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Qr=new Jn,as=new L,ls=new L,cs=new L,oi=new L,ai=new L,Pi=new L,js=new L,eo=new L,to=new L,Ii=new L;N0=new Jn,Qs=new L,rl=new L,xi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):N0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(rl)),this.expandByPoint(Qs.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new L,ol=new L,no=new L,li=new L,al=new L,io=new L,ll=new L,Ps=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),li.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=li.dot(this.direction),l=-li.dot(no),c=li.lengthSq(),h=Math.abs(1-o*o),f,p,g,d;if(h>0)if(f=o*l-a,p=o*a-l,d=r*h,f>=0)if(p>=-d)if(p<=d){let _=1/h;f*=_,p*=_,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-d?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c):p<=d?(f=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ol).addScaledVector(no,p),g}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),io.subVectors(n,e),ll.crossVectors(al,io);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);let l=a*this.direction.dot(io.crossVectors(li,io));if(l<0)return null;let c=a*this.direction.dot(al.cross(li));if(c<0||l+c>o)return null;let h=-a*li.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,p,g,d,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,p,g,d,_,m)}set(e,t,n,s,r,o,a,l,c,h,f,p,g,d,_,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=g,u[7]=d,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*f,d=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+d*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=d+g*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*f,d=c*h,_=c*f;t[0]=p+_*a,t[4]=d*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=g*a-d,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*f,d=c*h,_=c*f;t[0]=p-_*a,t[4]=-o*f,t[8]=d+g*a,t[1]=g+d*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*f,d=a*h,_=a*f;t[0]=l*h,t[4]=d*c-g,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=g*c-d,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*c,d=a*l,_=a*c;t[0]=l*h,t[4]=_-p*f,t[8]=d*f+g,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*f+d,t[10]=p-_*f}else if(e.order==="XZY"){let p=o*l,g=o*c,d=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+_,t[5]=o*h,t[9]=g*f-d,t[2]=d*f-g,t[6]=a*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,F0)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ci.crossVectors(n,cn),ci.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ci.crossVectors(n,cn)),ci.normalize(),so.crossVectors(cn,ci),s[0]=ci.x,s[4]=so.x,s[8]=cn.x,s[1]=ci.y,s[5]=so.y,s[9]=cn.y,s[2]=ci.z,s[6]=so.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],g=n[13],d=n[2],_=n[6],m=n[10],u=n[14],y=n[3],x=n[7],M=n[11],R=n[15],T=s[0],w=s[4],C=s[8],U=s[12],v=s[1],b=s[5],D=s[9],O=s[13],H=s[2],$=s[6],k=s[10],j=s[14],B=s[3],Y=s[7],oe=s[11],he=s[15];return r[0]=o*T+a*v+l*H+c*B,r[4]=o*w+a*b+l*$+c*Y,r[8]=o*C+a*D+l*k+c*oe,r[12]=o*U+a*O+l*j+c*he,r[1]=h*T+f*v+p*H+g*B,r[5]=h*w+f*b+p*$+g*Y,r[9]=h*C+f*D+p*k+g*oe,r[13]=h*U+f*O+p*j+g*he,r[2]=d*T+_*v+m*H+u*B,r[6]=d*w+_*b+m*$+u*Y,r[10]=d*C+_*D+m*k+u*oe,r[14]=d*U+_*O+m*j+u*he,r[3]=y*T+x*v+M*H+R*B,r[7]=y*w+x*b+M*$+R*Y,r[11]=y*C+x*D+M*k+R*oe,r[15]=y*U+x*O+M*j+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],d=e[3],_=e[7],m=e[11],u=e[15];return d*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*g-n*l*g)+_*(+t*l*g-t*c*p+r*o*p-s*o*g+s*c*h-r*l*h)+m*(+t*c*f-t*a*g-r*o*f+n*o*g+r*a*h-n*c*h)+u*(-s*a*h-t*l*f+t*a*p+s*o*f-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],d=e[12],_=e[13],m=e[14],u=e[15],y=f*m*c-_*p*c+_*l*g-a*m*g-f*l*u+a*p*u,x=d*p*c-h*m*c-d*l*g+o*m*g+h*l*u-o*p*u,M=h*_*c-d*f*c+d*a*g-o*_*g-h*a*u+o*f*u,R=d*f*l-h*_*l-d*a*p+o*_*p+h*a*m-o*f*m,T=t*y+n*x+s*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=y*w,e[1]=(_*p*r-f*m*r-_*s*g+n*m*g+f*s*u-n*p*u)*w,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*u+n*l*u)*w,e[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*g-n*l*g)*w,e[4]=x*w,e[5]=(h*m*r-d*p*r+d*s*g-t*m*g-h*s*u+t*p*u)*w,e[6]=(d*l*r-o*m*r-d*s*c+t*m*c+o*s*u-t*l*u)*w,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*g+t*l*g)*w,e[8]=M*w,e[9]=(d*f*r-h*_*r-d*n*g+t*_*g+h*n*u-t*f*u)*w,e[10]=(o*_*r-d*a*r+d*n*c-t*_*c-o*n*u+t*a*u)*w,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*g-t*a*g)*w,e[12]=R*w,e[13]=(h*_*s-d*f*s+d*n*p-t*_*p-h*n*m+t*f*m)*w,e[14]=(d*a*s-o*_*s-d*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*p+t*a*p)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,g=r*h,d=r*f,_=o*h,m=o*f,u=a*f,y=l*c,x=l*h,M=l*f,R=n.x,T=n.y,w=n.z;return s[0]=(1-(_+u))*R,s[1]=(g+M)*R,s[2]=(d-x)*R,s[3]=0,s[4]=(g-M)*T,s[5]=(1-(p+u))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(d+x)*w,s[9]=(m-y)*w,s[10]=(1-(p+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,h=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,d;if(a===Zn)g=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===Fo)g=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),p=(t+e)*c,g=(n+s)*h,d,_;if(a===Zn)d=(o+r)*f,_=-2*f;else if(a===Fo)d=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hs=new L,En=new Ke,O0=new L(0,0,0),F0=new L(1,1,1),ci=new L,so=new L,cn=new L,wu=new Ke,Au=new $t,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z0=0,Ru=new L,us=new $t,Xn=new Ke,ro=new L,er=new L,k0=new L,B0=new $t,Cu=new L(1,0,0),Pu=new L(0,1,0),Iu=new L(0,0,1),Lu={type:"added"},H0={type:"removed"},fs={type:"childadded",child:null},cl={type:"childremoved",child:null},Dt=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new fn,n=new $t,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(er,ro,this.up):Xn.lookAt(ro,er,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Xn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),d=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),d.length>0&&(n.nodes=d)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new L(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Tn=new L,Yn=new L,hl=new L,qn=new L,ds=new L,ps=new L,Du=new L,ul=new L,fl=new L,dl=new L,pl=new ot,ml=new ot,gl=new ot,Fi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Yn.subVectors(n,t),hl.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Yn),l=Tn.dot(hl),c=Yn.dot(Yn),h=Yn.dot(hl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,g=(c*l-a*h)*p,d=(o*h-a*l)*p;return r.set(1-g-d,d,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),ps.subVectors(r,n),ul.subVectors(e,n);let l=ds.dot(ul),c=ps.dot(ul);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);let h=ds.dot(fl),f=ps.dot(fl);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ds,o);dl.subVectors(e,r);let g=ds.dot(dl),d=ps.dot(dl);if(d>=0&&g<=d)return t.copy(r);let _=g*c-l*d;if(_<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ps,a);let m=h*d-g*f;if(m<=0&&f-h>=0&&g-d>=0)return Du.subVectors(r,s),a=(f-h)/(f-h+(g-d)),t.copy(s).addScaledVector(Du,a);let u=1/(m+_+p);return o=_*u,a=p*u,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},oo={h:0,s:0,l:0};ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=xh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return et.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Tt(Ht.r*255,0,255))*65536+Math.round(Tt(Ht.g*255,0,255))*256+Math.round(Tt(Ht.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ht.copy(this),t);let n=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=pt){et.fromWorkingColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,s=Ht.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(oo);let n=lr(hi.h,oo.h,t),s=lr(hi.s,oo.s,t),r=lr(hi.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new ze;ze.NAMES=Of;V0=0,jn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=bs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Ul,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ho=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new L,ao=new ne,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}},Vo=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Go=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},at=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},G0=0,mn=new Ke,xl=new Dt,ms=new L,hn=new Jn,tr=new Jn,Lt=new L,At=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Go:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,tr.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,tr.max),hn.expandByPoint(Lt)):(hn.expandByPoint(tr.min),hn.expandByPoint(tr.max))}hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Lt.add(ms)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let c=new L,h=new L,f=new L,p=new ne,g=new ne,d=new ne,_=new L,m=new L;function u(C,U,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,v),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,U),d.fromBufferAttribute(r,v),h.sub(c),f.sub(c),g.sub(p),d.sub(p);let b=1/(g.x*d.y-d.x*g.y);isFinite(b)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(f,-g.y).multiplyScalar(b),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-d.x).multiplyScalar(b),a[C].add(_),a[U].add(_),a[v].add(_),l[C].add(m),l[U].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,U=y.length;C<U;++C){let v=y[C],b=v.start,D=v.count;for(let O=b,H=b+D;O<H;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new L,M=new L,R=new L,T=new L;function w(C){R.fromBufferAttribute(s,C),T.copy(R);let U=a[C];x.copy(U),x.sub(R.multiplyScalar(R.dot(U))).normalize(),M.crossVectors(T,U);let b=M.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,U=y.length;C<U;++C){let v=y[C],b=v.start,D=v.count;for(let O=b,H=b+D;O<H;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let p=0,g=e.count;p<g;p+=3){let d=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),g=0,d=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*h;for(let u=0;u<h;u++)p[d++]=c[g++]}return new zt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],g=e(p,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new Ke,Li=new Ps,lo=new xi,Nu=new L,co=new L,ho=new L,uo=new L,vl=new L,fo=new L,Ou=new L,po=new L,Ge=class extends Dt{constructor(e=new At,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(vl.fromBufferAttribute(f,e),o?fo.addScaledVector(vl,h):fo.addScaledVector(vl.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(lo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(lo,Nu)===null||Li.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,_=p.length;d<_;d++){let m=p[d],u=o[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=y,R=x;M<R;M+=3){let T=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);s=mo(this,u,e,n,c,h,f,T,w,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let m=d,u=_;m<u;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=mo(this,o,e,n,c,h,f,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,_=p.length;d<_;d++){let m=p[d],u=o[m.materialIndex],y=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=y,R=x;M<R;M+=3){let T=M,w=M+1,C=M+2;s=mo(this,u,e,n,c,h,f,T,w,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=d,u=_;m<u;m+=3){let y=m,x=m+1,M=m+2;s=mo(this,o,e,n,c,h,f,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ut=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,g=0;d("z","y","x",-1,-1,n,t,e,o,r,0),d("z","y","x",1,-1,n,t,-e,o,r,1),d("x","z","y",1,1,e,n,t,s,o,2),d("x","z","y",1,-1,e,n,-t,s,o,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function d(_,m,u,y,x,M,R,T,w,C,U){let v=M/w,b=R/C,D=M/2,O=R/2,H=T/2,$=w+1,k=C+1,j=0,B=0,Y=new L;for(let oe=0;oe<k;oe++){let he=oe*b-O;for(let Fe=0;Fe<$;Fe++){let Xe=Fe*v-D;Y[_]=Xe*y,Y[m]=he*x,Y[u]=H,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[u]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Fe/w),f.push(1-oe/C),j+=1}}for(let oe=0;oe<C;oe++)for(let he=0;he<w;he++){let Fe=p+he+$*oe,Xe=p+he+$*(oe+1),q=p+(he+1)+$*(oe+1),ie=p+(he+1)+$*oe;l.push(Fe,Xe,ie),l.push(Xe,q,ie),B+=6}a.addGroup(g,B,U),g+=B,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};In={clone:Is,merge:Yt},Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new L,Fu=new ne,zu=new ne,Vt=class extends Wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,zu),t.subVectors(zu,Fu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gs=-90,_s=1,yc=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(gs,_s,e,t);s.layers=this.layers,this.add(s);let r=new Vt(gs,_s,e,t);r.layers=this.layers,this.add(r);let o=new Vt(gs,_s,e,t);o.layers=this.layers,this.add(o);let a=new Vt(gs,_s,e,t);a.layers=this.layers,this.add(a);let l=new Vt(gs,_s,e,t);l.layers=this.layers,this.add(l);let c=new Vt(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Xo=class extends qt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mc=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ut(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:wt});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=An),new yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},yl=new L,$0=new L,Z0=new Ze,wn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yl.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Z0.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new xi,go=new L,gr=class{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],d=s[9],_=s[10],m=s[11],u=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,p-c,m-g,M-u).normalize(),n[1].setComponents(l+r,p+c,m+g,M+u).normalize(),n[2].setComponents(l+o,p+h,m+d,M+y).normalize(),n[3].setComponents(l-o,p-h,m-d,M-y).normalize(),n[4].setComponents(l-a,p-f,m-_,M-x).normalize(),t===Zn)n[5].setComponents(l+a,p+f,m+_,M+x).normalize();else if(t===Fo)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};zn=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,g=[],d=[],_=[],m=[];for(let u=0;u<h;u++){let y=u*p-o;for(let x=0;x<c;x++){let M=x*f-r;d.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){let x=y+c*u,M=y+c*(u+1),R=y+1+c*(u+1),T=y+1+c*u;g.push(x,M,T),g.push(M,R,T)}this.setIndex(g),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:J0,alphahash_pars_fragment:j0,alphamap_fragment:Q0,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:fm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:xm,color_vertex:vm,common:ym,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:Tm,emissivemap_pars_fragment:wm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:km,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:qm,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Km,lights_fragment_maps:Jm,lights_fragment_end:jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:e1,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:s1,map_particle_fragment:r1,map_particle_pars_fragment:o1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:l1,morphinstance_vertex:c1,morphcolor_vertex:h1,morphnormal_vertex:u1,morphtarget_pars_vertex:f1,morphtarget_vertex:d1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:_1,normal_vertex:x1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:b1,opaque_fragment:E1,packing:T1,premultiplied_alpha_fragment:w1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:N1,skinbase_vertex:O1,skinning_pars_vertex:F1,skinning_vertex:z1,skinnormal_vertex:k1,specularmap_fragment:B1,specularmap_pars_fragment:H1,tonemapping_fragment:V1,tonemapping_pars_fragment:G1,transmission_fragment:W1,transmission_pars_fragment:X1,uv_pars_fragment:Y1,uv_pars_vertex:q1,uv_vertex:$1,worldpos_vertex:Z1,background_vert:K1,background_frag:J1,backgroundCube_vert:j1,backgroundCube_frag:Q1,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:fg,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:Eg,points_frag:Tg,shadow_vert:wg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},On={basic:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([pe.lights,pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};_o={r:0,b:0,g:0},Ui=new fn,Pg=new Ke;Ls=class extends Wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,ku=[.125,.215,.35,.446,.526,.582],zi=20,Ml=new Ls,Bu=new ze,Sl=null,bl=0,El=0,Tl=!1,Oi=(1+Math.sqrt(5))/2,xs=1/Oi,Hu=[new L(-Oi,xs,0),new L(Oi,xs,0),new L(-xs,0,Oi),new L(xs,0,Oi),new L(0,Oi,-xs),new L(0,Oi,xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ds=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,bl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:yn,format:un,colorSpace:yi,depthBuffer:!1},s=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=zg(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Bu),h.toneMapping=di,h.autoClear=!1;let g=new Ho({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),d=new Ge(new Ut,g),_=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Bu),_=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;xo(s,y*x,u>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(d,a),h.render(e,a)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hu[(s-r-1)%Hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ge(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*zi-1),_=r/d,m=isFinite(r)?1+Math.floor(h*_):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let u=[],y=0;for(let w=0;w<zi;++w){let C=w/_,U=Math.exp(-C*C/2);u.push(U),w===0?y+=U:w<m&&(y+=2*U)}for(let w=0;w<u.length;w++)u[w]=u[w]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=d,p.mipInt.value=x-n;let M=this._sizeLods[s],R=3*M*(s>x-Ms?s-x+Ms:0),T=4*(this._cubeSize-M);xo(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Ml)}};Us=class extends qt{constructor(e,t,n,s,r,o,a,l,c,h=Es){if(h!==Es&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Hi),n===void 0&&h===_i&&(n=gi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kf=new qt,Xu=new Us(1,1),Bf=new ko,Hf=new vc,Vf=new Xo,Yu=[],qu=[],$u=new Float32Array(16),Zu=new Float32Array(9),Ku=new Float32Array(4);Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u2(t.type)}},bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I2(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);L2(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};D2=37297,U2=0;vo=new L;G2=/^[ \t]*#include +<([\w\d./]+)>/gm;W2=new Map;Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;e_=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ac(e),t.set(e,n)),n}},Ac=class{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}};a_=0;Rc=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;p_={[Nl]:Ol,[Fl]:Bl,[zl]:Hl,[As]:kl,[Ol]:Nl,[Bl]:Fl,[Hl]:zl,[kl]:As};Pc=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},v_={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,d=.005;c.inputState.pinching&&p>g+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:y_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,d=null,_=new Ic,m=t.getContextAttributes(),u=null,y=null,x=[],M=[],R=new ne,T=null,w=new Vt;w.layers.enable(1),w.viewport=new ot;let C=new Vt;C.layers.enable(2),C.viewport=new ot;let U=[w,C],v=new Pc;v.layers.enable(1),v.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new cr,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new cr,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new cr,x[q]=ie),ie.getHandSpace()};function O(q){let ie=M.indexOf(q.inputSource);if(ie===-1)return;let Me=x[ie];Me!==void 0&&(Me.update(q.inputSource,q.frame,c||o),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){let ie=M[q];ie!==null&&(M[q]=null,x[q].disconnect(ie))}b=null,D=null,_.reset(),e.setRenderTarget(u),g=null,p=null,f=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Gt(g.framebufferWidth,g.framebufferHeight,{format:un,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?_i:Es,Me=m.stencil?gi:Hi);let Ie={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Gt(p.textureWidth,p.textureHeight,{format:un,type:Rn,depthTexture:new Us(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let ie=0;ie<q.removed.length;ie++){let Me=q.removed[ie],le=M.indexOf(Me);le>=0&&(M[le]=null,x[le].disconnect(Me))}for(let ie=0;ie<q.added.length;ie++){let Me=q.added[ie],le=M.indexOf(Me);if(le===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=M.length){M.push(Me),le=Pe;break}else if(M[Pe]===null){M[Pe]=Me,le=Pe;break}if(le===-1)break}let Ie=x[le];Ie&&Ie.connect(Me)}}let k=new L,j=new L;function B(q,ie,Me){k.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);let le=k.distanceTo(j),Ie=ie.projectionMatrix.elements,Pe=Me.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),Ye=Ie[14]/(Ie[10]+1),ee=(Ie[9]+1)/Ie[5],I=(Ie[9]-1)/Ie[5],ue=(Ie[8]-1)/Ie[0],ce=(Pe[8]+1)/Pe[0],se=Ne*ue,fe=Ne*ce,Ae=le/(-ue+ce),xe=Ae*-ue;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let P=Ne+Ae,E=Ye+Ae,V=se-xe,Z=fe+(le-xe),te=ee*Ye/E*P,K=I*Ye/E*P;q.projectionMatrix.makePerspective(V,Z,te,K,P,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,Me=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),v.near=C.near=w.near=ie,v.far=C.far=w.far=Me,(b!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,D=v.far);let le=q.parent,Ie=v.cameras;Y(v,le);for(let Pe=0;Pe<Ie.length;Pe++)Y(Ie[Pe],le);Ie.length===2?B(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),oe(q,v,le)};function oe(q,ie,Me){Me===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let he=null;function Fe(q,ie){if(h=ie.getViewerPose(c||o),d=ie,h!==null){let Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let le=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Pe=0;Pe<Me.length;Pe++){let Ne=Me[Pe],Ye=null;if(g!==null)Ye=g.getViewport(Ne);else{let I=f.getViewSubImage(p,Ne);Ye=I.viewport,Pe===0&&(e.setRenderTargetTextures(y,I.colorTexture,p.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(y))}let ee=U[Pe];ee===void 0&&(ee=new Vt,ee.layers.enable(Pe),ee.viewport=new ot,U[Pe]=ee),ee.matrix.fromArray(Ne.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ne.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Pe===0&&(v.matrix.copy(ee.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(ee)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Pe=f.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,s.renderState)}}for(let Me=0;Me<x.length;Me++){let le=M[Me],Ie=x[Me];le!==null&&Ie!==void 0&&Ie.update(le,ie,c||o)}he&&he(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),d=null}let Xe=new zf;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}},Ni=new fn,S_=new Ke;Yo=class{constructor(e={}){let{canvas:t=R0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),d=new Int32Array(4),_=null,m=null,u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=di,this.toneMappingExposure=1;let x=this,M=!1,R=0,T=0,w=null,C=-1,U=null,v=new ot,b=new ot,D=null,O=new ze(0),H=0,$=t.width,k=t.height,j=1,B=null,Y=null,oe=new ot(0,0,$,k),he=new ot(0,0,$,k),Fe=!1,Xe=new gr,q=!1,ie=!1,Me=new Ke,le=new Ke,Ie=new L,Pe=new ot,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function ee(){return w===null?j:1}let I=n;function ue(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Se,!1),I===null){let F="webgl2";if(I=ue(F,A),I===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,se,fe,Ae,xe,P,E,V,Z,te,K,Ee,de,ge,qe,re,_e,ke,Be,be,Je,We,Qe,N;function me(){ce=new Bg(I),ce.init(),We=new x_(I,ce),se=new Ug(I,ce,e,We),fe=new m_(I),se.reverseDepthBuffer&&fe.buffers.depth.setReversed(!0),Ae=new Gg(I),xe=new n_,P=new __(I,ce,fe,xe,se,We,Ae),E=new Og(x),V=new kg(x),Z=new K0(I),Qe=new Lg(I,Z),te=new Hg(I,Z,Ae,Qe),K=new Xg(I,te,Z,Ae),Be=new Wg(I,se,P),re=new Ng(xe),Ee=new t_(x,E,V,ce,se,Qe,re),de=new b_(x,xe),ge=new s_,qe=new h_(ce),ke=new Ig(x,E,V,fe,K,p,l),_e=new d_(x,K,se),N=new E_(I,Ae,se,fe),be=new Dg(I,ce,Ae),Je=new Vg(I,ce,Ae),Ae.programs=Ee.programs,x.capabilities=se,x.extensions=ce,x.properties=xe,x.renderLists=ge,x.shadowMap=_e,x.state=fe,x.info=Ae}me();let X=new Lc(x,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize($,k,!1))},this.getSize=function(A){return A.set($,k)},this.setSize=function(A,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,k=F,t.width=Math.floor(A*j),t.height=Math.floor(F*j),G===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set($*j,k*j).floor()},this.setDrawingBufferSize=function(A,F,G){$=A,k=F,j=G,t.width=Math.floor(A*G),t.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,F,G,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,F,G,W),fe.viewport(v.copy(oe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,F,G,W){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,F,G,W),fe.scissor(b.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){fe.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let z=!1;if(w!==null){let ae=w.texture.format;z=ae===mh||ae===ph||ae===dh}if(z){let ae=w.texture.type,ye=ae===Rn||ae===Hi||ae===dr||ae===gi||ae===hh||ae===uh,Te=ke.getClearColor(),Re=ke.getClearAlpha(),He=Te.r,Ve=Te.g,Le=Te.b;ye?(g[0]=He,g[1]=Ve,g[2]=Le,g[3]=Re,I.clearBufferuiv(I.COLOR,0,g)):(d[0]=He,d[1]=Ve,d[2]=Le,d[3]=Re,I.clearBufferiv(I.COLOR,0,d))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ge.dispose(),qe.dispose(),xe.dispose(),E.dispose(),V.dispose(),K.dispose(),Qe.dispose(),N.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",iu),X.removeEventListener("sessionend",su),Ci.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Ae.autoReset,F=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,z=_e.type;me(),Ae.autoReset=A,_e.enabled=F,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=z}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){let F=A.target;F.removeEventListener("dispose",je),yt(F)}function yt(A){Jt(A),xe.remove(A)}function Jt(A){let F=xe.get(A).programs;F!==void 0&&(F.forEach(function(G){Ee.releaseProgram(G)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,z,ae){F===null&&(F=Ne);let ye=z.isMesh&&z.matrixWorld.determinant()<0,Te=Ip(A,F,G,W,z);fe.setMaterial(W,ye);let Re=G.index,He=1;if(W.wireframe===!0){if(Re=te.getWireframeAttribute(G),Re===void 0)return;He=2}let Ve=G.drawRange,Le=G.attributes.position,st=Ve.start*He,ht=(Ve.start+Ve.count)*He;ae!==null&&(st=Math.max(st,ae.start*He),ht=Math.min(ht,(ae.start+ae.count)*He)),Re!==null?(st=Math.max(st,0),ht=Math.min(ht,Re.count)):Le!=null&&(st=Math.max(st,0),ht=Math.min(ht,Le.count));let gt=ht-st;if(gt<0||gt===1/0)return;Qe.setup(z,W,Te,G,Re);let an,nt=be;if(Re!==null&&(an=Z.get(Re),nt=Je,nt.setIndex(an)),z.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ee()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(z.isLine){let De=W.linewidth;De===void 0&&(De=1),fe.setLineWidth(De*ee()),z.isLineSegments?nt.setMode(I.LINES):z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else z.isPoints?nt.setMode(I.POINTS):z.isSprite&&nt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let De=z._multiDrawStarts,Ot=z._multiDrawCounts,it=z._multiDrawCount,Sn=Re?Z.get(Re).bytesPerElement:1,ss=xe.get(W).currentProgram.getUniforms();for(let ln=0;ln<it;ln++)ss.setValue(I,"_gl_DrawID",ln),nt.render(De[ln]/Sn,Ot[ln])}else if(z.isInstancedMesh)nt.renderInstances(st,gt,z.count);else if(G.isInstancedBufferGeometry){let De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ot=Math.min(G.instanceCount,De);nt.renderInstances(st,gt,Ot)}else nt.render(st,gt)};function tt(A,F,G){A.transparent===!0&&A.side===_t&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,Jr(A,F,G),A.side=mi,A.needsUpdate=!0,Jr(A,F,G),A.side=_t):Jr(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),m=qe.get(G),m.init(F),y.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==G&&A.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let W=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ae=z.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){let Te=ae[ye];tt(Te,G,z),W.add(Te)}else tt(ae,G,z),W.add(ae)}),y.pop(),m=null,W},this.compileAsync=function(A,F,G=null){let W=this.compile(A,F,G);return new Promise(z=>{function ae(){if(W.forEach(function(ye){xe.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){z(A);return}setTimeout(ae,10)}ce.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let jt=null;function Vn(A){jt&&jt(A)}function iu(){Ci.stop()}function su(){Ci.start()}let Ci=new zf;Ci.setAnimationLoop(Vn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){jt=A,X.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},X.addEventListener("sessionstart",iu),X.addEventListener("sessionend",su),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,w),m=qe.get(A,y.length),m.init(F),y.push(m),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(le),ie=this.localClippingEnabled,q=re.init(this.clippingPlanes,ie),_=ge.get(A,u.length),_.init(),u.push(_),X.enabled===!0&&X.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&$a(ae,F,-1/0,x.sortObjects)}$a(A,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(B,Y),Ye=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ye&&ke.addToRenderList(_,A),this.info.render.frame++,q===!0&&re.beginShadows();let G=m.state.shadowsArray;_e.render(G,A,F),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=_.opaque,z=_.transmissive;if(m.setupLights(),F.isArrayCamera){let ae=F.cameras;if(z.length>0)for(let ye=0,Te=ae.length;ye<Te;ye++){let Re=ae[ye];ou(W,z,A,Re)}Ye&&ke.render(A);for(let ye=0,Te=ae.length;ye<Te;ye++){let Re=ae[ye];ru(_,A,Re,Re.viewport)}}else z.length>0&&ou(W,z,A,F),Ye&&ke.render(A),ru(_,A,F);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,F),Qe.resetDefaultState(),C=-1,U=null,y.pop(),y.length>0?(m=y[y.length-1],q===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function $a(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){W&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let ye=K.update(A),Te=A.material;Te.visible&&_.push(A,ye,Te,G,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){let ye=K.update(A),Te=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Pe.copy(ye.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Te)){let Re=ye.groups;for(let He=0,Ve=Re.length;He<Ve;He++){let Le=Re[He],st=Te[Le.materialIndex];st&&st.visible&&_.push(A,ye,st,G,Pe.z,Le)}}else Te.visible&&_.push(A,ye,Te,G,Pe.z,null)}}let ae=A.children;for(let ye=0,Te=ae.length;ye<Te;ye++)$a(ae[ye],F,G,W)}function ru(A,F,G,W){let z=A.opaque,ae=A.transmissive,ye=A.transparent;m.setupLightsView(G),q===!0&&re.setGlobalState(x.clippingPlanes,G),W&&fe.viewport(v.copy(W)),z.length>0&&Kr(z,F,G),ae.length>0&&Kr(ae,F,G),ye.length>0&&Kr(ye,F,G),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function ou(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Gt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?yn:Rn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ae=m.state.transmissionRenderTarget[W.id],ye=W.viewport||v;ae.setSize(ye.z,ye.w);let Te=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(O),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&ke.render(G);let Re=x.toneMapping;x.toneMapping=di;let He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),q===!0&&re.setGlobalState(x.clippingPlanes,W),Kr(A,G,W),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Le=0,st=F.length;Le<st;Le++){let ht=F[Le],gt=ht.object,an=ht.geometry,nt=ht.material,De=ht.group;if(nt.side===_t&&gt.layers.test(W.layers)){let Ot=nt.side;nt.side=Qt,nt.needsUpdate=!0,au(gt,G,W,an,nt,De),nt.side=Ot,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}x.setRenderTarget(Te),x.setClearColor(O,H),He!==void 0&&(W.viewport=He),x.toneMapping=Re}function Kr(A,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ae=A.length;z<ae;z++){let ye=A[z],Te=ye.object,Re=ye.geometry,He=W===null?ye.material:W,Ve=ye.group;Te.layers.test(G.layers)&&au(Te,F,G,Re,He,Ve)}}function au(A,F,G,W,z,ae){A.onBeforeRender(x,F,G,W,z,ae),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,F,G,W,A,ae),z.transparent===!0&&z.side===_t&&z.forceSinglePass===!1?(z.side=Qt,z.needsUpdate=!0,x.renderBufferDirect(G,F,W,z,A,ae),z.side=mi,z.needsUpdate=!0,x.renderBufferDirect(G,F,W,z,A,ae),z.side=_t):x.renderBufferDirect(G,F,W,z,A,ae),A.onAfterRender(x,F,G,W,z,ae)}function Jr(A,F,G){F.isScene!==!0&&(F=Ne);let W=xe.get(A),z=m.state.lights,ae=m.state.shadowsArray,ye=z.state.version,Te=Ee.getParameters(A,z.state,ae,F,G),Re=Ee.getProgramCacheKey(Te),He=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",je),He=new Map,W.programs=He);let Ve=He.get(Re);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===ye)return cu(A,Te),Ve}else Te.uniforms=Ee.getUniforms(A),A.onBeforeCompile(Te,x),Ve=Ee.acquireProgram(Te,Re),He.set(Re,Ve),W.uniforms=Te.uniforms;let Le=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=re.uniform),cu(A,Te),W.needsLights=Dp(A),W.lightsStateVersion=ye,W.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function lu(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=ws.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function cu(A,F){let G=xe.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ip(A,F,G,W,z){F.isScene!==!0&&(F=Ne),P.resetTextureUnits();let ae=F.fog,ye=W.isMeshStandardMaterial?F.environment:null,Te=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yi,Re=(W.isMeshStandardMaterial?V:E).get(W.envMap||ye),He=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color,gt=di;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=x.toneMapping);let an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=an!==void 0?an.length:0,De=xe.get(W),Ot=m.state.lights;if(q===!0&&(ie===!0||A!==U)){let pn=A===U&&W.id===C;re.setState(W,A,pn)}let it=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ot.state.version||De.outputColorSpace!==Te||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Re||W.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==Ve||De.morphTargets!==Le||De.morphNormals!==st||De.morphColors!==ht||De.toneMapping!==gt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=W.version);let Sn=De.currentProgram;it===!0&&(Sn=Jr(W,F,z));let ss=!1,ln=!1,Za=!1,vt=Sn.getUniforms(),ri=De.uniforms;if(fe.useProgram(Sn.program)&&(ss=!0,ln=!0,Za=!0),W.id!==C&&(C=W.id,ln=!0),ss||U!==A){se.reverseDepthBuffer?(Me.copy(A.projectionMatrix),P0(Me),I0(Me),vt.setValue(I,"projectionMatrix",Me)):vt.setValue(I,"projectionMatrix",A.projectionMatrix),vt.setValue(I,"viewMatrix",A.matrixWorldInverse);let pn=vt.map.cameraPosition;pn!==void 0&&pn.setValue(I,Ie.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,ln=!0,Za=!0)}if(z.isSkinnedMesh){vt.setOptional(I,z,"bindMatrix"),vt.setOptional(I,z,"bindMatrixInverse");let pn=z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),vt.setValue(I,"boneTexture",pn.boneTexture,P))}z.isBatchedMesh&&(vt.setOptional(I,z,"batchingTexture"),vt.setValue(I,"batchingTexture",z._matricesTexture,P),vt.setOptional(I,z,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",z._indirectTexture,P),vt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",z._colorsTexture,P));let Ka=G.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0)&&Be.update(z,G,Sn),(ln||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,vt.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ri.envMap.value=Re,ri.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),ln&&(vt.setValue(I,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Lp(ri,Za),ae&&W.fog===!0&&de.refreshFogUniforms(ri,ae),de.refreshMaterialUniforms(ri,W,j,k,m.state.transmissionRenderTarget[A.id]),ws.upload(I,lu(De),ri,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ws.upload(I,lu(De),ri,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(I,"center",z.center),vt.setValue(I,"modelViewMatrix",z.modelViewMatrix),vt.setValue(I,"normalMatrix",z.normalMatrix),vt.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pn=W.uniformsGroups;for(let Ja=0,Up=pn.length;Ja<Up;Ja++){let hu=pn[Ja];N.update(hu,Sn),N.bind(hu,Sn)}}return Sn}function Lp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Dp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,F,G){xe.get(A.texture).__webglTexture=F,xe.get(A.depthTexture).__webglTexture=G;let W=xe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){let G=xe.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){w=A,R=F,T=G;let W=!0,z=null,ae=!1,ye=!1;if(A){let Re=xe.get(A);if(Re.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Re.__hasExternalTextures)P.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&xe.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);let Ve=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?z=Ve[F][G]:z=Ve[F],ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?z=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[G]:z=Ve,v.copy(A.viewport),b.copy(A.scissor),D=A.scissorTest}else v.copy(oe).multiplyScalar(j).floor(),b.copy(he).multiplyScalar(j).floor(),D=Fe;if(fe.bindFramebuffer(I.FRAMEBUFFER,z)&&W&&fe.drawBuffers(A,z),fe.viewport(v),fe.scissor(b),fe.setScissorTest(D),ae){let Re=xe.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,G)}else if(ye){let Re=xe.get(A.texture),He=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,He)}C=-1},this.readRenderTargetPixels=function(A,F,G,W,z,ae,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){fe.bindFramebuffer(I.FRAMEBUFFER,Te);try{let Re=A.texture,He=Re.format,Ve=Re.type;if(!se.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-z&&I.readPixels(F,G,W,z,We.convert(He),We.convert(Ve),ae)}finally{let Re=w!==null?xe.get(w).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,z,ae,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){let Re=A.texture,He=Re.format,Ve=Re.type;if(!se.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-z){fe.bindFramebuffer(I.FRAMEBUFFER,Te);let Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(F,G,W,z,We.convert(He),We.convert(Ve),0);let st=w!==null?xe.get(w).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,st);let ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await C0(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Le),I.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(A.image.width*W),ae=Math.floor(A.image.height*W),ye=F!==null?F.x:0,Te=F!==null?F.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ye,Te,z,ae),fe.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,W=null,z=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let ae,ye,Te,Re,He,Ve;G!==null?(ae=G.max.x-G.min.x,ye=G.max.y-G.min.y,Te=G.min.x,Re=G.min.y):(ae=A.image.width,ye=A.image.height,Te=0,Re=0),W!==null?(He=W.x,Ve=W.y):(He=0,Ve=0);let Le=We.convert(F.format),st=We.convert(F.type);P.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let ht=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),nt=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES),Ot=A.isCompressedTexture?A.mipmaps[z]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,He,Ve,ae,ye,Le,st,Ot.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,He,Ve,Ot.width,Ot.height,Le,Ot.data):I.texSubImage2D(I.TEXTURE_2D,z,He,Ve,ae,ye,Le,st,Ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,z=0){A.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],z=arguments[4]||0);let ae,ye,Te,Re,He,Ve,Le,st,ht,gt=A.isCompressedTexture?A.mipmaps[z]:A.image;G!==null?(ae=G.max.x-G.min.x,ye=G.max.y-G.min.y,Te=G.max.z-G.min.z,Re=G.min.x,He=G.min.y,Ve=G.min.z):(ae=gt.width,ye=gt.height,Te=gt.depth,Re=0,He=0,Ve=0),W!==null?(Le=W.x,st=W.y,ht=W.z):(Le=0,st=0,ht=0);let an=We.convert(F.format),nt=We.convert(F.type),De;if(F.isData3DTexture)P.setTexture3D(F,0),De=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)P.setTexture2DArray(F,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Ot=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),ss=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(De,z,Le,st,ht,ae,ye,Te,an,nt,gt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(De,z,Le,st,ht,ae,ye,Te,an,gt.data):I.texSubImage3D(De,z,Le,st,ht,ae,ye,Te,an,nt,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ss),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),z===0&&F.generateMipmaps&&I.generateMipmap(De),fe.unbindTexture()},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,fe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_h?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===_a?"display-p3":"srgb"}},qo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$o=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vi=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ft,h=Ft,f,p){super(null,o,a,l,c,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_r=class extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new Ke,cf=new Ke,yo=[],hf=new Jn,T_=new Ke,nr=new Ge,ir=new xi,Ns=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,T_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),hf.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),ir.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),cf.multiplyMatrices(n,vs),nr.matrixWorld=cf,nr.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){let l=yo[o];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,fh,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},xr=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zo=new L,Ko=new L,uf=new Ke,sr=new Ps,Mo=new xi,Al=new L,ff=new L,vr=class extends Dt{constructor(e=new At,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Ko);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;uf.copy(s).invert(),sr.copy(e.ray).applyMatrix4(uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=g,m=d-1;_<m;_+=c){let u=h.getX(_),y=h.getX(_+1),x=So(this,e,sr,l,u,y);x&&t.push(x)}if(this.isLineLoop){let _=h.getX(d-1),m=h.getX(g),u=So(this,e,sr,l,_,m);u&&t.push(u)}}else{let g=Math.max(0,o.start),d=Math.min(p.count,o.start+o.count);for(let _=g,m=d-1;_<m;_+=c){let u=So(this,e,sr,l,_,_+1);u&&t.push(u)}if(this.isLineLoop){let _=So(this,e,sr,l,d-1,g);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};_n=class extends qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,l=new Ke;for(let g=0;g<=e;g++){let d=g/e;s[g]=this.getTangentAt(d,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(Tt(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,d))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Tt(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],g*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*f+this.aX,c=p*f+g*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends yr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};bo=new L,Rl=new yh,Cl=new yh,Pl=new yh,Uc=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(f),g),_=Math.pow(f.distanceToSquared(p),g),m=Math.pow(p.distanceToSquared(h),g);_<1e-4&&(_=1),d<1e-4&&(d=_),m<1e-4&&(m=_),Rl.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,d,_,m),Cl.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,d,_,m),Pl.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,d,_,m)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),Cl.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Pl.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return n.set(Rl.calc(l),Cl.calc(l),Pl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Jo=class extends xn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends xn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y),ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends xn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends xn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends xn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y),hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(df(a,l.x,c.x,h.x,f.x),df(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},zc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Uc,CubicBezierCurve:Jo,CubicBezierCurve3:Nc,EllipseCurve:yr,LineCurve:jo,LineCurve3:Oc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Fc,SplineCurve:ea}),kc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zc[s.type]().fromJSON(s))}return this}},ta=class extends kc{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qo(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Jo(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ea(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new yr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qn=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],g=[],d=0,_=[],m=n/2,u=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(g,2));function y(){let M=new L,R=new L,T=0,w=(t-e)/n;for(let C=0;C<=r;C++){let U=[],v=C/r,b=v*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,H=O*l+a,$=Math.sin(H),k=Math.cos(H);R.x=b*$,R.y=-v*n+m,R.z=b*k,f.push(R.x,R.y,R.z),M.set($,w,k).normalize(),p.push(M.x,M.y,M.z),g.push(O,1-v),U.push(d++)}_.push(U)}for(let C=0;C<s;C++)for(let U=0;U<r;U++){let v=_[U][C],b=_[U+1][C],D=_[U+1][C+1],O=_[U][C+1];e>0&&(h.push(v,b,O),T+=3),t>0&&(h.push(b,D,O),T+=3)}c.addGroup(u,T,0),u+=T}function x(M){let R=d,T=new ne,w=new L,C=0,U=M===!0?e:t,v=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*v,0),p.push(0,v,0),g.push(.5,.5),d++;let b=d;for(let D=0;D<=s;D++){let H=D/s*l+a,$=Math.cos(H),k=Math.sin(H);w.x=U*k,w.y=m*v,w.z=U*$,f.push(w.x,w.y,w.z),p.push(0,v,0),T.x=$*.5+.5,T.y=k*.5*v+.5,g.push(T.x,T.y),d++}for(let D=0;D<s;D++){let O=R+D,H=b+D;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),C+=3}c.addGroup(u,C,M===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bc=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new L,M=new L,R=new L;for(let T=0;T<t.length;T+=3)g(t[T+0],x),g(t[T+1],M),g(t[T+2],R),l(x,M,R,y)}function l(y,x,M,R){let T=R+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let U=y.clone().lerp(M,C/T),v=x.clone().lerp(M,C/T),b=T-C;for(let D=0;D<=b;D++)D===0&&C===T?w[C][D]=U:w[C][D]=U.clone().lerp(v,D/b)}for(let C=0;C<T;C++)for(let U=0;U<2*(T-C)-1;U++){let v=Math.floor(U/2);U%2===0?(p(w[C][v+1]),p(w[C+1][v]),p(w[C][v])):(p(w[C][v+1]),p(w[C+1][v+1]),p(w[C+1][v]))}}function c(y){let x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,R=u(y)/Math.PI+.5;o.push(M,1-R)}d(),f()}function f(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],R=o[y+4],T=Math.max(x,M,R),w=Math.min(x,M,R);T>.9&&w<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function g(y,x){let M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function d(){let y=new L,x=new L,M=new L,R=new L,T=new ne,w=new ne,C=new ne;for(let U=0,v=0;U<r.length;U+=9,v+=6){y.set(r[U+0],r[U+1],r[U+2]),x.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),T.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),R.copy(y).add(x).add(M).divideScalar(3);let b=m(R);_(T,v+0,y,b),_(w,v+2,x,b),_(C,v+4,M,b)}}function _(y,x,M,R){R<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},en=class extends ta{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ta().fromJSON(s))}return this}},D_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,g;if(n&&(r=z_(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let d=t;d<s;d+=t)f=i[d],p=i[d+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return Mr(r,o,t,a,l,g,0),o}};pi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mf(e),gf(n,e);let o=e.length;t.forEach(mf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gf(n,t[l]);let a=D_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Wi=class i extends At{constructor(e=new en([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:g-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:K_,x,M=!1,R,T,w,C;u&&(x=u.getSpacedPoints(h),M=!0,p=!1,R=u.computeFrenetFrames(h,!1),T=new L,w=new L,C=new L),p||(m=0,g=0,d=0,_=0);let U=a.extractPoints(c),v=U.shape,b=U.holes;if(!pi.isClockWise(v)){v=v.reverse();for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];pi.isClockWise(ue)&&(b[ee]=ue.reverse())}}let O=pi.triangulateShape(v,b),H=v;for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];v=v.concat(ue)}function $(ee,I,ue){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(I,ue)}let k=v.length,j=O.length;function B(ee,I,ue){let ce,se,fe,Ae=ee.x-I.x,xe=ee.y-I.y,P=ue.x-ee.x,E=ue.y-ee.y,V=Ae*Ae+xe*xe,Z=Ae*E-xe*P;if(Math.abs(Z)>Number.EPSILON){let te=Math.sqrt(V),K=Math.sqrt(P*P+E*E),Ee=I.x-xe/te,de=I.y+Ae/te,ge=ue.x-E/K,qe=ue.y+P/K,re=((ge-Ee)*E-(qe-de)*P)/(Ae*E-xe*P);ce=Ee+Ae*re-ee.x,se=de+xe*re-ee.y;let _e=ce*ce+se*se;if(_e<=2)return new ne(ce,se);fe=Math.sqrt(_e/2)}else{let te=!1;Ae>Number.EPSILON?P>Number.EPSILON&&(te=!0):Ae<-Number.EPSILON?P<-Number.EPSILON&&(te=!0):Math.sign(xe)===Math.sign(E)&&(te=!0),te?(ce=-xe,se=Ae,fe=Math.sqrt(V)):(ce=Ae,se=xe,fe=Math.sqrt(V/2))}return new ne(ce/fe,se/fe)}let Y=[];for(let ee=0,I=H.length,ue=I-1,ce=ee+1;ee<I;ee++,ue++,ce++)ue===I&&(ue=0),ce===I&&(ce=0),Y[ee]=B(H[ee],H[ue],H[ce]);let oe=[],he,Fe=Y.concat();for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];he=[];for(let ce=0,se=ue.length,fe=se-1,Ae=ce+1;ce<se;ce++,fe++,Ae++)fe===se&&(fe=0),Ae===se&&(Ae=0),he[ce]=B(ue[ce],ue[fe],ue[Ae]);oe.push(he),Fe=Fe.concat(he)}for(let ee=0;ee<m;ee++){let I=ee/m,ue=g*Math.cos(I*Math.PI/2),ce=d*Math.sin(I*Math.PI/2)+_;for(let se=0,fe=H.length;se<fe;se++){let Ae=$(H[se],Y[se],ce);le(Ae.x,Ae.y,-ue)}for(let se=0,fe=b.length;se<fe;se++){let Ae=b[se];he=oe[se];for(let xe=0,P=Ae.length;xe<P;xe++){let E=$(Ae[xe],he[xe],ce);le(E.x,E.y,-ue)}}}let Xe=d+_;for(let ee=0;ee<k;ee++){let I=p?$(v[ee],Fe[ee],Xe):v[ee];M?(w.copy(R.normals[0]).multiplyScalar(I.x),T.copy(R.binormals[0]).multiplyScalar(I.y),C.copy(x[0]).add(w).add(T),le(C.x,C.y,C.z)):le(I.x,I.y,0)}for(let ee=1;ee<=h;ee++)for(let I=0;I<k;I++){let ue=p?$(v[I],Fe[I],Xe):v[I];M?(w.copy(R.normals[ee]).multiplyScalar(ue.x),T.copy(R.binormals[ee]).multiplyScalar(ue.y),C.copy(x[ee]).add(w).add(T),le(C.x,C.y,C.z)):le(ue.x,ue.y,f/h*ee)}for(let ee=m-1;ee>=0;ee--){let I=ee/m,ue=g*Math.cos(I*Math.PI/2),ce=d*Math.sin(I*Math.PI/2)+_;for(let se=0,fe=H.length;se<fe;se++){let Ae=$(H[se],Y[se],ce);le(Ae.x,Ae.y,f+ue)}for(let se=0,fe=b.length;se<fe;se++){let Ae=b[se];he=oe[se];for(let xe=0,P=Ae.length;xe<P;xe++){let E=$(Ae[xe],he[xe],ce);M?le(E.x,E.y+x[h-1].y,x[h-1].x+ue):le(E.x,E.y,f+ue)}}}q(),ie();function q(){let ee=s.length/3;if(p){let I=0,ue=k*I;for(let ce=0;ce<j;ce++){let se=O[ce];Ie(se[2]+ue,se[1]+ue,se[0]+ue)}I=h+m*2,ue=k*I;for(let ce=0;ce<j;ce++){let se=O[ce];Ie(se[0]+ue,se[1]+ue,se[2]+ue)}}else{for(let I=0;I<j;I++){let ue=O[I];Ie(ue[2],ue[1],ue[0])}for(let I=0;I<j;I++){let ue=O[I];Ie(ue[0]+k*h,ue[1]+k*h,ue[2]+k*h)}}n.addGroup(ee,s.length/3-ee,0)}function ie(){let ee=s.length/3,I=0;Me(H,I),I+=H.length;for(let ue=0,ce=b.length;ue<ce;ue++){let se=b[ue];Me(se,I),I+=se.length}n.addGroup(ee,s.length/3-ee,1)}function Me(ee,I){let ue=ee.length;for(;--ue>=0;){let ce=ue,se=ue-1;se<0&&(se=ee.length-1);for(let fe=0,Ae=h+m*2;fe<Ae;fe++){let xe=k*fe,P=k*(fe+1),E=I+ce+xe,V=I+se+xe,Z=I+se+P,te=I+ce+P;Pe(E,V,Z,te)}}}function le(ee,I,ue){l.push(ee),l.push(I),l.push(ue)}function Ie(ee,I,ue){Ne(ee),Ne(I),Ne(ue);let ce=s.length/3,se=y.generateTopUV(n,s,ce-3,ce-2,ce-1);Ye(se[0]),Ye(se[1]),Ye(se[2])}function Pe(ee,I,ue,ce){Ne(ee),Ne(I),Ne(ce),Ne(I),Ne(ue),Ne(ce);let se=s.length/3,fe=y.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);Ye(fe[0]),Ye(fe[1]),Ye(fe[3]),Ye(fe[1]),Ye(fe[2]),Ye(fe[3])}function Ne(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Ye(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zc[s.type]().fromJSON(s)),new i(n,e.options)}},K_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],p=e[s*3],g=e[s*3+1],d=e[s*3+2],_=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-f),new ne(p,1-d),new ne(_,1-u)]:[new ne(a,1-l),new ne(h,1-f),new ne(g,1-d),new ne(m,1-u)]}};na=class i extends Bc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vi=class i extends At{constructor(e=new en([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(o,2));function c(h){let f=s.length/3,p=h.extractPoints(t),g=p.shape,d=p.holes;pi.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,u=d.length;m<u;m++){let y=d[m];pi.isClockWise(y)===!0&&(d[m]=y.reverse())}let _=pi.triangulateShape(g,d);for(let m=0,u=d.length;m<u;m++){let y=d[m];g=g.concat(y)}for(let m=0,u=g.length;m<u;m++){let y=g[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,u=_.length;m<u;m++){let y=_[m],x=y[0]+f,M=y[1]+f,R=y[2]+f;n.push(x,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};ia=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,f=new L,p=new L;for(let g=0;g<=n;g++)for(let d=0;d<=s;d++){let _=d/s*r,m=g/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(d/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let d=1;d<=s;d++){let _=(s+1)*g+d-1,m=(s+1)*(g-1)+d-1,u=(s+1)*(g-1)+d,y=(s+1)*g+d;o.push(_,m,y),o.push(m,u,y)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},sa=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ra=class extends jn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends Os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gu:r=e,a=2*t-n;break;case _u:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:o=e,l=2*n-t;break;case _u:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,d=(n-t)/(s-t),_=d*d,m=_*d,u=-p*m+2*p*_-p*d,y=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*d+1,x=(-1-g)*m+(1.5+g)*_+.5*d,M=g*m-g*_;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+y*o[c+R]+x*o[l+R]+M*o[f+R];return r}},Wc=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},Xc=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case gc:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,p=f-n,g=f+n;for(let d=0;d!==n;++d){let _=t[f+d];if(_!==t[p+d]||_!==t[g+d]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let g=0;g!==n;++g)t[p+g]=t[f+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=gc;Xi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Do;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;Yc=class extends Cn{};Yc.prototype.ValueTypeName="color";qc=class extends Cn{};qc.prototype.ValueTypeName="number";$c=class extends Os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}},oa=class extends Cn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;Yi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Do;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Zc=class extends Cn{};Zc.prototype.ValueTypeName="vector";_f={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let g=c[f],d=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return d}return null}}},ex=new Kc,Er=class{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";Jc=class extends Er{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_f.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=mr("img");function l(){h(),_f.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},aa=class extends Er{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new Jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Tr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},la=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Il=new Ke,xf=new L,vf=new L,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yf=new Ke,rr=new L,Ll=new L,jc=class extends ca{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),Ll.copy(n.position),Ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ll),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}},ha=class extends Tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qc=class extends ca{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Mf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Mh="\\[\\]\\.:\\/",tx=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",nx="[^"+Mh.replace("\\.","")+"]",ix=/((?:WC+[\/:])*)/.source.replace("WC",Sh),sx=/(WCOD+)?/.source.replace("WCOD",nx),rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),ax=new RegExp("^"+ix+sx+rx+ox+"$"),lx=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(e){let t=ax.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=eh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Mv=new Float32Array(1),wr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},da=class extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th)});function hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($f),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Eh)}function px(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mx(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(Eh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($f))}function gx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function _x(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Eh)}function xx(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function vx(i){this.enabled!==!1&&i.preventDefault()}function yx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yf,Eh,$f,ya,qf,cx,It,tn,lt,bh,Ma,Zf=rt(()=>{Pt();Yf={type:"change"},Eh={type:"start"},$f={type:"end"},ya=new Ps,qf=new wn,cx=Math.cos(70*Pn.DEG2RAD),It=new L,tn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,Ma=class extends da{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new $t,this._lastTargetPosition=new L,this._quat=new $t().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wr,this._sphericalDelta=new wr,this._scale=1,this._panOffset=new L,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new L,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=vx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=xx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=yx.bind(this),this._interceptControlUp=Mx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yf),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=It.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ya.origin.copy(this.object.position),ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ya.direction))<cx?this.object.lookAt(this.target):(qf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ya.intersectPlane(qf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Yf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var Sa,Bs,Kf,Jf,jf,Qf,ba,ed=rt(()=>{Pt();Sa=class extends Dt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ne(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},Bs=new L,Kf=new Ke,Jf=new Ke,jf=new L,Qf=new L,ba=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(d,_){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Kf.copy(_.matrixWorldInverse),Jf.multiplyMatrices(_.projectionMatrix,Kf),h(d,d,_),g(d)},this.setSize=function(d,_){n=d,s=_,r=n/2,o=s/2,l.style.width=d+"px",l.style.height=_+"px"};function c(d){d.isCSS2DObject&&(d.element.style.display="none");for(let _=0,m=d.children.length;_<m;_++)c(d.children[_])}function h(d,_,m){if(d.visible===!1){c(d);return}if(d.isCSS2DObject){Bs.setFromMatrixPosition(d.matrixWorld),Bs.applyMatrix4(Jf);let u=Bs.z>=-1&&Bs.z<=1&&d.layers.test(m.layers)===!0,y=d.element;y.style.display=u===!0?"":"none",u===!0&&(d.onBeforeRender(t,_,m),y.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Bs.x*r+r)+"px,"+(-Bs.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),d.onAfterRender(t,_,m));let x={distanceToCameraSquared:f(m,d)};a.objects.set(d,x)}for(let u=0,y=d.children.length;u<y;u++)h(d.children[u],_,m)}function f(d,_){return jf.setFromMatrixPosition(d.matrixWorld),Qf.setFromMatrixPosition(_.matrixWorld),jf.distanceToSquared(Qf)}function p(d){let _=[];return d.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function g(d){let _=p(d).sort(function(u,y){if(u.renderOrder!==y.renderOrder)return y.renderOrder-u.renderOrder;let x=a.objects.get(u).distanceToCameraSquared,M=a.objects.get(y).distanceToCameraSquared;return x-M}),m=_.length;for(let u=0,y=_.length;u<y;u++)_[u].element.style.zIndex=m-u}}}});function Mn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Rr.copy(e),Rr[n]=0,Rr.normalize();let c=.5*o/(o+a),h=1-Rr.angleTo(i)/l;return Math.sign(Rr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Rr,Ea,td=rt(()=>{Pt();Rr=new L;Ea=class extends Ut{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,d=new L,_=.5/s;for(let m=0,u=0;m<h.length;m+=3,u+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:d.set(1,0,0),p[u+0]=Mn(d,l,"z","y",r,n),p[u+1]=1-Mn(d,l,"y","z",r,t);break;case 1:d.set(-1,0,0),p[u+0]=1-Mn(d,l,"z","y",r,n),p[u+1]=1-Mn(d,l,"y","z",r,t);break;case 2:d.set(0,1,0),p[u+0]=1-Mn(d,l,"x","z",r,e),p[u+1]=Mn(d,l,"z","x",r,n);break;case 3:d.set(0,-1,0),p[u+0]=1-Mn(d,l,"x","z",r,e),p[u+1]=1-Mn(d,l,"z","x",r,n);break;case 4:d.set(0,0,1),p[u+0]=1-Mn(d,l,"x","y",r,e),p[u+1]=1-Mn(d,l,"y","x",r,t);break;case 5:d.set(0,0,-1),p[u+0]=Mn(d,l,"x","y",r,e),p[u+1]=1-Mn(d,l,"y","x",r,t);break}}}});var Hs,Th=rt(()=>{Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var dn,Sx,wh,bx,Mi,Vs=rt(()=>{Pt();dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sx=new Ls(-1,1,1,-1,0,1),wh=class extends At{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},bx=new wh,Mi=class{constructor(e){this._mesh=new Ge(bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Ta,nd=rt(()=>{Pt();Vs();Ta=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=In.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Cr,wa,Ah=rt(()=>{Vs();Cr=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wa=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Aa,id=rt(()=>{Pt();Th();nd();Ah();Ah();Aa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ta(Hs),this.copyPass.material.blending=wt,this.clock=new fa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cr!==void 0&&(o instanceof Cr?n=!0:o instanceof wa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Ra,sd=rt(()=>{Pt();Vs();Ra=class extends dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});function rd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ex(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Vi(s,e,e);return r.wrapS=St,r.wrapT=St,r.needsUpdate=!0,r}function Ex(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Pr,Ir,Ca,od=rt(()=>{Pt();Pr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ir={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ca={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`}});function Rh(i,e,t){let n=Tx(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Tx(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var Lr,ad=rt(()=>{Pt();Lr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Rh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`}});var Pa,ld=rt(()=>{Pa=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,p=l-f,g=c-f,d=e-p,_=t-g,m,u;d>_?(m=1,u=0):(m=0,u=1);let y=d-m+h,x=_-u+h,M=d-1+2*h,R=_-1+2*h,T=l&255,w=c&255,C=this.perm[T+this.perm[w]]%12,U=this.perm[T+m+this.perm[w+u]]%12,v=this.perm[T+1+this.perm[w+1]]%12,b=.5-d*d-_*_;b<0?n=0:(b*=b,n=b*b*this.dot(this.grad3[C],d,_));let D=.5-y*y-x*x;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[U],y,x));let O=.5-M*M-R*R;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[v],M,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),p=Math.floor(n+c),g=1/6,d=(h+f+p)*g,_=h-d,m=f-d,u=p-d,y=e-_,x=t-m,M=n-u,R,T,w,C,U,v;y>=x?x>=M?(R=1,T=0,w=0,C=1,U=1,v=0):y>=M?(R=1,T=0,w=0,C=1,U=0,v=1):(R=0,T=0,w=1,C=1,U=0,v=1):x<M?(R=0,T=0,w=1,C=0,U=1,v=1):y<M?(R=0,T=1,w=0,C=0,U=1,v=1):(R=0,T=1,w=0,C=1,U=1,v=0);let b=y-R+g,D=x-T+g,O=M-w+g,H=y-C+2*g,$=x-U+2*g,k=M-v+2*g,j=y-1+3*g,B=x-1+3*g,Y=M-1+3*g,oe=h&255,he=f&255,Fe=p&255,Xe=this.perm[oe+this.perm[he+this.perm[Fe]]]%12,q=this.perm[oe+R+this.perm[he+T+this.perm[Fe+w]]]%12,ie=this.perm[oe+C+this.perm[he+U+this.perm[Fe+v]]]%12,Me=this.perm[oe+1+this.perm[he+1+this.perm[Fe+1]]]%12,le=.6-y*y-x*x-M*M;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[Xe],y,x,M));let Ie=.6-b*b-D*D-O*O;Ie<0?r=0:(Ie*=Ie,r=Ie*Ie*this.dot3(this.grad3[q],b,D,O));let Pe=.6-H*H-$*$-k*k;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[ie],H,$,k));let Ne=.6-j*j-B*B-Y*Y;return Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this.dot3(this.grad3[Me],j,B,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,p,g,d,_=(e+t+n+s)*l,m=Math.floor(e+_),u=Math.floor(t+_),y=Math.floor(n+_),x=Math.floor(s+_),M=(m+u+y+x)*c,R=m-M,T=u-M,w=y-M,C=x-M,U=e-R,v=t-T,b=n-w,D=s-C,O=U>v?32:0,H=U>b?16:0,$=v>b?8:0,k=U>D?4:0,j=v>D?2:0,B=b>D?1:0,Y=O+H+$+k+j+B,oe=o[Y][0]>=3?1:0,he=o[Y][1]>=3?1:0,Fe=o[Y][2]>=3?1:0,Xe=o[Y][3]>=3?1:0,q=o[Y][0]>=2?1:0,ie=o[Y][1]>=2?1:0,Me=o[Y][2]>=2?1:0,le=o[Y][3]>=2?1:0,Ie=o[Y][0]>=1?1:0,Pe=o[Y][1]>=1?1:0,Ne=o[Y][2]>=1?1:0,Ye=o[Y][3]>=1?1:0,ee=U-oe+c,I=v-he+c,ue=b-Fe+c,ce=D-Xe+c,se=U-q+2*c,fe=v-ie+2*c,Ae=b-Me+2*c,xe=D-le+2*c,P=U-Ie+3*c,E=v-Pe+3*c,V=b-Ne+3*c,Z=D-Ye+3*c,te=U-1+4*c,K=v-1+4*c,Ee=b-1+4*c,de=D-1+4*c,ge=m&255,qe=u&255,re=y&255,_e=x&255,ke=a[ge+a[qe+a[re+a[_e]]]]%32,Be=a[ge+oe+a[qe+he+a[re+Fe+a[_e+Xe]]]]%32,be=a[ge+q+a[qe+ie+a[re+Me+a[_e+le]]]]%32,Je=a[ge+Ie+a[qe+Pe+a[re+Ne+a[_e+Ye]]]]%32,We=a[ge+1+a[qe+1+a[re+1+a[_e+1]]]]%32,Qe=.6-U*U-v*v-b*b-D*D;Qe<0?h=0:(Qe*=Qe,h=Qe*Qe*this.dot4(r[ke],U,v,b,D));let N=.6-ee*ee-I*I-ue*ue-ce*ce;N<0?f=0:(N*=N,f=N*N*this.dot4(r[Be],ee,I,ue,ce));let me=.6-se*se-fe*fe-Ae*Ae-xe*xe;me<0?p=0:(me*=me,p=me*me*this.dot4(r[be],se,fe,Ae,xe));let X=.6-P*P-E*E-V*V-Z*Z;X<0?g=0:(X*=X,g=X*X*this.dot4(r[Je],P,E,V,Z));let Q=.6-te*te-K*K-Ee*Ee-de*de;return Q<0?d=0:(Q*=Q,d=Q*Q*this.dot4(r[We],te,K,Ee,de)),27*(h+f+p+g+d)}}});var Dr,cd=rt(()=>{Pt();Vs();od();ad();Th();ld();Dr=class i extends dn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=rd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:yn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},Pr.defines),uniforms:In.clone(Pr.uniforms),vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,blending:wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ra,this.normalMaterial.blending=wt,this.pdMaterial=new bt({defines:Object.assign({},Lr.defines),uniforms:In.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Ir.defines),uniforms:In.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,blending:wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:In.clone(Hs.uniforms),vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ma,blendDst:Fs,blendEquation:gn,blendSrcAlpha:pa,blendDstAlpha:Fs,blendEquationAlpha:gn}),this.blendMaterial=new bt({uniforms:In.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ih,blendSrc:ma,blendDst:Fs,blendEquation:gn,blendSrcAlpha:pa,blendDstAlpha:Fs,blendEquationAlpha:gn}),this.fsQuad=new Mi(null),this.originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Us,this.depthTexture.format=_i,this.depthTexture.type=gi,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:Ft,magFilter:Ft,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Rh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Pa,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Vi(s,e,e,un,Rn);return r.wrapS=St,r.wrapT=St,r.needsUpdate=!0,r}};Dr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});var hd,ud=rt(()=>{hd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var Ia,fd=rt(()=>{Pt();Vs();ud();Ia=class extends dn{constructor(){super();let e=hd;this.uniforms=In.clone(e.uniforms),this.material=new sa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});function Si(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function bi(i,e,t=!0){let n=new _n(i);return t&&(n.colorSpace=pt),e&&(n.wrapS=n.wrapT=St,n.repeat.set(e[0],e[1])),n.anisotropy=8,n}function Ch(i){ei=i?11:5;let e=2048,t=1024,[n,s]=Si(e,t),r=s.createLinearGradient(0,0,0,t/2);i?(r.addColorStop(0,"#0b1630"),r.addColorStop(.55,"#27386a"),r.addColorStop(.85,"#b9705a"),r.addColorStop(1,"#eaa46a")):(r.addColorStop(0,"#2a66b8"),r.addColorStop(.45,"#4f8fd8"),r.addColorStop(.82,"#9cc4ea"),r.addColorStop(1,"#cfe1ef")),s.fillStyle=r,s.fillRect(0,0,e,t/2);let o=()=>(Ue()+Ue()+Ue()-1.5)/1.5;for(let c=0;c<(i?12:22);c++){let h=Ue()*e,f=t*(.14+Ue()*.26),p=(.6+Ue()*.8)*(.5+f/t*1.6),g=(160+Ue()*200)*p,d=(30+Ue()*25)*p;for(let _=0;_<160;_++){let m=h+o()*g,u=o()*d,y=f+Math.min(u,d*.35),x=(8+Ue()*26)*p*(1-Math.abs(m-h)/g*.5);if(x<=1)continue;let M=y>f+d*.1,R=i?"255,190,160":M?"226,232,240":"255,255,255",T=s.createRadialGradient(m,y,0,m,y,x);T.addColorStop(0,`rgba(${R},${i?.1:.2})`),T.addColorStop(.6,`rgba(${R},${i?.05:.1})`),T.addColorStop(1,`rgba(${R},0)`),s.fillStyle=T,s.fillRect(m-x,y-x,x*2,x*2)}}if(!i){let c=s.createRadialGradient(e*.62,t*.22,0,e*.62,t*.22,90);c.addColorStop(0,"rgba(255,252,235,1)"),c.addColorStop(1,"rgba(255,252,235,0)"),s.fillStyle=c,s.fillRect(e*.62-90,t*.22-90,180,180)}let a=s.createLinearGradient(0,t/2,0,t);a.addColorStop(0,i?"#7d6460":"#cfe1ef"),a.addColorStop(.08,i?"#22241f":"#8e9586"),a.addColorStop(1,i?"#181a16":"#7b8274"),s.fillStyle=a,s.fillRect(0,t/2,e,t/2);let l=bi(n);return l.mapping=fr,l}function dd(){ei=3;let[i,e]=Si(1024,1024);e.fillStyle="#4c6f33",e.fillRect(0,0,1024,1024);for(let a=0;a<6e4;a++){let l=Ue()*1024,c=Ue()*1024,h=4+Ue()*9,f=(Ue()-.5)*.7;e.strokeStyle=`hsl(${72+Ue()*34},${26+Ue()*22}%,${18+Ue()*24}%)`,e.lineWidth=1+Ue(),e.beginPath(),e.moveTo(l,c),e.lineTo(l+Math.sin(f)*h,c-Math.cos(f)*h),e.stroke()}let t=bi(i,[200,200]),n=new zn(700,700,140,140),s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++){let l=n.attributes.position.getX(a),c=n.attributes.position.getY(a),h=.84+.13*Math.sin(l*.23+Math.cos(c*.17)*2)+.06*Math.sin(c*.41+l*.07)+(Ue()-.5)*.05;r[a*3]=h*.97,r[a*3+1]=h,r[a*3+2]=h*.9}n.setAttribute("color",new zt(r,3));let o=new Ge(n,new Oe({map:t,vertexColors:!0,roughness:1}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function pd(){ei=21;let i=4,e=256,[t,n]=Si(i*e,i*e),[s,r]=Si(i*e,i*e);r.fillStyle="#d8d8d8",r.fillRect(0,0,i*e,i*e);for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=66+Ue()*7,c=o*e,h=a*e,f=n.createLinearGradient(c,h,c+e,h+e);f.addColorStop(0,`hsl(38,7%,${l+2}%)`),f.addColorStop(1,`hsl(36,6%,${l-2}%)`),n.fillStyle=f,n.fillRect(c,h,e,e);for(let p=0;p<900;p++)n.fillStyle=`rgba(${Ue()<.5?"0,0,0":"255,255,255"},${Ue()*.06})`,n.fillRect(c+Ue()*e,h+Ue()*e,1+Ue()*2,1+Ue()*2);for(let p=0;p<5;p++)n.strokeStyle=`rgba(90,85,78,${.04+Ue()*.05})`,n.lineWidth=6+Ue()*14,n.beginPath(),n.moveTo(c+Ue()*e,h),n.bezierCurveTo(c+Ue()*e,h+e*.3,c+Ue()*e,h+e*.7,c+Ue()*e,h+e),n.stroke()}for(let o=0;o<=i;o++)for(let[a,l,c]of[[n,"#7d7a74",4],[r,"#ffffff",5]])a.fillStyle=l,a.fillRect(o*e-c/2,0,c,i*e),a.fillRect(0,o*e-c/2,i*e,c);n.fillStyle="rgba(255,255,255,0.18)";for(let o=0;o<i;o++)n.fillRect(o*e+2,0,2,i*e),n.fillRect(0,o*e+2,i*e,2);return{map:bi(t,[1,1]),rough:bi(s,[1,1],!1),groesse:i*.6}}function md(){ei=33;let i=1024,e=1024,[t,n]=Si(i,e),s=7,r=e/s;for(let o=0;o<s;o++){let a=-Ue()*600;for(;a<i;){let l=500+Ue()*500,c=26+Ue()*6,h=40+Ue()*9;n.fillStyle=`hsl(${c},36%,${h}%)`,n.fillRect(a,o*r,l,r);for(let f=0;f<26;f++){n.strokeStyle=`hsla(${c},40%,${h-8-Ue()*8}%,${.25+Ue()*.3})`,n.lineWidth=.7+Ue()*1.6;let p=o*r+Ue()*r,g=.5+Ue()*2.5,d=Ue()*6;n.beginPath();for(let _=0;_<=l;_+=10)n.lineTo(a+_,p+Math.sin(_*.012+d)*g);n.stroke()}for(let f=0;f<6;f++)n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(a,o*r+r*(.15+f*.14),l,1.2);n.fillStyle="#2a1d14",n.fillRect(a+l-2,o*r,3,r),a+=l}n.fillStyle="#20160f",n.fillRect(0,o*r,i,5)}return{map:bi(t,[1,1]),groesse:s*.145}}function wx(){ei=9;let[i,e]=Si(512,512);e.fillStyle="#f0eee8",e.fillRect(0,0,512,512);for(let t=0;t<26e3;t++){e.fillStyle=`rgba(${Ue()<.5?"0,0,0":"255,255,255"},${Ue()*.05})`;let n=1+Ue()*1.8;e.fillRect(Ue()*512,Ue()*512,n,n)}return bi(i,[1,1])}function Ax(){ei=13;let[i,e]=Si(512,512),t=512/6,n=512/12;e.fillStyle="#2b2e32",e.fillRect(0,0,512,512);for(let s=0;s<12;s++)for(let r=-1;r<7;r++){let o=r*t+s%2*t/2,a=s*n,l=18+Ue()*7,c=e.createLinearGradient(o,0,o+t,0);c.addColorStop(0,`hsl(210,5%,${l-5}%)`),c.addColorStop(.5,`hsl(210,5%,${l+4}%)`),c.addColorStop(1,`hsl(210,5%,${l-6}%)`),e.fillStyle=c,e.fillRect(o+1,a+1,t-2,n-2),e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(o,a+n-4,t,4)}return bi(i,[1,1])}function Rx(){return Ln.putz||(Ln.putz=new Oe({map:wx(),roughness:.95}),Ln.faschen=new Oe({color:14605267,roughness:.9}),Ln.sockel=new Oe({color:5593179,roughness:.9}),Ln.ziegel=new Oe({map:Ax(),roughness:.6,metalness:.1}),Ln.blech=new Oe({color:3816768,roughness:.4,metalness:.5,side:_t}),Ln.rahmen=new Oe({color:3356475,roughness:.45,metalness:.2}),Ln.glas=new vn({color:3359565,roughness:.04,metalness:.15,envMapIntensity:1.4,clearcoat:1}),Ln.vorhang=new Oe({color:13616822,roughness:1})),Ln}function gd(i,e,t=4,n=null){let s=Rx(),r=new dt,o=6.2,a=9;e(i,o,a,s.putz,0,o/2,-a/2,r),s.putz.map.repeat.set(i/3,o/3),e(i+.02,.32,.03,s.sockel,0,.16,.015,r);let l=.6,c=3.2,h=Math.hypot(a/2+l,c),f=Math.atan2(c,a/2+l);for(let u of[-1,1]){let y=e(i+1,.16,h,s.ziegel,0,o+c/2+.06,-a/2+u*(a/4+l/2),r);y.rotation.x=u*f,y.material=s.ziegel,s.ziegel.map.repeat.set((i+1)/2.2,h/2.2)}let p=new en;p.moveTo(-a/2,0),p.lineTo(0,c-.05),p.lineTo(a/2,0);for(let u of[-1,1]){let y=new Ge(new vi(p),s.putz);y.rotation.y=u*Math.PI/2,y.position.set(u*i/2,o,-a/2),r.add(y)}e(i+1,.2,.04,s.blech,0,o-.05,l+0,r);let g=new Ge(new Qn(.075,.075,i+1,20,1,!0,0,Math.PI),s.blech);g.rotation.z=Math.PI/2,g.rotation.x=Math.PI,g.position.set(0,o-.02,l+.09),g.castShadow=!0,r.add(g);let d=new Ge(new Qn(.05,.05,o,16),s.blech);d.position.set(i/2-.3,o/2,.12),d.castShadow=!0,r.add(d);for(let u=.8;u<o;u+=1.8)e(.03,.03,.12,s.blech,i/2-.3,u,.06,r);let _=(u,y,x,M,R)=>{e(u+.3,y+(R?.15:.3),.02,s.faschen,x,M+(R?.075:0),.01,r),e(u,y,.06,s.rahmen,x,M,.03,r);let T=Math.max(1,Math.round(u/1.1)),w=u/T;for(let C=0;C<T;C++){let U=x-u/2+w*(C+.5);e(w-.12,y-.12,.01,s.glas,U,M,.065,r),(!R||C===0)&&e(w*.35,y-.2,.005,s.vorhang,U-w*.25,M,.04,r),C&&e(.07,y,.075,s.rahmen,x-u/2+w*C,M,.035,r)}R||e(u+.1,.03,.14,s.blech,x,M-y/2-.03,.07,r)},m=Math.min(i/2-2,3.2);if(n){let x=n.tuerX,M=.06+n.H;e(1+.3,2.1+.15,.02,s.faschen,x,M+2.1/2+.075,.01,r),e(1,2.1,.07,s.rahmen,x,M+2.1/2,.035,r),e(1-.12,2.1-.1,.02,s.rahmen,x,M+2.1/2-.02,.075,r),e(.22,2.1-.5,.01,s.glas,x-.18,M+2.1/2+.1,.087,r),e(.025,.5,.04,s.blech,x+1/2-.14,M+1.05,.1,r)}else _(Math.min(3,Math.max(1.2,t-.9)),2.3,0,1.2,!0);for(let u of[-1,1]){let y=u*(t/2+1.4+.65);Math.abs(y)+.8<i/2&&_(1.3,1.3,y,1.45)}for(let u of[-m,0,m])_(1.3,1.3,u,4.3);return r}function _d(){ei=41;let[i,e]=Si(512,512);e.fillStyle="#2f4f22",e.fillRect(0,0,512,512);for(let t=0;t<9e3;t++)e.fillStyle=`hsl(${95+Ue()*25},${35+Ue()*20}%,${16+Ue()*22}%)`,e.beginPath(),e.ellipse(Ue()*512,Ue()*512,3+Ue()*4,1.5+Ue()*2,Ue()*3,0,7),e.fill();return new Oe({map:bi(i,[4,1]),roughness:1})}var ei,Ue,Ln,xd=rt(()=>{Pt();ei=7,Ue=()=>(ei=ei*16807%2147483647)/2147483647;Ln={}});function vd(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new L,new L,new L],r=new L,o=new L,a=new L,l=new L;function c(_){let m=~~(_.x*n),u=~~(_.y*n),y=~~(_.z*n);return`${m},${u},${y}`}let h=i.index?i.toNonIndexed():i,f=h.attributes.position,p={};for(let _=0,m=f.count/3;_<m;_++){let u=3*_,y=s[0].fromBufferAttribute(f,u+0),x=s[1].fromBufferAttribute(f,u+1),M=s[2].fromBufferAttribute(f,u+2);r.subVectors(M,x),o.subVectors(y,x);let R=new L().crossVectors(r,o).normalize();for(let T=0;T<3;T++){let w=s[T],C=c(w);C in p||(p[C]=[]),p[C].push(R)}}let g=new Float32Array(f.count*3),d=new zt(g,3,!1);for(let _=0,m=f.count/3;_<m;_++){let u=3*_,y=s[0].fromBufferAttribute(f,u+0),x=s[1].fromBufferAttribute(f,u+1),M=s[2].fromBufferAttribute(f,u+2);r.subVectors(M,x),o.subVectors(y,x),a.crossVectors(r,o).normalize();for(let R=0;R<3;R++){let T=s[R],w=c(T),C=p[w];l.set(0,0,0);for(let U=0,v=C.length;U<v;U++){let b=C[U];a.dot(b)>t&&l.add(b)}l.normalize(),d.setXYZ(u+R,l.x,l.y,l.z)}}return h.setAttribute("normal",d),h}var yd=rt(()=>{Pt()});function Bn(i,e,t,n=8){let s=[];for(let r=1;r<=n;r++){let o=r/n,a=(1-o)**2,l=2*(1-o)*o,c=o*o;s.push([a*i[0]+l*e[0]+c*t[0],a*i[1]+l*e[1]+c*t[1]])}return s}function Ph(i,e,t){let n=new en;n.moveTo(i[0][0],i[0][1]);for(let[r,o]of i.slice(1))n.lineTo(r,o);let s=new Wi(n,{depth:e,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:4});return t?(s.rotateY(-Math.PI/2),s.translate(e/2,0,0)):s.translate(0,0,-e/2),vd(s,.6)}function Dn(i,e,t,n,s){let r=new Ge(Ph(i,e,n),t);return r.castShadow=r.receiveShadow=!0,s&&s.add(r),r}var Md,Sd,Ih,bd,Ed,La=rt(()=>{Pt();yd();Md=[[0,0],[.115,0],...Bn([.115,0],[.168,.02],[.158,.11],16),...Bn([.158,.11],[.152,.185],[.138,.205],10),[.126,.205],[.126,.06],[.014,.06],[.014,.15],[0,.15]],Sd=[[-.004,-.004],[.115,-.004],...Bn([.115,-.004],[.172,.02],[.162,.11],16),...Bn([.162,.11],[.156,.19],[.14,.209],10),[-.004,.209]],Ih=[[0,-.07],[0,.06],...Bn([0,.06],[.088,.062],[.092,-.004],16),[.092,-.018],[.022,-.018],[.022,-.07]],bd=(()=>{let t=[[-.0375,0],[.0375,0],[.0375,.005]];for(let n=1;n<12;n++){let s=.0375-.075*n/12;t.push([s,.005+(.024-.005)*Math.sqrt(1-(s/.0375)**2)])}return t.push([-.0375,.005]),t})(),Ed=[[36,0],[226,0],[232,8],[214,42],[190,42],[190,38],[210,38],[222,14],[38,34],[28,51],[0,51],[0,47],[25,47],[36,30]].map(([i,e])=>[(i-116)/1e3,(e-25.5)/1e3])});var Lh,Td,Ur,Da,wd,Ad,Zi,Rd=rt(()=>{Lh={tds:{klar:{b:[1080,1500,2080,2200,3080,3700,4080,4500,5080,5200,5900,6080,6700,7080,7400,8080,8200,8900,9080,9600,10080,10400,11080,11100,11900,12080,12600,13080,13300,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4600,5050,5550,6050,6550,7050],p:[[854,917,1088,1171,1340,1441,1515,1801,1934,1995,2032,2047,2197,2254,2374,2630,2679,2781,2831,3150,3295,3400,3546,3587,3685,3795,4097,4425,4541,4723],[973,1051,1242,1329,1569,1692,1818,2121,2274,2340,2440,2463,2634,2710,2843,3156,3208,3297,3432,3768,3931,4048,4256,4398,4526,4681,5001,5347,5471,5753],[1053,1145,1397,1488,1760,1944,2083,2401,2613,2684,2809,2838,3071,3194,3338,3720,3857,4010,4192,4427,4606,4735,5008,5250,5406,5608,5946,6307,6440,6755],[1171,1279,1550,1647,1989,2196,2387,2720,2954,3028,3218,3253,3548,3690,3866,4306,4508,4685,4913,5146,5302,5382,5718,6061,6246,6494,6851,7229,7370,7785],[1271,1394,1704,1805,2179,2447,2653,3060,3334,3393,3627,3709,4185,4295,4401,4971,5196,5400,5671,5964,6138,6269,6668,6912,7126,7419,7795,8190,8338,8789],[1410,1547,1859,2024,2468,2758,3017,3480,3773,3817,4115,4204,4622,4871,4970,5596,5906,6074,6392,6743,6934,7117,7580,7724,7967,8305,8699,9112,9268,9818],[1508,1662,2013,2243,2718,3070,3342,3860,4213,4261,4585,4679,5160,5455,5564,6261,6556,6808,7172,7561,7770,8004,8530,8575,8846,9230,9643,10074,10237,10821],[1647,1816,2168,2461,3007,3361,3686,4279,4654,4705,5093,5195,5696,6011,6133,6887,7205,7483,7893,8340,8566,8852,9441,9387,9687,10116,10548,10996,11167,11850],[1750,1935,2329,2688,3269,3686,4059,4708,5112,5148,5603,5711,6278,6647,6761,7580,7923,8229,8685,9193,9437,9775,10464,10311,10642,11123,11575,12042,12223,12944],[1885,2083,2516,2899,3547,3984,4376,5078,5533,5574,6052,6165,6811,7192,7296,8177,8603,8872,9372,9878,10138,10586,11303,11050,11407,11927,12396,12879,13066,13884],[1985,2198,2711,3118,3797,4296,4701,5458,5973,6018,6521,6641,7367,7796,7891,8842,9233,9586,10132,10637,10913,11473,12253,11901,12287,12853,13340,13839,14035,14886],[2123,2351,2905,3336,4086,4607,5065,5878,6414,6462,7029,7156,7925,8372,8460,9467,9883,10261,10853,11355,11650,12321,13165,12713,13128,13739,14245,14761,14964,15916],[2223,2466,3100,3555,4336,4919,5390,6258,6853,6907,7499,7631,8482,8977,9055,10132,10572,10975,11613,12113,12424,13208,14115,13564,14007,14665,15189,15722,15933,16920],[2362,2620,3294,3774,4625,5230,5754,6677,7293,7351,8007,8146,9039,9553,9623,10758,11222,11650,12334,12833,13161,14055,15026,14376,14848,15551,16094,16644,16863,17949]]},matt:{b:[1080,1500,2080,2200,3080,3700,4080,4500,5080,5200,5900,6080,6700,7080,7400,8080,8200,8900,9080,9600,10080,10400,11080,11100,11900,12080,12600,13080,13300,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4600,5050,5550,6050,6550,7050],p:[[860,924,1098,1181,1355,1459,1534,1823,1959,2020,2061,2077,2229,2288,2410,2669,2718,2824,2875,3196,3344,3451,3600,3641,3743,3854,4158,4488,4606,4791],[983,1065,1262,1350,1598,1726,1856,2163,2321,2388,2495,2519,2696,2775,2911,3231,3284,3379,3516,3857,4025,4145,4359,4501,4636,4793,5118,5468,5594,5883],[1068,1166,1425,1518,1802,1995,2139,2463,2683,2755,2890,2921,3163,3291,3439,3830,3969,4132,4316,4558,4744,4877,5159,5402,5568,5773,6118,6486,6622,6948],[1191,1306,1588,1686,2044,2263,2461,2801,3046,3122,3325,3363,3669,3818,4e3,4452,4656,4846,5077,5319,5485,5570,5918,6262,6461,6712,7079,7466,7610,8040],[1295,1427,1751,1855,2248,2530,2745,3161,3448,3510,3760,3846,4336,4454,4567,5153,5380,5600,5876,6180,6365,6503,6917,7162,7394,7690,8078,8484,8637,9105],[1439,1588,1915,2083,2551,2858,3127,3601,3910,3957,4274,4367,4802,5061,5169,5813,6127,6313,6636,7001,7206,7397,7878,8023,8287,8630,9038,9464,9626,10197],[1542,1709,2078,2312,2815,3186,3470,4001,4372,4423,4770,4869,5369,5677,5796,6514,6812,7087,7456,7862,8086,8330,8877,8923,9219,9608,10038,10483,10653,11262],[1685,1869,2242,2540,3117,3493,3832,4440,4835,4890,5304,5412,5936,6264,6397,7176,7498,7801,8217,8683,8926,9224,9837,9784,10112,10548,10998,11463,11642,12353],[1794,1995,2414,2777,3394,3836,4224,4890,5318,5359,5842,5958,6550,6934,7061,7908,8256,8590,9053,9583,9846,10197,10914,10761,11125,11613,12087,12573,12762,13515],[1933,2150,2609,2997,3684,4149,4558,5278,5760,5805,6314,6435,7109,7507,7626,8537,8969,9269,9777,10306,10587,11050,11796,11545,11937,12465,12957,13461,13658,14511],[2038,2271,2813,3225,3948,4477,4901,5678,6222,6272,6809,6939,7695,8143,8253,9238,9634,10021,10577,11107,11407,11982,12796,12445,12869,13445,13957,14480,14686,15576],[2181,2431,3016,3454,4250,4805,5283,6118,6685,6739,7343,7480,8282,8750,8855,9898,10321,10736,11337,11867,12188,12876,13756,13306,13763,14384,14918,15459,15674,16667],[2285,2553,3220,3682,4514,5133,5626,6518,7147,7207,7840,7982,8869,9386,9482,10599,11046,11490,12137,12668,13007,13809,14755,14206,14695,15362,15917,16478,16702,17733],[2429,2713,3423,3910,4817,5460,6007,6956,7609,7674,8374,8525,9456,9993,10083,11261,11732,12203,12898,13430,13788,14702,15715,15067,15588,16302,16877,17457,17690,18825]]},poly:{b:[1080,2080,3080,4080,5080,6080,7080,8080,9080,10080,11080,12080,13080,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4550,5050,5550,6050,6550,7050],p:[[835,986,1258,1492,1781,2005,2274,2630,2957,3205,3451,3597,3878,4065],[896,1124,1423,1684,1992,2273,2560,2972,3317,3589,3887,4052,4389,4593],[956,1221,1578,1838,2202,2501,2845,3276,3699,4021,4343,4565,4921,5182],[1017,1359,1753,2030,2413,2769,3132,3659,4099,4446,4819,5059,5471,5751],[1096,1467,1809,2194,2663,3037,3457,4013,4500,4908,5305,5602,6033,6370],[1177,1604,1994,2446,2944,3396,3842,4466,4981,5233,5681,5995,6484,6839],[1257,1713,2180,2659,3224,3704,4219,4880,5471,5785,6257,6429,6935,7347],[1347,1850,2365,2912,3515,4061,4604,5332,5953,6500,7023,7413,7976,8406],[1428,1959,2551,3125,3795,4370,4990,5757,6443,7052,7599,8046,8628,9114],[1517,2106,2726,3178,4096,4717,5385,6199,6905,7577,8175,8640,9279,9784],[1598,2204,2901,3391,4387,5026,5772,6602,7365,8129,8751,9274,9929,10492],[1688,2341,3077,3644,4677,5374,6157,7046,7826,8653,9327,9867,10581,11162],[1779,2439,3252,3857,4968,5683,6542,7449,8287,9205,9904,10500,11232,11869],[1879,2577,3428,4110,5258,6030,6928,7892,8748,9730,10479,11095,11864,12519]]}},skyview:{klar:{b:[1e3,1500,2e3,2200,3e3,3700,4e3,4500,5e3,5200,5900,6e3,6700,7e3,7400,8e3,8200,8900,9e3,9600,1e4,10400,11e3,11100,11900,12e3,12600,13e3,13300,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4600,5e3,5500,6e3,6500,7e3],p:[[1216,1333,1407,1567,1697,2026,2149,2307,2362,2522,2732,2794,2983,3044,3454,3821,3877,4047,4169,4298,4380,4698,4859,4966,5092,5162,5353,5501,5759,5925],[1316,1450,1581,1748,1908,2301,2434,2611,2723,2889,3125,3189,3502,3576,3968,4367,4431,4626,4750,4941,5036,5369,5591,5701,5855,5929,6180,6343,6611,6843],[1454,1607,1757,1930,2157,2575,2758,2953,3083,3257,3556,3625,4023,4107,4523,4912,4984,5243,5371,5583,5693,6079,6322,6436,6658,6736,7009,7185,7504,7759],[1554,1725,1931,2112,2368,2910,3104,3316,3502,3624,3949,4020,4543,4638,5109,5599,5677,5930,5953,6226,6350,6750,7054,7171,7422,7503,7837,8028,8357,8676],[1733,1921,2146,2333,2658,3265,3508,3739,3883,3991,4380,4456,5063,5169,5732,6285,6170,6508,6444,7008,7006,7460,7785,7906,8224,8310,8665,8870,9249,9594],[1893,2099,2380,2576,2928,3619,3873,4122,4333,4459,4873,4952,5644,5759,6348,6971,7023,7306,7126,7810,7822,8291,8677,8821,9168,9257,9672,9892,10102,10511],[2091,2316,2615,2818,3237,3973,4279,4544,4784,4926,5404,5487,5804,6331,6993,7656,7716,8063,7846,8373,8619,9141,9548,9676,10091,10184,10640,10854,11294,11727],[2351,2593,2949,3160,3607,4409,4724,5008,5314,5474,5977,6063,6864,7001,7678,8402,8470,8852,8607,9215,9516,10052,10520,10651,11094,11191,11689,11936,12247,12745],[2517,2781,3197,3416,3899,4789,5155,5461,5799,5977,6576,6641,7491,7642,8384,9184,9258,9687,9382,10044,10422,10975,11508,11664,12206,12281,12804,13070,13413,13940],[2690,2968,3398,3623,4168,5077,5454,5773,6185,6369,6961,7054,7945,8104,8868,9594,9775,10337,10160,10729,11049,11653,12203,12381,12922,13024,13604,13881,14192,14779],[2928,3224,3674,3905,4517,5433,5858,6196,6624,6836,7492,7590,8484,8654,9482,10140,10428,11054,10821,11541,11866,12523,13094,13317,13924,14031,14632,14923,15484,16097],[3128,3442,3948,4186,4828,5787,6223,6579,7065,7303,7986,8085,9025,9206,10057,10686,11081,11752,11522,12204,12522,13194,13826,14152,14788,14898,15559,15865,16537,17213],[3367,3699,4223,4468,5177,6142,6628,7002,7505,7771,8517,8621,9566,9756,10672,11232,11734,12470,12243,12976,13359,14084,14737,14987,15691,15805,16488,16807,17630,18330],[3567,3916,4498,4750,5488,6496,6993,7385,7946,8238,9010,9117,10105,10307,11247,11777,12387,13147,12845,13508,13905,14644,15359,15822,16554,16672,17416,17750,18682,19448]]},matt:{b:[1e3,1500,2e3,2200,3e3,3700,4e3,4500,5e3,5200,5900,6e3,6700,7e3,7400,8e3,8200,8900,9e3,9600,1e4,10400,11e3,11100,11900,12e3,12600,13e3,13300,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4600,5e3,5500,6e3,6500,7e3],p:[[1220,1339,1415,1576,1711,2043,2167,2327,2384,2545,2758,2820,3012,3075,3486,3856,3913,4087,4209,4341,4424,4744,4908,5015,5144,5215,5408,5558,5817,5987],[1324,1464,1599,1768,1934,2333,2469,2651,2767,2935,3177,3242,3561,3638,4034,4438,4503,4704,4829,5025,5125,5461,5688,5799,5960,6035,6292,6458,6729,6966],[1468,1627,1783,1959,2197,2624,2811,3012,3149,3326,3634,3704,4112,4200,4621,5018,5092,5361,5490,5710,5825,6217,6468,6583,6815,6894,7176,7357,7680,7945],[1572,1751,1966,2151,2421,2976,3175,3395,3591,3716,4053,4126,4661,4761,5239,5740,5822,6087,6111,6395,6526,6933,7248,7367,7632,7715,8059,8257,8592,8923],[1755,1954,2190,2382,2724,3346,3597,3838,3994,4106,4510,4588,5211,5323,5896,6461,6350,6704,6642,7220,7226,7689,8028,8151,8487,8575,8942,9157,9542,9903],[1919,2139,2433,2634,3007,3717,3979,4241,4465,4597,5029,5110,5821,5945,6544,7183,7240,7542,7364,8064,8087,8566,8968,9115,9483,9575,10006,10236,10454,10881],[2122,2362,2677,2886,3330,4088,4402,4683,4938,5087,5586,5673,6010,6547,7221,7903,7969,8338,8123,8669,8928,9462,9888,10019,10458,10554,11029,11255,11705,12160],[2386,2646,3020,3237,3713,4539,4865,5166,5490,5657,6185,6275,7101,7248,7939,8685,8759,9166,8925,9554,9868,10419,10908,11043,11514,11614,12133,12395,12716,13239],[2558,2841,3278,3505,4021,4939,5318,5643,6002,6188,6815,6884,7763,7926,8684,9508,9591,10048,9747,10434,10828,11397,11954,12114,12689,12768,13316,13598,13952,14508],[2734,3034,3487,3720,4300,5241,5630,5971,6405,6598,7222,7319,8240,8413,9194,9946,10137,10729,10557,11152,11490,12112,12688,12871,13446,13554,14160,14454,14779,15396],[2977,3297,3771,4011,4663,5612,6052,6414,6867,7088,7779,7881,8809,8994,9841,10528,10826,11486,11258,12007,12351,13028,13628,13855,14502,14613,15243,15554,16129,16776],[3181,3521,4054,4303,4986,5983,6435,6817,7330,7578,8298,8403,9379,9576,10449,11109,11515,12223,11998,12712,13052,13744,14408,14739,15418,15533,16226,16553,17241,17954],[3424,3785,4338,4594,5349,6354,6857,7260,7792,8069,8855,8965,9950,10157,11096,11691,12204,12980,12759,13526,13932,14680,15368,15623,16373,16493,17210,17552,18392,19133],[3629,4009,4621,4886,5674,6724,7240,7662,8255,8559,9374,9487,10519,10740,11704,12271,12894,13696,13401,14101,14522,15286,16038,16507,17289,17413,18194,18553,19504,20312]]},poly:{b:[1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500,7e3],p:[[1162,1365,1629,2052,2278,2679,2943,3698,4012,4236,4691,4961,5318,5708],[1248,1493,1798,2263,2531,2974,3339,4076,4431,4696,5193,5504,5903,6335],[1334,1621,1967,2475,2784,3268,3735,4453,4850,5158,5696,6049,6489,6962],[1420,1748,2137,2746,3096,3562,4130,4971,5270,5618,6198,6592,7075,7590],[1546,1917,2346,3016,3358,3847,4507,5378,5678,5989,6700,7136,7660,8217],[1692,2104,2576,3287,3691,4251,4932,5845,6208,6569,7262,7861,8426,8843],[1838,2292,2805,3558,4014,4625,5357,6323,6726,7140,8005,8524,9132,9771],[2084,2579,3104,3919,4416,5088,5864,6880,7336,7800,8747,9308,9957,10498],[2190,2727,3293,4150,4698,5423,6249,7318,7825,8332,9349,9972,10663,11225],[2357,2934,3573,4531,5131,5867,6786,7955,8384,9142,9972,10656,11388,11952],[2543,3162,3842,4821,5464,6261,7201,8332,8843,9763,10634,11400,12173,12980],[2729,3389,4111,5112,5796,6656,7617,8710,9381,10223,11136,12044,12859,13806],[2915,3617,4380,5404,6128,7050,8033,9087,9901,10864,11818,12688,13544,14634],[3101,3845,4650,5695,6462,7443,8448,9465,10339,11214,12211,13331,14230,15461]]}}};Lh.carport={standard:{b:[3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[2e3,2500,3e3,3500,5e3,6e3,7e3],p:[[3093,3934,4103,4749,5453,6649,7478,7867,8771,9140,9799,10228],[3303,4269,4343,5193,5862,7282,7836,8249,9178,9572,10255,10709],[3675,4687,4808,5871,6807,8275,8678,9061,10057,10519,11270,11836],[4110,5186,5652,6519,7520,9073,9540,10007,11028,11514,12290,12880],[4834,6115,6742,7771,8933,10646,11318,11946,13128,13776,14757,15465],[5852,7359,8258,9470,10903,12844,13699,14578,15987,16863,18070,19049],[6598,8263,9257,10670,12242,14321,15315,16352,17720,18598,19720,20657]]},vlies:{b:[3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[2e3,2500,3e3,3500,5e3,6e3,7e3],p:[[3116,3967,4143,4796,5507,6712,7548,7945,8858,9234,9900,10336],[3326,4302,4383,5240,5916,7345,7906,8327,9265,9666,10356,10817],[3708,4729,4860,5934,6880,8360,8772,9164,10172,10644,11404,11982],[4143,5228,5704,6582,7593,9158,9634,10110,11143,11639,12424,13026],[4881,6178,6820,7865,9041,10771,11459,12101,13300,13962,14959,15681],[5906,7432,8350,9578,11030,12990,13861,14759,16187,17079,18305,19303],[6661,8348,9360,10795,12388,14488,15501,16559,17948,18847,19988,20946]]}};Td={tds:{glas:{1080:[3,2],1500:[3,2],2080:[4,2],2200:[4,2],3080:[5,2],3700:[6,2],4080:[7,2],4500:[7,3],5080:[8,3],5200:[8,3],5900:[9,3],6080:[9,3],6700:[10,3],7080:[11,3],7400:[11,3],8080:[13,4],8200:[13,4],8900:[13,4],9080:[15,4],9600:[15,4],10080:[15,5],10400:[15,5],11080:[17,5],11100:[17,5],11900:[17,5],12080:[19,5],12600:[19,5],13080:[19,5],13300:[19,5],14080:[21,5]},poly:{1080:[2,2],2080:[3,2],3080:[4,2],4080:[5,2],5080:[6,3],6080:[7,3],7080:[8,3],8080:[9,4],9080:[10,4],10080:[11,5],11080:[12,5],12080:[13,5],13080:[14,5],14080:[15,5]}},skyview:{glas:{1e3:[3,2],1500:[3,2],2e3:[4,2],2200:[4,2],3e3:[5,2],3700:[6,2],4e3:[7,2],4500:[7,2],5e3:[8,2],5200:[8,2],5900:[9,3],6e3:[9,3],6700:[10,3],7e3:[10,3],7400:[11,3],8e3:[12,3],8200:[12,3],8900:[13,3],9e3:[13,3],9600:[14,3],1e4:[14,3],10400:[15,3],11e3:[16,4],11100:[16,4],11900:[17,4],12e3:[17,4],12600:[18,4],13e3:[18,4],13300:[19,4],14e3:[20,4]},poly:{1e3:[2,2],2e3:[3,2],3e3:[4,2],4e3:[5,2],5e3:[6,2],6e3:[7,3],7e3:[8,3],8e3:[9,3],9e3:[10,3],1e4:[11,3],11e3:[12,4],12e3:[13,4],13e3:[14,4],14e3:[15,4]}}},Ur={montage:[[20,1600],[35,2e3],[50,2400]],lieferung:500,mwst:.19,freistehend:1.07},Da={fr23:{os:{x:[500,750,1e3,1250,1500,1750],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[368.29,397.9,427.5,457.1,486.71,516.31],[397.9,427.5,457.1,486.71,516.31,545.91],[427.5,457.1,486.71,516.31,545.91,575.52],[457.1,486.71,516.31,545.91,575.52,585.12],[486.71,516.31,545.91,575.52,585.12,614.72],[516.31,545.91,575.52,585.12,614.72,644.32],[545.91,575.52,585.12,614.72,644.32,673.93],[575.52,585.12,614.72,644.32,673.93,703.53],[585.12,614.72,644.32,673.93,703.53,733.13]]},"1vs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[733.61,763.21,792.81,822.41,852.02,881.62,911.22,940.83,970.43],[789.6,819.2,848.81,878.41,908.01,937.62,967.22,996.82,1026.43],[845.6,875.2,904.8,934.41,964.01,973.61,1003.22,1032.82,1062.42],[881.59,911.2,940.8,970.4,1e3,1029.61,1059.21,1088.81,1118.42],[937.59,967.19,996.79,1026.4,1056,1085.6,1115.21,1144.81,1174.41],[973.58,1003.19,1032.79,1062.39,1092,1121.6,1151.2,1180.81,1210.41],[1029.58,1059.18,1088.79,1118.39,1147.99,1177.59,1207.2,1236.8,1266.4]]},"2vs":{x:[3e3,3250,3500,3750,4e3,4250,4500,4750,5e3,5250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1077.68,1107.29,1136.89,1166.49,1196.1,1225.7,1255.3,1284.91,1314.51,1344.11],[1140.07,1169.68,1199.28,1228.88,1258.49,1288.09,1317.69,1347.29,1376.9,1406.5],[1222.46,1252.06,1261.67,1291.27,1320.87,1350.48,1380.08,1409.68,1439.29,1468.89],[1284.85,1314.45,1344.06,1373.66,1403.26,1432.86,1462.47,1492.07,1521.67,1531.28],[1347.24,1376.84,1406.44,1436.05,1465.65,1495.25,1524.86,1554.46,1584.06,1613.67],[1409.63,1439.23,1468.83,1498.44,1528.04,1557.64,1587.24,1616.85,1646.45,1676.05],[1472.01,1501.62,1531.22,1560.82,1590.43,1620.03,1649.63,1679.24,1708.84,1738.44]]},"3vs":{x:[3250,3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750,6e3,6250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1280.23,1309.83,1339.43,1369.03,1398.64,1428.24,1457.84,1487.45,1517.05,1546.65,1576.26,1605.86,1635.46],[1369.01,1398.61,1428.21,1457.82,1487.42,1517.02,1546.62,1576.23,1605.83,1635.43,1665.04,1694.64,1724.24],[1457.79,1487.39,1516.99,1546.6,1576.2,1605.8,1635.41,1665.01,1694.61,1724.21,1753.82,1783.42,1813.02],[1546.57,1576.17,1605.77,1635.38,1664.98,1694.58,1724.19,1753.79,1783.39,1813,1842.6,1872.2,1901.8],[1635.35,1664.95,1694.56,1724.16,1753.76,1783.36,1812.97,1842.57,1872.17,1901.78,1931.38,1940.98,1970.59],[1724.13,1753.73,1783.34,1812.94,1842.54,1872.15,1881.75,1911.35,1940.95,1970.56,2000.16,2029.76,2059.37],[1812.91,1822.51,1852.12,1881.72,1911.32,1940.93,1970.53,2000.13,2029.74,2059.34,2088.94,2118.54,2148.15]]},"1vs1hs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[984.23,1020.23,1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2],[1020.23,1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19],[1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19],[1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18],[1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18],[1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18,1612.17],[1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18,1612.17,1648.17]]},"2vs1hs":{x:[3e3,3250,3500,3750,4e3,4250,4500,4750,5e3,5250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1458.04,1514.04,1570.03,1606.03,1662.03,1698.02,1754.02,1810.01,1846.01,1902],[1540.43,1576.43,1632.42,1668.42,1724.41,1780.41,1816.41,1872.4,1908.4,1964.39],[1602.82,1638.82,1694.81,1750.81,1786.8,1842.8,1878.79,1934.79,1990.79,2026.78],[1665.21,1721.2,1757.2,1813.2,1849.19,1905.19,1961.18,1997.18,2053.17,2089.17],[1727.6,1783.59,1819.59,1875.58,1931.58,1967.58,2023.57,2059.57,2115.56,2171.56],[1789.99,1845.98,1901.98,1937.97,1993.97,2029.96,2085.96,2141.95,2177.95,2233.95],[1872.37,1908.37,1964.36,2020.36,2056.36,2112.35,2148.35,2204.34,2260.34,2296.33]]},"3vs1hs":{x:[3250,3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750,6e3,6250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1711.88,1767.87,1803.87,1859.87,1895.86,1951.86,2007.85,2043.85,2099.84,2135.84,2191.84,2247.83,2283.83],[1800.66,1836.66,1892.65,1948.65,1984.64,2040.64,2076.63,2132.63,2188.62,2224.62,2280.62,2316.61,2372.61],[1889.44,1925.44,1981.43,2017.43,2073.42,2129.42,2165.41,2221.41,2257.41,2313.4,2369.4,2405.39,2461.39],[1978.22,2014.22,2070.21,2106.21,2162.2,2218.2,2254.2,2310.19,2346.19,2402.18,2458.18,2494.17,2550.17],[2047,2103,2158.99,2194.99,2250.98,2286.98,2342.98,2398.97,2434.97,2490.96,2526.96,2582.95,2638.95],[2135.78,2191.78,2227.77,2283.77,2339.77,2375.76,2431.76,2467.75,2523.75,2579.74,2615.74,2671.74,2707.73],[2224.56,2280.56,2316.56,2372.55,2428.55,2464.54,2520.54,2556.53,2612.53,2668.53,2704.52,2760.52,2796.51]]},"s-os":{x:[500,750,1e3,1250,1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[392.15,421.75,451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38],[421.75,451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98],[451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98,806.59],[480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98,806.59,836.19],[510.56,540.16,569.76,599.37,628.97,658.57,null,null,null,null,null,null,null],[540.16,569.76,599.37,628.97,658.57,688.18,null,null,null,null,null,null,null],[569.76,599.37,628.97,658.57,688.18,717.78,null,null,null,null,null,null,null],[599.37,628.97,658.57,688.18,717.78,747.38,null,null,null,null,null,null,null],[628.97,658.57,688.18,717.78,747.38,776.98,null,null,null,null,null,null,null]]},"s-1hs":{x:[500,750,1e3,1250,1500,1750],y:[2e3,2250,2500],p:[[744.67,800.67,836.66,892.66,928.65,984.65],[774.27,830.27,866.27,922.26,958.26,1014.25],[803.88,839.87,895.87,951.86,987.86,1043.86]]},"s-1vs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500,3750,4e3],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[727.53,757.13,786.73,816.34,845.94,875.54,905.15,934.75,964.35,993.95,1023.56],[763.52,793.13,822.73,852.33,881.94,911.54,941.14,970.74,1000.35,1029.95,1059.55],[819.52,849.12,878.72,908.33,937.93,967.53,997.14,1026.74,1056.34,1085.95,1115.55],[875.51,905.12,934.72,964.32,993.93,1023.53,1033.13,1062.74,1092.34,1121.94,1151.54],[911.51,941.11,970.72,1000.32,1029.92,1059.53,1089.13,1118.73,1148.33,1177.94,1207.54],[967.51,997.11,1026.71,1056.31,1085.92,1115.52,1145.12,null,null,null,null],[1003.5,1033.1,1062.71,1092.31,1121.91,1151.52,1181.12,null,null,null,null],[1059.5,1089.1,1118.7,1148.31,1177.91,1207.51,1237.12,null,null,null,null],[1115.49,1145.1,1174.7,1204.3,1233.9,1263.51,1273.11,null,null,null,null]]},"s-2vs":{x:[2500,2750,3e3,3250,3500,3750,4e3,4250,4500],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[986.92,1016.52,1046.13,1075.73,1105.33,1134.94,1144.54,1174.14,1203.75],[1049.31,1078.91,1108.52,1138.12,1167.72,1197.32,1226.93,1256.53,1286.13],[1111.7,1141.3,1170.9,1200.51,1230.11,1259.71,1289.32,1318.92,1348.52],[1174.09,1203.69,1233.29,1262.9,1292.5,1322.1,1351.7,1381.31,1410.91],[1256.47,1286.08,1315.68,1325.28,1354.89,1384.49,1414.09,1443.7,1473.3],[1318.86,1348.47,1378.07,1407.67,1437.27,1466.88,1496.48,1526.08,1555.69],[1381.25,1410.85,1440.46,1470.06,1499.66,1529.27,1558.87,1588.47,1618.08],[1443.64,1473.24,1502.85,1532.45,1562.05,1591.65,1621.26,1650.86,1680.46],[1506.03,1535.63,1565.23,1594.84,1624.44,1654.04,1683.65,1713.25,1742.85]]},"s-3vs":{x:[3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750],y:[2e3,2250,2500],p:[[1759,1788.6,1818.21,1827.81,1857.41,1887.02,1916.62,1946.22,1975.82,2005.43],[1827.78,1857.38,1886.99,1916.59,1946.19,1975.8,2005.4,2035,2064.61,2094.21],[1916.56,1946.17,1975.77,2005.37,2034.97,2064.58,2094.18,2123.78,2153.39,2182.99]]},"s-1vs1hs":{x:[1500,1750,2e3,2250,2500,2750,3e3],y:[2e3,2250,2500],p:[[1310.11,1366.11,1422.11,1458.1,1514.1,1550.09,1606.09],[1366.11,1422.11,1458.1,1514.1,1550.09,1606.09,1662.08],[1422.11,1458.1,1514.1,1550.09,1606.09,1662.08,1698.08]]},"s-2vs1hs":{x:[2500,2750,3e3,3250,3500,3750,4e3,4250,4500],y:[2e3,2250,2500],p:[[1781.57,1837.57,1893.57,1929.56,1985.56,2021.55,2077.55,2133.54,2169.54],[1863.96,1899.96,1955.95,1991.95,2047.95,2103.94,2139.94,2195.93,2231.93],[1926.35,1962.35,2018.34,2074.34,2110.33,2166.33,2202.33,2258.32,2314.32]]},"s-3vs1hs":{x:[3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750],y:[2e3,2250,2500],p:[[2253.04,2309.03,2365.03,2401.02,2457.02,2493.01,2549.01,2605,2641,2697],[2341.82,2397.81,2433.81,2489.8,2545.8,2581.79,2637.79,2673.79,2729.78,2785.78],[2430.6,2486.59,2522.59,2578.58,2634.58,2670.58,2726.57,2762.57,2818.56,2874.56]]},frfDrehkipp:{x:[600,800,1e3,1200],y:[600,800,1e3,1200,1400],p:[[807.92,838.19,858.47,878.75],[827.07,857.35,877.63,907.9],[856.23,876.51,906.79,927.06],[875.39,905.67,925.94,956.22],[894.55,924.82,945.1,975.38]]},frfSchraegKipp:{x:[600,800,1e3,1200],y:[600,800],p:[[865.79,898.02,920.25,952.48],[886.9,919.13,951.36,983.59]]},frtTuer:{x:[750,1e3,1200],y:[2e3,2250,2500],p:[[1747.31,1798.29,1835.08],[1799.94,1850.93,1887.71],[1852.57,1903.56,1950.35]]},frtTuerIntegriert:{x:[750,1e3,1200],y:[2e3,2250,2500],p:[[1054.94,1080.2,1112.4],[1090.34,1115.6,1137.8],[1115.74,1150.99,1173.2]]}},sg23:{"3-2":{x:[1500,2e3,2500,3e3],y:[1500,2e3,2500],p:[[1018.58,1137.76,1317.95,1437.13],[1095.55,1275.74,1445.92,1626.11],[1223.52,1403.71,1644.89,1825.08]]},"3-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[1740.49,1920.67,2039.86,2220.04,2339.23],[1939.46,2109.65,2289.83,2470.02,2650.2],[2128.43,2369.62,2539.8,2780.99,2961.18]]},"3-3":{x:[2500,3e3,3500,4e3],y:[1500,2e3,2500],p:[[1376.83,1496.02,1676.2,1795.39],[1514.81,1684.99,1865.18,2045.36],[1703.78,1883.97,2115.15,2295.34]]},"3-6":{x:[4e3,4500,5e3,5500,6e3,6500],y:[1500,2e3,2500],p:[[2167.63,2337.81,2467,2637.19,2756.37,2936.56],[2417.6,2597.79,2767.97,2948.16,3128.34,3308.53],[2667.58,2898.76,3078.95,3320.13,3500.32,3731.5]]},"4-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[1669.05,1865.26,2000.47,2186.68,2321.89],[1868.02,2054.23,2250.44,2446.65,2632.86],[2056.99,2304.2,2500.41,2547.62,2943.83]]},"5-5":{x:[4e3,4500,5e3,5500,6e3],y:[1500,2e3,2500],p:[[2174.68,2375.55,2325.43,2726.31,2876.18],[2424.65,2625.53,2836.4,3037.28,3238.15],[2674.62,2936.5,3147.38,3409.25,3610.13]]}},sc23:{"2-2":{x:[1500,2e3,2500,3e3],y:[1500,2e3,2500],p:[[1480.99,1625.01,1792.54,1926.56],[1661.89,1829.41,2006.93,2174.45],[1876.29,2043.81,2244.83,2412.35]]},"2-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[2906.47,3074,3208.02,3375.54,3519.56],[3242.38,3409.9,3587.42,3554.94,3922.46],[3588.28,3789.3,3956.82,4157.84,4325.36]]},"3-3":{x:[2500,3e3,3500,4e3],y:[1500,2e3,2500],p:[[2105.65,2255.03,2437.92,2577.3],[2361.27,2544.15,2727.03,2899.91],[2650.38,2833.26,3049.65,3222.53]]},"3-6":{x:[4e3,4500,5e3,5500,6e3,6500],y:[1500,2e3,2500],p:[[3817.16,4000.04,4139.43,4322.31,4471.69,4654.57],[4275.3,4458.18,4631.07,4813.95,4996.83,5179.71],[4733.44,4949.83,5122.71,5339.09,5521.97,5728.36]]}}},wd={unterdachZip:{x:[1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[2313,2420,2509,2585,2680,2773,2857,4202,4318,4439],[2443,2560,2653,2736,2839,2935,3024,4468,4594,4728],[2606,2725,2828,2923,3030,3133,3232,4789,4923,5070],[2736,2863,2970,3069,3191,3296,3405,5043,5199,5354],[2867,3001,3115,3224,3349,3461,3576,5315,5482,5646],[2997,3137,3263,3376,3508,3658,3930,5644,5821,6001],[3129,3275,3407,3529,3669,3821,4108,5931,6149,6921],[3259,3413,3551,3681,3827,3984,4281,6268,7064,7249],[3411,3551,3693,3834,4023,4192,4499,6528,7350,7535],[4474,4907,5103,5183,5568,5745,5974,7482,8034,8225]]},aufdachZip:{x:[1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[2313,2420,2509,2585,2680,2773,2857,4202,4318,4439],[2443,2560,2653,2736,2839,2935,3024,4468,4594,4728],[2606,2725,2828,2923,3030,3133,3232,4789,4923,5070],[2736,2863,2970,3069,3191,3296,3405,5043,5199,5354],[2867,3001,3115,3224,3349,3461,3576,5315,5482,5646],[2997,3137,3263,3376,3508,3658,3930,5644,5821,6001],[3129,3275,3407,3529,3669,3821,4108,5931,6149,6921],[4239,4423,4701,4890,5368,5566,5891,6268,7064,7249],[4342,4526,4810,4997,5492,5692,6017,6528,7350,7535],[5243,5494,6126,6378,6810,7078,7298,7482,8034,8225]]},ezip105:{x:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3],y:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800,5e3,5200,5400,5600,5800,6e3],p:[[1066,1098,1128,1162,1190,1220,1254,1284,1312,1336,1364],[1132,1164,1200,1232,1264,1298,1330,1362,1396,1430,1464],[1172,1206,1244,1278,1310,1348,1382,1420,1452,1486,1520],[1214,1250,1288,1326,1380,1418,1458,1490,1528,1566,1602],[1272,1308,1350,1392,1428,1470,1508,1548,1586,1626,1664],[1310,1352,1394,1434,1478,1516,1560,1602,1642,1684,1726],[1378,1422,1464,1510,1552,1596,1638,1684,1724,1772,1812],[1420,1462,1510,1556,1600,1646,1692,1736,1782,1826,1884],[1458,1506,1556,1602,1648,1706,1756,1802,1850,1898,1948],[1500,1558,1608,1656,1708,1758,1810,1858,1904,1956,2004],[1548,1602,1650,1704,1758,1810,1860,1912,1968,2020,2072],[1614,1666,1722,1776,1828,1888,1942,1996,null,null,null],[1654,1718,1772,1828,1884,1940,1996,2054,null,null,null],[1700,1760,1816,1874,1932,1992,2048,2106,null,null,null],[1740,1800,1858,1920,1980,2042,2102,2206,null,null,null],[1782,1842,1906,1968,2072,2132,2198,2260,null,null,null],[1846,1910,1976,2084,2146,2214,2278,2342,null,null,null],[1880,1950,2018,2126,2194,2260,2326,2392,null,null,null],[1918,1988,2100,2170,2238,2304,2376,2444,null,null,null],[1954,2026,2142,2212,2284,2354,2424,2496,null,null,null],[1992,2108,2184,2256,2328,2402,2472,2548,null,null,null],[2054,2172,2248,2322,2402,2472,2546,2626,null,null,null],[2134,2212,2288,2366,2442,2520,2598,2674,null,null,null],[2170,2250,2330,2410,2490,2570,2646,2724,null,null,null],[2210,2288,2370,2452,2534,2616,2692,2778,null,null,null],[2246,2328,2412,2496,2578,2662,2744,2830,null,null,null]]},ezip125:{x:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3],y:[650,800,1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800,5e3],p:[[1002,1030,1052,1080,1108,1130,1168,1190,1220,1242,1268],[1030,1058,1086,1114,1144,1170,1204,1228,1260,1286,1314],[1066,1098,1128,1162,1190,1220,1254,1284,1314,1344,1376],[1132,1164,1200,1232,1264,1298,1330,1362,1396,1430,1464],[1172,1206,1244,1278,1310,1348,1382,1420,1452,1486,1520],[1214,1250,1288,1326,1380,1418,1458,1490,1528,1566,1602],[1272,1308,1350,1392,1428,1470,1508,1548,1586,1626,1664],[1310,1352,1394,1434,1478,1516,1560,1602,1642,1684,1726],[1378,1422,1464,1510,1552,1596,1638,1684,1724,1772,1812],[1420,1462,1510,1556,1600,1646,1692,1736,1782,1826,1884],[1458,1506,1556,1602,1648,1706,1756,1802,1850,1898,1948],[1500,1558,1608,1656,1708,1758,1810,1858,1904,1956,2004],[1548,1602,1650,1704,1758,1810,1860,1912,1968,2020,2072],[1614,1666,1722,1776,1828,1888,1942,1996,2054,2104,2158],[1654,1718,1772,1828,1884,1940,1996,2054,2110,2166,2218],[1700,1760,1816,1874,1932,1992,2048,2106,2166,2222,2328],[1740,1800,1858,1920,1980,2042,2102,2206,2268,2328,2386],[1782,1842,1906,1968,2072,2132,2198,2260,2324,2384,2448],[1846,1910,1976,2084,2146,2214,2278,2342,2406,2470,2536],[1880,1950,2018,2126,2194,2260,2326,2392,2460,2522,2592],[1918,1988,2100,2170,2238,2304,2376,2444,2512,2582,2650],[1954,2026,2142,2212,2284,2354,2424,2496,2564,2638,2708],[1992,2108,2184,2256,2328,2402,2472,2548,2620,2692,2764]]},luna:{x:[1500,2e3,2500,3e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500],p:[[2858,null,null,null],[3025,3087,null,null],[3183,3255,3336,null],[3344,3424,3515,3602],[3509,3597,3692,3785],[3824,3919,4028,4129],[3995,4092,4222,4325],[4211,4312,4452,4551]],led:[734,752,763,777,794,808,824,839]},luxora:{x:[1500,2e3,2500,3e3,3250],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500],p:[[3391,null,null,null,null],[3447,3560,null,null,null],[3505,3626,3698,null,null],[3560,3690,3812,4005,4117],[3719,3865,4001,4145,4263],[3944,4102,4234,4397,4518],[4063,4234,4378,4545,4675],[4329,4477,4627,4735,4868]],led:[715,734,744,757,773,787,802,818]},pergolaOhne:{x:[2e3,2500,3e3,3500,4e3,4500,5e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[4903,5027,5144,5305,5429,5550,5668],[5126,5260,5390,5565,5695,5830,5962],[5402,5552,5695,5878,6022,6168,6315],[5622,5779,5942,6137,6298,6455,6611],[5845,6016,6185,6395,6568,6739,6914],[6242,6428,6613,6834,7021,7194,7378],[6486,6681,6877,7108,7305,7503,7695],[6782,6988,7198,7443,7660,7866,8074],[7009,7227,7448,7722,7942,8158,8381],[7233,7458,7695,7963,8218,8447,null]]},pergolaMit:{x:[2e3,2500,3e3,3500,4e3,4500,5e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[5808,5931,6047,6212,6331,6455,6574],[6074,6205,6335,6506,6638,6776,6908],[6387,6535,6681,6858,7009,7153,7297],[6648,6803,6968,7161,7318,7476,7635],[6910,7079,7250,7458,7629,7802,7975],[7351,7532,7717,7936,8123,8298,8482],[7629,7827,8020,8253,8447,8649,8838],[7967,8175,8383,8624,8844,9050,9260],[8232,8451,8671,8945,9166,9382,9602],[8498,8723,8958,9225,9481,9712,null]]}},Ad={schiebbar:{x:[500,750,1e3,1250,1500],y:[1250,1500,1750,2e3,2250,2500,2750,3e3],p:[[1034.87,1104.12,1173.38,1242.64,1311.9],[1073.84,1154.85,1235.87,1316.88,1397.89],[1112.81,1205.58,1298.35,1391.12,1483.89],[1311.78,1416.31,1520.83,1625.36,1729.88],[1350.76,1467.04,1583.32,1699.6,1815.88],[1389.73,1517.77,1645.8,1773.84,1901.88],[1440.46,1580.25,1720.04,1871.59,2011.39],[1479.43,1630.98,1782.53,1945.83,2097.38]]},fest:{x:[500,750,1e3,1250,1500],y:[1250,1500,1750,2e3,2250,2500,2750,3e3],p:[[1055.87,1137.47,1219.07,1300.67,1382.27],[1094.84,1188.2,1281.56,1374.91,1468.27],[1133.82,1238.93,1344.04,1449.15,1554.27],[1332.79,1449.66,1566.53,1683.39,1800.26],[1371.76,1500.39,1629.01,1757.63,1886.26],[1410.73,1551.11,1691.49,1831.87,1972.25],[1461.46,1613.6,1765.73,1929.63,2081.76],[1500.43,1664.33,1828.22,2003.87,2167.76]]},schienen:{x:[1e3,2e3,3e3,4e3,5e3,6e3,7e3],p:[160.97,240.97,320.96,400.96,480.95,560.95,640.94]}},Zi={wand:{x:[2e3,2500,3e3,3500,4e3],y:[1430,1610,1790,1970,2150,2330,2510,2690,2870,3050,3230,3410,3590,3770,3950,4130,4310,4490,4670,4850,5030,5210,5390,5570,5750,5930,6110,6290,6470,6650,6830,7010],p:[[8715,9091,9568,9775,10084],[8893,9269,9747,10215,10491],[9071,9380,10153,10526,10806],[9349,9895,10331,10777,11222],[9527,10165,10646,11092,11537],[9705,10376,11026,11439,11853],[10088,10694,11344,11758,12373],[10357,10973,11523,12005,12689],[10535,11083,11838,12320,13004],[11531,12215,12834,13486,14137],[11810,12394,13149,13901,14453],[11987,12504,13327,14148,14768],[12189,12841,13766,14487,15207],[12603,13156,14182,14870,15760],[12781,13468,14496,15286,16479],[12959,13782,14675,15533,16794],[13137,13960,14989,16251,17513],[13516,14071,15663,16589,17919],[13698,14389,15981,17312,18239],[13876,14567,16159,17559,18554],[14404,15377,16958,18190,19220],[14933,16187,17758,18822,19886],[25177,16365,18072,19136,20201],[15581,16475,18251,19384,20516],[15763,16793,18569,19702,20832],[15941,16972,18748,19949,21147],[16119,17486,19062,20264,21462],[16498,18001,19442,20713,21979],[16676,18180,19757,21028,22295],[16854,18290,19936,21275,22610],[17055,18627,20273,21609,22945],[17256,18965,20611,21943,23279]],stuetzen:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],led:[1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5]},frei:{x:[2e3,2500,3e3,3500,4e3],y:[1430,1610,1790,1970,2150,2330,2510,2690,2870,3050,3230,3410,3590,3770,3950,4130,4310,4490,4670,4850,5030,5210,5390,5570,5750,5930,6110,6290,6470,6650,6830,7010],p:[[9133,9509,9986,10193,10502],[9311,9687,10165,10633,10909],[9489,9798,10571,10948,11224],[9767,10313,10749,11195,11640],[9945,10583,11064,11510,11955],[10123,10794,11444,11857,12271],[10506,11112,11762,12176,12791],[10775,11391,11941,12423,13107],[10953,11501,12255,12653,13422],[11949,12633,13252,13904,14555],[12228,12812,13567,14319,14871],[12403,12922,13745,14566,15186],[12607,13259,14184,14905,15625],[13021,13574,14600,15288,16178],[13199,13886,14914,15703,16897],[13377,14200,15093,15951,17212],[13555,14378,15407,16669,17930],[13934,14489,16080,17007,18337],[14116,14806,16399,17730,18657],[14294,14985,16577,17977,18972],[14822,15795,17376,18608,19638],[15351,16605,18175,19240,20304],[15528,16783,18490,19554,20619],[15999,16893,18669,19802,20934],[16181,17211,18987,20120,21250],[16359,17390,19166,20367,21565],[16537,17904,19480,20682,21878],[16916,18419,19860,21131,22397],[17094,18597,20175,21446,22712],[17272,18708,20354,21693,23028],[17473,19045,20691,22027,23363],[17674,19383,21029,22361,23697]],stuetzen:[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6],led:[1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5]}}});function Px(i,e){return i.y.findIndex(t=>t>=e-.5)}function Ki(i,e){let t=e[i.montage==="frei"?"frei":"wand"],n=t.x.findIndex(l=>l>=i.t*10-.5),s=Px(t,i.b*10),r=n<0||s<0?null:t.p[s][n],o=i.montage==="frei",a=(s<0?null:t.stuetzen[s])||(o?4:2);return{preis:r,gesamt:a,front:o?a>=6?3:2:a,led:s<0?1:t.led[s],frei:o}}function Cd(i,e){let t=Ki(i,e),n=[],s=0,r=Math.min(i.ledBand||0,t.led);if(r){let o=Cx[r]||0;s+=o,n.push(`${r} \xD7 LED-Band in den Lamellen (max. ${t.led} bei dieser Gr\xF6\xDFe): ${o.toLocaleString("de-DE")} \u20AC`)}for(let[o,[a,l]]of Object.entries(Gs))i[o]&&(s+=l,n.push(`${a}: ${l.toLocaleString("de-DE")} \u20AC`));return s?{preis:s,info:n.join(`
`)}:null}function Pd(i,e,t,n,s,r,o){let a=e.b/100,l=e.t/100,{H:c,fh:h,pf:f}=nn,p=Ki(e,t);r(a,h,f,s,0,c-h/2,n+f/2,i),r(a,h,f,s,0,c-h/2,n+l-f/2,i);for(let B of[-1,1])r(f,h,l-2*f,s,B*(a/2-f/2),c-h/2,n+l/2,i);let g=c-h,d=B=>B*(a/2-f/2),_=(B,Y)=>r(f,g,f,s,B,g/2,Y,i);if(p.frei){for(let B of[-1,1])_(d(B),n+f/2),_(d(B),n+l-f/2);p.gesamt>=6&&(_(0,n+f/2),_(0,n+l-f/2))}else{let B=p.gesamt;for(let Y=0;Y<B;Y++)_(-a/2+f/2+(a-f)*(B>1?Y/(B-1):.5),n+l-f/2)}let m=Math.max(1,Math.floor((a-2*f)/nn.teilung)),u=Ph(Ed,l-2*f-.01,!1),y=new Ns(u,s,m);y.castShadow=!0,y.receiveShadow=!0,i.add(y);let x=-a/2+f+(a-2*f-(m-1)*nn.teilung)/2,M=c-.085,R=new Ke,T=new $t,w=new L(0,0,1),C=new L(1,1,1),U=new L,v=B=>{T.setFromAxisAngle(w,Pn.degToRad(B));for(let Y=0;Y<m;Y++)U.set(x+Y*nn.teilung,M,n+l/2),R.compose(U,T,C),y.setMatrixAt(Y,R);y.instanceMatrix.needsUpdate=!0},b=Math.min(e.ledBand||0,p.led),D=[...new Set(Array.from({length:b},(B,Y)=>Math.floor((Y+.5)*m/b)))],O=new L(.095,-.029,0),H=new L,$=D.map(()=>{let B=new Ge(new Ut(.016,.005,l-2*f-.08),o);return i.add(B),B}),k=v,j=B=>{k(B),$.forEach((Y,oe)=>{H.copy(O).applyQuaternion(T),Y.position.set(x+D[oe]*nn.teilung+H.x,M+H.y,n+l/2),Y.quaternion.copy(T)})};if(j(e.spWinkel),e.spSeite)for(let B of[-1,1])r(.01,.02,l-2*f,o,B*(a/2-f-.006),c-h+.02,n+l/2,i);return j}var nn,Cx,Gs,Id=rt(()=>{Pt();La();nn={H:2.75,fh:.19,pf:.12,lamB:.232,lamH:.051,teilung:.21},Cx={1:763,2:834,3:905,4:976,5:1047},Gs={spSeite:["Seitliche Beleuchtung",1262],spRegen:["Regensensor",652],spTahoma:["Smartphone-Steuerung TaHoma Switch Pro",435],spFb:["Zus\xE4tzliche Fernbedienung Situo 5 Variation io",198]}});function Lx(i,e,t){if(!i)return null;let n=i.x.findIndex(r=>r>=e-.5),s=i.y.findIndex(r=>r>=t-.5);return n<0||s<0?null:i.p[s][n]??null}function Dh(i,e){let t=[];for(let[n,s]of Object.entries(Ld)){let r=i[s];if(r!=="schieb"&&r!=="fest")continue;let o=e.unter-.06-(n!=="vorne"&&e.slope?.15:0),a=n==="vorne"?e.felder||[{x:0,b:e.w-.12}]:[{x:0,b:e.vel?e.vel.z2-e.vel.z1:e.d-.1}];a.forEach((l,c)=>{let h=l.b,f=Math.max(1,Math.ceil(h/(r==="schieb"?1.46:1.5)-1e-9)),p=r==="schieb"?Math.max(1,Math.min(i.velSpuren||2,3,f)):0;t.push({ort:a.length>1?`${n} Feld ${c+1}/${a.length}`:n,seite:n,x:l.x,typ:r,breite:h,h:o,n:f,t:p,ew:h/f+(r==="schieb"?.04:0)})})}return t}function Dd(i){let e=0;for(let[t,n]of Object.entries(Ld))if(i[n]==="schieb"){let s=t==="vorne"?i.b/100-.12:i.t/100-.1;e=Math.max(e,Math.min(3,Math.ceil(s/1.46-1e-9)))}return e}function Ud(i,e,t){let n=0,s=!1,r=[];for(let o of i){let a=Lx(e[o.typ==="fest"?"fest":"schiebbar"],o.ew*1e3,o.h*1e3);if(a==null){s=!0,r.push(`Velaris ${o.ort}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`);continue}let l=a*o.n,c=`Velaris ${o.ort} ${Ix[o.typ]}: ${o.n} \xD7 Element ${Math.round(o.ew*100)} \xD7 ${Math.round(o.h*100)} cm (${Nr[t.velLam][0]})`;if(o.typ==="schieb"){let h=Math.ceil(o.breite/7-1e-9),f=o.breite/h,p=e.schienen.x.findIndex(g=>g>=f*1e3-.5);l+=h*o.t*e.schienen.p[p],c+=` \xB7 ${o.t} Laufschiene${o.t>1?"n":""} (${h*o.t} \xD7 Schienen-Set oben/unten)`}n+=l,r.push(`${c}: ${Math.round(l).toLocaleString("de-DE")} \u20AC`)}return{preis:n,info:r.join(`
`),offen:s}}function Dx(){if(Ji)return Ji;let i=document.createElement("canvas");i.width=512,i.height=32;let e=i.getContext("2d");e.fillStyle=Nr.oak[1],e.fillRect(0,0,512,32);let t=7,n=()=>(t=(t*9301+49297)%233280)/233280;for(let s=0;s<26;s++){e.strokeStyle=n()<.6?`rgba(110,72,30,${.15+n()*.3})`:`rgba(235,200,140,${.2+n()*.2})`,e.lineWidth=.6+n()*1.6;let r=n()*32,o=.6+n()*2;e.beginPath();for(let a=0;a<=512;a+=8){let l=r+Math.sin(a*.02+s)*o;a?e.lineTo(a,l):e.moveTo(a,l)}e.stroke()}return Ji=new _n(i),Ji.colorSpace=pt,Ji.wrapS=Ji.wrapT=St,Ji}function Nd(i,e,t,n,s,r){let o=e.velLam==="oak"?new Oe({map:Dx(),roughness:.6,metalness:.05}):new Oe({color:Nr[7016][1],roughness:.5,metalness:.3}),a=.055,l=.6,c=[];for(let f of Dh(e,t)){let p=new dt,g=.06,d=.045,_=Math.floor((f.h-2*d)/a),m=new Ut(f.ew-2*d,.05,.01),u=new Ke,y=new $t().setFromAxisAngle(new L(1,0,0),l),x=new L(1,1,1),M=.0512,R=T=>(f.breite-f.ew)*(f.n>1?T/(f.n-1):.5)+f.ew/2-f.breite/2;for(let T=0;T<f.n;T++){let w=R(T),C=f.t?T%f.t:0,U=f.t?(C-(f.t-1)/2)*M:0,v=new dt;v.position.set(w,0,U),r(f.ew,d,.04,s,0,g+f.h-d/2,0,v),r(f.ew,d,.04,s,0,g+d/2,0,v);for(let D of[-1,1])r(d,f.h,.04,s,D*(f.ew/2-d/2),g+f.h/2,0,v);let b=new Ns(m,o,_);b.castShadow=!0,b.receiveShadow=!0;for(let D=0;D<_;D++)u.compose(new L(0,g+d+a/2+D*a,0),y,x),b.setMatrixAt(D,u);v.add(b),p.add(v),f.typ==="schieb"&&C>0&&c.push({el:v,zu:w,auf:R(T-C)})}if(f.typ==="schieb")for(let T=0;T<f.t;T++){let w=(T-(f.t-1)/2)*.0512;r(f.breite,.04,.049,s,0,g+f.h+.02,w,p),r(f.breite,.02,.049,s,0,g-.01+.012,w,p)}f.seite==="vorne"?p.position.set(f.x,0,t.vel?t.vel.zC:n+t.d-.12):(p.rotation.y=Math.PI/2,p.position.set((f.seite==="links"?-1:1)*(t.vel?t.vel.xC:t.w/2-.16),0,(t.vel?t.vel.z1:n+.05)+f.breite/2)),i.add(p)}let h=f=>{for(let p of c)p.el.position.x=p.zu+(p.auf-p.zu)*f};return h(e.velAuf||0),c.length?h:null}var Nr,Ld,Ix,Ji,Od=rt(()=>{Pt();Nr={7016:["Anthrazit RAL 7016","#3d4246"],oak:["Golden Oak","#b0895a"]},Ld={vorne:"velV",links:"velL",rechts:"velR"},Ix={schieb:"schiebbar",fest:"feststehend"};Ji=null});async function Nx(i){let e=await(await fetch(i)).blob(),t=crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2),n=new Date().toISOString().slice(0,10)+"/"+t+".jpg";if(!(await fetch(Fd+"/storage/v1/object/konfigurator/"+n,{method:"POST",headers:{apikey:zd,Authorization:"Bearer "+zd,"Content-Type":"image/jpeg","x-upsert":"false"},body:e})).ok)throw new Error("bild");return Fd+"/storage/v1/object/public/konfigurator/"+n}function Hd(){try{return JSON.parse(localStorage.getItem(Bd))||[]}catch{return[]}}function Vd(i){try{localStorage.setItem(Bd,JSON.stringify(i))}catch{}}async function Ox(i){let t=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)})).json();if(!t||!t.success)throw new Error("web3forms")}async function Gd(i){let e={...i.payload},t="(kein Bild)";if(i.bild)try{t=await Nx(i.bild)}catch{t="(Bild konnte nicht hochgeladen werden)"}e["Bild der Konfiguration"]=t,e.message&&(e.message=e.message.replace("{BILD}",t)),await Ox(e)}async function kd(){if(!navigator.onLine)return;let i=Hd(),e=[];for(let t of i)try{await Gd(t)}catch{e.push(t)}Vd(e)}function Wd(i){kd(),window.addEventListener("online",kd);let e=ut("abschluss"),t=()=>{ut("ab-titel").textContent=i.titel(),ut("ab-spec").textContent=i.spec(),ut("ab-bild").src=i.bild(),ut("ab-form").hidden=!1,ut("ab-danke").hidden=!0,ut("ab-fehler").hidden=!0,e.hidden=!1};ut("btn-abschluss").addEventListener("click",t);for(let s of e.querySelectorAll("[data-schliessen]"))s.addEventListener("click",()=>{e.hidden=!0});ut("ab-form").addEventListener("submit",async s=>{s.preventDefault();let r=ut("ab-name").value.trim(),o=ut("ab-tel").value.trim(),a=ut("ab-mail").value.trim(),l=ut("ab-ort").value.trim(),c=ut("ab-zeit").value,h=ut("ab-nachricht").value.trim(),f=/.+@.+\..+/.test(a),p=o.replace(/\D/g,"").length>=6,g=ut("ab-fehler");if(!r||!(p||f)||a&&!f||!ut("ab-ok").checked){g.textContent="Bitte Name, Telefon oder E-Mail angeben und der Datenschutzerkl\xE4rung zustimmen.",g.hidden=!1;return}if(ut("ab-hp").value){n();return}g.hidden=!0;let d=ut("ab-senden");d.disabled=!0,d.textContent="Wird gesendet \u2026";let _=i.preis(),m=i.spec(),u=i.preisText(_),y={access_key:Ux,botcheck:"",subject:`\u{1F9E9} Anfrage aus dem 3D-Konfigurator \u2013 ${i.titel()} \u2013 ${r}${o?" \u2013 "+o:""} \u2013 ${Uh(_.brutto)} brutto`,from_name:"Antonov Outdoor \u2013 3D-Konfigurator",...f?{replyto:a,email:a}:{},name:r,...o?{phone:o}:{},message:["KONTAKT","Name: "+r,"Telefon: "+(o||"-"),"E-Mail: "+(a||"-"),"PLZ / Ort: "+(l||"-"),"Erreichbar: "+(c||"-"),"Nachricht: "+(h||"-"),"","PRODUKT: "+i.titel(),"","KONFIGURATION",m,"","RICHTPREIS",u,"","BILD: {BILD}"].join(`
`),Quelle:"3D-Konfigurator Antonov Outdoor",Name:r,Telefon:o||"-","E-Mail":a||"-","PLZ / Ort":l||"-",Zeitpunkt:c||"-",Nachricht:h||"-",Produkt:i.titel(),Konfiguration:m,Richtpreis:u,"Ort der Konfiguration":location.protocol==="file:"||location.hostname==="localhost"?"Vorf\xFChrung am PC":"Website"},x=null;try{x=i.bild()}catch{}let M={payload:y,bild:x,zeit:new Date().toISOString()};try{await Gd(M)}catch{let T=Hd();T.push(M),Vd(T),ut("ab-offline").hidden=!1}d.disabled=!1,d.textContent="Konfiguration senden & Richtpreis anzeigen",n()});function n(){let s=i.preis();ut("ab-form").hidden=!0,ut("ab-danke").hidden=!1,ut("ab-preis").textContent=Uh(s.brutto),ut("ab-preis-netto").textContent=Uh(s.netto)+" netto zzgl. 19 % MwSt.",ut("ab-preis-text").textContent=i.preisText(s),i.nachAbschluss()}}var Ux,Bd,Fd,zd,ut,Uh,Xd=rt(()=>{Ux="b26a6983-d43b-4a05-908c-f5ba56350c48",Bd="ao_konfigurator_warteschlange",Fd="https://nrpwbbepwuauikqpcvxz.supabase.co",zd="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycHdiYmVwd3VhdWlrcXBjdnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMTA3NDIsImV4cCI6MjEwMTc4Njc0Mn0.1ds84MnzcWvSTH4XkTZuGuvU6Uc9XZKiAJzWPOYimjQ";ut=i=>document.getElementById(i),Uh=i=>Math.round(i).toLocaleString("de-DE")+" \u20AC"});var Un,Yd=rt(()=>{Un={markise:[{code:"AC420",familie:"Sunset",farbe:"#febb48"},{code:"AC423",familie:"Sunset",farbe:"#ff8f27"},{code:"AC421",familie:"Sunset",farbe:"#ffb24c"},{code:"PA425",familie:"Sunset",farbe:"#e6401f"},{code:"AC519",familie:"Beach",farbe:"#d9cab6"},{code:"AC518",familie:"Beach",farbe:"#b3bdbe"},{code:"AC512",familie:"Beach",farbe:"#7b6c64"},{code:"AC517",familie:"Beach",farbe:"#d2d8d4"},{code:"AC524",familie:"Beach",farbe:"#ac9c8a"},{code:"AC523",familie:"Beach",farbe:"#93806b"},{code:"AC521",familie:"Beach",farbe:"#c4b8a5"},{code:"AC522",familie:"Beach",farbe:"#b4a494"},{code:"PA532",familie:"Beach",farbe:"#e8e1be"},{code:"PA528",familie:"Beach",farbe:"#82796c"},{code:"PA522",familie:"Beach",farbe:"#e4e2d6"},{code:"PA524",familie:"Beach",farbe:"#bfc3b7"},{code:"AC118",familie:"Ocean",farbe:"#0859a4"},{code:"AC112",familie:"Ocean",farbe:"#385b80"},{code:"AC121",familie:"Ocean",farbe:"#55858b"},{code:"AC119",familie:"Ocean",farbe:"#132a48"},{code:"AC117",familie:"Ocean",farbe:"#395065"},{code:"AC626",familie:"Mountain",farbe:"#b1bab9"},{code:"AC630",familie:"Mountain",farbe:"#5c6767"},{code:"AC627",familie:"Mountain",farbe:"#bac3c2"},{code:"AC631",familie:"Mountain",farbe:"#3a4244"},{code:"AC632",familie:"Mountain",farbe:"#4e595c"},{code:"PA612",familie:"Mountain",farbe:"#758080"},{code:"PA617",familie:"Mountain",farbe:"#9ca29c"},{code:"PA626",familie:"Mountain",farbe:"#cdd3d0"},{code:"PA627",familie:"Mountain",farbe:"#c0c9c3"},{code:"PA630",familie:"Mountain",farbe:"#98a9ac"},{code:"PA632",familie:"Mountain",farbe:"#acb7b6"},{code:"PA633",familie:"Mountain",farbe:"#7d8889"},{code:"PA639",familie:"Mountain",farbe:"#2c3233"},{code:"PA642",familie:"Mountain",farbe:"#434e53"},{code:"PA636",familie:"Mountain",farbe:"#68736f"},{code:"PA637",familie:"Mountain",farbe:"#6d7975"},{code:"PA643",familie:"Mountain",farbe:"#363e3b"},{code:"PA645",familie:"Mountain",farbe:"#2e393b"},{code:"PA614",familie:"Mountain",farbe:"#8c9495"},{code:"PA616",familie:"Mountain",farbe:"#99a39e"},{code:"AC321",familie:"Canyon",farbe:"#e12a19"},{code:"AC323",familie:"Canyon",farbe:"#901c1d"},{code:"AC318",familie:"Canyon",farbe:"#961d1c"},{code:"AC322",familie:"Canyon",farbe:"#a72130"},{code:"AC324",familie:"Canyon",farbe:"#620f25"},{code:"AC320",familie:"Canyon",farbe:"#f06134"},{code:"AC212",familie:"Greenery",farbe:"#4a6f3e"},{code:"AC219",familie:"Greenery",farbe:"#507f49"},{code:"AC221",familie:"Greenery",farbe:"#598e82"},{code:"AC223",familie:"Greenery",farbe:"#053a31"},{code:"AC218",familie:"Greenery",farbe:"#87c846"},{code:"AC220",familie:"Greenery",farbe:"#699778"}],ezip:[{code:"T31818",name:"Uni Schwarz",farbe:"#374445",familie:"Ecole 1 %"},{code:"T31808",name:"Schwarz-Grau",farbe:"#4f5c5d",familie:"Ecole 1 %"},{code:"T30818",name:"Grau-Schwarz",farbe:"#5b696a",familie:"Ecole 1 %"},{code:"T30808",name:"Uni Grau",farbe:"#6c7b7c",familie:"Ecole 1 %"},{code:"T30812",name:"Grau-Sand",farbe:"#888e88",familie:"Ecole 1 %"},{code:"T31708",name:"Grau-Perlwei\xDF",farbe:"#98a4a0",familie:"Ecole 1 %"},{code:"T30801",name:"Grau-Wei\xDF",farbe:"#8c9798",familie:"Ecole 1 %"},{code:"T31701",name:"Wei\xDF-Perlwei\xDF",farbe:"#d8dcd7",familie:"Ecole 1 %"},{code:"T71818",name:"Uni Schwarz",farbe:"#313e3f",familie:"Serg\xE9"},{code:"T70818",name:"Grau-Schwarz",farbe:"#465254",familie:"Serg\xE9"},{code:"T71848",name:"Schwarz-Grau-Leinen",farbe:"#5e6866",familie:"Serg\xE9"},{code:"T70808",name:"Uni Grau",farbe:"#6e7c7c",familie:"Serg\xE9"},{code:"T71708",name:"Perle-Grau",farbe:"#8c9795",familie:"Serg\xE9"},{code:"T71717",name:"Uni Perle",farbe:"#bac2bb",familie:"Serg\xE9"},{code:"T70841",name:"Grau-Wei\xDF-Perle",farbe:"#939e9d",familie:"Serg\xE9"},{code:"T70801",name:"Grau-Wei\xDF",farbe:"#9ea9a8",familie:"Serg\xE9"},{code:"T70101",name:"Uni Wei\xDF",farbe:"#ebefec",familie:"Serg\xE9"},{code:"T71813",name:"Schwarz-Bronze",farbe:"#414947",familie:"Serg\xE9"},{code:"T71701",name:"Perle-Wei\xDF",farbe:"#c9cdc8",familie:"Serg\xE9"},{code:"T70141",name:"Wei\xDF-Wei\xDF-Perle",farbe:"#dde1dc",familie:"Serg\xE9"},{code:"T71313",name:"Uni Bronze",farbe:"#454b43",familie:"Serg\xE9"},{code:"T71213",name:"Sand-Bronze",farbe:"#777262",familie:"Serg\xE9"},{code:"T71812",name:"Schwarz-Sand",farbe:"#76766c",familie:"Serg\xE9"},{code:"T70812",name:"Grau-Sand",farbe:"#999789",familie:"Serg\xE9"},{code:"T71716",name:"Perle-Leinen",farbe:"#d3d2c4",familie:"Serg\xE9"},{code:"T71745",name:"Perle-Wei\xDF-Sand",farbe:"#d3d0c3",familie:"Serg\xE9"},{code:"T70826",name:"Grau-Karamell",farbe:"#9c9a88",familie:"Serg\xE9"},{code:"T71816",name:"Schwarz-Leinen",farbe:"#757e7a",familie:"Serg\xE9"},{code:"T71212",name:"Uni Sand",farbe:"#cfb393",familie:"Serg\xE9"},{code:"T71616",name:"Uni Leinen",farbe:"#ece3cc",familie:"Serg\xE9"},{code:"T71308",name:"Bronze-Grau",farbe:"#4c5552",familie:"Serg\xE9"},{code:"T71608",name:"Leinen-Grau",farbe:"#9fa99f",familie:"Serg\xE9"},{code:"T71601",name:"Leinen-Wei\xDF",farbe:"#e9e7d9",familie:"Serg\xE9"},{code:"T71111",name:"Uni Blau",farbe:"#23496c",familie:"Serg\xE9"},{code:"T70867",name:"Pazifik",farbe:"#457e93",familie:"Serg\xE9"},{code:"T70806",name:"Grau-T\xFCrkis",farbe:"#4c9cb1",familie:"Serg\xE9"},{code:"T70811",name:"Grau-Blau",farbe:"#3e5a6d",familie:"Serg\xE9"},{code:"T71203",name:"Sand-Gelb",farbe:"#d9c267",familie:"Serg\xE9"},{code:"T71622",name:"Leinen-Gr\xFCn",farbe:"#6c7f77",familie:"Serg\xE9"},{code:"T71305",name:"Bronze-Mandarine",farbe:"#8f4d44",familie:"Serg\xE9"},{code:"T70805",name:"Grau-Mandarine",farbe:"#a45e57",familie:"Serg\xE9"},{code:"T70809",name:"Grau-Orange",farbe:"#ab7a51",familie:"Serg\xE9"},{code:"T71201",name:"Sand-Wei\xDF",farbe:"#d8cebc",familie:"Serg\xE9"},{code:"T71711",name:"Perle-Marine",farbe:"#476274",familie:"Serg\xE9"}],plissee:[{name:"Hellgrau",farbe:"#bcafa6"},{name:"Grau",farbe:"#726764"},{name:"Anthrazit",farbe:"#4f484e"},{name:"Braun",farbe:"#7d6051"},{name:"Hellbeige",farbe:"#d1baa4"},{name:"Weiss",farbe:"#efdddb"},{name:"Creme",farbe:"#cebcb0"},{name:"Beige",farbe:"#d6b494"},{name:"Gelb",farbe:"#dabf79"},{name:"Orange-Rot",farbe:"#e47a46"},{name:"Hellgr\xFCn",farbe:"#6f8923"},{name:"Irish Green",farbe:"#777e64"},{name:"Himmelsblau",farbe:"#8c8ab5"},{name:"Mint",farbe:"#979ea2"}]}});var $d,qd=rt(()=>{$d={x:[1500,1600,1700,1800,1900,2e3,2100,2200,2300,2400,2500,2600,2700,2800,2900,3e3,3100,3200,3300,3400,3500,3600,3700,3800,3900,4e3,4100,4200,4300,4400,4500,4600,4700,4800,4900],y:[500,600,700,800,900,1e3],p:[[192,192,196,202,202,206,208,212,216,218,222,224,228,232,234,238,240,244,248,250,254,256,260,264,266,270,272,276,282,286,288,296,298,302,304],[206,208,212,218,218,224,228,232,234,238,240,244,248,250,254,260,260,266,270,270,276,276,280,286,286,292,296,298,302,308,312,314,320,324,328],[218,224,228,232,234,240,244,248,254,256,260,264,270,270,276,280,282,286,288,296,296,302,302,308,312,314,318,320,328,330,334,336,344,346,350],[234,240,244,248,254,256,260,266,270,272,280,282,286,292,296,302,304,308,314,318,320,328,330,336,340,346,350,356,362,366,372,378,382,388,394],[250,254,260,264,270,272,276,282,288,292,298,302,308,312,318,320,328,330,336,340,346,350,352,360,362,368,376,378,388,392,394,400,408,414,416],[260,270,276,280,286,288,296,302,304,312,318,320,328,330,336,344,346,352,356,362,366,372,378,382,388,392,398,404,410,416,420,426,432,436,442]]}});function Or(i,e,t,n){let s=i.b/100,r=i.t/100,o=n(t,s-.02);if(i.produkt==="tds"){let h=Pn.degToRad(8),f=(i.h||245)/100,p=f+r*Math.tan(h);return{w:s,d:r,slope:h,yWand:p,unter:f-.135,offUnter:-.17,offPlissee:-.135,pfX:n(e,s),spX:o}}let a=i.produkt==="sunpro",l=a?2.75:2.7,c=a?.19:.22;return{w:s,d:r,slope:0,yWand:l,unter:l-c,offUnter:-(c+.05),offPlissee:-.175,pfX:n(e,s),spX:o}}function Nh(i,e){let t=e.d/Math.cos(e.slope),n=[];if(i.dachMark==="auf"||i.dachMark==="unter")for(let s of Na(e.w,6.5))n.push({typ:i.dachMark,b:s,a:t});if(i.dachMark==="plissee")for(let s=0;s<e.spX.length-1;s++)n.push({typ:"plissee",b:e.spX[s+1]-e.spX[s]-.06,a:t-.1,x:(e.spX[s]+e.spX[s+1])/2});if(i.zipV)for(let s=0;s<e.pfX.length-1;s++){let r=e.pfX[s+1]-e.pfX[s]-.12;for(let o of Na(r,6))n.push({typ:"zip",ort:"vorne",b:o,h:e.unter})}for(let[s,r]of[[i.zipL,"links"],[i.zipR,"rechts"]])if(s)for(let o of Na(e.d-.1,6))n.push({typ:"zip",ort:r,b:o,h:e.unter-(e.slope?.15:0)});return n}function Ua(i,e,t){if(!i)return null;let n=i.x.findIndex(r=>r>=e-.5),s=i.y.findIndex(r=>r>=t-.5);return n<0||s<0?null:i.p[s][n]??null}function Qd(i,e,t){let n=0,s=0,r=!1,o=[],a={auf:"Aufdachmarkise",unter:"Unterdachmarkise",zip:"Senkrechtmarkise eZip"},l=i.filter(c=>c.typ==="plissee");if(l.length){let c=0,h=0;for(let f of l){let p=Ua($d,Math.max(f.a,1.5)*1e3,f.b*1e3);p==null?r=!0:(c+=p,h++)}h&&(n+=c+Zd,o.push(`${h} \xD7 Plissee ${Math.round(l[0].b*100)} \xD7 ${Math.round(l[0].a*100)} cm (Stoff ${t.plisseeStoff}, Profil ${Oa[t.plisseeProfil][0]}) + Bedienstab: ${Math.round(c+Zd).toLocaleString("de-DE")} \u20AC`)),r&&o.push("Plissee: Feld breiter als 1,0 m oder Tiefe \xFCber 4,9 m \u2013 auf Anfrage")}for(let c of i.filter(h=>h.typ!=="plissee")){let h,f;c.typ==="zip"?(h=Ua(e.ezip105,c.h*1e3,c.b*1e3),f="eZip 105",h==null&&(h=Ua(e.ezip125,c.h*1e3,c.b*1e3),f="eZip 125")):(h=Ua(c.typ==="auf"?e.aufdachZip:e.unterdachZip,Math.max(c.a,1.5)*1e3,Math.max(c.b,2)*1e3),f=(c.a<=4.5?"Linea ":"Solara ")+(c.typ==="auf"?"AZ":"UZ"));let p=c.typ==="zip"?`Stoff ${t.stoffZip} ${jd(t.stoffZip).name}`:`Stoff ${Jd(t.stoffDach).familie} ${t.stoffDach}`,g=c.typ==="zip"?`${Math.round(c.b*100)} \xD7 ${Math.round(c.h*100)} cm`:`${Math.round(c.b*100)} \xD7 ${Math.round(c.a*100)} cm Ausfall`;if(h==null){r=!0,o.push(`${a[c.typ]}${c.ort?" "+c.ort:""} ${g}: au\xDFerhalb der Preisliste \u2013 auf Anfrage`);continue}let d=h+kx+(c.typ==="zip"?0:Hx);n+=d,s++,o.push(`${a[c.typ]}${c.ort?" "+c.ort:""} ${f} ${g}, ${p}, inkl. Motor${c.typ==="zip"?"":" + Winkel"}: ${Math.round(d).toLocaleString("de-DE")} \u20AC`)}if(s){let c=Math.ceil(s/5);n+=c*Bx,o.push(`${c} \xD7 Funkhandsender Situo 5 io`)}return{preis:n,info:o.join(`
`),offen:r,anzahl:i.length}}function Gx(){if(ji)return ji;let i=document.createElement("canvas");i.width=8,i.height=64;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"#ffffff"),t.addColorStop(.5,"#c9c9c9"),t.addColorStop(.52,"#ffffff"),t.addColorStop(1,"#d6d6d6"),e.fillStyle=t,e.fillRect(0,0,8,64),ji=new _n(i),ji.wrapS=ji.wrapT=St,ji.colorSpace=pt,ji}function Wx(){if(Ei)return Ei;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,64);for(let t=0;t<64;t+=2)e.fillStyle="rgba(0,0,0,0.07)",e.fillRect(0,t,64,1),e.fillStyle="rgba(0,0,0,0.04)",e.fillRect(t,0,1,64);return Ei=new _n(i),Ei.wrapS=Ei.wrapT=St,Ei.colorSpace=pt,Ei.anisotropy=8,Ei}function tp(i,e,t,n,s,r){let o=Kd(Jd(e.stoffDach).farbe),a=Kd(jd(e.stoffZip).farbe,.9),l=e.ausfahren/100,c=t.d/Math.cos(t.slope),h=-t.w/2,f=-t.w/2,p=[],g={links:n+.05,rechts:n+.05};for(let u=0;u<t.pfX.length-1;u++){let y=t.pfX[u]+.06;for(let x of Na(t.pfX[u+1]-t.pfX[u]-.12,6))p.push(y+x/2),y+=x}let d=0,_=[];for(let u of Nh(e,t))if(u.typ==="auf"||u.typ==="unter"){let y=u.typ==="auf",x=y?.13:t.offUnter,M=(y?h:f)+u.b/2;y?h+=u.b:f+=u.b;let R=new dt,T=u.b/2-.06,w=t.slope?.035:0,C=t.slope?-.125:-.22,U=y?x-.06:x-.09,v=.02;Dn(ep,u.b-.012,s,!0,R).position.set(0,U,v);for(let Y of[-1,1])Dn(Xx,.006,s,!0,R).position.set(Y*(u.b/2-.003),U,v);if(y)for(let Y of[-(u.b/2-.35),u.b/2-.35])r(.05,U-w,.1,s,Y,(U+w)/2,v+.09,R),r(.1,.006,.14,s,Y,w+.003,v+.09,R);else for(let Y of[-(u.b/2-.35),u.b/2-.35])r(.06,.2,.012,s,Y,U+.08,.006,R);let b=v+.17,D=c-b+(y?.06:-.08),O=b+D/2;for(let Y of[-1,1]){let oe=Dn(qx,D,s,!1,R);oe.position.set(Y*T,x-.03,O),Y>0&&(oe.scale.x=-1),r(.054,.064,.012,s,Y*T,x,b+D+.006,R);let he=Math.max(2,Math.ceil(D/1.3)+1);for(let Fe=0;Fe<he;Fe++){let Xe=b+.12+(D-.24)*Fe/(he-1);if(y){let q=x-.03-w;r(.026,q,.05,s,Y*T,w+q/2,Xe,R),r(.085,.006,.07,s,Y*T,w+.003,Xe,R)}else{let q=C-(x+.03);r(.07,Math.max(.012,q),.05,s,Y*T,x+.03+q/2,Xe,R)}}}let H=2*T-.02,$=D-.08,k=b-.01,j=new Ge(new Ut(H,.003,$),o);j.castShadow=!0,j.receiveShadow=!0,R.add(j),j.material.map.repeat.set(H/.05,$/.05);let B=Dn(Yx,2*T+.03,s,!0,R);B.position.y=x-.023,_.push(Y=>{let oe=Math.max(.01,$*Y);j.scale.z=oe/$,j.position.set(0,x,k+oe/2),j.visible=Y>.005,B.position.z=k+oe-.02}),R.position.set(M,t.yWand,n),R.rotation.x=t.slope,i.add(R)}else if(u.typ==="plissee"){let y=new Oe({color:Oa[e.plisseeProfil][1],metalness:.3,roughness:.45}),x=Gx().clone();x.needsUpdate=!0,x.repeat.set(1,u.a/.04);let M=new Oe({color:new ze(Vx(e.plisseeStoff).farbe),map:x,roughness:.8,metalness:.15,side:_t}),R=new dt,T=t.offPlissee;r(u.b,.03,.04,y,0,T,.08,R);let w=u.a-.1,C=new Ge(new Ut(u.b-.01,.004,w),M);C.receiveShadow=!0,R.add(C);let U=r(u.b,.025,.035,y,0,T,.1,R);_.push(v=>{let b=Math.max(.01,w*v);C.scale.z=b/w,C.material.map.repeat.y=Math.max(1,b/.04),C.position.set(0,T,.1+b/2),C.visible=v>.005,U.position.z=.1+b}),R.position.set(u.x,t.yWand,n),R.rotation.x=t.slope,i.add(R)}else{let y=new dt,x=u.h,M=.105;r(u.b,M,M,s,0,x-M/2,0,y);for(let C of[-1,1])r(.045,x-M,.04,s,C*(u.b/2-.0225),(x-M)/2,0,y);let R=x-M-.06,T=new Ge(new Ut(u.b-.09,R,.003),a);T.castShadow=!0,y.add(T);let w=r(u.b-.09,.04,.035,s,0,x-M,0,y);_.push(C=>{let U=Math.max(.01,R*C);T.scale.y=U/R,T.position.y=x-M-U/2,T.visible=C>.005,w.position.y=x-M-U}),u.ort==="vorne"?y.position.set(p[d++],0,n+t.d+.1):(y.rotation.y=Math.PI/2,y.position.set((u.ort==="links"?-1:1)*(t.w/2+.09),0,g[u.ort]+u.b/2),g[u.ort]+=u.b),i.add(y)}let m=u=>_.forEach(y=>y(u));return m(l),m}var Oa,kx,Bx,Hx,Zd,Na,Jd,jd,Vx,ji,Ei,Kd,ep,Xx,Yx,qx,np=rt(()=>{Pt();La();Yd();qd();Oa={weiss:["Wei\xDF",15790575],alu:["Alu",12172735],anthrazit:["Anthrazit",3685954],schwarz:["Schwarz",1908513]},kx=304,Bx=114,Hx=180,Zd=30,Na=(i,e)=>{let t=Math.max(1,Math.ceil(i/e-1e-9));return Array(t).fill(i/t)},Jd=i=>Un.markise.find(e=>e.code===i)||Un.markise[0],jd=i=>Un.ezip.find(e=>e.code===i)||Un.ezip[0],Vx=i=>Un.plissee.find(e=>e.name===i)||Un.plissee[0];ji=null;Ei=null;Kd=(i,e=.94,t=[40,40])=>{let n=Wx().clone();return n.needsUpdate=!0,n.repeat.set(...t),new Oe({color:new ze(i),map:n,roughness:.92,transparent:!0,opacity:e,side:_t})},ep=[[0,0],[.125,0],...Bn([.125,0],[.182,0],[.18,.075],8),...Bn([.18,.075],[.178,.152],[.11,.152],8),[0,.152]],Xx=ep.map(([i,e])=>[i*1.05-.004,e*1.07-.005]),Yx=[[0,0],[.035,0],...Bn([.035,0],[.066,0],[.066,.023],5),...Bn([.066,.023],[.066,.046],[.035,.046],5),[0,.046]],qx=[[-.025,0],[.025,0],[.025,.024],[.01,.024],[.01,.036],[.025,.036],[.025,.06],[-.025,.06]]});var sp,ip=rt(()=>{sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAFdCAMAAAAaF8uUAAAAQlBMVEVMaXH///////////////////////////////////////////////////////////////////////////////////83sySiAAAAFXRSTlMAF93R9UQM/AEDXTi1g1AopJJwxOrej5ttAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAgAElEQVR42u1dh3bjuA61Oqle//9XlwDYScmyo2TirHTOezuTUWSZl+gX4ONxX/d1X/d1X/d1X/f1ey724Pci/CY8OL8R+UUXf0xrcyPyi/CYt+1G5BfhUVRVtaXDjcgvwWNIt2q7Efk1/lW5CDQ28b8suRH5FQYd8QBElhuRX4BHLfG4EfkdeDQ5QnEj8qsMSJ7fiPySAH1EB6u77cgvMujV1j56+G9FfylvRP6pQUd3dwDp6NIbkd9g0Kv+8UgAi7pXMsLYvTz/wKAnGRmQBwfdlYs/1LfW+ocGXRsQ/iBABA4SkZHfMvLzCqvDtV8HBKRHW4J5X/C1RsZvRH7egAhXtypAO4l4RJgTxAYDd5CRW2v9KwNCASJY9RmsyYyRImitG5Gfw4OxlgyINBZkRGbUXp2UkdvX+nkDkqqwHAQj3ybxX2YhcmutH8Ojx0xJXqglF1VDihCZjcjta/1wjbDWIoBGZFsBEAuR6XEj8iN4SIM+WiqJPTLpZukQBRG5vd+fAIRSvIttI+iHszYpEpHuRuTHaoS5w/uBn5JV12F8fiPyQ6QfqhHOjg8FVt0AYmmtG5HvxqMMDYiM3KWbFSJyL9s3AsK0AWEe21oUcytDzeKc3TLyM6xRJyK0/kXE7pVlV2R9N1Bu93VxRIhr3Adr7LpZMjZpiULX34h8W0S4ooBE9jxl4EfX80oWvD2/EXl8T01KphTHyPoKq175pkWHkCbHcl9XpnhljTDKqmZUV288Z1jJyI3Idxl0PyL0jEjne8MSkfVG5CoY5GVYoztOEwUeqecO34hcLha+PZg43y3qVmEceGuti+3GPI7TXAyDlVJkezEjerl1iMht2a+sDCKNJF/HkQzIfpuU5D0EPq4un9xa64I4UETf0EBI5J5oROjlgQkRz440FL683hjK+A1hEAdStF2pitOxH4a6qQ4Ryd9CBB5zI+JRfTYFBxgQ/mBPRApXvvM4QFpGXmsMFTtivIP8oNlgzVaSEVWifYIIoNcmjzgirzSGovG5DU9QGezLpO/a/FxKimQkXHisaxGTi58nR6ai6PUnJxKwt7iiqxUHlsPc1mdWRqz8iogMPiI9xZXTufVlSv39xf53/joisnsQE4kMI/XHSftK2smuHnqInLIKXDoI259EpHyd+awMiDbj/DRXVyEyBfFIbfjyT5/BJ9Pb+8cQEWv7cgeNNiDvLIXSWnOAyOQQgo/UVdLq9vct1H+fH22/iAhGIJvDTdxJcbnLaFNNQ1FgjLd79S1PXaFPtlmI/J3eXkyav9itzJg0IDsGOKq8OAti9pb7ZmTAhvb8yHESDy876j2xMgR/BhG5WV+TekVu9+2yMfiD/w9iGYfJLBpqp1jqt36SocQHtRvlBVYQ0zz/S1qL1DlZxtP+vCa3W7/h7v/JD9kZaJnU4CedtCDBq3LGu2QtYV7qXL7xWsDNy0zo/AlELGV8PtnKqRjrqHrubfNt8H4EWsYWKJniDcyInMVRFXtmKBkrmT8bB3QC8qGmmQR/ABG5KsoyniR/KC7caFvpQi82cRQLl16ChJ/MVkQyrouakcq717LmfabEYy6lJSpEb2/1J7xfGw/8RqcIUkrPp7ZFKLQ6YsQlHR3m+5CFFoNTj3QkGql2/AWB6yTfdGsHhAceK+YSyE7SD8+i0DopPM4iIlMmtgERGKyG187R5C62Oisocdj7yZKa1jMejfgeNVO4wr/OwDmSgEzqSR+OiC6dimstWolI8YRoq1Mmnb3indX5QdQTQxrVacPRV0IkDP4iqqy+5/uK16pX6exmDYgHTtfEZAHjaiLBB+d+JbmAhCOVPNstLOftpExGRwK0EZbUE2uD6+JTxJUV65iHRRSqe3m/IHIlnRIPcJ+ZKZAJQB6fj4i0s+LrwHdqhaaRXPSgnPfcgIgdLdk90gHbcKIGcwrm0chNoCU63cJoZPbCTltdpfVDZuiluULzBdh+MiIiS0GuUgtOzVbTfBhSCAftAcqA2F4phA7bIlefch8AiYDIEKp3fVLcF0E2UUUjRg/yPpU6tU3M6xGjnqyQzsZ/JHlFT4bJ+EyeI1cyAjuz3M1QyQjEMSC9yhOK1R2Nl1DTj8bjPAB6Tr51UWZEmhcIPlRsXttJZQlILe+SvsP6gVVd3dg/4IKhtqZuZfzabbJHPhz9dKxcux4YjKB/UAuOysnV7SL7EQL4SmvoaTW5ylDBDSk6URU6u8wzaHp76DJwXn8aImqdhCODPlOrupVn6f4uURlxBvw4Rl6EcWLhSIsLQvWgzQz1Gx5qEVjwiAM2m/LXnMswYy5dbSr9XmX9PxYRSvBiZP5orFCAqcxWPPmrPajeUVjwAPC5EpXy68j5EaWSSI4lnk5P+J43N8nnGmfXfaPNznFqD+KzGk6kp1RVteyisWOGId1LZxvyrtWWhn4OBsvS6hK3V+osvaj8JEE4ViLO1HPLwNmgPMuWWmmbgd6x+iAZUbyPCl2rlhSUn00JzTCF4Hg3Y94c8TQpJ6ns8pkpYzRKF3l8PkCD7RJPybUSi95HcDP7gQfU7Y9BRLqHG+gR4b7H806RdHysnRNCQlRSTSbVCvwSw3QvQJrtpglfaHhHt20cHpzveBle2rn8LES04Zvl5D0/x6R8TAqx2BEnRAZmW95Ky1NRCUp4XvCDdameVf9Ojo3Pesb2e07crKUst3+K1tJtmR1FCXNYkxA7vCNErKDdwdH1uohKit5OI+lAEqgzBv3MwQrrsBeqSln0kiwUi1afgIh2Q+SoKr5QVBFQnsiBrWapKPTEvpFzX6fo3H2XKLWipzSQ3xq0XLGXJpVv+6CK93KtupMVqn59A7x2lNSWKteoEwT1DTk/qSQdJA26U0RnfNFxufin3mh5lfLdgqwI10l6di7hRvXDPS+W5kMEMi4b4H/9SAJt8GSUIf3fIhZyJJnl/mrd0UQVFlqP0jE4MgfvFjWomaPoahosx/nJavFBnUNyZvxWUuIT/XZENB4qxpBtmDHqiGKiiX8uzHwG14A0uS7+wk3cjaAp5cttgRJaMpkzyFEtc8NJe52aNrufe5FuSVB2/AREOJOqVX052TkeD9sgY0EVhnxWA5cmdy6GVFjC1IyJaymkm2V5WCgcZTOuypGtlrFPTpgU2gwUFkXjR57GNpXKc/5iRHTCXYu/THvs+CJcVxiqMQ0rTFphUXaV++vkFNGxvDfMi0aDGnzWcR5Ky7LsOVJ4+1rvRyIRtcvZLx9tw2jL2OqYxDot95N+zaKcJT9jqxWWF67of9aVowcOFS97EI7KMFwkKHnW9Ul5qL2oGCiDnPgIlahjwlTJzRl4A5/zGyY4M9pJm5V2k+c9HiSaMEZUXq0T4EnvBmOAIVoJbKVFB4XEmi7LVbCi3LJKcUGrdJmLku8rLy2qaR8y7GWJJmIIKZ6SgTyTIw7g3ct/OS+YwYVvIiezagXFpNd6lBmHlPq6baG/ZNyocTdRD71QsMRl30rh0HDkS25pL/hBNtbIPuUx4rsuBm5TEnHR2x3Fy6QLRgdmcEohFPWUZf8oF+w4lp0vvpI6kx0mmohpEwziU+R3nLwbr8xK3gMb0K1ScKzdSL06TS8M06b+gZgvS9dgdTyql2SpJfR/FVk88j2wwKPfng/N1GbegOcfHs4jXrdMkqGZuzbEA9b0mcnTQW/rZVdMKLzjjRagC7m2HPi/bE4oGYgJyqSf0twDJZv6MuYPy2JkLGcIY5/2+q6YlGSxcfqpzY2y/BdMCLGWczcta5VX2g50Nj8Abcp6yOLXeLhhgKaeFPs5pmbhQ5eq5YZdOfY6O5smklfVdG21Ge2Fu1e4XqS84sG371CR/01koANEFBaynz7/cUYdFgY2Y0JxmzALj/mYZW67jp6Iq/AZU+170xWEW5Urdwq2fpeg2bYkhFacJ/24mHckdzgTVp6CeRYiEmRjdpiOjnteGTT+DeuUCjVSEdDb2GeoKDpPmjyOOFjKle+9VNGkCAfxsXJgORbbcox9KYMRCxAZFcIWL+Y29QQFrDy340YTWGTuOReKEJFGhV3c2m2Vmf+Rtsu/QESXmSrt2dj+kKbz1IeTSVT2xCdJ9/DULtrkicJRkOUgLzdfQAUx1aZrVJZOMyIog/B+1k39Grle7VQkJm4U9+kZ/jzGhRn5jtaqyVSl2VSL7ADrfh4Rh0adr2maLlNtCJtMNRRMx3jIvTQ550VJnR0z5yogr7TlqNaxKNmDm7IK7vK8doNB/AMvm7lVMyGUO5xOFMwzbp884g/NNjWeHUTStptFAErRyOPHEdGl/rQT79EMSQLfn7OAJXegsAwe3sbDECNiznHJQDgqFYiLfNUsLYdZdzJK1dp2vRMMkgiViRAUjYd0h7OulrcqE+3zsElmdzmXmtWCnya21w8jovHIBksorAHGil7VHAXpqrTunbqC2zGMztH+ejGHEA6n9RYWtdCSK3Y/BYNMBYPShouZEOPqWvkqbeeG2YX9Iaz3HyBCThtjfsCY/ggiugoFb40XROsRllxxhIes2Faz9xUhvvdJW+RWFe1quVVpN8iMu7klqTPTW66DQelPqfQBBtRDMWa55w5nY5Fort7iG3aqcR4g4geMPzaV49nEPCxDb8cG3eARTraqfaIp6RqdykVD3va2qsI/sWFazcnqFijZVMhgUAoKocOLOVs3N8Mi0sOJRGQKOIw53tSdSR2a8OT7EXk25RPnIx3PeGGathw0i0Chw3WvUBE1neVWKeHgXlhSKf1TWXDQ/0EenntWHp6bzNNaedqrrdPI7FN4Z8j45+eOGjNa67v72zUe6d7wXOmRtPstBwetFkJj2O4Vul9J3ea2cNQJs3Yp3mKMiwmbrWCQlNcM/pgVDMq4sZE5D3OvLFTWbnoYaPTV+REIWka+93x3jcduO4a097ujNBiMdal2TR4rPUXUTKke8ieEY2r4g1n+HGR7C8gj6nhonfoUF2KSKV8jKFlbN04wKJXXUAs+qYsfPKh32RJC4xWp5F6fkxH6mss3ZuMNq8Q5p8OjXh69BPQUELk5Xuh4WM+NCYf9ecwNS8i1EuqM6J+CH9SIha68PPwyFYP92rjikDbXwbwWsFymh7VHIL7+hIeInqlAmb7E7zu7Wu9/LYaMP9yhL9Ohc8EhIylZiGNclJllOSY7eSiFw5Efr04oLZcGBASun5fV0WDCxxUWJbFcdaayXnVnmXnSfsukCo5MNoameE44P8eMzA9C/Avx0JDjAnelqRH2qi1kD49ikYW9iTF+NJq1nG3hgBCQWboKl3DoMhOzB4BMqoInBgSOvucFEToEc4y7RC4RozhmXsaYA2e6OAs6oipOItLn33iauJGPUrd7cHBJFsnEVI1iexRLObaikvQEvnsmhYgTunWzQ8CGW7qKUQg45ptXKHQAIS4rAlcvLhxyoRcZDJq4kSqwzbRUXoySirifaluYgdtJNO5PCfyO8xQ1S3TRrCsOLa6VpoWooGreGyNSr6qTb7c3WoaAueUzpSI2cAw50K9qO2bf2iwKCECY9EvuoOFVdlV6kTnaa6iD9HDa9sp1FoZkOju2pfguRHw8OFk42dkNakvVCJe9It+8qTEiu4UOBrFBZi1EvtSl4+qQcVntW9piWOMSYtewENtpSldvoRVXyLhemDXTBUcrRslbWQRuT1PfLUSu1VoGDyLjykZiciMq6TJNkQEJXjpI3xsXDlJE1gI23CrtYSmkdDyvKhMK/jHpiUM2IKXzMKyaiGc1IpPlL/QiuELc9hhVerjz08PileqEi3z0YaUnhsi1p/d58kHOqwJDNkwyEpAdoqJ4L/nVooUOFvdyraCDyZg9NdleqkxJRkTgZTmZyGoB4FQw2IsYxc16QSayKVmYHhaZyDSw8rVQvuNJmr1OS1xJqMORwtq/whl40nnNp0Jmbbdl2S+iqwkMMCchxIOhrpJerq7JDna6SgG2Op7XQI7wpAfEa0C2zbb4kM5SDyOFVDb1NOauP7wCqU7StPUkVIxRutaLMXPVHXICFIXIhWfF6Vwg4iHeQDqvYk2Kh6pryGJud9RhSRLGIroqqZfcqck6ISAG5G5YQsl3nB07rKGXZW3pFeNJ5tCyYQMMswHEMt1kJh5Wehj+ZmJMlTIDRVcQrYidG1t7WXnEwQMcl0mRmGaOochkNvaaxPlLFDDmXRC0UhVQrbVk8wwPRzggoeUU0SurbKssSLb6EkJmqGu8RbMSZBoNlys0UsGR2TEKEPJmJ25E/MbaNT7HiFyT+nX0FcPQg4rSslFSZv+rfQHRtJ7ey12TXahbe63H3os5hHfSTKsCDIzLVDB9C5MCUjWL4uAqCQke9lBRh9aOMn28KJq9UkvCn+q5xQWk/zJBrphoUkFAKzpsEVKIXJKM1/Ihajbiy9aZ7CPOCqUGJGu62nYCJmrUC9UVfle91pQf6UgJuDGHLRxA+LGT7yr4GcvUBUTe6QSguGqJ3gC6tsLLYvK5QiJnXzcPY+alQLLIrSpufN6GckEy3uCRgOLIJNMkp8jDIs2ley6W2h5u3YmFlkPEHImfrTLaTNqDvnTWmEOnCFzFI1XRB3lZmVvg1S0kzvPIa8YLpv2nXoZFmHmVXvRcr2V1rbxQXv0x5YkW4cvJeDv+wCiL4PDbuiFMFJDEBoNzyfxzCjtEruoyE5CLb1RwvyYreNSVu3q+ulYC0j5KD5DOJVajykkc7aj5XMQXJ67Q4oMClXmbwiItCsTyTib5GSlQbcuvpX71GMuRQ4VU8sGWnjHOgjgi6bpwj9BAKxiI4dIRFLlKCQckD123SsQcmesslYFLow9FanBEgQ3I5OEvPnFKNcmS+FwO85qo9IM1AErdLSxKYdtuJuPGuqNMcqWI4fzxzYiYLmfFTROfndVlLDPI+M4Ei0m+LLPqJ4Nq6KC1tsIESziCgDyYDcOtgYA+IJ3V7QZObpe5wtZwR6PhTcb3qirfTECGxQocLQZLbrncJxD5QjJe8+EqWj6Ujjgceh/GD04bbSYOL0bNH4EnOpl1cqv08pFb5YUlZkNDLFFRvn8HECuitAN8NzLhJLOTkwXwK7tI4HICR/wPS8jKP5+BQ+7qFxKNztjdSlOh2AuPM9OMuZoX7oeARZA8TNwOHBQOFgiH1HpU7IInxwDxC126tGLDKwmRrgQJX3ZoHJVEFkWU5hOL7EVnwibpc5VlTd/s3kOEm0PSzEuyV+BQKp7UpnSaVisEVOSqHbcKNX1fBj4+GWgKFdWI3xggRCxxIsp1aniAhgoTFa2FdgkFOT1SJe0My5a1mn7K6D9JdgoQrbXeSjQaPOglp+JpRBppzF1UQEkh4GLpgMolVxG7tm/tHBQA5g8AoCf1lMiVbW94plIIiGAl6NvoE+vSUVWU17JCIXiekCCZgieVJE5dcHgsXucPk4W5U4dbkdLRXYlvjd3dLNbma7jKjAm43mQX0soOAQeXlvtw7qBsb8l8BUlPMqwfPQPbBmSh7+xqIZ2utIWDWTkZSWuxb8LXswqOTmkeAkeJSXkWEBuRd8cgixRMNzzp9d6nJuUyXZA4ThOGgIFbZfvBemUePsHXuk96NyggASDt6NpxL06koJ06EU3QXidGKXMZ1q9b5NL5YaSfnpYQY5hfRMQaS51Pw6uqyp6RAIRTOwTEXVi45CrySrcwZmexZgS/kk4VMQ8QJ/2uW0g8O+58pnotHg3r46Cozh9sXjrNRSEZqV87clTNhoHJkO8d0EtNVKIIEPTXeJl1Xzgqn/BjpWidJxFdWs6rCwCxHuc6chQxqWKYzubbnC+JvS7t714qcHzFVEsZeWWOpundqLry8d55ybQu4pTOWXu55Bq4loOK6JXPhgstBxYLrZSv0EE0TUumayISYj+OO3bcy2jlWOrSw7jMHtkO0XBcrxeKtAqR4vyJQ4kqJzVvj4kggz52dgtBEAKK/8MOHB0Rp10Tsxx+dXfDgmxrd2kxFpGQIL5XPkHuqKrG8r3I7+ocr+E5KNtLQ09kwH22YGX6Dbry3ZiSqVGxfn+NVejAspMjHMgwYRHL4ebo8Ul4lISpiDE7l7W4NUUvo9XazyIJMsLxYFbk+sr1kueEWz4/WR4x/PbiXfHgXNdV7RCQ+YSF0RYfFbL5qoq5ob2gaQ1UMmltMocPCNLB7aPEmLTjbvJdPovZE57Sc6oqkJFsOD8dVSJypjwiv4+qD741Nwu4Oqnl6YhtyJ0+AIaBttOBU3O/l59RMXuy7Ljw/XvyWHG2Bs0aYvbApkkDMvnxuPjIdrOf5YS6Kn/i8q3Pi4doa3nRjW0FIs/LI1xmy/P5vSwxo+E8aWUVSIMQUKQX7QxKNOagpPC8eARf6X4JS+Cf2elLiH04CDNW2uMY8egdL8NRjcOL2xcnoD1HROGx9u+IBzOhlN9C4JCknWX27vAjQB3ake3VY0lJQMwQZc+oG0BUaaXaS+YTKo229G9oq6V/vLxeePxx/qR7hMGUvpyqrewtOJTQkxrOZH8N2+WBirpE4OR6TVF2aOectOL0MQaR+kQMS8dDc+Y+MLts376JBlIX5re0O2OIyFHBiqlq0uunbXuLbfhQVggIjZmzy00M6xz+fDg7UmTuEExnKGDUhnBVJ9wJ2unDjuPxZ3Dk0UF0J5dMIsJ28ejEDTvDB589G2xmZdyqVfKhIt6rcav8FBmLpDRyTNE+HGKVGn9a22PJQ0B0jj6afGd2Fv8dNPDX2ubxdgVQLvhu94gcDN68o65s6tSGdUWvCigIRA6bZwlTueR3Cu1ROe3oPELlmRTx4hEDRP2pd+lcY10y13KU9ZhvX4FDEGPfFA+jkvKdrKTsrW7f4HIJJdxWB/01kMPu7LSquiPMHTop+hxJPx4JFAOYcIhQUA8ZuzRWlGfWY95XVV/VVt7Ui3mfXnjQafbkxCml8DHYcgNyn7AwD74hx/vdRoPcY5QazBbp3DiNKB4gTra3UiwKK+T4kqoisWubC+aPUhtTHaNP1UDWfQtxMxRcjViwhEPl3nXeo+d+Zt0YXz0cQGUhPWJV2Y+mucpJlwaAVE52xGomZPiY9Z0A0PZ1l/7NNHg4LDeNpH6RjZAN71bfO9Moaxly66vbXRosCMhlc/Om7bg75ccqT1g8+9Z9TCgh5FU5Rkj2mLwbcpgLXd2ruOxDGxljJ3JPU/JusoRU1mqXTlQIaOkFj34VjQBDWNWzktnL+fXe7ItItjd1PtGKSrcvobE7mPzdGe3isEfvnCARaC0Ff/+oms4ZrBdtIs/6xGqFsRpu3ZlLYTnE8BytUcneHFPYCEG2V8ZB3G7dndbtq8IhP/zCjkGxKH06eqvf8McXCHUKEBZp6FCAzI3T8PqQ5n71yLsssByl25AuuYX24awI2aqKRHKK6MA8VSXcgS+rqkr5E5e2cEL7e/NgIRX0CkAod6RHJdnfH+bpcT0HUYCmIsBKznn1KFjUvOQQrgWRdXQH/XJZWDFVOydS1y6cnmL6FTiUeC4X99RGhOErImipLBkCOkhUdrt+SnRMQ62y2FCOuWeKGWR10ggql2w/qGThlqqOU66qdrHkIpYA0wtUFXTEU+/x5YBcO8BfAwLKarBcIdBC6ea1t2BzZeOStKYhJOkA5d9OC2NBlttnSRJkFkkrllz8UurQ960KXn4TII/HdwDihYB4kPpQ1G1WWQcWVK786ziBxRKMbgc0Hb0pmQ2yVXB1Ps8A0snk4tficdd+iPiNaLwL+whAmjlzSVNqJ4t+ydaZw27m/a7z4JUKYwnGhcJ/rkbo0mObyc71h4CAbWmrr0WAdneCAISVHwMIZChshwkthBjCVNLYfjGTR4xFyDd/twqb4jKXmc2ZkvV4lfhQg/EhjEpmr4Fk9QFR/QVfFo6q2j4NkNlqRJYpc3nys5gLirRk+AJctOCPq3Um0SZvmekWHHBqqnvSjteGO2SYDf24OiStvrRa2siG1Ms1lgMe0XbqcBTKXH4KIKpOCMa3MG35qqkC9QycsrGGzhdO32NWPF7pkqOJJiT1J28dFvWC86xKP1L/spNr+CS1PJP30wAhdd8jYVkfeqebKkg14TUU3WIN1FMjYMbZb7n1BjPRWXXO1Awz0cEpUF1kx6nmIcooHwiIrBPKAqnazA7bMptqlTQE5jnSClyP2FpGyeTidkKrtvPqeDaepqvHyNZXwCH7vwtPZT0+QUJy2UTOLe3iN1XkYC/UcSowNzerbFC0Kyw4UzZdnThaRWoLCKhGnWhhXo/hNXhsWK9T2wsB4R8DiMujVYBUtuaQRiPV01ofkKiqRzPZQg8EnXo1LIk7jFzT0YWz4JSxh7uulhAwHj2Xs/I+DpC28CcsFJVLDnf+K+wFDsxj2BcmZiXp2NFgIm9xsr2aCmmdGSJrJV1uu72XGA9d8+DGhnwEIJTE8M50UhIyTv7yqHM4WxqhS/mosqjHLPfH78EtnHrMK7fH3GbySOrIhYBU1KjEuUs7+hxAgnKNlpB8IA9s7LKgJ5/a8RMzGqFQbfhWx/7aOswQ0VljtTtK6dEEiosAoYK5fcLZxwESGaOmVojKu6K+N2+Va+HlMRGT7AhAw12a8W2VO0h08+fMydEBi52quQIQPLzdKQ/9CUD0SVoESC3PntwmmorrNrS2c2FOL4DJx0vl4YZ31zQ7l1nDe52O5isACUYdfaQN2QWke2gJkdFjLRwreQynrb1E8kvPxaWZiG3q2/lKtezLdn93+EJ1BSCVdnUffxOQ2QKk1g0EMsSzB7zIubhDyQwoMFPPB0WcetAkwTQhIFCkF7i9QIzow2J2AEj7e4+1fwJIrQSjsABBzhGSN5bcAyXHucZ63Cce4pVX7jnpws53Xeb0pYlyI/96HOK4uk8k5DMB2aKAlDA3lc4DgvFGuOC2uViFmR/UpHxGoWNg5zVtCLxgaE0sLwgMwdWNnp74VyTEMh0CkF4CoiYLrzQSIxHHC2ZBmVfOYFUTQWdZ07YAABmfSURBVBvneI/KMBzl5CYeSsjrnVBjs8Mt+DNeFuIQACKHOOKMB65nFS+pZ+Zh6g4escZLdeaKvEetoGBeKfovi6mslyqF+kjj/wkgYvP1lA8aVveQNz2Cte6CSfmVmqHrn7lCE3ktPnsASJ6up1GRYf5uX/PfAqS2ARFxCPXauIO3KfJmXJ756IxrhTMJHjrRKO7BYQS4evakpbClTQzZzZyZSod4HB2l/AcBqTQgVQQP+zwV69g0+0CcPtGg4JNh7OUe2drQgISXNrZPJUXkSZbDEwz+NCCHp06q81R6dRCnPZVdWhS0RQjIY5/9bjMXBxFkLgeoLL06q2lvFngICPtLgBzPJlKH3MCxad5oUByFVGJHdHBMSQwQGkctUamFSxBDRQ4DbNV0078tIVUUkKdTQchclM6xadqizKOZkvUMEP00nOkqoh4x1jLXdqWyBm4V5CrvHl/6hwCZPUBOThyUAQgcqJJ7/vABIFN0kLJ1olGZNJ04ziW3+W8t0wy89n8gIbNv1E9PSZVVD23mbYXzgoREUBFmZRyzrJ9N9+iQ7xu3PxiHICBb9RIenplfXUbwO4DIQw7k5yciEFzMwQ+TN6zDA6T6m4C803xE47AJTyMnbwJizAqe3VQYp29Yd+3bHwWk/sLZWFytybhcAYgUFs1NxREwVCeInRH0pwGpH2/OcIRfz8UDB5o/+HVA6DUrLSJJujc68Y/msmpZMfwCIGB/SdlXL3pZh6Mh5dE39IKR6PCPGvWLAGHjdRJiTIfOSsaiwxuQtyXkVUBs06HJ9U1krMJfAaT/BkDmKwFhynRA7uvhdfjegJwCpL4SEN1LgQOZKToMUtE3IIeAkAt6FSDU6iOPTZJHjC1edHgD8oOAaE4SylySxnzzvwVIbQAJZ8a8C8h2HSA4+bMiKok+k9Sd3vpnAal+IyDoXVX0bM5kdmv6PwDS/1JAHuhdVThSRqXMXNf3r5ZwLwWkuBKQIVemQ43Mbm2zHgHkU4lyPiDVVwEpvkFC3AQKFXKc97wBeQ5IdSUgDGYMaeLxGBRGgmxv+zcAqX4rIDo6xMRiWBixACn/FCDbbwVER4eTiQ4t2twtIT8NiM69YwJFRoemMBJIyHJLyDcDQuePqATK7BVGIhXDvwLIF9ze+fu8LL3m8rmlFx0GXtbnq6ztagm5GhBRX1cBCFfg6GPU/jAg2+9VWVYAolzf8e8D8nttyMMKQHRhRKYD/lZL2+cAYgIQFbovnEba3oA8NerXA/KwAhBO44FVYeQPqaxvA2S7HhBmBSDq4yiBckvIv1BZXgJFhu6YQPnDgFzlZVXfAcjDSaDUhll6A/IckCvrIWECBdC2aoc3ICcA+RYJYWwxCZSCZnpgd+mfA6T6DEBUfwIEIIY2x25A/hUgOjpcuIlL+scNyD8ExLS2meiQ+4OUP3o80yd5WSY6pASKCt3/CiCbA0jx670sOzqcTe1QcB/+DCCf5fbaKQHsT9Ch+9+TkOJqCfkmleWV12sJTvPnbEjxGUZdHkKryuvILIXH3oD8O0BEJ3trosMGAVnn/I96Wb+2hBuZyp03KjoUs4jyvzOV9OMAeVitbdL1NUOlbgnx8n4/A8hgldc7c5zTLSGhhDQ/AMjDtLYx6fr+WUC2r0rIjwCiW3Pnh33Q0g3IP1JZpnaI5XW+qLGlNyAHRr34TkDE8xZTXi8+UEI4HFbPrcsDxOmgYvJWdv7iAcmheDi/z5kGJNFDMOHH+GbyGfKKf4B7KfIinpQw6pM+DSD2RY/4TXiwH0i/H7NOHr6EdF/bxGYspj6TkbwufPgY6TH8VYjwxL/Kno6rKEvSxuJs1BoBqUvrptL5FbwS8TP4cWn9CP9IgIhfl928PCmt3y8lDOKnYJCFhJTu+3ivp38XPrEsk/ALSBTqYRiSiYbhzWUy4KkYbeRx/Fedb5QGF8VTufrDmmXqD+aeLHN/Jwt/knkPXK0HitutO+lcb/iZHL7sPXr3weF7WA8Uh2PAtbnfJg9eM8uW5tcYFi5nAhxM8b78+rYHv/tB787K+x5AenVIunV5R6laf3jn2p4+Z/PmvFdfvY7gid3+2wH5v12/CpB6+99fX/brLnV6k+K++uHxYeM27usHZYTfF+f3Priv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv+7qv//v1kyznX8epVqf6Pi2vv3DH29VqyaBXJ9izJ5/Inn4vduql2e6tT59xdoFe2iJRrvtzNvw37Az6DK5Zzk++JWdf4XDQLwMPnJ/5sJ9aG9EN2c3dXB5StOZ5Hg4oY3RHr9+rqHu46oNrbvxvAetRDvU0totgObfjVA8JrNvOJw7iE5ODlRANB13X7fGq8MOSYhrHBTjV49g1CfM/TAyAEI/okmdkOfr6M78KEGiaODr5DgYZ4bQWdnRAs25BknMsXuQEwgoN3ZLb56vnWdfsbFxqLWn50TtNu8xDkI5kbu0P26p0Krj/Ydj59rRvi/pJp2tIjrjaVS6+GztsZcvVAOK9OyxAdI+rdXZ9dQyI+HPT5hbtWv5O1TZRRIDpmudHTE9YpTzOzYU23GmFr21/mvhf1vPgJLcc5nGw4yUUXzhfh6sAoYOaq/0uKASkOvr2HiDlsrqtFhU1gTitJvbTYIXGCj5D3LcIBQJqC/4inlqNScRWECD54VvvASL6sWYBR44QCN0oPmxZ6cO2ZbDxl8L+hOAL0ppHzqP+QiPnmlcHD5SA5NWuWnMAIUPpXHDIY+83KDk7tljF+ooB1JNg08pnNvW44iqlRYgIASL2eLP/Tt22xk+2Txb4Olve1oV6i6HvxLaBH842IqQZ0/KJiAiNkBdXAQKathnFuzRHy42A7H4o3JEftLG2ZgZ+fDJMl8OGzYSV1j6zWAKWzBkuexd4wAoQOoTtFUCgNQwU1DoNjGm+LOyiekGxGa0nSvV7eLQs9RK3nF2DB4z9yODb7YsIAQJ7Kt3Rkz4gXjesAsT9oYXHiHtTuDPMeP0UZ5QAlXg3334hINjBMe5FEAjIHJ7aXcP5hts4IPTMxBviw+oUXmRJ7KPDYMMuhxKCR8X0VwlIh31boCrz4WD/w96pwiOXT0tIvishYuERjyVivaFzulngX0fGI9syr/Y1fBwQYaYBj7XmETUotucIhmyxjw6D774VR84DGP6svKoJRHS3piUTqnLd9dvIQozzRvvxhA15BRDcE9ADGw3zGJ5VlAfWmQCZJvjV+OaMGnXQCGLF12bHmVYvwy1ExmOLDWFDflWnFfkH2Jif5tV6oJDA6I+7reJfAARPjRBPL/cVJiDie4ESEDz1a23i79RtvmfIYAAB4bEbL07ut4SZD7g07MifeWb2XxhFWFUwmn7XJbEBQRcw76OO5LuAyME8S3m0BUtYRff0bQJkfAzwT1HDHgMEljvfAVBLJA721beIg8CX7cDlJwnqrhIQMOY0mX4Qru+6byFgucEBiO/HrwAyhUedx88Z7mKAUMw6RgGZfFVCQfATn4nBFA84ZNpxH9KdPAXqwOqioJBBZiAnW05AzzuLphIj9VZFcyhnAOnjegVBrp9HXtXmqA2uHcN5R5GGqRPx27DZW8afDgO0DJNQI2m1ayQI9vG6rIl6GJ0bEM9XKUCYNHnhUJC3JYT0yrM5PAwGibp6QQMilX4diTd8QCgnlz8bzkC5C1tE4B3j/qWMU5qrALEWirN2b6uq5WYsMHlfBAS/T74Vz7N3vXuQrXQ2R4htMAEYLnNMQlqpoZ8lL4SHb4Jgeez0joRT1uSioBA3vqpB4HcW8+8OAJEWLsx7vQuI+FBw+5/uL5lT6u2ArZZnEgqtl26RiD0AhKF6zJ/vZt9O05PaSLmM3qsqrkwrGl3J9gJOAwgNrhLWv/Hd+3cBga9eP/8+pDbGGCAUleZBKj4AhGOwdSLFQerQnL0uII+cFGBlTa4SEBjTKUSC2a/R8kNAVGTluUVvAsIo6BvOAFJUlV0AsAAhvRG4nhFApn3X3nst4TlZaSKK/aKWu70yazI6025Q/KIpRhsQVYhonQzSm4DAjOn8sMrkqJvc2qQ2IOTq+I6QDwh5S9Wp1WOZI7jkDYS+LXhCtih90ecdct9O7qQYVWDIHta396KCNwEpzlhZY5CLOCAi5dVC7rdw32lyLAHY5ipPkxOr58eUjCqHkUTlGMtfvp9W9AWYiy0UiXFcQEjxuw7ZCUBigk2u0ilA6LvvACIVaeUo0lBCxA6sTgJSu142fZqfHwHbsp574rm0olh952Fk9brngGAsayu3twGZz+blCJB6BxBy13LIULI9QMibzc4DMtkOWhkpi5w2Sq9lTTyQInk0DxD4++o6mm8D0p0HxE2EyOSi9ffZmyMbAlIAIOVpQEZH3CiA9dJwa7WuVw0BhKpKHnivXSxRxtHc+D4nZMyNh/ZW6kRVY04CsjqA9J4fzEc3Yr8YkCH1PR5UKNV4pYC0QSwF9cM1CapzHiAPGbFPRmM8LVDtq6zuPZXlA0KFO5OM9sXvKyornrMSaiy/KiikfEMRcxvCFQJA3JcRbgfux1kb1bcqhl8y6n2wibG2p8MHv2IoFHK+be8ZdakDnJCJdlPLLyEGyzwJj1sLPxlOyz2674f7USfC3gWk2KpzqVLGfLfXB0SVulRYEwEkJv77BsvzQMGzdsOa7OqgsI6RottQq4cqS+9HadjPABJVWc1+nT4sO9gbNAKIKgaPxNoNASnT55l+eW94J1YOLQEjr+KiUjoJQsb3UhSew60AYX5eUO/HN22IDLia06kTk/ePAUIHTan9FJAcYvt+LyRYt0BPUAlAP4/Ftu7XyFgjUaLtkY9wxTaHlTpxE2vSArwJSJC+eaJEHBseAkIlc0WeiwAyP6EouzcGYWBtsUuiO/drZCw9mjiHS0+qRfbZUj6eAiJzKEhnfJcGBGImPo09+1q00rYTEs/z4DeT9LEAEKprPE9mibdpI6Ikaze1sprjdUNkrSOY4sx0z1b5gaFRyrDQK56K/XaBKjtmPe2lLqISIs8rpHxlyMuiRRxPFKi2KsLSVJVDZgKEq0rpsFPybO+CCrJjaHckBHMoKoP0dk29Q2LgsxJu6Sf3yE8cI2keTMVPRLHKvd9pIFIpTpRwY90A6DfLahQ9fLqSjDXyMtpoVnKsEvdB6nCMHShSVJSKfy918grJIXc91j1AaDkJiC5knbTHbRX6yTteujJkINlVlV8lIGVWHUSYMm3DTgCCGgJDlHcBoU97QqNBAxqs7S4gWNMUhj1s2KFg/VjzS6JYu1M53SpiPV7agFBjJXPvcCIyjF4ut9opVOKmgR3+LiCSS3hMlENr6oYru4DItBMY9inSFgSvWx11izEMAOM7hGuWBOzp6xoQluM6dsTF3AWEyQzSMFTvAULROpCp2a7EJlDn9RKh+4AQowkA7AJAGFm9vNilkjIeKT66mQWhOmlPM3bVMRTHZUeMA+1MMAEy7rAaifNRvCkhOnE+xsnWwEiPk613AdHkuTnSyYgpKUF+j5Ktgdk9Sp9gn1kIr7JsJ4vB5/LuT2oQ5GZMpwBRzSPpuxKiMx5ZozuVnT7pft0i53h4BapY4JuvkUgB2hGgK6crA0iYBn/k7JCPwooqP5XxOZ1WPE6xkRE3anTfqNvnNb4NiCJErlNiTwOgLqpkzCU1jz0pWbg7uZXvFCnu9NgCtBT2VAD6XN6tiMeuQSOHaCumK0vp43MHGluezHeJZHsDvni1vdsfgk+ogfi0pdR4rjvaRC86dp+BFWbPK56BqxSNpbHeCf15Y8OtORZMt7RNBxl1cgrTNb+qlE6b/ZkDTYkaLUZIjd938siwV+8Dgk2fGR063+K0APhZMtQt9couzU7T51EXHsY30TyZ+LcWm0nzpWsGShKVQzFlmKMQvVUHxlrsEYibqwsbEE6RtbmTzcHc92GXLtY33wcE6ytTrjqVx2kS4xyglxp+sHZl1LkFR+fonfpqBxA8m3iVLfH5gp+WVbJVXbQecvZsAYXKuyxrIvZ6XjUnyc2lKvUcSoimMx4C8sRrx/4+GByQ62Z+hAcMy97ggPVI9UbJc+bDki51TofDj63a4ul0FewHuTAonLYzp/DK8KIz9cDt8BVk1jZ+Uil7sBNtqhCGiGkXqX2OXtrWYgAJZ7vpxsN34uPBaA3xYfWY2ofyrUs38OcDaGgJr2pAYI9GVDyGU9TNuq97PZpB1Eqao99iTDy42P3npi/6p0aQQ45oKOpJDFZYlnaqi2F/RI/wv/pCDxk4uoPtzwJK4MPEp7X4YezUPCDxWDE5p76mUnjxYcWPq+cTBdOr+NfmLz35Z/UZnJtW9eumWb0wrIy9PtXs+XyuwztOf+pDn5x9fvrY+yPO1IHjrx3/xe6zwu7rvu7rvu7rvu7rvu7rvu7rvu7rvu7rvj7sUuM8I9miWKqHcX44p997qEppPY6TXodZJXb8ivbn/AU03CHhj++dzh+b3P7k420GC+PPM/8ffYn352Js/ixm+M+NYINzl4zW1H7tBCatYwlB/GMRXKpEgxUMeTVNM+CpBZG1ZDhIvxcf381NEi8qAYckKWZ4xT7hQSqe3oL+f4CZzvyTpUQsQTPhJHAoSmc4w95erjbS3FMAZ4LLlimrRCsHwcuxPrPdJlGt2VgnYVkDqr0zzgbHEfpjH1LsgPFWY1UebxGFR+8W+7SAKoWvwPgH44HV73QU9IARyqCCUON06I6Rfusip/ZY3rXyEnPEU/XnZVaA5EurfwgLmnZD8KwS6uG5OM+im8ZFMBkWnxkqFrdfYJC7OIVC0CXEy/pT9jPz2e2Sw1cYHvxj8RCUjaqlkixoGYHO2tuNSlFA1CASZnG/OjO0TXfim4VhSVOLZc38+bAN/HAe6IdlI9DJO4+IXcI7dQ39lMMt1eTcstjEzKFvj0eV/nY8BLW858ojEl8TOFV2t+sYU1lq/hSTc8iBadTJ6eMPxW4hQOS/42KK4d/e3ESguQHHUZX7BMsKmcHsYTM0thbMkrolmZxp5UwAMqrJ5/j3foX3Yx+KR45nOjDjcEFrmzWicEdCBm+ntyET2pEQhPwhTlZwxjEABaw3bh7e09mcGOSRCgFgNikVpNq+ZbH/Bg8r1quYPT9uP9Z8CQYLiCXQ670rIYnXax0BpPYbMxiibUh2yITtXb+KBpPW9kgNamlzqXG5rSEXd/mRXpx+ohmBBUkjk9XEvlVKGWYuXAaI7Igyzci1rR3tKbJqiBHqtNH3uxiO5jDPXoKZA+Ib1J8HCA4ZrqNTZPRgTAKEXwUIfeYs7Y+wDpHpIuDEGVbfuEWHsIkVH7UQL4GCEk+ePxGQMdrrg41pkw3IZRJCd9KHogHbm266yFua+Ewx5K0nivm3+OdfgJBNHwcIDlyJs2WFGpczEr4BkGJTwxmmvcnCvRzM5DsGbmPRbAHi9bqVnwgILM1ee7PoaZN+7cUqi/jNMzYjC+chumq4U1CVQp5g2e2GbA8BmT8QkHpn4BSOcS2koh+vBQRxkDOs1yp+Dh7g0CFmZbaz00G8NCBtONxo/UCjDit2MJReWl52MSC4lBKQvTkM8DScha5FJa5V6eUDQNiOK/D7AZl3AdHW5XIJcQEZdlZ7RPcL36PfBySJAIKxZZ1/YmB4BIiRkO8FpHkOyFkJscpXdf6JAkI2ZIhbVWFDeg3IcqWXxeCJEpD8wIZMyoZ0BzaEKaM+mbcRycXqM5OLONWw3vOyZFcRvxoQbKmVFnvfyyInCf8Q97KoTqO9rHQUZ67CGa9tm35s+h3TGN1eHCKTFxCBZZEC1RcAaaw4JHrcBLYN6zgk6ghiX64Vh1TmmOS8Eh3Sn1mgwlRWEovUjbcJSxIC0vmz9V4BRH0oNP3vRuoqmC/WnROJO+0RACDtoIvFGcw++tRiSJHHW7/nSo0wxg7ywl/qQNe8kMtqTLstX/aOb9C5LBGXZuFELPQ61DAKCgwZC375M0Uktmbi27b625ZpMBVpSMPpMWezvaWdyq23cLiS2N7Llupbijw6v2EyHhoCYlGQuu2qUUv/pB4SDLeCeoh1ChJ8d9cXk9UG9gYgHE4uNmDihvAGO2A9ZKvtj/dncbCjeggOEMySD67gVq3dzA8Vw7Fyq3pr1RorSfW4Kdj5TyuGWOoT85KcwURC1tLm4RwqjRVDzp3ZnP3DOQkaKobmLAsvl4W7bPpcpTXnlRilZNXUgXUwPdxT4bHKrVRCkwYCcgSIHbEVojw+cXsaKdTU59KqqSdj5RwcwnDiWWc+n+HcjmzYKeFKukv9uYgI6c+nRmmIZlq3dXY4hgx0yNKXiiMnbogMXd0FxBwcg4wW3x4JeKulVj4bDAzKR5910ppboNNfzJVpnWPrF39s/Pi5tBNYkhantsx9P4+C1ZS3/rgesbSCyJaNgtnYtbB+TbTsFAEkR8oWhWxAhlvH8NnJBJPA267u5wkGBgFRyLulnOFY8rHrYVYD3D27vKwAEBFgXTSR7J8gUvbtuhnqII+UsIdJEgcFdN5qSGu9xACxBzxX6TIPjxBKoSSnTN24LnWUuTh0ilspyJXzEDAX22DUvp1N+TREgDhbz900dXMNzFkWod+ykti3c3yki+BCzR4FGAaWmauugbcb/VV6uCAlTvh0Fk0dsLKANxS3NCFFuO4K77O5oCp/LpvUoZPHkw4OQZ19gdb99Mfxp/s0oC9Ncvmk9pD97oqD9oy9NhK3P+RwtBv+++FAFMZfamG5B5jc133d133d133d19PrPyxXc4V6gcmUAAAAAElFTkSuQmCC"});var op,rp=rt(()=>{op="data:image/png;base64,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"});var vv=Np(()=>{Pt();Zf();ed();td();id();sd();cd();fd();xd();La();Rd();Id();Od();Xd();np();ip();rp();var S={produkt:"tds",montage:"wand",b:600,t:350,eind:"klar",blech:"standard",farbe:"7016",seiteL:!1,seiteR:!1,front:!1,h:245,festVHalb:!1,easyRail:!1,treppe:!1,treppeH:100,schiebL:null,schiebR:null,festV:!1,verkWand:"hinten",dachMark:"keine",zipV:!1,zipL:!1,zipR:!1,spWinkel:45,spSeite:!1,spRegen:!1,spTahoma:!1,spFb:!1,velV:"keine",velL:"keine",velR:"keine",velLam:"7016",velAuf:0,glasAuf:0,velSpuren:"2",stoffDach:"AC626",stoffZip:"T30808",plisseeStoff:"Hellgrau",plisseeProfil:"anthrazit",ausfahren:85,boden:"platten",led:!1,ledAnz:0,ledBand:0,frontArt:"sg23",abend:!1,masse:!0,preis:!1},Oh=()=>({an:!1,art:"zaun",richt:"waagerecht",abst:"35",farbe:"7016"});S.verk={hinten:Oh(),links:Oh(),rechts:Oh()};var ts={hinten:"R\xFCckseite",links:"Links",rechts:"Rechts"};for(let[i,e]of[["verkAn","an"],["verkArt","art"],["verkRicht","richt"],["verkAbstand","abst"],["verkFarbe","farbe"]])Object.defineProperty(S,i,{get:()=>S.verk[S.verkWand][e],set:t=>{S.verk[S.verkWand][e]=t}});var is={tds:{name:"Terrassendach TDS",b:[200,1400],t:[100,500],h:[200,350],eind:["klar","matt","poly"]},skyview:{name:"Flachdach SkyView",b:[200,1400],t:[150,500],eind:["klar","matt","poly"]},carport:{name:"Carport Flat Line",b:[300,1400],t:[200,700],eind:[]},sunpro:{name:"Lamellendach SunPro Plus",b:[150,700],t:[200,400],eind:[]}},Xr={7016:["Anthrazit",3685954],9006:["Wei\xDFaluminium",10856614],9007:["Graualuminium",9211016],9010:["Reinwei\xDF",15855073]},ap={sunpro:"Drehbare Kammerlamellen",klar:"VSG-Glas klar",matt:"VSG-Glas opal",poly:"Polycarbonat 16 mm",standard:"Trapezblech",vlies:"Trapezblech + Antikondensvlies"},ka=document.getElementById("viewer"),on=new Yo({antialias:!0,preserveDrawingBuffer:!0}),Ba=window.matchMedia("(max-width: 760px)").matches||window.matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820;on.setPixelRatio(Math.min(window.devicePixelRatio,Ba?1.5:2));on.shadowMap.enabled=!0;on.shadowMap.type=nh;on.toneMapping=Ar;on.outputColorSpace=pt;ka.appendChild(on.domElement);var Wa=new ba;Wa.domElement.className="labels";ka.appendChild(Wa.domElement);var Nt=new $o,lp=new Ds(on),Yr={tag:Ch(!1),abend:Ch(!0)},Gh={tag:lp.fromEquirectangular(Yr.tag).texture,abend:lp.fromEquirectangular(Yr.abend).texture};Nt.environment=Gh.tag;var rn=new Vt(40,1,.1,800),Zt=new Ma(rn,on.domElement);Zt.enableDamping=!0;Zt.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN};Zt.maxPolarAngle=Math.PI*.495;Zt.minDistance=3;Zt.maxDistance=60;var Wh=new la(14675967,9079938,.8);Nt.add(Wh);var Nn=new ua(16774368,2.6);Nn.position.set(9,14,12);Nn.castShadow=!0;Nn.shadow.mapSize.set(Ba?1536:4096,Ba?1536:4096);Nn.shadow.bias=-4e-4;Nn.shadow.normalBias=.02;Object.assign(Nn.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60});Nt.add(Nn,Nn.target);var si=null,Fr=null;if(!Ba){let i=new Gt(1,1,{type:yn,samples:4});si=new Aa(on,i),si.addPass(new Ra(Nt,rn)),Fr=new Dr(Nt,rn,1,1),Fr.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1.2,scale:1.1,samples:16}),Fr.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Fr.blendIntensity=.85,si.addPass(Fr),si.addPass(new Ia)}function gp(){si?si.render():on.render(Nt,rn)}function Fa(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new _n(s);return r.colorSpace=pt,n&&(r.wrapS=r.wrapT=St,r.repeat.set(n[0],n[1])),r.anisotropy=8,r}var Fh={rasen:Fa(256,256,(i,e,t)=>{i.fillStyle="#5f8f3e",i.fillRect(0,0,e,t);for(let n=0;n<4e3;n++)i.fillStyle=`hsl(${85+Math.random()*25},${35+Math.random()*25}%,${26+Math.random()*18}%)`,i.fillRect(Math.random()*e,Math.random()*t,1.5,3)},[40,40]),platten:Fa(512,512,(i,e,t)=>{let s=e/4;for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=70+Math.random()*6;i.fillStyle=`hsl(35,6%,${a}%)`,i.fillRect(r*s,o*s,s,s);for(let l=0;l<300;l++)i.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,i.fillRect(r*s+Math.random()*s,o*s+Math.random()*s,2,2)}i.strokeStyle="#8d8a84",i.lineWidth=3;for(let r=0;r<=4;r++)i.beginPath(),i.moveTo(r*s,0),i.lineTo(r*s,t),i.stroke(),i.beginPath(),i.moveTo(0,r*s),i.lineTo(e,r*s),i.stroke()}),pflaster:Fa(512,512,(i,e,t)=>{for(let r=0;r<t/32;r++)for(let o=-1;o<e/64+1;o++){let a=50+Math.random()*10,l=o*64+r%2*64/2,c=r*32;i.fillStyle="#3d3b38",i.fillRect(l,c,64,32);let h=i.createLinearGradient(l,c,l,c+32);h.addColorStop(0,`hsl(30,5%,${a+6}%)`),h.addColorStop(.15,`hsl(30,4%,${a}%)`),h.addColorStop(1,`hsl(30,4%,${a-7}%)`),i.fillStyle=h,i.fillRect(l+2,c+2,60,28);for(let f=0;f<40;f++)i.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,i.fillRect(l+2+Math.random()*58,c+2+Math.random()*26,1.5,1.5)}}),putz:Fa(256,256,(i,e,t)=>{i.fillStyle="#f2f0eb",i.fillRect(0,0,e,t);for(let n=0;n<6e3;n++)i.fillStyle=`rgba(0,0,0,${Math.random()*.035})`,i.fillRect(Math.random()*e,Math.random()*t,1,1)},[6,3])};Nt.background=Yr.tag;Nt.backgroundRotation=new fn(0,2.2,0);Nt.environmentRotation=new fn(0,2.2,0);Nt.fog=new qo(13623791,50,190);var Xh=pd(),_p=md(),Ce={rahmen:new vn({color:Xr[S.farbe][1],metalness:.25,roughness:.48,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.9}),nut:new Oe({color:1908770,roughness:.7}),pvc:new Oe({color:2895665,roughness:.55}),stufe:new Oe({color:12894650,roughness:.85}),stufeKante:new Oe({color:10394516,roughness:.9}),sockelStein:new Oe({color:9144708,roughness:.95}),dichtung:new Oe({color:1118739,roughness:.9}),dielen:new Oe({map:_p.map,roughness:.75}),klar:new vn({color:13625066,transparent:!0,opacity:.16,roughness:.02,metalness:0,ior:1.52,specularIntensity:1,side:_t,depthWrite:!1,envMapIntensity:2.2}),glasKante:new Oe({color:7314574,transparent:!0,opacity:.55,roughness:.1}),matt:new vn({color:16119282,transparent:!0,opacity:.86,roughness:.75,side:_t,depthWrite:!1}),poly:new vn({color:15660020,transparent:!0,opacity:.6,roughness:.35,side:_t,depthWrite:!1}),wandglas:new vn({color:13625066,transparent:!0,opacity:.13,roughness:.02,ior:1.52,side:_t,depthWrite:!1,envMapIntensity:2.4}),rasen:new Oe({map:Fh.rasen,roughness:1}),platten:new Oe({map:Xh.map,roughnessMap:Xh.rough,roughness:.8}),pflaster:new Oe({map:Fh.pflaster,roughness:.95}),putz:new Oe({map:Fh.putz,roughness:.95}),dach:new Oe({color:3882820,roughness:.8}),fensterRahmen:new Oe({color:3817026,roughness:.5,metalness:.2}),fensterGlas:new vn({color:2371898,roughness:.05,metalness:.1,envMapIntensity:2}),stoff:new Oe({color:7238261,roughness:.95}),kissen:new Oe({color:14208440,roughness:.95}),holz:new Oe({color:9071178,roughness:.7}),hecke:_d(),stamm:new Oe({color:5981750,roughness:1}),laub:new Oe({color:5209910,roughness:1}),paneel:new Oe({color:Xr[7016][1],metalness:.3,roughness:.5}),fuge:new Oe({color:1842720,roughness:1}),blech:new Oe({color:6449778,metalness:.6,roughness:.32,side:_t}),vlies:new Oe({color:15658214,emissive:3815734,roughness:1,side:_t}),led:new Oe({color:16777215,emissive:16773584,emissiveIntensity:0})};Ce.glas=()=>Ce[S.eind]||Ce.klar;function we(i,e,t,n,s=0,r=0,o=0,a){let l=Math.min(i,e,t),c=l>=.012&&!n.transparent,h=new Ge(c?new Ea(i,e,t,2,Math.min(.005,l*.22)):new Ut(i,e,t),n);return h.position.set(s,r,o),h.castShadow=!0,h.receiveShadow=!0,a&&a.add(h),h}var Gr=new dt;Nt.add(Gr);Gr.add(dd());var Kx=new Oe({map:new aa().load(op,i=>{i.colorSpace=pt,i.anisotropy=8}),transparent:!0,opacity:.75,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function cp(i,e,t,n,s){let r=new Ge(new zn(s,s*580/664),Kx);r.rotation.x=-Math.PI/2,r.position.set(e,t,n),r.receiveShadow=!0,r.renderOrder=1,i.add(r)}function Jx(i){return gd(i,we,S.b/100,ns()?Xa():null)}function jx(i){let e=new dt,t=i/2+7;for(let s of[-1,1])we(1.1,1.8,22,Ce.hecke,s*t,.9,9,e);Ce.hecke.map.repeat.set(10,1);let n=(s,r,o)=>{let a=new Ge(new Qn(.15*o,.2*o,2.4*o,8),Ce.stamm);a.position.set(s,1.2*o,r),a.castShadow=!0,e.add(a);let l=new Ge(new na(1.7*o,1),Ce.laub);l.position.set(s,3.4*o,r),l.castShadow=!0,e.add(l)};return e}function jh(i,e,t,n){let s=Lh[i][e],r=t*10,o=n*10,a=s.b.findIndex(h=>h>=r),l=s.t.findIndex(h=>h>=o);a<0&&(a=s.b.length-1),l<0&&(l=s.t.length-1);let c=Td[i]?.[e==="poly"?"poly":"glas"]?.[s.b[a]]||null;return{preis:s.p[l][a],sparren:c?c[0]:null,stuetzen:c?c[1]:null}}var hp=1600,Qx=7;function ev(){let i=Math.max(1,Math.ceil(S.b/100/Qx-1e-9)),t=(S.produkt==="carport"?Object.values(S.verk).some(n=>n.an):S.seiteL||S.seiteR||S.front||S.festV||S.schiebL||S.schiebR||[S.velV,S.velL,S.velR].some(n=>n!=="keine")||S.produkt==="tds"&&(S.verk.links.an||S.verk.rechts.an))?1:0;return{dach:i,extra:t,tage:i+t,preis:(i+t)*hp,info:`${i} Tag${i>1?"e":""} Dach${t?" + 1 Tag "+(S.produkt==="carport"?"Verkleidung":"Verglasung/Seitenelemente"):""} \xE0 ${hp.toLocaleString("de-DE")} \u20AC`}}var xp=73;function Qh(i,e,t){if(!i)return null;let n=i.x.findIndex(r=>r>=e-.5),s=i.y.findIndex(r=>r>=t-.5);return n<0||s<0?null:i.p[s][n]??null}function tv(){let i=S.t/100;if(S.produkt==="tds"){let n=S.h/100,s=n+i*Math.tan(Pn.degToRad(8));return{seiteB:S.t,seiteH:(n-.135-$s-.06)*100,seiteH2:(s-.13-.06)*100,frontH:(n-.22)*100,seiteRechtH:(n-.135-$s-.06)*100}}let e=S.produkt==="sunpro"?nn.H:2.7,t=S.produkt==="sunpro"?nn.fh:.22;return{seiteB:S.t-14,seiteH:(e-t-.06)*100,seiteH2:(e-t-.06)*100,frontH:(e-t-.1)*100,seiteRechtH:(e-t-.06)*100}}function up(i,e,t,n){let s=n?[["s-1hs","schr\xE4g mit Quersprosse"],["s-1vs1hs","schr\xE4g, 1 senkr. + 1 waag. Sprosse"],["s-2vs1hs","schr\xE4g, 2 senkr. + 1 waag. Sprosse"],["s-3vs1hs","schr\xE4g, 3 senkr. + 1 waag. Sprosse"]]:[["os","ohne Sprosse"],["1vs","1 Sprosse"],["2vs","2 Sprossen"],["3vs","3 Sprossen"]];for(let[r,o]of s){let a=Qh(Da.fr23[r],i*10,e*10);if(a!=null)return{rahmen:a,glas:i*(e+t)/2/1e4*xp,name:o}}return null}var zr={sg23:{name:"Glas-Schiebewand SG23 rahmenlos (ESG 10 mm)",kurz:"rahmenlos",var:[["3-2",2],["3-3",3],["3-4",4],["5-5",5],["3-6",6]]},sc23:{name:"Rahmen-Schiebeanlage SC23 (Alu-Rahmen, VSG 6 mm)",kurz:"mit Rahmen",var:[["2-2",2],["3-3",3],["2-4",4],["3-6",6]]}};function Ha(i,e,t=S.frontArt){let n=zr[t],s=Math.ceil(i/650),r=i/s;for(let[o,a]of n.var){let l=Qh(Da[t][o],r*10,e*10);if(l!=null)return{preis:l*s,fluegel:a*s,teile:s,schienen:+o.split("-")[0]}}return null}var ns=()=>S.produkt==="tds"&&S.treppe;function Xa(){let i=S.b/100,e=S.treppeH/100,t=Math.max(1,Math.round(e/.175)),n=e/t,s=Math.min(1,i*.4),r=i/2-.07,o=-i/2,a=r-s,l=(a-o)/t;return{w:i,H:e,n:t,steig:n,podest:s,xS:o,xE:a,xR:r,auftritt:l,linie:h=>.06+Math.min(e,Math.max(n,n*(1+(h-o)/l))),tuerX:r-s/2}}function nv(i,e,t){let n=Xa(),s=e-.05;for(let r=0;r<n.n;r++){let o=n.xS+n.auftritt*r,a=.06+n.steig*(r+1);we(n.xR-o,n.steig,s,Ce.stufe,(o+n.xR)/2,a-n.steig/2,t+s/2,i),we(.03,.012,s,Ce.stufeKante,o+.015,a-.006,t+s/2,i)}}function vp(){let i=S.t/100,e=S.b/100,t=S.montage==="frei",n=t?3:0,s=t?n+.075:n+.005,r=n+i-.035;return{zA:s,zE:r,L:r-s,x:e/2-.03,hoch:S.h/100+i*Math.tan(Pn.degToRad(8))-.19}}function Ya(){let i=S.b/100,e=S.t/100,t=S.produkt,n=S.montage==="frei",s=n?3:0,r,o,a,l=null,c,h;if(t==="sunpro"){let g=Ki(S,Zi);o=nn.pf,a=s+e-o/2,g.frei&&(l=s+o/2),r=g.frei?g.gesamt>=6?[-(i/2-o/2),0,i/2-o/2]:[-(i/2-o/2),i/2-o/2]:Array.from({length:g.gesamt},(d,_)=>-i/2+o/2+(i-o)*(g.gesamt>1?_/(g.gesamt-1):.5)),c=h=nn.H-nn.fh}else{let g=jh(t,S.eind,S.b,S.t);r=Hn(g?.stuetzen||Math.max(2,Math.ceil(i/4)+1),i),t==="tds"?(o=.11,a=s+e+.02,n&&(l=s+.02),c=S.h/100-.135,h=c-$s):(o=.12,a=s+e-.02,n&&(l=s+.04),c=h=2.7-.22)}let f=[];for(let g=0;g<r.length-1;g++)f.push({x:(r[g]+r[g+1])/2,b:r[g+1]-r[g]-o});let p=Math.max(...r.map(Math.abs))+o/2;return{felder:f,pb:o,xA:p,xC:p-o/2,zC:a,zPf:a+o/2,z1:l!=null?l+o/2:s+.045,z2:a-o/2,hF:c,hS:h,wand:l==null?s:null}}var $s=.15;function Va(){return S.produkt!=="tds"?[]:[["links",S.velL!=="keine"||S.zipL||S.schiebL,S.seiteL],["rechts",S.velR!=="keine"||S.zipR||S.schiebR,S.seiteR]].filter(([,i,e])=>i&&!e).map(([i])=>i)}function iv(i,e,t){for(let[n,s]of[["s-os","ohne Sprosse"],["s-1vs","1 Sprosse"],["s-2vs","2 Sprossen"],["s-3vs","3 Sprossen"]]){let r=Qh(Da.fr23[n],i*10,e*10);if(r!=null)return{rahmen:r,glas:i*(e+t)/2/1e4*xp,name:s}}return null}function yp(){let i=S.produkt==="sunpro",e=i?Ki(S,Zi):null,t=S.produkt==="carport"?S.blech:S.eind,n=i?{preis:e.preis??0,sparren:3,stuetzen:e.front}:jh(S.produkt,t,S.b,S.t),s=n.preis*(S.montage==="frei"&&S.produkt==="tds"||S.montage==="frei"&&S.produkt==="skyview"?Ur.freistehend:1),r=i?Cd(S,Zi):null,o=ev(),a=o.preis,l=null;if(S.produkt==="tds"&&(S.verk.links.an||S.verk.rechts.an)){let _=vp(),m=[];for(let u of["links","rechts"])if(S.verk[u].an){let y=[.03,_.L-.03],x=qs(y);m.push({name:ts[u],c:S.verk[u],L:_.L,extra:x.length,stuetzen:[...y,...x].sort((M,R)=>M-R)})}l=mp(m,_.hoch)}if(S.produkt==="carport"&&Object.values(S.verk).some(_=>_.an)){let _=S.b/100,m=S.t/100,u=[],y=(x,M,R)=>{let T=qs(R);return{name:ts[x],c:S.verk[x],L:M,extra:T.length,stuetzen:[...R,...T].sort((w,C)=>w-C)}};for(let x of Object.keys(ts))S.verk[x].an&&u.push(y(x,x==="hinten"?_:m,Zh(x==="hinten"?"hinten":"seite",_,m)));l=mp(u,2.45-.22-.05)}let c=null,h=Va();if(S.produkt!=="carport"&&(S.seiteL||S.seiteR||S.front||S.festV||S.schiebL||S.schiebR||h.length)){let _=tv(),m=[],u=0,y=!1;if(h.length){let C=$s*100,U=C+(_.seiteH2-_.seiteH),v=iv(_.seiteB,U,C);v?(u+=h.length*(v.rahmen+v.glas),m.push(`${h.length} \xD7 Keil-Festverglasung FR23 schr\xE4g ${v.name} (${h.join(" + ")}, ${Math.round(_.seiteB)} \xD7 ${Math.round(U)}/${Math.round(C)} cm) inkl. VSG 8 mm klar \u2013 automatisch \xFCber Seitenelement`)):(y=!0,m.push("Keil-Festverglasung: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage"))}let x=(S.seiteL?1:0)+(S.seiteR?1:0);if(x){let C=up(_.seiteB,_.seiteH,_.seiteH2,S.produkt==="tds");C?(u+=x*(C.rahmen+C.glas),m.push(`${x} \xD7 Festverglasung FR23 ${C.name} (${Math.round(_.seiteB)} \xD7 ${Math.round(_.seiteH)} cm) inkl. VSG 8 mm klar`)):(y=!0,m.push(`${x} \xD7 Festverglasung FR23: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}let M=Ya(),R=M.felder.length,T=C=>R>1?` Feld ${C+1}/${R}`:"";S.front&&M.felder.forEach((C,U)=>{let v=Math.round(C.b*100),b=Ha(v,_.frontH);b?(u+=b.preis,m.push(`${zr[S.frontArt].name} vorne${T(U)} \xB7 ${b.teile>1?b.teile+" Anlagen \xE0 ":""}${b.fluegel/b.teile} Fl\xFCgel, ${b.schienen}-gleisig (${v} \xD7 ${Math.round(_.frontH)} cm)`)):(y=!0,m.push(`${zr[S.frontArt].name} vorne${T(U)} (${v} cm): Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))});let w=Math.round((M.z2-M.z1)*100);for(let[C,U]of[["links",S.schiebL],["rechts",S.schiebR]])if(U){let v=Ha(w,_.seiteRechtH,U);v?(u+=v.preis,m.push(`${zr[U].name} ${C} \xB7 ${v.fluegel} Fl\xFCgel, ${v.schienen}-gleisig (${w} \xD7 ${Math.round(_.seiteRechtH)} cm)`)):(y=!0,m.push(`${zr[U].name} ${C}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}S.festV&&S.easyRail?(y=!0,m.push("Glasgel\xE4nder Easy Rail vorne (ESG/TVG 17,8 mm, Handlauf) \u2013 Preis nach Aufma\xDF")):S.festV&&M.felder.forEach((C,U)=>{let v=S.festVHalb?Math.round(_.frontH/2):Math.round(_.frontH),b=Math.round(C.b*100),D=up(b,v,v,!1);D?(u+=D.rahmen+D.glas,m.push(`Festverglasung FR23 vorne${S.festVHalb?" (halbe H\xF6he)":""}${T(U)} ${D.name} (${b} \xD7 ${v} cm) inkl. VSG 8 mm klar`)):(y=!0,m.push(`Festverglasung vorne${T(U)}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}),c={preis:u,info:m.join(`
`),offen:y}}let f=null;if(S.produkt!=="carport"&&(S.dachMark!=="keine"&&S.produkt!=="sunpro"||S.zipV||S.zipL||S.zipR)){let _=n.stuetzen||Math.max(2,Math.ceil(S.b/400)+1),m=n.sparren||Math.max(3,Math.round(S.b/75)+1);f=Qd(Nh(S,Or(S,_,m,Hn)),wd,S)}let p=null;if(S.produkt!=="carport"&&[S.velV,S.velL,S.velR].some(_=>_!=="keine")){let _=n.sparren||Math.max(3,Math.round(S.b/75)+1),m=n.stuetzen||Math.max(2,Math.ceil(S.b/400)+1);p=Ud(Dh(S,Tp(Or(S,m,_,Hn))),Ad,S)}let g=S.produkt!=="sunpro"&&S.ledAnz>0?{preis:S.ledAnz*$h,info:`${S.ledAnz}er-Set LED-Spots \xE0 ${$h} \u20AC (je 2 Spots in ${S.ledAnz/2} Sparren, Randsparren ohne LED)`}:null,d=s+a+Ur.lieferung+(g?g.preis:0)+(l?l.preis:0)+(c?c.preis:0)+(f?f.preis:0)+(p?p.preis:0)+(r?r.preis:0);return{dach:s,mont:a,montInfo:o.info,lief:Ur.lieferung,led:g,verk:l,glas:c,mark:f,vel:p,spx:r,spOffen:i&&e.preis==null,netto:d,brutto:d*(1+Ur.mwst),hinweis:S.produkt!=="carport"&&S.t>405}}var Zs=null,ti=null,Ga=null,wi=null,eu=[],Ai=null,Ks=null,ni=null,Ws=null,Xs=null,zh=null,Yh=[],Mp=0,Ys=2.5,ii=i=>(i/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})+" m";function Sp(i,e,t,n,s=""){let r=document.createElement("div");r.className="mass "+s,r.textContent=i;let o=new Sa(r);return o.position.set(e,t,n),o}function fp(i,e,t,n){let s=new xr({color:12884781}),r=[e,t];i.add(new vr(new At().setFromPoints(r),s));let o=new L().subVectors(t,e).normalize(),a=new L(-o.z,0,o.x).multiplyScalar(.18);for(let c of[e,t])i.add(new vr(new At().setFromPoints([c.clone().add(a),c.clone().sub(a)]),s));let l=e.clone().add(t).multiplyScalar(.5);i.add(Sp(n,l.x,l.y+.05,l.z))}function Hn(i,e){if(i<=1)return[0];let t=[],n=-e/2+.07,s=(e-.14)/(i-1);for(let r=0;r<i;r++)t.push(n+r*s);return t}function kt(){eu=[],Ws&&(Nt.remove(Ws),Ws.traverse(u=>{u.geometry&&u.geometry.dispose(),u.element&&u.element.remove()})),Ws=new dt,Nt.add(Ws),Yh=[];let i=S.b/100,e=S.t/100,t=S.produkt,n=S.montage==="frei"||t==="carport",s=t==="carport"?1.6:n?3:0;Mp=s;let r=Math.max(14,i+7),o=r+"|"+S.b+"|"+(ns()?S.treppeH:0);if(!Xs||Xs.userData.b!==o){for(let u of[Xs,zh])u&&(Gr.remove(u),u.traverse(y=>y.geometry?.dispose()));Xs=Jx(r),Xs.userData.b=o,Gr.add(Xs),zh=jx(r),Gr.add(zh)}let a=Ws;if(t==="carport"){let u=new Ge(new zn(i+2,e+6),Ce.pflaster);u.rotation.x=-Math.PI/2,u.position.set(0,.012,s+(e+6)/2-.5),u.receiveShadow=!0,a.add(u),Ce.pflaster.map.wrapS=Ce.pflaster.map.wrapT=St,Ce.pflaster.map.repeat.set((i+2)/2,(e+6)/2),cp(a,0,.014,s+e/2,Math.min(i*.6,e*.75*664/580,3.2))}else{let u=i+1.2,y=e+(n?1.2:.8),x=n?s+e/2:y/2,M=S.boden==="dielen",R=M?_p:Xh,T=M?Ce.dielen:Ce.platten,w=new Ge(new Ut(u,.06,y),T);w.position.set(0,.03,x),w.receiveShadow=!0,a.add(w);for(let C of[R.map,R.rough].filter(Boolean))C.repeat.set(u/R.groesse,y/R.groesse),M&&(C.rotation=0);we(u+.08,.05,.08,Ce.sockelStein,0,.025,x+y/2+.04,a);for(let C of[-1,1])we(.08,.05,y+.08,Ce.sockelStein,C*(u/2+.04),.025,x,a);cp(a,0,.062,s+e/2,Math.min(i*.6,e*.75*664/580,3.2))}let l=Ce.rahmen,c=t==="sunpro"?Ki(S,Zi):null,h=t==="carport"?null:t==="sunpro"?{sparren:3,stuetzen:c.front}:jh(t,S.eind,S.b,S.t),f=h?.sparren||Math.max(3,Math.round(i/.75)+1),p=h?.stuetzen||Math.max(2,Math.ceil(i/4)+1);t==="carport"&&(p=Ep(i));let g=Hn(f,i-.02),d,_,m=[];if(t==="tds"){let u=Pn.degToRad(8);d=S.h/100;let y=e*Math.tan(u);_=d+y;let x=Math.hypot(e,y);if(n){we(i+.04,.18,.15,l,0,_-.04,s-.02,a);for(let v of Hn(p,i))we(.11,_-.13,.11,l,v,(_-.13)/2+.06,s+.02,a)}else{Dn(Ih,i,l,!0,a).position.set(0,_-.02,s);for(let b of[-1,1]){let D=Dn(Ih,.004,l,!0,a);D.position.set(b*(i/2+.002),_-.02,s),D.scale.set(1,1.03,1.03)}we(i,.012,.004,Ce.dichtung,0,_-.09,s+.002,a)}let M=d-.135,R=s+e-.04;Dn(Md,i+.06,l,!0,a).position.set(0,M,R);for(let v of[-1,1])Dn(Sd,.004,l,!0,a).position.set(v*(i/2+.032),M,R);let w=Hn(p,i);w.forEach((v,b)=>{we(.11,M,.11,l,v,M/2,s+e+.02,a),(b===0||b===w.length-1)&&kh(a,v,s+e+.075)});let C=(d+_)/2;g.forEach((v,b)=>{let D=we(.06,.12,x+.04,l,v,C-.065,s+e/2,a);D.rotation.x=u;let O=Dn(bd,x+.02,l,!1,a);O.position.set(v,C+.009,s+e/2),O.rotation.x=u,b===0||b===g.length-1?O.scale.x=.85:m.push(v)});for(let v=0;v<g.length-1;v++){let b=g[v+1]-g[v]-.03,D=we(b,.01,x-.02,Ce.glas(),(g[v]+g[v+1])/2,C+.002,s+e/2,a);if(D.rotation.x=u,D.castShadow=S.eind!=="klar",D.renderOrder=2,S.eind!=="poly"){let O=we(b,.01,.006,Ce.glasKante,D.position.x,C+.002-Math.sin(u)*(x/2-.013),s+e/2+Math.cos(u)*(x/2-.013),a);O.rotation.x=u}}Ys=d;let U=v=>kr(a,v*(i/2-.03),s,e,v>0&&ns()?.06+S.treppeH/100:.06,_-.13,d-.135);S.seiteL&&U(-1),S.seiteR&&U(1),ns()&&nv(a,e,s);for(let[v,b]of[["links",-1],["rechts",1]])if(S.verk[v].an){let D=vp(),O=Y=>_-.14-(Y-s)*Math.tan(u),H=[.03,D.L-.03],$=qs(H),k=b<0?Y=>O(D.zE-Y):Y=>O(D.zA+Y),j=Math.max(k(0),k(D.L))-.05,B=za(a,D.L,j,H,$,S.verk[v],k);b<0?(B.rotation.y=Math.PI/2,B.position.set(-D.x,0,D.zE)):(B.rotation.y=-Math.PI/2,B.position.set(D.x,0,D.zA))}for(let v of Va())kr(a,(v==="links"?-1:1)*(i/2-(S[v==="links"?"schiebL":"schiebR"]?.045:.03)),s,e,d-.135-$s,_-.13,d-.135,!1);Hh(a),S.festV&&Vh(a)}if(t==="skyview"||t==="carport"){let u=t==="carport"?2.45:2.7,y=.22;d=_=u,we(i+.04,y,.12,l,0,u-y/2,s+e,a),n?we(i+.04,y,.12,l,0,u-y/2,s,a):we(i,.12,.08,l,0,u-.06,s+.04,a);for(let x of[-1,1])we(.1,y,e,l,x*(i/2-.03),u-y/2,s+e/2,a);if(dp(a,u,y,i,e,s,n,.06,.02),Hn(p,i).forEach((x,M,R)=>{we(.12,u-y,.12,l,x,(u-y)/2,s+e-.02,a),(M===0||M===R.length-1)&&kh(a,x,s+e+.04),n&&we(.12,u-y,.12,l,x,(u-y)/2,s+.04,a)}),t==="skyview"){for(let R of g.slice(1,-1))we(.06,.12,e-.1,l,R,u-.1,s+e/2,a),m.push(R);let x=[-(i/2-.08),...g.slice(1,-1),i/2-.08];for(let R=0;R<x.length-1;R++){let T=we(x[R+1]-x[R]-.03,.012,e-.16,Ce.glas(),(x[R]+x[R+1])/2,u-.035,s+e/2,a);T.castShadow=S.eind!=="klar",T.renderOrder=2}let M=R=>kr(a,R*(i/2-.03),s+.08,e-.14,.06,u-y,u-y);S.seiteL&&M(-1),S.seiteR&&M(1),Hh(a),S.festV&&Vh(a)}else{rv(a,i-.16,e-.1,u-.034,s+e/2,S.blech==="vlies");let x=u-y-.05,M=S.verk,R=Zh("hinten",i,e),T=Zh("seite",i,e);if(M.hinten.an&&za(a,i,x,R,qs(R),M.hinten).position.set(-i/2,0,s-.04),M.links.an){let w=za(a,e,x,T,qs(T),M.links);w.rotation.y=Math.PI/2,w.position.set(-i/2-.02,0,s+e)}if(M.rechts.an){let w=za(a,e,x,T,qs(T),M.rechts);w.rotation.y=-Math.PI/2,w.position.set(i/2+.02,0,s)}for(let w of g.slice(1,-1))m.push(w)}Ys=u-y}if(t==="sunpro"){let u=nn.H,y=nn.fh;d=_=u,Zs=Pd(a,S,Zi,s,Ce.rahmen,we,Ce.led),dp(a,u,y,i,e,s,S.montage==="frei",0,0);for(let M of[-1,1])kh(a,M*(i/2-nn.pf/2),s+e);let x=M=>kr(a,M*(i/2-.03),s+.08,e-.14,.06,u-y,u-y);S.seiteL&&x(-1),S.seiteR&&x(1),Hh(a),S.festV&&Vh(a),Ys=u-y}else Zs=null;if(Ga=null,t!=="carport"&&[S.velV,S.velL,S.velR].some(u=>u!=="keine")&&(Ga=Nd(a,S,Tp(Or(S,p,f,Hn)),s,Ce.rahmen,we)),Ks=null,t!=="carport"&&(S.dachMark!=="keine"&&S.produkt!=="sunpro"||S.zipV||S.zipL||S.zipR)&&(Ks=tp(a,S,Or(S,p,f,Hn),s,Ce.rahmen,we)),S.ledMax=m.length>=3?2*m.length:0,S.ledAnz>S.ledMax&&(S.ledAnz=S.ledMax),S.ledAnz&&S.ledAnz<6&&(S.ledAnz=S.ledMax?6:0),S.ledAnz-=S.ledAnz%2,qh()){let u=t==="tds"?null:d-(t==="carport"?.23:.17),y=Pn.degToRad(8);for(let[M,R]of t==="sunpro"?[]:sv(m,S.ledAnz)){let T=s+e*R,w=t==="tds"?_-(T-s)*Math.tan(y)-.135:u,C=new Ge(new Qn(.022,.022,.005,20),Ce.led);C.position.set(M,w,T),a.add(C)}let x=Math.min(5,Math.max(2,Math.round(i/3)));for(let M=0;M<x;M++){let R=new ha(16767392,0,7,1.6);R.position.set(-i/2+i*(M+.5)/x,d-.35,s+e/2),a.add(R),Yh.push(R)}}S.masse&&(fp(a,new L(-i/2,.08,s+e+.75),new L(i/2,.08,s+e+.75),"Breite "+ii(S.b)),fp(a,new L(i/2+.75,.08,s),new L(i/2+.75,.08,s+e),"Tiefe "+ii(S.t)),a.add(Sp("Durchgang ca. "+ii(Math.round((Ys-.1)*100)),-i/2+.07,Ys*.55,s+e+.35,"klein"))),uv(),mv()}function sv(i,e){let t=i.length,n=Math.min(Math.floor(e/2),t);if(!n)return[];let s=[];for(let r of new Set(Array.from({length:n},(o,a)=>Math.floor((a+.5)*t/n))))s.push([i[r],1/3],[i[r],2/3]);return s}function qh(){return S.produkt==="sunpro"?S.ledBand>0:S.ledAnz>0}var $h=50;function kh(i,e,t){let n=new Ge(new Qn(.036,.036,.07,20),Ce.pvc);n.rotation.x=Math.PI/2,n.position.set(e,.17,t),n.castShadow=!0,i.add(n);let s=new Ge(new ia(.036,.006,8,20),Ce.pvc);s.position.set(e,.17,t+.035),i.add(s)}function dp(i,e,t,n,s,r,o,a,l){Ce.nut.color.copy(Ce.rahmen.color).multiplyScalar(.45);let c=[.3,.45,.6].map(h=>e-t*h);for(let h of c){we(n+.03,.005,.003,Ce.nut,0,h,r+s+a+5e-4,i),o&&we(n+.03,.005,.003,Ce.nut,0,h,r-a-5e-4,i);for(let f of[-1,1])we(.003,.005,s-.02,Ce.nut,f*(n/2+l+5e-4),h,r+s/2,i)}for(let h of[-1,1])we(.07,t+.006,.004,Ce.rahmen,h*(n/2+l-.035),e-t/2,r+s+a+.002,i),we(.004,t+.006,.07,Ce.rahmen,h*(n/2+l+.002),e-t/2,r+s+a-.035,i)}function kr(i,e,t,n,s,r,o,a=!0){let h=Ce.rahmen,f=r-o>.02,p=new en;p.moveTo(0,s),p.lineTo(n,s),p.lineTo(n,o),p.lineTo(0,r),p.lineTo(0,s);let g=new Ge(new vi(p),Ce.wandglas);g.rotation.y=-Math.PI/2,g.position.set(e,0,t),g.renderOrder=3,i.add(g),we(.06,.05,n,h,e,s+.05/2,t+n/2,i),we(.06,r-s,.05,h,e,(r+s)/2,t+.05/2,i),we(.06,o-s,.05,h,e,(o+s)/2,t+n-.05/2,i);let d=Math.hypot(n,r-o),_=Math.atan2(r-o,n),m=we(.06,.05,d,h,e,(r+o)/2-.05/2,t+n/2,i);m.rotation.x=_,f&&a&&we(.06,.05,n-.05,h,e,o-$s,t+n/2,i);let u=n<1.5?0:n<=3?1:n<=4.5?2:3;for(let y=1;y<=u;y++){let x=n*y/(u+1),M=r-x*(r-o)/n;we(.06,M-s,.05,h,e,(M+s)/2,t+x,i)}}function rv(i,e,t,n,s,r){let h=.030999999999999993,f=.004,p=Math.max(1,Math.round(e/.207)),g=e/(p*.207),d=[];for(let u=0;u<p;u++){let y=-e/2+u*.207*g;d.push([y,0],[y+.12*g,0],[y+(.12+.028)*g,.035],[y+(.12+.028+h)*g,.035])}d.push([e/2,0]);let _=(u,y)=>{let x=new en;x.moveTo(d[0][0],d[0][1]+u);for(let[M,R]of d.slice(1))x.lineTo(M,R+u);for(let[M,R]of d.slice().reverse())x.lineTo(M,R+u-y);return new Wi(x,{depth:t,bevelEnabled:!1})},m=new Ge(_(0,f),Ce.blech);if(m.position.set(0,n,s-t/2),m.castShadow=m.receiveShadow=!0,i.add(m),r){let u=new Ge(_(-f,.008),Ce.vlies);u.position.copy(m.position),u.receiveShadow=!0,i.add(u)}}var Wt={h:.154,dick:.025,stange:7,preis:196},Wr={b:.0296,stange:6,preis:68},Ri={b:.0704,dick:.0253,ral:{stange:7,preis:190},dekor:{stange:6.1,preis:168}},es={a:.06,stange:6,preis:227},Et={art:"15367",b:.0296,h:.025,stange:6,preis:68},sn={art:null,h:.045,dick:.004,stange:6,preis:0},qr={nut:["NUT Dunkel","#5b250c","streifen"],mocca:["Eiche Mocca","#6e3d0c","punkte"],rovere:["Rovere Pechino Hell","#97500d","wellen"]},$r=i=>i in qr,bp=i=>$r(i)?qr[i][0]:"RAL "+i,Ep=i=>Math.max(2,Math.ceil(i/3.6)+1);function ov(i,e,t){let r=document.createElement("canvas");r.width=t?96:1024,r.height=t?1024:96;let o=r.getContext("2d");t&&(o.translate(96,0),o.rotate(Math.PI/2));let a=new ze(i),l={};a.getHSL(l,pt);let c=(p,g=1)=>`hsla(${l.h*360},${l.s*100}%,${Math.max(0,Math.min(100,l.l*100+p))}%,${g})`;o.fillStyle=i,o.fillRect(0,0,1024,96);let h=i.length*97+e.length*13,f=()=>(h=(h*9301+49297)%233280)/233280;if(e==="punkte"){for(let p=0;p<26;p++){o.strokeStyle=c(-6+f()*8,.25),o.lineWidth=1+f()*2;let g=f()*96;o.beginPath(),o.moveTo(0,g),o.lineTo(1024,g+(f()-.5)*6),o.stroke()}for(let p=0;p<5200;p++)o.fillStyle=f()<.55?c(10+f()*14,.55):c(-10-f()*8,.5),o.fillRect(f()*1024,f()*96,1+f()*2.2,1+f()*1.4)}else{let p=e==="wellen"?34:46;for(let g=0;g<p;g++){let d=f()*96,_=e==="wellen"?3+f()*10:.6+f()*2,m=.004+f()*.01,u=f()*6;o.strokeStyle=f()<.6?c(-7-f()*9,.35+f()*.35):c(5+f()*8,.3),o.lineWidth=.6+f()*(e==="wellen"?2.6:1.6),o.beginPath();for(let y=0;y<=1024;y+=8){let x=d+Math.sin(y*m+u)*_+Math.sin(y*m*3.1+u)*_*.25;y?o.lineTo(y,x):o.moveTo(y,x)}o.stroke()}if(e==="wellen")for(let g=0;g<6;g++){let d=f()*1024,_=96*(.3+f()*.4);o.strokeStyle=c(-8,.3),o.lineWidth=1.2;for(let m=6;m<60;m+=7)o.beginPath(),o.ellipse(d,_,m*4,m*.55,0,0,Math.PI*2),o.stroke()}}return r}var Bh={};function pp(i,e,t){let n=i+(e?"v":"h");if(!Bh[n]){let r=new _n(ov(qr[i][1],qr[i][2],e));r.colorSpace=pt,r.wrapS=r.wrapT=St,r.anisotropy=8,Bh[n]=r}let s=Bh[n].clone();return s.needsUpdate=!0,e?s.repeat.set(1,t):s.repeat.set(t,1),new Oe({map:s,roughness:.55,metalness:.08})}function qs(i){let e=[];for(let t=0;t<i.length-1;t++){let n=i[t],s=i[t+1]-n,r=Math.floor(s/3)+1;for(let o=1;o<r;o++)e.push(n+s*o/r)}return e}function Zh(i,e,t){return i==="hinten"?Hn(Ep(e),e).map(n=>n+e/2):[.04,t-.02]}function za(i,e,t,n,s,r,o){let a=new dt,l=.05,c=r.art,h=r.richt==="waagerecht",f=o||(()=>l+t),p=(y,x,M,R,T,w,C,U=0)=>{let v=(k,j)=>f(k)-U-j;if(v(y,R)>=-1e-4&&v(x,R)>=-1e-4)return we(x-y,R-M,T,w,(y+x)/2,(M+R)/2,C,a);let b=[[y,M],[x,M],[x,R],[y,R]],D=[];for(let k=0;k<b.length;k++){let j=b[k],B=b[(k+1)%b.length],Y=v(...j),oe=v(...B);if(Y>=0&&D.push(j),Y>=0!=oe>=0){let he=Y/(Y-oe);D.push([j[0]+(B[0]-j[0])*he,j[1]+(B[1]-j[1])*he])}}if(D.length<3)return null;let O=new en;O.moveTo(...D[0]);for(let k of D.slice(1))O.lineTo(...k);let H=new Wi(O,{depth:T,bevelEnabled:!1});H.translate(0,0,C-T/2);let $=new Ge(H,w);return $.castShadow=$.receiveShadow=!0,a.add($),$},g=(y,x,M,R,T=0)=>{let w=f(0)-T,C=f(e)-T,U=Math.hypot(e,C-w),v=we(U,y,x,M,e/2,(w+C)/2-y/2,R,a);return v.rotation.z=Math.atan2(C-w,e),v},d=c==="latten"&&$r(r.farbe),_=Ce.paneel.clone();_.color.set(Xr[$r(r.farbe)?"7016":r.farbe][1]);let m=.006+Wt.dick/2+es.a/2;if(c==="zaun"){if(p(.025,e-.025,l+.025,l+t-.025,.004,Ce.fuge,.006,.025),h){let x=Math.ceil((t-.05)/Wt.h);for(let M=0;M<x;M++){let R=Math.min(Wt.h,t-.05-M*Wt.h),T=l+.025+M*Wt.h;p(.025,e-.025,T,T+R-.004,Wt.dick,_,.006,.025)}}else{let x=Math.ceil((e-.05)/Wt.h);for(let M=0;M<x;M++){let R=Math.min(Wt.h,e-.05-M*Wt.h),T=.025+M*Wt.h;p(T,T+R-.004,l+.025,l+t-.025,Wt.dick,_,.006,.025)}}we(e,.025,Wr.b,_,e/2,l+.025/2,.006,a),g(.025,Wr.b,_,.006);for(let x of[.025/2,e-.025/2])we(.025,f(x)-l,Wr.b,_,x,(f(x)+l)/2,.006,a)}else{let y=+r.abst/1e3,x=Ri.b+y,M=d?Ce.rahmen:_;if(h){let R=Math.floor((t+y)/x),T=(t-(R*x-y))/2,w=[...n,...s].sort((C,U)=>C-U);for(let C=0;C<w.length-1;C++){let U=w[C]+Et.b/2-.004,v=w[C+1]-w[C]-Et.b+.008,b=d?pp(r.farbe,!1,v):_;for(let D=0;D<R;D++){let O=l+T+D*x;p(U,U+v,O,O+Ri.b,Ri.dick,b,.006)}}for(let C of w){let U=f(C)-l;we(Et.b,U,Et.h,M,C,l+U/2,.006,a),we(sn.h,U,sn.dick,M,C,l+U/2,.006-Et.h/2-sn.dick/2,a)}o&&g(.03,Et.h,M,.006),m=.006+Et.h/2+es.a/2}else{let R=Math.floor((e+y)/x),T=d?pp(r.farbe,!0,t):_,w=(e-(R*x-y))/2;for(let C=0;C<R;C++){let U=w+C*x;p(U,U+Ri.b,l,l+t,Ri.dick,T,.006)}m=.006+Et.b/2+es.a/2,we(e,Et.h,Et.b,M,e/2,l+Et.h/2,.006,a),we(e,sn.h,sn.dick,M,e/2,l+Et.h/2,.006-Et.b/2-sn.dick/2,a),g(Et.h,Et.b,M,.006),g(sn.h,sn.dick,M,.006-Et.b/2-sn.dick/2,-.01)}}let u=d?Ce.rahmen:_;for(let y of s)we(es.a,f(y),es.a,u,y,f(y)/2,m,a);return i.add(a),a}function mp(i,e){let t=[],n=0,s=(r,o,a)=>{let l=Math.floor(a/r);return l>=1?Math.ceil(o/l):o*Math.ceil(r/a)};for(let{name:r,L:o,stuetzen:a,extra:l,c}of i){let h=[],f=c.richt==="waagerecht",p=0;if(c.art==="zaun"){let g=f?s(o,Math.ceil(e/Wt.h),Wt.stange):s(e,Math.ceil(o/Wt.h),Wt.stange),d=Math.ceil((2*o+2*e)/Wr.stange);p+=g*Wt.preis+d*Wr.preis,h.push(`${g} \xD7 Zaunpaneel 140 RAL ${c.farbe} (7 m)`,`${d} \xD7 U-Profil (6 m)`)}else{let g=$r(c.farbe)?Ri.dekor:Ri.ral,d=+c.abst/1e3,_=Ri.b+d,m=0,u,y;if(f){let x=Math.floor((e+d)/_);for(let M=0;M<a.length-1;M++)m+=s(a[M+1]-a[M],x,g.stange);u=s(e,a.length,Et.stange),y=s(e,a.length,sn.stange)}else m=s(e,Math.floor((o+d)/_),g.stange),u=s(o,2,Et.stange),y=s(o,2,sn.stange);p+=m*g.preis+u*Et.preis+y*sn.preis,h.push(`${m} \xD7 Rechteckprofil 25\xD770 ${bp(c.farbe)} (${String(g.stange).replace(".",",")} m)`,`${u} \xD7 U-Profil ${Et.art}`,sn.art?`${y} \xD7 Blende ${sn.art}`:`${y} \xD7 Blende (Artikel offen)`)}if(l){let g=s(e+.05,l,es.stange);p+=g*es.preis,h.push(`${l} Zusatzpfosten 60\xD760`)}n+=p,t.push(`${r}: ${h.join(" \xB7 ")} = ${Math.round(p).toLocaleString("de-DE")} \u20AC`)}return{preis:n,info:t.join(`
`)}}function av(i,e,t){let n=Ha(i*100,e*100,t);return .035*(n?n.schienen:2)+.03}function lv(i,e,t,n,s,r){let o=wp(s-n,r,e);o.rotation.y=t<0?-Math.PI/2:Math.PI/2,o.position.set(t,0,(n+s)/2),i.add(o)}function Tp(i){let e=Ya();return Object.assign(i,{felder:e.felder,vel:{xC:e.xC,zC:e.zC,z1:e.z1,z2:e.z2}})}function Hh(i){let e=Ya();for(let[t,n]of[[S.schiebL,-1],[S.schiebR,1]])if(t&&(lv(i,t,n*e.xA,e.z1,e.z2,e.hS-.06),e.wand!=null)){let s=av(e.z2-e.z1,e.hS-.06,t);we(s,e.hS,.04,Ce.rahmen,n*(e.xA-s/2),e.hS/2,e.wand+.02,i),we(s-.01,e.hS-.02,.004,Ce.dichtung,n*(e.xA-s/2),e.hS/2,e.wand+.042,i)}if(S.front)for(let t of e.felder){let n=wp(t.b,e.hF-.06,S.frontArt);n.position.set(t.x,0,e.zPf),i.add(n)}}function Vh(i){let e=Ya();if(S.easyRail)return cv(i,e);if(ns())return hv(i,e);let t=S.festVHalb?.06+(e.hF-.06)/2:e.hF-.005;for(let n of e.felder){let s=new dt;kr(s,0,-n.b/2,n.b,.06,t,t),s.rotation.y=Math.PI/2,s.position.set(n.x,0,e.zC),i.add(s)}}function cv(i,e){let t=ns()?Xa():null,n=e.zC,s=1,r=.11,o=g=>t?t.linie(g):.06,a=-e.xA+e.pb,l=e.xA-e.pb,c=[a,...t&&t.xE>a&&t.xE<l?[t.xE]:[],l],h=new Oe({color:3817026,metalness:.4,roughness:.45}),f=new vn({color:14085096,transparent:!0,opacity:.22,roughness:.03,ior:1.52,side:_t,depthWrite:!1,envMapIntensity:2.4}),p=new Oe({color:9420722,transparent:!0,opacity:.6,roughness:.1});for(let g=0;g<c.length-1;g++){let d=c[g],_=c[g+1],m=o(d),u=o(_),y=Math.hypot(_-d,u-m),x=Math.atan2(u-m,_-d),M=new dt;M.position.set(d,m,n),M.rotation.z=x,i.add(M),we(y,r,.065,h,y/2,r/2,0,M),we(y,.012,.072,h,y/2,r+.002,0,M);let R=Math.max(1,Math.ceil((_-d)/1.5-1e-9)),T=(_-d)/R,w=s-r-.03,C=v=>o(v)+r;for(let v=0;v<R;v++){let b=d+v*T+.005,D=d+(v+1)*T-.005,O=new en;O.moveTo(b,C(b)),O.lineTo(D,C(D)),O.lineTo(D,C(D)+w),O.lineTo(b,C(b)+w),O.closePath();let H=new Ge(new vi(O),f);H.position.z=n,H.renderOrder=3,i.add(H)}let U=we(y+.02,.035,.05,h,(d+_)/2,(m+u)/2+s-.0125,n,i);U.rotation.z=x}}function hv(i,e){let t=Xa(),n=.05,s=.06,r=Ce.rahmen,o=S.festVHalb?.06+(e.hF-.06)/2:e.hF-.005;for(let a of e.felder){let l=a.x-a.b/2,c=a.x+a.b/2,h=m=>t.linie(m)+.02,f=[l,...t.xE>l&&t.xE<c?[t.xE]:[],c],p=new en;p.moveTo(l,h(l));for(let m of f.slice(1))p.lineTo(m,h(m));p.lineTo(c,o),p.lineTo(l,o),p.lineTo(l,h(l));let g=new Ge(new vi(p),Ce.wandglas);g.position.z=e.zC,g.renderOrder=3,i.add(g),we(a.b,n,s,r,a.x,o-n/2,e.zC,i);for(let m of[l+n/2,c-n/2]){let u=h(m);we(n,o-u,s,r,m,(o+u)/2,e.zC,i)}for(let m=0;m<f.length-1;m++){let u=f[m],y=f[m+1],x=h(u),M=h(y),R=Math.hypot(y-u,M-x),T=we(R,n,s,r,(u+y)/2,(x+M)/2+n/2,e.zC,i);T.rotation.z=Math.atan2(M-x,y-u)}let d=t.xE>l+.1&&t.xE<c-.1?t.xE:a.x,_=h(d);we(n*.9,o-_,s*.9,r,d,(o+_)/2,e.zC,i)}}function wp(i,e,t){let n=new dt,s=-.02,r=Ha(i*100,e*100,t),o=r?r.fluegel:Math.max(2,Math.round(i/1)),a=r?r.schienen:2,l=i/o,c=t==="sc23",h=.035*a+.03;we(i,.04,h,Ce.rahmen,0,.08,-h/2,n),we(i,.06,h,Ce.rahmen,0,e+.03,-h/2,n);for(let _=1;_<a;_++)we(i,.006,.003,Ce.nut,0,.1,-.015-_*.035+.0175,n);let f=.1,p=e-.1,g=[];for(let _=0;_<o;_++){let m=-i/2+l*(_+.5),u=s-_%a*.035,y=l+.03,x=c?y-.1:y-.004,M=c?p-.1:p-.01,R=new dt;R.position.set(m,0,u),n.add(R);let T=new Ge(new zn(x,M),Ce.wandglas);if(T.position.set(0,f+p/2,0),T.renderOrder=3,R.add(T),c){for(let C of[-1,1])we(y,.05,.03,Ce.rahmen,0,f+p/2+C*(p/2-.025),0,R);for(let C of[-1,1])we(.05,p,.03,Ce.rahmen,C*(y/2-.025),f+p/2,0,R)}else we(y-.004,.012,.012,Ce.glasKante,0,f+p/2+M/2,0,R),we(.012,.25,.03,Ce.rahmen,(_%a?-1:1)*(y/2-.06),f+.95,0,R);let w=-i/2+l*(Math.floor(_/a)*a+.5);g.push([R,m,w])}let d=_=>{for(let[m,u,y]of g)m.position.x=u+(y-u)*_};return d(S.glasAuf),eu.push(d),n}function uv(){let i=S.abend;Nt.background=i?Yr.abend:Yr.tag,Nt.environment=i?Gh.abend:Gh.tag,Nt.fog.color.set(i?8217696:13623791),Wh.intensity=i?.1:.35,Wh.color.set(i?7309001:14675967),Nn.intensity=i?.35:3.4,Nn.color.set(i?16751196:16774368),Nn.position.set(i?-14:7,i?4:13,i?6:9),Nt.environmentIntensity=i?.18:.75,on.toneMappingExposure=i?1.15:1;let e=qh()&&i;Ce.led.emissiveIntensity=qh()?i?3:.6:0;for(let t of Yh)t.intensity=e?9:0}var Ti=null;function Zr(i,e){let t=S.b/100,n=S.t/100,s=Mp,r=Math.max(t,n*1.6),o=new L(0,1.4,s+n/2),a={perspektive:new L(t*.75+3.5,S.produkt==="carport"?6.2:4,s+n+r*1.15+5),vorne:new L(0,2,s+n+r*1.3+4),seite:new L(t/2+n*1.5+5,2,s+n/2+.5),oben:new L(.01,r*1.35+6,s+n/2+2.5),innen:new L(t*.2,1.6,s+n*.6)}[i];if(Zt.maxPolarAngle=i==="innen"?Math.PI*.8:Math.PI*.495,i==="innen"&&(a.set(t*.12,1.15,s+n*.3),o.set(-t*.12,Ys*.95,s+n+2.5)),Zt.minDistance=i==="innen"?.5:3,rn.fov=i==="innen"?66:40,rn.updateProjectionMatrix(),rn.aspect<1.1&&i!=="innen"&&a.sub(o).multiplyScalar(Math.min(2.2,1.15/Math.max(rn.aspect,.45))).add(o),e){rn.position.copy(a),Zt.target.copy(o),Zt.update();return}Ti={p0:rn.position.clone(),t0:Zt.target.clone(),p1:a,t1:o,s:performance.now()}}var J=i=>document.getElementById(i);function Kt(i,e,t){J(i).addEventListener("click",n=>{let s=n.target.closest("button");s&&(S[e]=s.dataset.v,t&&t(),kt())})}Kt("sel-produkt","produkt",()=>{let i=is[S.produkt];S.b=Math.min(Math.max(S.b,i.b[0]),i.b[1]),S.t=Math.min(Math.max(S.t,i.t[0]),i.t[1]),S.produkt==="carport"&&(S.b=Math.max(S.b,300),S.t=Math.max(S.t,500)),setTimeout(()=>Zr("perspektive"),0)});Kt("sel-montage","montage",()=>setTimeout(()=>Zr("perspektive"),0));Kt("sel-eind","eind");Kt("sel-verkricht","verkRicht");Kt("sel-verkfarbe","verkFarbe");Kt("sel-verkabst","verkAbstand");Kt("sel-verkart","verkArt",()=>{S.verkArt==="zaun"&&$r(S.verkFarbe)&&(S.verkFarbe="7016"),S.verkAn=!0});Kt("sel-verkwand","verkWand");Kt("sel-dachmark","dachMark");J("in-spwinkel").addEventListener("input",i=>{ti=null,S.spWinkel=+i.target.value,J("spwinkel-w").textContent=S.spWinkel+"\xB0",Zs&&Zs(S.spWinkel)});J("btn-spauf").addEventListener("click",()=>{ti=90});J("btn-spzu").addEventListener("click",()=>{ti=0});for(let i of Object.keys(Gs))J("cb-"+i).addEventListener("change",e=>{S[i]=e.target.checked,kt()});Kt("sel-vellam","velLam");for(let i of document.querySelectorAll("details.sek"))i.addEventListener("toggle",()=>{if(i.open)for(let e of document.querySelectorAll("details.sek"))e!==i&&(e.open=!1)});for(let i of document.querySelectorAll(".fw"))i.querySelector(".fw-btn").addEventListener("click",e=>{e.stopPropagation();let t=!i.classList.contains("offen");for(let n of document.querySelectorAll(".fw.offen"))n.classList.remove("offen");i.classList.toggle("offen",t)}),i.querySelector(".fw-pop").addEventListener("click",e=>{e.target.closest("button")&&setTimeout(()=>i.classList.remove("offen"),120)});document.addEventListener("click",i=>{if(!i.target.closest(".fw"))for(let e of document.querySelectorAll(".fw.offen"))e.classList.remove("offen")});function fv(){for(let i of document.querySelectorAll(".fw")){let e=i.querySelector(".fw-pop button.an");if(!e)continue;let t=e.querySelector("i");i.querySelector(".fw-sw").style.background=t?t.style.background:e.style.background,i.querySelector(".fw-txt").textContent=e.title||e.textContent.trim()}}Kt("sel-plprofil","plisseeProfil");function tu(i,e,t,n,s){let r=J(i),o="",a=null;for(let l of e)l.familie&&l.familie!==a?(a!==null&&(o+="</div>"),a=l.familie,o+=`<div class="fam">${a}</div><div class="chips">`):!l.familie&&a===null&&(a="",o+='<div class="chips">'),o+=`<button data-v="${n(l)}" title="${s(l)}" style="background:${l.farbe}"></button>`;r.innerHTML=o+"</div>",r.addEventListener("click",l=>{let c=l.target.closest("button");c&&(S[t]=c.dataset.v,kt())})}tu("stoff-dach",Un.markise,"stoffDach",i=>i.code,i=>i.familie+" "+i.code);tu("stoff-zip",Un.ezip,"stoffZip",i=>i.code,i=>i.code+" "+i.name);tu("stoff-plissee",Un.plissee,"plisseeStoff",i=>i.name,i=>i.name);var Ap=()=>{J("in-ausfahren").value=Math.round(S.ausfahren),J("ausfahren-w").textContent=Math.round(S.ausfahren)+" %"};J("in-ausfahren").addEventListener("input",i=>{ni=null,S.ausfahren=+i.target.value,Ap(),Ks&&Ks(S.ausfahren/100)});J("btn-mauf").addEventListener("click",()=>{ni=100});J("btn-velauf").addEventListener("click",()=>{wi=1});J("btn-glasauf").addEventListener("click",()=>{Ai=1});J("btn-glaszu").addEventListener("click",()=>{Ai=0});Kt("sel-velspuren","velSpuren");Kt("sel-boden","boden");J("btn-velzu").addEventListener("click",()=>{wi=0});J("btn-mzu").addEventListener("click",()=>{ni=0});for(let i of["sel-verkricht","sel-verkfarbe","sel-verkabst"])J(i).addEventListener("click",()=>{S.verkAn||(S.verkAn=!0,kt())});J("btn-verkalle").addEventListener("click",()=>{let i=S.verk[S.verkWand];for(let e of Object.keys(S.verk))e!==S.verkWand&&Object.assign(S.verk[e],{art:i.art,richt:i.richt,abst:i.abst,farbe:i.farbe});kt()});Kt("sel-blech","blech");Kt("sel-farbe","farbe",()=>Ce.rahmen.color.set(Xr[S.farbe][1]));function nu(i,e){let t=J(i),n=J(i+"-n"),s=r=>{let o=is[S.produkt];S[e]=Math.round(Math.min(Math.max(+r||0,o[e][0]),o[e][1])),kt()};t.addEventListener("input",()=>s(t.value)),n.addEventListener("change",()=>s(n.value))}nu("in-b","b");nu("in-t","t");nu("in-h","h");J("cb-treppe").addEventListener("change",i=>{S.treppe=i.target.checked,kt()});J("in-treppe").addEventListener("change",i=>{S.treppeH=Math.min(150,Math.max(20,+i.target.value||100)),kt()});for(let[i,e]of[["cb-zipV","zipV"],["cb-zipL","zipL"],["cb-zipR","zipR"],["cb-verkAn","verkAn"],["cb-masse","masse"]])J(i).addEventListener("change",t=>{if(e==="verkAn"&&t.target.checked&&S.produkt==="tds"&&S.verkWand!=="hinten"){let s=S.verkWand;Kh(s,"keine"),S.verk[s].an=!0,kt();return}S[e]=t.target.checked;let n={seiteL:"velL",seiteR:"velR",front:"velV"}[e];n&&S[e]&&(S[n]="keine"),kt()});J("sel-ledband").addEventListener("click",i=>{let e=i.target.closest("button");e&&(S.ledBand=+e.dataset.v,kt())});J("sel-led").addEventListener("click",i=>{let e=i.target.closest("button");e&&(S.ledAnz=+e.dataset.v,kt())});var Rp={links:{glas:"seiteL",vel:"velL",schieb:"schiebL"},rechts:{glas:"seiteR",vel:"velR",schieb:"schiebR"},vorne:{glas:"festV",vel:"velV"}},dv={fest:[["glasFest","Festverglasung","Glas FR23 \xB7 VSG 8 mm"],["glasFestHalb","Festverglasung halbe H\xF6he","nur vorne \xB7 Br\xFCstung"],["easyRail","Glasgel\xE4nder Easy Rail","nur vorne \xB7 H\xF6he ca. 1 m"],["velFest","Velaris fest","Lamellenwand"]],schieb:[["sg23","Glas rahmenlos","SG23 \xB7 ESG 10 mm"],["sc23","Glas mit Rahmen","SC23 \xB7 VSG 6 mm"],["velSchieb","Velaris schiebbar","Lamellenwand"]]},Cp={easyRail:"Glasgel\xE4nder Easy Rail",glasFestHalb:"Festverglasung halbe H\xF6he",verk:"Verkleidung",keine:"offen",glasFest:"Festverglasung",velFest:"Velaris fest",sg23:"Schiebe rahmenlos",sc23:"Schiebe mit Rahmen",velSchieb:"Velaris schiebbar"},pv=i=>i==="verk"||i==="keine"?"keine":i==="glasFest"||i==="glasFestHalb"||i==="easyRail"||i==="velFest"?"fest":"schieb";function Br(i){let e=Rp[i];return S.produkt==="tds"&&i!=="vorne"&&S.verk[i].an?"verk":S[e.glas]?i==="vorne"&&S.easyRail?"easyRail":i==="vorne"&&S.festVHalb?"glasFestHalb":"glasFest":S[e.vel]==="fest"?"velFest":S[e.vel]==="schieb"?"velSchieb":(i==="vorne"?S.front?S.frontArt:null:S[e.schieb])||"keine"}function Kh(i,e){let t=Rp[i],n=e==="sg23"||e==="sc23"?e:null;i!=="vorne"&&e!=="verk"&&(S.verk[i].an=!1),S[t.glas]=e==="glasFest"||i==="vorne"&&(e==="glasFestHalb"||e==="easyRail"),i==="vorne"&&(S.festVHalb=e==="glasFestHalb",S.easyRail=e==="easyRail"),S[t.vel]=e==="velFest"?"fest":e==="velSchieb"?"schieb":"keine",i==="vorne"?(S.front=!!n,n&&(S.frontArt=n)):S[t.schieb]=n}var Hr={};function Jh(i){let e=i.dataset.o,t=Br(e),n=Hr[e]||pv(t);i.querySelector(".ws-w").textContent=Cp[t],i.classList.toggle("gewaehlt",t!=="keine");for(let r of i.querySelectorAll(".ws-art button"))r.classList.toggle("an",r.dataset.a===n);let s=dv[n];i.querySelector(".ws-l2").hidden=!s,i.querySelector(".ws-var").innerHTML=s?s.filter(([r])=>r!=="glasFestHalb"&&r!=="easyRail"||e==="vorne").map(([r,o,a])=>`<button data-w="${r}" class="${r===t?"an":""}">${o}<small>${a}</small></button>`).join(""):""}for(let i of document.querySelectorAll(".wahl-seite")){let e=i.dataset.o;i.querySelector(".ws-btn").addEventListener("click",()=>{let t=!i.classList.contains("offen");for(let n of document.querySelectorAll(".wahl-seite.offen"))n.classList.remove("offen");Hr[e]=null,i.classList.toggle("offen",t),Jh(i)}),i.querySelector(".ws-art").addEventListener("click",t=>{let n=t.target.closest("button");if(n){if(n.dataset.a==="keine"){Hr[e]=null,Kh(e,"keine"),i.classList.remove("offen"),kt();return}Hr[e]=n.dataset.a,Jh(i)}}),i.querySelector(".ws-var").addEventListener("click",t=>{let n=t.target.closest("button");n&&(Hr[e]=null,Kh(e,n.dataset.w),i.classList.remove("offen"),kt())})}J("sel-zeit").addEventListener("click",i=>{let e=i.target.closest("button");e&&(S.abend=e.dataset.v==="abend",kt())});J("sel-ansicht").addEventListener("click",i=>{let e=i.target.closest("button");e&&Zr(e.dataset.v)});J("btn-dreh").addEventListener("click",i=>{Zt.autoRotate=!Zt.autoRotate,i.currentTarget.classList.toggle("an",Zt.autoRotate)});J("btn-vollbild").addEventListener("click",()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen());J("btn-panel").addEventListener("click",()=>{document.body.classList.toggle("praesentation"),setTimeout(qa,260)});J("btn-bild").addEventListener("click",gv);window.addEventListener("keydown",i=>{["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)||!J("abschluss").hidden||((i.key==="p"||i.key==="P")&&J("btn-panel").click(),(i.key==="r"||i.key==="R")&&J("btn-dreh").click())});var xt=i=>i.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:0})+" \u20AC";function mv(){let i=is[S.produkt];for(let[d,_]of[["sel-produkt","produkt"],["sel-montage","montage"],["sel-eind","eind"],["sel-blech","blech"],["sel-farbe","farbe"],["sel-verkricht","verkRicht"],["sel-verkfarbe","verkFarbe"],["sel-verkart","verkArt"],["sel-verkabst","verkAbstand"],["sel-verkwand","verkWand"],["sel-dachmark","dachMark"],["sel-plprofil","plisseeProfil"],["sel-vellam","velLam"],["sel-boden","boden"]])for(let m of J(d).querySelectorAll("button"))m.classList.toggle("an",m.dataset.v===S[_]);for(let d of J("sel-zeit").querySelectorAll("button"))d.classList.toggle("an",d.dataset.v==="abend"===S.abend);J("grp-hoehe").hidden=S.produkt!=="tds",J("grp-treppe").hidden=S.produkt!=="tds",J("cb-treppe").checked=S.treppe,J("in-treppe").value=S.treppeH;for(let[d,_]of[["in-b","b"],["in-t","t"],...i.h?[["in-h","h"]]:[]]){let m=J(d),u=J(d+"-n");m.min=u.min=i[_][0],m.max=u.max=i[_][1],m.value=S[_],u.value=S[_]}let e=S.produkt==="carport",t=S.produkt==="sunpro";if(J("grp-sunpro").hidden=!t,J("grp-dachmark").hidden=t,J("grp-ledband").hidden=!t,t){let d=Ki(S,Zi).led;S.ledBand>d&&(S.ledBand=d),J("sel-ledband").innerHTML=Array.from({length:d+1},(_,m)=>`<button data-v="${m}" class="${m===S.ledBand?"an":""}">${m||"Keine"}</button>`).join(""),J("ledband-w").textContent=S.ledBand?S.ledBand+" Stk.":"keine",J("ledband-hin").textContent=`Bei dieser Gr\xF6\xDFe max. ${d} ${d>1?"LED-B\xE4nder":"LED-Band"} (laut Preisliste) \xB7 in der Lamelle integriert`}J("grp-ledspots").hidden=t;let n=[0];for(let d=6;d<=(S.ledMax||0);d+=2)n.push(d);J("sel-led").innerHTML=n.map(d=>`<button data-v="${d}" class="${d===S.ledAnz?"an":""}">${d?d+"er":"Keine"}</button>`).join(""),J("led-w").textContent=S.ledAnz?S.ledAnz+" Spots":"keine",J("led-hin").textContent=S.ledMax?`Immer 2 Spots je Sparren, Randsparren ohne LED \xB7 ab 6er-Set \xB7 ${$h} \u20AC je Spot`:"Bei dieser Breite zu wenige Innensparren f\xFCr das 6er-Set";for(let d of document.querySelectorAll(".wahl-seite"))Jh(d);J("grp-glasanim").hidden=!(S.front||S.schiebL||S.schiebR);for(let d of Object.keys(Gs))J("cb-"+d).checked=S[d];J("grp-montage").hidden=e,J("grp-eind").hidden=e||t,J("grp-blech").hidden=!e,J("grp-verk").hidden=!(e||S.produkt==="tds");let s=S.produkt==="tds";J("sel-verkwand").querySelector("[data-v=hinten]").hidden=s,s&&S.verkWand==="hinten"&&(S.verkWand="links"),J("grp-markise").hidden=e;let r=S.dachMark,o=S.zipV||S.zipL||S.zipR;J("grp-stoff-dach").hidden=!(r==="auf"||r==="unter"),J("grp-stoff-zip").hidden=!o,J("grp-plissee").hidden=r!=="plissee",J("grp-ausfahren").hidden=!(r!=="keine"||o);for(let[d,_]of[["stoff-dach","stoffDach"],["stoff-zip","stoffZip"],["stoff-plissee","plisseeStoff"]])for(let m of J(d).querySelectorAll("button"))m.classList.toggle("an",m.dataset.v===S[_]);fv(),J("sum-produkt").textContent=`${is[S.produkt].name} \xB7 ${ii(S.b)} \xD7 ${ii(S.t)}`,J("sum-dach").textContent=`${ap[t?"sunpro":e?S.blech:S.eind]} \xB7 RAL ${S.farbe}`,J("grp-vellam").hidden=![S.velV,S.velL,S.velR].some(d=>d!=="keine"),J("keil-hin").hidden=!Va().length,J("grp-velanim").hidden=![S.velV,S.velL,S.velR].includes("schieb");{let d=Dd(S);for(let _ of J("sel-velspuren").querySelectorAll("button"))_.disabled=+_.dataset.v>d,_.classList.toggle("an",_.dataset.v===S.velSpuren);J("velspuren-hin").textContent=d<3?`Bei dieser Breite h\xF6chstens ${d} Laufschiene${d>1?"n":""} (so viele wie Elemente)`:"Mehr Laufschienen = gr\xF6\xDFere \xD6ffnung (2 = \xBD, 3 = \u2154 offen)"}J("sum-seiten").textContent=[["L","links"],["R","rechts"],["V","vorne"]].filter(([,d])=>Br(d)!=="keine").map(([d])=>d).join(" \xB7 ")||"offen",J("sum-markise").textContent=[!t&&{auf:"Aufdach",unter:"Unterdach",plissee:"Plissee"}[S.dachMark],(S.zipV||S.zipL||S.zipR)&&"eZip"].filter(Boolean).join(" + ")||"keiner",J("sum-verk").textContent=Object.keys(ts).filter(d=>S.verk[d].an).map(d=>ts[d]).join(" \xB7 ")||"keine";let a=S.verkArt==="latten";J("verk-abst").hidden=!a;for(let d of Object.keys(qr))J("sel-verkfarbe").querySelector('[data-v="'+d+'"]').hidden=!a;J("verk-hin").textContent=a?"Rechteckprofil 25 \xD7 70 mm (Art. 6049) \xB7 Zusatzpfosten 60 \xD7 60, damit jedes Feld unter 3 m bleibt":"Zaunpaneele 154 \xD7 25 mm mit U-Profil rundum \xB7 Zusatzpfosten 60 \xD7 60, damit jedes Feld unter 3 m bleibt";for(let[d,_]of[["cb-verkAn","verkAn"]])J(d).checked=S[_];for(let d of J("sel-verkwand").querySelectorAll("button"))d.querySelector("small").textContent=S.verk[d.dataset.v].an?"\u2713 verkleidet":"offen";J("verk-einst").classList.toggle("aus",!S.verkAn),J("grp-seiten").hidden=e,J("lbl-b").textContent=e?"Breite (Einfahrtseite)":"Breite (entlang der Hauswand)",J("lbl-t").textContent=e?"Tiefe (Fahrzeugl\xE4nge)":t?"Tiefe (Lamellenl\xE4nge, max. 4 m)":"Tiefe (von der Wand nach vorne)",J("titel").textContent=i.name;let l=t?"sunpro":e?S.blech:S.eind,c=Object.keys(ts).filter(d=>S.verk[d].an).map(d=>{let _=S.verk[d];return`${ts[d]}: ${_.art==="zaun"?"Zaunpaneele":"Profil 25\xD770"} ${_.richt}, ${bp(_.farbe)}`}),h=Va(),f=Object.entries({vorne:S.velV,links:S.velL,rechts:S.velR}).filter(([,d])=>d!=="keine").map(([d,_])=>`${d} ${_==="schieb"?"schiebbar":"fest"}`),p=[!t&&S.dachMark==="auf"&&`Aufdach (Stoff ${S.stoffDach})`,!t&&S.dachMark==="unter"&&`Unterdach (Stoff ${S.stoffDach})`,!t&&S.dachMark==="plissee"&&`Plissee (${S.plisseeStoff}, Profil ${Oa[S.plisseeProfil][0]})`,S.zipV&&"eZip vorne",S.zipL&&"eZip links",S.zipR&&"eZip rechts"].filter(Boolean);J("spec").textContent=`${ii(S.b)} \xD7 ${ii(S.t)}${S.produkt==="tds"&&S.h!==245?` \xB7 H\xF6he ${ii(S.h)}`:""}${ns()?` \xB7 Treppe von links ca. ${ii(S.treppeH)} hoch${S.easyRail?"":", Glas vorne unten schr\xE4g (Sonderma\xDF)"}`:""} \xB7 ${ap[l]} \xB7 RAL ${S.farbe} ${Xr[S.farbe][0]}${e?"":" \xB7 "+(S.montage==="frei"?"freistehend":"Wandmontage")}${(e||S.produkt==="tds")&&c.length?` \xB7 Verkleidung ${c.join(" | ")}`:""}${h.length?` \xB7 Keil-Festverglasung ${h.join("/")}`:""}${e?"":["links","rechts","vorne"].filter(d=>Br(d)!=="keine"&&!Br(d).startsWith("vel")).map(d=>` \xB7 ${d}: ${Cp[Br(d)]}`).join("")}${!t&&S.ledAnz?` \xB7 ${S.ledAnz} LED-Spots`:""}${t?` \xB7 Lamellen in Gestellfarbe${S.ledBand?`, ${S.ledBand} LED-B\xE4nder`:""}${Object.keys(Gs).filter(d=>S[d]).map(d=>", "+Gs[d][0]).join("")}`:""}${!e&&f.length?` \xB7 Velaris ${f.join(", ")} (${Nr[S.velLam][0]})`:""}${!e&&p.length?` \xB7 Markisen: ${p.join(", ")}${S.zipV||S.zipL||S.zipR?` (eZip-Stoff ${S.stoffZip})`:""}`:""}`,J("flaeche").textContent=(S.b*S.t/1e4).toLocaleString("de-DE",{maximumFractionDigits:1})+" m\xB2";let g=J("preisbox");if(g.hidden=!S.preis,S.preis){let d=yp();J("p-dach").textContent=xt(d.dach),J("p-mont").textContent=xt(d.mont),J("p-mont-info").textContent=d.montInfo,J("p-lief").textContent=xt(d.lief),J("p-netto").textContent=xt(d.netto),J("p-brutto").textContent=xt(d.brutto),J("p-hinweis").hidden=!d.hinweis,J("p-mark-z").hidden=!d.mark,d.mark&&(J("p-mark").textContent=d.mark.offen&&!d.mark.preis?"auf Anfrage":xt(d.mark.preis)+(d.mark.offen?" + Anfrage":""),J("p-mark-info").textContent=d.mark.info),J("p-spx-z").hidden=!d.spx,d.spx&&(J("p-spx").textContent=xt(d.spx.preis),J("p-spx-info").textContent=d.spx.info),d.spOffen&&(J("p-dach").textContent="auf Anfrage"),J("p-vel-z").hidden=!d.vel,d.vel&&(J("p-vel").textContent=d.vel.offen&&!d.vel.preis?"auf Anfrage":xt(d.vel.preis)+(d.vel.offen?" + Anfrage":""),J("p-vel-info").textContent=d.vel.info),J("p-glas-z").hidden=!d.glas,d.glas&&(J("p-glas").textContent=d.glas.offen&&!d.glas.preis?"auf Anfrage":xt(d.glas.preis)+(d.glas.offen?" + Anfrage":""),J("p-glas-info").textContent=d.glas.info),J("p-led-z").hidden=!d.led,d.led&&(J("p-led").textContent=xt(d.led.preis),J("p-led-info").textContent=d.led.info),J("p-verk-z").hidden=!d.verk,d.verk&&(J("p-verk").textContent=xt(d.verk.preis),J("p-verk-info").textContent=d.verk.info)}}var Vr=new Image;Vr.src=sp;function Pp(){gp();let i=on.domElement,e=i.width,t=i.height,n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0);let r=Math.round(t*.11),o=s.createLinearGradient(0,t-r*1.6,0,t);o.addColorStop(0,"rgba(15,15,15,0)"),o.addColorStop(1,"rgba(15,15,15,0.85)"),s.fillStyle=o,s.fillRect(0,t-r*1.6,e,r*1.6);let a=Math.round(t*.03),l=r*.75,c=Vr.complete?l*Vr.width/Vr.height:0;c&&s.drawImage(Vr,a,t-l-a*.8,c,l);let h=e-c-a*3,f=(p,g,d,_,m)=>{let u=Math.round(r*d);for(s.font=`${g} ${u}px "Segoe UI", Arial`;u>8&&s.measureText(p).width>h;)u--,s.font=`${g} ${u}px "Segoe UI", Arial`;s.fillStyle=_,s.fillText(p,e-a,m)};return s.textAlign="right",f(is[S.produkt].name,900,.3,"#fff",t-a-r*.38),f(J("spec").textContent.split(" \xB7 ").slice(0,4).join(" \xB7 "),600,.2,"#e8b840",t-a),n}function gv(){let i=Pp(),e=document.createElement("a");e.download=`Antonov_${is[S.produkt].name.replace(/\s+/g,"_")}_${S.b}x${S.t}.png`,e.href=i.toDataURL("image/png"),e.click()}function qa(){let i=ka.clientWidth,e=ka.clientHeight;on.setSize(i,e),Wa.setSize(i,e),si&&(si.setPixelRatio(on.getPixelRatio()),si.setSize(i,e)),rn.aspect=i/e,rn.updateProjectionMatrix()}window.addEventListener("resize",qa);window.addEventListener("orientationchange",()=>setTimeout(()=>{qa(),Zr("perspektive")},300));var _v=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;function Qi(i){if(Ti){let e=Math.min(1,(i-Ti.s)/900),t=_v(e);rn.position.lerpVectors(Ti.p0,Ti.p1,t),Zt.target.lerpVectors(Ti.t0,Ti.t1,t),e>=1&&(Ti=null)}if(ni!==null){let e=Math.min(.05,(i-(Qi.t||i))/1e3),t=25*e;S.ausfahren=Math.abs(ni-S.ausfahren)<=t?ni:S.ausfahren+Math.sign(ni-S.ausfahren)*t,Ks&&Ks(S.ausfahren/100),Ap(),S.ausfahren===ni&&(ni=null)}if(Ai!==null){let e=.4*Math.min(.05,(i-(Qi.t||i))/1e3);S.glasAuf=Math.abs(Ai-S.glasAuf)<=e?Ai:S.glasAuf+Math.sign(Ai-S.glasAuf)*e;for(let t of eu)t(S.glasAuf);S.glasAuf===Ai&&(Ai=null)}if(wi!==null){let e=.4*Math.min(.05,(i-(Qi.t||i))/1e3);S.velAuf=Math.abs(wi-S.velAuf)<=e?wi:S.velAuf+Math.sign(wi-S.velAuf)*e,Ga&&Ga(S.velAuf),S.velAuf===wi&&(wi=null)}if(ti!==null){let e=40*Math.min(.05,(i-(Qi.t||i))/1e3);S.spWinkel=Math.abs(ti-S.spWinkel)<=e?ti:S.spWinkel+Math.sign(ti-S.spWinkel)*e,Zs&&Zs(S.spWinkel),J("in-spwinkel").value=Math.round(S.spWinkel),J("spwinkel-w").textContent=Math.round(S.spWinkel)+"\xB0",S.spWinkel===ti&&(ti=null)}Qi.t=i,Zt.update(),gp(),Wa.render(Nt,rn),requestAnimationFrame(Qi)}qa();kt();Zr("perspektive",!0);requestAnimationFrame(Qi);function xv(i){let e=n=>n.replace(/\n/g,`
  `),t=[`Dach (Listenpreis): ${xt(i.dach)}`,`Montage: ${xt(i.mont)} (${i.montInfo})`,`Lieferung: ${xt(i.lief)}`];return i.led&&t.push(`LED-Spots: ${xt(i.led.preis)}
  ${i.led.info}`),i.verk&&t.push(`Verkleidung: ${xt(i.verk.preis)}
  ${e(i.verk.info)}`),i.glas&&t.push(`Verglasung: ${xt(i.glas.preis)}${i.glas.offen?" + Anfrage":""}
  ${e(i.glas.info)}`),i.spx&&t.push(`Lamellendach-Extras: ${xt(i.spx.preis)}
  ${e(i.spx.info)}`),i.vel&&t.push(`Velaris: ${xt(i.vel.preis)}${i.vel.offen?" + Anfrage":""}
  ${e(i.vel.info)}`),i.mark&&t.push(`Markisen: ${xt(i.mark.preis)}${i.mark.offen?" + Anfrage":""}
  ${e(i.mark.info)}`),t.push(`Netto: ${xt(i.netto)}`,`Brutto inkl. 19 % MwSt.: ${xt(i.brutto)}`),i.hinweis&&t.push("Ab 4,05 m Tiefe ggf. zzgl. Verst\xE4rkung (beim Aufma\xDF)."),t.join(`
`)}{let i=window.matchMedia("(max-width: 760px)"),e=document.querySelector(".abschl"),t=document.querySelector("#panel .scroll"),n=document.querySelector(".fuss"),s=()=>{i.matches?t.appendChild(e):n.before(e),e.classList.toggle("im-scroll",i.matches)};s(),i.addEventListener("change",s)}Wd({zustand:()=>S,titel:()=>is[S.produkt].name,spec:()=>J("spec").textContent.split(" \xB7 ").join(`
`),preis:yp,preisText:xv,bild:()=>Pp().toDataURL("image/jpeg",.88),nachAbschluss:()=>{S.preis=!0,kt()}})});vv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
