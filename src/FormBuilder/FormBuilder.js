import $ from "jquery"; //Load jquery
import React, { Component, createRef, useState, useRef } from "react"; //For react component
import jQuery from "jquery";
import classes from "./FormBuilder.module.css";
import { useNavigate } from "react-router-dom";


window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder"); // For FormBuilder

var formData = JSON.stringify([{ type: "text", label: "Input Label" }]);
var temp;
var xmlObj;
var submitclicked=false;
var template;


export default function FormBuilder({ setFormInput }) {
  let navigate = useNavigate();

  function confirmHandler(event) {
    event.preventDefault();
    
    console.log("clicked",xmlObj.formData);
    submitclicked=true
    console.log(JSON.stringify(temp) + " temp");
    setFormInput(xmlObj.formData);
    //navigate("/main", { replace: true });
    navigate("/main", { formData:xmlObj.formData });

  }

  const fb = useRef(null);

  return (
    <>
      <form className={classes.form}>
        <div>
          <div id="form-builder-template" />
          <button
            onClick={confirmHandler}
            className={classes.btn}
            type="button"
            id="getData"
          >
            Get Data
          </button>
        </div>
      </form>
      {submitclicked && <div className="fb-render" id="build-wrap" dangerouslySetInnerHTML={{__html: xmlObj.formData}}></div>}
      {/* <div class="fb-render">
        <textarea id="fb-template">
        </textarea>
      </div> */}
    </>
  );
}

//Return Initialized formBuilder set it to HTML



jQuery(function ($) {
  var $fbTemplate1 = $(document.getElementById("form-builder-template"));
  var formBuilder = $fbTemplate1.formBuilder({ formData });
  temp = formBuilder;
  template = $fbTemplate1;

  // set < code > innerText with escaped markup
  try {
    console.log(formBuilder.formData);
  } catch (err) {
    console.warn("formData not available yet.");
    console.error("Error: ", err);
  }

  formBuilder.promise.then(function (fb) {
    console.log(fb.formData);
  });
  var formData ;

  document.getElementById("getData").addEventListener("click", function () {
    console.log(formBuilder.formData + "jquery data");
    var formRenderOpts = {
      dataType: 'xml',
      formData: formBuilder.formData
    };

    var formData={
      type:'',
      label:'',
      className:'',
      name:'',
      subtype:''
    }
  
    console.log(formRenderOpts)
    var renderedForm = $('<div>');
    xmlObj=formRenderOpts;
    renderedForm.formRender(formRenderOpts);
    
});
});
