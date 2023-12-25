# Api desarrollada en Javascript con Node

## Objetivo

Desarrollar una Api que implemente el MVC.

## Por hacer

* [ ] En movies controller patch movie ver notas sobre zod
* [ ] Implementar base de datos

## Notas varias

index -> app -> routes -> controllers -> models: -mongo -> schema: -mongoose
                                                 -mysql -> schema: -prisma

index: llama y arranca la aplicacion

app: define la aplicacion

routes: define las rutas de app (endpoints)

controllers: son llamados en cada endpoint, un controlador por ruta

models: son utilizados por los controladores y pueden ser de distintas bases de datos: mongo, mysql, postgresql, etc. Deben tener la misma estructura/contrato(iguales nombres de metodos)

36:02



