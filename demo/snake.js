/*

 Snake game framework.
 Copyright Google, Inc. All rights reserved.
 Written by Michal Nazarewicz <mina86@mina86.com>

 Licensed under the Apache License, Version 2.0 (the "License"); you may not
 use this file except in compliance with the License.  You may obtain a copy
 of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 License for the specific language governing permissions and limitations under
 the License.

 Snake game.
 Copyright Google, Inc. All rights reserved.
 Written by Michal Nazarewicz <mina86@mina86.com>

 Licensed under the Apache License, Version 2.0 (the "License"); you may not
 use this file except in compliance with the License.  You may obtain a copy
 of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 License for the specific language governing permissions and limitations under
 the License.
*/
var f,l,r,u,v,w,x,y,z,B;function C(e,b){return e+(Math.random()*(b-e)>>>0)}
(function(){var e=document.getElementById("canvas");if(e&&e.getContext){var b=e.getContext("2d"),h=document.getElementById("title"),U=document.getElementById("scores"),F=document.getElementById("score"),p=!1,Q=function(){f=Math.max(.97*f,100);a:{var d=D[0].x,c=D[0].y;switch(E){case "l":d=(d?d:40)-1;break;case "r":d=(d+1)%40;break;case "u":c=(c?c:30)-1;break;case "d":c=(c+1)%30}d={x:d,y:c};if(c=G(d)){if(0>c){u();break a}c&&(D.maxLength+=c)}D.unshift(d);H(d,-1);I();var b;D.length<=D.maxLength?l(D.length):
(H(D.pop(),0),b=D.length-1,B(D[b],K(D[b],D[b-1])));c?L(c):(b=C(-100,250),b>=M.length||(0<b?(H(M[b],0),L(b)):-b<N.length&&(H(N[-b],0),(d=O())?N[-b]=d:N.splice(b,1))))}p&&window.setTimeout(Q,f)},g=10,R=function(){var d=h.getBoundingClientRect(),b=Math.ceil(d.bottom),t=Math.floor(F.getBoundingClientRect().top),m=Math.floor(d.right)-Math.ceil(d.left)-1,q;g=Math.max(Math.min(Math.floor(m/40),Math.floor((t-b-1)/30)),2);e.width=m=40*g+1;e.height=q=30*g+1;e.style.top=String(b+Math.floor((t-b-q)/2))+"px";
e.style.left=String(d.left+Math.floor((d.right-d.left-m)/2))+"px"};window.a=R;l=function(b){F.firstChild.nodeValue=String(b)};r=function(){if(p)alert("Gra ci\u0105gle trwa.");else{var d=document.getElementById("welcome");d&&d.parentNode.removeChild(d);e.style.display="block";U.style.display="block";R();f=1E3;l(1);var d=41*g,c=31*g;b.fillStyle="#c8e6c9";b.fillRect(0,0,d,c);b.beginPath();b.strokeStyle="#388e3c";for(var t=0;40>=t;++t)b.moveTo(t*g+.5,.5),b.lineTo(t*g+.5,c+.5);for(c=0;30>=c;++c)b.moveTo(.5,
c*g+.5),b.lineTo(d+.5,c*g+.5);b.stroke();P={};d={x:20,y:15};D=[d];D.maxLength=3;E="u";y(d,E);H(d,-1);c=0;M=[];do L(++c);while(5>c);N=[];for(c=0;10>c;++c)(d=O())&&N.push(d);window.setTimeout(Q,f);p=!0}};u=function(){p&&(p=!1,alert("Wynik: "+F.firstChild.nodeValue))};v=function(d){w(d);var c=g/2;b.beginPath();b.fillStyle="#f44336";b.arc(d.x*g+c,d.y*g+c,c,0,2*Math.PI,!1);b.fill()};x=function(d){w(d);b.fillStyle="#424242";b.fillRect(d.x*g+1,d.y*g+1,g-1,g-1)};w=function(d){var c=d.x*g;d=d.y*g;b.b="1px";
b.strokeStyle="#388e3c";b.fillStyle="#c8e6c9";b.fillRect(c,d,g+1,g+1);b.beginPath();c+=.5;d+=.5;b.moveTo(c,d);b.lineTo(c+g,d);b.lineTo(c+g,d+g);b.lineTo(c,d+g);b.closePath();b.stroke()};var S={l:"lr",r:"rl",u:"ud",d:"du"},J=function(d,c){w(d);var e=d.x*g,m=d.y*g,q=e+g+1,h=m+g+1,k=(g-1)/4;b.beginPath();b.fillStyle="#aa00ff";for(var p=1;d=arguments[p];++p)switch(d){case "l":var n=m+k;b.rect(e,n,q-k-e,h-k-n);break;case "r":var n=e+k,A=m+k;b.rect(n,A,q-n,h-k-A);break;case "u":n=e+k;b.rect(n,m,q-k-n,h-
k-m);break;case "d":n=e+k,A=m+k,b.rect(n,A,q-k-n,h-A)}b.fill();return[e+k,m+k,q-k,h-k]};y=function(d,c){function e(d,c){b.arc(g[0]+d*h,g[1]+c*h,.5*h,0,2*Math.PI,!1)}c=S[c]||c;var g=J(d,c.charAt(1)),h=(g[2]-g[0])/3;c=c.charAt(0);b.beginPath();b.fillStyle="#2196f3";"u"!=c&&"l"!=c||e(1,1);"u"!=c&&"r"!=c||e(2,1);"d"!=c&&"l"!=c||e(1,2);"d"!=c&&"r"!=c||e(2,2);b.fill()};z=function(b,c){c=S[c]||c;J(b,c.charAt(0),c.charAt(1))};B=function(b,c){J(b,c.charAt(0))};window.onkeyup=function(b){if(!p)return r(),!0;
b=b||window.event;switch(b.keyCode||b.which){case 37:case 65:case 83:case 79:switch(1==D.length?E:K(D[1],D[0])){case "l":E="d";break;case "r":E="u";break;case "u":E="l";break;case "d":E="r"}I(!0);return!1;case 39:case 68:case 70:case 69:case 85:switch(1==D.length?E:K(D[1],D[0])){case "l":E="u";break;case "r":E="d";break;case "u":E="r";break;case "d":E="l"}I(!0);return!1}return!0}}else alert("Twoja przegl\u0105darka nie obs\u0142uguje elementu CANVAS.")})();var E,P;
function G(e){return P[e.x+":"+e.y]||0}function H(e,b){b?P[e.x+":"+e.y]=b:(delete P[e.x+":"+e.y],w(e))}var D,M,N;function T(e){return Math.abs(D[0].x-e.x)+Math.abs(D[0].y-e.y)}function L(e){for(var b=0;100>b;++b){var h={x:C(0,40),y:C(0,30)};if(!G(h)&&(50<=b||3<=T(h))){H(h,e);v(h);M[e]=h;return}}delete M[e]}function O(){for(var e=0;100>e;++e){var b={x:C(0,40),y:C(0,30)};if(!G(b)&&(50<=e||3<=T(b)))return H(b,-1),x(b),b}return null}
function K(e,b){switch(e.x-b.x){case 0:break;case -1:case 39:return"r";default:return"l"}switch(e.y-b.y){case -1:case 29:return"d";default:return"u"}}function I(e){1==D.length?y(D[0],E):(y(D[0],E+K(D[0],D[1])),e||(2<D.length?z(D[1],K(D[1],D[0])+K(D[1],D[2])):B(D[1],K(D[1],D[0]))))};
