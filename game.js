function preInit(){console.log("Game : preInti()"),ws.Keyboard.init();var e=ws.stage.StageManager.getInstance();e.changeStage(e.GAME)}var ws;!function(e){var t=function(){function e(){}return e}();e.Game=t}(ws||(ws={})),window.onload=preInit;var ws;!function(e){var t=38,n=37,o=40,a=39,s=8,i=function(){function i(){}return i.init=function(){document.addEventListener("keydown",this.doKeyDown,!0),document.addEventListener("keyup",this.doKeyUp,!0)},i.doKeyDown=function(i){i.keyCode!=o&&i.keyCode!=t&&i.keyCode!=n&&i.keyCode!=a&&i.keyCode!=e.Keyboard.keySpace&&i.keyCode!=s||(i.returnValue=!1,i.preventDefault()),e.Keyboard.oldKey!=i.keyCode&&(e.Keyboard.oldKey=i.keyCode,e.stage.StageManager.getInstance().doKeyDown(i))},i.doKeyUp=function(t){e.Keyboard.oldKey==t.keyCode&&(e.Keyboard.oldKey=-1),e.stage.StageManager.getInstance().doKeyUp(t)},i.oldKey=-1,i.keyEnter=13,i.keyESC=27,i.keySpace=32,i.keyZ=90,i.keyDelete=8,i.keyE=69,i.keyShift=16,i}();e.Keyboard=i}(ws||(ws={}));var ws;!function(e){var t;!function(e){var t=function(){function e(){}return e.prototype.startStage=function(){this.e=!1;var e=document.getElementById("stage_game");e.className="display",e=null},e.prototype.finishStage=function(){var e=document.getElementById("stage_game");e.className="none_display",e=null},e.prototype.updateSystem=function(){},e.prototype.updateRenderer=function(){},e.prototype.doKeyUp=function(e){console.log(e)},e.prototype.doKeyDown=function(e){},e.prototype.onMouseMove=function(e){},e.prototype.onMouseDown=function(e){},e.prototype.onDoubleClick=function(e){},e.prototype.onMouseUp=function(e){},e}();e.StageGame=t}(t=e.stage||(e.stage={}))}(ws||(ws={}));var ws;!function(e){var t;!function(t){var n=function(){function n(){}return n.getInstance=function(){return null==this.instance&&(this.instance=new n,this.instance.init()),this.instance},n.prototype.init=function(){this.stage=null,this.GAME=new t.StageGame},n.prototype.changeStage=function(t){console.log("[StageManager] : ステージを切り替え, "+t.toString());var n=document.getElementById("stage_transition");n.className="stage_transition_display",n.style.backgroundColor="#000000",this.next=t,n=null,setTimeout(e.stage.StageManager.changeStageStart,500)},n.changeStageStart=function(){var t=e.stage.StageManager.getInstance();null!=t.next&&(t.hasStage()&&t.stage.finishStage(),setTimeout(e.stage.StageManager.changeStageFinish,30))},n.changeStageFinish=function(){var t=e.stage.StageManager.getInstance();if(null!=t.next){t.stage=t.next,t.stage.startStage();var n=document.getElementById("stage_transition");n.style.backgroundColor="transparent",n=null,t.next=null,setTimeout(e.stage.StageManager.changeStageFinished,600)}},n.changeStageFinished=function(){var e=document.getElementById("stage_transition");e.className=null,e=null},n.prototype.hasStage=function(){return null!=this.stage},n.prototype.updateSystem=function(){this.hasStage()&&this.stage.updateSystem()},n.prototype.updateRenderer=function(){this.hasStage()&&this.stage.updateRenderer()},n.prototype.doKeyUp=function(e){return this.hasStage()?this.stage.doKeyUp(e):void 0},n.prototype.doKeyDown=function(e){return this.hasStage()?this.stage.doKeyDown(e):void 0},n.prototype.onMouseMove=function(e){return this.hasStage()?this.stage.onMouseMove(e):void 0},n.prototype.onMouseDown=function(e){return this.hasStage()?this.stage.onMouseDown(e):void 0},n.prototype.onDoubleClick=function(e){return this.hasStage()?this.stage.onDoubleClick(e):void 0},n.prototype.onMouseUp=function(e){return this.hasStage()?this.stage.onDoubleClick(e):void 0},n.prototype.getStage=function(){return this.stage},n.instance=null,n}();t.StageManager=n}(t=e.stage||(e.stage={}))}(ws||(ws={}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vdHlwZXNjcmlwdC93cy9HYW1lLnRzIiwibWFpbi90eXBlc2NyaXB0L3dzL0tleWJvYXJkLnRzIiwibWFpbi90eXBlc2NyaXB0L3dzL3N0YWdlL1N0YWdlR2FtZS50cyIsIm1haW4vdHlwZXNjcmlwdC93cy9zdGFnZS9TdGFnZU1hbmFnZXIudHMiXSwibmFtZXMiOlsicHJlSW5pdCIsImNvbnNvbGUiLCJsb2ciLCJ3cyIsIktleWJvYXJkIiwiaW5pdCIsInN0YWdlTWFuYWdlciIsInN0YWdlIiwiU3RhZ2VNYW5hZ2VyIiwiZ2V0SW5zdGFuY2UiLCJjaGFuZ2VTdGFnZSIsIkdBTUUiLCJHYW1lIiwid2luZG93Iiwib25sb2FkIiwia2V5VXAiLCJrZXlsZWZ0Iiwia2V5VW5kZXIiLCJrZXlSaWdodCIsImtleURlbGV0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoaXMiLCJkb0tleURvd24iLCJkb0tleVVwIiwiZV8iLCJrZXlDb2RlIiwia2V5U3BhY2UiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwib2xkS2V5Iiwia2V5RW50ZXIiLCJrZXlFU0MiLCJrZXlaIiwia2V5RSIsImtleVNoaWZ0IiwiU3RhZ2VHYW1lIiwicHJvdG90eXBlIiwic3RhcnRTdGFnZSIsImUiLCJkb21fIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUiLCJmaW5pc2hTdGFnZSIsInVwZGF0ZVN5c3RlbSIsInVwZGF0ZVJlbmRlcmVyIiwia2V5XyIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwib25Nb3VzZVVwIiwiaW5zdGFuY2UiLCJzdGFnZV8iLCJ0b1N0cmluZyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibmV4dCIsInNldFRpbWVvdXQiLCJjaGFuZ2VTdGFnZVN0YXJ0IiwibV8iLCJoYXNTdGFnZSIsImNoYW5nZVN0YWdlRmluaXNoIiwiY2hhbmdlU3RhZ2VGaW5pc2hlZCIsImdldFN0YWdlIl0s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