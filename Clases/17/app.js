
/* -------------------------------- Variables ------------------------------- */

let sumAges = 0;
let studentsNames = [], lessThanFourty = [];
let exists = false;


const students = [
    {
        age : 25,
        name : 'Carlos',
        career: 'Ingeniería'
    },

    {
        age : 30,
        name : 'Rodrigo',
        career: 'Licenciatura'
    },

    {
        age : 29,
        name : 'Reinaldo',
        career: 'Matemáticas'
    },

    {
        age : 42,
        name : 'Martin',
        career: 'Filosofía'
    }
];



/* --------------------------- Procesos y Salidas --------------------------- */

//Recorrido - Primer método.
for(let i = 0; i < students.length; i++) {
    sumAges += students[i].age;
};
console.log(`- Primer método: ${sumAges}.`);


//Recorrido - Segundo método.
sumAges = 0;
for (let i of students) {
    sumAges += i.age;
};
console.log(`- Segundo método: ${sumAges}.`);


//Recorrido - Tercer método.
sumAges = 0;
students.forEach(i => sumAges += i.age);
console.log(`- Tercer método: ${sumAges}.`);


//Obtener estudiantes menores de 40 años - Primer método.
for (let i of students) {
    if (i.age < 40) {
        lessThanFourty.push(i.name);
    };
};
console.log(`\n- Estudiantes menores a 40 años (primer método): ${lessThanFourty}.`);


//Obtener estudiantes menores de 40 años - Segundo método.
lessThanFourty = students.filter(i => i.age < 40);
console.log('- Estudiantes menores a 40 años (segundo método):', lessThanFourty);


//¿Existe algún estudiante con 25 años? - Primer método.
for (let i = 0; (i < students.length) && (!exists); i++) {
    exists = students[i].age === 25;
};
console.log(`\n- ¿Existe algún estudiante menor a 25 años? (primer método): ${exists}.`);


//¿Existe algún estudiante con 25 años? - Segundo método.
exists = students.some(i => i.age === 25);
console.log(`- ¿Existe algún estudiante menor a 25 años? (segundo método): ${exists}.`);


//Obtener los nombres de los estudiantes.
studentsNames = students.map(i => i.name);
console.log(`\n- Nombres de los estudiantes: ${studentsNames}.`);