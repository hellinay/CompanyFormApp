import $ from "jquery"; //Load jquery
import React, { Component, createRef } from "react"; //For react component
import ReactDOM from "react-dom";
import jQuery from 'jquery'

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

//For Load Selected Elements. Not compulsory. If you don't want this. Don't pass formData in below formBuilder initialize.
const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "FormBuilder"
  }
];

document.body.style.margin = "30px"; //For add margin in HTML body

jQuery(function($) {
  var formRenderOpts = {
    formData,
    dataType: 'JSON'
  };
  var $fbTemplate1 = $(document.getElementById("build-wrap-1"));
  var formData = JSON.stringify([{ type: "text", label: "Input Label" }]);
  var formBuilder = $fbTemplate1.formBuilder({ formData });
  var fbRender = document.getElementById('fb-render'),
  formData;
  try {
    console.log(formBuilder.formData);
  } catch (err) {
    console.warn("formData not available yet.");
    console.error("Error: ", err);
  }

  formBuilder.promise.then(function(fb) {
    console.log(fb.formData);
  });

  document.getElementById("getData").addEventListener("click", function() {
    console.log(formBuilder.formData);
    $(fbRender).formRender(formRenderOpts);

  });
});

//Initialize formBuilder 
class FormBuilder extends Component {

  
  fb = createRef();


  render() {
    return <>
    <div className="btn-wrap"><button type="button" id="getData">Get Data</button></div>
    <div id="build-wrap-1" ref={this.fb} />
    </> ;
  }


}

//Return Initialized formBuilder set it to HTML
export default FormBuilder;