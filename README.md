# routerAppNativescript


arquitectura de carpetas

/ app => desarrollar hooks => livesync node_modules => dependencias platforms => android / iOS package.json => configuracion de las dependencias references.d.ts => mapa tsconfig.json => config typescript

/App_Resources => 
    /Android => 
        Manifest => configuracion app 
        app.gradle => config pluggins

        drawable => tamaños resources 
        /values => xml configuracion 


    /iOS =>
        / Assets.x => resources 
        files => no tocar


files => programacion y configuracion 
/css => .css styles


tns create NombreApp --ng
apk => MyNgApp/platforms/android/build/outputs/apk

tns run ios/android --emulator

tns livesync ios/android
Comandos del CLI

tns =>

create /path/ --appid com.jorgeucano.myApp --copy-from --template github --ng --tsc

tns init

platform list add remove update prepare

build emulate

deploy --device 192.123.2.1

run livesync

test init test device device log

doctor


App Mensajeria

Nativescript => bbdd, mensajeria push, login => firebase

Nativescript y Firebase (sdk angularfire2) => rxjs

Listado mensajes (chats) (master)
  => chat unico (creacion de chat) => chats por grupo
Listado de usuario (master)
 => usuario unico
creacion de usuario
 ( ABM )
Ajustes

Splash screen
icon 

Que vamos a necesitar?
computadora + nativescript integrado
dispositivo para pruebas
usuario google  => firebase
crear una app en firebase


##Cuales son nuestro flujos de trabajo

1 ) 
    splash => 
    login / create user => 
    formulario de creacion usuario => 
    creacion de usuario firebase =>
    mensaje bienvenida => 
    listado de chats 
2 ) 
    splash => 
    login => 
    listado de chats => 
    chat

3 ) 
    splash =>
    listado de chats =>
    chat

4 ) 
    push => 
    splash => 
    chat

5 ) 
    splash  => 
    listado de chats =>
    ajustes => 
    modificacion usuario

6 ) 
    splash =>
    listado de chats => 
    create chat =>
    create grupo =>
    agregar a las personas =>
    chat grupal 


pantallas => 
    splash, 
    login, 
    creacion de usuario, 
    listado de chats, 
    chat, 
    ajustes, 
    agregar chat grupal

api rest => firebase ( enviamos JSON, recibimos JSON ) √ 
            rest (recibir json, query => mysql (tablas) => rows (json) => enviar json
            rest (recibir json) => mongodb => enviar json

vamos a persistir datos
vamos hibrida => a nivel datos

login => si ( vamos a usar Firebase => persistencia de login )

Mensaje push √




   

servicio 
    => oauth redes sociales => dev => token
    => oauth email password => dev => token
    => create user , email, password, username => dev => token
    => listado de chats , email, token => listado de chats
    => chat ,  token, idchat => chat 
    => modificar usuario , usuario , token => ok 
    => creacion de chat , <usuarios> , token => idChat
    => logout , usuario, token => ok 


Creacion de usuario 
    => pantallas   => login , creacion de usuario
    => servicios   => oauth redes sociales, oauth email y password, create user
    => desarrollo app 

( token, usuario, mensaje push ) 


usuarios

"id_usuario": {
    "nombre de usuario" : "jorgeucano",
    "email": "email@email.com",
    "nombre" : "Jorge",
    "apellido": "Cano",
    "estado": "activo" / "inactivo" / "no mostrar" , || "activo": true/false
    "ultima conexion": date()
}  



Mockup de chat 
"12345asdf23423k" :
    {
        "nombre": "Grupo de chat de nativeScript",
        "usuarios" : {
            { "usuario": "jorgeucano" },
            { "usuario": "jorgeucano2" },
            { "usuario": "jorgeucano3" }
        }
        "creacion" : date(),
        "dialogo": {
            { 
                date  : date(),
                texto : "Hola alguien vio la clase?",
                usuario : "jorgeucano",
                recibio :{
                    usuario: "jorgeucano",
                    usuario: "jorgeucano3"
                }    
                leyo: {
                    usuario:"jorgeucano"
                }
            },
            { 
                date  : date(),
                texto : "yo no lo vi",
                usuario : "jorgeucano2",
                recibio :{
                    usuario: "jorgeucano",
                    usuario: "jorgeucano3"
                }    
                leyo: {
                    usuario:"jorgeucano"
                }
            }
        }
    }