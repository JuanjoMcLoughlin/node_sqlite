const sqlite = require('sqlite3');
let sql = "";
const db = new sqlite.Database('./data.db',sqlite.OPEN_READWRITE,(error)=>{
    if(error){
        console.error(error);
    }

});

// sql =`create table if not exists categories (
//       id integer primary key autoincrement,
//       name varchar(100) not null
// )`;

// db.run(sql, (error) => {
//     if(error){
//         console.error(error);
//     }
//     console.log(sql);
// });


// sql=`insert into categories(name) values(?)`;

// db.run(sql,['Categoría 2'],(error)=>{
//     if(error){
//         console.error(error);
//     }
// });

// sql = `update categories set name = ? where id = ?`;

// db.run(sql,['Categoría 1B',1],(error)=>{
//     if(error){
//         console.error(error);
//     }
// });

// sql = `delete from categories where id = ?`;
// db.run(sql,[1],(error) =>{
//     if(error){
//         console.log(error);
//     }
// })

// sql = `select * from categories`;

// db.all(sql,(error,rows)=>{
//     if(error){
//         console.error(error);
//     }else{
//         console.log(rows);
//     }
// });

sql = `select * from categories where id = ?`;

db.get(sql,[3],(error,rows)=>{
    if(error){
        console.error(error);
    }else{
        console.log(rows);
    }
})

db.close((error)=>{
    if(error){
        console.error(error);
    }
})

