(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),s=a.n(r),c=a(5),i=a(6),l=a(8),u=a(7),h=a(9),d=a(28),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("li",null,o.a.createElement("div",{className:"book",style:{padding:"20px",paddingTop:"1.5em",width:"200px"}},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{title:"Book Cover",className:"book-cover",style:{border:"2px solid #333",borderRadius:"10px",width:132,height:200,backgroundImage:'url("'.concat(this.props.book.imageLinks&&this.props.book.imageLinks.thumbnail||"No image found!",'")')}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.props.book.shelf||"none",onChange:function(t){return e.props.updateBook(e.props.book,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Plan to Read"),o.a.createElement("option",{value:"read"},"Finished Reading"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors",style:{paddingTop:"5px",lineHeight:"1.1"}},this.props.book.authors&&this.props.book.authors[0]||"Anonymous")))}}]),t}(n.Component),p=function(e){var t=e.name,a=e.books,n=e.updateBook;return o.a.createElement("div",{className:"bookshelf",style:{textAlign:"center"}},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},a.map(function(e,t){return o.a.createElement(m,{updateBook:n,book:e,key:t})}))))},b=a(12),f="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:k},E=function(){return fetch("".concat(f,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateBook=function(e,t){y(e,t).then(function(n){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})},a.state={books:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(t){e.setState({books:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(p,{updateBook:this.updateBook,name:"Currently Reading",books:this.state.books.filter(function(e){return"currentlyReading"===e.shelf})}),o.a.createElement(p,{updateBook:this.updateBook,name:"Plan to Read",books:this.state.books.filter(function(e){return"wantToRead"===e.shelf})}),o.a.createElement(p,{updateBook:this.updateBook,name:"Finished Reading",books:this.state.books.filter(function(e){return"read"===e.shelf})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(d.a,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){a.setState({query:e},a.submitSearch)},a.updateBook=function(e,t){y(e,t).then(function(n){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})},a.state={books:[],results:[],query:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(t){e.setState({books:t})})}},{key:"submitSearch",value:function(){var e,t=this,a=this.state.query;if(0===a.length||"undefined"===typeof a||null===a)return this.setState({results:[]});(e=this.state.query,fetch("".concat(f,"/search"),{method:"POST",headers:Object(b.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){if(e.error)return t.setState({results:[]});var a=t.state.books;return e.forEach(function(e){var t=a.filter(function(t){return t.id===e.id});t[0]&&(e.shelf=t[0].shelf)}),t.setState({results:e})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e,t=this;return""===this.state.query?e=o.a.createElement("p",{className:"search-status"},"Type one or more keywords above to start searching..."):0===this.state.results.length&&(e=o.a.createElement("p",{className:"search-status"},"No results found. Try different keywords...")),o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(d.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",autoFocus:!0,value:this.state.query,onChange:function(e){return t.updateQuery(e.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.results.map(function(e,a){return o.a.createElement(m,{updateBook:t.updateBook,key:a,book:e})}))),e)}}]),t}(n.Component),N=(a(24),a(30)),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N.a,{exact:!0,path:"/",component:g}),o.a.createElement(N.a,{exact:!0,path:"/search",component:j}))}}]),t}(o.a.Component),S=(a(26),a(29));s.a.render(o.a.createElement(S.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.23df59ea.chunk.js.map