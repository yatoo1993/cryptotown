(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ownership"],{"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),o=n("7dd0"),a="String Iterator",s=r.set,c=r.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),o=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),l=o.values;for(var f in r){var d=i[f],h=d&&d.prototype;if(h){if(h[c]!==l)try{a(h,c,l)}catch(p){h[c]=l}if(h[u]||a(h,u,f),r[f])for(var m in o)if(h[m]!==o[m])try{a(h,m,o[m])}catch(p){h[m]=o[m]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var h=d.prototype=l.prototype;h.constructor=d;var m=h.toString,p="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(a(f,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},e7b1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ownership"},[n("div",{staticClass:"ownership-form"},[n("div",{staticClass:"title"},[t._v("置业信息")]),n("md-input-item",{attrs:{type:"number",placeholder:"当前排最多可以购买"+t.block_buy_limit+"地块"},model:{value:t.order_number,callback:function(e){t.order_number=e},expression:"order_number"}},[n("span",{attrs:{slot:"right"},slot:"right"},[t._v("*"+t._s(t.setting.block_price.value)+"USDT")])]),n("div",{staticClass:"fee flex-row"},[n("span",[t._v("手续费："+t._s(t.fee)+"排单币")]),n("span",[t._v("实际消耗："+t._s(t.give)+"USDT")])]),n("div",{staticClass:"submit-btn"},[t.can_confirm||t.can_confirm_and_book?n("md-button",{attrs:{type:"primary",round:"",loading:t.luck},on:{click:t.submit}},[t._v("确定")]):t._e(),t.can_confirm_and_book?n("div",{staticClass:"change-ownership",on:{click:t.toogle}},[t._v("预约购买>")]):t._e(),t.can_book?n("md-button",{attrs:{type:"primary",round:"",loading:t.luck},on:{click:t.submit}},[t._v("预约购买")]):t._e()],1),n("div",{staticClass:"sub-title"},[t._v("置业说明")]),n("div",{staticClass:"content"},[t._v(" 1.每个用户最多购买当前排地块数量"+t._s(100*t.setting.block_buy_limit.value)+"%地块 "),n("br"),t._v(" 2.置业手续费为实际消耗总价的"+t._s(100*t.setting.block_buy_fee.value)+"%价值的排单币 "),n("br"),t._v("3.预约购买，每排地块出售完之后，下一排的地块 将于5天后开启，但可以提前预约购买，只能预约 购买下一排 ")])],1)])},r=[];n("d3b7"),n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var a=n("5530"),s=n("5880"),c={name:"ownership",data:function(){return{order_number:"",remainCells:null,remainFee:null,luck:!1}},computed:Object(a["a"])({},Object(s["mapState"])(["setting","userInfo"]),{},Object(s["mapGetters"])(["open_at","appointment_at","floor_id"]),{can_book:function(){var t=Date.now();return t-this.appointment_at<0},can_confirm_and_book:function(){var t=Date.now();return t>this.appointment_at&&t<this.open_at},can_confirm:function(){var t=Date.now();return t-this.open_at>0},fee:function(){return 0===this.setting.tt_usdt_price.value?"":Math.floor(this.setting.block_buy_fee.value*this.order_number/this.setting.tt_usdt_price.value*this.setting.block_price.value*100)/100},give:function(){return this.order_number*this.setting.block_price.value},block_buy_limit:function(){return this.remainCells||""}}),methods:Object(a["a"])({},Object(s["mapActions"])(["getHome","getSetting","paymentSetpOne","paymentSetpTwo","paymentSetpThree","paymentCancel"]),{toogle:function(){this.show_book=!0},checkOne:function(){var t=this;return this.luck=!0,this.paymentSetpOne().then((function(e){var n=e.remainCells,i=e.remainFee;t.remainCells=n,t.remainFee=i})).finally((function(){return t.luck=!1}))},isPassOne:function(){return this.remainCells>this.order_number&&this.remainFee>this.fee},submit:function(){var t=this;if(!this.luck){if(!window.web3)return this.$toast.failed("非Dapp环境无法付款");if(!this.order_number)return this.$toast.failed("请输入地块数量");if(this.luck=!0,this.isPassOne()){var e={floor_id:this.floor_id,order_number:this.order_number};this.paymentSetpTwo(e).then((function(e){t.sendPay(e.data)})).catch((function(e){t.$toast.failed(e.data.message),t.luck=!1}))}else this.luck=!1,this.remainCells<this.order_number&&this.$toast.info("最多购买"+this.remainCells),this.remainFee<this.fee&&this.$toast.info("剩余手续费"+this.remainFee)}},sendPay:function(t){var e=this;window.web3.eth.sendTransaction(Object(a["a"])({},t)).then((function(n){var i=n.transactionHash;e.paymentSetpThree({order_id:t.order_id,hash:i}).then((function(){e.$toast.succeed("交易成功")}))})).catch((function(n){var i="未知错误";i="object"===o(n)?n.message:"string"===typeof n?n:"请确认是否是本平台地址",e.$dialog.alert({content:i,confirmText:"确定"}),e.paymentCancel({order_id:t.order_id})})).finally((function(){return e.luck=!1}))}}),created:function(){this.checkOne(),this.getSetting(),this.getHome(!0)}},u=c,l=n("2877"),f=Object(l["a"])(u,i,r,!1,null,null,null);e["default"]=f.exports}}]);