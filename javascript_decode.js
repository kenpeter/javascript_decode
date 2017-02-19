//const input = "&#039;";

var Entities = require('html-entities').AllHtmlEntities;
 
entities = new Entities();
 
console.log(entities.encode('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;∆ 
console.log(entities.encodeNonUTF('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;&#8710; 
console.log(entities.encodeNonASCII('<>"&©®∆')); // <>"&©®&#8710; 
console.log(entities.decode('&lt;&gt;&quot;&amp;&copy;&reg;'));


// https://www.npmjs.com/package/html-entities
// https://stackoverflow.com/questions/18106164/unescape-apostrophe-39-in-javascript
console.log(entities.decode('&#039;')); 
