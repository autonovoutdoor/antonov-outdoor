(()=>{var rt=(n,e)=>()=>(n&&(e=n(n=0)),e);var Yp=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);function Zi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Eh(n,e){return(n%e+e)%e}function E0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function T0(n,e,t){return n!==e?(t-n)/(e-n):0}function hr(n,e,t){return(1-t)*n+t*e}function w0(n,e,t,i){return hr(n,e,1-Math.exp(-t*i))}function A0(n,e=1){return e-Math.abs(Eh(n,e*2)-e)}function R0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function C0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function P0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function I0(n,e){return n+Math.random()*(e-n)}function L0(n){return n*(.5-Math.random())}function D0(n){n!==void 0&&(Lu=n);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function U0(n){return n*cr}function N0(n){return n*gr}function O0(n){return(n&n-1)===0&&n!==0}function F0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function k0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function z0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),m=o((e-i)/2),g=r((i-e)/2),d=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*m,a*c);break;case"YZY":n.set(l*m,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*m,a*h,a*c);break;case"XZX":n.set(a*h,l*d,l*g,a*c);break;case"YXY":n.set(l*g,a*h,l*d,a*c);break;case"ZYZ":n.set(l*d,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B0(){let n=_r("canvas");return n.style.display="block",n}function No(n){n in Du||(Du[n]=!0,console.warn(n))}function H0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function V0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function al(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function hl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=i.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function nm(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gi,a),l===null)return null;_o.copy(a),_o.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:n}}function xo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,fo),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);let h=nm(n,e,t,i,fo,po,mo,Yu);if(h){let f=new L;zi.getBarycoord(Yu,fo,po,mo,f),s&&(h.uv=zi.getInterpolatedAttribute(s,a,l,c,f,new ne)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,f,new ne)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,f,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new L,materialIndex:0};zi.getNormal(fo,po,mo,m.normal),h.face=m,h.barycoord=f}return h}function Os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Os(n[t]);for(let s in i)e[s]=i[s]}return e}function im(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $f(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}function Zf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lm(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((g,d)=>g.start-d.start);let m=0;for(let g=1;g<f.length;g++){let d=f[m],_=f[g];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++m,f[m]=_)}f.length=m+1;for(let g=0,d=f.length;g<d;g++){let _=f[g];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Gg(n,e,t,i,s,r,o){let a=new ze(0),l=r===!0?0:1,c,h,f=null,m=0,g=null;function d(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,M=d(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),x=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(v,x){let M=d(x);M&&(M.isCubeTexture||M.mapping===xa)?(h===void 0&&(h=new Oe(new bt(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Os(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(Oi)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,(f!==M||m!==M.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,m=M.version,g=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Oe(new Pn(2,2),new Et({name:"BackgroundMaterial",uniforms:Os(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,g=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(yo,$f(n)),i.buffers.color.setClear(yo.r,yo.g,yo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:_,addToRenderList:p}}function Wg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(y,b,D,O,H){let Z=!1,z=f(O,D,b);r!==z&&(r=z,c(r.object)),Z=g(y,O,D,H),Z&&d(y,O,D,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(y,b,D,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function f(y,b,D){let O=D.wireframe===!0,H=i[y.id];H===void 0&&(H={},i[y.id]=H);let Z=H[b.id];Z===void 0&&(Z={},H[b.id]=Z);let z=Z[O];return z===void 0&&(z=m(l()),Z[O]=z),z}function m(y){let b=[],D=[],O=[];for(let H=0;H<t;H++)b[H]=0,D[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:O,object:y,attributes:{},index:null}}function g(y,b,D,O){let H=r.attributes,Z=b.attributes,z=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let oe=H[B],he=Z[B];if(he===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function d(y,b,D,O){let H={},Z=b.attributes,z=0,j=D.getAttributes();for(let B in j)if(j[B].location>=0){let oe=Z[B];oe===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));let he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),H[B]=he,z++}r.attributes=H,r.attributesNum=z,r.index=O}function _(){let y=r.newAttributes;for(let b=0,D=y.length;b<D;b++)y[b]=0}function p(y){u(y,0)}function u(y,b){let D=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;D[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),H[y]!==b&&(n.vertexAttribDivisor(y,b),H[y]=b)}function v(){let y=r.newAttributes,b=r.enabledAttributes;for(let D=0,O=b.length;D<O;D++)b[D]!==y[D]&&(n.disableVertexAttribArray(D),b[D]=0)}function x(y,b,D,O,H,Z,z){z===!0?n.vertexAttribIPointer(y,b,D,H,Z):n.vertexAttribPointer(y,b,D,O,H,Z)}function M(y,b,D,O){_();let H=O.attributes,Z=D.getAttributes(),z=b.defaultAttributeValues;for(let j in Z){let B=Z[j];if(B.location>=0){let q=H[j];if(q===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){let oe=q.normalized,he=q.itemSize,ke=e.get(q);if(ke===void 0)continue;let Xe=ke.buffer,$=ke.type,ie=ke.bytesPerElement,Me=$===n.INT||$===n.UNSIGNED_INT||q.gpuType===mh;if(q.isInterleavedBufferAttribute){let le=q.data,Ie=le.stride,Pe=q.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)u(B.location+Ne,le.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)p(B.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<B.locationSize;Ne++)x(B.location+Ne,he/B.locationSize,$,oe,Ie*ie,(Pe+he/B.locationSize*Ne)*ie,Me)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<B.locationSize;le++)u(B.location+le,q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<B.locationSize;le++)p(B.location+le);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let le=0;le<B.locationSize;le++)x(B.location+le,he/B.locationSize,$,oe,he*ie,he/B.locationSize*le*ie,Me)}}else if(z!==void 0){let oe=z[j];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(B.location,oe);break;case 3:n.vertexAttrib3fv(B.location,oe);break;case 4:n.vertexAttrib4fv(B.location,oe);break;default:n.vertexAttrib1fv(B.location,oe)}}}}v()}function R(){C();for(let y in i){let b=i[y];for(let D in b){let O=b[D];for(let H in O)h(O[H].object),delete O[H];delete b[D]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;let b=i[y.id];for(let D in b){let O=b[D];for(let H in O)h(O[H].object),delete O[H];delete b[D]}delete i[y.id]}function w(y){for(let b in i){let D=i[b];if(D[y.id]===void 0)continue;let O=D[y.id];for(let H in O)h(O[H].object),delete O[H];delete D[y.id]}}function C(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Xg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let g=0;for(let d=0;d<f;d++)g+=h[d];t.update(g,i,1)}function l(c,h,f,m){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<c.length;d++)o(c[d],h[d],m[d]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];for(let _=0;_<m.length;_++)t.update(d,i,m[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Cn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!C)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){let w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function Yg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new An,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let g=f.length!==0||m||i!==0||s;return s=m,i=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=h(f,m,0)},this.setState=function(f,m,g){let d=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!s||d===null||d.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,x=v*4,M=u.clippingState||null;l.value=M,M=h(d,m,x,g);for(let R=0;R!==x;++R)M[R]=t[R];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,m,g,d){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,d!==!0||p===null){let u=g+_*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,M=g;x!==_;++x,M+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function $g(n){let e=new WeakMap;function t(o,a){return a===pr?o.mapping=Ds:a===$l&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pr||a===$l)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Zg(n){let e=[],t=[],i=[],s=n,r=n-ws+1+Ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ws?l=Ku[o-n+ws-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,m=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,d=6,_=3,p=2,u=1,v=new Float32Array(_*d*g),x=new Float32Array(p*d*g),M=new Float32Array(u*d*g);for(let T=0;T<g;T++){let w=T%3*2/3-1,C=T>2?0:-1,U=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(U,_*d*T),x.set(m,p*d*T);let y=[T,T,T,T,T,T];M.set(y,u*d*T)}let R=new Ct;R.setAttribute("position",new zt(v,_)),R.setAttribute("uv",new zt(x,p)),R.setAttribute("faceIndex",new zt(M,u)),e.push(R),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qu(n,e,t){let i=new Wt(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kg(n,e,t){let i=new Float32Array(Bi),s=new L(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function ef(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function tf(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function Jg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===pr||l===$l,h=l===Ds||l===Us;if(c||h){let f=e.get(a),m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new ks(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new ks(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&No("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Qg(n,e,t,i){let s={},r=new WeakMap;function o(f){let m=f.target;m.index!==null&&e.remove(m.index);for(let d in m.attributes)e.remove(m.attributes[d]);for(let d in m.morphAttributes){let _=m.morphAttributes[d];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}m.removeEventListener("dispose",o),delete s[m.id];let g=r.get(m);g&&(e.remove(g),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function l(f){let m=f.attributes;for(let d in m)e.update(m[d],n.ARRAY_BUFFER);let g=f.morphAttributes;for(let d in g){let _=g[d];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){let m=[],g=f.index,d=f.attributes.position,_=0;if(g!==null){let v=g.array;_=g.version;for(let x=0,M=v.length;x<M;x+=3){let R=v[x+0],T=v[x+1],w=v[x+2];m.push(R,T,T,w,w,R)}}else if(d!==void 0){let v=d.array;_=d.version;for(let x=0,M=v.length/3-1;x<M;x+=3){let R=x+0,T=x+1,w=x+2;m.push(R,T,T,w,w,R)}}else return;let p=new(qf(m)?qo:Xo)(m,1);p.version=_;let u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){let m=r.get(f);if(m){let g=f.index;g!==null&&m.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function e2(n,e,t){let i;function s(m){i=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,g){n.drawElements(i,g,r,m*o),t.update(g,i,1)}function c(m,g,d){d!==0&&(n.drawElementsInstanced(i,g,r,m*o,d),t.update(g,i,d))}function h(m,g,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,m,0,d);let p=0;for(let u=0;u<d;u++)p+=g[u];t.update(p,i,1)}function f(m,g,d,_){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<m.length;u++)c(m[u]/o,g[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,r,m,0,_,0,d);let u=0;for(let v=0;v<d;v++)u+=g[v];for(let v=0;v<_.length;v++)t.update(u,i,_[v])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function t2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function n2(n,e,t){let i=new WeakMap,s=new ot;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,m=i.get(a);if(m===void 0||m.count!==f){let U=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();let g=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;g===!0&&(x=1),d===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*f),w=new Vo(T,M,R,f);w.type=Hn,w.needsUpdate=!0;let C=x*4;for(let y=0;y<f;y++){let b=p[y],D=u[y],O=v[y],H=M*R*4*y;for(let Z=0;Z<b.count;Z++){let z=Z*C;g===!0&&(s.fromBufferAttribute(b,Z),T[H+z+0]=s.x,T[H+z+1]=s.y,T[H+z+2]=s.z,T[H+z+3]=0),d===!0&&(s.fromBufferAttribute(D,Z),T[H+z+4]=s.x,T[H+z+5]=s.y,T[H+z+6]=s.z,T[H+z+7]=0),_===!0&&(s.fromBufferAttribute(O,Z),T[H+z+8]=s.x,T[H+z+9]=s.y,T[H+z+10]=s.z,T[H+z+11]=O.itemSize===4?s.w:1)}}m={count:f,texture:w,size:new ne(M,R)},i.set(a,m),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];let d=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",d),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function i2(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Gs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function s2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function o2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function a2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function l2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),It(t,i)}}function c2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),It(t,i)}}function h2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;of.set(i),n.uniformMatrix4fv(this.addr,!1,of),It(t,i)}}function u2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function d2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function p2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function m2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function _2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function x2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function v2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nf.compareFunction=Xf,r=nf):r=Kf,t.setTexture2D(e||r,s)}function y2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jf,s)}function M2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qf,s)}function S2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jf,s)}function b2(n){switch(n){case 5126:return s2;case 35664:return r2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return c2;case 35676:return h2;case 5124:case 35670:return u2;case 35667:case 35671:return f2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return S2}}function E2(n,e){n.uniform1fv(this.addr,e)}function T2(n,e){let t=Gs(e,this.size,2);n.uniform2fv(this.addr,t)}function w2(n,e){let t=Gs(e,this.size,3);n.uniform3fv(this.addr,t)}function A2(n,e){let t=Gs(e,this.size,4);n.uniform4fv(this.addr,t)}function R2(n,e){let t=Gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C2(n,e){let t=Gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P2(n,e){let t=Gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I2(n,e){n.uniform1iv(this.addr,e)}function L2(n,e){n.uniform2iv(this.addr,e)}function D2(n,e){n.uniform3iv(this.addr,e)}function U2(n,e){n.uniform4iv(this.addr,e)}function N2(n,e){n.uniform1uiv(this.addr,e)}function O2(n,e){n.uniform2uiv(this.addr,e)}function F2(n,e){n.uniform3uiv(this.addr,e)}function k2(n,e){n.uniform4uiv(this.addr,e)}function z2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kf,r[o])}function B2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jf,r[o])}function H2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qf,r[o])}function V2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jf,r[o])}function G2(n){switch(n){case 5126:return E2;case 35664:return T2;case 35665:return w2;case 35666:return A2;case 35674:return R2;case 35675:return C2;case 35676:return P2;case 5124:case 35670:return I2;case 35667:case 35671:return L2;case 35668:case 35672:return D2;case 35669:case 35673:return U2;case 5125:return N2;case 36294:return O2;case 36295:return F2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return z2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return V2}}function cf(n,e){n.seq.push(e),n.map[e.id]=e}function W2(n,e,t){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(t,c===void 0?new Rc(a,n,e):new Cc(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Pc(a),cf(t,f)),t=f}}}function hf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Y2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $2(n){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n),i;switch(e===t?i="":e===zo&&t===ko?i="LinearDisplayP3ToLinearSRGB":e===ko&&t===zo&&(i="LinearSRGBToLinearDisplayP3"),n){case Si:case va:return[i,"LinearTransferOETF"];case dt:case bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Y2(n.getShaderSource(e),o)}else return s}function Z2(n,e){let t=$2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K2(n,e){let t;switch(e){case hh:t="Linear";break;case uh:t="Reinhard";break;case fh:t="Cineon";break;case Pr:t="ACESFilmic";break;case dh:t="AgX";break;case ph:t="Neutral";break;case f0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J2(){et.getLuminanceCoefficients(So);let n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Q2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lr(n){return n!==""}function ff(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ic(n){return n.replace(t_,i_)}function i_(n,e){let t=$e[e];if(t===void 0){let i=n_.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}function pf(n){return n.replace(s_,r_)}function r_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case h0:e="ENVMAP_BLENDING_MIX";break;case u0:e="ENVMAP_BLENDING_ADD";break}return e}function h_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function u_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=o_(t),c=a_(t),h=l_(t),f=c_(t),m=h_(t),g=j2(t),d=Q2(r),_=s.createProgram(),p,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(lr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(lr).join(`
`),u.length>0&&(u+=`
`)):(p=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),u=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?$e.tonemapping_pars_fragment:"",t.toneMapping!==pi?K2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Z2("linearToOutputTexel",t.outputColorSpace),J2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Ic(o),o=ff(o,t),o=df(o,t),a=Ic(a),a=ff(a,t),a=df(a,t),o=pf(o),a=pf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=v+p+o,M=v+u+a,R=hf(s,s.VERTEX_SHADER,x),T=hf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(b){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(T).trim(),Z=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,T);else{let j=uf(s,R,"vertex"),B=uf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+j+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||H==="")&&(z=!1);z&&(b.diagnostics={runnable:Z,programLog:D,vertexShader:{log:O,prefix:p},fragmentShader:{log:H,prefix:u}})}s.deleteShader(R),s.deleteShader(T),C=new Is(s,_),U=e_(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let U;this.getAttributes=function(){return U===void 0&&w(this),U};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,X2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}function d_(n,e,t,i,s,r,o){let a=new Go,l=new Lc,c=new Set,h=[],f=s.logarithmicDepthBuffer,m=s.reverseDepthBuffer,g=s.vertexTextures,d=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,b,D,O,H){let Z=O.fog,z=H.geometry,j=y.isMeshStandardMaterial?O.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),q=B&&B.mapping===xa?B.image.height:null,oe=_[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ke=he!==void 0?he.length:0,Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let $,ie,Me,le;if(oe){let Qt=Bn[oe];$=Qt.vertexShader,ie=Qt.fragmentShader}else $=y.vertexShader,ie=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);let Ie=n.getRenderTarget(),Pe=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,qe=!!y.map,ee=!!y.matcap,I=!!B,ue=!!y.aoMap,ce=!!y.lightMap,se=!!y.bumpMap,fe=!!y.normalMap,Re=!!y.displacementMap,xe=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,V=y.anisotropy>0,K=y.clearcoat>0,te=y.dispersion>0,J=y.iridescence>0,Ee=y.sheen>0,de=y.transmission>0,ge=V&&!!y.anisotropyMap,Ye=K&&!!y.clearcoatMap,re=K&&!!y.clearcoatNormalMap,_e=K&&!!y.clearcoatRoughnessMap,Be=J&&!!y.iridescenceMap,He=J&&!!y.iridescenceThicknessMap,be=Ee&&!!y.sheenColorMap,Je=Ee&&!!y.sheenRoughnessMap,We=!!y.specularMap,Qe=!!y.specularColorMap,N=!!y.specularIntensityMap,me=de&&!!y.transmissionMap,X=de&&!!y.thicknessMap,Q=!!y.gradientMap,ve=!!y.alphaMap,Se=y.alphaTest>0,je=!!y.alphaHash,yt=!!y.extensions,jt=pi;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(jt=n.toneMapping);let tt={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:ie,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Si,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:ee,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:q,aoMap:ue,lightMap:ce,bumpMap:se,normalMap:fe,displacementMap:g&&Re,emissiveMap:xe,normalMapObjectSpace:fe&&y.normalMapType===g0,normalMapTangentSpace:fe&&y.normalMapType===Sh,metalnessMap:P,roughnessMap:E,anisotropy:V,anisotropyMap:ge,clearcoat:K,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:te,iridescence:J,iridescenceMap:Be,iridescenceThicknessMap:He,sheen:Ee,sheenColorMap:be,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Qe,specularIntensityMap:N,transmission:de,transmissionMap:me,thicknessMap:X,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Rs&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:je,combine:y.combine,mapUv:qe&&p(y.map.channel),aoMapUv:ue&&p(y.aoMap.channel),lightMapUv:ce&&p(y.lightMap.channel),bumpMapUv:se&&p(y.bumpMap.channel),normalMapUv:fe&&p(y.normalMap.channel),displacementMapUv:Re&&p(y.displacementMap.channel),emissiveMapUv:xe&&p(y.emissiveMap.channel),metalnessMapUv:P&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:ge&&p(y.anisotropyMap.channel),clearcoatMapUv:Ye&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&p(y.sheenRoughnessMap.channel),specularMapUv:We&&p(y.specularMap.channel),specularColorMapUv:Qe&&p(y.specularColorMap.channel),specularIntensityMapUv:N&&p(y.specularIntensityMap.channel),transmissionMapUv:me&&p(y.transmissionMap.channel),thicknessMapUv:X&&p(y.thicknessMap.channel),alphaMapUv:ve&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(fe||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(qe||ve),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:m,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_t,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function v(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(x(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let b=_[y.type],D;if(b){let O=Bn[b];D=Dn.clone(O.uniforms)}else D=y.uniforms;return D}function T(y,b){let D;for(let O=0,H=h.length;O<H;O++){let Z=h[O];if(Z.cacheKey===b){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new u_(n,b,y,r),h.push(D)),D}function w(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:U}}function p_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function m_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,m,g,d,_,p){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:m,material:g,groupOrder:d,renderOrder:f.renderOrder,z:_,group:p},n[e]=u):(u.id=f.id,u.object=f,u.geometry=m,u.material=g,u.groupOrder=d,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,m,g,d,_,p){let u=o(f,m,g,d,_,p);g.transmission>0?i.push(u):g.transparent===!0?s.push(u):t.push(u)}function l(f,m,g,d,_,p){let u=o(f,m,g,d,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,m){t.length>1&&t.sort(f||m_),i.length>1&&i.sort(m||gf),s.length>1&&s.sort(m||gf)}function h(){for(let f=e,m=n.length;f<m;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function g_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new _f,n.set(i,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function __(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function x_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function y_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function M_(n){let e=new __,t=x_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new Ke,o=new Ke;function a(c){let h=0,f=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,d=0,_=0,p=0,u=0,v=0,x=0,M=0,R=0,T=0,w=0;c.sort(y_);for(let U=0,y=c.length;U<y;U++){let b=c[U],D=b.color,O=b.intensity,H=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=D.r*O,f+=D.g*O,m+=D.b*O;else if(b.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(b.sh.coefficients[z],O);w++}else if(b.isDirectionalLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=b.shadow.matrix,v++}i.directional[g]=z,g++}else if(b.isSpotLight){let z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(D).multiplyScalar(O),z.distance=H,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,i.spot[_]=z;let j=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,j.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[_]=j.matrix,b.castShadow){let B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=Z,M++}_++}else if(b.isRectAreaLight){let z=e.get(b);z.color.copy(D).multiplyScalar(O),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=z,p++}else if(b.isPointLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){let j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[d]=B,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=b.shadow.matrix,x++}i.point[d]=z,d++}else if(b.isHemisphereLight){let z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(O),z.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[u]=z,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=m;let C=i.hash;(C.directionalLength!==g||C.pointLength!==d||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==R||C.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=d,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,C.directionalLength=g,C.pointLength=d,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=R,C.numLightProbes=w,i.version=v_++)}function l(c,h){let f=0,m=0,g=0,d=0,_=0,p=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let x=c[u];if(x.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=i.rectArea[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),d++}else if(x.isPointLight){let M=i.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),m++}else if(x.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function xf(n){let e=new M_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function S_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new xf(n),e.set(s,[a])):r>=o.length?(a=new xf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function T_(n,e,t){let i=new xr,s=new ne,r=new ne,o=new ot,a=new Uc({depthPacking:m0}),l=new Nc,c={},h=t.maxTextureSize,f={[gi]:en,[en]:gi,[_t]:_t},m=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:b_,fragmentShader:E_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let d=new Ct;d.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Oe(d,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let u=this.type;this.render=function(T,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let U=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Rt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=u!==Jn&&this.type===Jn,H=u===Jn&&this.type!==Jn;for(let Z=0,z=T.length;Z<z;Z++){let j=T[Z],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();if(s.multiply(q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,B.mapSize.y=r.y)),B.map===null||O===!0||H===!0){let he=this.type!==Jn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new Wt(s.x,s.y,he),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let oe=B.getViewportCount();for(let he=0;he<oe;he++){let ke=B.getViewport(he);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),D.viewport(o),B.updateMatrices(j,he),i=B.getFrustum(),M(w,C,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Jn&&v(B,C),B.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(U,y,b)};function v(T,w){let C=e.update(_);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(s.x,s.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,C,m,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,C,g,_,null)}function x(T,w,C,U){let y=null,b=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)y=b;else if(y=C.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=y.uuid,O=w.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let Z=H[O];Z===void 0&&(Z=y.clone(),H[O]=Z,w.addEventListener("dispose",R)),y=Z}if(y.visible=w.visible,y.wireframe=w.wireframe,U===Jn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=n.properties.get(y);D.light=C}return y}function M(T,w,C,U,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Jn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let O=e.update(T),H=T.material;if(Array.isArray(H)){let Z=O.groups;for(let z=0,j=Z.length;z<j;z++){let B=Z[z],q=H[B.materialIndex];if(q&&q.visible){let oe=x(T,q,U,y);T.onBeforeShadow(n,T,w,C,O,oe,B),n.renderBufferDirect(C,null,O,oe,T,B),T.onAfterShadow(n,T,w,C,O,oe,B)}}}else if(H.visible){let Z=x(T,H,U,y);T.onBeforeShadow(n,T,w,C,O,Z,null),n.renderBufferDirect(C,null,O,Z,T,null),T.onAfterShadow(n,T,w,C,O,Z,null)}}let D=T.children;for(let O=0,H=D.length;O<H;O++)M(D[O],w,C,U,y)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let U=c[C],y=T.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}function A_(n){function e(){let N=!1,me=new ot,X=null,Q=new ot(0,0,0,0);return{setMask:function(ve){X!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Se,je,yt,jt){jt===!0&&(ve*=yt,Se*=yt,je*=yt),me.set(ve,Se,je,yt),Q.equals(me)===!1&&(n.clearColor(ve,Se,je,yt),Q.copy(me))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function t(){let N=!1,me=!1,X=null,Q=null,ve=null;return{setReversed:function(Se){me=Se},setTest:function(Se){Se?Me(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Se){X!==Se&&!N&&(n.depthMask(Se),X=Se)},setFunc:function(Se){if(me&&(Se=w_[Se]),Q!==Se){switch(Se){case Hl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case ql:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Se}},setLocked:function(Se){N=Se},setClear:function(Se){ve!==Se&&(n.clearDepth(Se),ve=Se)},reset:function(){N=!1,X=null,Q=null,ve=null}}}function i(){let N=!1,me=null,X=null,Q=null,ve=null,Se=null,je=null,yt=null,jt=null;return{setTest:function(tt){N||(tt?Me(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){me!==tt&&!N&&(n.stencilMask(tt),me=tt)},setFunc:function(tt,Qt,Xn){(X!==tt||Q!==Qt||ve!==Xn)&&(n.stencilFunc(tt,Qt,Xn),X=tt,Q=Qt,ve=Xn)},setOp:function(tt,Qt,Xn){(Se!==tt||je!==Qt||yt!==Xn)&&(n.stencilOp(tt,Qt,Xn),Se=tt,je=Qt,yt=Xn)},setLocked:function(tt){N=tt},setClear:function(tt){jt!==tt&&(n.clearStencil(tt),jt=tt)},reset:function(){N=!1,me=null,X=null,Q=null,ve=null,Se=null,je=null,yt=null,jt=null}}}let s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,m=[],g=null,d=!1,_=null,p=null,u=null,v=null,x=null,M=null,R=null,T=new ze(0,0,0),w=0,C=!1,U=null,y=null,b=null,D=null,O=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,z=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=z>=2);let B=null,q={},oe=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),ke=new ot().fromArray(oe),Xe=new ot().fromArray(he);function $(N,me,X,Q){let ve=new Uint8Array(4),Se=n.createTexture();n.bindTexture(N,Se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<X;je++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(me+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Se}let ie={};ie[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),r.setFunc(Ls),ce(!1),se(Su),Me(n.CULL_FACE),I(Rt);function Me(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function le(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ie(N,me){return h[N]!==me?(n.bindFramebuffer(N,me),h[N]=me,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Pe(N,me){let X=m,Q=!1;if(N){X=f.get(me),X===void 0&&(X=[],f.set(me,X));let ve=N.textures;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,je=ve.length;Se<je;Se++)X[Se]=n.COLOR_ATTACHMENT0+Se;X.length=ve.length,Q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Q=!0);Q&&n.drawBuffers(X)}function Ne(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let qe={[gn]:n.FUNC_ADD,[Kp]:n.FUNC_SUBTRACT,[Jp]:n.FUNC_REVERSE_SUBTRACT};qe[jp]=n.MIN,qe[Qp]=n.MAX;let ee={[Vs]:n.ZERO,[e0]:n.ONE,[t0]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[r0]:n.SRC_ALPHA_SATURATE,[_a]:n.DST_COLOR,[ga]:n.DST_ALPHA,[n0]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[s0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[o0]:n.CONSTANT_COLOR,[a0]:n.ONE_MINUS_CONSTANT_COLOR,[l0]:n.CONSTANT_ALPHA,[c0]:n.ONE_MINUS_CONSTANT_ALPHA};function I(N,me,X,Q,ve,Se,je,yt,jt,tt){if(N===Rt){d===!0&&(le(n.BLEND),d=!1);return}if(d===!1&&(Me(n.BLEND),d=!0),N!==ch){if(N!==_||tt!==C){if((p!==gn||x!==gn)&&(n.blendEquation(n.FUNC_ADD),p=gn,x=gn),tt)switch(N){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,v=null,M=null,R=null,T.set(0,0,0),w=0,_=N,C=tt}return}ve=ve||me,Se=Se||X,je=je||Q,(me!==p||ve!==x)&&(n.blendEquationSeparate(qe[me],qe[ve]),p=me,x=ve),(X!==u||Q!==v||Se!==M||je!==R)&&(n.blendFuncSeparate(ee[X],ee[Q],ee[Se],ee[je]),u=X,v=Q,M=Se,R=je),(yt.equals(T)===!1||jt!==w)&&(n.blendColor(yt.r,yt.g,yt.b,jt),T.copy(yt),w=jt),_=N,C=!1}function ue(N,me){N.side===_t?le(n.CULL_FACE):Me(n.CULL_FACE);let X=N.side===en;me&&(X=!X),ce(X),N.blending===Rs&&N.transparent===!1?I(Rt):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);let Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function se(N){N!==$p?(Me(n.CULL_FACE),N!==y&&(N===Su?n.cullFace(n.BACK):N===Zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),y=N}function fe(N){N!==b&&(Z&&n.lineWidth(N),b=N)}function Re(N,me,X){N?(Me(n.POLYGON_OFFSET_FILL),(D!==me||O!==X)&&(n.polygonOffset(me,X),D=me,O=X)):le(n.POLYGON_OFFSET_FILL)}function xe(N){N?Me(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+H-1),B!==N&&(n.activeTexture(N),B=N)}function E(N,me,X){X===void 0&&(B===null?X=n.TEXTURE0+H-1:X=B);let Q=q[X];Q===void 0&&(Q={type:void 0,texture:void 0},q[X]=Q),(Q.type!==N||Q.texture!==me)&&(B!==X&&(n.activeTexture(X),B=X),n.bindTexture(N,me||ie[N]),Q.type=N,Q.texture=me)}function V(){let N=q[B];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(N){ke.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function be(N){Xe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function Je(N,me){let X=l.get(me);X===void 0&&(X=new WeakMap,l.set(me,X));let Q=X.get(N);Q===void 0&&(Q=n.getUniformBlockIndex(me,N.name),X.set(N,Q))}function We(N,me){let Q=l.get(me).get(N);a.get(me)!==Q&&(n.uniformBlockBinding(me,Q,N.__bindingPointIndex),a.set(me,Q))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,q={},h={},f=new WeakMap,m=[],g=null,d=!1,_=null,p=null,u=null,v=null,x=null,M=null,R=null,T=new ze(0,0,0),w=0,C=!1,U=null,y=null,b=null,D=null,O=null,ke.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Me,disable:le,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:Ne,setBlending:I,setMaterial:ue,setFlipSided:ce,setCullFace:se,setLineWidth:fe,setPolygonOffset:Re,setScissorTest:xe,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:_e,texImage3D:Be,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:He,viewport:be,reset:Qe}}function vf(n,e,t,i){let s=R_(i);switch(t){case zf:return n*e;case Hf:return n*e;case Vf:return n*e*2;case xh:return n*e/s.components*s.byteLength;case vh:return n*e/s.components*s.byteLength;case Gf:return n*e*2/s.components*s.byteLength;case yh:return n*e*2/s.components*s.byteLength;case Bf:return n*e*3/s.components*s.byteLength;case un:return n*e*4/s.components*s.byteLength;case Mh:return n*e*4/s.components*s.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case jl:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uo:case _c:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wf:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(n){switch(n){case Cn:case Of:return{byteLength:1,components:1};case mr:case Ff:case Mn:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Gi:case mh:case Hn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,E){return g?new OffscreenCanvas(P,E):_r("canvas")}function _(P,E,V){let K=1,te=xe(P);if((te.width>V||te.height>V)&&(K=V/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(K*te.width),Ee=Math.floor(K*te.height);f===void 0&&(f=d(J,Ee));let de=E?d(J,Ee):f;return de.width=J,de.height=Ee,de.getContext("2d").drawImage(P,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ee+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==kt&&P.minFilter!==Rn}function u(P){n.generateMipmap(P)}function v(P,E,V,K,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),E===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),E===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){let Ee=te?Fo:et.getTransfer(K);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Ee===ct?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,E){let V;return P?E===null||E===Gi||E===_i?V=n.DEPTH24_STENCIL8:E===Hn?V=n.DEPTH32F_STENCIL8:E===mr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===_i?V=n.DEPTH_COMPONENT24:E===Hn?V=n.DEPTH_COMPONENT32F:E===mr&&(V=n.DEPTH_COMPONENT16),V}function M(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=P.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),U(E)}function w(P){let E=i.get(P);if(E.__webglInit===void 0)return;let V=P.source,K=m.get(V);if(K){let te=K[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(P),Object.keys(K).length===0&&m.delete(V)}i.remove(P)}function C(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let V=P.source,K=m.get(V);delete K[E.__cacheKey],o.memory.textures--}function U(P){let E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let te=0;te<E.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(E.__webglFramebuffer[K][te]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=P.textures;for(let K=0,te=V.length;K<te;K++){let J=i.get(V[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(P)}let y=0;function b(){y=0}function D(){let P=y;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),y+=1,P}function O(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){let V=i.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){let K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(V,P,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function Z(P,E){let V=i.get(P);if(P.version>0&&V.__version!==P.version){Xe(V,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function z(P,E){let V=i.get(P);if(P.version>0&&V.__version!==P.version){Xe(V,P,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function j(P,E){let V=i.get(P);if(P.version>0&&V.__version!==P.version){$(V,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}let B={[St]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[Zl]:n.MIRRORED_REPEAT},q={[kt]:n.NEAREST,[d0]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},oe={[_0]:n.NEVER,[b0]:n.ALWAYS,[x0]:n.LESS,[Xf]:n.LEQUAL,[v0]:n.EQUAL,[S0]:n.GEQUAL,[y0]:n.GREATER,[M0]:n.NOTEQUAL};function he(P,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===sl||E.magFilter===to||E.magFilter===Vi||E.minFilter===Rn||E.minFilter===sl||E.minFilter===to||E.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,B[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,q[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kt||E.minFilter!==to&&E.minFilter!==Vi||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));let K=E.source,te=m.get(K);te===void 0&&(te={},m.set(K,te));let J=O(E);if(J!==P.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[J].usedTimes++;let Ee=te[P.__cacheKey];Ee!==void 0&&(te[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),P.__cacheKey=J,P.__webglTexture=te[J].texture}return V}function Xe(P,E,V){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);let te=ke(P,E),J=E.source;t.bindTexture(K,P.__webglTexture,n.TEXTURE0+V);let Ee=i.get(J);if(J.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+V);let de=et.getPrimaries(et.workingColorSpace),ge=E.colorSpace===di?null:et.getPrimaries(E.colorSpace),Ye=E.colorSpace===di||de===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=_(E.image,!1,s.maxTextureSize);re=Re(E,re);let _e=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),He=v(E.internalFormat,_e,Be,E.colorSpace,E.isVideoTexture);he(K,E);let be,Je=E.mipmaps,We=E.isVideoTexture!==!0,Qe=Ee.__version===void 0||te===!0,N=J.dataReady,me=M(E,re);if(E.isDepthTexture)He=x(E.format===xi,E.type),Qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,He,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,He,re.width,re.height,0,_e,Be,null));else if(E.isDataTexture)if(Je.length>0){We&&Qe&&t.texStorage2D(n.TEXTURE_2D,me,He,Je[0].width,Je[0].height);for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,_e,Be,be.data):t.texImage2D(n.TEXTURE_2D,X,He,be.width,be.height,0,_e,Be,be.data);E.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(n.TEXTURE_2D,me,He,re.width,re.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,_e,Be,re.data)):t.texImage2D(n.TEXTURE_2D,0,He,re.width,re.height,0,_e,Be,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,He,Je[0].width,Je[0].height,re.depth);for(let X=0,Q=Je.length;X<Q;X++)if(be=Je[X],E.format!==un)if(_e!==null)if(We){if(N)if(E.layerUpdates.size>0){let ve=vf(be.width,be.height,E.format,E.type);for(let Se of E.layerUpdates){let je=be.data.subarray(Se*ve/be.data.BYTES_PER_ELEMENT,(Se+1)*ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Se,be.width,be.height,1,_e,je,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,re.depth,_e,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,He,be.width,be.height,re.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,re.depth,_e,Be,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,He,be.width,be.height,re.depth,0,_e,Be,be.data)}else{We&&Qe&&t.texStorage2D(n.TEXTURE_2D,me,He,Je[0].width,Je[0].height);for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],E.format!==un?_e!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(n.TEXTURE_2D,X,He,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be.width,be.height,_e,Be,be.data):t.texImage2D(n.TEXTURE_2D,X,He,be.width,be.height,0,_e,Be,be.data)}else if(E.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,He,re.width,re.height,re.depth),N)if(E.layerUpdates.size>0){let X=vf(re.width,re.height,E.format,E.type);for(let Q of E.layerUpdates){let ve=re.data.subarray(Q*X/re.data.BYTES_PER_ELEMENT,(Q+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,_e,Be,ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Be,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,re.width,re.height,re.depth,0,_e,Be,re.data);else if(E.isData3DTexture)We?(Qe&&t.texStorage3D(n.TEXTURE_3D,me,He,re.width,re.height,re.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Be,re.data)):t.texImage3D(n.TEXTURE_3D,0,He,re.width,re.height,re.depth,0,_e,Be,re.data);else if(E.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(n.TEXTURE_2D,me,He,re.width,re.height);else{let X=re.width,Q=re.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,He,X,Q,0,_e,Be,null),X>>=1,Q>>=1}}else if(Je.length>0){if(We&&Qe){let X=xe(Je[0]);t.texStorage2D(n.TEXTURE_2D,me,He,X.width,X.height)}for(let X=0,Q=Je.length;X<Q;X++)be=Je[X],We?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e,Be,be):t.texImage2D(n.TEXTURE_2D,X,He,_e,Be,be);E.generateMipmaps=!1}else if(We){if(Qe){let X=xe(re);t.texStorage2D(n.TEXTURE_2D,me,He,X.width,X.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Be,re)}else t.texImage2D(n.TEXTURE_2D,0,He,_e,Be,re);p(E)&&u(K),Ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $(P,E,V){if(E.image.length!==6)return;let K=ke(P,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+V);let Ee=et.getPrimaries(et.workingColorSpace),de=E.colorSpace===di?null:et.getPrimaries(E.colorSpace),ge=E.colorSpace===di||Ee===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Ye&&!re?_e[Q]=_(E.image[Q],!0,s.maxCubemapSize):_e[Q]=re?E.image[Q].image:E.image[Q],_e[Q]=Re(E,_e[Q]);let Be=_e[0],He=r.convert(E.format,E.colorSpace),be=r.convert(E.type),Je=v(E.internalFormat,He,be,E.colorSpace),We=E.isVideoTexture!==!0,Qe=J.__version===void 0||K===!0,N=te.dataReady,me=M(E,Be);he(n.TEXTURE_CUBE_MAP,E);let X;if(Ye){We&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Je,Be.width,Be.height);for(let Q=0;Q<6;Q++){X=_e[Q].mipmaps;for(let ve=0;ve<X.length;ve++){let Se=X[ve];E.format!==un?He!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Se.width,Se.height,He,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Se.width,Se.height,He,be,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Je,Se.width,Se.height,0,He,be,Se.data)}}}else{if(X=E.mipmaps,We&&Qe){X.length>0&&me++;let Q=xe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,He,be,_e[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,_e[Q].width,_e[Q].height,0,He,be,_e[Q].data);for(let ve=0;ve<X.length;ve++){let je=X[ve].image[Q].image;We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,je.width,je.height,He,be,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,je.width,je.height,0,He,be,je.data)}}else{We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,be,_e[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,He,be,_e[Q]);for(let ve=0;ve<X.length;ve++){let Se=X[ve];We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,He,be,Se.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Je,He,be,Se.image[Q])}}}p(E)&&u(n.TEXTURE_CUBE_MAP),J.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ie(P,E,V,K,te,J){let Ee=r.convert(V.format,V.colorSpace),de=r.convert(V.type),ge=v(V.internalFormat,Ee,de,V.colorSpace);if(!i.get(E).__hasExternalTextures){let re=Math.max(1,E.width>>J),_e=Math.max(1,E.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,ge,re,_e,E.depth,0,Ee,de,null):t.texImage2D(te,J,ge,re,_e,0,Ee,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,i.get(V).__webglTexture,0,ce(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,i.get(V).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(P,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let K=E.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=x(E.stencilBuffer,te),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=ce(E);se(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,J,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,P)}else{let K=E.textures;for(let te=0;te<K.length;te++){let J=K[te],Ee=r.convert(J.format,J.colorSpace),de=r.convert(J.type),ge=v(J.internalFormat,Ee,de,J.colorSpace),Ye=ce(E);V&&se(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ge,E.width,E.height):se(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let K=i.get(E.depthTexture).__webglTexture,te=ce(E);if(E.depthTexture.format===Cs)se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(E.depthTexture.format===xi)se(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(P){let E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=K}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),Me(E.__webglDepthbuffer[K],P,!1);else{let te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Me(E.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(P,E,V){let K=i.get(P);E!==void 0&&ie(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ie(P)}function Ne(P){let E=P.texture,V=i.get(P),K=i.get(E);P.addEventListener("dispose",T);let te=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ge=0;ge<E.mipmaps.length;ge++)V.__webglFramebuffer[de][ge]=n.createFramebuffer()}else V.__webglFramebuffer[de]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)V.__webglFramebuffer[de]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let de=0,ge=te.length;de<ge;de++){let Ye=i.get(te[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&se(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){let ge=te[de];V.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[de]);let Ye=r.convert(ge.format,ge.colorSpace),re=r.convert(ge.type),_e=v(ge.internalFormat,Ye,re,ge.colorSpace,P.isXRRenderTarget===!0),Be=ce(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,V.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),he(n.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ie(V.__webglFramebuffer[de][ge],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ie(V.__webglFramebuffer[de],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(E)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,ge=te.length;de<ge;de++){let Ye=te[de],re=i.get(Ye);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),he(n.TEXTURE_2D,Ye),ie(V.__webglFramebuffer,P,Ye,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),p(Ye)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),he(de,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ie(V.__webglFramebuffer[ge],P,E,n.COLOR_ATTACHMENT0,de,ge);else ie(V.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,de,0);p(E)&&u(de),t.unbindTexture()}P.depthBuffer&&Ie(P)}function qe(P){let E=P.textures;for(let V=0,K=E.length;V<K;V++){let te=E[V];if(p(te)){let J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(te).__webglTexture;t.bindTexture(J,Ee),u(J),t.unbindTexture()}}}let ee=[],I=[];function ue(P){if(P.samples>0){if(se(P)===!1){let E=P.textures,V=P.width,K=P.height,te=n.COLOR_BUFFER_BIT,J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(P),de=E.length>1;if(de)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let Ye=i.get(E[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,te,n.NEAREST),l===!0&&(ee.length=0,I.length=0,ee.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(J),I.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let Ye=i.get(E[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ce(P){return Math.min(s.maxSamples,P.samples)}function se(P){let E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Re(P,E){let V=P.colorSpace,K=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Si&&V!==di&&(et.getTransfer(V)===ct?(K!==un||te!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=Pe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=se}function P_(n,e){function t(i,s=di){let r,o=et.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.BYTE;if(i===Ff)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Mn)return n.HALF_FLOAT;if(i===zf)return n.ALPHA;if(i===Bf)return n.RGB;if(i===un)return n.RGBA;if(i===Hf)return n.LUMINANCE;if(i===Vf)return n.LUMINANCE_ALPHA;if(i===Cs)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===xh)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===yh)return n.RG_INTEGER;if(i===Mh)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Lo||i===Do)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Jl||i===jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===tc)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===_c||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Uo)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===vc||i===yc||i===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function N_(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,$f(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),m(p,u),u.isMeshPhysicalMaterial&&g(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),d(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===en&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===en&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let v=e.get(u),x=v.envMap,M=v.envMapRotation;x&&(p.envMap.value=x,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Fi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function m(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function d(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=s[v.id];M===void 0&&(d(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",p));let R=x.program;i.updateUBOMapping(v,R);let T=e.render.frame;r[v.id]!==T&&(m(v),r[v.id]=T)}function h(v){let x=f();v.__bindingPointIndex=x;let M=n.createBuffer(),R=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let x=s[v.id],M=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,y=C.length;U<y;U++){let b=C[U];if(g(b,T,U,R)===!0){let D=b.__offset,O=Array.isArray(b.value)?b.value:[b.value],H=0;for(let Z=0;Z<O.length;Z++){let z=O[Z],j=_(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+H,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(v,x,M,R){let T=v.value,w=x+"_"+M;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{let C=R[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(v){let x=v.uniforms,M=0,R=16;for(let w=0,C=x.length;w<C;w++){let U=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,b=U.length;y<b;y++){let D=U[y],O=Array.isArray(D.value)?D.value:[D.value];for(let H=0,Z=O.length;H<Z;H++){let z=O[H],j=_(z),B=M%R,q=B%j.boundary,oe=B+q;M+=q,oe!==0&&R-oe<j.storage&&(M+=R-oe),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=j.storage}}}let T=M%R;return T>0&&(M+=R-T),v.__size=M,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function To(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment(jo,Qo,Dl,bf)>i)return;Dl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Dl);if(!(l<e.near||l>e.far))return{distance:l,point:bf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}function wh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+f)+(l-a)/f;m*=h,g*=h,s(o,a,m,g)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Ef(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function k_(n,e){let t=1-n;return t*t*e}function z_(n,e){return 2*(1-n)*n*e}function B_(n,e){return n*n*e}function fr(n,e,t,i){return k_(n,e)+z_(n,t)+B_(n,i)}function H_(n,e){let t=1-n;return t*t*t*e}function V_(n,e){let t=1-n;return 3*t*t*n*e}function G_(n,e){return 3*(1-n)*n*n*e}function W_(n,e){return n*n*n*e}function dr(n,e,t,i,s){return H_(n,e)+V_(n,t)+G_(n,i)+W_(n,s)}function ed(n,e,t,i,s){let r,o;if(s===ax(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Tf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Tf(r,n[r],n[r+1],o);return o&&Ma(o,o.next)&&(Tr(o),o=o.next),o}function Xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ma(t,t.next)||mt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function br(n,e,t,i,s,r,o){if(!n)return;!o&&r&&tx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Y_(n,i,s,r):q_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Tr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$_(Xi(n),e,t),br(n,e,t,i,s,r,2)):o===2&&Z_(n,e,t,i,s,r):br(Xi(n),e,t,i,s,r,1);break}}}function q_(n){let e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,m=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,d=i.next;for(;d!==e;){if(d.x>=h&&d.x<=m&&d.y>=f&&d.y<=g&&As(s,a,r,l,o,c,d.x,d.y)&&mt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Y_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,m=o.y,g=a<l?a<c?a:c:l<c?l:c,d=h<f?h<m?h:m:f<m?f:m,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>m?h:m:f>m?f:m,u=Yc(g,d,e,t,i),v=Yc(_,p,e,t,i),x=n.prevZ,M=n.nextZ;for(;x&&x.z>=u&&M&&M.z<=v;){if(x.x>=g&&x.x<=_&&x.y>=d&&x.y<=p&&x!==s&&x!==o&&As(a,h,l,f,c,m,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=g&&M.x<=_&&M.y>=d&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,f,c,m,M.x,M.y)&&mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=u;){if(x.x>=g&&x.x<=_&&x.y>=d&&x.y<=p&&x!==s&&x!==o&&As(a,h,l,f,c,m,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=g&&M.x<=_&&M.y>=d&&M.y<=p&&M!==s&&M!==o&&As(a,h,l,f,c,m,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ma(s,r)&&td(s,i,i.next,r)&&Er(s,r)&&Er(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Tr(i),Tr(i.next),i=n=r),i=i.next}while(i!==n);return Xi(i)}function Z_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sx(o,a)){let l=nd(o,a);o=Xi(o,o.next),l=Xi(l,l.next),br(o,e,t,i,s,r,0),br(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function K_(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ed(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ix(c));for(s.sort(J_),r=0;r<s.length;r++)t=j_(s[r],t);return t}function J_(n,e){return n.x-e.x}function j_(n,e){let t=Q_(n,e);if(!t)return e;let i=nd(t,n);return Xi(i,i.next),Xi(t,t.next)}function Q_(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=r&&m>i&&(i=m,s=t.x<t.next.x?t:t.next,m===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&As(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Er(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&ex(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function ex(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function tx(n,e,t,i){let s=n;do s.z===0&&(s.z=Yc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nx(s)}function nx(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Yc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ix(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function As(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function sx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rx(n,e)&&(Er(n,e)&&Er(e,n)&&ox(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||Ma(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ma(n,e){return n.x===e.x&&n.y===e.y}function td(n,e,t,i){let s=Ro(mt(n,e,t)),r=Ro(mt(n,e,i)),o=Ro(mt(t,i,n)),a=Ro(mt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ao(n,t,e)||r===0&&Ao(n,i,e)||o===0&&Ao(t,n,i)||a===0&&Ao(t,e,i))}function Ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ro(n){return n>0?1:n<0?-1:0}function rx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&td(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Er(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function ox(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function nd(n,e){let t=new $c(n.i,n.x,n.y),i=new $c(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Tf(n,e,t,i){let s=new $c(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ax(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function wf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Af(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function cx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function hx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function Co(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lf(){return performance.now()}var ah,$i,Vn,$p,Su,Zp,Df,lh,Jn,gi,en,_t,Rt,Rs,bu,Eu,Tu,ch,gn,Kp,Jp,jp,Qp,Vs,e0,t0,n0,zl,Bl,ga,i0,_a,s0,r0,o0,a0,l0,c0,Hl,Vl,Gl,Ls,Wl,Xl,ql,Yl,Uf,h0,u0,pi,hh,uh,fh,Pr,f0,dh,ph,Nf,Ds,Us,pr,$l,xa,St,Hi,Zl,kt,d0,to,Rn,sl,Vi,Cn,Of,Ff,mr,mh,Gi,Hn,Mn,gh,_h,_i,kf,zf,Bf,un,Hf,Vf,Cs,xi,xh,vh,Gf,yh,Mh,Po,Io,Lo,Do,Kl,Jl,jl,Ql,ec,tc,nc,ic,sc,rc,oc,ac,lc,cc,hc,uc,fc,dc,pc,mc,gc,Uo,_c,xc,Wf,vc,yc,Mc,Oo,Sc,rl,wu,Au,Ru,p0,m0,Sh,g0,di,dt,Si,bh,va,Fo,ct,ko,zo,hs,Cu,_0,x0,v0,Xf,y0,M0,S0,b0,Pu,Iu,jn,Bo,Qn,Ht,Lu,cr,gr,Ln,ne,Ze,ol,Du,Uu,Nu,Qs,W0,et,us,bc,X0,Ho,q0,$t,ot,Ec,Wt,Vo,Tc,Zt,L,cl,Ou,ei,qn,En,no,fs,ds,ps,ai,li,Li,er,io,so,Di,Y0,tr,ul,vi,Yn,fl,ro,ci,dl,oo,pl,Ns,Ke,ms,Tn,$0,Z0,hi,ao,cn,Fu,ku,fn,Go,K0,zu,gs,$n,lo,nr,J0,j0,Bu,Hu,Vu,Gu,Q0,_s,ml,Nt,wn,Zn,gl,Kn,xs,vs,Wu,_l,xl,vl,yl,Ml,Sl,zi,Yf,ui,co,ze,Vt,em,ti,Wo,Mt,ho,zt,Xo,qo,at,tm,mn,El,ys,hn,ir,Ut,Ct,Xu,Ui,uo,qu,fo,po,mo,Tl,go,Yu,_o,Oe,bt,Dn,sm,rm,Et,Yo,fi,$u,Zu,Gt,Ms,Ss,wc,$o,Ac,wl,om,am,An,Ni,vo,xr,Pn,cm,hm,um,fm,dm,pm,mm,gm,_m,xm,vm,ym,Mm,Sm,bm,Em,Tm,wm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Om,Fm,km,zm,Bm,Hm,Vm,Gm,Wm,Xm,qm,Ym,$m,Zm,Km,Jm,jm,Qm,e1,t1,n1,i1,s1,r1,o1,a1,l1,c1,h1,u1,f1,d1,p1,m1,g1,_1,x1,v1,y1,M1,S1,b1,E1,T1,w1,A1,R1,C1,P1,I1,L1,D1,U1,N1,O1,F1,k1,z1,B1,H1,V1,G1,W1,X1,q1,Y1,$1,Z1,K1,J1,j1,Q1,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,_g,xg,vg,yg,Mg,Sg,bg,Eg,Tg,wg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Og,Fg,kg,zg,Bg,Hg,$e,pe,Bn,yo,Oi,Vg,Fs,ws,Ku,Bi,Al,Ju,Rl,Cl,Pl,Il,ki,bs,ju,ks,zs,Kf,nf,Jf,jf,Qf,sf,rf,of,af,lf,Rc,Cc,Pc,Ll,Is,X2,q2,So,t_,n_,s_,f_,Lc,Dc,v_,Uc,Nc,b_,E_,w_,Oc,pt,I_,ur,L_,D_,Fc,kc,Fi,U_,Zo,Ko,Jo,Wi,vr,Es,yf,bo,Mf,F_,sr,rr,Bs,yr,jo,Qo,Sf,or,Eo,Dl,bf,Mr,_n,xn,Sr,zc,wo,Ul,Nl,Ol,Bc,ea,Hc,ta,Vc,na,Gc,ia,Wc,Xc,sa,vn,qc,Kt,X_,mi,yi,lx,ra,Mi,oa,aa,Fe,yn,la,Hs,Zc,Kc,Jc,In,qi,jc,Qc,eh,ca,Yi,th,Rf,nh,fx,wr,ih,Ar,Rr,ha,Fl,Cf,Pf,ua,If,ar,kl,sh,fa,rh,da,pa,Ah,dx,Rh,px,mx,gx,_x,xx,vx,yx,oh,ft,Ov,Cr,ma,Tt=rt(()=>{ah="169",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$p=0,Su=1,Zp=2,Df=1,lh=2,Jn=3,gi=0,en=1,_t=2,Rt=0,Rs=1,bu=2,Eu=3,Tu=4,ch=5,gn=100,Kp=101,Jp=102,jp=103,Qp=104,Vs=200,e0=201,t0=202,n0=203,zl=204,Bl=205,ga=206,i0=207,_a=208,s0=209,r0=210,o0=211,a0=212,l0=213,c0=214,Hl=0,Vl=1,Gl=2,Ls=3,Wl=4,Xl=5,ql=6,Yl=7,Uf=0,h0=1,u0=2,pi=0,hh=1,uh=2,fh=3,Pr=4,f0=5,dh=6,ph=7,Nf=300,Ds=301,Us=302,pr=303,$l=304,xa=306,St=1e3,Hi=1001,Zl=1002,kt=1003,d0=1004,to=1005,Rn=1006,sl=1007,Vi=1008,Cn=1009,Of=1010,Ff=1011,mr=1012,mh=1013,Gi=1014,Hn=1015,Mn=1016,gh=1017,_h=1018,_i=1020,kf=35902,zf=1021,Bf=1022,un=1023,Hf=1024,Vf=1025,Cs=1026,xi=1027,xh=1028,vh=1029,Gf=1030,yh=1031,Mh=1033,Po=33776,Io=33777,Lo=33778,Do=33779,Kl=35840,Jl=35841,jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,Uo=36492,_c=36494,xc=36495,Wf=36283,vc=36284,yc=36285,Mc=36286,Oo=2300,Sc=2301,rl=2302,wu=2400,Au=2401,Ru=2402,p0=3200,m0=3201,Sh=0,g0=1,di="",dt="srgb",Si="srgb-linear",bh="display-p3",va="display-p3-linear",Fo="linear",ct="srgb",ko="rec709",zo="p3",hs=7680,Cu=519,_0=512,x0=513,v0=514,Xf=515,y0=516,M0=517,S0=518,b0=519,Pu=35044,Iu="300 es",jn=2e3,Bo=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,cr=Math.PI/180,gr=180/Math.PI;Ln={DEG2RAD:cr,RAD2DEG:gr,generateUUID:Zi,clamp:At,euclideanModulo:Eh,mapLinear:E0,inverseLerp:T0,lerp:hr,damp:w0,pingpong:A0,smoothstep:R0,smootherstep:C0,randInt:P0,randFloat:I0,randFloatSpread:L0,seededRandom:D0,degToRad:U0,radToDeg:N0,isPowerOfTwo:O0,ceilPowerOfTwo:F0,floorPowerOfTwo:k0,setQuaternionFromProperEuler:z0,normalize:qt,denormalize:Ts},ne=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],m=i[2],g=i[5],d=i[8],_=s[0],p=s[3],u=s[6],v=s[1],x=s[4],M=s[7],R=s[2],T=s[5],w=s[8];return r[0]=o*_+a*v+l*R,r[3]=o*p+a*x+l*T,r[6]=o*u+a*M+l*w,r[1]=c*_+h*v+f*R,r[4]=c*p+h*x+f*T,r[7]=c*u+h*M+f*w,r[2]=m*_+g*v+d*R,r[5]=m*p+g*x+d*T,r[8]=m*u+g*M+d*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,m=a*l-h*r,g=c*r-o*l,d=t*f+i*m+s*g;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=m*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new Ze;Du={};Uu=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Si]:{transfer:Fo,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[dt]:{transfer:ct,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[va]:{transfer:Fo,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Nu),fromReference:n=>n.applyMatrix3(Uu)},[bh]:{transfer:ct,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nu),fromReference:n=>n.applyMatrix3(Uu).convertLinearToSRGB()}},W0=new Set([Si,va]),et={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!W0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Qs[e].toReference,s=Qs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===di?Fo:Qs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Qs[e].luminanceCoefficients)}};bc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=_r("canvas")),us.width=e.width,us.height=e.height;let i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X0=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}};q0=0,$t=class n extends Qn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Hi,s=Hi,r=Rn,o=Vi,a=un,l=Cn,c=n.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Zi(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case St:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case St:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Nf;$t.DEFAULT_ANISOTROPY=1;ot=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],m=l[1],g=l[5],d=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(f-_)<.01&&Math.abs(d-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+_)<.1&&Math.abs(d+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(g+1)/2,R=(u+1)/2,T=(h+m)/4,w=(f+_)/4,C=(d+p)/4;return x>M&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=w/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=C/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=C/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-d)*(p-d)+(f-_)*(f-_)+(m-h)*(m-h));return Math.abs(v)<.001&&(v=1),this.x=(p-d)/v,this.y=(f-_)/v,this.z=(m-h)/v,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vo=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tc=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],m=r[o+0],g=r[o+1],d=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=d,e[t+3]=_;return}if(f!==_||l!==m||c!==g||h!==d){let p=1-a,u=l*m+c*g+h*d+f*_,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,u*v);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}let M=a*v;if(l=l*p+m*M,c=c*p+g*M,h=h*p+d*M,f=f*p+_*M,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],m=r[o+1],g=r[o+2],d=r[o+3];return e[t]=a*d+h*f+l*g-c*m,e[t+1]=l*d+h*m+c*f-a*g,e[t+2]=c*d+h*g+a*m-l*f,e[t+3]=h*d-a*f-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),m=l(i/2),g=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=m*h*f+c*g*d,this._y=c*g*f-m*h*d,this._z=c*h*d+m*g*f,this._w=c*h*f-m*g*d;break;case"YXZ":this._x=m*h*f+c*g*d,this._y=c*g*f-m*h*d,this._z=c*h*d-m*g*f,this._w=c*h*f+m*g*d;break;case"ZXY":this._x=m*h*f-c*g*d,this._y=c*g*f+m*h*d,this._z=c*h*d+m*g*f,this._w=c*h*f-m*g*d;break;case"ZYX":this._x=m*h*f-c*g*d,this._y=c*g*f+m*h*d,this._z=c*h*d-m*g*f,this._w=c*h*f+m*g*d;break;case"YZX":this._x=m*h*f+c*g*d,this._y=c*g*f+m*h*d,this._z=c*h*d-m*g*f,this._w=c*h*f-m*g*d;break;case"XZY":this._x=m*h*f-c*g*d,this._y=c*g*f-m*h*d,this._z=c*h*d+m*g*f,this._w=c*h*f+m*g*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],m=i+a+f;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=o*f+this._w*m,this._x=i*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new L,Ou=new Zt,ei=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),io.subVectors(this.max,er),fs.subVectors(e.a,er),ds.subVectors(e.b,er),ps.subVectors(e.c,er),ai.subVectors(ds,fs),li.subVectors(ps,ds),Li.subVectors(fs,ps);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Li.z,Li.y,ai.z,0,-ai.x,li.z,0,-li.x,Li.z,0,-Li.x,-ai.y,ai.x,0,-li.y,li.x,0,-Li.y,Li.x,0];return!hl(t,fs,ds,ps,io)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,fs,ds,ps,io))?!1:(so.crossVectors(ai,li),t=[so.x,so.y,so.z],hl(t,fs,ds,ps,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,no=new ei,fs=new L,ds=new L,ps=new L,ai=new L,li=new L,Li=new L,er=new L,io=new L,so=new L,Di=new L;Y0=new ei,tr=new L,ul=new L,vi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Y0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(ul)),this.expandByPoint(tr.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new L,fl=new L,ro=new L,ci=new L,dl=new L,oo=new L,pl=new L,Ns=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fl.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(fl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ro),a=ci.dot(this.direction),l=-ci.dot(ro),c=ci.lengthSq(),h=Math.abs(1-o*o),f,m,g,d;if(h>0)if(f=o*l-a,m=o*a-l,d=r*h,f>=0)if(m>=-d)if(m<=d){let _=1/h;f*=_,m*=_,g=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;else m<=-d?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+m*(m+2*l)+c):m<=d?(f=0,m=Math.min(Math.max(-r,-l),r),g=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(ro,m),g}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){dl.subVectors(t,e),oo.subVectors(i,e),pl.crossVectors(dl,oo);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let l=a*this.direction.dot(oo.crossVectors(ci,oo));if(l<0)return null;let c=a*this.direction.dot(dl.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,m,g,d,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,m,g,d,_,p)}set(e,t,i,s,r,o,a,l,c,h,f,m,g,d,_,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=m,u[3]=g,u[7]=d,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=o*h,g=o*f,d=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+d*c,t[5]=m-_*c,t[9]=-a*l,t[2]=_-m*c,t[6]=d+g*c,t[10]=o*l}else if(e.order==="YXZ"){let m=l*h,g=l*f,d=c*h,_=c*f;t[0]=m+_*a,t[4]=d*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=g*a-d,t[6]=_+m*a,t[10]=o*l}else if(e.order==="ZXY"){let m=l*h,g=l*f,d=c*h,_=c*f;t[0]=m-_*a,t[4]=-o*f,t[8]=d+g*a,t[1]=g+d*a,t[5]=o*h,t[9]=_-m*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let m=o*h,g=o*f,d=a*h,_=a*f;t[0]=l*h,t[4]=d*c-g,t[8]=m*c+_,t[1]=l*f,t[5]=_*c+m,t[9]=g*c-d,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let m=o*l,g=o*c,d=a*l,_=a*c;t[0]=l*h,t[4]=_-m*f,t[8]=d*f+g,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*f+d,t[10]=m-_*f}else if(e.order==="XZY"){let m=o*l,g=o*c,d=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=m*f+_,t[5]=o*h,t[9]=g*f-d,t[2]=d*f-g,t[6]=a*h,t[10]=_*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,Z0)}lookAt(e,t,i){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(i,cn),hi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(i,cn)),hi.normalize(),ao.crossVectors(cn,hi),s[0]=hi.x,s[4]=ao.x,s[8]=cn.x,s[1]=hi.y,s[5]=ao.y,s[9]=cn.y,s[2]=hi.z,s[6]=ao.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],m=i[9],g=i[13],d=i[2],_=i[6],p=i[10],u=i[14],v=i[3],x=i[7],M=i[11],R=i[15],T=s[0],w=s[4],C=s[8],U=s[12],y=s[1],b=s[5],D=s[9],O=s[13],H=s[2],Z=s[6],z=s[10],j=s[14],B=s[3],q=s[7],oe=s[11],he=s[15];return r[0]=o*T+a*y+l*H+c*B,r[4]=o*w+a*b+l*Z+c*q,r[8]=o*C+a*D+l*z+c*oe,r[12]=o*U+a*O+l*j+c*he,r[1]=h*T+f*y+m*H+g*B,r[5]=h*w+f*b+m*Z+g*q,r[9]=h*C+f*D+m*z+g*oe,r[13]=h*U+f*O+m*j+g*he,r[2]=d*T+_*y+p*H+u*B,r[6]=d*w+_*b+p*Z+u*q,r[10]=d*C+_*D+p*z+u*oe,r[14]=d*U+_*O+p*j+u*he,r[3]=v*T+x*y+M*H+R*B,r[7]=v*w+x*b+M*Z+R*q,r[11]=v*C+x*D+M*z+R*oe,r[15]=v*U+x*O+M*j+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],m=e[10],g=e[14],d=e[3],_=e[7],p=e[11],u=e[15];return d*(+r*l*f-s*c*f-r*a*m+i*c*m+s*a*g-i*l*g)+_*(+t*l*g-t*c*m+r*o*m-s*o*g+s*c*h-r*l*h)+p*(+t*c*f-t*a*g-r*o*f+i*o*g+r*a*h-i*c*h)+u*(-s*a*h-t*l*f+t*a*m+s*o*f-i*o*m+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],m=e[10],g=e[11],d=e[12],_=e[13],p=e[14],u=e[15],v=f*p*c-_*m*c+_*l*g-a*p*g-f*l*u+a*m*u,x=d*m*c-h*p*c-d*l*g+o*p*g+h*l*u-o*m*u,M=h*_*c-d*f*c+d*a*g-o*_*g-h*a*u+o*f*u,R=d*f*l-h*_*l-d*a*m+o*_*m+h*a*p-o*f*p,T=t*v+i*x+s*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=v*w,e[1]=(_*m*r-f*p*r-_*s*g+i*p*g+f*s*u-i*m*u)*w,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*u+i*l*u)*w,e[3]=(f*l*r-a*m*r-f*s*c+i*m*c+a*s*g-i*l*g)*w,e[4]=x*w,e[5]=(h*p*r-d*m*r+d*s*g-t*p*g-h*s*u+t*m*u)*w,e[6]=(d*l*r-o*p*r-d*s*c+t*p*c+o*s*u-t*l*u)*w,e[7]=(o*m*r-h*l*r+h*s*c-t*m*c-o*s*g+t*l*g)*w,e[8]=M*w,e[9]=(d*f*r-h*_*r-d*i*g+t*_*g+h*i*u-t*f*u)*w,e[10]=(o*_*r-d*a*r+d*i*c-t*_*c-o*i*u+t*a*u)*w,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*g-t*a*g)*w,e[12]=R*w,e[13]=(h*_*s-d*f*s+d*i*m-t*_*m-h*i*p+t*f*p)*w,e[14]=(d*a*s-o*_*s-d*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*m+t*a*m)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,m=r*c,g=r*h,d=r*f,_=o*h,p=o*f,u=a*f,v=l*c,x=l*h,M=l*f,R=i.x,T=i.y,w=i.z;return s[0]=(1-(_+u))*R,s[1]=(g+M)*R,s[2]=(d-x)*R,s[3]=0,s[4]=(g-M)*T,s[5]=(1-(m+u))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(d+x)*w,s[9]=(p-v)*w,s[10]=(1-(m+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s),g,d;if(a===jn)g=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===Bo)g=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),m=(t+e)*c,g=(i+s)*h,d,_;if(a===jn)d=(o+r)*f,_=-2*f;else if(a===Bo)d=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ms=new L,Tn=new Ke,$0=new L(0,0,0),Z0=new L(1,1,1),hi=new L,ao=new L,cn=new L,Fu=new Ke,ku=new Zt,fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],m=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},K0=0,zu=new L,gs=new Zt,$n=new Ke,lo=new L,nr=new L,J0=new L,j0=new Zt,Bu=new L(1,0,0),Hu=new L(0,1,0),Vu=new L(0,0,1),Gu={type:"added"},Q0={type:"removed"},_s={type:"childadded",child:null},ml={type:"childremoved",child:null},Nt=class n extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new fn,i=new Zt,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lo.copy(e):lo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(nr,lo,this.up):$n.lookAt(lo,nr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),gs.setFromRotationMatrix($n),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q0),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),m=o(e.skeletons),g=o(e.animations),d=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),d.length>0&&(i.nodes=d)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;wn=new L,Zn=new L,gl=new L,Kn=new L,xs=new L,vs=new L,Wu=new L,_l=new L,xl=new L,vl=new L,yl=new ot,Ml=new ot,Sl=new ot,zi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Zn.subVectors(i,t),gl.subVectors(e,t);let o=wn.dot(wn),a=wn.dot(Zn),l=wn.dot(gl),c=Zn.dot(Zn),h=Zn.dot(gl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,g=(c*l-a*h)*m,d=(o*h-a*l)*m;return r.set(1-g-d,d,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Zn.subVectors(e,t),wn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,i),vs.subVectors(r,i),_l.subVectors(e,i);let l=xs.dot(_l),c=vs.dot(_l);if(l<=0&&c<=0)return t.copy(i);xl.subVectors(e,s);let h=xs.dot(xl),f=vs.dot(xl);if(h>=0&&f<=h)return t.copy(s);let m=l*f-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(xs,o);vl.subVectors(e,r);let g=xs.dot(vl),d=vs.dot(vl);if(d>=0&&g<=d)return t.copy(r);let _=g*c-l*d;if(_<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(vs,a);let p=h*d-g*f;if(p<=0&&f-h>=0&&g-d>=0)return Wu.subVectors(r,s),a=(f-h)/(f-h+(g-d)),t.copy(s).addScaledVector(Wu,a);let u=1/(p+_+m);return o=_*u,a=m*u,t.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},co={h:0,s:0,l:0};ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Eh(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=al(e.r),this.g=al(e.g),this.b=al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return et.fromWorkingColorSpace(Vt.copy(this),e),Math.round(At(Vt.r*255,0,255))*65536+Math.round(At(Vt.g*255,0,255))*256+Math.round(At(Vt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Vt.copy(this),t);let i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=dt){et.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,s=Vt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(co);let i=hr(ui.h,co.h,t),s=hr(ui.s,co.s,t),r=hr(ui.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new ze;ze.NAMES=Yf;em=0,ti=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Rs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wo=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new L,ho=new ne,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}},Xo=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qo=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},at=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},tm=0,mn=new Ke,El=new Nt,ys=new L,hn=new ei,ir=new ei,Ut=new L,Ct=class n extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?qo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(hn.min,ir.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,ir.max),hn.expandByPoint(Ut)):(hn.expandByPoint(ir.min),hn.expandByPoint(ir.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Ut.add(ys)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;let c=new L,h=new L,f=new L,m=new ne,g=new ne,d=new ne,_=new L,p=new L;function u(C,U,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,U),f.fromBufferAttribute(i,y),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,U),d.fromBufferAttribute(r,y),h.sub(c),f.sub(c),g.sub(m),d.sub(m);let b=1/(g.x*d.y-d.x*g.y);isFinite(b)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(f,-g.y).multiplyScalar(b),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-d.x).multiplyScalar(b),a[C].add(_),a[U].add(_),a[y].add(_),l[C].add(p),l[U].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,U=v.length;C<U;++C){let y=v[C],b=y.start,D=y.count;for(let O=b,H=b+D;O<H;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new L,M=new L,R=new L,T=new L;function w(C){R.fromBufferAttribute(s,C),T.copy(R);let U=a[C];x.copy(U),x.sub(R.multiplyScalar(R.dot(U))).normalize(),M.crossVectors(T,U);let b=M.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,U=v.length;C<U;++C){let y=v[C],b=y.start,D=y.count;for(let O=b,H=b+D;O<H;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let m=0,g=e.count;m<g;m+=3){let d=e.getX(m+0),_=e.getX(m+1),p=e.getX(m+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,m=new c.constructor(l.length*h),g=0,d=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*h;for(let u=0;u<h;u++)m[d++]=c[g++]}return new zt(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let m=c[h],g=e(m,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,m=c.length;f<m;f++){let g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let m=0,g=f.length;m<g;m++)h.push(f[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new Ke,Ui=new Ns,uo=new vi,qu=new L,fo=new L,po=new L,mo=new L,Tl=new L,go=new L,Yu=new L,_o=new L,Oe=class extends Nt{constructor(e=new Ct,t=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Tl.fromBufferAttribute(f,e),o?go.addScaledVector(Tl,h):go.addScaledVector(Tl.sub(t),h))}t.add(go)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(uo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(uo,qu)===null||Ui.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,m=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,_=m.length;d<_;d++){let p=m[d],u=o[p.materialIndex],v=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){let T=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);s=xo(this,u,e,i,c,h,f,T,w,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=d,u=_;p<u;p+=3){let v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=xo(this,o,e,i,c,h,f,v,x,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,_=m.length;d<_;d++){let p=m[d],u=o[p.materialIndex],v=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){let T=M,w=M+1,C=M+2;s=xo(this,u,e,i,c,h,f,T,w,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let d=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=d,u=_;p<u;p+=3){let v=p,x=p+1,M=p+2;s=xo(this,o,e,i,c,h,f,v,x,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};bt=class n extends Ct{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],m=0,g=0;d("z","y","x",-1,-1,i,t,e,o,r,0),d("z","y","x",1,-1,i,t,-e,o,r,1),d("x","z","y",1,1,e,i,t,s,o,2),d("x","z","y",1,-1,e,i,-t,s,o,3),d("x","y","z",1,-1,e,t,i,s,r,4),d("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function d(_,p,u,v,x,M,R,T,w,C,U){let y=M/w,b=R/C,D=M/2,O=R/2,H=T/2,Z=w+1,z=C+1,j=0,B=0,q=new L;for(let oe=0;oe<z;oe++){let he=oe*b-O;for(let ke=0;ke<Z;ke++){let Xe=ke*y-D;q[_]=Xe*v,q[p]=he*x,q[u]=H,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[u]=T>0?1:-1,h.push(q.x,q.y,q.z),f.push(ke/w),f.push(1-oe/C),j+=1}}for(let oe=0;oe<C;oe++)for(let he=0;he<w;he++){let ke=m+he+Z*oe,Xe=m+he+Z*(oe+1),$=m+(he+1)+Z*(oe+1),ie=m+(he+1)+Z*oe;l.push(ke,Xe,ie),l.push(Xe,$,ie),B+=6}a.addGroup(g,B,U),g+=B,m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Dn={clone:Os,merge:Yt},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Yo=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new L,$u=new ne,Zu=new ne,Gt=class extends Yo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Zu),t.subVectors(Zu,$u)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,wc=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,m,g),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},$o=class extends $t{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $o(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Rt});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Rn),new wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},wl=new L,om=new L,am=new Ze,An=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=wl.subVectors(i,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||am.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new vi,vo=new L,xr=class{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],m=s[7],g=s[8],d=s[9],_=s[10],p=s[11],u=s[12],v=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-r,m-c,p-g,M-u).normalize(),i[1].setComponents(l+r,m+c,p+g,M+u).normalize(),i[2].setComponents(l+o,m+h,p+d,M+v).normalize(),i[3].setComponents(l-o,m-h,p-d,M-v).normalize(),i[4].setComponents(l-a,m-f,p-_,M-x).normalize(),t===jn)i[5].setComponents(l+a,m+f,p+_,M+x).normalize();else if(t===Bo)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Pn=class n extends Ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,m=t/l,g=[],d=[],_=[],p=[];for(let u=0;u<h;u++){let v=u*m-o;for(let x=0;x<c;x++){let M=x*f-r;d.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){let x=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;g.push(x,M,T),g.push(M,R,T)}this.setIndex(g),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`
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
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
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
#endif`,a1=`struct PhysicalMaterial {
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Og=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,zg=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:dm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:vm,beginnormal_vertex:ym,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:wm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Im,common:Lm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Nm,displacementmap_vertex:Om,emissivemap_fragment:Fm,emissivemap_pars_fragment:km,colorspace_fragment:zm,colorspace_pars_fragment:Bm,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:t1,envmap_vertex:Xm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:$m,fog_pars_fragment:Zm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:Jm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:s1,lights_phong_pars_fragment:r1,lights_physical_fragment:o1,lights_physical_pars_fragment:a1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:h1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:_1,map_particle_pars_fragment:x1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:y1,morphinstance_vertex:M1,morphcolor_vertex:S1,morphnormal_vertex:b1,morphtarget_pars_vertex:E1,morphtarget_vertex:T1,normal_fragment_begin:w1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:P1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:O1,packing:F1,premultiplied_alpha_fragment:k1,project_vertex:z1,dithering_fragment:B1,dithering_pars_fragment:H1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:X1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:$1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:J1,specularmap_fragment:j1,specularmap_pars_fragment:Q1,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:og,worldpos_vertex:ag,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:dg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:bg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:wg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Lg,meshphysical_frag:Dg,meshtoon_vert:Ug,meshtoon_frag:Ng,points_vert:Og,points_frag:Fg,shadow_vert:kg,shadow_frag:zg,sprite_vert:Bg,sprite_frag:Hg},pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Bn={basic:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([pe.lights,pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Bn.physical={uniforms:Yt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};yo={r:0,b:0,g:0},Oi=new fn,Vg=new Ke;Fs=class extends Yo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Ku=[.125,.215,.35,.446,.526,.582],Bi=20,Al=new Fs,Ju=new ze,Rl=null,Cl=0,Pl=0,Il=!1,ki=(1+Math.sqrt(5))/2,bs=1/ki,ju=[new L(-ki,bs,0),new L(ki,bs,0),new L(-bs,0,ki),new L(bs,0,ki),new L(0,ki,-bs),new L(0,ki,bs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Il,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Mn,format:un,colorSpace:Si,depthBuffer:!1},s=Qu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Kg(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Al)}_sceneToCubeUV(e,t,i,s){let a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Ju),h.toneMapping=pi,h.autoClear=!1;let g=new Wo({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),d=new Oe(new bt,g),_=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Ju),_=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;Mo(s,v*x,u>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(d,a),h.render(e,a)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ds||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Al)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Oe(this._lodPlanes[s],c),m=c.uniforms,g=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Bi-1),_=r/d,p=isFinite(r)?1+Math.floor(h*_):Bi;p>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);let u=[],v=0;for(let w=0;w<Bi;++w){let C=w/_,U=Math.exp(-C*C/2);u.push(U),w===0?v+=U:w<p&&(v+=2*U)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=d,m.mipInt.value=x-i;let M=this._sizeLods[s],R=3*M*(s>x-ws?s-x+ws:0),T=4*(this._cubeSize-M);Mo(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Al)}};zs=class extends $t{constructor(e,t,i,s,r,o,a,l,c,h=Cs){if(h!==Cs&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cs&&(i=Gi),i===void 0&&h===xi&&(i=_i),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kf=new $t,nf=new zs(1,1),Jf=new Vo,jf=new Tc,Qf=new $o,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);Rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=b2(t.type)}},Cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G2(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;Is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);W2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};X2=37297,q2=0;So=new L;t_=/^[ \t]*#include +<([\w\d./]+)>/gm;n_=new Map;s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;f_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Dc(e),t.set(e,i)),i}},Dc=class{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}};v_=0;Uc=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;w_={[Hl]:Vl,[Gl]:ql,[Wl]:Yl,[Ls]:Xl,[Vl]:Hl,[ql]:Gl,[Yl]:Wl,[Xl]:Ls};Oc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},I_={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=h.position.distanceTo(f.position),g=.02,d=.005;c.inputState.pinching&&m>g+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Et({vertexShader:L_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Qn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,m=null,g=null,d=null,_=new Fc,p=t.getContextAttributes(),u=null,v=null,x=[],M=[],R=new ne,T=null,w=new Gt;w.layers.enable(1),w.viewport=new ot;let C=new Gt;C.layers.enable(2),C.viewport=new ot;let U=[w,C],y=new Oc;y.layers.enable(1),y.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=x[$];return ie===void 0&&(ie=new ur,x[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=x[$];return ie===void 0&&(ie=new ur,x[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=x[$];return ie===void 0&&(ie=new ur,x[$]=ie),ie.getHandSpace()};function O($){let ie=M.indexOf($.inputSource);if(ie===-1)return;let Me=x[ie];Me!==void 0&&(Me.update($.inputSource,$.frame,c||o),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<x.length;$++){let ie=M[$];ie!==null&&(M[$]=null,x[$].disconnect(ie))}b=null,D=null,_.reset(),e.setRenderTarget(u),g=null,m=null,f=null,s=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Wt(g.framebufferWidth,g.framebufferHeight,{format:un,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,Me=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?xi:Cs,Me=p.stencil?_i:Gi);let Ie={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(Ie),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Wt(m.textureWidth,m.textureHeight,{format:un,type:Cn,depthTexture:new zs(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z($){for(let ie=0;ie<$.removed.length;ie++){let Me=$.removed[ie],le=M.indexOf(Me);le>=0&&(M[le]=null,x[le].disconnect(Me))}for(let ie=0;ie<$.added.length;ie++){let Me=$.added[ie],le=M.indexOf(Me);if(le===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=M.length){M.push(Me),le=Pe;break}else if(M[Pe]===null){M[Pe]=Me,le=Pe;break}if(le===-1)break}let Ie=x[le];Ie&&Ie.connect(Me)}}let z=new L,j=new L;function B($,ie,Me){z.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);let le=z.distanceTo(j),Ie=ie.projectionMatrix.elements,Pe=Me.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),qe=Ie[14]/(Ie[10]+1),ee=(Ie[9]+1)/Ie[5],I=(Ie[9]-1)/Ie[5],ue=(Ie[8]-1)/Ie[0],ce=(Pe[8]+1)/Pe[0],se=Ne*ue,fe=Ne*ce,Re=le/(-ue+ce),xe=Re*-ue;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(Re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let P=Ne+Re,E=qe+Re,V=se-xe,K=fe+(le-xe),te=ee*qe/E*P,J=I*qe/E*P;$.projectionMatrix.makePerspective(V,K,te,J,P,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,Me=$.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),y.near=C.near=w.near=ie,y.far=C.far=w.far=Me,(b!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,D=y.far);let le=$.parent,Ie=y.cameras;q(y,le);for(let Pe=0;Pe<Ie.length;Pe++)q(Ie[Pe],le);Ie.length===2?B(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),oe($,y,le)};function oe($,ie,Me){Me===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function($){l=$,m!==null&&(m.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let he=null;function ke($,ie){if(h=ie.getViewerPose(c||o),d=ie,h!==null){let Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let le=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Pe=0;Pe<Me.length;Pe++){let Ne=Me[Pe],qe=null;if(g!==null)qe=g.getViewport(Ne);else{let I=f.getViewSubImage(m,Ne);qe=I.viewport,Pe===0&&(e.setRenderTargetTextures(v,I.colorTexture,m.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let ee=U[Pe];ee===void 0&&(ee=new Gt,ee.layers.enable(Pe),ee.viewport=new ot,U[Pe]=ee),ee.matrix.fromArray(Ne.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ne.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(qe.x,qe.y,qe.width,qe.height),Pe===0&&(y.matrix.copy(ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(ee)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Pe=f.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,s.renderState)}}for(let Me=0;Me<x.length;Me++){let le=M[Me],Ie=x[Me];le!==null&&Ie!==void 0&&Ie.update(le,ie,c||o)}he&&he($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),d=null}let Xe=new Zf;Xe.setAnimationLoop(ke),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}},Fi=new fn,U_=new Ke;Zo=class{constructor(e={}){let{canvas:t=B0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),d=new Int32Array(4),_=null,p=null,u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=pi,this.toneMappingExposure=1;let x=this,M=!1,R=0,T=0,w=null,C=-1,U=null,y=new ot,b=new ot,D=null,O=new ze(0),H=0,Z=t.width,z=t.height,j=1,B=null,q=null,oe=new ot(0,0,Z,z),he=new ot(0,0,Z,z),ke=!1,Xe=new xr,$=!1,ie=!1,Me=new Ke,le=new Ke,Ie=new L,Pe=new ot,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ee(){return w===null?j:1}let I=i;function ue(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ah}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Se,!1),I===null){let F="webgl2";if(I=ue(F,A),I===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,se,fe,Re,xe,P,E,V,K,te,J,Ee,de,ge,Ye,re,_e,Be,He,be,Je,We,Qe,N;function me(){ce=new jg(I),ce.init(),We=new P_(I,ce),se=new qg(I,ce,e,We),fe=new A_(I),se.reverseDepthBuffer&&fe.buffers.depth.setReversed(!0),Re=new t2(I),xe=new p_,P=new C_(I,ce,fe,xe,se,We,Re),E=new $g(x),V=new Jg(x),K=new lm(I),Qe=new Wg(I,K),te=new Qg(I,K,Re,Qe),J=new i2(I,te,K,Re),He=new n2(I,se,P),re=new Yg(xe),Ee=new d_(x,E,V,ce,se,Qe,re),de=new N_(x,xe),ge=new g_,Ye=new S_(ce),Be=new Gg(x,E,V,fe,J,m,l),_e=new T_(x,J,se),N=new O_(I,Re,se,fe),be=new Xg(I,ce,Re),Je=new e2(I,ce,Re),Re.programs=Ee.programs,x.capabilities=se,x.extensions=ce,x.properties=xe,x.renderLists=ge,x.shadowMap=_e,x.state=fe,x.info=Re}me();let X=new kc(x,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(Z,z,!1))},this.getSize=function(A){return A.set(Z,z)},this.setSize=function(A,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,z=F,t.width=Math.floor(A*j),t.height=Math.floor(F*j),G===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Z*j,z*j).floor()},this.setDrawingBufferSize=function(A,F,G){Z=A,z=F,j=G,t.width=Math.floor(A*G),t.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,F,G,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,F,G,W),fe.viewport(y.copy(oe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,F,G,W){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,F,G,W),fe.scissor(b.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){fe.setScissorTest(ke=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let k=!1;if(w!==null){let ae=w.texture.format;k=ae===Mh||ae===yh||ae===vh}if(k){let ae=w.texture.type,ye=ae===Cn||ae===Gi||ae===mr||ae===_i||ae===gh||ae===_h,we=Be.getClearColor(),Ce=Be.getClearAlpha(),Ve=we.r,Ge=we.g,Le=we.b;ye?(g[0]=Ve,g[1]=Ge,g[2]=Le,g[3]=Ce,I.clearBufferuiv(I.COLOR,0,g)):(d[0]=Ve,d[1]=Ge,d[2]=Le,d[3]=Ce,I.clearBufferiv(I.COLOR,0,d))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ge.dispose(),Ye.dispose(),xe.dispose(),E.dispose(),V.dispose(),J.dispose(),Qe.dispose(),N.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",pu),X.removeEventListener("sessionend",mu),Ii.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Re.autoReset,F=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,k=_e.type;me(),Re.autoReset=A,_e.enabled=F,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=k}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){let F=A.target;F.removeEventListener("dispose",je),yt(F)}function yt(A){jt(A),xe.remove(A)}function jt(A){let F=xe.get(A).programs;F!==void 0&&(F.forEach(function(G){Ee.releaseProgram(G)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,k,ae){F===null&&(F=Ne);let ye=k.isMesh&&k.matrixWorld.determinant()<0,we=Gp(A,F,G,W,k);fe.setMaterial(W,ye);let Ce=G.index,Ve=1;if(W.wireframe===!0){if(Ce=te.getWireframeAttribute(G),Ce===void 0)return;Ve=2}let Ge=G.drawRange,Le=G.attributes.position,st=Ge.start*Ve,ht=(Ge.start+Ge.count)*Ve;ae!==null&&(st=Math.max(st,ae.start*Ve),ht=Math.min(ht,(ae.start+ae.count)*Ve)),Ce!==null?(st=Math.max(st,0),ht=Math.min(ht,Ce.count)):Le!=null&&(st=Math.max(st,0),ht=Math.min(ht,Le.count));let gt=ht-st;if(gt<0||gt===1/0)return;Qe.setup(k,W,we,G,Ce);let an,nt=be;if(Ce!==null&&(an=K.get(Ce),nt=Je,nt.setIndex(an)),k.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ee()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(k.isLine){let De=W.linewidth;De===void 0&&(De=1),fe.setLineWidth(De*ee()),k.isLineSegments?nt.setMode(I.LINES):k.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else k.isPoints?nt.setMode(I.POINTS):k.isSprite&&nt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)nt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let De=k._multiDrawStarts,Ft=k._multiDrawCounts,it=k._multiDrawCount,bn=Ce?K.get(Ce).bytesPerElement:1,cs=xe.get(W).currentProgram.getUniforms();for(let ln=0;ln<it;ln++)cs.setValue(I,"_gl_DrawID",ln),nt.render(De[ln]/bn,Ft[ln])}else if(k.isInstancedMesh)nt.renderInstances(st,gt,k.count);else if(G.isInstancedBufferGeometry){let De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ft=Math.min(G.instanceCount,De);nt.renderInstances(st,gt,Ft)}else nt.render(st,gt)};function tt(A,F,G){A.transparent===!0&&A.side===_t&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,eo(A,F,G),A.side=gi,A.needsUpdate=!0,eo(A,F,G),A.side=_t):eo(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),p=Ye.get(G),p.init(F),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ae=k.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){let we=ae[ye];tt(we,G,k),W.add(we)}else tt(ae,G,k),W.add(ae)}),v.pop(),p=null,W},this.compileAsync=function(A,F,G=null){let W=this.compile(A,F,G);return new Promise(k=>{function ae(){if(W.forEach(function(ye){xe.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){k(A);return}setTimeout(ae,10)}ce.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Qt=null;function Xn(A){Qt&&Qt(A)}function pu(){Ii.stop()}function mu(){Ii.start()}let Ii=new Zf;Ii.setAnimationLoop(Xn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(A){Qt=A,X.setAnimationLoop(A),A===null?Ii.stop():Ii.start()},X.addEventListener("sessionstart",pu),X.addEventListener("sessionend",mu),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,w),p=Ye.get(A,v.length),p.init(F),v.push(p),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(le),ie=this.localClippingEnabled,$=re.init(this.clippingPlanes,ie),_=ge.get(A,u.length),_.init(),u.push(_),X.enabled===!0&&X.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&el(ae,F,-1/0,x.sortObjects)}el(A,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(B,q),qe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,qe&&Be.addToRenderList(_,A),this.info.render.frame++,$===!0&&re.beginShadows();let G=p.state.shadowsArray;_e.render(G,A,F),$===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=_.opaque,k=_.transmissive;if(p.setupLights(),F.isArrayCamera){let ae=F.cameras;if(k.length>0)for(let ye=0,we=ae.length;ye<we;ye++){let Ce=ae[ye];_u(W,k,A,Ce)}qe&&Be.render(A);for(let ye=0,we=ae.length;ye<we;ye++){let Ce=ae[ye];gu(_,A,Ce,Ce.viewport)}}else k.length>0&&_u(W,k,A,F),qe&&Be.render(A),gu(_,A,F);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,F),Qe.resetDefaultState(),C=-1,U=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function el(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){W&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let ye=J.update(A),we=A.material;we.visible&&_.push(A,ye,we,G,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){let ye=J.update(A),we=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Pe.copy(ye.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(we)){let Ce=ye.groups;for(let Ve=0,Ge=Ce.length;Ve<Ge;Ve++){let Le=Ce[Ve],st=we[Le.materialIndex];st&&st.visible&&_.push(A,ye,st,G,Pe.z,Le)}}else we.visible&&_.push(A,ye,we,G,Pe.z,null)}}let ae=A.children;for(let ye=0,we=ae.length;ye<we;ye++)el(ae[ye],F,G,W)}function gu(A,F,G,W){let k=A.opaque,ae=A.transmissive,ye=A.transparent;p.setupLightsView(G),$===!0&&re.setGlobalState(x.clippingPlanes,G),W&&fe.viewport(y.copy(W)),k.length>0&&Qr(k,F,G),ae.length>0&&Qr(ae,F,G),ye.length>0&&Qr(ye,F,G),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function _u(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Wt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Mn:Cn,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ae=p.state.transmissionRenderTarget[W.id],ye=W.viewport||y;ae.setSize(ye.z,ye.w);let we=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(O),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Be.render(G);let Ce=x.toneMapping;x.toneMapping=pi;let Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&re.setGlobalState(x.clippingPlanes,W),Qr(A,G,W),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Le=0,st=F.length;Le<st;Le++){let ht=F[Le],gt=ht.object,an=ht.geometry,nt=ht.material,De=ht.group;if(nt.side===_t&&gt.layers.test(W.layers)){let Ft=nt.side;nt.side=en,nt.needsUpdate=!0,xu(gt,G,W,an,nt,De),nt.side=Ft,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}x.setRenderTarget(we),x.setClearColor(O,H),Ve!==void 0&&(W.viewport=Ve),x.toneMapping=Ce}function Qr(A,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ae=A.length;k<ae;k++){let ye=A[k],we=ye.object,Ce=ye.geometry,Ve=W===null?ye.material:W,Ge=ye.group;we.layers.test(G.layers)&&xu(we,F,G,Ce,Ve,Ge)}}function xu(A,F,G,W,k,ae){A.onBeforeRender(x,F,G,W,k,ae),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,F,G,W,A,ae),k.transparent===!0&&k.side===_t&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,x.renderBufferDirect(G,F,W,k,A,ae),k.side=gi,k.needsUpdate=!0,x.renderBufferDirect(G,F,W,k,A,ae),k.side=_t):x.renderBufferDirect(G,F,W,k,A,ae),A.onAfterRender(x,F,G,W,k,ae)}function eo(A,F,G){F.isScene!==!0&&(F=Ne);let W=xe.get(A),k=p.state.lights,ae=p.state.shadowsArray,ye=k.state.version,we=Ee.getParameters(A,k.state,ae,F,G),Ce=Ee.getProgramCacheKey(we),Ve=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",je),Ve=new Map,W.programs=Ve);let Ge=Ve.get(Ce);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ye)return yu(A,we),Ge}else we.uniforms=Ee.getUniforms(A),A.onBeforeCompile(we,x),Ge=Ee.acquireProgram(we,Ce),Ve.set(Ce,Ge),W.uniforms=we.uniforms;let Le=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=re.uniform),yu(A,we),W.needsLights=Xp(A),W.lightsStateVersion=ye,W.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function vu(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Is.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function yu(A,F){let G=xe.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Gp(A,F,G,W,k){F.isScene!==!0&&(F=Ne),P.resetTextureUnits();let ae=F.fog,ye=W.isMeshStandardMaterial?F.environment:null,we=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Si,Ce=(W.isMeshStandardMaterial?V:E).get(W.envMap||ye),Ve=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color,gt=pi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=x.toneMapping);let an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=an!==void 0?an.length:0,De=xe.get(W),Ft=p.state.lights;if($===!0&&(ie===!0||A!==U)){let pn=A===U&&W.id===C;re.setState(W,A,pn)}let it=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ft.state.version||De.outputColorSpace!==we||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Ce||W.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==Ge||De.morphTargets!==Le||De.morphNormals!==st||De.morphColors!==ht||De.toneMapping!==gt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=W.version);let bn=De.currentProgram;it===!0&&(bn=eo(W,F,k));let cs=!1,ln=!1,tl=!1,vt=bn.getUniforms(),oi=De.uniforms;if(fe.useProgram(bn.program)&&(cs=!0,ln=!0,tl=!0),W.id!==C&&(C=W.id,ln=!0),cs||U!==A){se.reverseDepthBuffer?(Me.copy(A.projectionMatrix),V0(Me),G0(Me),vt.setValue(I,"projectionMatrix",Me)):vt.setValue(I,"projectionMatrix",A.projectionMatrix),vt.setValue(I,"viewMatrix",A.matrixWorldInverse);let pn=vt.map.cameraPosition;pn!==void 0&&pn.setValue(I,Ie.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,ln=!0,tl=!0)}if(k.isSkinnedMesh){vt.setOptional(I,k,"bindMatrix"),vt.setOptional(I,k,"bindMatrixInverse");let pn=k.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),vt.setValue(I,"boneTexture",pn.boneTexture,P))}k.isBatchedMesh&&(vt.setOptional(I,k,"batchingTexture"),vt.setValue(I,"batchingTexture",k._matricesTexture,P),vt.setOptional(I,k,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",k._indirectTexture,P),vt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",k._colorsTexture,P));let nl=G.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0)&&He.update(k,G,bn),(ln||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,vt.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(oi.envMap.value=Ce,oi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(oi.envMapIntensity.value=F.environmentIntensity),ln&&(vt.setValue(I,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Wp(oi,tl),ae&&W.fog===!0&&de.refreshFogUniforms(oi,ae),de.refreshMaterialUniforms(oi,W,j,z,p.state.transmissionRenderTarget[A.id]),Is.upload(I,vu(De),oi,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Is.upload(I,vu(De),oi,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(I,"center",k.center),vt.setValue(I,"modelViewMatrix",k.modelViewMatrix),vt.setValue(I,"normalMatrix",k.normalMatrix),vt.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pn=W.uniformsGroups;for(let il=0,qp=pn.length;il<qp;il++){let Mu=pn[il];N.update(Mu,bn),N.bind(Mu,bn)}}return bn}function Wp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Xp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,F,G){xe.get(A.texture).__webglTexture=F,xe.get(A.depthTexture).__webglTexture=G;let W=xe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){let G=xe.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){w=A,R=F,T=G;let W=!0,k=null,ae=!1,ye=!1;if(A){let Ce=xe.get(A);if(Ce.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ce.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ce.__hasExternalTextures)P.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(Ce.__boundDepthTexture!==Le){if(Le!==null&&xe.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);let Ge=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][G]:k=Ge[F],ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[G]:k=Ge,y.copy(A.viewport),b.copy(A.scissor),D=A.scissorTest}else y.copy(oe).multiplyScalar(j).floor(),b.copy(he).multiplyScalar(j).floor(),D=ke;if(fe.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&fe.drawBuffers(A,k),fe.viewport(y),fe.scissor(b),fe.setScissorTest(D),ae){let Ce=xe.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,G)}else if(ye){let Ce=xe.get(A.texture),Ve=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,Ve)}C=-1},this.readRenderTargetPixels=function(A,F,G,W,k,ae,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){fe.bindFramebuffer(I.FRAMEBUFFER,we);try{let Ce=A.texture,Ve=Ce.format,Ge=Ce.type;if(!se.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k&&I.readPixels(F,G,W,k,We.convert(Ve),We.convert(Ge),ae)}finally{let Ce=w!==null?xe.get(w).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,k,ae,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){let Ce=A.texture,Ve=Ce.format,Ge=Ce.type;if(!se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k){fe.bindFramebuffer(I.FRAMEBUFFER,we);let Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(F,G,W,k,We.convert(Ve),We.convert(Ge),0);let st=w!==null?xe.get(w).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,st);let ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await H0(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Le),I.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);let W=Math.pow(2,-G),k=Math.floor(A.image.width*W),ae=Math.floor(A.image.height*W),ye=F!==null?F.x:0,we=F!==null?F.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ye,we,k,ae),fe.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,W=null,k=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,G=null);let ae,ye,we,Ce,Ve,Ge;G!==null?(ae=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.min.x,Ce=G.min.y):(ae=A.image.width,ye=A.image.height,we=0,Ce=0),W!==null?(Ve=W.x,Ge=W.y):(Ve=0,Ge=0);let Le=We.convert(F.format),st=We.convert(F.type);P.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let ht=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),nt=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES),Ft=A.isCompressedTexture?A.mipmaps[k]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Ve,Ge,ae,ye,Le,st,Ft.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Ve,Ge,Ft.width,Ft.height,Le,Ft.data):I.texSubImage2D(I.TEXTURE_2D,k,Ve,Ge,ae,ye,Le,st,Ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),k===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,k=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0);let ae,ye,we,Ce,Ve,Ge,Le,st,ht,gt=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(ae=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.max.z-G.min.z,Ce=G.min.x,Ve=G.min.y,Ge=G.min.z):(ae=gt.width,ye=gt.height,we=gt.depth,Ce=0,Ve=0,Ge=0),W!==null?(Le=W.x,st=W.y,ht=W.z):(Le=0,st=0,ht=0);let an=We.convert(F.format),nt=We.convert(F.type),De;if(F.isData3DTexture)P.setTexture3D(F,0),De=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)P.setTexture2DArray(F,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Ft=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=I.getParameter(I.UNPACK_SKIP_PIXELS),cs=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(De,k,Le,st,ht,ae,ye,we,an,nt,gt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(De,k,Le,st,ht,ae,ye,we,an,gt.data):I.texSubImage3D(De,k,Le,st,ht,ae,ye,we,an,nt,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,cs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),k===0&&F.generateMipmaps&&I.generateMipmap(De),fe.unbindTexture()},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,fe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bh?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===va?"display-p3":"srgb"}},Ko=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jo=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=class extends $t{constructor(e=null,t=1,i=1,s,r,o,a,l,c=kt,h=kt,f,m){super(null,o,a,l,c,h,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vr=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new Ke,yf=new Ke,bo=[],Mf=new ei,F_=new Ke,sr=new Oe,rr=new vi,Bs=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),Mf.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),rr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(i),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),yf.multiplyMatrices(i,Es),sr.matrixWorld=yf,sr.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){let l=bo[o];l.instanceId=r,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,xh,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},yr=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jo=new L,Qo=new L,Sf=new Ke,or=new Ns,Eo=new vi,Dl=new L,bf=new L,Mr=class extends Nt{constructor(e=new Ct,t=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jo.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jo.distanceTo(Qo);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Sf.copy(s).invert(),or.copy(e.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){let g=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=g,p=d-1;_<p;_+=c){let u=h.getX(_),v=h.getX(_+1),x=To(this,e,or,l,u,v);x&&t.push(x)}if(this.isLineLoop){let _=h.getX(d-1),p=h.getX(g),u=To(this,e,or,l,_,p);u&&t.push(u)}}else{let g=Math.max(0,o.start),d=Math.min(m.count,o.start+o.count);for(let _=g,p=d-1;_<p;_+=c){let u=To(this,e,or,l,_,_+1);u&&t.push(u)}if(this.isLineLoop){let _=To(this,e,or,l,d-1,g);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};_n=class extends $t{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],m=i[s+1]-h,g=(o-h)/m;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],o=[],a=new L,l=new Ke;for(let g=0;g<=e;g++){let d=g/e;s[g]=this.getTangentAt(d,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),m<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(At(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,d))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(At(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],g*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*h-g*f+this.aX,c=m*f+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends Sr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};wo=new L,Ul=new wh,Nl=new wh,Ol=new wh,Bc=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),c=wo);let f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wo),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(f),g),_=Math.pow(f.distanceToSquared(m),g),p=Math.pow(m.distanceToSquared(h),g);_<1e-4&&(_=1),d<1e-4&&(d=_),p<1e-4&&(p=_),Ul.initNonuniformCatmullRom(c.x,f.x,m.x,h.x,d,_,p),Nl.initNonuniformCatmullRom(c.y,f.y,m.y,h.y,d,_,p),Ol.initNonuniformCatmullRom(c.z,f.z,m.z,h.z,d,_,p)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,f.x,m.x,h.x,this.tension),Nl.initCatmullRom(c.y,f.y,m.y,h.y,this.tension),Ol.initCatmullRom(c.z,f.z,m.z,h.z,this.tension));return i.set(Ul.calc(l),Nl.calc(l),Ol.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ea=class extends xn{constructor(e=new ne,t=new ne,i=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hc=class extends xn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y),dr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends xn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends xn{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends xn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y),fr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Ef(a,l.x,c.x,h.x,f.x),Ef(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Bc,CubicBezierCurve:ea,CubicBezierCurve3:Hc,EllipseCurve:Sr,LineCurve:ta,LineCurve3:Vc,QuadraticBezierCurve:na,QuadraticBezierCurve3:Gc,SplineCurve:ia}),Xc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},sa=class extends Xc{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ta(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new na(this.currentPoint.clone(),new ne(e,t),new ne(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ea(this.currentPoint.clone(),new ne(e,t),new ne(i,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ia(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Sr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vn=class n extends Ct{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],m=[],g=[],d=0,_=[],p=i/2,u=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(g,2));function v(){let M=new L,R=new L,T=0,w=(t-e)/i;for(let C=0;C<=r;C++){let U=[],y=C/r,b=y*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,H=O*l+a,Z=Math.sin(H),z=Math.cos(H);R.x=b*Z,R.y=-y*i+p,R.z=b*z,f.push(R.x,R.y,R.z),M.set(Z,w,z).normalize(),m.push(M.x,M.y,M.z),g.push(O,1-y),U.push(d++)}_.push(U)}for(let C=0;C<s;C++)for(let U=0;U<r;U++){let y=_[U][C],b=_[U+1][C],D=_[U+1][C+1],O=_[U][C+1];e>0&&(h.push(y,b,O),T+=3),t>0&&(h.push(b,D,O),T+=3)}c.addGroup(u,T,0),u+=T}function x(M){let R=d,T=new ne,w=new L,C=0,U=M===!0?e:t,y=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*y,0),m.push(0,y,0),g.push(.5,.5),d++;let b=d;for(let D=0;D<=s;D++){let H=D/s*l+a,Z=Math.cos(H),z=Math.sin(H);w.x=U*z,w.y=p*y,w.z=U*Z,f.push(w.x,w.y,w.z),m.push(0,y,0),T.x=Z*.5+.5,T.y=z*.5*y+.5,g.push(T.x,T.y),d++}for(let D=0;D<s;D++){let O=R+D,H=b+D;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),C+=3}c.addGroup(u,C,M===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qc=class n extends Ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new L,M=new L,R=new L;for(let T=0;T<t.length;T+=3)g(t[T+0],x),g(t[T+1],M),g(t[T+2],R),l(x,M,R,v)}function l(v,x,M,R){let T=R+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let U=v.clone().lerp(M,C/T),y=x.clone().lerp(M,C/T),b=T-C;for(let D=0;D<=b;D++)D===0&&C===T?w[C][D]=U:w[C][D]=U.clone().lerp(y,D/b)}for(let C=0;C<T;C++)for(let U=0;U<2*(T-C)-1;U++){let y=Math.floor(U/2);U%2===0?(m(w[C][y+1]),m(w[C+1][y]),m(w[C][y])):(m(w[C][y+1]),m(w[C+1][y+1]),m(w[C+1][y]))}}function c(v){let x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let M=p(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(M,1-R)}d(),f()}function f(){for(let v=0;v<o.length;v+=6){let x=o[v+0],M=o[v+2],R=o[v+4],T=Math.max(x,M,R),w=Math.min(x,M,R);T>.9&&w<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function m(v){r.push(v.x,v.y,v.z)}function g(v,x){let M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function d(){let v=new L,x=new L,M=new L,R=new L,T=new ne,w=new ne,C=new ne;for(let U=0,y=0;U<r.length;U+=9,y+=6){v.set(r[U+0],r[U+1],r[U+2]),x.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),T.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),R.copy(v).add(x).add(M).divideScalar(3);let b=p(R);_(T,y+0,v,b),_(w,y+2,x,b),_(C,y+4,M,b)}}function _(v,x,M,R){R<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Kt=class extends sa{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new sa().fromJSON(s))}return this}},X_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ed(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,m,g;if(i&&(r=K_(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let d=t;d<s;d+=t)f=n[d],m=n[d+1],f<a&&(a=f),m<l&&(l=m),f>c&&(c=f),m>h&&(h=m);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return br(r,o,t,a,l,g,0),o}};mi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];wf(e),Af(i,e);let o=e.length;t.forEach(wf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Af(i,t[l]);let a=X_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};yi=class n extends Ct{constructor(e=new Kt([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:g-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:lx,x,M=!1,R,T,w,C;u&&(x=u.getSpacedPoints(h),M=!0,m=!1,R=u.computeFrenetFrames(h,!1),T=new L,w=new L,C=new L),m||(p=0,g=0,d=0,_=0);let U=a.extractPoints(c),y=U.shape,b=U.holes;if(!mi.isClockWise(y)){y=y.reverse();for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];mi.isClockWise(ue)&&(b[ee]=ue.reverse())}}let O=mi.triangulateShape(y,b),H=y;for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];y=y.concat(ue)}function Z(ee,I,ue){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(I,ue)}let z=y.length,j=O.length;function B(ee,I,ue){let ce,se,fe,Re=ee.x-I.x,xe=ee.y-I.y,P=ue.x-ee.x,E=ue.y-ee.y,V=Re*Re+xe*xe,K=Re*E-xe*P;if(Math.abs(K)>Number.EPSILON){let te=Math.sqrt(V),J=Math.sqrt(P*P+E*E),Ee=I.x-xe/te,de=I.y+Re/te,ge=ue.x-E/J,Ye=ue.y+P/J,re=((ge-Ee)*E-(Ye-de)*P)/(Re*E-xe*P);ce=Ee+Re*re-ee.x,se=de+xe*re-ee.y;let _e=ce*ce+se*se;if(_e<=2)return new ne(ce,se);fe=Math.sqrt(_e/2)}else{let te=!1;Re>Number.EPSILON?P>Number.EPSILON&&(te=!0):Re<-Number.EPSILON?P<-Number.EPSILON&&(te=!0):Math.sign(xe)===Math.sign(E)&&(te=!0),te?(ce=-xe,se=Re,fe=Math.sqrt(V)):(ce=Re,se=xe,fe=Math.sqrt(V/2))}return new ne(ce/fe,se/fe)}let q=[];for(let ee=0,I=H.length,ue=I-1,ce=ee+1;ee<I;ee++,ue++,ce++)ue===I&&(ue=0),ce===I&&(ce=0),q[ee]=B(H[ee],H[ue],H[ce]);let oe=[],he,ke=q.concat();for(let ee=0,I=b.length;ee<I;ee++){let ue=b[ee];he=[];for(let ce=0,se=ue.length,fe=se-1,Re=ce+1;ce<se;ce++,fe++,Re++)fe===se&&(fe=0),Re===se&&(Re=0),he[ce]=B(ue[ce],ue[fe],ue[Re]);oe.push(he),ke=ke.concat(he)}for(let ee=0;ee<p;ee++){let I=ee/p,ue=g*Math.cos(I*Math.PI/2),ce=d*Math.sin(I*Math.PI/2)+_;for(let se=0,fe=H.length;se<fe;se++){let Re=Z(H[se],q[se],ce);le(Re.x,Re.y,-ue)}for(let se=0,fe=b.length;se<fe;se++){let Re=b[se];he=oe[se];for(let xe=0,P=Re.length;xe<P;xe++){let E=Z(Re[xe],he[xe],ce);le(E.x,E.y,-ue)}}}let Xe=d+_;for(let ee=0;ee<z;ee++){let I=m?Z(y[ee],ke[ee],Xe):y[ee];M?(w.copy(R.normals[0]).multiplyScalar(I.x),T.copy(R.binormals[0]).multiplyScalar(I.y),C.copy(x[0]).add(w).add(T),le(C.x,C.y,C.z)):le(I.x,I.y,0)}for(let ee=1;ee<=h;ee++)for(let I=0;I<z;I++){let ue=m?Z(y[I],ke[I],Xe):y[I];M?(w.copy(R.normals[ee]).multiplyScalar(ue.x),T.copy(R.binormals[ee]).multiplyScalar(ue.y),C.copy(x[ee]).add(w).add(T),le(C.x,C.y,C.z)):le(ue.x,ue.y,f/h*ee)}for(let ee=p-1;ee>=0;ee--){let I=ee/p,ue=g*Math.cos(I*Math.PI/2),ce=d*Math.sin(I*Math.PI/2)+_;for(let se=0,fe=H.length;se<fe;se++){let Re=Z(H[se],q[se],ce);le(Re.x,Re.y,f+ue)}for(let se=0,fe=b.length;se<fe;se++){let Re=b[se];he=oe[se];for(let xe=0,P=Re.length;xe<P;xe++){let E=Z(Re[xe],he[xe],ce);M?le(E.x,E.y+x[h-1].y,x[h-1].x+ue):le(E.x,E.y,f+ue)}}}$(),ie();function $(){let ee=s.length/3;if(m){let I=0,ue=z*I;for(let ce=0;ce<j;ce++){let se=O[ce];Ie(se[2]+ue,se[1]+ue,se[0]+ue)}I=h+p*2,ue=z*I;for(let ce=0;ce<j;ce++){let se=O[ce];Ie(se[0]+ue,se[1]+ue,se[2]+ue)}}else{for(let I=0;I<j;I++){let ue=O[I];Ie(ue[2],ue[1],ue[0])}for(let I=0;I<j;I++){let ue=O[I];Ie(ue[0]+z*h,ue[1]+z*h,ue[2]+z*h)}}i.addGroup(ee,s.length/3-ee,0)}function ie(){let ee=s.length/3,I=0;Me(H,I),I+=H.length;for(let ue=0,ce=b.length;ue<ce;ue++){let se=b[ue];Me(se,I),I+=se.length}i.addGroup(ee,s.length/3-ee,1)}function Me(ee,I){let ue=ee.length;for(;--ue>=0;){let ce=ue,se=ue-1;se<0&&(se=ee.length-1);for(let fe=0,Re=h+p*2;fe<Re;fe++){let xe=z*fe,P=z*(fe+1),E=I+ce+xe,V=I+se+xe,K=I+se+P,te=I+ce+P;Pe(E,V,K,te)}}}function le(ee,I,ue){l.push(ee),l.push(I),l.push(ue)}function Ie(ee,I,ue){Ne(ee),Ne(I),Ne(ue);let ce=s.length/3,se=v.generateTopUV(i,s,ce-3,ce-2,ce-1);qe(se[0]),qe(se[1]),qe(se[2])}function Pe(ee,I,ue,ce){Ne(ee),Ne(I),Ne(ce),Ne(I),Ne(ue),Ne(ce);let se=s.length/3,fe=v.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);qe(fe[0]),qe(fe[1]),qe(fe[3]),qe(fe[1]),qe(fe[2]),qe(fe[3])}function Ne(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function qe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new n(i,e.options)}},lx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,l),new ne(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],m=e[s*3],g=e[s*3+1],d=e[s*3+2],_=e[r*3],p=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-f),new ne(m,1-d),new ne(_,1-u)]:[new ne(a,1-l),new ne(h,1-f),new ne(g,1-d),new ne(p,1-u)]}};ra=class n extends qc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mi=class n extends Ct{constructor(e=new Kt([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(o,2));function c(h){let f=s.length/3,m=h.extractPoints(t),g=m.shape,d=m.holes;mi.isClockWise(g)===!1&&(g=g.reverse());for(let p=0,u=d.length;p<u;p++){let v=d[p];mi.isClockWise(v)===!0&&(d[p]=v.reverse())}let _=mi.triangulateShape(g,d);for(let p=0,u=d.length;p<u;p++){let v=d[p];g=g.concat(v)}for(let p=0,u=g.length;p<u;p++){let v=g[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,u=_.length;p<u;p++){let v=_[p],x=v[0]+f,M=v[1]+f,R=v[2]+f;i.push(x,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};oa=class n extends Ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,f=new L,m=new L;for(let g=0;g<=i;g++)for(let d=0;d<=s;d++){let _=d/s*r,p=g/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),m.subVectors(f,h).normalize(),l.push(m.x,m.y,m.z),c.push(d/s),c.push(g/i)}for(let g=1;g<=i;g++)for(let d=1;d<=s;d++){let _=(s+1)*g+d-1,p=(s+1)*(g-1)+d-1,u=(s+1)*(g-1)+d,v=(s+1)*g+d;o.push(_,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},aa=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fe=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},la=class extends ti{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Hs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zc=class extends Hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=e,a=2*t-i;break;case Ru:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=e,l=2*i-t;break;case Ru:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,d=(i-t)/(s-t),_=d*d,p=_*d,u=-m*p+2*m*_-m*d,v=(1+m)*p+(-1.5-2*m)*_+(-.5+m)*d+1,x=(-1-g)*p+(1.5+g)*_+.5*d,M=g*p-g*_;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+v*o[c+R]+x*o[l+R]+M*o[f+R];return r}},Kc=class extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*f+o[l+m]*h;return r}},Jc=class extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ux(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,m=f-i,g=f+i;for(let d=0;d!==i;++d){let _=t[f+d];if(_!==t[m+d]||_!==t[g+d]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,m=o*i;for(let g=0;g!==i;++g)t[m+g]=t[f+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Sc;qi=class extends In{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Oo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;jc=class extends In{};jc.prototype.ValueTypeName="color";Qc=class extends In{};Qc.prototype.ValueTypeName="number";eh=class extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ca=class extends In{InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;Yi=class extends In{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Oo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;th=class extends In{};th.prototype.ValueTypeName="vector";Rf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},nh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,m=c.length;f<m;f+=2){let g=c[f],d=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return d}return null}}},fx=new nh,wr=class{constructor(e){this.manager=e!==void 0?e:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wr.DEFAULT_MATERIAL_NAME="__DEFAULT";ih=class extends wr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Rf.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=_r("img");function l(){h(),Rf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Ar=class extends wr{constructor(e){super(e)}load(e,t,i,s){let r=new $t,o=new ih(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Rr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ha=class extends Rr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fl=new Ke,Cf=new L,Pf=new L,ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},If=new Ke,ar=new L,kl=new L,sh=class extends ua{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(ar),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-ar.x,-ar.y,-ar.z),If.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}},fa=class extends Rr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rh=class extends ua{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Lf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Ah="\\[\\]\\.:\\/",dx=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",px="[^"+Ah.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",Rh),gx=/(WCOD+)?/.source.replace("WCOD",px),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),vx=new RegExp("^"+mx+gx+_x+xx+"$"),yx=["material","materials","bones","map"],oh=class{constructor(e,t,i){let s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){let t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=oh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ov=new Float32Array(1),Cr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ma=class extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah)});function Sx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function bx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ex(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rd),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case $i.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case $i.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ph)}function wx(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ax(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Ph),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rd))}function Rx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Cx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ph)}function Px(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function Ix(n){this.enabled!==!1&&n.preventDefault()}function Lx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var id,Ph,rd,Sa,sd,Mx,Lt,tn,lt,Ch,ba,od=rt(()=>{Tt();id={type:"change"},Ph={type:"start"},rd={type:"end"},Sa=new Ns,sd=new An,Mx=Math.cos(70*Ln.DEG2RAD),Lt=new L,tn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6,ba=class extends ma{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Zt,this._lastTargetPosition=new L,this._quat=new Zt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new L,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new L,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bx.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerUp=Ex.bind(this),this._onContextMenu=Ix.bind(this),this._onMouseWheel=Ax.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Cx.bind(this),this._onTouchMove=Px.bind(this),this._onMouseDown=Tx.bind(this),this._onMouseMove=wx.bind(this),this._interceptControlDown=Lx.bind(this),this._interceptControlUp=Dx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(id),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Lt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sa.origin.copy(this.object.position),Sa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sa.direction))<Mx?this.object.lookAt(this.target):(sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sa.intersectPlane(sd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var Ea,Ws,ad,ld,cd,hd,Ta,ud=rt(()=>{Tt();Ea=class extends Nt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ne(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},Ws=new L,ad=new Ke,ld=new Ke,cd=new L,hd=new L,Ta=class{constructor(e={}){let t=this,i,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(d,_){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),ad.copy(_.matrixWorldInverse),ld.multiplyMatrices(_.projectionMatrix,ad),h(d,d,_),g(d)},this.setSize=function(d,_){i=d,s=_,r=i/2,o=s/2,l.style.width=d+"px",l.style.height=_+"px"};function c(d){d.isCSS2DObject&&(d.element.style.display="none");for(let _=0,p=d.children.length;_<p;_++)c(d.children[_])}function h(d,_,p){if(d.visible===!1){c(d);return}if(d.isCSS2DObject){Ws.setFromMatrixPosition(d.matrixWorld),Ws.applyMatrix4(ld);let u=Ws.z>=-1&&Ws.z<=1&&d.layers.test(p.layers)===!0,v=d.element;v.style.display=u===!0?"":"none",u===!0&&(d.onBeforeRender(t,_,p),v.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Ws.x*r+r)+"px,"+(-Ws.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),d.onAfterRender(t,_,p));let x={distanceToCameraSquared:f(p,d)};a.objects.set(d,x)}for(let u=0,v=d.children.length;u<v;u++)h(d.children[u],_,p)}function f(d,_){return cd.setFromMatrixPosition(d.matrixWorld),hd.setFromMatrixPosition(_.matrixWorld),cd.distanceToSquared(hd)}function m(d){let _=[];return d.traverseVisible(function(p){p.isCSS2DObject&&_.push(p)}),_}function g(d){let _=m(d).sort(function(u,v){if(u.renderOrder!==v.renderOrder)return v.renderOrder-u.renderOrder;let x=a.objects.get(u).distanceToCameraSquared,M=a.objects.get(v).distanceToCameraSquared;return x-M}),p=_.length;for(let u=0,v=_.length;u<v;u++)_[u].element.style.zIndex=p-u}}}});function Sn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ir.copy(e),Ir[i]=0,Ir.normalize();let c=.5*o/(o+a),h=1-Ir.angleTo(n)/l;return Math.sign(Ir[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ir,wa,fd=rt(()=>{Tt();Ir=new L;wa=class extends bt{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,g=h.length/6,d=new L,_=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:d.set(1,0,0),m[u+0]=Sn(d,l,"z","y",r,i),m[u+1]=1-Sn(d,l,"y","z",r,t);break;case 1:d.set(-1,0,0),m[u+0]=1-Sn(d,l,"z","y",r,i),m[u+1]=1-Sn(d,l,"y","z",r,t);break;case 2:d.set(0,1,0),m[u+0]=1-Sn(d,l,"x","z",r,e),m[u+1]=Sn(d,l,"z","x",r,i);break;case 3:d.set(0,-1,0),m[u+0]=1-Sn(d,l,"x","z",r,e),m[u+1]=1-Sn(d,l,"z","x",r,i);break;case 4:d.set(0,0,1),m[u+0]=1-Sn(d,l,"x","y",r,e),m[u+1]=1-Sn(d,l,"y","x",r,t);break;case 5:d.set(0,0,-1),m[u+0]=Sn(d,l,"x","y",r,e),m[u+1]=1-Sn(d,l,"y","x",r,t);break}}}});var Xs,Ih=rt(()=>{Xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var dn,Ux,Lh,Nx,bi,qs=rt(()=>{Tt();dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ux=new Fs(-1,1,1,-1,0,1),Lh=class extends Ct{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},Nx=new Lh,bi=class{constructor(e){this._mesh=new Oe(Nx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ux)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Aa,dd=rt(()=>{Tt();qs();Aa=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Lr,Ra,Dh=rt(()=>{qs();Lr=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ra=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Ca,pd=rt(()=>{Tt();Ih();dd();Dh();Dh();Ca=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ne);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Aa(Xs),this.copyPass.material.blending=Rt,this.clock=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lr!==void 0&&(o instanceof Lr?i=!0:o instanceof Ra&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Pa,md=rt(()=>{Tt();qs();Pa=class extends dn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});function gd(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Ox(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Wi(s,e,e);return r.wrapS=St,r.wrapT=St,r.needsUpdate=!0,r}function Ox(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Dr,Ur,Ia,_d=rt(()=>{Tt();Dr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Ur={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ia={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`}});function Uh(n,e,t){let i=Fx(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Fx(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new L(Math.cos(r),Math.sin(r),o))}return i}var Nr,xd=rt(()=>{Tt();Nr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Uh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`}});var La,vd=rt(()=>{La=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,m=l-f,g=c-f,d=e-m,_=t-g,p,u;d>_?(p=1,u=0):(p=0,u=1);let v=d-p+h,x=_-u+h,M=d-1+2*h,R=_-1+2*h,T=l&255,w=c&255,C=this.perm[T+this.perm[w]]%12,U=this.perm[T+p+this.perm[w+u]]%12,y=this.perm[T+1+this.perm[w+1]]%12,b=.5-d*d-_*_;b<0?i=0:(b*=b,i=b*b*this.dot(this.grad3[C],d,_));let D=.5-v*v-x*x;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[U],v,x));let O=.5-M*M-R*R;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[y],M,R)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),m=Math.floor(i+c),g=1/6,d=(h+f+m)*g,_=h-d,p=f-d,u=m-d,v=e-_,x=t-p,M=i-u,R,T,w,C,U,y;v>=x?x>=M?(R=1,T=0,w=0,C=1,U=1,y=0):v>=M?(R=1,T=0,w=0,C=1,U=0,y=1):(R=0,T=0,w=1,C=1,U=0,y=1):x<M?(R=0,T=0,w=1,C=0,U=1,y=1):v<M?(R=0,T=1,w=0,C=0,U=1,y=1):(R=0,T=1,w=0,C=1,U=1,y=0);let b=v-R+g,D=x-T+g,O=M-w+g,H=v-C+2*g,Z=x-U+2*g,z=M-y+2*g,j=v-1+3*g,B=x-1+3*g,q=M-1+3*g,oe=h&255,he=f&255,ke=m&255,Xe=this.perm[oe+this.perm[he+this.perm[ke]]]%12,$=this.perm[oe+R+this.perm[he+T+this.perm[ke+w]]]%12,ie=this.perm[oe+C+this.perm[he+U+this.perm[ke+y]]]%12,Me=this.perm[oe+1+this.perm[he+1+this.perm[ke+1]]]%12,le=.6-v*v-x*x-M*M;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[Xe],v,x,M));let Ie=.6-b*b-D*D-O*O;Ie<0?r=0:(Ie*=Ie,r=Ie*Ie*this.dot3(this.grad3[$],b,D,O));let Pe=.6-H*H-Z*Z-z*z;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[ie],H,Z,z));let Ne=.6-j*j-B*B-q*q;return Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this.dot3(this.grad3[Me],j,B,q)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,m,g,d,_=(e+t+i+s)*l,p=Math.floor(e+_),u=Math.floor(t+_),v=Math.floor(i+_),x=Math.floor(s+_),M=(p+u+v+x)*c,R=p-M,T=u-M,w=v-M,C=x-M,U=e-R,y=t-T,b=i-w,D=s-C,O=U>y?32:0,H=U>b?16:0,Z=y>b?8:0,z=U>D?4:0,j=y>D?2:0,B=b>D?1:0,q=O+H+Z+z+j+B,oe=o[q][0]>=3?1:0,he=o[q][1]>=3?1:0,ke=o[q][2]>=3?1:0,Xe=o[q][3]>=3?1:0,$=o[q][0]>=2?1:0,ie=o[q][1]>=2?1:0,Me=o[q][2]>=2?1:0,le=o[q][3]>=2?1:0,Ie=o[q][0]>=1?1:0,Pe=o[q][1]>=1?1:0,Ne=o[q][2]>=1?1:0,qe=o[q][3]>=1?1:0,ee=U-oe+c,I=y-he+c,ue=b-ke+c,ce=D-Xe+c,se=U-$+2*c,fe=y-ie+2*c,Re=b-Me+2*c,xe=D-le+2*c,P=U-Ie+3*c,E=y-Pe+3*c,V=b-Ne+3*c,K=D-qe+3*c,te=U-1+4*c,J=y-1+4*c,Ee=b-1+4*c,de=D-1+4*c,ge=p&255,Ye=u&255,re=v&255,_e=x&255,Be=a[ge+a[Ye+a[re+a[_e]]]]%32,He=a[ge+oe+a[Ye+he+a[re+ke+a[_e+Xe]]]]%32,be=a[ge+$+a[Ye+ie+a[re+Me+a[_e+le]]]]%32,Je=a[ge+Ie+a[Ye+Pe+a[re+Ne+a[_e+qe]]]]%32,We=a[ge+1+a[Ye+1+a[re+1+a[_e+1]]]]%32,Qe=.6-U*U-y*y-b*b-D*D;Qe<0?h=0:(Qe*=Qe,h=Qe*Qe*this.dot4(r[Be],U,y,b,D));let N=.6-ee*ee-I*I-ue*ue-ce*ce;N<0?f=0:(N*=N,f=N*N*this.dot4(r[He],ee,I,ue,ce));let me=.6-se*se-fe*fe-Re*Re-xe*xe;me<0?m=0:(me*=me,m=me*me*this.dot4(r[be],se,fe,Re,xe));let X=.6-P*P-E*E-V*V-K*K;X<0?g=0:(X*=X,g=X*X*this.dot4(r[Je],P,E,V,K));let Q=.6-te*te-J*J-Ee*Ee-de*de;return Q<0?d=0:(Q*=Q,d=Q*Q*this.dot4(r[We],te,J,Ee,de)),27*(h+f+m+g+d)}}});var Or,yd=rt(()=>{Tt();qs();_d();xd();Ih();vd();Or=class n extends dn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},Dr.defines),uniforms:Dn.clone(Dr.uniforms),vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,blending:Rt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new la,this.normalMaterial.blending=Rt,this.pdMaterial=new Et({defines:Object.assign({},Nr.defines),uniforms:Dn.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},Ur.defines),uniforms:Dn.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,blending:Rt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:Dn.clone(Xs.uniforms),vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_a,blendDst:Vs,blendEquation:gn,blendSrcAlpha:ga,blendDstAlpha:Vs,blendEquationAlpha:gn}),this.blendMaterial=new Et({uniforms:Dn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ch,blendSrc:_a,blendDst:Vs,blendEquation:gn,blendSrcAlpha:ga,blendDstAlpha:Vs,blendEquationAlpha:gn}),this.fsQuad=new bi(null),this.originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new zs,this.depthTexture.format=xi,this.depthTexture.type=_i,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:kt,magFilter:kt,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Uh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new La,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Wi(s,e,e,un,Cn);return r.wrapS=St,r.wrapT=St,r.needsUpdate=!0,r}};Or.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});var Md,Sd=rt(()=>{Md={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Da,bd=rt(()=>{Tt();qs();Sd();Da=class extends dn{constructor(){super();let e=Md;this.uniforms=Dn.clone(e.uniforms),this.material=new aa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ph&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});function Ei(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Ti(n,e,t=!0){let i=new _n(n);return t&&(i.colorSpace=dt),e&&(i.wrapS=i.wrapT=St,i.repeat.set(e[0],e[1])),i.anisotropy=8,i}function Nh(n){ni=n?11:5;let e=2048,t=1024,[i,s]=Ei(e,t),r=s.createLinearGradient(0,0,0,t/2);n?(r.addColorStop(0,"#0b1630"),r.addColorStop(.55,"#27386a"),r.addColorStop(.85,"#b9705a"),r.addColorStop(1,"#eaa46a")):(r.addColorStop(0,"#2a66b8"),r.addColorStop(.45,"#4f8fd8"),r.addColorStop(.82,"#9cc4ea"),r.addColorStop(1,"#cfe1ef")),s.fillStyle=r,s.fillRect(0,0,e,t/2);let o=()=>(Ue()+Ue()+Ue()-1.5)/1.5;for(let c=0;c<(n?12:22);c++){let h=Ue()*e,f=t*(.14+Ue()*.26),m=(.6+Ue()*.8)*(.5+f/t*1.6),g=(160+Ue()*200)*m,d=(30+Ue()*25)*m;for(let _=0;_<160;_++){let p=h+o()*g,u=o()*d,v=f+Math.min(u,d*.35),x=(8+Ue()*26)*m*(1-Math.abs(p-h)/g*.5);if(x<=1)continue;let M=v>f+d*.1,R=n?"255,190,160":M?"226,232,240":"255,255,255",T=s.createRadialGradient(p,v,0,p,v,x);T.addColorStop(0,`rgba(${R},${n?.1:.2})`),T.addColorStop(.6,`rgba(${R},${n?.05:.1})`),T.addColorStop(1,`rgba(${R},0)`),s.fillStyle=T,s.fillRect(p-x,v-x,x*2,x*2)}}if(!n){let c=s.createRadialGradient(e*.62,t*.22,0,e*.62,t*.22,90);c.addColorStop(0,"rgba(255,252,235,1)"),c.addColorStop(1,"rgba(255,252,235,0)"),s.fillStyle=c,s.fillRect(e*.62-90,t*.22-90,180,180)}let a=s.createLinearGradient(0,t/2,0,t);a.addColorStop(0,n?"#7d6460":"#cfe1ef"),a.addColorStop(.08,n?"#22241f":"#8e9586"),a.addColorStop(1,n?"#181a16":"#7b8274"),s.fillStyle=a,s.fillRect(0,t/2,e,t/2);let l=Ti(i);return l.mapping=pr,l}function Ed(){ni=3;let[n,e]=Ei(1024,1024);e.fillStyle="#4c6f33",e.fillRect(0,0,1024,1024);for(let a=0;a<6e4;a++){let l=Ue()*1024,c=Ue()*1024,h=4+Ue()*9,f=(Ue()-.5)*.7;e.strokeStyle=`hsl(${72+Ue()*34},${26+Ue()*22}%,${18+Ue()*24}%)`,e.lineWidth=1+Ue(),e.beginPath(),e.moveTo(l,c),e.lineTo(l+Math.sin(f)*h,c-Math.cos(f)*h),e.stroke()}let t=Ti(n,[200,200]),i=new Pn(700,700,140,140),s=i.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++){let l=i.attributes.position.getX(a),c=i.attributes.position.getY(a),h=.84+.13*Math.sin(l*.23+Math.cos(c*.17)*2)+.06*Math.sin(c*.41+l*.07)+(Ue()-.5)*.05;r[a*3]=h*.97,r[a*3+1]=h,r[a*3+2]=h*.9}i.setAttribute("color",new zt(r,3));let o=new Oe(i,new Fe({map:t,vertexColors:!0,roughness:1}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Td(){ni=21;let n=4,e=256,[t,i]=Ei(n*e,n*e),[s,r]=Ei(n*e,n*e);r.fillStyle="#d8d8d8",r.fillRect(0,0,n*e,n*e);for(let o=0;o<n;o++)for(let a=0;a<n;a++){let l=66+Ue()*7,c=o*e,h=a*e,f=i.createLinearGradient(c,h,c+e,h+e);f.addColorStop(0,`hsl(38,7%,${l+2}%)`),f.addColorStop(1,`hsl(36,6%,${l-2}%)`),i.fillStyle=f,i.fillRect(c,h,e,e);for(let m=0;m<900;m++)i.fillStyle=`rgba(${Ue()<.5?"0,0,0":"255,255,255"},${Ue()*.06})`,i.fillRect(c+Ue()*e,h+Ue()*e,1+Ue()*2,1+Ue()*2);for(let m=0;m<5;m++)i.strokeStyle=`rgba(90,85,78,${.04+Ue()*.05})`,i.lineWidth=6+Ue()*14,i.beginPath(),i.moveTo(c+Ue()*e,h),i.bezierCurveTo(c+Ue()*e,h+e*.3,c+Ue()*e,h+e*.7,c+Ue()*e,h+e),i.stroke()}for(let o=0;o<=n;o++)for(let[a,l,c]of[[i,"#7d7a74",4],[r,"#ffffff",5]])a.fillStyle=l,a.fillRect(o*e-c/2,0,c,n*e),a.fillRect(0,o*e-c/2,n*e,c);i.fillStyle="rgba(255,255,255,0.18)";for(let o=0;o<n;o++)i.fillRect(o*e+2,0,2,n*e),i.fillRect(0,o*e+2,n*e,2);return{map:Ti(t,[1,1]),rough:Ti(s,[1,1],!1),groesse:n*.6}}function wd(){ni=33;let n=1024,e=1024,[t,i]=Ei(n,e),s=7,r=e/s;for(let o=0;o<s;o++){let a=-Ue()*600;for(;a<n;){let l=500+Ue()*500,c=26+Ue()*6,h=40+Ue()*9;i.fillStyle=`hsl(${c},36%,${h}%)`,i.fillRect(a,o*r,l,r);for(let f=0;f<26;f++){i.strokeStyle=`hsla(${c},40%,${h-8-Ue()*8}%,${.25+Ue()*.3})`,i.lineWidth=.7+Ue()*1.6;let m=o*r+Ue()*r,g=.5+Ue()*2.5,d=Ue()*6;i.beginPath();for(let _=0;_<=l;_+=10)i.lineTo(a+_,m+Math.sin(_*.012+d)*g);i.stroke()}for(let f=0;f<6;f++)i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(a,o*r+r*(.15+f*.14),l,1.2);i.fillStyle="#2a1d14",i.fillRect(a+l-2,o*r,3,r),a+=l}i.fillStyle="#20160f",i.fillRect(0,o*r,n,5)}return{map:Ti(t,[1,1]),groesse:s*.145}}function kx(){ni=9;let[n,e]=Ei(512,512);e.fillStyle="#f0eee8",e.fillRect(0,0,512,512);for(let t=0;t<26e3;t++){e.fillStyle=`rgba(${Ue()<.5?"0,0,0":"255,255,255"},${Ue()*.05})`;let i=1+Ue()*1.8;e.fillRect(Ue()*512,Ue()*512,i,i)}return Ti(n,[1,1])}function zx(){ni=13;let[n,e]=Ei(512,512),t=512/6,i=512/12;e.fillStyle="#2b2e32",e.fillRect(0,0,512,512);for(let s=0;s<12;s++)for(let r=-1;r<7;r++){let o=r*t+s%2*t/2,a=s*i,l=18+Ue()*7,c=e.createLinearGradient(o,0,o+t,0);c.addColorStop(0,`hsl(210,5%,${l-5}%)`),c.addColorStop(.5,`hsl(210,5%,${l+4}%)`),c.addColorStop(1,`hsl(210,5%,${l-6}%)`),e.fillStyle=c,e.fillRect(o+1,a+1,t-2,i-2),e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(o,a+i-4,t,4)}return Ti(n,[1,1])}function Bx(){return Un.putz||(Un.putz=new Fe({map:kx(),roughness:.95}),Un.faschen=new Fe({color:14605267,roughness:.9}),Un.sockel=new Fe({color:5593179,roughness:.9}),Un.ziegel=new Fe({map:zx(),roughness:.6,metalness:.1}),Un.blech=new Fe({color:3816768,roughness:.4,metalness:.5,side:_t}),Un.rahmen=new Fe({color:3356475,roughness:.45,metalness:.2}),Un.glas=new yn({color:3359565,roughness:.04,metalness:.15,envMapIntensity:1.4,clearcoat:1}),Un.vorhang=new Fe({color:13616822,roughness:1})),Un}function Ad(n,e,t=4,i=null){let s=Bx(),r=new pt,o=6.2,a=9;e(n,o,a,s.putz,0,o/2,-a/2,r),s.putz.map.repeat.set(n/3,o/3),e(n+.02,.32,.03,s.sockel,0,.16,.015,r);let l=.6,c=3.2,h=Math.hypot(a/2+l,c),f=Math.atan2(c,a/2+l);for(let u of[-1,1]){let v=e(n+1,.16,h,s.ziegel,0,o+c/2+.06,-a/2+u*(a/4+l/2),r);v.rotation.x=u*f,v.material=s.ziegel,s.ziegel.map.repeat.set((n+1)/2.2,h/2.2)}let m=new Kt;m.moveTo(-a/2,0),m.lineTo(0,c-.05),m.lineTo(a/2,0);for(let u of[-1,1]){let v=new Oe(new Mi(m),s.putz);v.rotation.y=u*Math.PI/2,v.position.set(u*n/2,o,-a/2),r.add(v)}e(n+1,.2,.04,s.blech,0,o-.05,l+0,r);let g=new Oe(new vn(.075,.075,n+1,20,1,!0,0,Math.PI),s.blech);g.rotation.z=Math.PI/2,g.rotation.x=Math.PI,g.position.set(0,o-.02,l+.09),g.castShadow=!0,r.add(g);let d=new Oe(new vn(.05,.05,o,16),s.blech);d.position.set(n/2-.3,o/2,.12),d.castShadow=!0,r.add(d);for(let u=.8;u<o;u+=1.8)e(.03,.03,.12,s.blech,n/2-.3,u,.06,r);let _=(u,v,x,M,R)=>{e(u+.3,v+(R?.15:.3),.02,s.faschen,x,M+(R?.075:0),.01,r),e(u,v,.06,s.rahmen,x,M,.03,r);let T=Math.max(1,Math.round(u/1.1)),w=u/T;for(let C=0;C<T;C++){let U=x-u/2+w*(C+.5);e(w-.12,v-.12,.01,s.glas,U,M,.065,r),(!R||C===0)&&e(w*.35,v-.2,.005,s.vorhang,U-w*.25,M,.04,r),C&&e(.07,v,.075,s.rahmen,x-u/2+w*C,M,.035,r)}R||e(u+.1,.03,.14,s.blech,x,M-v/2-.03,.07,r)},p=Math.min(n/2-2,3.2);if(i){let x=i.tuerX,M=.06+i.H;e(1+.3,2.1+.15,.02,s.faschen,x,M+2.1/2+.075,.01,r),e(1,2.1,.07,s.rahmen,x,M+2.1/2,.035,r),e(1-.12,2.1-.1,.02,s.rahmen,x,M+2.1/2-.02,.075,r),e(.22,2.1-.5,.01,s.glas,x-.18,M+2.1/2+.1,.087,r),e(.025,.5,.04,s.blech,x+1/2-.14,M+1.05,.1,r)}else _(Math.min(3,Math.max(1.2,t-.9)),2.3,0,1.2,!0);for(let u of[-1,1]){let v=u*(t/2+1.4+.65);Math.abs(v)+.8<n/2&&_(1.3,1.3,v,1.45)}for(let u of[-p,0,p])_(1.3,1.3,u,4.3);return r}function Rd(){ni=41;let[n,e]=Ei(512,512);e.fillStyle="#2f4f22",e.fillRect(0,0,512,512);for(let t=0;t<9e3;t++)e.fillStyle=`hsl(${95+Ue()*25},${35+Ue()*20}%,${16+Ue()*22}%)`,e.beginPath(),e.ellipse(Ue()*512,Ue()*512,3+Ue()*4,1.5+Ue()*2,Ue()*3,0,7),e.fill();return new Fe({map:Ti(n,[4,1]),roughness:1})}var ni,Ue,Un,Cd=rt(()=>{Tt();ni=7,Ue=()=>(ni=ni*16807%2147483647)/2147483647;Un={}});function Pd(n,e=Math.PI/3){let t=Math.cos(e),i=(1+1e-10)*100,s=[new L,new L,new L],r=new L,o=new L,a=new L,l=new L;function c(_){let p=~~(_.x*i),u=~~(_.y*i),v=~~(_.z*i);return`${p},${u},${v}`}let h=n.index?n.toNonIndexed():n,f=h.attributes.position,m={};for(let _=0,p=f.count/3;_<p;_++){let u=3*_,v=s[0].fromBufferAttribute(f,u+0),x=s[1].fromBufferAttribute(f,u+1),M=s[2].fromBufferAttribute(f,u+2);r.subVectors(M,x),o.subVectors(v,x);let R=new L().crossVectors(r,o).normalize();for(let T=0;T<3;T++){let w=s[T],C=c(w);C in m||(m[C]=[]),m[C].push(R)}}let g=new Float32Array(f.count*3),d=new zt(g,3,!1);for(let _=0,p=f.count/3;_<p;_++){let u=3*_,v=s[0].fromBufferAttribute(f,u+0),x=s[1].fromBufferAttribute(f,u+1),M=s[2].fromBufferAttribute(f,u+2);r.subVectors(M,x),o.subVectors(v,x),a.crossVectors(r,o).normalize();for(let R=0;R<3;R++){let T=s[R],w=c(T),C=m[w];l.set(0,0,0);for(let U=0,y=C.length;U<y;U++){let b=C[U];a.dot(b)>t&&l.add(b)}l.normalize(),d.setXYZ(u+R,l.x,l.y,l.z)}}return h.setAttribute("normal",d),h}var Id=rt(()=>{Tt()});function Gn(n,e,t,i=8){let s=[];for(let r=1;r<=i;r++){let o=r/i,a=(1-o)**2,l=2*(1-o)*o,c=o*o;s.push([a*n[0]+l*e[0]+c*t[0],a*n[1]+l*e[1]+c*t[1]])}return s}function Oh(n,e,t){let i=new Kt;i.moveTo(n[0][0],n[0][1]);for(let[r,o]of n.slice(1))i.lineTo(r,o);let s=new yi(i,{depth:e,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:4});return t?(s.rotateY(-Math.PI/2),s.translate(e/2,0,0)):s.translate(0,0,-e/2),Pd(s,.6)}function Nn(n,e,t,i,s){let r=new Oe(Oh(n,e,i),t);return r.castShadow=r.receiveShadow=!0,s&&s.add(r),r}var Ld,Dd,Fh,Ud,Nd,Ua=rt(()=>{Tt();Id();Ld=[[0,0],[.115,0],...Gn([.115,0],[.168,.02],[.158,.11],16),...Gn([.158,.11],[.152,.185],[.138,.205],10),[.126,.205],[.126,.06],[.014,.06],[.014,.15],[0,.15]],Dd=[[-.004,-.004],[.115,-.004],...Gn([.115,-.004],[.172,.02],[.162,.11],16),...Gn([.162,.11],[.156,.19],[.14,.209],10),[-.004,.209]],Fh=[[0,-.07],[0,.06],...Gn([0,.06],[.088,.062],[.092,-.004],16),[.092,-.018],[.022,-.018],[.022,-.07]],Ud=(()=>{let t=[[-.0375,0],[.0375,0],[.0375,.005]];for(let i=1;i<12;i++){let s=.0375-.075*i/12;t.push([s,.005+(.024-.005)*Math.sqrt(1-(s/.0375)**2)])}return t.push([-.0375,.005]),t})(),Nd=[[36,0],[226,0],[232,8],[214,42],[190,42],[190,38],[210,38],[222,14],[38,34],[28,51],[0,51],[0,47],[25,47],[36,30]].map(([n,e])=>[(n-116)/1e3,(e-25.5)/1e3])});var kh,Od,Ji,Na,Fd,kd,ji,zh,zd=rt(()=>{kh={tds:{klar:{b:[1080,1500,2080,2200,3080,3700,4080,4500,5080,5200,5900,6080,6700,7080,7400,8080,8200,8900,9080,9600,10080,10400,11080,11100,11900,12080,12600,13080,13300,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4600,5050,5550,6050,6550,7050],p:[[854,917,1088,1171,1340,1441,1515,1801,1934,1995,2032,2047,2197,2254,2374,2630,2679,2781,2831,3150,3295,3400,3546,3587,3685,3795,4097,4425,4541,4723],[973,1051,1242,1329,1569,1692,1818,2121,2274,2340,2440,2463,2634,2710,2843,3156,3208,3297,3432,3768,3931,4048,4256,4398,4526,4681,5001,5347,5471,5753],[1053,1145,1397,1488,1760,1944,2083,2401,2613,2684,2809,2838,3071,3194,3338,3720,3857,4010,4192,4427,4606,4735,5008,5250,5406,5608,5946,6307,6440,6755],[1171,1279,1550,1647,1989,2196,2387,2720,2954,3028,3218,3253,3548,3690,3866,4306,4508,4685,4913,5146,5302,5382,5718,6061,6246,6494,6851,7229,7370,7785],[1271,1394,1704,1805,2179,2447,2653,3060,3334,3393,3627,3709,4185,4295,4401,4971,5196,5400,5671,5964,6138,6269,6668,6912,7126,7419,7795,8190,8338,8789],[1410,1547,1859,2024,2468,2758,3017,3480,3773,3817,4115,4204,4622,4871,4970,5596,5906,6074,6392,6743,6934,7117,7580,7724,7967,8305,8699,9112,9268,9818],[1508,1662,2013,2243,2718,3070,3342,3860,4213,4261,4585,4679,5160,5455,5564,6261,6556,6808,7172,7561,7770,8004,8530,8575,8846,9230,9643,10074,10237,10821],[1647,1816,2168,2461,3007,3361,3686,4279,4654,4705,5093,5195,5696,6011,6133,6887,7205,7483,7893,8340,8566,8852,9441,9387,9687,10116,10548,10996,11167,11850],[1750,1935,2329,2688,3269,3686,4059,4708,5112,5148,5603,5711,6278,6647,6761,7580,7923,8229,8685,9193,9437,9775,10464,10311,10642,11123,11575,12042,12223,12944],[1885,2083,2516,2899,3547,3984,4376,5078,5533,5574,6052,6165,6811,7192,7296,8177,8603,8872,9372,9878,10138,10586,11303,11050,11407,11927,12396,12879,13066,13884],[1985,2198,2711,3118,3797,4296,4701,5458,5973,6018,6521,6641,7367,7796,7891,8842,9233,9586,10132,10637,10913,11473,12253,11901,12287,12853,13340,13839,14035,14886],[2123,2351,2905,3336,4086,4607,5065,5878,6414,6462,7029,7156,7925,8372,8460,9467,9883,10261,10853,11355,11650,12321,13165,12713,13128,13739,14245,14761,14964,15916],[2223,2466,3100,3555,4336,4919,5390,6258,6853,6907,7499,7631,8482,8977,9055,10132,10572,10975,11613,12113,12424,13208,14115,13564,14007,14665,15189,15722,15933,16920],[2362,2620,3294,3774,4625,5230,5754,6677,7293,7351,8007,8146,9039,9553,9623,10758,11222,11650,12334,12833,13161,14055,15026,14376,14848,15551,16094,16644,16863,17949]]},matt:{b:[1080,1500,2080,2200,3080,3700,4080,4500,5080,5200,5900,6080,6700,7080,7400,8080,8200,8900,9080,9600,10080,10400,11080,11100,11900,12080,12600,13080,13300,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4600,5050,5550,6050,6550,7050],p:[[860,924,1098,1181,1355,1459,1534,1823,1959,2020,2061,2077,2229,2288,2410,2669,2718,2824,2875,3196,3344,3451,3600,3641,3743,3854,4158,4488,4606,4791],[983,1065,1262,1350,1598,1726,1856,2163,2321,2388,2495,2519,2696,2775,2911,3231,3284,3379,3516,3857,4025,4145,4359,4501,4636,4793,5118,5468,5594,5883],[1068,1166,1425,1518,1802,1995,2139,2463,2683,2755,2890,2921,3163,3291,3439,3830,3969,4132,4316,4558,4744,4877,5159,5402,5568,5773,6118,6486,6622,6948],[1191,1306,1588,1686,2044,2263,2461,2801,3046,3122,3325,3363,3669,3818,4e3,4452,4656,4846,5077,5319,5485,5570,5918,6262,6461,6712,7079,7466,7610,8040],[1295,1427,1751,1855,2248,2530,2745,3161,3448,3510,3760,3846,4336,4454,4567,5153,5380,5600,5876,6180,6365,6503,6917,7162,7394,7690,8078,8484,8637,9105],[1439,1588,1915,2083,2551,2858,3127,3601,3910,3957,4274,4367,4802,5061,5169,5813,6127,6313,6636,7001,7206,7397,7878,8023,8287,8630,9038,9464,9626,10197],[1542,1709,2078,2312,2815,3186,3470,4001,4372,4423,4770,4869,5369,5677,5796,6514,6812,7087,7456,7862,8086,8330,8877,8923,9219,9608,10038,10483,10653,11262],[1685,1869,2242,2540,3117,3493,3832,4440,4835,4890,5304,5412,5936,6264,6397,7176,7498,7801,8217,8683,8926,9224,9837,9784,10112,10548,10998,11463,11642,12353],[1794,1995,2414,2777,3394,3836,4224,4890,5318,5359,5842,5958,6550,6934,7061,7908,8256,8590,9053,9583,9846,10197,10914,10761,11125,11613,12087,12573,12762,13515],[1933,2150,2609,2997,3684,4149,4558,5278,5760,5805,6314,6435,7109,7507,7626,8537,8969,9269,9777,10306,10587,11050,11796,11545,11937,12465,12957,13461,13658,14511],[2038,2271,2813,3225,3948,4477,4901,5678,6222,6272,6809,6939,7695,8143,8253,9238,9634,10021,10577,11107,11407,11982,12796,12445,12869,13445,13957,14480,14686,15576],[2181,2431,3016,3454,4250,4805,5283,6118,6685,6739,7343,7480,8282,8750,8855,9898,10321,10736,11337,11867,12188,12876,13756,13306,13763,14384,14918,15459,15674,16667],[2285,2553,3220,3682,4514,5133,5626,6518,7147,7207,7840,7982,8869,9386,9482,10599,11046,11490,12137,12668,13007,13809,14755,14206,14695,15362,15917,16478,16702,17733],[2429,2713,3423,3910,4817,5460,6007,6956,7609,7674,8374,8525,9456,9993,10083,11261,11732,12203,12898,13430,13788,14702,15715,15067,15588,16302,16877,17457,17690,18825]]},poly:{b:[1080,2080,3080,4080,5080,6080,7080,8080,9080,10080,11080,12080,13080,14080],t:[550,1050,1550,2050,2550,3050,3550,4050,4550,5050,5550,6050,6550,7050],p:[[835,986,1258,1492,1781,2005,2274,2630,2957,3205,3451,3597,3878,4065],[896,1124,1423,1684,1992,2273,2560,2972,3317,3589,3887,4052,4389,4593],[956,1221,1578,1838,2202,2501,2845,3276,3699,4021,4343,4565,4921,5182],[1017,1359,1753,2030,2413,2769,3132,3659,4099,4446,4819,5059,5471,5751],[1096,1467,1809,2194,2663,3037,3457,4013,4500,4908,5305,5602,6033,6370],[1177,1604,1994,2446,2944,3396,3842,4466,4981,5233,5681,5995,6484,6839],[1257,1713,2180,2659,3224,3704,4219,4880,5471,5785,6257,6429,6935,7347],[1347,1850,2365,2912,3515,4061,4604,5332,5953,6500,7023,7413,7976,8406],[1428,1959,2551,3125,3795,4370,4990,5757,6443,7052,7599,8046,8628,9114],[1517,2106,2726,3178,4096,4717,5385,6199,6905,7577,8175,8640,9279,9784],[1598,2204,2901,3391,4387,5026,5772,6602,7365,8129,8751,9274,9929,10492],[1688,2341,3077,3644,4677,5374,6157,7046,7826,8653,9327,9867,10581,11162],[1779,2439,3252,3857,4968,5683,6542,7449,8287,9205,9904,10500,11232,11869],[1879,2577,3428,4110,5258,6030,6928,7892,8748,9730,10479,11095,11864,12519]]}},skyview:{klar:{b:[1e3,1500,2e3,2200,3e3,3700,4e3,4500,5e3,5200,5900,6e3,6700,7e3,7400,8e3,8200,8900,9e3,9600,1e4,10400,11e3,11100,11900,12e3,12600,13e3,13300,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4600,5e3,5500,6e3,6500,7e3],p:[[1216,1333,1407,1567,1697,2026,2149,2307,2362,2522,2732,2794,2983,3044,3454,3821,3877,4047,4169,4298,4380,4698,4859,4966,5092,5162,5353,5501,5759,5925],[1316,1450,1581,1748,1908,2301,2434,2611,2723,2889,3125,3189,3502,3576,3968,4367,4431,4626,4750,4941,5036,5369,5591,5701,5855,5929,6180,6343,6611,6843],[1454,1607,1757,1930,2157,2575,2758,2953,3083,3257,3556,3625,4023,4107,4523,4912,4984,5243,5371,5583,5693,6079,6322,6436,6658,6736,7009,7185,7504,7759],[1554,1725,1931,2112,2368,2910,3104,3316,3502,3624,3949,4020,4543,4638,5109,5599,5677,5930,5953,6226,6350,6750,7054,7171,7422,7503,7837,8028,8357,8676],[1733,1921,2146,2333,2658,3265,3508,3739,3883,3991,4380,4456,5063,5169,5732,6285,6170,6508,6444,7008,7006,7460,7785,7906,8224,8310,8665,8870,9249,9594],[1893,2099,2380,2576,2928,3619,3873,4122,4333,4459,4873,4952,5644,5759,6348,6971,7023,7306,7126,7810,7822,8291,8677,8821,9168,9257,9672,9892,10102,10511],[2091,2316,2615,2818,3237,3973,4279,4544,4784,4926,5404,5487,5804,6331,6993,7656,7716,8063,7846,8373,8619,9141,9548,9676,10091,10184,10640,10854,11294,11727],[2351,2593,2949,3160,3607,4409,4724,5008,5314,5474,5977,6063,6864,7001,7678,8402,8470,8852,8607,9215,9516,10052,10520,10651,11094,11191,11689,11936,12247,12745],[2517,2781,3197,3416,3899,4789,5155,5461,5799,5977,6576,6641,7491,7642,8384,9184,9258,9687,9382,10044,10422,10975,11508,11664,12206,12281,12804,13070,13413,13940],[2690,2968,3398,3623,4168,5077,5454,5773,6185,6369,6961,7054,7945,8104,8868,9594,9775,10337,10160,10729,11049,11653,12203,12381,12922,13024,13604,13881,14192,14779],[2928,3224,3674,3905,4517,5433,5858,6196,6624,6836,7492,7590,8484,8654,9482,10140,10428,11054,10821,11541,11866,12523,13094,13317,13924,14031,14632,14923,15484,16097],[3128,3442,3948,4186,4828,5787,6223,6579,7065,7303,7986,8085,9025,9206,10057,10686,11081,11752,11522,12204,12522,13194,13826,14152,14788,14898,15559,15865,16537,17213],[3367,3699,4223,4468,5177,6142,6628,7002,7505,7771,8517,8621,9566,9756,10672,11232,11734,12470,12243,12976,13359,14084,14737,14987,15691,15805,16488,16807,17630,18330],[3567,3916,4498,4750,5488,6496,6993,7385,7946,8238,9010,9117,10105,10307,11247,11777,12387,13147,12845,13508,13905,14644,15359,15822,16554,16672,17416,17750,18682,19448]]},matt:{b:[1e3,1500,2e3,2200,3e3,3700,4e3,4500,5e3,5200,5900,6e3,6700,7e3,7400,8e3,8200,8900,9e3,9600,1e4,10400,11e3,11100,11900,12e3,12600,13e3,13300,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4600,5e3,5500,6e3,6500,7e3],p:[[1220,1339,1415,1576,1711,2043,2167,2327,2384,2545,2758,2820,3012,3075,3486,3856,3913,4087,4209,4341,4424,4744,4908,5015,5144,5215,5408,5558,5817,5987],[1324,1464,1599,1768,1934,2333,2469,2651,2767,2935,3177,3242,3561,3638,4034,4438,4503,4704,4829,5025,5125,5461,5688,5799,5960,6035,6292,6458,6729,6966],[1468,1627,1783,1959,2197,2624,2811,3012,3149,3326,3634,3704,4112,4200,4621,5018,5092,5361,5490,5710,5825,6217,6468,6583,6815,6894,7176,7357,7680,7945],[1572,1751,1966,2151,2421,2976,3175,3395,3591,3716,4053,4126,4661,4761,5239,5740,5822,6087,6111,6395,6526,6933,7248,7367,7632,7715,8059,8257,8592,8923],[1755,1954,2190,2382,2724,3346,3597,3838,3994,4106,4510,4588,5211,5323,5896,6461,6350,6704,6642,7220,7226,7689,8028,8151,8487,8575,8942,9157,9542,9903],[1919,2139,2433,2634,3007,3717,3979,4241,4465,4597,5029,5110,5821,5945,6544,7183,7240,7542,7364,8064,8087,8566,8968,9115,9483,9575,10006,10236,10454,10881],[2122,2362,2677,2886,3330,4088,4402,4683,4938,5087,5586,5673,6010,6547,7221,7903,7969,8338,8123,8669,8928,9462,9888,10019,10458,10554,11029,11255,11705,12160],[2386,2646,3020,3237,3713,4539,4865,5166,5490,5657,6185,6275,7101,7248,7939,8685,8759,9166,8925,9554,9868,10419,10908,11043,11514,11614,12133,12395,12716,13239],[2558,2841,3278,3505,4021,4939,5318,5643,6002,6188,6815,6884,7763,7926,8684,9508,9591,10048,9747,10434,10828,11397,11954,12114,12689,12768,13316,13598,13952,14508],[2734,3034,3487,3720,4300,5241,5630,5971,6405,6598,7222,7319,8240,8413,9194,9946,10137,10729,10557,11152,11490,12112,12688,12871,13446,13554,14160,14454,14779,15396],[2977,3297,3771,4011,4663,5612,6052,6414,6867,7088,7779,7881,8809,8994,9841,10528,10826,11486,11258,12007,12351,13028,13628,13855,14502,14613,15243,15554,16129,16776],[3181,3521,4054,4303,4986,5983,6435,6817,7330,7578,8298,8403,9379,9576,10449,11109,11515,12223,11998,12712,13052,13744,14408,14739,15418,15533,16226,16553,17241,17954],[3424,3785,4338,4594,5349,6354,6857,7260,7792,8069,8855,8965,9950,10157,11096,11691,12204,12980,12759,13526,13932,14680,15368,15623,16373,16493,17210,17552,18392,19133],[3629,4009,4621,4886,5674,6724,7240,7662,8255,8559,9374,9487,10519,10740,11704,12271,12894,13696,13401,14101,14522,15286,16038,16507,17289,17413,18194,18553,19504,20312]]},poly:{b:[1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[500,1e3,1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500,7e3],p:[[1162,1365,1629,2052,2278,2679,2943,3698,4012,4236,4691,4961,5318,5708],[1248,1493,1798,2263,2531,2974,3339,4076,4431,4696,5193,5504,5903,6335],[1334,1621,1967,2475,2784,3268,3735,4453,4850,5158,5696,6049,6489,6962],[1420,1748,2137,2746,3096,3562,4130,4971,5270,5618,6198,6592,7075,7590],[1546,1917,2346,3016,3358,3847,4507,5378,5678,5989,6700,7136,7660,8217],[1692,2104,2576,3287,3691,4251,4932,5845,6208,6569,7262,7861,8426,8843],[1838,2292,2805,3558,4014,4625,5357,6323,6726,7140,8005,8524,9132,9771],[2084,2579,3104,3919,4416,5088,5864,6880,7336,7800,8747,9308,9957,10498],[2190,2727,3293,4150,4698,5423,6249,7318,7825,8332,9349,9972,10663,11225],[2357,2934,3573,4531,5131,5867,6786,7955,8384,9142,9972,10656,11388,11952],[2543,3162,3842,4821,5464,6261,7201,8332,8843,9763,10634,11400,12173,12980],[2729,3389,4111,5112,5796,6656,7617,8710,9381,10223,11136,12044,12859,13806],[2915,3617,4380,5404,6128,7050,8033,9087,9901,10864,11818,12688,13544,14634],[3101,3845,4650,5695,6462,7443,8448,9465,10339,11214,12211,13331,14230,15461]]}}};kh.carport={standard:{b:[3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[2e3,2500,3e3,3500,5e3,6e3,7e3],p:[[3093,3934,4103,4749,5453,6649,7478,7867,8771,9140,9799,10228],[3303,4269,4343,5193,5862,7282,7836,8249,9178,9572,10255,10709],[3675,4687,4808,5871,6807,8275,8678,9061,10057,10519,11270,11836],[4110,5186,5652,6519,7520,9073,9540,10007,11028,11514,12290,12880],[4834,6115,6742,7771,8933,10646,11318,11946,13128,13776,14757,15465],[5852,7359,8258,9470,10903,12844,13699,14578,15987,16863,18070,19049],[6598,8263,9257,10670,12242,14321,15315,16352,17720,18598,19720,20657]]},vlies:{b:[3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3],t:[2e3,2500,3e3,3500,5e3,6e3,7e3],p:[[3116,3967,4143,4796,5507,6712,7548,7945,8858,9234,9900,10336],[3326,4302,4383,5240,5916,7345,7906,8327,9265,9666,10356,10817],[3708,4729,4860,5934,6880,8360,8772,9164,10172,10644,11404,11982],[4143,5228,5704,6582,7593,9158,9634,10110,11143,11639,12424,13026],[4881,6178,6820,7865,9041,10771,11459,12101,13300,13962,14959,15681],[5906,7432,8350,9578,11030,12990,13861,14759,16187,17079,18305,19303],[6661,8348,9360,10795,12388,14488,15501,16559,17948,18847,19988,20946]]}};Od={tds:{glas:{1080:[3,2],1500:[3,2],2080:[4,2],2200:[4,2],3080:[5,2],3700:[6,2],4080:[7,2],4500:[7,3],5080:[8,3],5200:[8,3],5900:[9,3],6080:[9,3],6700:[10,3],7080:[11,3],7400:[11,3],8080:[13,4],8200:[13,4],8900:[13,4],9080:[15,4],9600:[15,4],10080:[15,5],10400:[15,5],11080:[17,5],11100:[17,5],11900:[17,5],12080:[19,5],12600:[19,5],13080:[19,5],13300:[19,5],14080:[21,5]},poly:{1080:[2,2],2080:[3,2],3080:[4,2],4080:[5,2],5080:[6,3],6080:[7,3],7080:[8,3],8080:[9,4],9080:[10,4],10080:[11,5],11080:[12,5],12080:[13,5],13080:[14,5],14080:[15,5]}},skyview:{glas:{1e3:[3,2],1500:[3,2],2e3:[4,2],2200:[4,2],3e3:[5,2],3700:[6,2],4e3:[7,2],4500:[7,2],5e3:[8,2],5200:[8,2],5900:[9,3],6e3:[9,3],6700:[10,3],7e3:[10,3],7400:[11,3],8e3:[12,3],8200:[12,3],8900:[13,3],9e3:[13,3],9600:[14,3],1e4:[14,3],10400:[15,3],11e3:[16,4],11100:[16,4],11900:[17,4],12e3:[17,4],12600:[18,4],13e3:[18,4],13300:[19,4],14e3:[20,4]},poly:{1e3:[2,2],2e3:[3,2],3e3:[4,2],4e3:[5,2],5e3:[6,2],6e3:[7,3],7e3:[8,3],8e3:[9,3],9e3:[10,3],1e4:[11,3],11e3:[12,4],12e3:[13,4],13e3:[14,4],14e3:[15,4]}}},Ji={montage:[[20,1600],[35,2e3],[50,2400]],lieferung:500,mwst:.19,freistehend:1.07},Na={fr23:{os:{x:[500,750,1e3,1250,1500,1750],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[368.29,397.9,427.5,457.1,486.71,516.31],[397.9,427.5,457.1,486.71,516.31,545.91],[427.5,457.1,486.71,516.31,545.91,575.52],[457.1,486.71,516.31,545.91,575.52,585.12],[486.71,516.31,545.91,575.52,585.12,614.72],[516.31,545.91,575.52,585.12,614.72,644.32],[545.91,575.52,585.12,614.72,644.32,673.93],[575.52,585.12,614.72,644.32,673.93,703.53],[585.12,614.72,644.32,673.93,703.53,733.13]]},"1vs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[733.61,763.21,792.81,822.41,852.02,881.62,911.22,940.83,970.43],[789.6,819.2,848.81,878.41,908.01,937.62,967.22,996.82,1026.43],[845.6,875.2,904.8,934.41,964.01,973.61,1003.22,1032.82,1062.42],[881.59,911.2,940.8,970.4,1e3,1029.61,1059.21,1088.81,1118.42],[937.59,967.19,996.79,1026.4,1056,1085.6,1115.21,1144.81,1174.41],[973.58,1003.19,1032.79,1062.39,1092,1121.6,1151.2,1180.81,1210.41],[1029.58,1059.18,1088.79,1118.39,1147.99,1177.59,1207.2,1236.8,1266.4]]},"2vs":{x:[3e3,3250,3500,3750,4e3,4250,4500,4750,5e3,5250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1077.68,1107.29,1136.89,1166.49,1196.1,1225.7,1255.3,1284.91,1314.51,1344.11],[1140.07,1169.68,1199.28,1228.88,1258.49,1288.09,1317.69,1347.29,1376.9,1406.5],[1222.46,1252.06,1261.67,1291.27,1320.87,1350.48,1380.08,1409.68,1439.29,1468.89],[1284.85,1314.45,1344.06,1373.66,1403.26,1432.86,1462.47,1492.07,1521.67,1531.28],[1347.24,1376.84,1406.44,1436.05,1465.65,1495.25,1524.86,1554.46,1584.06,1613.67],[1409.63,1439.23,1468.83,1498.44,1528.04,1557.64,1587.24,1616.85,1646.45,1676.05],[1472.01,1501.62,1531.22,1560.82,1590.43,1620.03,1649.63,1679.24,1708.84,1738.44]]},"3vs":{x:[3250,3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750,6e3,6250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1280.23,1309.83,1339.43,1369.03,1398.64,1428.24,1457.84,1487.45,1517.05,1546.65,1576.26,1605.86,1635.46],[1369.01,1398.61,1428.21,1457.82,1487.42,1517.02,1546.62,1576.23,1605.83,1635.43,1665.04,1694.64,1724.24],[1457.79,1487.39,1516.99,1546.6,1576.2,1605.8,1635.41,1665.01,1694.61,1724.21,1753.82,1783.42,1813.02],[1546.57,1576.17,1605.77,1635.38,1664.98,1694.58,1724.19,1753.79,1783.39,1813,1842.6,1872.2,1901.8],[1635.35,1664.95,1694.56,1724.16,1753.76,1783.36,1812.97,1842.57,1872.17,1901.78,1931.38,1940.98,1970.59],[1724.13,1753.73,1783.34,1812.94,1842.54,1872.15,1881.75,1911.35,1940.95,1970.56,2000.16,2029.76,2059.37],[1812.91,1822.51,1852.12,1881.72,1911.32,1940.93,1970.53,2000.13,2029.74,2059.34,2088.94,2118.54,2148.15]]},"1vs1hs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[984.23,1020.23,1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2],[1020.23,1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19],[1076.22,1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19],[1132.22,1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18],[1168.21,1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18],[1224.21,1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18,1612.17],[1260.2,1316.2,1372.2,1408.19,1464.19,1500.18,1556.18,1612.17,1648.17]]},"2vs1hs":{x:[3e3,3250,3500,3750,4e3,4250,4500,4750,5e3,5250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1458.04,1514.04,1570.03,1606.03,1662.03,1698.02,1754.02,1810.01,1846.01,1902],[1540.43,1576.43,1632.42,1668.42,1724.41,1780.41,1816.41,1872.4,1908.4,1964.39],[1602.82,1638.82,1694.81,1750.81,1786.8,1842.8,1878.79,1934.79,1990.79,2026.78],[1665.21,1721.2,1757.2,1813.2,1849.19,1905.19,1961.18,1997.18,2053.17,2089.17],[1727.6,1783.59,1819.59,1875.58,1931.58,1967.58,2023.57,2059.57,2115.56,2171.56],[1789.99,1845.98,1901.98,1937.97,1993.97,2029.96,2085.96,2141.95,2177.95,2233.95],[1872.37,1908.37,1964.36,2020.36,2056.36,2112.35,2148.35,2204.34,2260.34,2296.33]]},"3vs1hs":{x:[3250,3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750,6e3,6250],y:[1e3,1250,1500,1750,2e3,2250,2500],p:[[1711.88,1767.87,1803.87,1859.87,1895.86,1951.86,2007.85,2043.85,2099.84,2135.84,2191.84,2247.83,2283.83],[1800.66,1836.66,1892.65,1948.65,1984.64,2040.64,2076.63,2132.63,2188.62,2224.62,2280.62,2316.61,2372.61],[1889.44,1925.44,1981.43,2017.43,2073.42,2129.42,2165.41,2221.41,2257.41,2313.4,2369.4,2405.39,2461.39],[1978.22,2014.22,2070.21,2106.21,2162.2,2218.2,2254.2,2310.19,2346.19,2402.18,2458.18,2494.17,2550.17],[2047,2103,2158.99,2194.99,2250.98,2286.98,2342.98,2398.97,2434.97,2490.96,2526.96,2582.95,2638.95],[2135.78,2191.78,2227.77,2283.77,2339.77,2375.76,2431.76,2467.75,2523.75,2579.74,2615.74,2671.74,2707.73],[2224.56,2280.56,2316.56,2372.55,2428.55,2464.54,2520.54,2556.53,2612.53,2668.53,2704.52,2760.52,2796.51]]},"s-os":{x:[500,750,1e3,1250,1500,1750,2e3,2250,2500,2750,3e3,3250,3500],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[392.15,421.75,451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38],[421.75,451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98],[451.35,480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98,806.59],[480.95,510.56,540.16,569.76,599.37,628.97,658.57,688.18,717.78,747.38,776.98,806.59,836.19],[510.56,540.16,569.76,599.37,628.97,658.57,null,null,null,null,null,null,null],[540.16,569.76,599.37,628.97,658.57,688.18,null,null,null,null,null,null,null],[569.76,599.37,628.97,658.57,688.18,717.78,null,null,null,null,null,null,null],[599.37,628.97,658.57,688.18,717.78,747.38,null,null,null,null,null,null,null],[628.97,658.57,688.18,717.78,747.38,776.98,null,null,null,null,null,null,null]]},"s-1hs":{x:[500,750,1e3,1250,1500,1750],y:[2e3,2250,2500],p:[[744.67,800.67,836.66,892.66,928.65,984.65],[774.27,830.27,866.27,922.26,958.26,1014.25],[803.88,839.87,895.87,951.86,987.86,1043.86]]},"s-1vs":{x:[1500,1750,2e3,2250,2500,2750,3e3,3250,3500,3750,4e3],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[727.53,757.13,786.73,816.34,845.94,875.54,905.15,934.75,964.35,993.95,1023.56],[763.52,793.13,822.73,852.33,881.94,911.54,941.14,970.74,1000.35,1029.95,1059.55],[819.52,849.12,878.72,908.33,937.93,967.53,997.14,1026.74,1056.34,1085.95,1115.55],[875.51,905.12,934.72,964.32,993.93,1023.53,1033.13,1062.74,1092.34,1121.94,1151.54],[911.51,941.11,970.72,1000.32,1029.92,1059.53,1089.13,1118.73,1148.33,1177.94,1207.54],[967.51,997.11,1026.71,1056.31,1085.92,1115.52,1145.12,null,null,null,null],[1003.5,1033.1,1062.71,1092.31,1121.91,1151.52,1181.12,null,null,null,null],[1059.5,1089.1,1118.7,1148.31,1177.91,1207.51,1237.12,null,null,null,null],[1115.49,1145.1,1174.7,1204.3,1233.9,1263.51,1273.11,null,null,null,null]]},"s-2vs":{x:[2500,2750,3e3,3250,3500,3750,4e3,4250,4500],y:[500,750,1e3,1250,1500,1750,2e3,2250,2500],p:[[986.92,1016.52,1046.13,1075.73,1105.33,1134.94,1144.54,1174.14,1203.75],[1049.31,1078.91,1108.52,1138.12,1167.72,1197.32,1226.93,1256.53,1286.13],[1111.7,1141.3,1170.9,1200.51,1230.11,1259.71,1289.32,1318.92,1348.52],[1174.09,1203.69,1233.29,1262.9,1292.5,1322.1,1351.7,1381.31,1410.91],[1256.47,1286.08,1315.68,1325.28,1354.89,1384.49,1414.09,1443.7,1473.3],[1318.86,1348.47,1378.07,1407.67,1437.27,1466.88,1496.48,1526.08,1555.69],[1381.25,1410.85,1440.46,1470.06,1499.66,1529.27,1558.87,1588.47,1618.08],[1443.64,1473.24,1502.85,1532.45,1562.05,1591.65,1621.26,1650.86,1680.46],[1506.03,1535.63,1565.23,1594.84,1624.44,1654.04,1683.65,1713.25,1742.85]]},"s-3vs":{x:[3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750],y:[2e3,2250,2500],p:[[1759,1788.6,1818.21,1827.81,1857.41,1887.02,1916.62,1946.22,1975.82,2005.43],[1827.78,1857.38,1886.99,1916.59,1946.19,1975.8,2005.4,2035,2064.61,2094.21],[1916.56,1946.17,1975.77,2005.37,2034.97,2064.58,2094.18,2123.78,2153.39,2182.99]]},"s-1vs1hs":{x:[1500,1750,2e3,2250,2500,2750,3e3],y:[2e3,2250,2500],p:[[1310.11,1366.11,1422.11,1458.1,1514.1,1550.09,1606.09],[1366.11,1422.11,1458.1,1514.1,1550.09,1606.09,1662.08],[1422.11,1458.1,1514.1,1550.09,1606.09,1662.08,1698.08]]},"s-2vs1hs":{x:[2500,2750,3e3,3250,3500,3750,4e3,4250,4500],y:[2e3,2250,2500],p:[[1781.57,1837.57,1893.57,1929.56,1985.56,2021.55,2077.55,2133.54,2169.54],[1863.96,1899.96,1955.95,1991.95,2047.95,2103.94,2139.94,2195.93,2231.93],[1926.35,1962.35,2018.34,2074.34,2110.33,2166.33,2202.33,2258.32,2314.32]]},"s-3vs1hs":{x:[3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750],y:[2e3,2250,2500],p:[[2253.04,2309.03,2365.03,2401.02,2457.02,2493.01,2549.01,2605,2641,2697],[2341.82,2397.81,2433.81,2489.8,2545.8,2581.79,2637.79,2673.79,2729.78,2785.78],[2430.6,2486.59,2522.59,2578.58,2634.58,2670.58,2726.57,2762.57,2818.56,2874.56]]},frfDrehkipp:{x:[600,800,1e3,1200],y:[600,800,1e3,1200,1400],p:[[807.92,838.19,858.47,878.75],[827.07,857.35,877.63,907.9],[856.23,876.51,906.79,927.06],[875.39,905.67,925.94,956.22],[894.55,924.82,945.1,975.38]]},frfSchraegKipp:{x:[600,800,1e3,1200],y:[600,800],p:[[865.79,898.02,920.25,952.48],[886.9,919.13,951.36,983.59]]},frtTuer:{x:[750,1e3,1200],y:[2e3,2250,2500],p:[[1747.31,1798.29,1835.08],[1799.94,1850.93,1887.71],[1852.57,1903.56,1950.35]]},frtTuerIntegriert:{x:[750,1e3,1200],y:[2e3,2250,2500],p:[[1054.94,1080.2,1112.4],[1090.34,1115.6,1137.8],[1115.74,1150.99,1173.2]]}},sg23:{"3-2":{x:[1500,2e3,2500,3e3],y:[1500,2e3,2500],p:[[1018.58,1137.76,1317.95,1437.13],[1095.55,1275.74,1445.92,1626.11],[1223.52,1403.71,1644.89,1825.08]]},"3-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[1740.49,1920.67,2039.86,2220.04,2339.23],[1939.46,2109.65,2289.83,2470.02,2650.2],[2128.43,2369.62,2539.8,2780.99,2961.18]]},"3-3":{x:[2500,3e3,3500,4e3],y:[1500,2e3,2500],p:[[1376.83,1496.02,1676.2,1795.39],[1514.81,1684.99,1865.18,2045.36],[1703.78,1883.97,2115.15,2295.34]]},"3-6":{x:[4e3,4500,5e3,5500,6e3,6500],y:[1500,2e3,2500],p:[[2167.63,2337.81,2467,2637.19,2756.37,2936.56],[2417.6,2597.79,2767.97,2948.16,3128.34,3308.53],[2667.58,2898.76,3078.95,3320.13,3500.32,3731.5]]},"4-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[1669.05,1865.26,2000.47,2186.68,2321.89],[1868.02,2054.23,2250.44,2446.65,2632.86],[2056.99,2304.2,2500.41,2547.62,2943.83]]},"5-5":{x:[4e3,4500,5e3,5500,6e3],y:[1500,2e3,2500],p:[[2174.68,2375.55,2325.43,2726.31,2876.18],[2424.65,2625.53,2836.4,3037.28,3238.15],[2674.62,2936.5,3147.38,3409.25,3610.13]]}},sc23:{"2-2":{x:[1500,2e3,2500,3e3],y:[1500,2e3,2500],p:[[1480.99,1625.01,1792.54,1926.56],[1661.89,1829.41,2006.93,2174.45],[1876.29,2043.81,2244.83,2412.35]]},"2-4":{x:[3e3,3500,4e3,4500,5e3],y:[1500,2e3,2500],p:[[2906.47,3074,3208.02,3375.54,3519.56],[3242.38,3409.9,3587.42,3554.94,3922.46],[3588.28,3789.3,3956.82,4157.84,4325.36]]},"3-3":{x:[2500,3e3,3500,4e3],y:[1500,2e3,2500],p:[[2105.65,2255.03,2437.92,2577.3],[2361.27,2544.15,2727.03,2899.91],[2650.38,2833.26,3049.65,3222.53]]},"3-6":{x:[4e3,4500,5e3,5500,6e3,6500],y:[1500,2e3,2500],p:[[3817.16,4000.04,4139.43,4322.31,4471.69,4654.57],[4275.3,4458.18,4631.07,4813.95,4996.83,5179.71],[4733.44,4949.83,5122.71,5339.09,5521.97,5728.36]]}}},Fd={unterdachZip:{x:[1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[2313,2420,2509,2585,2680,2773,2857,4202,4318,4439],[2443,2560,2653,2736,2839,2935,3024,4468,4594,4728],[2606,2725,2828,2923,3030,3133,3232,4789,4923,5070],[2736,2863,2970,3069,3191,3296,3405,5043,5199,5354],[2867,3001,3115,3224,3349,3461,3576,5315,5482,5646],[2997,3137,3263,3376,3508,3658,3930,5644,5821,6001],[3129,3275,3407,3529,3669,3821,4108,5931,6149,6921],[3259,3413,3551,3681,3827,3984,4281,6268,7064,7249],[3411,3551,3693,3834,4023,4192,4499,6528,7350,7535],[4474,4907,5103,5183,5568,5745,5974,7482,8034,8225]]},aufdachZip:{x:[1500,2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[2313,2420,2509,2585,2680,2773,2857,4202,4318,4439],[2443,2560,2653,2736,2839,2935,3024,4468,4594,4728],[2606,2725,2828,2923,3030,3133,3232,4789,4923,5070],[2736,2863,2970,3069,3191,3296,3405,5043,5199,5354],[2867,3001,3115,3224,3349,3461,3576,5315,5482,5646],[2997,3137,3263,3376,3508,3658,3930,5644,5821,6001],[3129,3275,3407,3529,3669,3821,4108,5931,6149,6921],[4239,4423,4701,4890,5368,5566,5891,6268,7064,7249],[4342,4526,4810,4997,5492,5692,6017,6528,7350,7535],[5243,5494,6126,6378,6810,7078,7298,7482,8034,8225]]},ezip105:{x:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3],y:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800,5e3,5200,5400,5600,5800,6e3],p:[[1066,1098,1128,1162,1190,1220,1254,1284,1312,1336,1364],[1132,1164,1200,1232,1264,1298,1330,1362,1396,1430,1464],[1172,1206,1244,1278,1310,1348,1382,1420,1452,1486,1520],[1214,1250,1288,1326,1380,1418,1458,1490,1528,1566,1602],[1272,1308,1350,1392,1428,1470,1508,1548,1586,1626,1664],[1310,1352,1394,1434,1478,1516,1560,1602,1642,1684,1726],[1378,1422,1464,1510,1552,1596,1638,1684,1724,1772,1812],[1420,1462,1510,1556,1600,1646,1692,1736,1782,1826,1884],[1458,1506,1556,1602,1648,1706,1756,1802,1850,1898,1948],[1500,1558,1608,1656,1708,1758,1810,1858,1904,1956,2004],[1548,1602,1650,1704,1758,1810,1860,1912,1968,2020,2072],[1614,1666,1722,1776,1828,1888,1942,1996,null,null,null],[1654,1718,1772,1828,1884,1940,1996,2054,null,null,null],[1700,1760,1816,1874,1932,1992,2048,2106,null,null,null],[1740,1800,1858,1920,1980,2042,2102,2206,null,null,null],[1782,1842,1906,1968,2072,2132,2198,2260,null,null,null],[1846,1910,1976,2084,2146,2214,2278,2342,null,null,null],[1880,1950,2018,2126,2194,2260,2326,2392,null,null,null],[1918,1988,2100,2170,2238,2304,2376,2444,null,null,null],[1954,2026,2142,2212,2284,2354,2424,2496,null,null,null],[1992,2108,2184,2256,2328,2402,2472,2548,null,null,null],[2054,2172,2248,2322,2402,2472,2546,2626,null,null,null],[2134,2212,2288,2366,2442,2520,2598,2674,null,null,null],[2170,2250,2330,2410,2490,2570,2646,2724,null,null,null],[2210,2288,2370,2452,2534,2616,2692,2778,null,null,null],[2246,2328,2412,2496,2578,2662,2744,2830,null,null,null]]},ezip125:{x:[1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3],y:[650,800,1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800,5e3],p:[[1002,1030,1052,1080,1108,1130,1168,1190,1220,1242,1268],[1030,1058,1086,1114,1144,1170,1204,1228,1260,1286,1314],[1066,1098,1128,1162,1190,1220,1254,1284,1314,1344,1376],[1132,1164,1200,1232,1264,1298,1330,1362,1396,1430,1464],[1172,1206,1244,1278,1310,1348,1382,1420,1452,1486,1520],[1214,1250,1288,1326,1380,1418,1458,1490,1528,1566,1602],[1272,1308,1350,1392,1428,1470,1508,1548,1586,1626,1664],[1310,1352,1394,1434,1478,1516,1560,1602,1642,1684,1726],[1378,1422,1464,1510,1552,1596,1638,1684,1724,1772,1812],[1420,1462,1510,1556,1600,1646,1692,1736,1782,1826,1884],[1458,1506,1556,1602,1648,1706,1756,1802,1850,1898,1948],[1500,1558,1608,1656,1708,1758,1810,1858,1904,1956,2004],[1548,1602,1650,1704,1758,1810,1860,1912,1968,2020,2072],[1614,1666,1722,1776,1828,1888,1942,1996,2054,2104,2158],[1654,1718,1772,1828,1884,1940,1996,2054,2110,2166,2218],[1700,1760,1816,1874,1932,1992,2048,2106,2166,2222,2328],[1740,1800,1858,1920,1980,2042,2102,2206,2268,2328,2386],[1782,1842,1906,1968,2072,2132,2198,2260,2324,2384,2448],[1846,1910,1976,2084,2146,2214,2278,2342,2406,2470,2536],[1880,1950,2018,2126,2194,2260,2326,2392,2460,2522,2592],[1918,1988,2100,2170,2238,2304,2376,2444,2512,2582,2650],[1954,2026,2142,2212,2284,2354,2424,2496,2564,2638,2708],[1992,2108,2184,2256,2328,2402,2472,2548,2620,2692,2764]]},luna:{x:[1500,2e3,2500,3e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500],p:[[2858,null,null,null],[3025,3087,null,null],[3183,3255,3336,null],[3344,3424,3515,3602],[3509,3597,3692,3785],[3824,3919,4028,4129],[3995,4092,4222,4325],[4211,4312,4452,4551]],led:[734,752,763,777,794,808,824,839]},luxora:{x:[1500,2e3,2500,3e3,3250],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500],p:[[3391,null,null,null,null],[3447,3560,null,null,null],[3505,3626,3698,null,null],[3560,3690,3812,4005,4117],[3719,3865,4001,4145,4263],[3944,4102,4234,4397,4518],[4063,4234,4378,4545,4675],[4329,4477,4627,4735,4868]],led:[715,734,744,757,773,787,802,818]},pergolaOhne:{x:[2e3,2500,3e3,3500,4e3,4500,5e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[4903,5027,5144,5305,5429,5550,5668],[5126,5260,5390,5565,5695,5830,5962],[5402,5552,5695,5878,6022,6168,6315],[5622,5779,5942,6137,6298,6455,6611],[5845,6016,6185,6395,6568,6739,6914],[6242,6428,6613,6834,7021,7194,7378],[6486,6681,6877,7108,7305,7503,7695],[6782,6988,7198,7443,7660,7866,8074],[7009,7227,7448,7722,7942,8158,8381],[7233,7458,7695,7963,8218,8447,null]]},pergolaMit:{x:[2e3,2500,3e3,3500,4e3,4500,5e3],y:[2e3,2500,3e3,3500,4e3,4500,5e3,5500,6e3,6500],p:[[5808,5931,6047,6212,6331,6455,6574],[6074,6205,6335,6506,6638,6776,6908],[6387,6535,6681,6858,7009,7153,7297],[6648,6803,6968,7161,7318,7476,7635],[6910,7079,7250,7458,7629,7802,7975],[7351,7532,7717,7936,8123,8298,8482],[7629,7827,8020,8253,8447,8649,8838],[7967,8175,8383,8624,8844,9050,9260],[8232,8451,8671,8945,9166,9382,9602],[8498,8723,8958,9225,9481,9712,null]]}},kd={schiebbar:{x:[500,750,1e3,1250,1500],y:[1250,1500,1750,2e3,2250,2500,2750,3e3],p:[[1034.87,1104.12,1173.38,1242.64,1311.9],[1073.84,1154.85,1235.87,1316.88,1397.89],[1112.81,1205.58,1298.35,1391.12,1483.89],[1311.78,1416.31,1520.83,1625.36,1729.88],[1350.76,1467.04,1583.32,1699.6,1815.88],[1389.73,1517.77,1645.8,1773.84,1901.88],[1440.46,1580.25,1720.04,1871.59,2011.39],[1479.43,1630.98,1782.53,1945.83,2097.38]]},fest:{x:[500,750,1e3,1250,1500],y:[1250,1500,1750,2e3,2250,2500,2750,3e3],p:[[1055.87,1137.47,1219.07,1300.67,1382.27],[1094.84,1188.2,1281.56,1374.91,1468.27],[1133.82,1238.93,1344.04,1449.15,1554.27],[1332.79,1449.66,1566.53,1683.39,1800.26],[1371.76,1500.39,1629.01,1757.63,1886.26],[1410.73,1551.11,1691.49,1831.87,1972.25],[1461.46,1613.6,1765.73,1929.63,2081.76],[1500.43,1664.33,1828.22,2003.87,2167.76]]},schienen:{x:[1e3,2e3,3e3,4e3,5e3,6e3,7e3],p:[160.97,240.97,320.96,400.96,480.95,560.95,640.94]}},ji={wand:{x:[2e3,2500,3e3,3500,4e3],y:[1430,1610,1790,1970,2150,2330,2510,2690,2870,3050,3230,3410,3590,3770,3950,4130,4310,4490,4670,4850,5030,5210,5390,5570,5750,5930,6110,6290,6470,6650,6830,7010],p:[[8715,9091,9568,9775,10084],[8893,9269,9747,10215,10491],[9071,9380,10153,10526,10806],[9349,9895,10331,10777,11222],[9527,10165,10646,11092,11537],[9705,10376,11026,11439,11853],[10088,10694,11344,11758,12373],[10357,10973,11523,12005,12689],[10535,11083,11838,12320,13004],[11531,12215,12834,13486,14137],[11810,12394,13149,13901,14453],[11987,12504,13327,14148,14768],[12189,12841,13766,14487,15207],[12603,13156,14182,14870,15760],[12781,13468,14496,15286,16479],[12959,13782,14675,15533,16794],[13137,13960,14989,16251,17513],[13516,14071,15663,16589,17919],[13698,14389,15981,17312,18239],[13876,14567,16159,17559,18554],[14404,15377,16958,18190,19220],[14933,16187,17758,18822,19886],[25177,16365,18072,19136,20201],[15581,16475,18251,19384,20516],[15763,16793,18569,19702,20832],[15941,16972,18748,19949,21147],[16119,17486,19062,20264,21462],[16498,18001,19442,20713,21979],[16676,18180,19757,21028,22295],[16854,18290,19936,21275,22610],[17055,18627,20273,21609,22945],[17256,18965,20611,21943,23279]],stuetzen:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],led:[1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5]},frei:{x:[2e3,2500,3e3,3500,4e3],y:[1430,1610,1790,1970,2150,2330,2510,2690,2870,3050,3230,3410,3590,3770,3950,4130,4310,4490,4670,4850,5030,5210,5390,5570,5750,5930,6110,6290,6470,6650,6830,7010],p:[[9133,9509,9986,10193,10502],[9311,9687,10165,10633,10909],[9489,9798,10571,10948,11224],[9767,10313,10749,11195,11640],[9945,10583,11064,11510,11955],[10123,10794,11444,11857,12271],[10506,11112,11762,12176,12791],[10775,11391,11941,12423,13107],[10953,11501,12255,12653,13422],[11949,12633,13252,13904,14555],[12228,12812,13567,14319,14871],[12403,12922,13745,14566,15186],[12607,13259,14184,14905,15625],[13021,13574,14600,15288,16178],[13199,13886,14914,15703,16897],[13377,14200,15093,15951,17212],[13555,14378,15407,16669,17930],[13934,14489,16080,17007,18337],[14116,14806,16399,17730,18657],[14294,14985,16577,17977,18972],[14822,15795,17376,18608,19638],[15351,16605,18175,19240,20304],[15528,16783,18490,19554,20619],[15999,16893,18669,19802,20934],[16181,17211,18987,20120,21250],[16359,17390,19166,20367,21565],[16537,17904,19480,20682,21878],[16916,18419,19860,21131,22397],[17094,18597,20175,21446,22712],[17272,18708,20354,21693,23028],[17473,19045,20691,22027,23363],[17674,19383,21029,22361,23697]],stuetzen:[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6],led:[1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5]}},zh={x:[1e3,1500,2e3,2500,3e3],y:[500,1e3],p:[[1115,1460,1804,2169,2593],[1283,1708,2133,2578,3083]]}});function Gx(n,e,t){let i=n.x.findIndex(r=>r>=e-.5),s=n.y.findIndex(r=>r>=t-.5);return i<0||s<0?null:n.p[s][i]??null}function Bh(n,e){if(n.produkt==="fly"){let o=Gx(e,n.b*10,n.t*10);return o==null?{preis:0,offen:!0,info:"Glas-Vordach Fly: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage"}:{preis:o,info:`Glas-Vordach Fly ${n.b} \xD7 ${n.t} cm, VSG 17 mm ${n.eind==="matt"?"matt":"klar"}, Wandprofil RAL 7016`}}let t=Oa[n.flModell],i=n.flDesign==="holz"&&n.flModell!=="xl",s=i?t.holz+(n.flAusf==="seite"?Vx:0):t[n.flAusf],r=(i?t.name.replace("Front Line","Front Line Wood"):t.name)+" "+Hx[n.flAusf]+(n.flAusf!=="nur"?` (${n.flSeite})`:"");return s?{preis:s,info:r+` \xB7 ${t.b} \xD7 ${t.t} cm, Anthrazit${i?" / Holzoptik":""}`}:{preis:0,offen:!0,info:r+": Kombination auf Anfrage"}}function Bd(n,e,t,i,s,r){let o=s.rahmen;if(e.produkt==="fly"){let u=e.b/100,v=e.t/100,x=2.42;i(u,.1,.075,o,0,x+.05,t+.038,n),i(u,.025,.11,o,0,x+.11,t+.055,n),i(u,.02,.1,o,0,x-.005,t+.05,n);for(let R of[-1,1])i(.004,.13,.11,o,R*(u/2+.002),x+.06,t+.055,n);let M=new Oe(new bt(u,.017,v),e.eind==="matt"?s.matt:s.klar);return M.position.set(0,x+.05,t+v/2+.04),M.rotation.x=.03,M.renderOrder=2,M.castShadow=e.eind==="matt",n.add(M),i(u,.017,.006,s.glasKante,0,x+.05-Math.sin(.03)*v/2,t+v+.04,n),x}let a=Oa[e.flModell],l=a.b/100,c=a.t/100,h=e.flModell==="xl",f=e.flDesign==="holz"&&!h,m=.2,g=2.2,d=e.flSeite==="links"?-1:1,_=/seite|bk|xlbk/.test(e.flAusf);if(i(l,m,c,o,0,g+m/2,t+c/2,n),f){let u=r("rovere",!1,l);for(let v=0;v<9;v++)i(l-.06,.008,c/9-.012,u,0,g-.004,t+.03+(v+.5)*(c-.06)/9,n)}let p=new Oe(new vn(.035,.035,.006,20),s.led);if(p.position.set(0,g-.004,t+c/2),n.add(p),_){let u=d*(l/2-.04);if(f){i(.06,g,.04,o,u,g/2,t+c-.02,n),i(.06,.04,c,o,u,.02,t+c/2,n);let v=r("rovere",!0,g);for(let x=0;x<7;x++)i(.03,g-.06,.07,v,u,g/2,t+.06+x*(c-.12)/6,n)}else i(.08,g,c,o,u,g/2,t+c/2,n);/bk|xlbk/.test(e.flAusf)&&(i(.05,.42,.34,s.fuge,u-d*.06,1.15,t+c*.45,n),i(.012,.03,.2,o,u-d*.09,1.3,t+c*.45,n))}if(h){let u=e.flAusf==="pfosten"?[-1,1]:[-d];for(let v of u)i(.08,g,.08,o,v*(l/2-.06),g/2,t+c-.06,n)}return g}var Oa,Hx,Vx,Fa,Hd=rt(()=>{Tt();Oa={160:{name:"Front Line 160",b:160,t:90,nur:1515,seite:3100,bk:4213,holz:1738},200:{name:"Front Line 200",b:200,t:90,nur:1650,seite:3225,bk:4377,holz:2113},250:{name:"Front Line 250",b:250,t:90,nur:2100,seite:3875,bk:4875,holz:2588},xl:{name:"Front Line Plus 250",b:250,t:125,pfosten:2568,xlbk:5750}},Hx={nur:"nur Vordach",seite:"mit Seitenteil",bk:"mit Seitenteil & Briefkasten",pfosten:"mit 2 Pfosten",xlbk:"mit Seitenteil, Pfosten & Briefkasten"},Vx=2413,Fa=(n,e,t)=>n==="xl"?e==="pfosten"||e==="xlbk":e==="nur"||e==="seite"||e==="bk"&&t!=="holz"});function Xx(n,e){return n.y.findIndex(t=>t>=e-.5)}function Qi(n,e){let t=e[n.montage==="frei"?"frei":"wand"],i=t.x.findIndex(l=>l>=n.t*10-.5),s=Xx(t,n.b*10),r=i<0||s<0?null:t.p[s][i],o=n.montage==="frei",a=(s<0?null:t.stuetzen[s])||(o?4:2);return{preis:r,gesamt:a,front:o?a>=6?3:2:a,led:s<0?1:t.led[s],frei:o}}function Vd(n,e){let t=Qi(n,e),i=[],s=0,r=Math.min(n.ledBand||0,t.led);if(r){let o=Wx[r]||0;s+=o,i.push(`${r} \xD7 LED-Band in den Lamellen (max. ${t.led} bei dieser Gr\xF6\xDFe): ${o.toLocaleString("de-DE")} \u20AC`)}for(let[o,[a,l]]of Object.entries(Ys))n[o]&&(s+=l,i.push(`${a}: ${l.toLocaleString("de-DE")} \u20AC`));return s?{preis:s,info:i.join(`
`)}:null}function Gd(n,e,t,i,s,r,o){let a=e.b/100,l=e.t/100,{H:c,fh:h,pf:f}=nn,m=Qi(e,t);r(a,h,f,s,0,c-h/2,i+f/2,n),r(a,h,f,s,0,c-h/2,i+l-f/2,n);for(let B of[-1,1])r(f,h,l-2*f,s,B*(a/2-f/2),c-h/2,i+l/2,n);let g=c-h,d=B=>B*(a/2-f/2),_=(B,q)=>r(f,g,f,s,B,g/2,q,n);if(m.frei){for(let B of[-1,1])_(d(B),i+f/2),_(d(B),i+l-f/2);m.gesamt>=6&&(_(0,i+f/2),_(0,i+l-f/2))}else{let B=m.gesamt;for(let q=0;q<B;q++)_(-a/2+f/2+(a-f)*(B>1?q/(B-1):.5),i+l-f/2)}let p=Math.max(1,Math.floor((a-2*f)/nn.teilung)),u=Oh(Nd,l-2*f-.01,!1),v=new Bs(u,s,p);v.castShadow=!0,v.receiveShadow=!0,n.add(v);let x=-a/2+f+(a-2*f-(p-1)*nn.teilung)/2,M=c-.085,R=new Ke,T=new Zt,w=new L(0,0,1),C=new L(1,1,1),U=new L,y=B=>{T.setFromAxisAngle(w,Ln.degToRad(B));for(let q=0;q<p;q++)U.set(x+q*nn.teilung,M,i+l/2),R.compose(U,T,C),v.setMatrixAt(q,R);v.instanceMatrix.needsUpdate=!0},b=Math.min(e.ledBand||0,m.led),D=[...new Set(Array.from({length:b},(B,q)=>Math.floor((q+.5)*p/b)))],O=new L(.095,-.029,0),H=new L,Z=D.map(()=>{let B=new Oe(new bt(.016,.005,l-2*f-.08),o);return n.add(B),B}),z=y,j=B=>{z(B),Z.forEach((q,oe)=>{H.copy(O).applyQuaternion(T),q.position.set(x+D[oe]*nn.teilung+H.x,M+H.y,i+l/2),q.quaternion.copy(T)})};if(j(e.spWinkel),e.spSeite)for(let B of[-1,1])r(.01,.02,l-2*f,o,B*(a/2-f-.006),c-h+.02,i+l/2,n);return j}var nn,Wx,Ys,Wd=rt(()=>{Tt();Ua();nn={H:2.75,fh:.19,pf:.12,lamB:.232,lamH:.051,teilung:.21},Wx={1:763,2:834,3:905,4:976,5:1047},Ys={spSeite:["Seitliche Beleuchtung",1262],spRegen:["Regensensor",652],spTahoma:["Smartphone-Steuerung TaHoma Switch Pro",435],spFb:["Zus\xE4tzliche Fernbedienung Situo 5 Variation io",198]}});function Yx(n,e,t){if(!n)return null;let i=n.x.findIndex(r=>r>=e-.5),s=n.y.findIndex(r=>r>=t-.5);return i<0||s<0?null:n.p[s][i]??null}function Hh(n,e){let t=[];for(let[i,s]of Object.entries(Xd)){let r=n[s];if(r!=="schieb"&&r!=="fest")continue;let o=e.unter-.06-(i!=="vorne"&&e.slope?.15:0),a=i==="vorne"?e.felder||[{x:0,b:e.w-.12}]:[{x:0,b:e.vel?e.vel.z2-e.vel.z1:e.d-.1}];a.forEach((l,c)=>{let h=l.b,f=Math.max(1,Math.ceil(h/(r==="schieb"?1.46:1.5)-1e-9)),m=r==="schieb"?Math.max(1,Math.min(n.velSpuren||2,3,f)):0;t.push({ort:a.length>1?`${i} Feld ${c+1}/${a.length}`:i,seite:i,x:l.x,typ:r,breite:h,h:o,n:f,t:m,ew:h/f+(r==="schieb"?.04:0)})})}return t}function qd(n){let e=0;for(let[t,i]of Object.entries(Xd))if(n[i]==="schieb"){let s=t==="vorne"?n.b/100-.12:n.t/100-.1;e=Math.max(e,Math.min(3,Math.ceil(s/1.46-1e-9)))}return e}function Yd(n,e,t){let i=0,s=!1,r=[];for(let o of n){let a=Yx(e[o.typ==="fest"?"fest":"schiebbar"],o.ew*1e3,o.h*1e3);if(a==null){s=!0,r.push(`Velaris ${o.ort}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`);continue}let l=a*o.n,c=`Velaris ${o.ort} ${qx[o.typ]}: ${o.n} \xD7 Element ${Math.round(o.ew*100)} \xD7 ${Math.round(o.h*100)} cm (${Fr[t.velLam][0]})`;if(o.typ==="schieb"){let h=Math.ceil(o.breite/7-1e-9),f=o.breite/h,m=e.schienen.x.findIndex(g=>g>=f*1e3-.5);l+=h*o.t*e.schienen.p[m],c+=` \xB7 ${o.t} Laufschiene${o.t>1?"n":""} (${h*o.t} \xD7 Schienen-Set oben/unten)`}i+=l,r.push(`${c}: ${Math.round(l).toLocaleString("de-DE")} \u20AC`)}return{preis:i,info:r.join(`
`),offen:s}}function $x(){if(es)return es;let n=document.createElement("canvas");n.width=512,n.height=32;let e=n.getContext("2d");e.fillStyle=Fr.oak[1],e.fillRect(0,0,512,32);let t=7,i=()=>(t=(t*9301+49297)%233280)/233280;for(let s=0;s<26;s++){e.strokeStyle=i()<.6?`rgba(110,72,30,${.15+i()*.3})`:`rgba(235,200,140,${.2+i()*.2})`,e.lineWidth=.6+i()*1.6;let r=i()*32,o=.6+i()*2;e.beginPath();for(let a=0;a<=512;a+=8){let l=r+Math.sin(a*.02+s)*o;a?e.lineTo(a,l):e.moveTo(a,l)}e.stroke()}return es=new _n(n),es.colorSpace=dt,es.wrapS=es.wrapT=St,es}function $d(n,e,t,i,s,r){let o=e.velLam==="oak"?new Fe({map:$x(),roughness:.6,metalness:.05}):new Fe({color:Fr[7016][1],roughness:.5,metalness:.3}),a=.055,l=.6,c=[];for(let f of Hh(e,t)){let m=new pt,g=.06,d=.045,_=Math.floor((f.h-2*d)/a),p=new bt(f.ew-2*d,.05,.01),u=new Ke,v=new Zt().setFromAxisAngle(new L(1,0,0),l),x=new L(1,1,1),M=.0512,R=T=>(f.breite-f.ew)*(f.n>1?T/(f.n-1):.5)+f.ew/2-f.breite/2;for(let T=0;T<f.n;T++){let w=R(T),C=f.t?T%f.t:0,U=f.t?(C-(f.t-1)/2)*M:0,y=new pt;y.position.set(w,0,U),r(f.ew,d,.04,s,0,g+f.h-d/2,0,y),r(f.ew,d,.04,s,0,g+d/2,0,y);for(let D of[-1,1])r(d,f.h,.04,s,D*(f.ew/2-d/2),g+f.h/2,0,y);let b=new Bs(p,o,_);b.castShadow=!0,b.receiveShadow=!0;for(let D=0;D<_;D++)u.compose(new L(0,g+d+a/2+D*a,0),v,x),b.setMatrixAt(D,u);y.add(b),m.add(y),f.typ==="schieb"&&C>0&&c.push({el:y,zu:w,auf:R(T-C)})}if(f.typ==="schieb")for(let T=0;T<f.t;T++){let w=(T-(f.t-1)/2)*.0512;r(f.breite,.04,.049,s,0,g+f.h+.02,w,m),r(f.breite,.02,.049,s,0,g-.01+.012,w,m)}f.seite==="vorne"?m.position.set(f.x,0,t.vel?t.vel.zC:i+t.d-.12):(m.rotation.y=Math.PI/2,m.position.set((f.seite==="links"?-1:1)*(t.vel?t.vel.xC:t.w/2-.16),0,(t.vel?t.vel.z1:i+.05)+f.breite/2)),n.add(m)}let h=f=>{for(let m of c)m.el.position.x=m.zu+(m.auf-m.zu)*f};return h(e.velAuf||0),c.length?h:null}var Fr,Xd,qx,es,Zd=rt(()=>{Tt();Fr={7016:["Anthrazit RAL 7016","#3d4246"],oak:["Golden Oak","#b0895a"]},Xd={vorne:"velV",links:"velL",rechts:"velR"},qx={schieb:"schiebbar",fest:"feststehend"};es=null});async function Kx(n){let e=await(await fetch(n)).blob(),t=crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2),i=new Date().toISOString().slice(0,10)+"/"+t+".jpg";if(!(await fetch(Kd+"/storage/v1/object/konfigurator/"+i,{method:"POST",headers:{apikey:Jd,Authorization:"Bearer "+Jd,"Content-Type":"image/jpeg","x-upsert":"false"},body:e})).ok)throw new Error("bild");return Kd+"/storage/v1/object/public/konfigurator/"+i}function ep(){try{return JSON.parse(localStorage.getItem(Qd))||[]}catch{return[]}}function tp(n){try{localStorage.setItem(Qd,JSON.stringify(n))}catch{}}async function Jx(n){let t=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)})).json();if(!t||!t.success)throw new Error("web3forms")}async function np(n){let e={...n.payload},t="(kein Bild)";if(n.bild)try{t=await Kx(n.bild)}catch{t="(Bild konnte nicht hochgeladen werden)"}e["Bild der Konfiguration"]=t,e.message&&(e.message=e.message.replace("{BILD}",t)),await Jx(e)}async function jd(){if(!navigator.onLine)return;let n=ep(),e=[];for(let t of n)try{await np(t)}catch{e.push(t)}tp(e)}function ip(n){jd(),window.addEventListener("online",jd);let e=ut("abschluss"),t=()=>{ut("ab-titel").textContent=n.titel(),ut("ab-spec").textContent=n.spec(),ut("ab-bild").src=n.bild(),ut("ab-form").hidden=!1,ut("ab-danke").hidden=!0,ut("ab-fehler").hidden=!0,e.hidden=!1};ut("btn-abschluss").addEventListener("click",t);for(let s of e.querySelectorAll("[data-schliessen]"))s.addEventListener("click",()=>{e.hidden=!0});ut("ab-form").addEventListener("submit",async s=>{s.preventDefault();let r=ut("ab-name").value.trim(),o=ut("ab-tel").value.trim(),a=ut("ab-mail").value.trim(),l=ut("ab-ort").value.trim(),c=ut("ab-zeit").value,h=ut("ab-nachricht").value.trim(),f=/.+@.+\..+/.test(a),m=o.replace(/\D/g,"").length>=6,g=ut("ab-fehler");if(!r||!(m||f)||a&&!f||!ut("ab-ok").checked){g.textContent="Bitte Name, Telefon oder E-Mail angeben und der Datenschutzerkl\xE4rung zustimmen.",g.hidden=!1;return}if(ut("ab-hp").value){i();return}g.hidden=!0;let d=ut("ab-senden");d.disabled=!0,d.textContent="Wird gesendet \u2026";let _=n.preis(),p=n.spec(),u=n.preisText(_),v={access_key:Zx,botcheck:"",subject:`\u{1F9E9} Anfrage aus dem 3D-Konfigurator \u2013 ${n.titel()} \u2013 ${r}${o?" \u2013 "+o:""} \u2013 ${Vh(_.brutto)} brutto`,from_name:"Antonov Outdoor \u2013 3D-Konfigurator",...f?{replyto:a,email:a}:{},name:r,...o?{phone:o}:{},message:["KONTAKT","Name: "+r,"Telefon: "+(o||"-"),"E-Mail: "+(a||"-"),"PLZ / Ort: "+(l||"-"),"Erreichbar: "+(c||"-"),"Nachricht: "+(h||"-"),"","PRODUKT: "+n.titel(),"","KONFIGURATION",p,"","RICHTPREIS",u,"","BILD: {BILD}"].join(`
`),Quelle:"3D-Konfigurator Antonov Outdoor",Name:r,Telefon:o||"-","E-Mail":a||"-","PLZ / Ort":l||"-",Zeitpunkt:c||"-",Nachricht:h||"-",Produkt:n.titel(),Konfiguration:p,Richtpreis:u,"Ort der Konfiguration":location.protocol==="file:"||location.hostname==="localhost"?"Vorf\xFChrung am PC":"Website"},x=null;try{x=n.bild()}catch{}let M={payload:v,bild:x,zeit:new Date().toISOString()};try{await np(M)}catch{let T=ep();T.push(M),tp(T),ut("ab-offline").hidden=!1}d.disabled=!1,d.textContent="Konfiguration senden & Richtpreis anzeigen",i()});function i(){let s=n.preis();ut("ab-form").hidden=!0,ut("ab-danke").hidden=!1,ut("ab-preis").textContent=Vh(s.brutto),ut("ab-preis-netto").textContent=Vh(s.netto)+" netto zzgl. 19 % MwSt.",ut("ab-preis-text").textContent=n.preisText(s),n.nachAbschluss()}}var Zx,Qd,Kd,Jd,ut,Vh,sp=rt(()=>{Zx="b26a6983-d43b-4a05-908c-f5ba56350c48",Qd="ao_konfigurator_warteschlange",Kd="https://nrpwbbepwuauikqpcvxz.supabase.co",Jd="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycHdiYmVwd3VhdWlrcXBjdnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMTA3NDIsImV4cCI6MjEwMTc4Njc0Mn0.1ds84MnzcWvSTH4XkTZuGuvU6Uc9XZKiAJzWPOYimjQ";ut=n=>document.getElementById(n),Vh=n=>Math.round(n).toLocaleString("de-DE")+" \u20AC"});var On,rp=rt(()=>{On={markise:[{code:"AC420",familie:"Sunset",farbe:"#febb48"},{code:"AC423",familie:"Sunset",farbe:"#ff8f27"},{code:"AC421",familie:"Sunset",farbe:"#ffb24c"},{code:"PA425",familie:"Sunset",farbe:"#e6401f"},{code:"AC519",familie:"Beach",farbe:"#d9cab6"},{code:"AC518",familie:"Beach",farbe:"#b3bdbe"},{code:"AC512",familie:"Beach",farbe:"#7b6c64"},{code:"AC517",familie:"Beach",farbe:"#d2d8d4"},{code:"AC524",familie:"Beach",farbe:"#ac9c8a"},{code:"AC523",familie:"Beach",farbe:"#93806b"},{code:"AC521",familie:"Beach",farbe:"#c4b8a5"},{code:"AC522",familie:"Beach",farbe:"#b4a494"},{code:"PA532",familie:"Beach",farbe:"#e8e1be"},{code:"PA528",familie:"Beach",farbe:"#82796c"},{code:"PA522",familie:"Beach",farbe:"#e4e2d6"},{code:"PA524",familie:"Beach",farbe:"#bfc3b7"},{code:"AC118",familie:"Ocean",farbe:"#0859a4"},{code:"AC112",familie:"Ocean",farbe:"#385b80"},{code:"AC121",familie:"Ocean",farbe:"#55858b"},{code:"AC119",familie:"Ocean",farbe:"#132a48"},{code:"AC117",familie:"Ocean",farbe:"#395065"},{code:"AC626",familie:"Mountain",farbe:"#b1bab9"},{code:"AC630",familie:"Mountain",farbe:"#5c6767"},{code:"AC627",familie:"Mountain",farbe:"#bac3c2"},{code:"AC631",familie:"Mountain",farbe:"#3a4244"},{code:"AC632",familie:"Mountain",farbe:"#4e595c"},{code:"PA612",familie:"Mountain",farbe:"#758080"},{code:"PA617",familie:"Mountain",farbe:"#9ca29c"},{code:"PA626",familie:"Mountain",farbe:"#cdd3d0"},{code:"PA627",familie:"Mountain",farbe:"#c0c9c3"},{code:"PA630",familie:"Mountain",farbe:"#98a9ac"},{code:"PA632",familie:"Mountain",farbe:"#acb7b6"},{code:"PA633",familie:"Mountain",farbe:"#7d8889"},{code:"PA639",familie:"Mountain",farbe:"#2c3233"},{code:"PA642",familie:"Mountain",farbe:"#434e53"},{code:"PA636",familie:"Mountain",farbe:"#68736f"},{code:"PA637",familie:"Mountain",farbe:"#6d7975"},{code:"PA643",familie:"Mountain",farbe:"#363e3b"},{code:"PA645",familie:"Mountain",farbe:"#2e393b"},{code:"PA614",familie:"Mountain",farbe:"#8c9495"},{code:"PA616",familie:"Mountain",farbe:"#99a39e"},{code:"AC321",familie:"Canyon",farbe:"#e12a19"},{code:"AC323",familie:"Canyon",farbe:"#901c1d"},{code:"AC318",familie:"Canyon",farbe:"#961d1c"},{code:"AC322",familie:"Canyon",farbe:"#a72130"},{code:"AC324",familie:"Canyon",farbe:"#620f25"},{code:"AC320",familie:"Canyon",farbe:"#f06134"},{code:"AC212",familie:"Greenery",farbe:"#4a6f3e"},{code:"AC219",familie:"Greenery",farbe:"#507f49"},{code:"AC221",familie:"Greenery",farbe:"#598e82"},{code:"AC223",familie:"Greenery",farbe:"#053a31"},{code:"AC218",familie:"Greenery",farbe:"#87c846"},{code:"AC220",familie:"Greenery",farbe:"#699778"}],ezip:[{code:"T31818",name:"Uni Schwarz",farbe:"#374445",familie:"Ecole 1 %"},{code:"T31808",name:"Schwarz-Grau",farbe:"#4f5c5d",familie:"Ecole 1 %"},{code:"T30818",name:"Grau-Schwarz",farbe:"#5b696a",familie:"Ecole 1 %"},{code:"T30808",name:"Uni Grau",farbe:"#6c7b7c",familie:"Ecole 1 %"},{code:"T30812",name:"Grau-Sand",farbe:"#888e88",familie:"Ecole 1 %"},{code:"T31708",name:"Grau-Perlwei\xDF",farbe:"#98a4a0",familie:"Ecole 1 %"},{code:"T30801",name:"Grau-Wei\xDF",farbe:"#8c9798",familie:"Ecole 1 %"},{code:"T31701",name:"Wei\xDF-Perlwei\xDF",farbe:"#d8dcd7",familie:"Ecole 1 %"},{code:"T71818",name:"Uni Schwarz",farbe:"#313e3f",familie:"Serg\xE9"},{code:"T70818",name:"Grau-Schwarz",farbe:"#465254",familie:"Serg\xE9"},{code:"T71848",name:"Schwarz-Grau-Leinen",farbe:"#5e6866",familie:"Serg\xE9"},{code:"T70808",name:"Uni Grau",farbe:"#6e7c7c",familie:"Serg\xE9"},{code:"T71708",name:"Perle-Grau",farbe:"#8c9795",familie:"Serg\xE9"},{code:"T71717",name:"Uni Perle",farbe:"#bac2bb",familie:"Serg\xE9"},{code:"T70841",name:"Grau-Wei\xDF-Perle",farbe:"#939e9d",familie:"Serg\xE9"},{code:"T70801",name:"Grau-Wei\xDF",farbe:"#9ea9a8",familie:"Serg\xE9"},{code:"T70101",name:"Uni Wei\xDF",farbe:"#ebefec",familie:"Serg\xE9"},{code:"T71813",name:"Schwarz-Bronze",farbe:"#414947",familie:"Serg\xE9"},{code:"T71701",name:"Perle-Wei\xDF",farbe:"#c9cdc8",familie:"Serg\xE9"},{code:"T70141",name:"Wei\xDF-Wei\xDF-Perle",farbe:"#dde1dc",familie:"Serg\xE9"},{code:"T71313",name:"Uni Bronze",farbe:"#454b43",familie:"Serg\xE9"},{code:"T71213",name:"Sand-Bronze",farbe:"#777262",familie:"Serg\xE9"},{code:"T71812",name:"Schwarz-Sand",farbe:"#76766c",familie:"Serg\xE9"},{code:"T70812",name:"Grau-Sand",farbe:"#999789",familie:"Serg\xE9"},{code:"T71716",name:"Perle-Leinen",farbe:"#d3d2c4",familie:"Serg\xE9"},{code:"T71745",name:"Perle-Wei\xDF-Sand",farbe:"#d3d0c3",familie:"Serg\xE9"},{code:"T70826",name:"Grau-Karamell",farbe:"#9c9a88",familie:"Serg\xE9"},{code:"T71816",name:"Schwarz-Leinen",farbe:"#757e7a",familie:"Serg\xE9"},{code:"T71212",name:"Uni Sand",farbe:"#cfb393",familie:"Serg\xE9"},{code:"T71616",name:"Uni Leinen",farbe:"#ece3cc",familie:"Serg\xE9"},{code:"T71308",name:"Bronze-Grau",farbe:"#4c5552",familie:"Serg\xE9"},{code:"T71608",name:"Leinen-Grau",farbe:"#9fa99f",familie:"Serg\xE9"},{code:"T71601",name:"Leinen-Wei\xDF",farbe:"#e9e7d9",familie:"Serg\xE9"},{code:"T71111",name:"Uni Blau",farbe:"#23496c",familie:"Serg\xE9"},{code:"T70867",name:"Pazifik",farbe:"#457e93",familie:"Serg\xE9"},{code:"T70806",name:"Grau-T\xFCrkis",farbe:"#4c9cb1",familie:"Serg\xE9"},{code:"T70811",name:"Grau-Blau",farbe:"#3e5a6d",familie:"Serg\xE9"},{code:"T71203",name:"Sand-Gelb",farbe:"#d9c267",familie:"Serg\xE9"},{code:"T71622",name:"Leinen-Gr\xFCn",farbe:"#6c7f77",familie:"Serg\xE9"},{code:"T71305",name:"Bronze-Mandarine",farbe:"#8f4d44",familie:"Serg\xE9"},{code:"T70805",name:"Grau-Mandarine",farbe:"#a45e57",familie:"Serg\xE9"},{code:"T70809",name:"Grau-Orange",farbe:"#ab7a51",familie:"Serg\xE9"},{code:"T71201",name:"Sand-Wei\xDF",farbe:"#d8cebc",familie:"Serg\xE9"},{code:"T71711",name:"Perle-Marine",farbe:"#476274",familie:"Serg\xE9"}],plissee:[{name:"Hellgrau",farbe:"#bcafa6"},{name:"Grau",farbe:"#726764"},{name:"Anthrazit",farbe:"#4f484e"},{name:"Braun",farbe:"#7d6051"},{name:"Hellbeige",farbe:"#d1baa4"},{name:"Weiss",farbe:"#efdddb"},{name:"Creme",farbe:"#cebcb0"},{name:"Beige",farbe:"#d6b494"},{name:"Gelb",farbe:"#dabf79"},{name:"Orange-Rot",farbe:"#e47a46"},{name:"Hellgr\xFCn",farbe:"#6f8923"},{name:"Irish Green",farbe:"#777e64"},{name:"Himmelsblau",farbe:"#8c8ab5"},{name:"Mint",farbe:"#979ea2"}]}});var ap,op=rt(()=>{ap={x:[1500,1600,1700,1800,1900,2e3,2100,2200,2300,2400,2500,2600,2700,2800,2900,3e3,3100,3200,3300,3400,3500,3600,3700,3800,3900,4e3,4100,4200,4300,4400,4500,4600,4700,4800,4900],y:[500,600,700,800,900,1e3],p:[[192,192,196,202,202,206,208,212,216,218,222,224,228,232,234,238,240,244,248,250,254,256,260,264,266,270,272,276,282,286,288,296,298,302,304],[206,208,212,218,218,224,228,232,234,238,240,244,248,250,254,260,260,266,270,270,276,276,280,286,286,292,296,298,302,308,312,314,320,324,328],[218,224,228,232,234,240,244,248,254,256,260,264,270,270,276,280,282,286,288,296,296,302,302,308,312,314,318,320,328,330,334,336,344,346,350],[234,240,244,248,254,256,260,266,270,272,280,282,286,292,296,302,304,308,314,318,320,328,330,336,340,346,350,356,362,366,372,378,382,388,394],[250,254,260,264,270,272,276,282,288,292,298,302,308,312,318,320,328,330,336,340,346,350,352,360,362,368,376,378,388,392,394,400,408,414,416],[260,270,276,280,286,288,296,302,304,312,318,320,328,330,336,344,346,352,356,362,366,372,378,382,388,392,398,404,410,416,420,426,432,436,442]]}});function kr(n,e,t,i){let s=n.b/100,r=n.t/100,o=i(t,s-.02);if(n.produkt==="tds"){let h=Ln.degToRad(8),f=(n.h||245)/100,m=f+r*Math.tan(h);return{w:s,d:r,slope:h,yWand:m,unter:f-.135,offUnter:-.17,offPlissee:-.135,pfX:i(e,s),spX:o}}let a=n.produkt==="sunpro",l=a?2.75:2.7,c=a?.19:.22;return{w:s,d:r,slope:0,yWand:l,unter:l-c,offUnter:-(c+.05),offPlissee:-.175,pfX:i(e,s),spX:o}}function Gh(n,e){let t=e.d/Math.cos(e.slope),i=[];if(n.dachMark==="auf"||n.dachMark==="unter")for(let s of za(e.w,6.5))i.push({typ:n.dachMark,b:s,a:t});if(n.dachMark==="plissee")for(let s=0;s<e.spX.length-1;s++)i.push({typ:"plissee",b:e.spX[s+1]-e.spX[s]-.06,a:t-.1,x:(e.spX[s]+e.spX[s+1])/2});if(n.zipV)for(let s=0;s<e.pfX.length-1;s++){let r=e.pfX[s+1]-e.pfX[s]-.12;for(let o of za(r,6))i.push({typ:"zip",ort:"vorne",b:o,h:e.unter})}for(let[s,r]of[[n.zipL,"links"],[n.zipR,"rechts"]])if(s)for(let o of za(e.d-.1,6))i.push({typ:"zip",ort:r,b:o,h:e.unter-(e.slope?.15:0)});return i}function ka(n,e,t){if(!n)return null;let i=n.x.findIndex(r=>r>=e-.5),s=n.y.findIndex(r=>r>=t-.5);return i<0||s<0?null:n.p[s][i]??null}function fp(n,e,t){let i=0,s=0,r=!1,o=[],a={auf:"Aufdachmarkise",unter:"Unterdachmarkise",zip:"Senkrechtmarkise eZip"},l=n.filter(c=>c.typ==="plissee");if(l.length){let c=0,h=0;for(let f of l){let m=ka(ap,Math.max(f.a,1.5)*1e3,f.b*1e3);m==null?r=!0:(c+=m,h++)}h&&(i+=c+lp,o.push(`${h} \xD7 Plissee ${Math.round(l[0].b*100)} \xD7 ${Math.round(l[0].a*100)} cm (Stoff ${t.plisseeStoff}, Profil ${Ba[t.plisseeProfil][0]}) + Bedienstab: ${Math.round(c+lp).toLocaleString("de-DE")} \u20AC`)),r&&o.push("Plissee: Feld breiter als 1,0 m oder Tiefe \xFCber 4,9 m \u2013 auf Anfrage")}for(let c of n.filter(h=>h.typ!=="plissee")){let h,f;c.typ==="zip"?(h=ka(e.ezip105,c.h*1e3,c.b*1e3),f="eZip 105",h==null&&(h=ka(e.ezip125,c.h*1e3,c.b*1e3),f="eZip 125")):(h=ka(c.typ==="auf"?e.aufdachZip:e.unterdachZip,Math.max(c.a,1.5)*1e3,Math.max(c.b,2)*1e3),f=(c.a<=4.5?"Linea ":"Solara ")+(c.typ==="auf"?"AZ":"UZ"));let m=c.typ==="zip"?`Stoff ${t.stoffZip} ${up(t.stoffZip).name}`:`Stoff ${hp(t.stoffDach).familie} ${t.stoffDach}`,g=c.typ==="zip"?`${Math.round(c.b*100)} \xD7 ${Math.round(c.h*100)} cm`:`${Math.round(c.b*100)} \xD7 ${Math.round(c.a*100)} cm Ausfall`;if(h==null){r=!0,o.push(`${a[c.typ]}${c.ort?" "+c.ort:""} ${g}: au\xDFerhalb der Preisliste \u2013 auf Anfrage`);continue}let d=h+ev+(c.typ==="zip"?0:nv);i+=d,s++,o.push(`${a[c.typ]}${c.ort?" "+c.ort:""} ${f} ${g}, ${m}, inkl. Motor${c.typ==="zip"?"":" + Winkel"}: ${Math.round(d).toLocaleString("de-DE")} \u20AC`)}if(s){let c=Math.ceil(s/5);i+=c*tv,o.push(`${c} \xD7 Funkhandsender Situo 5 io`)}return{preis:i,info:o.join(`
`),offen:r,anzahl:n.length}}function sv(){if(ts)return ts;let n=document.createElement("canvas");n.width=8,n.height=64;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"#ffffff"),t.addColorStop(.5,"#c9c9c9"),t.addColorStop(.52,"#ffffff"),t.addColorStop(1,"#d6d6d6"),e.fillStyle=t,e.fillRect(0,0,8,64),ts=new _n(n),ts.wrapS=ts.wrapT=St,ts.colorSpace=dt,ts}function rv(){if(wi)return wi;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,64);for(let t=0;t<64;t+=2)e.fillStyle="rgba(0,0,0,0.07)",e.fillRect(0,t,64,1),e.fillStyle="rgba(0,0,0,0.04)",e.fillRect(t,0,1,64);return wi=new _n(n),wi.wrapS=wi.wrapT=St,wi.colorSpace=dt,wi.anisotropy=8,wi}function pp(n,e,t,i,s,r){let o=cp(hp(e.stoffDach).farbe),a=cp(up(e.stoffZip).farbe,.9),l=e.ausfahren/100,c=t.d/Math.cos(t.slope),h=-t.w/2,f=-t.w/2,m=[],g={links:i+.05,rechts:i+.05};for(let u=0;u<t.pfX.length-1;u++){let v=t.pfX[u]+.06;for(let x of za(t.pfX[u+1]-t.pfX[u]-.12,6))m.push(v+x/2),v+=x}let d=0,_=[];for(let u of Gh(e,t))if(u.typ==="auf"||u.typ==="unter"){let v=u.typ==="auf",x=v?.13:t.offUnter,M=(v?h:f)+u.b/2;v?h+=u.b:f+=u.b;let R=new pt,T=u.b/2-.06,w=t.slope?.035:0,C=t.slope?-.125:-.22,U=v?x-.06:x-.09,y=.02;Nn(dp,u.b-.012,s,!0,R).position.set(0,U,y);for(let q of[-1,1])Nn(ov,.006,s,!0,R).position.set(q*(u.b/2-.003),U,y);if(v)for(let q of[-(u.b/2-.35),u.b/2-.35])r(.05,U-w,.1,s,q,(U+w)/2,y+.09,R),r(.1,.006,.14,s,q,w+.003,y+.09,R);else for(let q of[-(u.b/2-.35),u.b/2-.35])r(.06,.2,.012,s,q,U+.08,.006,R);let b=y+.17,D=c-b+(v?.06:-.08),O=b+D/2;for(let q of[-1,1]){let oe=Nn(lv,D,s,!1,R);oe.position.set(q*T,x-.03,O),q>0&&(oe.scale.x=-1),r(.054,.064,.012,s,q*T,x,b+D+.006,R);let he=Math.max(2,Math.ceil(D/1.3)+1);for(let ke=0;ke<he;ke++){let Xe=b+.12+(D-.24)*ke/(he-1);if(v){let $=x-.03-w;r(.026,$,.05,s,q*T,w+$/2,Xe,R),r(.085,.006,.07,s,q*T,w+.003,Xe,R)}else{let $=C-(x+.03);r(.07,Math.max(.012,$),.05,s,q*T,x+.03+$/2,Xe,R)}}}let H=2*T-.02,Z=D-.08,z=b-.01,j=new Oe(new bt(H,.003,Z),o);j.castShadow=!0,j.receiveShadow=!0,R.add(j),j.material.map.repeat.set(H/.05,Z/.05);let B=Nn(av,2*T+.03,s,!0,R);B.position.y=x-.023,_.push(q=>{let oe=Math.max(.01,Z*q);j.scale.z=oe/Z,j.position.set(0,x,z+oe/2),j.visible=q>.005,B.position.z=z+oe-.02}),R.position.set(M,t.yWand,i),R.rotation.x=t.slope,n.add(R)}else if(u.typ==="plissee"){let v=new Fe({color:Ba[e.plisseeProfil][1],metalness:.3,roughness:.45}),x=sv().clone();x.needsUpdate=!0,x.repeat.set(1,u.a/.04);let M=new Fe({color:new ze(iv(e.plisseeStoff).farbe),map:x,roughness:.8,metalness:.15,side:_t}),R=new pt,T=t.offPlissee;r(u.b,.03,.04,v,0,T,.08,R);let w=u.a-.1,C=new Oe(new bt(u.b-.01,.004,w),M);C.receiveShadow=!0,R.add(C);let U=r(u.b,.025,.035,v,0,T,.1,R);_.push(y=>{let b=Math.max(.01,w*y);C.scale.z=b/w,C.material.map.repeat.y=Math.max(1,b/.04),C.position.set(0,T,.1+b/2),C.visible=y>.005,U.position.z=.1+b}),R.position.set(u.x,t.yWand,i),R.rotation.x=t.slope,n.add(R)}else{let v=new pt,x=u.h,M=.105;r(u.b,M,M,s,0,x-M/2,0,v);for(let C of[-1,1])r(.045,x-M,.04,s,C*(u.b/2-.0225),(x-M)/2,0,v);let R=x-M-.06,T=new Oe(new bt(u.b-.09,R,.003),a);T.castShadow=!0,v.add(T);let w=r(u.b-.09,.04,.035,s,0,x-M,0,v);_.push(C=>{let U=Math.max(.01,R*C);T.scale.y=U/R,T.position.y=x-M-U/2,T.visible=C>.005,w.position.y=x-M-U}),u.ort==="vorne"?v.position.set(m[d++],0,i+t.d+.1):(v.rotation.y=Math.PI/2,v.position.set((u.ort==="links"?-1:1)*(t.w/2+.09),0,g[u.ort]+u.b/2),g[u.ort]+=u.b),n.add(v)}let p=u=>_.forEach(v=>v(u));return p(l),p}var Ba,ev,tv,nv,lp,za,hp,up,iv,ts,wi,cp,dp,ov,av,lv,mp=rt(()=>{Tt();Ua();rp();op();Ba={weiss:["Wei\xDF",15790575],alu:["Alu",12172735],anthrazit:["Anthrazit",3685954],schwarz:["Schwarz",1908513]},ev=304,tv=114,nv=180,lp=30,za=(n,e)=>{let t=Math.max(1,Math.ceil(n/e-1e-9));return Array(t).fill(n/t)},hp=n=>On.markise.find(e=>e.code===n)||On.markise[0],up=n=>On.ezip.find(e=>e.code===n)||On.ezip[0],iv=n=>On.plissee.find(e=>e.name===n)||On.plissee[0];ts=null;wi=null;cp=(n,e=.94,t=[40,40])=>{let i=rv().clone();return i.needsUpdate=!0,i.repeat.set(...t),new Fe({color:new ze(n),map:i,roughness:.92,transparent:!0,opacity:e,side:_t})},dp=[[0,0],[.125,0],...Gn([.125,0],[.182,0],[.18,.075],8),...Gn([.18,.075],[.178,.152],[.11,.152],8),[0,.152]],ov=dp.map(([n,e])=>[n*1.05-.004,e*1.07-.005]),av=[[0,0],[.035,0],...Gn([.035,0],[.066,0],[.066,.023],5),...Gn([.066,.023],[.066,.046],[.035,.046],5),[0,.046]],lv=[[-.025,0],[.025,0],[.025,.024],[.01,.024],[.01,.036],[.025,.036],[.025,.06],[-.025,.06]]});var Wh,gp=rt(()=>{Wh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAFdCAMAAAAaF8uUAAAAQlBMVEVMaXH///////////////////////////////////////////////////////////////////////////////////83sySiAAAAFXRSTlMAF93R9UQM/AEDXTi1g1AopJJwxOrej5ttAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAgAElEQVR42u1dh3bjuA61Oqle//9XlwDYScmyo2TirHTOezuTUWSZl+gX4ONxX/d1X/d1X/d1X/f1ey724Pci/CY8OL8R+UUXf0xrcyPyi/CYt+1G5BfhUVRVtaXDjcgvwWNIt2q7Efk1/lW5CDQ28b8suRH5FQYd8QBElhuRX4BHLfG4EfkdeDQ5QnEj8qsMSJ7fiPySAH1EB6u77cgvMujV1j56+G9FfylvRP6pQUd3dwDp6NIbkd9g0Kv+8UgAi7pXMsLYvTz/wKAnGRmQBwfdlYs/1LfW+ocGXRsQ/iBABA4SkZHfMvLzCqvDtV8HBKRHW4J5X/C1RsZvRH7egAhXtypAO4l4RJgTxAYDd5CRW2v9KwNCASJY9RmsyYyRImitG5Gfw4OxlgyINBZkRGbUXp2UkdvX+nkDkqqwHAQj3ybxX2YhcmutH8Ojx0xJXqglF1VDihCZjcjta/1wjbDWIoBGZFsBEAuR6XEj8iN4SIM+WiqJPTLpZukQBRG5vd+fAIRSvIttI+iHszYpEpHuRuTHaoS5w/uBn5JV12F8fiPyQ6QfqhHOjg8FVt0AYmmtG5HvxqMMDYiM3KWbFSJyL9s3AsK0AWEe21oUcytDzeKc3TLyM6xRJyK0/kXE7pVlV2R9N1Bu93VxRIhr3Adr7LpZMjZpiULX34h8W0S4ooBE9jxl4EfX80oWvD2/EXl8T01KphTHyPoKq175pkWHkCbHcl9XpnhljTDKqmZUV288Z1jJyI3Idxl0PyL0jEjne8MSkfVG5CoY5GVYoztOEwUeqecO34hcLha+PZg43y3qVmEceGuti+3GPI7TXAyDlVJkezEjerl1iMht2a+sDCKNJF/HkQzIfpuU5D0EPq4un9xa64I4UETf0EBI5J5oROjlgQkRz440FL683hjK+A1hEAdStF2pitOxH4a6qQ4Ryd9CBB5zI+JRfTYFBxgQ/mBPRApXvvM4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"});var Xh,_p=rt(()=>{Xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAFdCAMAAAAaF8uUAAAAOVBMVEVMaXEeJy8dJi4dJS4eJy8aJCwdJi4JFCMfKDAeJy8eJy8eJy8dJi4eJy8eJy8cJS0eJy8dJy4fKDDSujFZAAAAEnRSTlMA1lIy8hBDA/78jLZjouQfyHnSAgyVAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAgAElEQVR42u1diZqjKreNIzgr7/+whz2AgKAmsaorOfLde/7qbksTlntee/N43Ote97rXve51r3v9pSXuLfhTcIgbkT8lHe1Y3Ij8ITx6KW9E/hAedSObG5G/g8c0qkY1MrsR+RurmmWjFCAy3Yj8CYOOeAAic3Uj8u/xyLW+kjcifwaPotRwkIjciPwVAyKbEvCQNyL/PkAfJDhYbSu11pI3In/CoDeyQ0PSNOj9djci/zJCB4Ou3d0CLEg7yhuRfxuhg0GXMtemJNOxep5bGbnXPzHoGUrEArlebUtk++gbtCPdnfv9JwIysAERZEwAB0ZkuPH4B3gsYEBkWSAgOdiSCvO+iMgtIv8mIpRNTVtf6UhknMjOs4zckPzqmjIUhZb3XWgPS/ZgTZYbkX+yOjIgwolIwLyzKrvtyL8wIA0pKROSlCQuhM0tI7+c4oX4Q5b1w0pIrfHJKichf8vIr9YIwYCo3hEBHZSAwKyISPC17vU7eFBE6Pu22Up0sFqrvZXWL0aEXl6XYvXemhSWkRuRX0kpYo2w9DgNYFac/b8R+eWUol6Lt9X6r6WvxFp1I/IreGCNcJMcgcjduFmujMgbkV8zIOG/zFI2qxqjDLDicPFeP5xS3FKwBMTujWtXqL57I/LDEWEDGUVdkxIx0Qn2vuqwotjkNyI/yxpVkXceCVq+ZWF7ox2yG5GfAqSLGXRj1RttWkQshFRrjuVely406CrB4UXpKQJneCKf7Ebk5wx66nWPGRGrtW5ELuTC0TIkkzU/EiNpybHamJ1Z3VrrB3o5hSGZDEIkQ/hIZG601o3IRWsZhmGpi8lGhGLf5Kt+i8ht2a80G7CachyGlWSyw3totj4uIHJrrcsqgzr8bqDbQFKFYy+iwDxwFBFEqlHl801v4obQ20jwZCUJCVZl9zOFKFB637daqyZEnm0MFfdEgseGKwrdURoOqRySyY5I4c4vIvR+CZEnW3W1shvuID9MoKsyG5Eg6pBMdhHRKm7DgLc+8zPtI1pCszuA2VYG82rK267Uvegn3laSEb3xU0JGutNWATSmfMnwfHX3IMeBoli6U9pD7/wYRySn+50tWBn1p75wIoF4uXuQEokYqZ+9D7kC2xIWISKlPIerdhAa6n8/oSn/B7N6TLfaLJ6+B6mabU7YNFydeeP1wyAzxr29XzaRQO/t011mxGLfjQP3eRDg/m6939YjBO+6V53B4+sQweDgSUSwEhVyEw+VoPAKizFVI7Ceog5qugLsEOAhpem2/iJEKHze2Nij30pXolJ4iFDAtqIAjoKUR7l4ncZcSjAf0qgs9fTn/+NVcPnkrB6jW7JU92ZVxISqXTcNU5Gx1G9vmtn3TBCpKx1GAoW4LL9JRjggU08FyQAivJ6uAfHf/3YWEW+XudarjG1FweSMk76v/uu+RHWlVV4Nhn3mvsWvQISzUST4Z2Newd1RrqoP9dGmVFu1pSdQyJCPmRHwpqXthIslSxpqZpDDhIJaFr16Wsb/ct9AQ4YREDmXFzJv8eDiUVeu0DWqDuglYHM8DYdiFjcjwCOKakNtzfOMxEOOvSBLpB/VN9+BCJeGSEAAkVMEKRq4hFu2WoTa2UB8xweP+V7MW4tBrlbEjORNok8X5Iyy/Ep2BcIDmkvPJeBO0g+P2T08yGs5gQi9wgGVoRpXXjsYB63ZPfHBmRoqD5Ml+ILn0WgkErATrmg9muVhmq0JUuq21lblgxFhPGBKj/4iHSNy/I04ZeIZkNb+0YTbK2mUaukq0i9F0eU2tsQ5HGHSEKw5Bh8N6SZB0zUpWYATCTB9/7mIWNogxFcZ8WyhBHsgI8bj9Q2IMkByytEpHa5p3CoWA5XbKrwxI7OPhwB1hbLcVs7D6DpARH00wUuY2G4eafyFRaTfD8p6uTEgGtlRuA4Y3KcL+tuiXqlGa1abwNw8xAPdqCuZ9WvdFitk6E1z8P/JiPAkEnzJ8Du2nI3YSVywAfE0GzhdavZQxhRh5cX0iSgB/a+N0jJ+3NoBJ/LRWPPJfTSGiDl1W3M2/jMRsbG2YM8Rcugtm8xkA7l93Rc/L8Vbp3eXxUyZ1KHZ2mTUhp7TECsOr44DBB/wKcHg9MJz39CB4IoMFlpitJZPauwvkN85r/3j+LVTqUY74EeEJjiHmojWP+gfzTYtwspnN6MOr3aUhyJZM+oLRkXWvAsNPXxi83p8MCI0cATfQAwaOvONsOYjU5VtQ94dJ9/DMhsHOQ0Qj2KCm+Pf1c2ZZGE+JN4YKn+ZT1VuuRG5dCj1XNP9PEQoAMDP/SikXEMBjhgSXAPTzukGKxgl0r5BMM5tnJibLyeWniTbdw3AK5HSqe16X3Z2fUECBWmDUmQ9fB4ikHCHfcV9yuELODFDYRCJ9KQxedeLrUHZg8Z6kNUFPASncnXw1u5nCverJ6T/Bspt6R+qSFdWwRIb0lI/qSnL1q7RteqkZxJMditihoXxk6uQ0a49qmqwasWq9sF6r+8M3JJ03zGP4gYa1w32mbqtDU7/KYhw7lyyY5Rt8k7TTImhLDSg1M7pG5BaoVAUlPKT9EsggngDcJV2axsnKgMNhq46sytEwssInD7OJJQfgogNnPs1GZQHmdmBU3W1B1SOxTw/9UQHHzQdFvD0XU0MXY0QYs7y1aq7k1mBzE6WP3bcPr8LiDPLWrA+AhHjiNB3oLd+kzQSyMD1OLiWheV/dz74QGLkIeea6UBoWbDmfmjQz1Aj0zQfeKPUJslSUXT6CYisg3qENZzbkgS7vw2bGY+FJcS22khV7WapzNU8EyCeRRfnCesmn7OTO6hKz6p/mIxYPIxer8aoEwT1DbSlyrg2EYPOf4kLnNJ81fIUDyryfUWse0CcrE0KMmhpnwl9sa2Mc/L6j48ksAaPowwknEQz7nSlZXNYWrU3iIGGJxIczeDPYur5UB3/HUUY6qWvzkoKJSt3uHP4ISKtpFixl28pzF/EI6ucOWKBvHtij85WvTJT+ocI2G5sQeAiEah2MCFdUNF4TH3WgLnva3EKE5tDmVJWPVfRsqMgrfWXEbEJ99VGQitZImyzph0iizpGg+ajpVQoHtyTHnhYsPVVPYzY2gP/mYd8OiEolLuMhenmAszAV9sXavj7iAx+oo/SHinyIVAISuyPagY6ZW3ehiXKcCM2t8AA3g7tBY9uWmbse6NgD0AZh6WojiwKjScHUkM6EomoXSb//uXRNtUQ9rqixIzVjrowaQvYxLF4iCifK2qDMtIzRlVVOQkH03Gxv6dB5dXmU7UrKIQIvBex4JDzixFn7oHlhHCSmqDa71+ZY+XOeeHzHtu9xHg1UD12O2pBmLPw5iJaCey4IoJbWCxZiS1WBhHqFMW+RNmM3VJDdlEkG9zzEnOUWS4i+w4TO2KsIUbESc/zA6p/Pi8YPwnPb3MzteiJ1Ltts6IfWRB6P5xHhQVpl2SiHnqh0HLkXWkMB7Nxy7lEGSHdpe9TZtaipOiuoDTVMEUQwSJVHn0tFoUGaLFgV3U+zNm/yjy6r9yiGumZOPJ55XxMwpKb9loiRdN8voRLULNe15YDHTTkGspxwVRHVhX5kHHvLoMltaAUCeVFMgKbu/V/ubYzJw/hNXZEFHXbZcGA59/HpKqqqV6Wjk6JWNy06KgOHXX0fqWyJaxgDFOzpFwfDYiGUOQDJcBQXWl6woS5J6pdVXk7IqwMChgWLShVzB/mQgf4FtumkqJJ9l0xWvp9gi5Iqi2DsP0LRPQ37pd2HlFZy43DQd7JQTcYesrS85RdVkiaBAX+gHarMvanyFfL7VOzinlVujERXQbWXkjAG/qIO8zpEBXTsfDOpEZ62MMYSBzRpMAff79TFNPo9HYq09Xv0Wr649oRuY6bgUtGuJJUWrIcKBzEmtAQLJMwgy/5NaAdF5NW6ooxUfT2lNlSh+7wGqmGWsvUFvuE8iRE0JjQ7clH+WVEqKxBytm8HA6ZxNB5xupxjEfI9uT6Uzel+6S05WgYDdh/rYg4GAnkkkCp6qUbSbHRb0DsP+SFp7xMV+GmecR0+WSpJrCFnDq0Hirr5n/BAzY0Ufwc7PgPHrctyraNZE+UajYjkSF2lkvUeVwD8qZhR3deJvuyO4CsaUb8Sbe6s+tlLIoqu7Z2XC99XatiPGzLxk/ZM45jsrnt4c2gufO/2k1t8OBBPXrpzyJ2GwoSfZUqclWlJ45FzbkJyA0UEGMMtXi4aWAEpOz9YJCitUpblLFhQWHlNQ50KcsXq5/wDSnGvQ53jcjYtUtemRu1vy0jNss+tvpz1NM0VV54etiR5hSnNy8e/HKUZY5bBsKhmBKthaOfPDh4eLLecu3j5n4waCxKOzesYlVD3FYdzPOlEFjgO1ZsZbZRySyJZbWw2XqwpP0WImvVY4qOMbL0ql32Guu88NQV1NiRDkuBMUfGHg3AQcLh+BEIGFJ/8VxcHQz2hffROJAuljUHyT7x2PW1DTi3owKsL5X2UYS/AVQ9+x1EVvkoeCBikiUnDlrdmkiJRzvCG9IW7XU3GrcKTCxZDh+wfrbJLDKy5RymF+mHqR6y0iaG+dKhniyBbmPY+/Ic48gxK7+EyNEMQ+wABH+j3+dUU+TXR4jpAdGUHKV+NmjoV7rscldVcUKrHckNtwlGipCyoeZg0Ltc1JAAI4tCcRQIXT/FuV4239U+zg1c4fMUf34qh52EO6bwyEt5MOPFzhOLEACr0XevUDhor61wtMVmf3XM3vC7boRk9XEbCAZFYOXJQRh48hNeitqr68fY7FOsOus7JZJrsTTXr/Tu2qpgQhitLkqPrzCFkFirhf4ei2+OOHmIBhhdqw4LtCJSJ8Q0YmNz8CYYpOr3OIfBIMlJpRNQpZQrmFp5UZUy94N5SE03PNRGnJyX8PPnu1v5yFJ4sH1Jj9KArDUr2JiMVRtFlEknBGwLEVoOwWEJo1AOeQb7Oeu4Q1lMUFCyrveDQQal6IdMKhvMmxvlvrOifwBqxtnjwaka/8OniVs8HDfIt+k+yyEqHgWnKOZid0IGWWnMrPO7XnaQhfLlx4QlLBSq1OqsgoNEILqBjaa4gyokchMMrq5X3XeZFSq+Vxd4BDAsQsqzB+1ay/5ziLj+rnC2TwQBiEpSBiAjWbK7u/cx6c1vM7VajrGtN4Yc6oQ8j5F7fVtSqnbXqnyZR7m6XipW2bVZr9aYeea6UGVeOImAR5/JJ3wt4goMPzTadKuPYIOXpVrRyZFQmEqsQctNJ81hXY89K6OB6xqTH8EQsPJjjqAUsgWkNUkToWFTZhkfN2s3Zv5Bc+vacXWF0cqDoIi1OAt70NQnEaEuuB864dJlwdnWPP3COPJCDM8U7YzHVmBo1z52atzswrKqAbNQbIRDW47SMS5RQHgTi35W0jjCZuIscYUC5cWBY9s1a+BIMWabV8Y50xk4ddJ3soj8xDlYGzw0HPWMn5tpIUZhJYflQ4sHVoHGZNKRkofkVlFmfRsCPkwISG4VdORmMi4hpsC7KixlaiOUhx82FoXNvE0Pm3Bm7Gx6WBMBhrNjW+qfQiTEQ5g5FFgLINotcc46IdJDjuXuXCCy0hnHacQaMZn1MCxp1iixLkbDAfYlRExrAAOKT+feMioiSicYXEJaCoWibFGMUMF/upaKwJ0827Bjpxq0P42HDsUyKlcSMX2ymdaU89SbNzrlXllFZIUDvVzheZ6OcUGri5UpJsl7gCyQpi/XK8Ef1j61gEyWrexyMMjpxUBQhA7mO4Ofath1BuOjn5BNT3ahXCsjgT1H51VRMqpRprOJ6nwpoiIRQ7ElLVno6DvD5mEvV4TJw2LJGieFApUpzo77gOgOtR5rWA3v/LzYxDCmfEvr3pL51lmTWIxSTeg6rwKJtKJeu4rDSZo9d05eSwM2zY4GD5qBB08ph5orZHLGfYgnb7iTjaYePURUV9Wt1VVQeWu3hpzDEiqTwh7zJa2Zx8eAUMaXBYNuVq+KjzZaxyhDqTx/eARS3WPrek01ERhMjAm0ItMdcgIU6qaW8sK2RNuF01FbN/aLo2TM2k+ZZhsrpEsGFRc/YqMLSTjmcq0CrjVZPyxZi+iQfK94dmxhN9YAorgK5cSTm3ylFjbze9KmTnQFdokFjgJoRaaOQpho8hfFmGcI3aOU8roR2Wt+isgcU8vigXlAMO6YL2q4QzDdqqT12iYaZCvt7HWTLVOYs/DCEoWVKbtXfO/MKkySEE59ZUsRbhrfzzpf0rcowBWaxLbZxMSY7GZjZjmzWcvjDZRXFXU9PB7ANURjTjQ/YXLNDfEPl7jCYlrPppUP4eC9Zk9oSGXWlXGWtJp092Ci8UCF9a3AhnCgHdzMuR92MzAc2UzlaKc40rW5cLUX/6+2KKS8bEZG04qW6ZjQXeBA+ktSv76+qnqknTfYsuF0n8+krMf4SJ4ev+0c63aq173GzHpMOGYnSNRhSeVpFDPOSWQBIHJeNhqFIxPrpqFGy3UJtkaukHRiFMjZFxGLotPDM1O91Eoryqu32lBewQNqaBgjIBmsXBv+mDSXpXw7G59s605VPrPdpZijT8Qcytm9Ksgvgm8ngd7mAQIvTBW1HE5kQlGnyTJQMGjJ2th/MkdTkXypsoJCtKLqMEK8IBnvyse0jASHFtNi8+ZVGqyY2aIKSphMJHKV41ZxiVzEXmZWJw1WpkSUxdbxyAc/Ug/FcTKWiOV59R2YK9RrprRaC45E4NpQWEh5WQYLSdYhKRAixLdTv2YUhtYIGPSispJzpK0bjXubGlLtRx9bclVcOKADpyFSpNoKh3M4LhKvt4AEdtw+UdL9KJnvJyyrYnDjE2pqwJy9CNPDYrXyGMkcHsdUj28jYkd7DBD0KmKuZn2V6DXaab1v/frJRA0drIjimXW3TijDsMTuix0ImAbEoNusQWdD9wtLXRDocBLG1LVMFRECx8qz8qjnJo77j8/HssdovJGMt2NFGwoSQDq6BBwJSHgI+yA25CrFjQJq9pOHpgNnpYpSQB5DQwMLmhmn26QAWVMADoEoD8rA5mM1lN7Fi7rSmHllc74+T9vGjfMZQOwxGu3royfsmFdWqGWg589NfscCuwgTtaYKWG901WQ6cCynISYctsfTcB9jgKyFLuWUVgLny83J2Iv0W6L7PeaRU/C2uNX5pXk6E3Y6t9FGRl5ExMUDNyfMg5+6RSmdBJj+3qYVsGm2d1yDRGUC8rjlYL41u0scAkeNuqhYVUkOXEN0xRommo8F753xmHSEPjYhr6hbJh+UKjv35hsZealPlOvnJnjSev6FYxaxq40SLhgCzixr+P8RcpXIO9NJi24QuVWRYDI3idyVHGw3xZEQJ9+LTwwYK34oxGqAi5PrZyuGxq04YmTv54fPAvIOIsL0iVPJrq5egcMMXDThceOSqwJaLlkOp3pBwhEJ7cnCWHqIyRFlir+pSb/TZeaJysn3ep7w7FwU6Ed6Ggam6+IGEAwcTWXoLCCvI2LxgNMD2+KlM0iJU0rBqenMNDWlrZeLjc0ckKs9y8HCYSrplgSSmS8qMDDs3BIv5yJD4VibqU3C37lIrPbMxUM5kSMEjtXjGUAYkafnDRh9hQn26bUTYanPA8lwhenpd1jSPptHv83OFRvCj9uM4CSdXAHxAVHKKzuGGUZhn6m4co45+kA41gRzbBEmkF8sqvm890SljCcRMXhAlaN48YBeqhvpIgAU7pT1X8rZ32v3pTdFwKhwYNPNUK6eUJkxyYa/WWbbYU1yUXHIUQd+AQfta20SEv6uzNqgRDoMijgmFDiO6rwaYkSeKY8IW75oFvHiecmkyvUpnWvz2ZZcxV+cCQuONoslhdn9amzKty69Y3gCQPzbBSkZh/KFeQLXvAhfmR0t6sZ6ZlYTu6/nO3XXXhoUj8fr09rksDgsaTX32xAQojHb4r9jOXpvOgDuYOfT1K3ba1WWTh3GnFyt9px7sSf8ECmvQZ3AJF162EHkbHnE8kXL5fUZEXyqhFEba1ApgvSi04FTzmnhcHP0aIPMDGVbERM+IMY1FJuMFrWZNMx8YFdOeJ0PR6oqCsoTVoEngZ5LxvNsscYteLww4aEwIzO4FzAWAq4uTixk22yQbLx6YudPifcBkdTeFfY1TBx1ShPqFkFhsMIPpRr5HBxobaenjfSZs/i4X/uNrCRt4uiw04L+Gq8DRxpVv2UMUFtNW5rriNpuTmGtyTWqtgObxDb9bpLvakU2CHXZh2Nf7zk0FJeznzOx+tSGE4iYid6R6vd5OCjA46Ay5I+wP+noIJWlhGMC4VDSaYBer+uCbn6xBcTvMhlKaScGobF3ndzHOoqgUc/D0QzT02fL6rb48rBgxXjI8TXKijOcx4u1fAIaGlXlBIlTKgIc3dYQ1ySAgEh3KntUQjwPzU2+z8s2HjcTnl6AQ83544XTlzUl9QQi3d4QhWM4jNB7r36UB2rdqm3C0p3VYO29b4M2AhLP9np0Li/57hTl6Qr1tB03jXNj/6o2abWM7JoGSj4luIXHaFChwwZuYX7EhGOce08WAY1wOJFiHXivMNQpnDIeyfZyjl6Zph9lkRV+JVG9YMcZjjIxpfzUljEie7FDiUPNxSu6CgrWyji6QQIsdKvI/3/ELIewfR+eYxqO292cJR2TkKonFoUyHyrMjjzsYIgXFny+rniIt0Zrl+nuEUoGvsjmcnLYawo74CY2pslge4WbgC+dG43tFGNWETfObybfApLbAQEU23tBO30mzkDKV/BomBgr3jsZqkyP7AA8XjMfU2ckI9Zf41PdMLSLu1XCNuokhYM0Ix4cGoy2CWhAOknguA6+h+Y/7CU00Ldqp7fgsFMv+mT1+2RffHz8s0MEDahuJvcerRM6HRmdEwGWWxKok+9VatOIsiHKMeGLQo5t6nBupHwVDaOt3iciUo94H6NP9cnZtedgVlRxjeVHTF+ywg6CuHCYfJ/H0hIbzGylcDP7KdtSSVnOyLmIhBzyRTiU4UKJizoLysg5sHoAw6unIdtjH4IQ8OFn1jeKI2hu5nZQ8L42lxnMGhO5bTu1AkCsqiq2qip7RziwCDPukG+er5V3kTF2uo7Vvp4soYOJijAELJwmcqeDYCcCVLG4XfBkmZLDGxrTEB5FvFVZfjBpbtOVzvyNF+Ujm66Cw0xd30y76eZavJdqd3t11n02hT09pbiKZqsANOXUCvNYM4eZ6s6cHBWZYxqk36Hv36MmeuO23hGO7cPfH7erj3EP20gL8c5JNQsP1vP6ZN3EEBAei4C37NrxVDPHyjqkq6QdRVKH1NQxyPaGiVy4TfmequI6fmpE6VsjZOqTVNCzgEgDyBoC2uShebeyYZncodzItjahZMTcEw067xqHM5XlfBioV1GqMJaMtUWvtzGkh7d0FTt48+NxNSLXweECIjgEVOs0GPKwlB0Aw3TMlVpFNdBuqSLCoRXaaPvIkMpFh0pKczQiVx1L03EdTy7Sbd4UDvw2XY6a8XJAHhf36FpAHPoVifiM7Rvr1Fww7nouQr3Y9CuxoWIMtolLU04vhzdeUzhVx2btMRRhcjHvykvQUFktqp8C5OqjbyUO+La5d1Nn7jQXWc/Z4cakdWKFkrZVL9aU6R5A4eVo8ehNYjawDRptcsTUtYWrsmwC7V04FOXOPgcQGCXK9CuKyFdGuO6k0O0t7jy9hqcgwfj8kC3KscLs5Wgp/LcCQrctKJY0R5AYQJzk4tRzTuddLPD10p7243MA0R+4XHPvuvGIZvJW5hx63d7SmREKcrWS49L7zGXDfbb0Tif7bgQElCNn8tdq4tqFayc5tOPbdnxt1P08QJTTCtgL6h5v9Gi93JzVLHQrxVBavWUxMZeIsEc6JEivzIaAAwpTM4LkYtu/nlffpq0WMxJdfBIgrPIh1AaWDo7PVTRaj5sqCJRuNPNclBn3Bpe4djzOfeabll1mTzygblvxCHoMlWrUOkfrTTh02grP5P00QPyUOQPCjd8K5h3a7EBRL9QKY/uQkbk89JYu2NBApLDRiU+adIY3rRMdwlxWcwEc8DkgbaVL+J8GCLFcbRXQAOKOcZPzkK9UD21TcJYxz0oyBy3YXNUYznMQOFDIbBNNe3PLXGEuS10CR9liFvHTAOml04EjHAnh7I9tMi7nJa/WPtaeJrFb79Yy2oc6HF+Oc8TtcBKmULikQ69h5wI00KugCu0GkO4DAJmj6r5xNQc3AI12Wiv2seoDVxo7LYYhbNq8qNaBx6t14dsEDR941dWAwEk9Obd+4bf5KECC3k2m3iqOzlGjN9IdkWDPU+HJCHPDM0SMDHiXcLbXZGBMLOkxrxo3Un9fOoCMaGoe+tvgSMxPAcTryAskRA4tVxODThfpj9DVg3OHrFybw9Evpo59k+2VtuGjCEiHUI9VXmD4vrYqnYI5nb37SYA8tkckICB62yc8u0LjkpWuhSf3yozQZZNS++P3qJWvc9K0pmfdFQ7Lq7oMkE3B/AMBiQySaBQNNKPybg5lsYZz2A3Pmjbt+OuIBAClsxOQjM9sw7ts01mzHrijLlJZOOrIP/OTiHkfDgidCqYTjgYQJlO15Fitnd9goTv3uG08WE06R67Yi/tgjII7vFd6Mxff1FbVRgF/voTQTKblwcftaECwhQfouDAvzx1AifY8s0O9jZ3PGjsCif0eG116pEObob8AELjTloz4RYD0DiDEx8UEOYKj1umr0ph5s99U5FtmThHbcBFOPaCThp0qO/VnhZH6NdoqBYj4TJWlGBClagcQnMCN3QSd51c1OHVHm/k1voTQsWycAW6SprHzIZ+cEgYvWLwPiOfqfh0g1CObP4gAgYBIIyE4wxe6HgWOxW3MKRHrpHxnhi6Mzp0b6V+zzqHjBOQmufhKxRxc3Tir82skJHclhAGh6du2oRnNhfKGeis8EGdyT1az16zZSHconIjysp4r0DZJbuj3eFmAQx9KSE1DA7FP25Z8G2gAABhuSURBVEz75PSvalYzDzN03ZlhcE0m5Uq88wN2YfvUrYQ8le/dY799RRxCbq8HCJ24jkP53L55s+HreSrSTniZPd9LO8R8tBq4XAFx1QNEy5/JJZ9AhXzm9LlyXw1IO1PmPN+ejQdctoHnuK3HCGsTXjtkLt3ajJcsj2CWmjfrBJSXPpwFT6NSTo4sWaGVJCJpQOR3AdIwIPA2YgifR8Zo2vNUnGPTKJof16nsPFq82QQLFhDnyCPIJdPdVBIUqBsU896c9K8EpDCA0PEWqUNf1knr69kdfM4HB4WwOXTD4A7BALP19AIgInHqPoIK9NDSPRNzoGOAzF8ECFZ6+oMDwSDwCwbjUskRKCq1ih5TErS0DQ9vVnjRa5egDBSYTbcY9sSQBuQ7bEgTk5DweOyooBCdq51L92B6HIW0DEqeB2Q1Pnh+t3bmyrWuQi8I3qqmKanJ40u/F5ATeIRHO5cmxciCotRTgHinOVeTtvVzWUpzOhgRtw0DrzsnIfP3AHIWj/BAFecswuYUINEx9AaVAs5zybJ8we5ROGWVXQWZxyP1bwHEtyHEC3pu/uNq5nm8ENdUmlcA8U8+16RKwQeTivUYkiohIY36PkDoINIXp0TgntBJRojLy4AYsyI4R2X6R6dRpVzfDSDdt0jIy2djCdoTfYpMp8iYvAWIPzNFkohQrTl2RtCXAtK/c1iZOaWn1ofHILnoIkAKsuu9OSop+otfmjrp0UN6ExAqBV8lITRuh0wHTyVU5RQpUH0LICqUkE038wuADJcCwt4VJsFS0eEXpt+vBASPDLkIEOtdYdakxjBnO7/1iwDJfwCQBQGprwHk4ZgOGx3GAFE3IClAenUlIOxdUaRJhm8THd6A7AKCLqi8TEKMiEB6mF3fYM7FtwKSXwiIvA4Qvds49QatUkXRYR+OgrkBOQJEXSchdOwM5xjJ9Q0KI9+Ty/IBkdcBoi4EBLwrTCPnVP9tNtHhNwJS/11A+Gg/zjHmUm6Syd8YGP5tQODsYGM6OnZ9922I+Jbk4ruAICUVaocXAmJH4mEChRpbvM95A3IMSHMlIA84iZATKCY6nMVutld8CcnhjwJiokP0rgoaHNz7HVQ3IL8qIV4CpQ1PwvheQNR1gBSXAmJz7wUeSKT8wsg3AlL/joQsr0qICUDWBIpzRtQXAyKvAeTaSN1JoFBKppr92uEXelnqWgm5HpCHKU9hAiXH5hMbHX4PICoERP1RG/LwmFneZMfvA0RdLyE/AIgtr+MhRASOMVTf1dJ2qcpSDIj8CUDW8jq5vpZZ+l1Nnz9hQ66PQ2wCpSEGCofuFB1Gauq3hASAqKvdXkqgKBsdLg6z9FZZx17WD0iIn0Dh0J07574WkIu8rCtZJ6nyer8ySyPzsr4FkKsCw0b9BCA88kNiAKLjEnNc+5cBon4RkPdsyOOxtraBW4K8X+wu/TqV1XyEhNCRrpIs1Eqb+0Ybsra0/WlAHk55yjSBIffhBuTA7f05QKZScn+CiUtm8cVelvzbXtYmOmTa3HcCUv99G+JEh4uJDhsYuWEBqW4v65cBMShwdKjoNAbr9n4TIBdKiPwxtxeiQ+yZowQKZTTH6mslRP19QHQmsbHldahawQiVO3VykH7/QRvycFrbcOSG/kPZl3dycRcQ9YMqi+bWS0knjw04oRCPAr8BSQKS7A9ZLpGQtbWNXV8aVvAlY2KvBET9EiBueR2HeN6A/JMCVdiaiwkUTMkrDxD12YBcGIco9SuAPJwKrnnwlwCS/wtAMvUuIPA06EmAybEPcxTZXQ/ZY538LCB6zSv5uuYD/j5JQgQdFryuAJCm9ps+hRDiubFZgZcVAiJcQMxZuPS53FF/yeeKYHG/l+v6+hLiXfxREmJ4bVfmsg5U1vs25LGOxTROlwvI8Of3v/LXNFU5nR9SVT1qmFz/gID04bXn1lRRzq/HG0LLWXgfgkFUYiKVJabqtTXhqjSxDAcMwx9QRPRwQv1vJCHrdfYp4k+x4jJvjbDoQEL9B/cHHfNmL64S7zOOGR51sb1Pw49xf3phjbT4gZrwUOo/lXSAYqn/Vdqbr1fimos/Y1hY4QZLmSNYzABpO0n6leVOPo7fRm0e+O5iZ3fz6MS9+78EiGoOAPF+eGN/0vdZ//ZKPNRZtBv11wBpTq8nLn1xyWseIxP3iP7tk+NWf/ro1UtOn71syd9/4PuRz5Wrqu+VT4973Wt3MvH/fd2vwb3uda973ete97rXve51r3vd6173ute97nWve93rXve6173uda97Pf73tfPHidPpT1/xerXa/supJ172oXc/z9k9/MY3w9K8hf83SfLYW8wzyykXZx72i00Gy7L0ux9mWvpl2v36Vd8vuf1TnZvV531iFTE4qkkfUt/NenXDkE/VzqZP+lNX+2zxdmmLHeyrqW6HYdacav2wpYg9rNIPOfjmfF1/sIVPNk1sz130v1rkHMDwgGa59oTpLoLmgGe44QTCDhXLXDLVFqm1ZQYbGn1xsbXEjOBNN3mmqKAAx9KVDfN6kcc7trUIHwbT/CPn6EYfdRHJEecaNLvfDZtbSnVwReMB4uEhgTe7D4j+ue6go7exnGc8Za3p6igiGhBVlnvUW71L+kPHL9Cd6q2Gvindp+mHzbnYnOTWwFHTR/O4RlWOxVWAUEN9kxYROl+r3HkFQkC6ERstbLcFzmk1f4IfdCPG4h+ZNg36M0CD1jjPA6qtErdJNkNMZSAgGrK9T93KOCB605cR0ND3z0A36odhg67+mF3h41/N8pBxjW3vx3L0TJvaWO7dEA8MavT7mOTmB4A8TIMUdyRVMO0lhz+v3UmT/ybWo+6i0fOTWsumFUU/6G2Cv6xjx9MTIGWR/kwJCdHgzwhH2fW10cNTvmT6b7Qm6F1EaK+z6mATtYou6wsFRNb6P3tfDSWkST8Urih3+ooBkL0PLJYG1EfWV6vPjNvUz/jgJQkITYl7BhAEXwvDSAZ/fVpFD1ODd0fdS9fst+0cm7PnxhHqsR+ZvmWZFhGSEC0i4emlSQl5EhAB74MqwWnygxkwvSXI5iAiu1BiB8cgngJE/yK0iKih8CIZelgPUMl5co8Oaw8PAcVzfPKrBGRBHQlT1pIiwioLTX/1uBwQAXg0ai4i1htasWdZbt8WauAtm7R3g4Bs1D8MztK/M/biEXvYNICxnKvwfMq9twkN/1xdFIVoidSz1aDxPG20abuHXibfx2NAyiat7hZJUCf2tYLfDneW9ETbApR5wpOKAIIfVONRJJxpFAhP/4BOL/csNoQN5VW9iHoz+ENPWdPsK6QBD5eNexxvAILNpQB0WmFqT6cM/SkCZEBtEXc40cvafFw0CWkP1SDiHuYGpxynPV/86iq7SkAqwiHx6QNAMN6LOpqvAyJoi+Zq7xUERALrzYDQb0cNe0xCyBUu9yIGDgOcTyvmHe3BErRcJSBgzNuHYFEe9y3EoxghTCpinuTrgIDRHKd9Nwb0uL8nBhA4YybuskcidQqCj3wmDD064ftz47QjICBAFzlZGnza4D2gITFC243aJSKeZwDJU7pOHXaDswWftirLWKBouBFJnXTHU39wLo1nmLQaSYX8rFqG67Im5maoKhMRkAHEfPvhOpVFu3Y8hwemKXkiQl3bg1X6fSTeCAGBqfzNvsJaQzNXRBat51JuFOhMdVnWxNkoyjH2eybbnBovI879q24vfp/6OHuX46Rd/2/4ZcLRV9ttjklIdyYHqL+M9IPgaUwdL2uyJlfl3R0Pj165ec+pNUpum0F6VUIgKtBu/4n3CxV7Hpz1zAez6ElxODpcHAECG1sev82kvl1Hi8Q4NaC5uTRr4nzJVMDpAIJOkTZxRcS9f0FC6Kuf8OHBZfJs9woIHh5XbpPRG0BQ9ZxJcaCv4+goeHNjB2Tx2a4JqF5MK7qPhYNjOyH2JUS/ZvqlDt7Hl21IZb2K47G7nvw6gNBObzzTCCCDTBrn4GONXlRG6jxquTv/nX5fQNy3E9z9sk47tY4XKH3gXgQEvQp1Li0HLrdz8KQLCG11GQyK2aosvc1lc273YFJ87waHYMKmrZmqm/LCrEkQYZKkDilABtfRa1Tg4L8OyFmfsdOX1nFAtK+l/zV4RASQdKi1NdV+DCCiZRGSucuyJtvYXOf1Y4UvHxD6GP7gohOAxAQbtGR5rvSpHxoA0kv3oGFQpI0XsW8Bmc4D0vufi54WBgVgW/RDrxqHMpGe3LwYbRwQ5QCCJ3C4qv8EICoKSC9PTkAiQPoEIHT6Qeklo0NAKCmVvQTIA79y6H3Amzmqy0rpfURbbEGKSIhJZWSu1XsRkOXsjLDQH/NVlo1Z27CSEQIynwdkeISVw25TS2pOuSRnsyYbnzzBnjCA+BLsB7MvpU5MNUac1bBpQExVpQ+ihzckxAcEYpjQSC1ybIYrBaSLxHdKbUTEqKxAPzvQvWxDlrP0ma3KCgHB2FGV+fqZfCP5nsqK5awqCMnqqwQEHOg65jY0kSpbCAhVXVelelxTL9Nx1fCaUQ8A4brmmjjelnAn/ba9DkgBteQpUBPqslJ6PE9CWx863BFA+H1cE2EvAlKf5890B4AgvMrNBYWAVDHxP8uxQ8/aA6m6tJTOmcTt6mQTrXsG+0bvo2LDfgaQqMqCbNoZO6uvHD3Oj5NcDIvBNlrcADKe3sFsk2ilXMGKJ0n3RZVC2uFZpE4GCpz10MuyjqZ9HxEQ9bQN4UztudSJ7+VEJIRvZ94nAGRUQerkpMWaSJbEpnjk2qRkdvzFs03kQJRod+QjrK3D7aVOPL/A0BlPSIjME8nFU24WXRhPLoZJ4caU3AIJIaV/4p1OhYHur0ff3PfIWECHRrKmTpWW66Ra+FnN4nEICDkeZdObCvCL6fcj1pPD366PACHvlAx7hJcFefpTyax43QRrN/2aPmuuK6WDgMjkTNyQWZMABDi82u8rkQ39ak0dNvpMgSp8uRMSYiL2mIRsxSyp0IF+HnFBF+tWIfJqvKqUXkGhJjW4fs6gZnSssiiH0pSUp365pr4gMVCcCGODcmwUECI2laa2W4YlXK0TDkm4WEiN+rPatDBQlGW6LCjEmyVbzTYFy6SEYPq5xFT8S6kTq2P6E/Ry32NNAcKpeAQiwjoBXTSL45CgiXvprZUw4E9dljXB9zrN7KTCmg9IEy8cA1GWHLAXAWER2e+tQI+zDPc2CYjWgqhIY4AUh/PcmSjWJSqnlG8S+2ToV8hYnRB7Jt+r8VvWSSLFBG/4YQk3WVeDoqHaJ8rpA1fCOlASEP78IE+R6A7syq5dp+PCZJkgQxprD+/0dQ0Ic/J9jadtdgDheLUsDHPrWQmhalxJpxDtUUmDLUoDwsQqrZliLW0gPjtmROMBkCV0KPGIQHVCKa+77hiK/bKjwEqOFxWnVNZKBa1fVFlrfB2XEUHtNZsk/Q4gJhndLrGkg/6gJaYg479ZDarcI47O5CjMqUj3pby7PFSjPuGbsgZDUsFDcWR8VUJs6niut0ICu5ZD3jvWVpAEhK1vM6ro75XQlbOILSTY+6Bi3SheklzNWlBKOVeXCYg8SLGhRDgVwT0JMS6Qki8Dgq6qfkDZVm4PDfU1TQPAHeu7yXd7jDoMfKN1cEBE72rtdfvjT2LBXso0E59VXn1pKX04U8b2QtVY+n0bZ77aH7J2NclsmfzJEtOCLU1NjCi6Bwj6AXCwn4y1tBXQzyjLoRbe06ocW9rS8mHCnEYfKHZVKZ329siBRh21itEBIJzTewMQPBIOIJVjlxesCqai70b8yznKt8/VfhfeqOKAAFodtNzqLuilmOhpVVEPGTb9jgf9/0hLa8rrutKHMw40+XeLU37a79JFR/kNQMCattSlrppsgNVljaRe2SXe/bELCLWuJYwlhBEj7r4+K2/Gp0HjNv7FMB29q5pCCem/q4JCpMsUJ8jNciU3U3J9t6tLVysO0u8HXjsY1AF7+Us+Gw7Vh+6TnhKDA8BZHPad91QXgb5hpZUhQcDPwq71xJSCbT+IGq5MK3Znyc3tWg9Uu2JFWdtuzyQdVobAgi/dSHnOBs+RHLt+eqQcqf4gUYish73RGvkwwkGMdPibPmCyaydxPICGLeZVpXQcC3PKHBUwOMaOZtC1kuLwxvXOzeq8OjULaKrzFobPdF3b19PeiJ4pP/pMVb5zqJd9WMcPK87OA5r0PJ1c/F8Gd4VjrC6Yv3QwDMqdmfWPhpU9np9q9uaIs/PjvZ4bYHbFiDN7RPn1e3ive93rXve6173uda973ete97rXve51r8cfGuEfzeok/nJ3Tn9siv+px4tXP+J3nWHvfosf/EZCvP548Tg/tP/TQdGfX1RFD4Pq+6LafJ+i31ZGpr6ngkhRb5Yu0RS2xmFXUeCpBXH61EPoycew6kokKor6I9Z4ST5tb+M+Xj/n8fhoRPQWFG1WSjMwvw4GpneR5p6auzGRFcbT1kv7kxnrs9h/hLLqmA2xiiFw5xaYDU4j9Ie8ijJ8825s+JKuDy8Bcp+d+j5uvsKn4TFB9VtzEVp92oPmapSDX6QfIv3WNU/XEbpER0sXUEfz89wTIJqhOXd2wYZm7XYOFtbDy27Qp1EMc0OV8E1JWf+DmvEjdvrDhlP2s/XZHQyZD7/CZ+GRax5MZ4qjU67RGb2C+R4gD7fQHpnF6/Lgp7rX25qF82H1ZGXN4Cq4zFcs+mSCRYSEUBgjz4Pd9SWapOWzrWZ3PlmRa8zG+kMR0bumR47nbp2tnn0q2xBTWSEg4gAQ/m+vJdBvugGaW1s5xcWikwG5TY9eVl3hXKIBUt4lc8CPyMdmnD4Wj3J2qTmCZk87L9gpCUkA4vGdBN3bG8cAFLDc8SMEtkr5IwT0r7TBJb3P3PEBETigf/hEEUEGVtjMAT0VyhlFk5SQkIvX7qssO2l8JdnhQIeAuk6I9O5IDRjRE1zSexytedPi3l7XMfi7gAzRyWqTO6aouxAQag9Zm5F1K3aE5ax9N3N7ZOPHeg+9D74FRHfo5p8HCGxsjPatHVZnMGaXUlnHgETmuGP/jWW1zrFuTABhZfXFXhmiXw9JQBDT5RMBGRJ9EZXjt7whISo60K7jh4KDV6amm5pLtNFvU6PgLVBzbAjEJxqRak4dj9Cuow8uB6RWdjhDfMwrtu/kJpYZp0TH5vrZvwQQ2JpUe3O9crivVVnUYsfzS7pUG4B+U3pzyZx8mbo0INUnqix4/VKNKtqsG2UyXAuIfXsBmVRLu4XK1Z0bIe5WrRoZbtR/JCDpofT2C10NCFgIAqRINdAKqyetqBxo1RCQQY7FBwKyJAFxRP56QNoVkCKx2wNbF90EmD8JCASO+WUtH39IQv4GIOclxKlPaTw+UEDSLgyNPsotIPOVXhbe0diQ5k0b4gDiNHx0zWcmF8G7THtZsuBJbnFAsje8LJMH0CmaQy9rTnlZonO9LJ1+p17GDrq2ymH6zEyW1tBtKg5hEYAfI4DINwApjuOQujFxyBJ3BLEvb41DVKPsucRlMxQfWqCCtz9LRep2+KTekog3kFUv5bL4odPpSL2O9/Rjh7kTqXeFLRVnIDmfWgxJ5bL0mKbcAKL7Y+twqzdx8GlAMERobS4rPpKptm8/3DeLH67k2I3ZPVugvqzr/A9lezNnOI4ex7pscqnb6TFPZHvXVG402wvDbd1sb/RAgcGdlzC7A9yglP+59UI9ISFWD3GSvVvQ0OOcHq/VQ8SgVnzhtzaXbOshkUOydD2kTdVDwBGoPhYRPbsFzq11K4ZiaLyx7Lq3vlutJNbj1HaA6DEgWDHUeLjnc+lk7lj7h0pjxVB4FUOviMWBn+sOdME8sPIz64XmXWtmW7CmonZ4xuAi4VRye1a5ro9m0+O0hLgRm67Xy1YEIlr2bk19GsJTrGHiWes8X8/tKJV3bFYgIaAJ809GRH/fwmiIotV8niXwUlp93JgZFQAjfcYIUycOiHsoCTJaytAewWlUc28AnjSlpByqsOzrXdJrVDtPic7h2PiPTGWtbkmnB1J0w6KHPQwzcIK2lngBMtTQ9n0LI326eNkpEoeUSNnikE1HbOOwvffUllJlevpCjndv5jxO3cqGNq/pA4yLH2jM4dkC03zd4V7/Ij7Mu9GEVZo6KGLB3JAxObCco6fJxwBZpLdGPT8pwlzUSrI1N9eEuT7KXNTkxtJcMi+hY5gF6TasE7ePz0VEc2s1tbdtNXO2Sk930VcA+zcx0iVfNhTgAsm4S9/r/+v7Grm9In1zzV2Eu8dTBw9R0yVL5JLts4V+pvhkeu/jgFvuEdSvpr+LY2p7SAN6/F/aQ8Qr7RnJNhJxunED//3c88WpZ98DTO51r3vd6173utfh+g+jS1pspJVC4wAAAABJRU5ErkJggg=="});var Uv=Yp(()=>{Tt();od();ud();fd();pd();md();yd();bd();Cd();Ua();zd();Hd();Wd();Zd();sp();mp();gp();_p();var S={produkt:"tds",montage:"wand",b:600,t:350,eind:"klar",blech:"standard",farbe:"7016",seiteL:!1,seiteR:!1,front:!1,h:245,festVHalb:!1,easyRail:!1,eingang:!1,flModell:"200",flAusf:"nur",flSeite:"rechts",flDesign:"anthrazit",treppe:!1,treppeH:100,schiebL:null,schiebR:null,festV:!1,verkWand:"hinten",dachMark:"keine",zipV:!1,zipL:!1,zipR:!1,spWinkel:45,spSeite:!1,spRegen:!1,spTahoma:!1,spFb:!1,velV:"keine",velL:"keine",velR:"keine",velLam:"7016",velAuf:0,glasAuf:0,velSpuren:"2",stoffDach:"AC626",stoffZip:"T30808",plisseeStoff:"Hellgrau",plisseeProfil:"anthrazit",ausfahren:85,boden:"platten",led:!1,ledAnz:0,ledBand:0,frontArt:"sg23",abend:!1,masse:!0,preis:!1},qh=()=>({an:!1,art:"zaun",richt:"waagerecht",abst:"35",farbe:"7016"});S.verk={hinten:qh(),links:qh(),rechts:qh()};var rs={hinten:"R\xFCckseite",links:"Links",rechts:"Rechts"};for(let[n,e]of[["verkAn","an"],["verkArt","art"],["verkRicht","richt"],["verkAbstand","abst"],["verkFarbe","farbe"]])Object.defineProperty(S,n,{get:()=>S.verk[S.verkWand][e],set:t=>{S.verk[S.verkWand][e]=t}});var $a={tds:{name:"Terrassendach TDS",b:[200,1400],t:[100,500],h:[200,350],eind:["klar","matt","poly"]},skyview:{name:"Flachdach SkyView",b:[200,1400],t:[150,500],eind:["klar","matt","poly"]},carport:{name:"Carport Flat Line",b:[300,1400],t:[200,700],eind:[]},sunpro:{name:"Lamellendach SunPro Plus",b:[150,700],t:[200,400],eind:[]},fly:{name:"Glas-Vordach Fly",b:[100,300],t:[50,100],eind:["klar","matt"]},frontline:{name:"Vordach Front Line",b:[160,250],t:[90,125],eind:[]}},Fn=()=>S.produkt==="fly"||S.produkt==="frontline",$r=()=>S.produkt==="tds"&&S.eingang?"Eingangs\xFCberdachung TDS":$a[S.produkt].name,Js={7016:["Anthrazit",3685954],9006:["Wei\xDFaluminium",10856614],9007:["Graualuminium",9211016],9010:["Reinwei\xDF",15855073]},xp={sunpro:"Drehbare Kammerlamellen",klar:"VSG-Glas klar",matt:"VSG-Glas opal",poly:"Polycarbonat 16 mm",standard:"Trapezblech",vlies:"Trapezblech + Antikondensvlies"},Wa=document.getElementById("viewer"),on=new Zo({antialias:!0,preserveDrawingBuffer:!0}),Xa=window.matchMedia("(max-width: 760px)").matches||window.matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820;on.setPixelRatio(Math.min(window.devicePixelRatio,Xa?1.5:2));on.shadowMap.enabled=!0;on.shadowMap.type=lh;on.toneMapping=Pr;on.outputColorSpace=dt;Wa.appendChild(on.domElement);var Za=new Ta;Za.domElement.className="labels";Wa.appendChild(Za.domElement);var Ot=new Jo,vp=new ks(on),Zr={tag:Nh(!1),abend:Nh(!0)},Qh={tag:vp.fromEquirectangular(Zr.tag).texture,abend:vp.fromEquirectangular(Zr.abend).texture};Ot.environment=Qh.tag;var rn=new Gt(40,1,.1,800),Jt=new ba(rn,on.domElement);Jt.enableDamping=!0;Jt.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN};Jt.maxPolarAngle=Math.PI*.495;Jt.minDistance=3;Jt.maxDistance=60;var eu=new ha(14675967,9079938,.8);Ot.add(eu);var zn=new da(16774368,2.6);zn.position.set(9,14,12);zn.castShadow=!0;zn.shadow.mapSize.set(Xa?1536:4096,Xa?1536:4096);zn.shadow.bias=-4e-4;zn.shadow.normalBias=.02;Object.assign(zn.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60});Ot.add(zn,zn.target);var ri=null,zr=null;if(!Xa){let n=new Wt(1,1,{type:Mn,samples:4});ri=new Ca(on,n),ri.addPass(new Pa(Ot,rn)),zr=new Or(Ot,rn,1,1),zr.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1.2,scale:1.1,samples:16}),zr.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),zr.blendIntensity=.85,ri.addPass(zr),ri.addPass(new Da)}function Ap(){ri?ri.render():on.render(Ot,rn)}function Ha(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new _n(s);return r.colorSpace=dt,i&&(r.wrapS=r.wrapT=St,r.repeat.set(i[0],i[1])),r.anisotropy=8,r}var Yh={rasen:Ha(256,256,(n,e,t)=>{n.fillStyle="#5f8f3e",n.fillRect(0,0,e,t);for(let i=0;i<4e3;i++)n.fillStyle=`hsl(${85+Math.random()*25},${35+Math.random()*25}%,${26+Math.random()*18}%)`,n.fillRect(Math.random()*e,Math.random()*t,1.5,3)},[40,40]),platten:Ha(512,512,(n,e,t)=>{let s=e/4;for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=70+Math.random()*6;n.fillStyle=`hsl(35,6%,${a}%)`,n.fillRect(r*s,o*s,s,s);for(let l=0;l<300;l++)n.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,n.fillRect(r*s+Math.random()*s,o*s+Math.random()*s,2,2)}n.strokeStyle="#8d8a84",n.lineWidth=3;for(let r=0;r<=4;r++)n.beginPath(),n.moveTo(r*s,0),n.lineTo(r*s,t),n.stroke(),n.beginPath(),n.moveTo(0,r*s),n.lineTo(e,r*s),n.stroke()}),pflaster:Ha(512,512,(n,e,t)=>{for(let r=0;r<t/32;r++)for(let o=-1;o<e/64+1;o++){let a=50+Math.random()*10,l=o*64+r%2*64/2,c=r*32;n.fillStyle="#3d3b38",n.fillRect(l,c,64,32);let h=n.createLinearGradient(l,c,l,c+32);h.addColorStop(0,`hsl(30,5%,${a+6}%)`),h.addColorStop(.15,`hsl(30,4%,${a}%)`),h.addColorStop(1,`hsl(30,4%,${a-7}%)`),n.fillStyle=h,n.fillRect(l+2,c+2,60,28);for(let f=0;f<40;f++)n.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,n.fillRect(l+2+Math.random()*58,c+2+Math.random()*26,1.5,1.5)}}),putz:Ha(256,256,(n,e,t)=>{n.fillStyle="#f2f0eb",n.fillRect(0,0,e,t);for(let i=0;i<6e3;i++)n.fillStyle=`rgba(0,0,0,${Math.random()*.035})`,n.fillRect(Math.random()*e,Math.random()*t,1,1)},[6,3])};Ot.background=Zr.tag;Ot.backgroundRotation=new fn(0,2.2,0);Ot.environmentRotation=new fn(0,2.2,0);Ot.fog=new Ko(13623791,50,190);var tu=Td(),Rp=wd(),Te={rahmen:new yn({color:Js[S.farbe][1],metalness:.25,roughness:.48,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.9}),nut:new Fe({color:1908770,roughness:.7}),pvc:new Fe({color:2895665,roughness:.55}),stufe:new Fe({color:12894650,roughness:.85}),stufeKante:new Fe({color:10394516,roughness:.9}),sockelStein:new Fe({color:9144708,roughness:.95}),dichtung:new Fe({color:1118739,roughness:.9}),dielen:new Fe({map:Rp.map,roughness:.75}),klar:new yn({color:13625066,transparent:!0,opacity:.16,roughness:.02,metalness:0,ior:1.52,specularIntensity:1,side:_t,depthWrite:!1,envMapIntensity:2.2}),glasKante:new Fe({color:7314574,transparent:!0,opacity:.55,roughness:.1}),matt:new yn({color:16119282,transparent:!0,opacity:.86,roughness:.75,side:_t,depthWrite:!1}),poly:new yn({color:15660020,transparent:!0,opacity:.6,roughness:.35,side:_t,depthWrite:!1}),wandglas:new yn({color:13625066,transparent:!0,opacity:.13,roughness:.02,ior:1.52,side:_t,depthWrite:!1,envMapIntensity:2.4}),rasen:new Fe({map:Yh.rasen,roughness:1}),platten:new Fe({map:tu.map,roughnessMap:tu.rough,roughness:.8}),pflaster:new Fe({map:Yh.pflaster,roughness:.95}),putz:new Fe({map:Yh.putz,roughness:.95}),dach:new Fe({color:3882820,roughness:.8}),fensterRahmen:new Fe({color:3817026,roughness:.5,metalness:.2}),fensterGlas:new yn({color:2371898,roughness:.05,metalness:.1,envMapIntensity:2}),stoff:new Fe({color:7238261,roughness:.95}),kissen:new Fe({color:14208440,roughness:.95}),holz:new Fe({color:9071178,roughness:.7}),hecke:Rd(),stamm:new Fe({color:5981750,roughness:1}),laub:new Fe({color:5209910,roughness:1}),paneel:new Fe({color:Js[7016][1],metalness:.3,roughness:.5}),fuge:new Fe({color:1842720,roughness:1}),blech:new Fe({color:6449778,metalness:.6,roughness:.32,side:_t}),vlies:new Fe({color:15658214,emissive:3815734,roughness:1,side:_t}),led:new Fe({color:16777215,emissive:16773584,emissiveIntensity:0})};Te.glas=()=>Te[S.eind]||Te.klar;function Ae(n,e,t,i,s=0,r=0,o=0,a){let l=Math.min(n,e,t),c=l>=.012&&!i.transparent,h=new Oe(c?new wa(n,e,t,2,Math.min(.005,l*.22)):new bt(n,e,t),i);return h.position.set(s,r,o),h.castShadow=!0,h.receiveShadow=!0,a&&a.add(h),h}var Xr=new pt;Ot.add(Xr);Xr.add(Ed());var Cp={};for(let[n,e]of[["hell",Wh],["dunkel",Xh]])Cp[n]=new Ar().load(e,t=>{t.colorSpace=dt,t.anisotropy=8});var uv=new Fe({color:12106944,metalness:.9,roughness:.3});function fv(n,e,t,i,s){let c=new Kt([[0,0],[.16999999999999998,0],[.205,-.035],[.205,-.135],[.18,-.16],[0,-.27]].map(([v,x])=>new ne(v,x))),h=new yi(c,{depth:.004,bevelEnabled:!0,bevelThickness:.001,bevelSize:.001,bevelSegments:1}),f=new Oe(h,Te.rahmen);f.castShadow=!0,f.rotation.y=-Math.PI/2,e<0&&(f.scale.z=-1),f.position.set(t+e*.005,s,i-.205),n.add(f);let m=t+e*.0065;for(let[v,x]of[[.205-.016,-.02],[.205-.016,-.16+.035],[.03,-.035],[.03,-.27+.05]]){let M=new Oe(new vn(.0045,.0045,.003,12),uv);M.rotation.z=Math.PI/2,M.position.set(m,s+x,i-.205+v),n.add(M)}let g=Te.rahmen.color,d=.2126*g.r+.7152*g.g+.0722*g.b>.25,_=new Fe({map:Cp[d?"dunkel":"hell"],transparent:!0,opacity:d?.8:.7,roughness:.7,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),p=.1,u=new Oe(new Pn(p,p*349/400),_);u.rotation.y=e*Math.PI/2,u.position.set(m+e*2e-4,s-.075,i-.085),u.renderOrder=4,n.add(u)}var dv=new Fe({map:new Ar().load(Xh,n=>{n.colorSpace=dt,n.anisotropy=8}),transparent:!0,opacity:.75,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function yp(n,e,t,i,s){let r=new Oe(new Pn(s,s*580/664),dv);r.rotation.x=-Math.PI/2,r.position.set(e,t,i),r.receiveShadow=!0,r.renderOrder=1,n.add(r)}function pv(n){let e=Fn()||S.produkt==="tds"&&S.eingang;return Ad(n,Ae,S.b/100,os()?Ka():e?{H:0,tuerX:0}:null)}function mv(n){let e=new pt,t=n/2+7;for(let s of[-1,1])Ae(1.1,1.8,22,Te.hecke,s*t,.9,9,e);Te.hecke.map.repeat.set(10,1);let i=(s,r,o)=>{let a=new Oe(new vn(.15*o,.2*o,2.4*o,8),Te.stamm);a.position.set(s,1.2*o,r),a.castShadow=!0,e.add(a);let l=new Oe(new ra(1.7*o,1),Te.laub);l.position.set(s,3.4*o,r),l.castShadow=!0,e.add(l)};return e}function cu(n,e,t,i){let s=kh[n][e],r=t*10,o=i*10,a=s.b.findIndex(h=>h>=r),l=s.t.findIndex(h=>h>=o);a<0&&(a=s.b.length-1),l<0&&(l=s.t.length-1);let c=Od[n]?.[e==="poly"?"poly":"glas"]?.[s.b[a]]||null;return{preis:s.p[l][a],sparren:c?c[0]:null,stuetzen:c?c[1]:null}}var Mp=1600,gv=7;function _v(){let n=Math.max(1,Math.ceil(S.b/100/gv-1e-9)),t=(S.produkt==="carport"?Object.values(S.verk).some(i=>i.an):S.seiteL||S.seiteR||S.front||S.festV||S.schiebL||S.schiebR||[S.velV,S.velL,S.velR].some(i=>i!=="keine")||S.produkt==="tds"&&(S.verk.links.an||S.verk.rechts.an))?1:0;return{dach:n,extra:t,tage:n+t,preis:(n+t)*Mp,info:`${n} Tag${n>1?"e":""} Dach${t?" + 1 Tag "+(S.produkt==="carport"?"Verkleidung":"Verglasung/Seitenelemente"):""} \xE0 ${Mp.toLocaleString("de-DE")} \u20AC`}}var Pp=73;function hu(n,e,t){if(!n)return null;let i=n.x.findIndex(r=>r>=e-.5),s=n.y.findIndex(r=>r>=t-.5);return i<0||s<0?null:n.p[s][i]??null}function xv(){let n=S.t/100;if(S.produkt==="tds"){let i=S.h/100,s=i+n*Math.tan(Ln.degToRad(8));return{seiteB:S.t,seiteH:(i-.135-js-.06)*100,seiteH2:(s-.13-.06)*100,frontH:(i-.22)*100,seiteRechtH:(i-.135-js-.06)*100}}let e=S.produkt==="sunpro"?nn.H:2.7,t=S.produkt==="sunpro"?nn.fh:.22;return{seiteB:S.t-14,seiteH:(e-t-.06)*100,seiteH2:(e-t-.06)*100,frontH:(e-t-.1)*100,seiteRechtH:(e-t-.06)*100}}function Sp(n,e,t,i){let s=i?[["s-1hs","schr\xE4g mit Quersprosse"],["s-1vs1hs","schr\xE4g, 1 senkr. + 1 waag. Sprosse"],["s-2vs1hs","schr\xE4g, 2 senkr. + 1 waag. Sprosse"],["s-3vs1hs","schr\xE4g, 3 senkr. + 1 waag. Sprosse"]]:[["os","ohne Sprosse"],["1vs","1 Sprosse"],["2vs","2 Sprossen"],["3vs","3 Sprossen"]];for(let[r,o]of s){let a=hu(Na.fr23[r],n*10,e*10);if(a!=null)return{rahmen:a,glas:n*(e+t)/2/1e4*Pp,name:o}}return null}var Br={sg23:{name:"Glas-Schiebewand SG23 rahmenlos (ESG 10 mm)",kurz:"rahmenlos",var:[["3-2",2],["3-3",3],["3-4",4],["5-5",5],["3-6",6]]},sc23:{name:"Rahmen-Schiebeanlage SC23 (Alu-Rahmen, VSG 6 mm)",kurz:"mit Rahmen",var:[["2-2",2],["3-3",3],["2-4",4],["3-6",6]]}};function qa(n,e,t=S.frontArt){let i=Br[t],s=Math.ceil(n/650),r=n/s;for(let[o,a]of i.var){let l=hu(Na[t][o],r*10,e*10);if(l!=null)return{preis:l*s,fluegel:a*s,teile:s,schienen:+o.split("-")[0]}}return null}var os=()=>S.produkt==="tds"&&S.eingang&&S.treppe;function Ka(){let n=S.b/100,e=S.treppeH/100,t=Math.max(1,Math.round(e/.175)),i=e/t,s=Math.min(1,n*.4),r=n/2-.07,o=-n/2,a=r-s,l=(a-o)/t;return{w:n,H:e,n:t,steig:i,podest:s,xS:o,xE:a,xR:r,auftritt:l,linie:h=>.06+Math.min(e,Math.max(i,i*(1+(h-o)/l))),tuerX:r-s/2}}function vv(n,e,t){let i=Ka(),s=e-.05;for(let r=0;r<i.n;r++){let o=i.xS+i.auftritt*r,a=.06+i.steig*(r+1);Ae(i.xR-o,i.steig,s,Te.stufe,(o+i.xR)/2,a-i.steig/2,t+s/2,n),Ae(.03,.012,s,Te.stufeKante,o+.015,a-.006,t+s/2,n)}}function Ip(){let n=S.t/100,e=S.b/100,t=S.montage==="frei",i=t?.06:0,s=t?i+.075:i+.005,r=i+n-.035;return{zA:s,zE:r,L:r-s,x:e/2-.03,hoch:S.h/100+n*Math.tan(Ln.degToRad(8))-.19}}function Ja(){let n=S.b/100,e=S.t/100,t=S.produkt,i=S.montage==="frei",s=i?.06:0,r,o,a,l=null,c,h;if(t==="sunpro"){let g=Qi(S,ji);o=nn.pf,a=s+e-o/2,g.frei&&(l=s+o/2),r=g.frei?g.gesamt>=6?[-(n/2-o/2),0,n/2-o/2]:[-(n/2-o/2),n/2-o/2]:Array.from({length:g.gesamt},(d,_)=>-n/2+o/2+(n-o)*(g.gesamt>1?_/(g.gesamt-1):.5)),c=h=nn.H-nn.fh}else{let g=cu(t,S.eind,S.b,S.t);r=Wn(g?.stuetzen||Math.max(2,Math.ceil(n/4)+1),n),t==="tds"?(o=.11,a=s+e+.02,i&&(l=s+.02),c=S.h/100-.135,h=c-js):(o=.12,a=s+e-.02,i&&(l=s+.04),c=h=2.7-.22)}let f=[];for(let g=0;g<r.length-1;g++)f.push({x:(r[g]+r[g+1])/2,b:r[g+1]-r[g]-o});let m=Math.max(...r.map(Math.abs))+o/2;return{felder:f,pb:o,xA:m,xC:m-o/2,zC:a,zPf:a+o/2,z1:l!=null?l+o/2:s+.045,z2:a-o/2,hF:c,hS:h,wand:l==null?s:null}}var js=.15;function Ya(){return S.produkt!=="tds"?[]:[["links",S.velL!=="keine"||S.zipL||S.schiebL,S.seiteL],["rechts",S.velR!=="keine"||S.zipR||S.schiebR,S.seiteR]].filter(([,n,e])=>n&&!e).map(([n])=>n)}function yv(n,e,t){for(let[i,s]of[["s-os","ohne Sprosse"],["s-1vs","1 Sprosse"],["s-2vs","2 Sprossen"],["s-3vs","3 Sprossen"]]){let r=hu(Na.fr23[i],n*10,e*10);if(r!=null)return{rahmen:r,glas:n*(e+t)/2/1e4*Pp,name:s}}return null}function Lp(){if(Fn()){let _=Bh(S,zh),p=800,u=Ji.lieferung,v=_.preis+p+u;return{dach:_.preis,dachInfo:_.info,mont:p,montInfo:"Montage Vordach pauschal",lief:u,led:null,verk:null,glas:null,mark:null,vel:null,spx:null,spOffen:!!_.offen,netto:v,brutto:v*(1+Ji.mwst),hinweis:!1}}let n=S.produkt==="sunpro",e=n?Qi(S,ji):null,t=S.produkt==="carport"?S.blech:S.eind,i=n?{preis:e.preis??0,sparren:3,stuetzen:e.front}:cu(S.produkt,t,S.b,S.t),s=i.preis*(S.montage==="frei"&&S.produkt==="tds"||S.montage==="frei"&&S.produkt==="skyview"?Ji.freistehend:1),r=n?Vd(S,ji):null,o=_v(),a=o.preis,l=null;if(S.produkt==="tds"&&(S.verk.links.an||S.verk.rechts.an)){let _=Ip(),p=[];for(let u of["links","rechts"])if(S.verk[u].an){let v=[.03,_.L-.03],x=Ks(v);p.push({name:rs[u],c:S.verk[u],L:_.L,extra:x.length,stuetzen:[...v,...x].sort((M,R)=>M-R)})}l=Ep(p,_.hoch)}if(S.produkt==="carport"&&Object.values(S.verk).some(_=>_.an)){let _=S.b/100,p=S.t/100,u=[],v=(x,M,R)=>{let T=Ks(R);return{name:rs[x],c:S.verk[x],L:M,extra:T.length,stuetzen:[...R,...T].sort((w,C)=>w-C)}};for(let x of Object.keys(rs))S.verk[x].an&&u.push(v(x,x==="hinten"?_:p,ou(x==="hinten"?"hinten":"seite",_,p)));l=Ep(u,2.45-.22-.05)}let c=null,h=Ya();if(S.produkt!=="carport"&&(S.seiteL||S.seiteR||S.front||S.festV||S.schiebL||S.schiebR||h.length)){let _=xv(),p=[],u=0,v=!1;if(h.length){let C=js*100,U=C+(_.seiteH2-_.seiteH),y=yv(_.seiteB,U,C);y?(u+=h.length*(y.rahmen+y.glas),p.push(`${h.length} \xD7 Keil-Festverglasung FR23 schr\xE4g ${y.name} (${h.join(" + ")}, ${Math.round(_.seiteB)} \xD7 ${Math.round(U)}/${Math.round(C)} cm) inkl. VSG 8 mm klar \u2013 automatisch \xFCber Seitenelement`)):(v=!0,p.push("Keil-Festverglasung: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage"))}let x=(S.seiteL?1:0)+(S.seiteR?1:0);if(x){let C=Sp(_.seiteB,_.seiteH,_.seiteH2,S.produkt==="tds");C?(u+=x*(C.rahmen+C.glas),p.push(`${x} \xD7 Festverglasung FR23 ${C.name} (${Math.round(_.seiteB)} \xD7 ${Math.round(_.seiteH)} cm) inkl. VSG 8 mm klar`)):(v=!0,p.push(`${x} \xD7 Festverglasung FR23: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}let M=Ja(),R=M.felder.length,T=C=>R>1?` Feld ${C+1}/${R}`:"";S.front&&M.felder.forEach((C,U)=>{let y=Math.round(C.b*100),b=qa(y,_.frontH);b?(u+=b.preis,p.push(`${Br[S.frontArt].name} vorne${T(U)} \xB7 ${b.teile>1?b.teile+" Anlagen \xE0 ":""}${b.fluegel/b.teile} Fl\xFCgel, ${b.schienen}-gleisig (${y} \xD7 ${Math.round(_.frontH)} cm)`)):(v=!0,p.push(`${Br[S.frontArt].name} vorne${T(U)} (${y} cm): Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))});let w=Math.round((M.z2-M.z1)*100);for(let[C,U]of[["links",S.schiebL],["rechts",S.schiebR]])if(U){let y=qa(w,_.seiteRechtH,U);y?(u+=y.preis,p.push(`${Br[U].name} ${C} \xB7 ${y.fluegel} Fl\xFCgel, ${y.schienen}-gleisig (${w} \xD7 ${Math.round(_.seiteRechtH)} cm)`)):(v=!0,p.push(`${Br[U].name} ${C}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}S.festV&&S.easyRail?(v=!0,p.push("Glasgel\xE4nder Easy Rail vorne (ESG/TVG 17,8 mm, Handlauf) \u2013 Preis nach Aufma\xDF")):S.festV&&M.felder.forEach((C,U)=>{let y=S.festVHalb?Math.round(_.frontH/2):Math.round(_.frontH),b=Math.round(C.b*100),D=Sp(b,y,y,!1);D?(u+=D.rahmen+D.glas,p.push(`Festverglasung FR23 vorne${S.festVHalb?" (halbe H\xF6he)":""}${T(U)} ${D.name} (${b} \xD7 ${y} cm) inkl. VSG 8 mm klar`)):(v=!0,p.push(`Festverglasung vorne${T(U)}: Ma\xDF au\xDFerhalb der Preisliste \u2013 auf Anfrage`))}),c={preis:u,info:p.join(`
`),offen:v}}let f=null;if(S.produkt!=="carport"&&(S.dachMark!=="keine"&&S.produkt!=="sunpro"||S.zipV||S.zipL||S.zipR)){let _=i.stuetzen||Math.max(2,Math.ceil(S.b/400)+1),p=i.sparren||Math.max(3,Math.round(S.b/75)+1);f=fp(Gh(S,kr(S,_,p,Wn)),Fd,S)}let m=null;if(S.produkt!=="carport"&&[S.velV,S.velL,S.velR].some(_=>_!=="keine")){let _=i.sparren||Math.max(3,Math.round(S.b/75)+1),p=i.stuetzen||Math.max(2,Math.ceil(S.b/400)+1);m=Yd(Hh(S,Fp(kr(S,p,_,Wn))),kd,S)}let g=S.produkt!=="sunpro"&&S.ledAnz>0?{preis:S.ledAnz*su,info:`${S.ledAnz}er-Set LED-Spots \xE0 ${su} \u20AC (je 2 Spots in ${S.ledAnz/2} Sparren, Randsparren ohne LED)`}:null,d=s+a+Ji.lieferung+(g?g.preis:0)+(l?l.preis:0)+(c?c.preis:0)+(f?f.preis:0)+(m?m.preis:0)+(r?r.preis:0);return{dach:s,mont:a,montInfo:o.info,lief:Ji.lieferung,led:g,verk:l,glas:c,mark:f,vel:m,spx:r,spOffen:n&&e.preis==null,netto:d,brutto:d*(1+Ji.mwst),hinweis:S.produkt!=="carport"&&S.t>405}}var as=null,ii=null,qr=null,Ri=null,uu=[],Ci=null,ls=null,si=null,$s=null,Zs=null,$h=null,nu=[],Dp=0,ns=2.5,kn=n=>(n/100).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})+" m";function Up(n,e,t,i,s=""){let r=document.createElement("div");r.className="mass "+s,r.textContent=n;let o=new Ea(r);return o.position.set(e,t,i),o}function Va(n,e,t,i){let s=new yr({color:12884781}),r=[e,t];n.add(new Mr(new Ct().setFromPoints(r),s));let o=new L().subVectors(t,e).normalize(),a=new L(-o.z,0,o.x).multiplyScalar(.18);for(let c of[e,t])n.add(new Mr(new Ct().setFromPoints([c.clone().add(a),c.clone().sub(a)]),s));let l=e.clone().add(t).multiplyScalar(.5);n.add(Up(i,l.x,l.y+.05,l.z))}function Wn(n,e){if(n<=1)return[0];let t=[],i=-e/2+.07,s=(e-.14)/(n-1);for(let r=0;r<n;r++)t.push(i+r*s);return t}function Bt(){uu=[],$s&&(Ot.remove($s),$s.traverse(u=>{u.geometry&&u.geometry.dispose(),u.element&&u.element.remove()})),$s=new pt,Ot.add($s),nu=[];let n=S.b/100,e=S.t/100,t=S.produkt,i=S.montage==="frei"||t==="carport",s=t==="carport"?1.6:i?.06:0;Dp=s;let r=Math.max(14,n+7),o=r+"|"+S.b+"|"+(os()?S.treppeH:0)+"|"+(Fn()||S.eingang&&t==="tds"?"tuer":"");if(!Zs||Zs.userData.b!==o){for(let u of[Zs,$h])u&&(Xr.remove(u),u.traverse(v=>v.geometry?.dispose()));Zs=pv(r),Zs.userData.b=o,Xr.add(Zs),$h=mv(r),Xr.add($h)}let a=$s;if(t==="carport"){let u=new Oe(new Pn(n+2,e+6),Te.pflaster);u.rotation.x=-Math.PI/2,u.position.set(0,.012,s+(e+6)/2-.5),u.receiveShadow=!0,a.add(u),Te.pflaster.map.wrapS=Te.pflaster.map.wrapT=St,Te.pflaster.map.repeat.set((n+2)/2,(e+6)/2),yp(a,0,.014,s+e/2,Math.min(n*.6,e*.75*664/580,3.2))}else{let u=n+1.2,v=e+(i?1.2:.8),x=i?s+e/2:v/2,M=S.boden==="dielen",R=M?Rp:tu,T=M?Te.dielen:Te.platten,w=new Oe(new bt(u,.06,v),T);w.position.set(0,.03,x),w.receiveShadow=!0,a.add(w);for(let C of[R.map,R.rough].filter(Boolean))C.repeat.set(u/R.groesse,v/R.groesse),M&&(C.rotation=0);Ae(u+.08,.05,.08,Te.sockelStein,0,.025,x+v/2+.04,a);for(let C of[-1,1])Ae(.08,.05,v+.08,Te.sockelStein,C*(u/2+.04),.025,x,a);yp(a,0,.062,s+e/2,Math.min(n*.6,e*.75*664/580,3.2))}if(Fn()){as=qr=ls=null,ns=Bd(a,S,s,Ae,Te,ru),S.masse&&(Va(a,new L(-n/2,.08,s+e+.6),new L(n/2,.08,s+e+.6),"Breite "+kn(S.b)),Va(a,new L(n/2+.6,.08,s),new L(n/2+.6,.08,s+e),"Tiefe "+kn(S.t))),Tp(),wp();return}let l=Te.rahmen,c=t==="sunpro"?Qi(S,ji):null,h=t==="carport"?null:t==="sunpro"?{sparren:3,stuetzen:c.front}:cu(t,S.eind,S.b,S.t),f=h?.sparren||Math.max(3,Math.round(n/.75)+1),m=h?.stuetzen||Math.max(2,Math.ceil(n/4)+1);t==="carport"&&(m=Op(n));let g=Wn(f,n-.02),d,_,p=[];if(t==="tds"){let u=Ln.degToRad(8);d=S.h/100;let v=e*Math.tan(u);_=d+v;let x=Math.hypot(e,v);if(i){Ae(n+.04,.18,.15,l,0,_-.04,s-.02,a);for(let y of Wn(m,n))Ae(.11,_-.13,.11,l,y,(_-.13)/2+.06,s+.02,a)}else{Nn(Fh,n,l,!0,a).position.set(0,_-.02,s);for(let b of[-1,1]){let D=Nn(Fh,.004,l,!0,a);D.position.set(b*(n/2+.002),_-.02,s),D.scale.set(1,1.03,1.03)}Ae(n,.012,.004,Te.dichtung,0,_-.09,s+.002,a)}let M=d-.135,R=s+e-.04;Nn(Ld,n+.06,l,!0,a).position.set(0,M,R);for(let y of[-1,1])Nn(Dd,.004,l,!0,a).position.set(y*(n/2+.032),M,R);for(let y of[-1,1])fv(a,y,y*(n/2+.034),R+.175,M+.215);let w=Wn(m,n);w.forEach((y,b)=>{Ae(.11,M,.11,l,y,M/2,s+e+.02,a),(b===0||b===w.length-1)&&Zh(a,y,s+e+.075)});let C=(d+_)/2;g.forEach((y,b)=>{let D=Ae(.06,.12,x+.04,l,y,C-.065,s+e/2,a);D.rotation.x=u;let O=Nn(Ud,x+.02,l,!1,a);O.position.set(y,C+.009,s+e/2),O.rotation.x=u,b===0||b===g.length-1?O.scale.x=.85:p.push(y)});for(let y=0;y<g.length-1;y++){let b=g[y+1]-g[y]-.03,D=Ae(b,.01,x-.02,Te.glas(),(g[y]+g[y+1])/2,C+.002,s+e/2,a);if(D.rotation.x=u,D.castShadow=S.eind!=="klar",D.renderOrder=2,S.eind!=="poly"){let O=Ae(b,.01,.006,Te.glasKante,D.position.x,C+.002-Math.sin(u)*(x/2-.013),s+e/2+Math.cos(u)*(x/2-.013),a);O.rotation.x=u}}ns=d;let U=y=>Hr(a,y*(n/2-.03),s,e,y>0&&os()?.06+S.treppeH/100:.06,_-.13,d-.135);S.seiteL&&U(-1),S.seiteR&&U(1),os()&&vv(a,e,s);for(let[y,b]of[["links",-1],["rechts",1]])if(S.verk[y].an){let D=Ip(),O=q=>_-.14-(q-s)*Math.tan(u),H=[.03,D.L-.03],Z=Ks(H),z=b<0?q=>O(D.zE-q):q=>O(D.zA+q),j=Math.max(z(0),z(D.L))-.05,B=Ga(a,D.L,j,H,Z,S.verk[y],z);b<0?(B.rotation.y=Math.PI/2,B.position.set(-D.x,0,D.zE)):(B.rotation.y=-Math.PI/2,B.position.set(D.x,0,D.zA))}for(let y of Ya())Hr(a,(y==="links"?-1:1)*(n/2-(S[y==="links"?"schiebL":"schiebR"]?.045:.03)),s,e,d-.135-js,_-.13,d-.135,!1);Jh(a),S.festV&&jh(a)}if(t==="skyview"||t==="carport"){let u=t==="carport"?2.45:2.7,v=.22;d=_=u,Ae(n+.04,v,.12,l,0,u-v/2,s+e,a),i?Ae(n+.04,v,.12,l,0,u-v/2,s,a):Ae(n,.12,.08,l,0,u-.06,s+.04,a);for(let x of[-1,1])Ae(.1,v,e,l,x*(n/2-.03),u-v/2,s+e/2,a);if(bp(a,u,v,n,e,s,i,.06,.02),Wn(m,n).forEach((x,M,R)=>{Ae(.12,u-v,.12,l,x,(u-v)/2,s+e-.02,a),(M===0||M===R.length-1)&&Zh(a,x,s+e+.04),i&&Ae(.12,u-v,.12,l,x,(u-v)/2,s+.04,a)}),t==="skyview"){for(let R of g.slice(1,-1))Ae(.06,.12,e-.1,l,R,u-.1,s+e/2,a),p.push(R);let x=[-(n/2-.08),...g.slice(1,-1),n/2-.08];for(let R=0;R<x.length-1;R++){let T=Ae(x[R+1]-x[R]-.03,.012,e-.16,Te.glas(),(x[R]+x[R+1])/2,u-.035,s+e/2,a);T.castShadow=S.eind!=="klar",T.renderOrder=2}let M=R=>Hr(a,R*(n/2-.03),s+.08,e-.14,.06,u-v,u-v);S.seiteL&&M(-1),S.seiteR&&M(1),Jh(a),S.festV&&jh(a)}else{Sv(a,n-.16,e-.1,u-.034,s+e/2,S.blech==="vlies");let x=u-v-.05,M=S.verk,R=ou("hinten",n,e),T=ou("seite",n,e);if(M.hinten.an&&Ga(a,n,x,R,Ks(R),M.hinten).position.set(-n/2,0,s-.04),M.links.an){let w=Ga(a,e,x,T,Ks(T),M.links);w.rotation.y=Math.PI/2,w.position.set(-n/2-.02,0,s+e)}if(M.rechts.an){let w=Ga(a,e,x,T,Ks(T),M.rechts);w.rotation.y=-Math.PI/2,w.position.set(n/2+.02,0,s)}for(let w of g.slice(1,-1))p.push(w)}ns=u-v}if(t==="sunpro"){let u=nn.H,v=nn.fh;d=_=u,as=Gd(a,S,ji,s,Te.rahmen,Ae,Te.led),bp(a,u,v,n,e,s,S.montage==="frei",0,0);for(let M of[-1,1])Zh(a,M*(n/2-nn.pf/2),s+e);let x=M=>Hr(a,M*(n/2-.03),s+.08,e-.14,.06,u-v,u-v);S.seiteL&&x(-1),S.seiteR&&x(1),Jh(a),S.festV&&jh(a),ns=u-v}else as=null;if(qr=null,t!=="carport"&&[S.velV,S.velL,S.velR].some(u=>u!=="keine")&&(qr=$d(a,S,Fp(kr(S,m,f,Wn)),s,Te.rahmen,Ae)),ls=null,t!=="carport"&&(S.dachMark!=="keine"&&S.produkt!=="sunpro"||S.zipV||S.zipL||S.zipR)&&(ls=pp(a,S,kr(S,m,f,Wn),s,Te.rahmen,Ae)),S.ledMax=p.length>=3?2*p.length:0,S.ledAnz>S.ledMax&&(S.ledAnz=S.ledMax),S.ledAnz&&S.ledAnz<6&&(S.ledAnz=S.ledMax?6:0),S.ledAnz-=S.ledAnz%2,iu()){let u=t==="tds"?null:d-(t==="carport"?.23:.17),v=Ln.degToRad(8);for(let[M,R]of t==="sunpro"?[]:Mv(p,S.ledAnz)){let T=s+e*R,w=t==="tds"?_-(T-s)*Math.tan(v)-.135:u,C=new Oe(new vn(.022,.022,.005,20),Te.led);C.position.set(M,w,T),a.add(C)}let x=Math.min(5,Math.max(2,Math.round(n/3)));for(let M=0;M<x;M++){let R=new fa(16767392,0,7,1.6);R.position.set(-n/2+n*(M+.5)/x,d-.35,s+e/2),a.add(R),nu.push(R)}}S.masse&&(Va(a,new L(-n/2,.08,s+e+.75),new L(n/2,.08,s+e+.75),"Breite "+kn(S.b)),Va(a,new L(n/2+.75,.08,s),new L(n/2+.75,.08,s+e),"Tiefe "+kn(S.t)),a.add(Up("Durchgang ca. "+kn(Math.round((ns-.1)*100)),-n/2+.07,ns*.55,s+e+.35,"klein"))),Tp(),wp()}function Mv(n,e){let t=n.length,i=Math.min(Math.floor(e/2),t);if(!i)return[];let s=[];for(let r of new Set(Array.from({length:i},(o,a)=>Math.floor((a+.5)*t/i))))s.push([n[r],1/3],[n[r],2/3]);return s}function iu(){return S.produkt==="sunpro"?S.ledBand>0:S.ledAnz>0}var su=50;function Zh(n,e,t){let i=new Oe(new vn(.036,.036,.07,20),Te.pvc);i.rotation.x=Math.PI/2,i.position.set(e,.17,t),i.castShadow=!0,n.add(i);let s=new Oe(new oa(.036,.006,8,20),Te.pvc);s.position.set(e,.17,t+.035),n.add(s)}function bp(n,e,t,i,s,r,o,a,l){Te.nut.color.copy(Te.rahmen.color).multiplyScalar(.45);let c=[.3,.45,.6].map(h=>e-t*h);for(let h of c){Ae(i+.03,.005,.003,Te.nut,0,h,r+s+a+5e-4,n),o&&Ae(i+.03,.005,.003,Te.nut,0,h,r-a-5e-4,n);for(let f of[-1,1])Ae(.003,.005,s-.02,Te.nut,f*(i/2+l+5e-4),h,r+s/2,n)}for(let h of[-1,1])Ae(.07,t+.006,.004,Te.rahmen,h*(i/2+l-.035),e-t/2,r+s+a+.002,n),Ae(.004,t+.006,.07,Te.rahmen,h*(i/2+l+.002),e-t/2,r+s+a-.035,n)}function Hr(n,e,t,i,s,r,o,a=!0){let h=Te.rahmen,f=r-o>.02,m=new Kt;m.moveTo(0,s),m.lineTo(i,s),m.lineTo(i,o),m.lineTo(0,r),m.lineTo(0,s);let g=new Oe(new Mi(m),Te.wandglas);g.rotation.y=-Math.PI/2,g.position.set(e,0,t),g.renderOrder=3,n.add(g),Ae(.06,.05,i,h,e,s+.05/2,t+i/2,n),Ae(.06,r-s,.05,h,e,(r+s)/2,t+.05/2,n),Ae(.06,o-s,.05,h,e,(o+s)/2,t+i-.05/2,n);let d=Math.hypot(i,r-o),_=Math.atan2(r-o,i),p=Ae(.06,.05,d,h,e,(r+o)/2-.05/2,t+i/2,n);p.rotation.x=_,f&&a&&Ae(.06,.05,i-.05,h,e,o-js,t+i/2,n);let u=i<1.5?0:i<=3?1:i<=4.5?2:3;for(let v=1;v<=u;v++){let x=i*v/(u+1),M=r-x*(r-o)/i;Ae(.06,M-s,.05,h,e,(M+s)/2,t+x,n)}}function Sv(n,e,t,i,s,r){let h=.030999999999999993,f=.004,m=Math.max(1,Math.round(e/.207)),g=e/(m*.207),d=[];for(let u=0;u<m;u++){let v=-e/2+u*.207*g;d.push([v,0],[v+.12*g,0],[v+(.12+.028)*g,.035],[v+(.12+.028+h)*g,.035])}d.push([e/2,0]);let _=(u,v)=>{let x=new Kt;x.moveTo(d[0][0],d[0][1]+u);for(let[M,R]of d.slice(1))x.lineTo(M,R+u);for(let[M,R]of d.slice().reverse())x.lineTo(M,R+u-v);return new yi(x,{depth:t,bevelEnabled:!1})},p=new Oe(_(0,f),Te.blech);if(p.position.set(0,i,s-t/2),p.castShadow=p.receiveShadow=!0,n.add(p),r){let u=new Oe(_(-f,.008),Te.vlies);u.position.copy(p.position),u.receiveShadow=!0,n.add(u)}}var Xt={h:.154,dick:.025,stange:7,preis:196},Yr={b:.0296,stange:6,preis:68},Pi={b:.0704,dick:.0253,ral:{stange:7,preis:190},dekor:{stange:6.1,preis:168}},ss={a:.06,stange:6,preis:227},wt={art:"15367",b:.0296,h:.025,stange:6,preis:68},sn={art:null,h:.045,dick:.004,stange:6,preis:0},Kr={nut:["NUT Dunkel","#5b250c","streifen"],mocca:["Eiche Mocca","#6e3d0c","punkte"],rovere:["Rovere Pechino Hell","#97500d","wellen"]},Jr=n=>n in Kr,Np=n=>Jr(n)?Kr[n][0]:"RAL "+n,Op=n=>Math.max(2,Math.ceil(n/3.6)+1);function bv(n,e,t){let r=document.createElement("canvas");r.width=t?96:1024,r.height=t?1024:96;let o=r.getContext("2d");t&&(o.translate(96,0),o.rotate(Math.PI/2));let a=new ze(n),l={};a.getHSL(l,dt);let c=(m,g=1)=>`hsla(${l.h*360},${l.s*100}%,${Math.max(0,Math.min(100,l.l*100+m))}%,${g})`;o.fillStyle=n,o.fillRect(0,0,1024,96);let h=n.length*97+e.length*13,f=()=>(h=(h*9301+49297)%233280)/233280;if(e==="punkte"){for(let m=0;m<26;m++){o.strokeStyle=c(-6+f()*8,.25),o.lineWidth=1+f()*2;let g=f()*96;o.beginPath(),o.moveTo(0,g),o.lineTo(1024,g+(f()-.5)*6),o.stroke()}for(let m=0;m<5200;m++)o.fillStyle=f()<.55?c(10+f()*14,.55):c(-10-f()*8,.5),o.fillRect(f()*1024,f()*96,1+f()*2.2,1+f()*1.4)}else{let m=e==="wellen"?34:46;for(let g=0;g<m;g++){let d=f()*96,_=e==="wellen"?3+f()*10:.6+f()*2,p=.004+f()*.01,u=f()*6;o.strokeStyle=f()<.6?c(-7-f()*9,.35+f()*.35):c(5+f()*8,.3),o.lineWidth=.6+f()*(e==="wellen"?2.6:1.6),o.beginPath();for(let v=0;v<=1024;v+=8){let x=d+Math.sin(v*p+u)*_+Math.sin(v*p*3.1+u)*_*.25;v?o.lineTo(v,x):o.moveTo(v,x)}o.stroke()}if(e==="wellen")for(let g=0;g<6;g++){let d=f()*1024,_=96*(.3+f()*.4);o.strokeStyle=c(-8,.3),o.lineWidth=1.2;for(let p=6;p<60;p+=7)o.beginPath(),o.ellipse(d,_,p*4,p*.55,0,0,Math.PI*2),o.stroke()}}return r}var Kh={};function ru(n,e,t){let i=n+(e?"v":"h");if(!Kh[i]){let r=new _n(bv(Kr[n][1],Kr[n][2],e));r.colorSpace=dt,r.wrapS=r.wrapT=St,r.anisotropy=8,Kh[i]=r}let s=Kh[i].clone();return s.needsUpdate=!0,e?s.repeat.set(1,t):s.repeat.set(t,1),new Fe({map:s,roughness:.55,metalness:.08})}function Ks(n){let e=[];for(let t=0;t<n.length-1;t++){let i=n[t],s=n[t+1]-i,r=Math.floor(s/3)+1;for(let o=1;o<r;o++)e.push(i+s*o/r)}return e}function ou(n,e,t){return n==="hinten"?Wn(Op(e),e).map(i=>i+e/2):[.04,t-.02]}function Ga(n,e,t,i,s,r,o){let a=new pt,l=.05,c=r.art,h=r.richt==="waagerecht",f=o||(()=>l+t),m=(v,x,M,R,T,w,C,U=0)=>{let y=(z,j)=>f(z)-U-j;if(y(v,R)>=-1e-4&&y(x,R)>=-1e-4)return Ae(x-v,R-M,T,w,(v+x)/2,(M+R)/2,C,a);let b=[[v,M],[x,M],[x,R],[v,R]],D=[];for(let z=0;z<b.length;z++){let j=b[z],B=b[(z+1)%b.length],q=y(...j),oe=y(...B);if(q>=0&&D.push(j),q>=0!=oe>=0){let he=q/(q-oe);D.push([j[0]+(B[0]-j[0])*he,j[1]+(B[1]-j[1])*he])}}if(D.length<3)return null;let O=new Kt;O.moveTo(...D[0]);for(let z of D.slice(1))O.lineTo(...z);let H=new yi(O,{depth:T,bevelEnabled:!1});H.translate(0,0,C-T/2);let Z=new Oe(H,w);return Z.castShadow=Z.receiveShadow=!0,a.add(Z),Z},g=(v,x,M,R,T=0)=>{let w=f(0)-T,C=f(e)-T,U=Math.hypot(e,C-w),y=Ae(U,v,x,M,e/2,(w+C)/2-v/2,R,a);return y.rotation.z=Math.atan2(C-w,e),y},d=c==="latten"&&Jr(r.farbe),_=Te.paneel.clone();_.color.set(Js[Jr(r.farbe)?"7016":r.farbe][1]);let p=.006+Xt.dick/2+ss.a/2;if(c==="zaun"){if(m(.025,e-.025,l+.025,l+t-.025,.004,Te.fuge,.006,.025),h){let x=Math.ceil((t-.05)/Xt.h);for(let M=0;M<x;M++){let R=Math.min(Xt.h,t-.05-M*Xt.h),T=l+.025+M*Xt.h;m(.025,e-.025,T,T+R-.004,Xt.dick,_,.006,.025)}}else{let x=Math.ceil((e-.05)/Xt.h);for(let M=0;M<x;M++){let R=Math.min(Xt.h,e-.05-M*Xt.h),T=.025+M*Xt.h;m(T,T+R-.004,l+.025,l+t-.025,Xt.dick,_,.006,.025)}}Ae(e,.025,Yr.b,_,e/2,l+.025/2,.006,a),g(.025,Yr.b,_,.006);for(let x of[.025/2,e-.025/2])Ae(.025,f(x)-l,Yr.b,_,x,(f(x)+l)/2,.006,a)}else{let v=+r.abst/1e3,x=Pi.b+v,M=d?Te.rahmen:_;if(h){let R=Math.floor((t+v)/x),T=(t-(R*x-v))/2,w=[...i,...s].sort((C,U)=>C-U);for(let C=0;C<w.length-1;C++){let U=w[C]+wt.b/2-.004,y=w[C+1]-w[C]-wt.b+.008,b=d?ru(r.farbe,!1,y):_;for(let D=0;D<R;D++){let O=l+T+D*x;m(U,U+y,O,O+Pi.b,Pi.dick,b,.006)}}for(let C of w){let U=f(C)-l;Ae(wt.b,U,wt.h,M,C,l+U/2,.006,a),Ae(sn.h,U,sn.dick,M,C,l+U/2,.006-wt.h/2-sn.dick/2,a)}o&&g(.03,wt.h,M,.006),p=.006+wt.h/2+ss.a/2}else{let R=Math.floor((e+v)/x),T=d?ru(r.farbe,!0,t):_,w=(e-(R*x-v))/2;for(let C=0;C<R;C++){let U=w+C*x;m(U,U+Pi.b,l,l+t,Pi.dick,T,.006)}p=.006+wt.b/2+ss.a/2,Ae(e,wt.h,wt.b,M,e/2,l+wt.h/2,.006,a),Ae(e,sn.h,sn.dick,M,e/2,l+wt.h/2,.006-wt.b/2-sn.dick/2,a),g(wt.h,wt.b,M,.006),g(sn.h,sn.dick,M,.006-wt.b/2-sn.dick/2,-.01)}}let u=d?Te.rahmen:_;for(let v of s)Ae(ss.a,f(v),ss.a,u,v,f(v)/2,p,a);return n.add(a),a}function Ep(n,e){let t=[],i=0,s=(r,o,a)=>{let l=Math.floor(a/r);return l>=1?Math.ceil(o/l):o*Math.ceil(r/a)};for(let{name:r,L:o,stuetzen:a,extra:l,c}of n){let h=[],f=c.richt==="waagerecht",m=0;if(c.art==="zaun"){let g=f?s(o,Math.ceil(e/Xt.h),Xt.stange):s(e,Math.ceil(o/Xt.h),Xt.stange),d=Math.ceil((2*o+2*e)/Yr.stange);m+=g*Xt.preis+d*Yr.preis,h.push(`${g} \xD7 Zaunpaneel 140 RAL ${c.farbe} (7 m)`,`${d} \xD7 U-Profil (6 m)`)}else{let g=Jr(c.farbe)?Pi.dekor:Pi.ral,d=+c.abst/1e3,_=Pi.b+d,p=0,u,v;if(f){let x=Math.floor((e+d)/_);for(let M=0;M<a.length-1;M++)p+=s(a[M+1]-a[M],x,g.stange);u=s(e,a.length,wt.stange),v=s(e,a.length,sn.stange)}else p=s(e,Math.floor((o+d)/_),g.stange),u=s(o,2,wt.stange),v=s(o,2,sn.stange);m+=p*g.preis+u*wt.preis+v*sn.preis,h.push(`${p} \xD7 Rechteckprofil 25\xD770 ${Np(c.farbe)} (${String(g.stange).replace(".",",")} m)`,`${u} \xD7 U-Profil ${wt.art}`,sn.art?`${v} \xD7 Blende ${sn.art}`:`${v} \xD7 Blende (Artikel offen)`)}if(l){let g=s(e+.05,l,ss.stange);m+=g*ss.preis,h.push(`${l} Zusatzpfosten 60\xD760`)}i+=m,t.push(`${r}: ${h.join(" \xB7 ")} = ${Math.round(m).toLocaleString("de-DE")} \u20AC`)}return{preis:i,info:t.join(`
`)}}function Ev(n,e,t){let i=qa(n*100,e*100,t);return .035*(i?i.schienen:2)+.03}function Tv(n,e,t,i,s,r){let o=kp(s-i,r,e);o.rotation.y=t<0?-Math.PI/2:Math.PI/2,o.position.set(t,0,(i+s)/2),n.add(o)}function Fp(n){let e=Ja();return Object.assign(n,{felder:e.felder,vel:{xC:e.xC,zC:e.zC,z1:e.z1,z2:e.z2}})}function Jh(n){let e=Ja();for(let[t,i]of[[S.schiebL,-1],[S.schiebR,1]])if(t&&(Tv(n,t,i*e.xA,e.z1,e.z2,e.hS-.06),e.wand!=null)){let s=Ev(e.z2-e.z1,e.hS-.06,t);Ae(s,e.hS,.04,Te.rahmen,i*(e.xA-s/2),e.hS/2,e.wand+.02,n),Ae(s-.01,e.hS-.02,.004,Te.dichtung,i*(e.xA-s/2),e.hS/2,e.wand+.042,n)}if(S.front)for(let t of e.felder){let i=kp(t.b,e.hF-.06,S.frontArt);i.position.set(t.x,0,e.zPf),n.add(i)}}function jh(n){let e=Ja();if(S.easyRail)return wv(n,e);if(os())return Av(n,e);let t=S.festVHalb?.06+(e.hF-.06)/2:e.hF-.005;for(let i of e.felder){let s=new pt;Hr(s,0,-i.b/2,i.b,.06,t,t),s.rotation.y=Math.PI/2,s.position.set(i.x,0,e.zC),n.add(s)}}function wv(n,e){let t=os()?Ka():null,i=e.zC,s=1,r=.11,o=g=>t?t.linie(g):.06,a=-e.xA+e.pb,l=e.xA-e.pb,c=[a,...t&&t.xE>a&&t.xE<l?[t.xE]:[],l],h=new Fe({color:3817026,metalness:.4,roughness:.45}),f=new yn({color:14085096,transparent:!0,opacity:.22,roughness:.03,ior:1.52,side:_t,depthWrite:!1,envMapIntensity:2.4}),m=new Fe({color:9420722,transparent:!0,opacity:.6,roughness:.1});for(let g=0;g<c.length-1;g++){let d=c[g],_=c[g+1],p=o(d),u=o(_),v=Math.hypot(_-d,u-p),x=Math.atan2(u-p,_-d),M=new pt;M.position.set(d,p,i),M.rotation.z=x,n.add(M),Ae(v,r,.065,h,v/2,r/2,0,M),Ae(v,.012,.072,h,v/2,r+.002,0,M);let R=Math.max(1,Math.ceil((_-d)/1.5-1e-9)),T=(_-d)/R,w=s-r-.03,C=y=>o(y)+r;for(let y=0;y<R;y++){let b=d+y*T+.005,D=d+(y+1)*T-.005,O=new Kt;O.moveTo(b,C(b)),O.lineTo(D,C(D)),O.lineTo(D,C(D)+w),O.lineTo(b,C(b)+w),O.closePath();let H=new Oe(new Mi(O),f);H.position.z=i,H.renderOrder=3,n.add(H)}let U=Ae(v+.02,.035,.05,h,(d+_)/2,(p+u)/2+s-.0125,i,n);U.rotation.z=x}}function Av(n,e){let t=Ka(),i=.05,s=.06,r=Te.rahmen,o=S.festVHalb?.06+(e.hF-.06)/2:e.hF-.005;for(let a of e.felder){let l=a.x-a.b/2,c=a.x+a.b/2,h=p=>t.linie(p)+.02,f=[l,...t.xE>l&&t.xE<c?[t.xE]:[],c],m=new Kt;m.moveTo(l,h(l));for(let p of f.slice(1))m.lineTo(p,h(p));m.lineTo(c,o),m.lineTo(l,o),m.lineTo(l,h(l));let g=new Oe(new Mi(m),Te.wandglas);g.position.z=e.zC,g.renderOrder=3,n.add(g),Ae(a.b,i,s,r,a.x,o-i/2,e.zC,n);for(let p of[l+i/2,c-i/2]){let u=h(p);Ae(i,o-u,s,r,p,(o+u)/2,e.zC,n)}for(let p=0;p<f.length-1;p++){let u=f[p],v=f[p+1],x=h(u),M=h(v),R=Math.hypot(v-u,M-x),T=Ae(R,i,s,r,(u+v)/2,(x+M)/2+i/2,e.zC,n);T.rotation.z=Math.atan2(M-x,v-u)}let d=t.xE>l+.1&&t.xE<c-.1?t.xE:a.x,_=h(d);Ae(i*.9,o-_,s*.9,r,d,(o+_)/2,e.zC,n)}}function kp(n,e,t){let i=new pt,s=-.02,r=qa(n*100,e*100,t),o=r?r.fluegel:Math.max(2,Math.round(n/1)),a=r?r.schienen:2,l=n/o,c=t==="sc23",h=.035*a+.03;Ae(n,.04,h,Te.rahmen,0,.08,-h/2,i),Ae(n,.06,h,Te.rahmen,0,e+.03,-h/2,i);for(let _=1;_<a;_++)Ae(n,.006,.003,Te.nut,0,.1,-.015-_*.035+.0175,i);let f=.1,m=e-.1,g=[];for(let _=0;_<o;_++){let p=-n/2+l*(_+.5),u=s-_%a*.035,v=l+.03,x=c?v-.1:v-.004,M=c?m-.1:m-.01,R=new pt;R.position.set(p,0,u),i.add(R);let T=new Oe(new Pn(x,M),Te.wandglas);if(T.position.set(0,f+m/2,0),T.renderOrder=3,R.add(T),c){for(let C of[-1,1])Ae(v,.05,.03,Te.rahmen,0,f+m/2+C*(m/2-.025),0,R);for(let C of[-1,1])Ae(.05,m,.03,Te.rahmen,C*(v/2-.025),f+m/2,0,R)}else Ae(v-.004,.012,.012,Te.glasKante,0,f+m/2+M/2,0,R),Ae(.012,.25,.03,Te.rahmen,(_%a?-1:1)*(v/2-.06),f+.95,0,R);let w=-n/2+l*(Math.floor(_/a)*a+.5);g.push([R,p,w])}let d=_=>{for(let[p,u,v]of g)p.position.x=u+(v-u)*_};return d(S.glasAuf),uu.push(d),i}function Tp(){let n=S.abend;Ot.background=n?Zr.abend:Zr.tag,Ot.environment=n?Qh.abend:Qh.tag,Ot.fog.color.set(n?8217696:13623791),eu.intensity=n?.1:.35,eu.color.set(n?7309001:14675967),zn.intensity=n?.35:3.4,zn.color.set(n?16751196:16774368),zn.position.set(n?-14:7,n?4:13,n?6:9),Ot.environmentIntensity=n?.18:.75,on.toneMappingExposure=n?1.15:1;let e=iu()&&n;Te.led.emissiveIntensity=iu()?n?3:.6:0;for(let t of nu)t.intensity=e?9:0}var Ai=null;function jr(n,e){let t=S.b/100,i=S.t/100,s=Dp,r=Math.max(t,i*1.6),o=new L(0,1.4,s+i/2),a={perspektive:new L(t*.75+3.5,S.produkt==="carport"?6.2:4,s+i+r*1.15+5),vorne:new L(0,2,s+i+r*1.3+4),seite:new L(t/2+i*1.5+5,2,s+i/2+.5),oben:new L(.01,r*1.35+6,s+i/2+2.5),innen:new L(t*.2,1.6,s+i*.6)}[n];if(Jt.maxPolarAngle=n==="innen"?Math.PI*.8:Math.PI*.495,n==="innen"&&(a.set(t*.12,1.15,s+i*.3),o.set(-t*.12,ns*.95,s+i+2.5)),Jt.minDistance=n==="innen"?.5:3,rn.fov=n==="innen"?66:40,rn.updateProjectionMatrix(),rn.aspect<1.1&&n!=="innen"&&a.sub(o).multiplyScalar(Math.min(2.2,1.15/Math.max(rn.aspect,.45))).add(o),e){rn.position.copy(a),Jt.target.copy(o),Jt.update();return}Ai={p0:rn.position.clone(),t0:Jt.target.clone(),p1:a,t1:o,s:performance.now()}}var Y=n=>document.getElementById(n);function Dt(n,e,t){Y(n).addEventListener("click",i=>{let s=i.target.closest("button");s&&(S[e]=s.dataset.v,t&&t(),Bt())})}Dt("sel-produkt","produkt",()=>{S.eingang=S.produkt==="eingang",S.eingang?(S.produkt="tds",S.montage="wand",S.b=260,S.t=150,S.h=280):S.treppe=!1,Fn()&&(S.montage="wand",S.farbe="7016",Te.rahmen.color.set(Js[7016][1]),Object.assign(S,{seiteL:!1,seiteR:!1,front:!1,festV:!1,schiebL:null,schiebR:null,velV:"keine",velL:"keine",velR:"keine",dachMark:"keine",zipV:!1,zipL:!1,zipR:!1,ledAnz:0}),S.produkt==="fly"?(S.b=150,S.t=90,S.eind==="poly"&&(S.eind="klar")):ja());let n=$a[S.produkt];S.b=Math.min(Math.max(S.b,n.b[0]),n.b[1]),S.t=Math.min(Math.max(S.t,n.t[0]),n.t[1]),S.produkt==="carport"&&(S.b=Math.max(S.b,300),S.t=Math.max(S.t,500)),setTimeout(()=>jr("perspektive"),0)});function ja(){let n=Oa[S.flModell];S.b=n.b,S.t=n.t,Fa(S.flModell,S.flAusf,S.flDesign)||(S.flAusf=S.flModell==="xl"?"pfosten":"nur"),S.flModell==="xl"&&(S.flDesign="anthrazit")}Dt("sel-flmodell","flModell",ja);Dt("sel-flausf","flAusf",ja);Dt("sel-flseite","flSeite");Dt("sel-fldesign","flDesign",ja);Dt("sel-montage","montage",()=>setTimeout(()=>jr("perspektive"),0));Dt("sel-eind","eind");Dt("sel-verkricht","verkRicht");Dt("sel-verkfarbe","verkFarbe");Dt("sel-verkabst","verkAbstand");Dt("sel-verkart","verkArt",()=>{S.verkArt==="zaun"&&Jr(S.verkFarbe)&&(S.verkFarbe="7016"),S.verkAn=!0});Dt("sel-verkwand","verkWand");Dt("sel-dachmark","dachMark");Y("in-spwinkel").addEventListener("input",n=>{ii=null,S.spWinkel=+n.target.value,Y("spwinkel-w").textContent=S.spWinkel+"\xB0",as&&as(S.spWinkel)});Y("btn-spauf").addEventListener("click",()=>{ii=90});Y("btn-spzu").addEventListener("click",()=>{ii=0});for(let n of Object.keys(Ys))Y("cb-"+n).addEventListener("change",e=>{S[n]=e.target.checked,Bt()});Dt("sel-vellam","velLam");for(let n of document.querySelectorAll("details.sek"))n.addEventListener("toggle",()=>{if(n.open)for(let e of document.querySelectorAll("details.sek"))e!==n&&(e.open=!1)});for(let n of document.querySelectorAll(".fw"))n.querySelector(".fw-btn").addEventListener("click",e=>{e.stopPropagation();let t=!n.classList.contains("offen");for(let i of document.querySelectorAll(".fw.offen"))i.classList.remove("offen");n.classList.toggle("offen",t)}),n.querySelector(".fw-pop").addEventListener("click",e=>{e.target.closest("button")&&setTimeout(()=>n.classList.remove("offen"),120)});document.addEventListener("click",n=>{if(!n.target.closest(".fw"))for(let e of document.querySelectorAll(".fw.offen"))e.classList.remove("offen")});function Rv(){for(let n of document.querySelectorAll(".fw")){let e=n.querySelector(".fw-pop button.an");if(!e)continue;let t=e.querySelector("i");n.querySelector(".fw-sw").style.background=t?t.style.background:e.style.background,n.querySelector(".fw-txt").textContent=e.title||e.textContent.trim()}}Dt("sel-plprofil","plisseeProfil");function fu(n,e,t,i,s){let r=Y(n),o="",a=null;for(let l of e)l.familie&&l.familie!==a?(a!==null&&(o+="</div>"),a=l.familie,o+=`<div class="fam">${a}</div><div class="chips">`):!l.familie&&a===null&&(a="",o+='<div class="chips">'),o+=`<button data-v="${i(l)}" title="${s(l)}" style="background:${l.farbe}"></button>`;r.innerHTML=o+"</div>",r.addEventListener("click",l=>{let c=l.target.closest("button");c&&(S[t]=c.dataset.v,Bt())})}fu("stoff-dach",On.markise,"stoffDach",n=>n.code,n=>n.familie+" "+n.code);fu("stoff-zip",On.ezip,"stoffZip",n=>n.code,n=>n.code+" "+n.name);fu("stoff-plissee",On.plissee,"plisseeStoff",n=>n.name,n=>n.name);var zp=()=>{Y("in-ausfahren").value=Math.round(S.ausfahren),Y("ausfahren-w").textContent=Math.round(S.ausfahren)+" %"};Y("in-ausfahren").addEventListener("input",n=>{si=null,S.ausfahren=+n.target.value,zp(),ls&&ls(S.ausfahren/100)});Y("btn-mauf").addEventListener("click",()=>{si=100});Y("btn-velauf").addEventListener("click",()=>{Ri=1});Y("btn-glasauf").addEventListener("click",()=>{Ci=1});Y("btn-glaszu").addEventListener("click",()=>{Ci=0});Dt("sel-velspuren","velSpuren");Dt("sel-boden","boden");Y("btn-velzu").addEventListener("click",()=>{Ri=0});Y("btn-mzu").addEventListener("click",()=>{si=0});for(let n of["sel-verkricht","sel-verkfarbe","sel-verkabst"])Y(n).addEventListener("click",()=>{S.verkAn||(S.verkAn=!0,Bt())});Y("btn-verkalle").addEventListener("click",()=>{let n=S.verk[S.verkWand];for(let e of Object.keys(S.verk))e!==S.verkWand&&Object.assign(S.verk[e],{art:n.art,richt:n.richt,abst:n.abst,farbe:n.farbe});Bt()});Dt("sel-blech","blech");Dt("sel-farbe","farbe",()=>Te.rahmen.color.set(Js[S.farbe][1]));function du(n,e){let t=Y(n),i=Y(n+"-n"),s=r=>{let o=$a[S.produkt];S[e]=Math.round(Math.min(Math.max(+r||0,o[e][0]),o[e][1])),Bt()};t.addEventListener("input",()=>s(t.value)),i.addEventListener("change",()=>s(i.value))}du("in-b","b");du("in-t","t");du("in-h","h");Y("cb-treppe").addEventListener("change",n=>{S.treppe=n.target.checked,Bt()});Y("in-treppe").addEventListener("change",n=>{S.treppeH=Math.min(150,Math.max(20,+n.target.value||100)),Bt()});for(let[n,e]of[["cb-zipV","zipV"],["cb-zipL","zipL"],["cb-zipR","zipR"],["cb-verkAn","verkAn"],["cb-masse","masse"]])Y(n).addEventListener("change",t=>{if(e==="verkAn"&&t.target.checked&&S.produkt==="tds"&&S.verkWand!=="hinten"){let s=S.verkWand;au(s,"keine"),S.verk[s].an=!0,Bt();return}S[e]=t.target.checked;let i={seiteL:"velL",seiteR:"velR",front:"velV"}[e];i&&S[e]&&(S[i]="keine"),Bt()});Y("sel-ledband").addEventListener("click",n=>{let e=n.target.closest("button");e&&(S.ledBand=+e.dataset.v,Bt())});Y("sel-led").addEventListener("click",n=>{let e=n.target.closest("button");e&&(S.ledAnz=+e.dataset.v,Bt())});var Bp={links:{glas:"seiteL",vel:"velL",schieb:"schiebL"},rechts:{glas:"seiteR",vel:"velR",schieb:"schiebR"},vorne:{glas:"festV",vel:"velV"}},Cv={fest:[["glasFest","Festverglasung","Glas FR23 \xB7 VSG 8 mm"],["glasFestHalb","Festverglasung halbe H\xF6he","nur vorne \xB7 Br\xFCstung"],["easyRail","Glasgel\xE4nder Easy Rail","nur vorne \xB7 H\xF6he ca. 1 m"],["velFest","Velaris fest","Lamellenwand"]],schieb:[["sg23","Glas rahmenlos","SG23 \xB7 ESG 10 mm"],["sc23","Glas mit Rahmen","SC23 \xB7 VSG 6 mm"],["velSchieb","Velaris schiebbar","Lamellenwand"]]},Hp={easyRail:"Glasgel\xE4nder Easy Rail",glasFestHalb:"Festverglasung halbe H\xF6he",verk:"Verkleidung",keine:"offen",glasFest:"Festverglasung",velFest:"Velaris fest",sg23:"Schiebe rahmenlos",sc23:"Schiebe mit Rahmen",velSchieb:"Velaris schiebbar"},Pv=n=>n==="verk"||n==="keine"?"keine":n==="glasFest"||n==="glasFestHalb"||n==="easyRail"||n==="velFest"?"fest":"schieb";function Vr(n){let e=Bp[n];return S.produkt==="tds"&&n!=="vorne"&&S.verk[n].an?"verk":S[e.glas]?n==="vorne"&&S.easyRail?"easyRail":n==="vorne"&&S.festVHalb?"glasFestHalb":"glasFest":S[e.vel]==="fest"?"velFest":S[e.vel]==="schieb"?"velSchieb":(n==="vorne"?S.front?S.frontArt:null:S[e.schieb])||"keine"}function au(n,e){let t=Bp[n],i=e==="sg23"||e==="sc23"?e:null;n!=="vorne"&&e!=="verk"&&(S.verk[n].an=!1),S[t.glas]=e==="glasFest"||n==="vorne"&&(e==="glasFestHalb"||e==="easyRail"),n==="vorne"&&(S.festVHalb=e==="glasFestHalb",S.easyRail=e==="easyRail"),S[t.vel]=e==="velFest"?"fest":e==="velSchieb"?"schieb":"keine",n==="vorne"?(S.front=!!i,i&&(S.frontArt=i)):S[t.schieb]=i}var Gr={};function lu(n){let e=n.dataset.o,t=Vr(e),i=Gr[e]||Pv(t);n.querySelector(".ws-w").textContent=Hp[t],n.classList.toggle("gewaehlt",t!=="keine");for(let r of n.querySelectorAll(".ws-art button"))r.classList.toggle("an",r.dataset.a===i);let s=Cv[i];n.querySelector(".ws-l2").hidden=!s,n.querySelector(".ws-var").innerHTML=s?s.filter(([r])=>r!=="glasFestHalb"&&r!=="easyRail"||e==="vorne").map(([r,o,a])=>`<button data-w="${r}" class="${r===t?"an":""}">${o}<small>${a}</small></button>`).join(""):""}for(let n of document.querySelectorAll(".wahl-seite")){let e=n.dataset.o;n.querySelector(".ws-btn").addEventListener("click",()=>{let t=!n.classList.contains("offen");for(let i of document.querySelectorAll(".wahl-seite.offen"))i.classList.remove("offen");Gr[e]=null,n.classList.toggle("offen",t),lu(n)}),n.querySelector(".ws-art").addEventListener("click",t=>{let i=t.target.closest("button");if(i){if(i.dataset.a==="keine"){Gr[e]=null,au(e,"keine"),n.classList.remove("offen"),Bt();return}Gr[e]=i.dataset.a,lu(n)}}),n.querySelector(".ws-var").addEventListener("click",t=>{let i=t.target.closest("button");i&&(Gr[e]=null,au(e,i.dataset.w),n.classList.remove("offen"),Bt())})}Y("sel-zeit").addEventListener("click",n=>{let e=n.target.closest("button");e&&(S.abend=e.dataset.v==="abend",Bt())});Y("sel-ansicht").addEventListener("click",n=>{let e=n.target.closest("button");e&&jr(e.dataset.v)});Y("btn-dreh").addEventListener("click",n=>{Jt.autoRotate=!Jt.autoRotate,n.currentTarget.classList.toggle("an",Jt.autoRotate)});Y("btn-vollbild").addEventListener("click",()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen());Y("btn-panel").addEventListener("click",()=>{document.body.classList.toggle("praesentation"),setTimeout(Qa,260)});Y("btn-bild").addEventListener("click",Iv);window.addEventListener("keydown",n=>{["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||!Y("abschluss").hidden||((n.key==="p"||n.key==="P")&&Y("btn-panel").click(),(n.key==="r"||n.key==="R")&&Y("btn-dreh").click())});var xt=n=>n.toLocaleString("de-DE",{minimumFractionDigits:0,maximumFractionDigits:0})+" \u20AC";function wp(){let n=$a[S.produkt];for(let[d,_]of[["sel-produkt","produkt"],["sel-montage","montage"],["sel-eind","eind"],["sel-blech","blech"],["sel-farbe","farbe"],["sel-verkricht","verkRicht"],["sel-verkfarbe","verkFarbe"],["sel-verkart","verkArt"],["sel-verkabst","verkAbstand"],["sel-verkwand","verkWand"],["sel-dachmark","dachMark"],["sel-plprofil","plisseeProfil"],["sel-vellam","velLam"],["sel-boden","boden"]])for(let p of Y(d).querySelectorAll("button"))p.classList.toggle("an",p.dataset.v===S[_]);for(let d of Y("sel-zeit").querySelectorAll("button"))d.classList.toggle("an",d.dataset.v==="abend"===S.abend);Y("grp-hoehe").hidden=S.produkt!=="tds",Y("grp-treppe").hidden=!(S.produkt==="tds"&&S.eingang);{let d=Fn(),_=S.produkt==="frontline";if(S.produkt==="tds"&&S.eingang)for(let p of Y("sel-produkt").querySelectorAll("button"))p.classList.toggle("an",p.dataset.v==="eingang");Y("grp-frontline").hidden=!_;for(let p of["grp-seiten","grp-markise","grp-ledspots","grp-montage","grp-farbe"])Y(p).hidden=d||p==="grp-montage"&&S.produkt==="carport"||p==="grp-ledspots"&&S.produkt==="sunpro";for(let p of["in-b","in-t"])Y(p).closest(".grp").hidden=_;if(Y("sel-eind").querySelector("[data-v=poly]").hidden=S.produkt==="fly",_){for(let[p,u]of[["sel-flmodell","flModell"],["sel-flausf","flAusf"],["sel-flseite","flSeite"],["sel-fldesign","flDesign"]])for(let v of Y(p).querySelectorAll("button"))v.classList.toggle("an",v.dataset.v===S[u]);for(let p of Y("sel-flausf").querySelectorAll("button"))p.hidden=!Fa(S.flModell,p.dataset.v,S.flDesign)&&!(S.flModell!=="xl"&&p.dataset.v==="bk");for(let p of Y("sel-flausf").querySelectorAll("button"))p.disabled=!Fa(S.flModell,p.dataset.v,S.flDesign);Y("sel-fldesign").querySelector("[data-v=holz]").disabled=S.flModell==="xl",Y("grp-flseite").hidden=S.flAusf==="nur"}}Y("cb-treppe").checked=S.treppe,Y("in-treppe").value=S.treppeH;for(let[d,_]of[["in-b","b"],["in-t","t"],...n.h?[["in-h","h"]]:[]]){let p=Y(d),u=Y(d+"-n");p.min=u.min=n[_][0],p.max=u.max=n[_][1],p.value=S[_],u.value=S[_]}let e=S.produkt==="carport",t=S.produkt==="sunpro";if(Y("grp-sunpro").hidden=!t,Y("grp-dachmark").hidden=t,Y("grp-ledband").hidden=!t,t){let d=Qi(S,ji).led;S.ledBand>d&&(S.ledBand=d),Y("sel-ledband").innerHTML=Array.from({length:d+1},(_,p)=>`<button data-v="${p}" class="${p===S.ledBand?"an":""}">${p||"Keine"}</button>`).join(""),Y("ledband-w").textContent=S.ledBand?S.ledBand+" Stk.":"keine",Y("ledband-hin").textContent=`Bei dieser Gr\xF6\xDFe max. ${d} ${d>1?"LED-B\xE4nder":"LED-Band"} (laut Preisliste) \xB7 in der Lamelle integriert`}Y("grp-ledspots").hidden=t||Fn();let i=[0];for(let d=6;d<=(S.ledMax||0);d+=2)i.push(d);Y("sel-led").innerHTML=i.map(d=>`<button data-v="${d}" class="${d===S.ledAnz?"an":""}">${d?d+"er":"Keine"}</button>`).join(""),Y("led-w").textContent=S.ledAnz?S.ledAnz+" Spots":"keine",Y("led-hin").textContent=S.ledMax?`Immer 2 Spots je Sparren, Randsparren ohne LED \xB7 ab 6er-Set \xB7 ${su} \u20AC je Spot`:"Bei dieser Breite zu wenige Innensparren f\xFCr das 6er-Set";for(let d of document.querySelectorAll(".wahl-seite"))lu(d);Y("grp-glasanim").hidden=!(S.front||S.schiebL||S.schiebR);for(let d of Object.keys(Ys))Y("cb-"+d).checked=S[d];Y("grp-eind").hidden=e||t||S.produkt==="frontline",Y("grp-blech").hidden=!e,Y("grp-verk").hidden=!(e||S.produkt==="tds")||Fn();let s=S.produkt==="tds";Y("sel-verkwand").querySelector("[data-v=hinten]").hidden=s,s&&S.verkWand==="hinten"&&(S.verkWand="links"),Y("grp-markise").hidden=e||Fn();let r=S.dachMark,o=S.zipV||S.zipL||S.zipR;Y("grp-stoff-dach").hidden=!(r==="auf"||r==="unter"),Y("grp-stoff-zip").hidden=!o,Y("grp-plissee").hidden=r!=="plissee",Y("grp-ausfahren").hidden=!(r!=="keine"||o);for(let[d,_]of[["stoff-dach","stoffDach"],["stoff-zip","stoffZip"],["stoff-plissee","plisseeStoff"]])for(let p of Y(d).querySelectorAll("button"))p.classList.toggle("an",p.dataset.v===S[_]);Rv(),Y("sum-produkt").textContent=`${$r()} \xB7 ${kn(S.b)} \xD7 ${kn(S.t)}`,Y("sum-dach").textContent=S.produkt==="frontline"?S.flDesign==="holz"?"Anthrazit / Holzoptik":"Anthrazit":S.produkt==="fly"?`VSG 17 mm ${S.eind==="matt"?"matt":"klar"}`:`${xp[t?"sunpro":e?S.blech:S.eind]} \xB7 RAL ${S.farbe}`,Y("grp-vellam").hidden=![S.velV,S.velL,S.velR].some(d=>d!=="keine"),Y("keil-hin").hidden=!Ya().length,Y("grp-velanim").hidden=![S.velV,S.velL,S.velR].includes("schieb");{let d=qd(S);for(let _ of Y("sel-velspuren").querySelectorAll("button"))_.disabled=+_.dataset.v>d,_.classList.toggle("an",_.dataset.v===S.velSpuren);Y("velspuren-hin").textContent=d<3?`Bei dieser Breite h\xF6chstens ${d} Laufschiene${d>1?"n":""} (so viele wie Elemente)`:"Mehr Laufschienen = gr\xF6\xDFere \xD6ffnung (2 = \xBD, 3 = \u2154 offen)"}Y("sum-seiten").textContent=[["L","links"],["R","rechts"],["V","vorne"]].filter(([,d])=>Vr(d)!=="keine").map(([d])=>d).join(" \xB7 ")||"offen",Y("sum-markise").textContent=[!t&&{auf:"Aufdach",unter:"Unterdach",plissee:"Plissee"}[S.dachMark],(S.zipV||S.zipL||S.zipR)&&"eZip"].filter(Boolean).join(" + ")||"keiner",Y("sum-verk").textContent=Object.keys(rs).filter(d=>S.verk[d].an).map(d=>rs[d]).join(" \xB7 ")||"keine";let a=S.verkArt==="latten";Y("verk-abst").hidden=!a;for(let d of Object.keys(Kr))Y("sel-verkfarbe").querySelector('[data-v="'+d+'"]').hidden=!a;Y("verk-hin").textContent=a?"Rechteckprofil 25 \xD7 70 mm (Art. 6049) \xB7 Zusatzpfosten 60 \xD7 60, damit jedes Feld unter 3 m bleibt":"Zaunpaneele 154 \xD7 25 mm mit U-Profil rundum \xB7 Zusatzpfosten 60 \xD7 60, damit jedes Feld unter 3 m bleibt";for(let[d,_]of[["cb-verkAn","verkAn"]])Y(d).checked=S[_];for(let d of Y("sel-verkwand").querySelectorAll("button"))d.querySelector("small").textContent=S.verk[d.dataset.v].an?"\u2713 verkleidet":"offen";Y("verk-einst").classList.toggle("aus",!S.verkAn),Y("grp-seiten").hidden=e||Fn(),Y("lbl-b").textContent=e?"Breite (Einfahrtseite)":"Breite (entlang der Hauswand)",Y("lbl-t").textContent=e?"Tiefe (Fahrzeugl\xE4nge)":t?"Tiefe (Lamellenl\xE4nge, max. 4 m)":"Tiefe (von der Wand nach vorne)",Y("titel").textContent=$r();let l=t?"sunpro":e?S.blech:S.eind,c=Object.keys(rs).filter(d=>S.verk[d].an).map(d=>{let _=S.verk[d];return`${rs[d]}: ${_.art==="zaun"?"Zaunpaneele":"Profil 25\xD770"} ${_.richt}, ${Np(_.farbe)}`}),h=Ya(),f=Object.entries({vorne:S.velV,links:S.velL,rechts:S.velR}).filter(([,d])=>d!=="keine").map(([d,_])=>`${d} ${_==="schieb"?"schiebbar":"fest"}`),m=[!t&&S.dachMark==="auf"&&`Aufdach (Stoff ${S.stoffDach})`,!t&&S.dachMark==="unter"&&`Unterdach (Stoff ${S.stoffDach})`,!t&&S.dachMark==="plissee"&&`Plissee (${S.plisseeStoff}, Profil ${Ba[S.plisseeProfil][0]})`,S.zipV&&"eZip vorne",S.zipL&&"eZip links",S.zipR&&"eZip rechts"].filter(Boolean);Y("spec").textContent=`${kn(S.b)} \xD7 ${kn(S.t)}${S.produkt==="tds"&&S.h!==245?` \xB7 H\xF6he ${kn(S.h)}`:""}${os()?` \xB7 Treppe von links ca. ${kn(S.treppeH)} hoch${S.easyRail?"":", Glas vorne unten schr\xE4g (Sonderma\xDF)"}`:""} \xB7 ${xp[l]} \xB7 RAL ${S.farbe} ${Js[S.farbe][0]}${e?"":" \xB7 "+(S.montage==="frei"?"freistehend":"Wandmontage")}${(e||S.produkt==="tds")&&c.length?` \xB7 Verkleidung ${c.join(" | ")}`:""}${h.length?` \xB7 Keil-Festverglasung ${h.join("/")}`:""}${e?"":["links","rechts","vorne"].filter(d=>Vr(d)!=="keine"&&!Vr(d).startsWith("vel")).map(d=>` \xB7 ${d}: ${Hp[Vr(d)]}`).join("")}${!t&&S.ledAnz?` \xB7 ${S.ledAnz} LED-Spots`:""}${t?` \xB7 Lamellen in Gestellfarbe${S.ledBand?`, ${S.ledBand} LED-B\xE4nder`:""}${Object.keys(Ys).filter(d=>S[d]).map(d=>", "+Ys[d][0]).join("")}`:""}${!e&&f.length?` \xB7 Velaris ${f.join(", ")} (${Fr[S.velLam][0]})`:""}${!e&&m.length?` \xB7 Markisen: ${m.join(", ")}${S.zipV||S.zipL||S.zipR?` (eZip-Stoff ${S.stoffZip})`:""}`:""}`,Fn()&&(Y("spec").textContent=Bh(S,zh).info),Y("flaeche").textContent=(S.b*S.t/1e4).toLocaleString("de-DE",{maximumFractionDigits:1})+" m\xB2";let g=Y("preisbox");if(g.hidden=!S.preis,S.preis){let d=Lp();Y("p-dach").textContent=xt(d.dach),Y("p-mont").textContent=xt(d.mont),Y("p-mont-info").textContent=d.montInfo,Y("p-lief").textContent=xt(d.lief),Y("p-netto").textContent=xt(d.netto),Y("p-brutto").textContent=xt(d.brutto),Y("p-hinweis").hidden=!d.hinweis,Y("p-mark-z").hidden=!d.mark,d.mark&&(Y("p-mark").textContent=d.mark.offen&&!d.mark.preis?"auf Anfrage":xt(d.mark.preis)+(d.mark.offen?" + Anfrage":""),Y("p-mark-info").textContent=d.mark.info),Y("p-spx-z").hidden=!d.spx,d.spx&&(Y("p-spx").textContent=xt(d.spx.preis),Y("p-spx-info").textContent=d.spx.info),d.spOffen&&(Y("p-dach").textContent="auf Anfrage"),Y("p-vel-z").hidden=!d.vel,d.vel&&(Y("p-vel").textContent=d.vel.offen&&!d.vel.preis?"auf Anfrage":xt(d.vel.preis)+(d.vel.offen?" + Anfrage":""),Y("p-vel-info").textContent=d.vel.info),Y("p-glas-z").hidden=!d.glas,d.glas&&(Y("p-glas").textContent=d.glas.offen&&!d.glas.preis?"auf Anfrage":xt(d.glas.preis)+(d.glas.offen?" + Anfrage":""),Y("p-glas-info").textContent=d.glas.info),Y("p-led-z").hidden=!d.led,d.led&&(Y("p-led").textContent=xt(d.led.preis),Y("p-led-info").textContent=d.led.info),Y("p-verk-z").hidden=!d.verk,d.verk&&(Y("p-verk").textContent=xt(d.verk.preis),Y("p-verk-info").textContent=d.verk.info)}}var Wr=new Image;Wr.src=Wh;function Vp(){Ap();let n=on.domElement,e=n.width,t=n.height,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d");s.drawImage(n,0,0);let r=Math.round(t*.11),o=s.createLinearGradient(0,t-r*1.6,0,t);o.addColorStop(0,"rgba(15,15,15,0)"),o.addColorStop(1,"rgba(15,15,15,0.85)"),s.fillStyle=o,s.fillRect(0,t-r*1.6,e,r*1.6);let a=Math.round(t*.03),l=r*.75,c=Wr.complete?l*Wr.width/Wr.height:0;c&&s.drawImage(Wr,a,t-l-a*.8,c,l);let h=e-c-a*3,f=(m,g,d,_,p)=>{let u=Math.round(r*d);for(s.font=`${g} ${u}px "Segoe UI", Arial`;u>8&&s.measureText(m).width>h;)u--,s.font=`${g} ${u}px "Segoe UI", Arial`;s.fillStyle=_,s.fillText(m,e-a,p)};return s.textAlign="right",f($r(),900,.3,"#fff",t-a-r*.38),f(Y("spec").textContent.split(" \xB7 ").slice(0,4).join(" \xB7 "),600,.2,"#e8b840",t-a),i}function Iv(){let n=Vp(),e=document.createElement("a");e.download=`Antonov_${$r().replace(/\s+/g,"_")}_${S.b}x${S.t}.png`,e.href=n.toDataURL("image/png"),e.click()}function Qa(){let n=Wa.clientWidth,e=Wa.clientHeight;on.setSize(n,e),Za.setSize(n,e),ri&&(ri.setPixelRatio(on.getPixelRatio()),ri.setSize(n,e)),rn.aspect=n/e,rn.updateProjectionMatrix()}window.addEventListener("resize",Qa);window.addEventListener("orientationchange",()=>setTimeout(()=>{Qa(),jr("perspektive")},300));var Lv=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function is(n){if(Ai){let e=Math.min(1,(n-Ai.s)/900),t=Lv(e);rn.position.lerpVectors(Ai.p0,Ai.p1,t),Jt.target.lerpVectors(Ai.t0,Ai.t1,t),e>=1&&(Ai=null)}if(si!==null){let e=Math.min(.05,(n-(is.t||n))/1e3),t=25*e;S.ausfahren=Math.abs(si-S.ausfahren)<=t?si:S.ausfahren+Math.sign(si-S.ausfahren)*t,ls&&ls(S.ausfahren/100),zp(),S.ausfahren===si&&(si=null)}if(Ci!==null){let e=.4*Math.min(.05,(n-(is.t||n))/1e3);S.glasAuf=Math.abs(Ci-S.glasAuf)<=e?Ci:S.glasAuf+Math.sign(Ci-S.glasAuf)*e;for(let t of uu)t(S.glasAuf);S.glasAuf===Ci&&(Ci=null)}if(Ri!==null){let e=.4*Math.min(.05,(n-(is.t||n))/1e3);S.velAuf=Math.abs(Ri-S.velAuf)<=e?Ri:S.velAuf+Math.sign(Ri-S.velAuf)*e,qr&&qr(S.velAuf),S.velAuf===Ri&&(Ri=null)}if(ii!==null){let e=40*Math.min(.05,(n-(is.t||n))/1e3);S.spWinkel=Math.abs(ii-S.spWinkel)<=e?ii:S.spWinkel+Math.sign(ii-S.spWinkel)*e,as&&as(S.spWinkel),Y("in-spwinkel").value=Math.round(S.spWinkel),Y("spwinkel-w").textContent=Math.round(S.spWinkel)+"\xB0",S.spWinkel===ii&&(ii=null)}is.t=n,Jt.update(),Ap(),Za.render(Ot,rn),requestAnimationFrame(is)}Qa();Bt();jr("perspektive",!0);requestAnimationFrame(is);{let n=document.getElementById("laden");n&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add("weg"),setTimeout(()=>n.remove(),600)}))}function Dv(n){let e=i=>i.replace(/\n/g,`
  `),t=[`Dach (Listenpreis): ${xt(n.dach)}`,`Montage: ${xt(n.mont)} (${n.montInfo})`,`Lieferung: ${xt(n.lief)}`];return n.led&&t.push(`LED-Spots: ${xt(n.led.preis)}
  ${n.led.info}`),n.verk&&t.push(`Verkleidung: ${xt(n.verk.preis)}
  ${e(n.verk.info)}`),n.glas&&t.push(`Verglasung: ${xt(n.glas.preis)}${n.glas.offen?" + Anfrage":""}
  ${e(n.glas.info)}`),n.spx&&t.push(`Lamellendach-Extras: ${xt(n.spx.preis)}
  ${e(n.spx.info)}`),n.vel&&t.push(`Velaris: ${xt(n.vel.preis)}${n.vel.offen?" + Anfrage":""}
  ${e(n.vel.info)}`),n.mark&&t.push(`Markisen: ${xt(n.mark.preis)}${n.mark.offen?" + Anfrage":""}
  ${e(n.mark.info)}`),t.push(`Netto: ${xt(n.netto)}`,`Brutto inkl. 19 % MwSt.: ${xt(n.brutto)}`),n.hinweis&&t.push("Ab 4,05 m Tiefe ggf. zzgl. Verst\xE4rkung (beim Aufma\xDF)."),t.join(`
`)}{let n=window.matchMedia("(max-width: 760px)"),e=document.querySelector(".abschl"),t=document.querySelector("#panel .scroll"),i=document.querySelector(".fuss"),s=()=>{n.matches?t.appendChild(e):i.before(e),e.classList.toggle("im-scroll",n.matches)};s(),n.addEventListener("change",s)}ip({zustand:()=>S,titel:()=>$r(),spec:()=>Y("spec").textContent.split(" \xB7 ").join(`
`),preis:Lp,preisText:Dv,bild:()=>Vp().toDataURL("image/jpeg",.88),nachAbschluss:()=>{S.preis=!0,Bt()}})});Uv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
