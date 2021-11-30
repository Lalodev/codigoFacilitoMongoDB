show databases;

db;

use codigofacilito;

show collections;

//Documentos -> Objetos de tipo JSON
user1 = {
    "username": "user1",
    "age": 27,
    "email": "user1@example.com"
}


// Se válida que la base de datos exista.
// Se válida que la colección exista.
// Se procede a insertar el documento.
db.users.insert(user1);

show collections;

show databases;

user2 = {
    "username": "user2",
    "age": 29,
    "email": "user2@example.com"
}

user3 = {
    "username": "user3",
    "age": 29,
    "email": "user3@example.com"
}

//Mostarnado documentos de collection
db.users.find();

// ObjectId -> Se conforma de 4 secciones
// 1. Timestamp
// 2. Identificador para el servidor
// 3. PID Procces ID
// 4. Autoincrement

// InsertOne()
user4 = {
    "username": "user4",
    "age": 45,
    "email": "user4@example.com"
}

db.users.insertOne(user4);

//InsertMany()
db.users.insertMany([
{
"username":"user5",
	"age":60,
	"email":"user5@example.com"
},
{
"username":"user6",
	"age":11,
	"email":"user6@example.com"
},
{
"username":"user7",
	"age":21,
	"email":"user7@example.com"
}
]);

db.users.find();

// Es mejor usar insertOne() e insertMany(), según documentación oficial.


//Save
//Sí el onjeto no existe, se crea. 
//Sí el objeto sí existe, se actualiza.

user8 = {
"username":"user8",
	"age":56,
	"email":"user8@example.com"
}

db.users.save(user8);

 //Consultas
 db.users.insertMany([
	{
	"username":"user9",
	"email":"user9@example.com",
    "age":23,
	"status":"inactive"
	},
	{
	"username":"user10",
	"email":"user10@example.com",
    "age":31,
	"status":"inactive"
	},
	{
	"username":"user11",
	"email":"user11@example.com",
    "age":8,
	"status":"inactive"
	},
	{
	"username":"user12",
	"email":"user12@example.com",
    "age":15,
	"status":"active"
	},
]);

//Ejercicios
// Obtener el usuario con username user7
db.users.find({username: "user7"}); //Retorna un cursos

// Retorna un documento
db.users.findOne({
    username: "user7"
});

// Obtener todos los usuarios con una edad mayor a 10
db.users.find({
    age: { $gt: 10 }
});

// ---- 
db.users.find({
    age: { $gt: 25 }
});

db.users.find({
    age: { $lte: 25}
});

// Operadores relacionales
// gt       >
// gte      >=
// lt         < 
// lte      <=
// ne       !=

// Obtener la cantidad de usuarios con una edad menor a 50
db.users.find({
    age: { $lt: 50 }
}).count();

// Obtener todos los usuarios con una edad mayor a 10 y cuyo estatus sea activo
db.users.find({
    $and: [
        { age: { $gt: 10 } },
        { status: "active" }
    ]
});

// Obtener todos los usuarios cuya edad no sea 11
db.users.find({
    age: { $ne: 11}
});

// Obtener todos los usuarios que tengan por edad: 27 0 40 u 11
db.users.find({
    $or: [
        { age: 27 },
        { age: 40 },
        { age: 11 }
    ]
});

db.users.find({
    age: { $in: [27, 40, 11] }
});

// Obtener todos los usuarios con atributo estatus
db.users.find({
    status: { $exists: true }
});

db.users.find({
    status: { $exists: false }
});

// Obtener todos los usuarios con estatus activo
db.users.find({
    status: "active"
});

db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: "active" }
    ]
});

// Obtener todos los usuarios con estatus activo y correo electronico
db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: "active"},
        { email: { $exists: true } }
    ]
});

// Obtener el usuario con mayor edad
// cursor.sort()
// cursor.limit()
// Desc: -1
// Asc: 1
db.users.find().sort({
    age: -1
}).limit(1);

// Obtener a los tres usuarios más jovenes
db.users.find().sort({
    age: 1
}).limit(3);

// ==
// attr: valor
// attr: {      }

//RegExp
db.users.find({
    email: /.com$/
});

db.users.find({
    email: /^user/
});

db.users.find({
    email: /^user1/
});

db.users.find({
    email: /@/
});

// Cursor devuelve 20 por página
// para movernos a la siguiente página escribimos en terminal 
it 

