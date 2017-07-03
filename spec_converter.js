/******************************************************
  Program to convert "QuickFIXspec" json files to
  "spec" json files that features lookup array tables
  for faster parsing. 
******************************************************/

// Example convert "/QuickFIXspec/Qfix44.js" to "spec/fix44.js"

const fix = require('./QuickFIXspec/Qfix44.js');
const fs = require('fs');
const fixfilename = "fix44.js";

let res = {};

res.Version = "FIX.4.4";
res.Header = {};
res.Header.Required = [];
res.Header.Optional = [];
fix.header.field.forEach(function(h_elem) {
  fix.fields.field.forEach(function(f_elem) {
    if (h_elem.name == f_elem.name) {
      res.Header[f_elem.number] = h_elem.name;
      if (h_elem.required == "Y") {
        res.Header.Required.push(f_elem.number);
      }
      if (h_elem.required == "N") {
        res.Header.Optional.push(f_elem.number);
      }
    }
  });
});

res.Trailer = {};
res.Trailer.Required = [];
res.Trailer.Optional = [];
fix.trailer.field.forEach(function(h_elem) {
  fix.fields.field.forEach(function(f_elem) {
    if (h_elem.name == f_elem.name) {
      res.Trailer[f_elem.number] = h_elem.name;
      if (h_elem.required == "Y") {
        res.Trailer.Required.push(f_elem.number);
      }
      if (h_elem.required == "N") {
        res.Trailer.Optional.push(f_elem.number);
      }
    }
  });
});


res.Messages = {};
fix.messages.message.forEach(function(h_elem) {
  let temp = {};
  temp.name = h_elem.name;
  temp.msgcat = h_elem.msgcat;
  res.Messages[h_elem.msgtype] = temp;
});


res.Fields = {};
res.Fields.HasValue = [];
fix.fields.field.forEach(function(f_elem) {
  res.Fields[f_elem.number] = f_elem.name;
  if (f_elem["value"] != null) {
    res.Fields.HasValue.push(f_elem.number);
  }
});

res.Fields.ValueDictionary = {};
let temp_enum = {};
fix.fields.field.forEach(function(f_elem) {
  res.Fields[f_elem.number] = f_elem.name;

  if (f_elem["value"] != null) {
    let temp_arr = [];
    for (item in f_elem.value) {
      let temp_obj = {};
      temp_obj[f_elem.value[item].enum] = f_elem.value[item].description;
      temp_arr.push(temp_obj);
    }
    temp_enum[f_elem.number] = temp_arr;
  }
});
res.Fields.ValueDictionary = temp_enum;

fs.writeFile("./spec/" + fixfilename, JSON.stringify(res), (err) => {
  if (err) {
    console.error(err);
    return;
  };
  console.log("Spec file has been created");
});