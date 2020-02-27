var student = { id:34, name:"shahriar", phone: 0934, age: 34};
var student2 = { id:35, name:"kamal", phone: 0897, age: 54};

console.log(student);
console.log(student2);

// var studentName = student["name"];
// var phoneNo = student2.phone;

var no3 = "phone";
// console.log(studentName);
var phoneNu = student2[no3];
console.log(phoneNu);
var phoneProName = ["phone"]
//Phone Update
student2.phone = 897768;
student2["phone"] = 5343543;
student2[phoneProName] = 445344534;
//add property
student2.cenema = "ogni";
student2["cenema"]="smatrt";
console.log(student2);