db.users.insertMany([
    {
        "username": "user13",
        "email": "user13@example.com",
        "age": 23
    },
    {
        "username": "user14",
        "email": "user14@example.com",
        "age": 31
    },
    {
        "username": "user15",
        "email": "user15@example.com",
        "age": 8,
        "status": "inactive"
    },
    {
        "username": "user16",
        "email": "user16@example.com",
        "age": 15,
        "status": "active"
    },
    {
        "username": "user17",
        "email": "user17@example.com",
        "age": 23
    },
    {
        "username": "user18",
        "email": "user18@example.com",
        "age": 31
    },
    {
        "username": "user19",
        "email": "user19@example.com",
        "age": 8,
        "status": "inactive"
    },
    {
        "username": "user20",
        "email": "user20@example.com",
        "age": 15,
        "status": "active"
    }
]);

db.users.insertMany([
    {
        "username": "user21",
        "email": "user21@example.com",
        "age": 23
    },
    {
        "username": "user22",
        "email": "user22@example.com",
        "age": 31
    },
    {
        "username": "user23",
        "email": "user23@example.com",
        "age": 8,
        "status": "inactive"
    },
    {
        "username": "user24",
        "email": "user24@example.com",
        "age": 15,
        "status": "active"
    }
]);

//contar
db.users.find().count();

//contar
db.users.find({ age: {$gte: 10}}).count();

// limitar 
db.users.find().limit(10);

//saltar documentos
db.users.find().skip(5);
db.users.find().skip(5).limit(5);

//ordenar
db.users.find().sort({ age: -1 });
db.users.find().sort({ age: -1 }).skip(2).limit(3);

//pretty()
db.users.find().sort({ age: -1 }).skip(2).limit(3).pretty();
db.users.find().pretty();

// find, sort, limit y skip > retornan cursores
// count, pretty

//guardar en variables, pero se puede consumirt solo una vez
var users = db.users.find();
users 

//forEach
db.users.find().forEach( user => print(user.username));

//Proyecciones
db.users.find(
    {}, //Definimos las condiciones
    {
        _id: false,
        username: true,
        email: true
    }
);

db.users.find(
    {},
    {
        _id: false,
        username: true,
        email: true
    }
);

db.users.find(
    {
        age: { $gte: 50 }
    },
    {
        _id: false,
        username: true,
        email: true
    }
);

// Actualizar documentos
db.user.find();

// Save
var user = db.users.findOne();

user.age = 28
user.email. = "user1@codigofacilito.com"
user.status = "active" //agregar nuevos atributos

db.users.save(user);

var user = db.users.findOne();
user.age = 29;
db.users.save(user);

// Update
// Actualziar por default un solo documento

db.users.update(
    {
        _id: ObjectId("619d155e6dc9137fdb593043")
    },
    {
        $set: { 
            username: "Cody",
            email: "info@codigofacilito.com",
            age: 10,
            profile_picture: "www.codigofacilito.com/user1"
        }
    }
);

db.users.update(
    {
        _id: ObjectId("619d155e6dc9137fdb593043")
    },
    {
        $unset: {
            profile_picture: true
        }
    }
);

db.users.update(
    {
        status: "inactive"
    },
    {
        $set: {
            status: "active"
        }
    },
    {
        multi: true
    }
);

//updateOne
//updateMany

db.users.updateOne(
    {
        username: "user9"
    },
    {
        $set: { status: "inactivo"}
    }
);

db.users.updateOne(
    {
        status: "active"
    },
    {
        $set: { status: "inactivo"}
    }
);

db.users.updateMany(
    {
        email: { $exists: true }
    },
    {
        $set:{
            bio: "Añade tu biografia"
        }
    }
);


// Incrementar/Decrementar valores númericos
db.users.updateMany(
    {},
    {
        $inc: {
            age: 1
        }
    }
);

db.users.updateMany(
    {},
    {
        $inc: {
            age: -1
        }
    }
);


// Remove

//Uno
db.users.remove({
    status: "inactivo"
});

// Todos
db.users.remove({});


// Eliminar Collections
db.users.drop();

// Eliminar Base de Datos
db.dropDatabase();


// Documentos embebidos
user13 = {
    "username": "user13",
    "email": "user13@example.com",
    "age": 29,
    "status": "active",
    "address": {
        "zip": 1001,
        "country": "MX"
    },
    "courses": ["Python","MongoDB","Ruby","Java"],
    "comments":[
        {
            body: "Best course",
            like: true,
            tags: ["MongoDB"]
        },
        {
            body: "Super excited",
            like: true
        },
        {
            body: "The course is OK"
        },
        {
            body: "Bad courses, Im disappointed",
            like: false,
            tags: ["bad","course","MongoDB"]
        }
    ]
}

user14 = {
    "username": "user14",
    "email": "user14@example.com",
    "age": 29,
    "status": "active",
    "comments": [
        {
            body: "Best course",
            like: true
        }
    ]
}

