import $ from "jquery"; //Load jquery
import React, { Component, createRef, useState, useRef } from "react"; //For react component
import jQuery from "jquery";
import classes from "./FormBuilder.module.css";
import { useNavigate } from "react-router-dom";

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder"); // For FormBuilder

let html;
var formData = JSON.stringify([{ type: "text", label: "Input Label" }]);
var temp;
var xmlObj;
var submitclicked = false;
var template;
let navigate;

export default function FormBuilder({ setFormInput }) {


  navigate=useNavigate();
  function confirmHandler(event) {
    event.preventDefault();

   // console.log("clicked", xmlObj.formData);
    //submitclicked = true;
 //   console.log(JSON.stringify(temp) + " temp");
    setFormInput(html);
   // navigate("/main", { formData: xmlObj.formData });
   navigate("/main")
  }

  const fb = useRef(null);



  return (
    <>
      <form className={classes.form}>
        <div className={classes.formContainer}>
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
      {submitclicked && (
        <div
          className="fb-render"
          id="build-wrap"
          dangerouslySetInnerHTML={{ __html: xmlObj.formData }}
        ></div>
      )}
      {/* <div class="fb-render">
        <textarea id="fb-template">
        </textarea>
      </div> */}
    </>
  );
}

//Return Initialized formBuilder set it to HTML

jQuery(function ($) {
 //let navigate = useNavigate();

// navigate=useNavigate();
  let options = {
    dataType: 'xml',
    onSave: function(evt, formData){showPreview(formData)},
    formData: '<form-template></form-template>'
  };
  var $fbTemplate1 = $(document.getElementById("form-builder-template"));
  //var formBuilder = $fbTemplate1.formBuilder({ formData });

  const formBuilder =$fbTemplate1.formBuilder(options);
  function showPreview(formData) {
    let formRenderOpts = {
      dataType: 'xml',
      formData
    };
  temp = formBuilder;
  template = $fbTemplate1;
  
  let $renderContainer = $('<form/>');
  $renderContainer.formRender(formRenderOpts);
  html = `<!doctype html><title>Form Preview</title><body class="container"><h1>Preview</h1><hr>${$renderContainer.html()}</body></html>`;
  var formPreviewWindow = window.open('', 'formPreview', 'height=480,width=640,toolbar=no,scrollbars=yes');
  formPreviewWindow.document.write(html);




  try {
    console.log(formBuilder.formData);
  } catch (err) {
    console.warn("formData not available yet.");
    console.error("Error: ", err);
  }

  formBuilder.promise.then(function (fb) {
    console.log(fb.formData);
  });
  var formData;  
  console.log(formRenderOpts)
    
  }

  document.getElementById("getData").addEventListener("click", () => {
    console.log("external save clicked");
    const result = formBuilder.actions.save();
    //console.log("result:", result);
   

    showPreview(result);
  });


    //xmlObj = formRenderOpts;
    //renderedForm.formRender(formRenderOpts);
  });

