"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var num=document.querySelector("h1"),counter=1,maxSpeed=100,minSpeed=10,Enemy=function(e,n){this.x=e,this.y=n,this.speed=3+Math.floor(Math.random()*(maxSpeed-minSpeed)+minSpeed),this.sprite="images/enemy-bug.png"};function reset(){player.x=200,player.y=407,counter=1,num.textContent="LEVEL"+counter}Enemy.prototype.update=function(e){this.x+=this.speed*e*counter,500<this.x&&(this.x=-70),player.x>=this.x-73&&player.x<=this.x+73&&player.y>=this.y-60&&player.y<=this.y+60&&reset()},Enemy.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)};var Player=function(){function t(e,n){_classCallCheck(this,t),this.x=e,this.y=n,this.sprite="images/char-boy.png"}return _createClass(t,[{key:"update",value:function(){}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"handleInput",value:function(e){"left"==e&&0<this.x&&(this.x-=100),"right"==e&&this.x<400&&(this.x+=100),"up"==e&&0<this.y&&(this.y-=84),"down"==e&&this.y<400&&(this.y+=84),this.y<=0&&(this.y=407,counter++,num.textContent="LEVEL"+counter,swal("Congratulations","You Won!  Now Next level","success"))}}]),t}(),allEnemies=[],loction=[55,140,218];loction.forEach(function(e){newEnemy=new Enemy(0,e),allEnemies.push(newEnemy)});var player=new Player(200,407);document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var t,n=e.document,i=e.window,r=n.createElement("canvas"),o=r.getContext("2d");function a(){var n,e=Date.now();n=(e-t)/1e3,allEnemies.forEach(function(e){e.update(n)}),player.update(),function(){var e,n,t=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(o.clearRect(0,0,r.width,r.height),e=0;e<6;e++)for(n=0;n<5;n++)o.drawImage(Resources.get(t[e]),101*n,83*e);allEnemies.forEach(function(e){e.render()}),player.render()}(),t=e,i.requestAnimationFrame(a)}r.width=505,r.height=606,n.body.appendChild(r),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png"]),Resources.onReady(function(){t=Date.now(),a()}),e.ctx=o}(void 0);!function(){var t={},i=[];function n(e){if(t[e])return t[e];var n=new Image;n.onload=function(){t[e]=n,r()&&i.forEach(function(e){e()})},t[e]=!1,n.src=e}function r(){var e=!0;for(var n in t)t.hasOwnProperty(n)&&!t[n]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){n(e)}):n(e)},get:function(e){return t[e]},onReady:function(e){i.push(e)},isReady:r}}();