user15 = {
    "username": "user15",
    "email": "user15@example.com",
    "age": 29,
    "status": "active",
    "comments": [
        {
            body: "Best course",
            like: false
        }
    ]    
}

user16 = {
    "username": "user16",
    "email": "user16@example.com",
    "age": 29,
    "status": "active",
    "comments": [
        {
            body: "Best course",
            like: false
        }
    ] ,
    "address": {
        "zip": 1001,
        "country": "MX",
        "location": {
            "lat": 109,
            "long": -150
        }
    }   
}

db.users.insertMany(
    [
    user13, user14, user15]
    );


    // Ejercicios

    // Obtener todos los usuarios que radiquen en México.
    db.users.find({
        "address.country": "MX"
    }).pretty();

    // exemple
    db.users.find({
        "address.location.lat": 109 // dot notation
    });

    //
    db.users.find(
        {
        "address.country": "MX"
        },
        {
            username: true,
            "address.zip": true
        }
    );

    // Actualizar el código postal.
    db.users.updateMany(
        {
            "address.zip": {$exists: true}
        },
        {
            $set: {
                "address.zip": 110
            }
        }
    );

    //Añadir dirección a todos los usuarios que no la poseean
    db.users.updateMany(
        {
            "address": { $exists: false }
        },
        {
            $set: {
                "address": {
                    country: "MX",
                    zip: 2017
                }
            }
        }
    );
    
    db.users.updateOne(
        {
            username: "user13"
        },
        {
            $set: {
                "address.location": {
                    lat: -180,
                    long: 250
                }
            }
        }
    );

    // Obtener todos los usuarios que tengan en su listado de cursos Python.
        db.users.find(
            {
                courses: { $exists: true }
            }
        );

        db.users.find(
            {
                courses: { $exists: true },
                courses: "Python"
            }
        );

    // Obtener todos los usuarios con por lo menos un comentario positivo.
    // $elemMatch (Permite filtrar sobre atributos de documentos dentro de listas)
    db.users.find(
        {
            comments: {
                $elemMatch: {
                    like: true
                }
            }
        }
    );

    db.users.find(
        {
            comments: {
                $elemMatch: {
                    $and: [
                        { like: true },
                        { tags: { $exists: true }}
                    ]
                }
            }
        },
        {
            comments: true
        }
    );

    // Añadir un nuevo comentario positivo al listado de comentarios para el usuario 11.
    db.users.updateOne(
        {
            username: "user13"
        },
        {
            $push: {
                comments: {
                    like: true,
                    body: "El curso de MongoDB me esta gustando!"
                }
            }
        }
    );

    db.users.updateOne(
        {
            username: "user13"
        },
        {
            $push: {
                courses:  "Russt" 
            }
        }
    );

    db.users.updateOne(
        {
            username: "user13"
        },
        {
            $set: {
                "courses.4":  "Rust" 
            }
        }
    );

    // Añade una nueva etiqueta al comentario 4  del ususario 11.
   db.users.updateOne(
       {
           username: "user13"
       },
       {
           $push: {
               "comments.3.tags": "Tutor"
           }
       }
   );     

   db.users.updateOne(
       {
           username: "user13"
       },
       {
           $push: {
               "comments.0.tags": "Tutor"
           }
       }
   ); 
   
   db.users.updateOne(
       {
           username: "user13"
       },
       {
           $push: {
               "comments.1.tags": "Tutor"
           }
       }
   ); 

    // Actualiza el segundo comentario del usuario 13.
    db.users.updateOne(
       {
           username: "user13"
       },
       {
           $set: {
               "comments.1.body": "Me esta gustando el curso"
           }
       }
   ); 

   //Cuidado
   db.users.updateOne(
       {
           username: "user13"
       },
       {
           $set: {
               "comments.2": "Reemplazamos el documento por un string"
           }
       }
   ); 

   db.users.updateOne(
       {
           username: "user13"
       },
       {
           $set: {
               "comments.2": {
                   body: "Regresamos a un documento",
                   like: true
               }
           }
       }
   ); 

    // Actualiza el comentario negativo del usuario 11.
    db.users.updateOne(
       {
           username: "user13",
           "comments.like": false //Nos permite conocer el índice de los documentos dentro de la lista que queremos actualizar
       },
       {
           $set: {
               "comments.$.body": "El curso si me esta gustando",
               "comments.$.like": true
           },
           $unset: {
               "comments.$.tags": true
           }
       }
   ); 

   //Respaldo DataBase
   mongodump --db codigofacilito --out C:\Users\Lalo-Shi\backup
   mongorestore --db codigofacilito C:\Users\Lalo-Shi\backup\codigofacilito

   