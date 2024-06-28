// const student = {
//     name:"krupa",
//     marks:93,
//     printMarkStudent: function(){
//         console.log(" student marks=",this.marks);
//     },

// };
// const teacher= {
//     name:"abha",
//     marks:98,
//     printMarkTeacher()
//     {
//         console.log(" teacher marks=",this.marks);
//     },

// };
// const college= {
//     name:"vgec",
//     area:"ahmedabad",
//     printArea:function()
//     {
//         console.log(" area=",this.area);
//     },

// };
// // not woking
// // teacher.__proto__=college;
// teacher.__proto__=student;

const emp = {
    salary: 10000,
    tax() {
        console.log("tax rate is 10%");
    },
};

const admin = {

    salary: 5000,
    tax() {
        console.log("tax rate is 20%");
    },


};
admin.__proto__ = emp;

// objects and class example

class Car {
    constructor() {
        console.log("accent");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
        console.log("hi");
    }
}

let Nano = new Car("Nano");
//  Nano.setBrand("nano");
let accent = new Car();

// Inheritance
class parents {
    hello() {
        console.log("parent");
    }
}
class child extends parents {

}
let obj = new child();


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);


    }
    updateData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);

    }

}
class Admin extends User {

    editData(user, newName, newEmail) {
        user.updateData(newName, newEmail);
        console.log('user data updated successfully');

    }
    constructor(name, email) {
        super(name,email);
        
    }

  

}

let krupa = new User("krupabhavsar", "k@gmail.com");
krupa.viewData();

let adminUser = new Admin("Admin", "admin@example.com");
adminUser.editData(krupa, "Krupa Patel", "krupa.patel@example.com");
krupa.viewData();


