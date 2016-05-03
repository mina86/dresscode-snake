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
var f,l,r,t,u,v,w,x,y;function A(e,b){return e+(Math.random()*(b+1-e)>>>0)}
(function(){var e=document.getElementById("canvas");if(e&&e.getContext){var b=e.getContext("2d"),h=document.getElementById("title"),T=document.getElementById("scores"),E=document.getElementById("score"),p=!1,P=function(){f=Math.max(.97*f,100);a:{var d=B[0].x,c=B[0].y;switch(C){case "l":d=(d?d:40)-1;break;case "r":d=(d+1)%40;break;case "u":c=(c?c:30)-1;break;case "d":c=(c+1)%30}d={x:d,y:c};if(c=D(d)){if(0>c){r();break a}c&&(B.maxLength+=c)}B.unshift(d);F(d,-1);G();var b;B.length<=B.maxLength?l(B.length):
(F(B.pop(),0),b=B.length-1,y(B[b],H(B[b],B[b-1])));c?J(c):(b=A(-100,250),b>=K.length||(0<b?(F(K[b],0),J(b)):-b<L.length&&(F(L[-b],0),(d=M())?L[-b]=d:L.splice(b,1))))}p&&window.setTimeout(P,f)},g=10,Q=function(){var b=h.getBoundingClientRect(),c=Math.ceil(b.bottom),N=Math.floor(E.getBoundingClientRect().top),m=Math.floor(b.right)-Math.ceil(b.left)-1,q;g=Math.max(Math.min(Math.floor(m/40),Math.floor((N-c-1)/30)),2);e.width=m=40*g+1;e.height=q=30*g+1;e.style.top=String(c+Math.floor((N-c-q)/2))+"px";
e.style.left=String(b.left+Math.floor((b.right-b.left-m)/2))+"px"};window.a=Q;l=function(b){E.firstChild.nodeValue=String(b)};r=function(){p&&(p=!1,alert("Wynik: "+E.firstChild.nodeValue))};t=function(d){u(d);var c=g/2;b.beginPath();b.fillStyle="#f44336";b.arc(d.x*g+c,d.y*g+c,c,0,2*Math.PI,!1);b.fill()};v=function(d){u(d);b.fillStyle="#424242";b.fillRect(d.x*g+1,d.y*g+1,g-1,g-1)};u=function(d){var c=d.x*g;d=d.y*g;b.a="1px";b.strokeStyle="#388e3c";b.fillStyle="#c8e6c9";b.fillRect(c,d,g+1,g+1);b.beginPath();
c+=.5;d+=.5;b.moveTo(c,d);b.lineTo(c+g,d);b.lineTo(c+g,d+g);b.lineTo(c,d+g);b.closePath();b.stroke()};var R={l:"r",r:"l",u:"d",d:"u"},I=function(d,c){u(d);var e=d.x*g,m=d.y*g,q=e+g+1,h=m+g+1,k=(g-1)/4;b.beginPath();b.fillStyle="#aa00ff";for(var p=1;d=arguments[p];++p)switch(d){case "l":var n=m+k;b.rect(e,n,q-k-e,h-k-n);break;case "r":var n=e+k,z=m+k;b.rect(n,z,q-n,h-k-z);break;case "u":n=e+k;b.rect(n,m,q-k-n,h-k-m);break;case "d":n=e+k,z=m+k,b.rect(n,z,q-k-n,h-z)}b.fill();return[e+k,m+k,q-k,h-k]};
w=function(d,c){function e(c,d){b.arc(g[0]+c*h,g[1]+d*h,.5*h,0,2*Math.PI,!1)}var g=I(d,R[c]||c.charAt(1)),h=(g[2]-g[0])/3;c=c.charAt(0);b.beginPath();b.fillStyle="#2196f3";"u"!=c&&"l"!=c||e(1,1);"u"!=c&&"r"!=c||e(2,1);"d"!=c&&"l"!=c||e(1,2);"d"!=c&&"r"!=c||e(2,2);b.fill()};x=function(b,c){I(b,c.charAt(0),R[c]||c.charAt(1))};y=function(b,c){I(b,c.charAt(0))};window.onkeyup=function(d){if(!p){if(p)alert("Gra ci\u0105gle trwa.");else{(d=document.getElementById("welcome"))&&d.parentNode.removeChild(d);
e.style.display="block";T.style.display="block";Q();f=1E3;l(1);d=41*g;var c=31*g;b.fillStyle="#c8e6c9";b.fillRect(0,0,d,c);b.beginPath();b.strokeStyle="#388e3c";for(var h=0;40>=h;++h)b.moveTo(h*g+.5,.5),b.lineTo(h*g+.5,c+.5);for(c=0;30>=c;++c)b.moveTo(.5,c*g+.5),b.lineTo(d+.5,c*g+.5);b.stroke();O={};d={x:20,y:15};B=[d];B.maxLength=3;C="u";w(d,C);F(d,-1);c=0;K=[];do J(++c);while(5>c);L=[];for(c=0;10>c;++c)(d=M())&&L.push(d);window.setTimeout(P,f);p=!0}return!0}d=d||window.event;switch(d.keyCode||d.which){case 37:case 65:case 83:case 79:switch(1==
B.length?C:H(B[1],B[0])){case "l":C="d";break;case "r":C="u";break;case "u":C="l";break;case "d":C="r"}G(!0);return!1;case 39:case 68:case 70:case 69:case 85:switch(1==B.length?C:H(B[1],B[0])){case "l":C="u";break;case "r":C="d";break;case "u":C="r";break;case "d":C="l"}G(!0);return!1}return!0}}else alert("Twoja przegl\u0105darka nie obs\u0142uguje elementu CANVAS.")})();var C,O;function D(e){return O[e.x+":"+e.y]||0}function F(e,b){b?O[e.x+":"+e.y]=b:(delete O[e.x+":"+e.y],u(e))}var B,K,L;
function S(e){return Math.abs(B[0].x-e.x)+Math.abs(B[0].y-e.y)}function J(e){for(var b=0;100>b;++b){var h={x:A(0,39),y:A(0,29)};if(!D(h)&&(50<=b||3<=S(h))){F(h,e);t(h);K[e]=h;return}}delete K[e]}function M(){for(var e=0;100>e;++e){var b={x:A(0,39),y:A(0,29)};if(!D(b)&&(50<=e||3<=S(b)))return F(b,-1),v(b),b}return null}function H(e,b){switch(e.x-b.x){case 0:break;case -1:case 39:return"r";default:return"l"}switch(e.y-b.y){case -1:case 29:return"d";default:return"u"}}
function G(e){1==B.length?w(B[0],C):(w(B[0],C+H(B[0],B[1])),e||(2<B.length?x(B[1],H(B[1],B[0])+H(B[1],B[2])):y(B[1],H(B[1],B[0]))))};
