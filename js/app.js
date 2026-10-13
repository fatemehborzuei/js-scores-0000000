const students = [
    { name: "tina", score: 20 },
    { name: "sanaz", score: 17 },
    { name: "maria", score: 19 },
    { name: "fatima", score: 18 }
];

for (let student of students) {
    console.log("tina " + student.name);
    console.log("20"  + student.score);
    console.log(" sanaz" + student.name);
    console.log("17"  + student.score);
    console.log(" maria" + student.name);
    console.log("19"  + student.score);
    console.log(" fatima" + student.name);
    console.log("18"  + student.score);
}

   {
    if (student.score >= 10) {
        console.log("وضعیت: قبول");
    } else {
        console.log("وضعیت: مردود");
    }

    console.log("----------------");
}
