const fix40 = require('./spec/fix40.js');
const fix41 = require('./spec/fix41.js');
const fix42 = require('./spec/fix42.js');
const fix43 = require('./spec/fix43.js');
const fix44 = require('./spec/fix44.js');
//const fixt11 = require('./spec/fixt11.js');

const parse = (fix_str, delimiter = '') => {

  let arr = (fix_str.split(delimiter)).slice(0, -1);
  let version = getTagValue(arr[0]);
  let spec = getSpec(version);
  let res = {};

  if (spec) {
    //console.log("Fix version detected : " + version);

    let Obj = getHeaderTrailer(arr, spec);
    res = {
      Header : Obj.header,
      Body : Obj.body,
      Trailer : Obj.trailer
    }
    if(Obj.error.length > 0) {
      res["Error"] = Obj.error;
    }

    //console.log(res);
    //console.log(Obj.error);
  } else {
    console.log("Fix version not supported.");
  }

  return res;
}

const getTagValue = (str) => {
  return (str.split('='))[1];
}

const getTag = (str) => {
  return (str.split('='))[0];
}

const deleteByTag = (arr, tag) => {
  arr.forEach(function(elem, index) {
    if (getTag(elem) == tag) {
      arr.splice(index, 1);
    }
  });
}

const getHeaderTrailer = (arr, spec) => {
  let sliced_arr = arr.slice(1); // Shallow copy of array "arr" excluding first element
  let Header = {};
  let Body = {};
  let Trailer = {};

  let temp_arr = sliced_arr.slice(0); // Cloning array "sliced_arr"

  //console.log("==> temp_arr");
  //console.log(temp_arr);

  // Required items
  sliced_arr.forEach(function(arr_elem, rindex) {
    spec.Header.Required.forEach(function(hreq_elem) {
      if (getTag(arr_elem) == hreq_elem) {
        Header[spec.Header[hreq_elem]] = getTagValue(arr_elem);
        deleteByTag(temp_arr,hreq_elem);
      }
    });
    spec.Trailer.Required.forEach(function(treq_elem) {
      if (getTag(arr_elem) == treq_elem) {
        Trailer[spec.Trailer[treq_elem]] = getTagValue(arr_elem);
        deleteByTag(temp_arr,treq_elem);
      }
    });
  });

  // Optional items
  sliced_arr.forEach(function(arr_elem, oindex) {
    spec.Header.Optional.forEach(function(hopt_elem) {
      if (getTag(arr_elem) == hopt_elem) {
        Header[spec.Header[hopt_elem]] = getTagValue(arr_elem);
        deleteByTag(temp_arr,hopt_elem);
      }
    });
    spec.Trailer.Optional.forEach(function(topt_elem) {
      if (getTag(arr_elem) == topt_elem) {
        Trailer[spec.Trailer[topt_elem]] = getTagValue(arr_elem);
        deleteByTag(temp_arr,topt_elem);
      }
    });
  });

  // Body
  let Error = temp_arr.slice(0); // Cloning array "temp_arr"

  for (const key in spec.Fields) {
    temp_arr.forEach(function(temp_elem, tindex) {
      if ((getTag(temp_elem) == key) && (!spec.Fields.HasValue.includes(key))) {
        Body[spec.Fields[key]] = getTagValue(temp_elem);
        deleteByTag(Error,getTag(temp_elem));
      } 
      if ((getTag(temp_elem) == key) && (spec.Fields.HasValue.includes(key))) {
        Body[spec.Fields[key]] = getValueDictionary(spec.Fields.ValueDictionary, key, getTagValue(temp_elem));
        deleteByTag(Error,getTag(temp_elem));
      } 
    });
  }
  
  return {
    header: Header,
    body: Body,
    trailer: Trailer,
    error: Error
  };
}

/*****************************************************
    Get the value from spec.Fields.ValueDictionary
*****************************************************/
const getValueDictionary = (dictObj, key, tag) => {
  let res = "";
  for (const prop in dictObj) {
    if(prop == key) {
      dictObj[prop].forEach(function(elem, index) {
        Object.keys(elem).forEach(function(item){
          if (item == tag) {
            res = elem[item];
          }  
        });
      });
    }
  }
  return res;
}

/****************************************
    Get the "fix spec lookup object"
****************************************/
const getSpec = version => {
  let res = null;

  switch (version) {
    case "FIX.4.0":
      res = fix40;
      break;
    case "FIX.4.1":
      res = fix41;
      break;
    case "FIX.4.2":
      res = fix42;
      break;
    case "FIX.4.3":
      res = fix43;
      break;
    case "FIX.4.4":
      res = fix44;
      break;
  }

  return res;
}

exports.parse = parse;