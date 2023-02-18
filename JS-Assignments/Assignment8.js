//Write a JavaScript program to check if a given string contains equal number of p's and t's present. 
function equal_pt(str) {
    var str_p = str.replace(/[^p]/g, "");
  
    var str_t = str.replace(/[^t]/g, "");
  
    var p_num = str_p.length;
    var s_num = str_t.length;
  
    return p_num === s_num;
  }
  console.log(equal_pt("past past"));
  console.log(equal_pt("pass test"));