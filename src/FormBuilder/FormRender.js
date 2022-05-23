import { render } from "@testing-library/react";
import $ from "jquery"; //Load jquery
import jQuery from "jquery";
//import'./form-render'

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias
require('formBuilder/dist/form-render.min.js')
require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder"); // For FormBuilder

var formInputVal=null;
var htmlRender;


jQuery(function() {
  var formData = formInputVal,
    formRenderOpts = {
      dataType: 'xml',
      formData: formData
    };
    var fbTemplate = document.getElementById('fb-template');
  var renderedForm = $('<div>');
  renderedForm.formRender(formRenderOpts);
  const addLineBreaks = html => html.replace(new RegExp("><", "g"), ">\n<");
  console.log(renderedForm.html());
  htmlRender=renderedForm.html()
  console.log("render")

  $('.fb-render').formRender({
    dataType: 'xml',
    formData: renderedForm.html()
  });
});

export default function FormRender({formInput}) {

  console.log(formInput+ "input recieved")
  formInputVal=formInput;
  var inputOccur;
  console.log(htmlRender +" rendered element")
  if(formInputVal!=null){
    inputOccur=true;
  
  }
 // return <div class="fb-render" dangerouslySetInnerHTML={{__html: htmlRender}}></div>

 return <div class="fb-render">{htmlRender}</div>

 }

