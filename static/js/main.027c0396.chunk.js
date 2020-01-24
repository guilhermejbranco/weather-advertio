(this["webpackJsonpadvertio-wheater"]=this["webpackJsonpadvertio-wheater"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/logo.9a636878.svg"},function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(16),a(1)),s=a(2),o=a(4),h=a(3),m=a(6),d=a(5),u=(a(17),a(7),a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={error:null,apiKey:"379b341aebf8e4800119466e15cd6e58",isLoaded:!1,items:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.props.data.city.length>3&&this.getWeather()}},{key:"getWeather",value:function(){var e=this,t=this.props.data.fahrenheit?"imperial":"metric";fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.props.data.city+"&units="+t+"&appid="+this.state.apiKey).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,temperature:t.main,system:t.sys,weather:t.weather})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,i=e.temperature,c=e.system,l=e.weather;if(t)return r.a.createElement("div",null,"Error: ",t.message);if(a){if(200===n.cod){var s=new Date(1e3*c.sunset),o=new Date(1e3*c.sunrise);return r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Current Weather"," ",r.a.createElement("span",{className:"small highlightColor"}," ",(new Date).toLocaleDateString()," ")),r.a.createElement("hr",null),r.a.createElement("div",{className:"container m-0"},r.a.createElement("div",{className:"half-box half-left"},r.a.createElement("h3",{className:"weatherDescription m-0"},l[0].main),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(l[0].icon,"@2x.png"),className:"weatherIcon",alt:l[0].main})),r.a.createElement("div",{className:"half-box half-right"},r.a.createElement("h3",{className:"currentTemperature m-0"},Math.round(i.temp),"\xba"," ",r.a.createElement("span",{className:"small"},"(wind - ",n.wind.speed,")")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"half-box half-left"},r.a.createElement("h5",null,r.a.createElement("small",null,"Sunrise")," ",r.a.createElement("span",{className:"highlightColor"},String(o.getHours()).padStart(2,"0")," :"," ",String(o.getMinutes()).padStart(2,"0")))),r.a.createElement("div",{className:"half-box half-right"},r.a.createElement("h5",null,r.a.createElement("small",null,"Sunset")," ",r.a.createElement("span",{className:"highlightColor"},String(s.getHours()).padStart(2,"0")," :"," ",String(s.getMinutes()).padStart(2,"0"))))))}return this.props.data.city.length<4?r.a.createElement("div",null,r.a.createElement("h5",{className:""},"Please select a city from the list above.")):r.a.createElement("div",{className:"errorBlock"},r.a.createElement("h5",{className:"errorMessage"},n.message))}return r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component)),p=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={error:null,apiKey:"379b341aebf8e4800119466e15cd6e58",isLoaded:!1,items:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.props.data.city.length>3&&this.getWeather()}},{key:"getWeekDay",value:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getDay()]}},{key:"getWeather",value:function(){var e=this,t=this.props.data.fahrenheit?"imperial":"metric";fetch("http://api.openweathermap.org/data/2.5/forecast?q="+this.props.data.city+"&units="+t+"&appid="+this.state.apiKey).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,cod:t.cod,items:t.list})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.cod,c=t.items;return a?r.a.createElement("div",null,"Error: ",a.message):n?"200"===i?r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Forecast ",r.a.createElement("span",{className:"small"},"(at 12:00)")),r.a.createElement("hr",null),r.a.createElement("ul",{className:"forecastList"},c.map((function(t){return t.dt_txt&&t.dt_txt.split(" ")[1].includes("12")&&r.a.createElement("li",{key:t.dt},r.a.createElement("h5",{className:"m-0"},r.a.createElement("small",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"third-box half-left vertical-center highlightColor small"},e.getWeekDay(t.dt_txt)),r.a.createElement("div",{className:"third-box half-center vertical-center"},t.weather[0].main),r.a.createElement("div",{className:"third-box half-right"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),className:"forecastWeatherIcon",alt:t.weather[0].main}),r.a.createElement("div",{className:" vertical-center"},Math.round(t.main.temp),"\xba"))))))})))):r.a.createElement("div",{className:"errorBlock"},r.a.createElement("h5",null,"Forecast not Available.")):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component)),f=(a(20),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],city:"Lisbon"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"change",value:function(e){this.props.cityhandler(e),this.setState({city:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return n.sort((function(e,t){if(""!==e.capital&&""!==t.capital)return e.capital=e.capital.toLowerCase(),t.capital=t.capital.toLowerCase(),e.capital<t.capital?-1:e.capital>t.capital?1:0})),t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",null,r.a.createElement("input",{list:"cities",name:"city",onChange:this.change.bind(this),value:this.state.city}),r.a.createElement("datalist",{id:"cities",className:"custom-select"},n.map((function(e){return e.capital&&r.a.createElement("option",{key:e.alpha3Code,value:e.capital},e.capital)})))):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component)),v=a(10),E=a.n(v);a(21);var g=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h4",null,r.a.createElement("img",{src:E.a,className:"Header-logo",alt:"logo"}),"Wheater",r.a.createElement("span",{className:"highlightColor"},"/"),"io"))},y=(a(22),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={isChecked:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"change",value:function(e){this.props.unithandler(e),this.setState({isChecked:e.target.checked})}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("label",{className:"switch switch-flat"},r.a.createElement("input",{className:"switch-input",type:"checkbox",onChange:this.change.bind(this),value:this.state.isChecked}),r.a.createElement("span",{className:"switch-label","data-on":"Fahrenheit","data-off":"Celsius"}),r.a.createElement("span",{className:"switch-handle"})))}}]),t}(r.a.Component)),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={city:"Lisbon",fahrenheit:!1},a.cityhandler=a.cityhandler.bind(Object(m.a)(a)),a.unithandler=a.unithandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"cityhandler",value:function(e){this.setState({city:e.target.value})}},{key:"unithandler",value:function(e){this.setState({fahrenheit:e.target.checked})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"background"}),r.a.createElement("div",{className:"App-header"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"third-box half-right"},r.a.createElement(f,{cityhandler:this.cityhandler})),r.a.createElement("div",{className:"third-box half-center"},r.a.createElement("h1",{className:"capitalize"},r.a.createElement("div",{className:"container"},this.state.city))),r.a.createElement("div",{className:"third-box half-left"},r.a.createElement(y,{unithandler:this.unithandler}))),r.a.createElement("div",{className:"container containerResponsive"},r.a.createElement("div",{className:"half-box half-left"},r.a.createElement(u,{data:this.state})),r.a.createElement("div",{className:"half-box half-right"},r.a.createElement(p,{data:this.state})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.027c0396.chunk.js.map