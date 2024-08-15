<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# 🛠️ Sentando Bases con NestJS

---

## **Objetivo:**
**Sentar las bases en NestJS** a través de una serie de temas fundamentales que permitirán al estudiante construir una comprensión sólida de este poderoso framework. Los temas a tocar en el taller incluyen:

- 🛡️ **¿Qué es Nest?**
- 🤔 **¿Por qué usarlo?**
- 🗂️ **Explicación sobre cada archivo en un proyecto nuevo de Nest**
- 🏗️ **Core Nest building blocks**
- 📦 **Módulos**
- 📋 **Controladores (Post, Patch, Get, Delete)**
- 🏷️ **Primeros decoradores**
- 💼 **Servicios**
- 💉 **Inyección de dependencias**
- 🧪 **Pipes**
- 🚨 **Exception Filters**

---

## **Introducción:**
> **¡Bienvenidos!** 🎉 Después de un viaje profundo por el mundo de Node.js, TypeScript, decoradores, pruebas de desempeño y otras cosas que generan una potencial frustración 😅, nos adentramos ahora en el universo de NestJS, un framework que nos permitirá estructurar nuestras aplicaciones de manera modular y escalable, llevando nuestras habilidades a un nuevo nivel. En este taller, crearemos una base sólida en NestJS, preparándonos para enfrentar problemas complejos en el ámbito de la tecnología financiera.

---

## **Instrucciones de Entrega:**
- **Subir tu proyecto a GitHub:** Crea un repositorio en GitHub y sube tu proyecto de NestJS.
- **Compartir el enlace:** Sube tu enlace a la plataforma de Laboratoria para que pueda revisar tu proyecto.
---

## **Problemática:**

**Contexto de la Problemática:**

Imagina que has sido contratado por una fintech emergente que busca revolucionar el mercado de microcréditos. La compañía, **QuickLoan**, quiere ofrecer préstamos rápidos a personas con poca o ninguna historia crediticia, pero se enfrenta a varios desafíos:

1. **Velocidad y Seguridad:** Los usuarios esperan decisiones inmediatas sobre sus solicitudes de préstamo, lo cual requiere un sistema rápido y seguro.
2. **Escalabilidad:** A medida que la fintech crezca, el sistema debe ser capaz de manejar miles de solicitudes simultáneamente.
3. **Modularidad y Mantenimiento:** El sistema debe ser modular para permitir la incorporación de nuevas funcionalidades y mejoras sin comprometer la estabilidad.
4. **Personalización y Manejo de Excepciones:** Se requiere un sistema que pueda personalizar las ofertas de crédito y manejar excepciones de manera eficiente para evitar posibles fraudes.

**Problemática**: QuickLoan necesita un sistema backend robusto que permita manejar solicitudes de préstamos de manera segura, rápida y escalable, asegurando una experiencia fluida para el usuario final. Debes crear la base de este sistema utilizando NestJS.

---

## **Epica:**

**Como** desarrollador backend en **QuickLoan**,
**Quiero** construir un sistema modular y seguro en NestJS,
**Para** gestionar ***solicitudes de préstamos*** de manera eficiente y escalable, mientras garantizo la seguridad de los datos y el manejo adecuado de excepciones.

---

## **Criterios de Aceptación:**

- **Comprensión y Explicación de la Estructura de un Proyecto NestJS**: El estudiante debe identificar y explicar la función de cada archivo en la estructura básica de un proyecto NestJS.
- **Implementación de Controladores Eficientes**: El estudiante debe crear controladores que manejen diferentes métodos HTTP (Post, Patch, Get, Delete) para gestionar solicitudes de préstamo.
- **Uso Efectivo de Decoradores y Servicios**: Implementar decoradores y servicios que permitan personalizar y manejar la lógica de negocio del sistema de préstamos.
- **Configuración Adecuada de Pipes y Exception Filters**: Configurar y aplicar pipes para la validación de datos y filtros de excepción para manejar errores y proteger el sistema.
- **Aplicación de la Inyección de Dependencias para Modularidad**: Usar inyección de dependencias para construir un sistema modular, permitiendo la fácil adición de nuevas funcionalidades.


---

## **Historias de Usuario**

## **Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto**

**Como** desarrollador backend,  
**Quiero** aprender a configurar y entender la estructura básica de un proyecto NestJS,  
**Para** asegurarme de que la arquitectura del proyecto sea modular y fácilmente escalable.

**Tareas:**

### **1. Configuración del Proyecto**

- **Propuesta de Solución**:
   - Crear un nuevo proyecto NestJS llamado `quickloan-app` utilizando el CLI:
   ```bash
   nest new quickloan-app
   ```
   - Revisar y entender la estructura de archivos generada por defecto. Asegúrate de leer la documentación o las notas adicionales proporcionadas. Puedes explorar cada archivo y carpeta para comprender su propósito y cómo contribuye a la arquitectura del proyecto [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).
   - Identificar el propósito de cada archivo y cómo contribuye a la modularidad del proyecto. Puedes leer la siguiente documentación [Estructura propuesta aplicaciones NestJS](../notes/proposed-architecture.md).

**Preguntas:**

1. **¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial?**

   El archivo `main.ts` es crucial porque es el punto de entrada principal de la aplicación. Aquí se configura e inicia la aplicación NestJS usando el método `NestFactory.create()`. Este archivo también puede incluir configuraciones globales como middleware y excepciones globales.

   Puedes leer más sobre el archivo [aquí](https://docs.nestjs.com/).

2. **¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?**

   - **`app.module.ts`:** Es el módulo raíz de la aplicación que define cómo se ensamblan los diferentes módulos, proveedores y controladores. La modularidad en NestJS se logra a través de la organización en módulos, que agrupan componentes relacionados y permiten la escalabilidad.

   - **`app.controller.ts`:** Define un controlador que maneja las solicitudes HTTP y proporciona los métodos que responden a estas solicitudes. Los controladores son responsables de recibir y procesar las solicitudes, y a menudo interactúan con servicios para realizar la lógica de negocio.

   La relación entre estos archivos es que el `app.module.ts` importa y configura el `app.controller.ts` como parte de la aplicación. Esta relación permite que el controlador maneje las solicitudes y la configuración del módulo permita que la aplicación funcione de manera modular y escalable.
---

### **2. Creación de Módulos Básicos**

- **Propuesta de Solución**:
   - Crear un módulo `LoansModule` para gestionar operaciones de préstamos:
   ```bash
   nest g mo loans
   ```
   - Crear un módulo `UsersModule` para gestionar la información de los usuarios:
   ```bash
   nest g mo users
   ```

- **Cascarita**: Revisa el nombre del módulo generado y asegúrate de que sea correcto y consistente con el estándar de nombres.

**Preguntas:**

1. **¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?**

   Modularizar una aplicación ayuda a:

   - **Organización:** Facilita la organización del código al agrupar funcionalidades relacionadas. Esto hace que el código sea más fácil de entender y mantener.
   
   - **Reusabilidad:** Permite reutilizar módulos en diferentes partes de la aplicación o en diferentes aplicaciones.
   
   - **Escalabilidad:** Facilita la escalabilidad al permitir agregar o modificar módulos de manera independiente sin afectar otras partes de la aplicación.
   
   - **Pruebas:** Hace que las pruebas sean más fáciles al permitir pruebas unitarias y de integración en módulos específicos sin necesidad de probar la aplicación completa.

2. **¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?**

   La modularidad:

   - **Mantenimiento:** Simplifica el mantenimiento al aislar cambios en módulos específicos sin afectar el resto de la aplicación. Permite realizar cambios y actualizaciones de manera más segura y eficiente.
   
   - **Escalabilidad:** Permite que diferentes módulos se desarrollen y desplieguen de forma independiente. Facilita la adición de nuevas funcionalidades sin la necesidad de reestructurar toda la aplicación. Además, los equipos pueden trabajar en módulos separados simultáneamente, lo que mejora la eficiencia del desarrollo.

3. **Después de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?**

   Al generar un módulo con `nest g mo`, se crean los siguientes archivos:

   - **`loans.module.ts`** (o `users.module.ts`): Define el módulo y configura sus proveedores, controladores y dependencias. Este archivo es esencial para la configuración del módulo y su integración en la aplicación.

   - **`loans.service.ts`** (o `users.service.ts`): Define el servicio asociado al módulo. El servicio maneja la lógica de negocio y es inyectado en los controladores o en otros servicios según sea necesario.

   - **`loans.controller.ts`** (o `users.controller.ts`): Define el controlador asociado al módulo. El controlador maneja las solicitudes HTTP y utiliza los servicios para procesar la lógica de negocio y devolver respuestas.

   Estos archivos trabajan juntos para encapsular la funcionalidad del módulo en un único lugar, promoviendo una estructura de código modular y organizada. Cada módulo se encarga de una parte específica de la aplicación y se comunica con otros módulos a través de dependencias y servicios.

---

### **3. Implementación de Controladores**

- **Propuesta de Solución**:
   - Crear un controlador `LoansController` para manejar solicitudes POST de creación de préstamos:
   ```bash
   nest g co loans
   ```
   - Implementar rutas GET para consultar el estado de un préstamo en el mismo controlador:
   ```typescript
   import { Controller, Get, Post, Body, Param } from '@nestjs/common';

   @Controller('loans')
   export class LoansController {
     @Post()
     createLoan(@Body() createLoanDto: any) {
       return 'Loan created';
     }

     @Get(':id')
     getLoanStatus(@Param('id') id: string) {
       return `Status of loan ${id}`;
     }
   }
   ```
   
- **Cascarita**: Asegúrate de que las rutas estén correctamente definidas y que los decoradores estén aplicados en los lugares correctos.


**Preguntas:**

1. **¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?**

   Definir incorrectamente un decorador en un controlador puede causar varios problemas, como:

   - **Errores en el Enrutamiento:** Si un decorador como `@Get`, `@Post`, etc., está mal definido, la ruta correspondiente no será reconocida, lo que puede resultar en errores 404 o en la incapacidad de acceder al endpoint.
   
   - **Comportamiento Incorrecto:** Si los decoradores están mal aplicados o en los lugares incorrectos, los métodos del controlador pueden no ser invocados correctamente, resultando en la falta de ejecución de la lógica asociada a esos métodos.

   La correcta aplicación de los decoradores es crucial para que los endpoints funcionen según lo esperado y respondan a las solicitudes adecuadamente.

2. **¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?**

   Manejar rutas dinámicas es importante porque:

   - **Acceso a Datos Específicos:** Permite a los usuarios acceder a datos específicos en función de parámetros variables, como el ID de un préstamo. Esto es fundamental para interactuar con bases de datos donde se requieren operaciones en registros específicos.

   - **Flexibilidad:** Facilita la creación de endpoints que pueden responder a diferentes valores de parámetros, proporcionando flexibilidad en cómo se consultan y gestionan los datos.

   - **Operaciones CRUD:** En aplicaciones que interactúan con bases de datos, las rutas dinámicas son esenciales para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en registros individuales basados en identificadores únicos.

   Esto permite a la aplicación ofrecer una experiencia de usuario más personalizada y eficiente al trabajar con datos específicos.
---

## **Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad**

**Como** desarrollador backend,  
**Quiero** aprender a implementar la lógica de negocio y asegurar la seguridad de las transacciones,  
**Para** garantizar que el sistema maneje las solicitudes de préstamos de manera segura y eficiente.

**Tareas:**

### **1. Desarrollo de Servicios**

- **Propuesta de Solución**:
   - Crear un servicio `LoansService` para manejar la lógica de negocio de los préstamos:
   ```bash
   nest g s loans
   ```
   - Implementar un método para calcular el riesgo del préstamo basado en el perfil del usuario:
   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class LoansService {
     calculateLoanRisk(userProfile: any): string {
       // Lógica básica para determinar el riesgo
       if (userProfile.creditScore > 700) {
         return 'Low Risk';
       } else {
         return 'High Risk';
       }
     }
   }
   ```

- **Cascarita**: Verifica que el nombre del método y su propósito estén alineados con la lógica de negocio y que el servicio esté correctamente inyectado en el controlador.

**Preguntas:**

1. **¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?**

   Manejar la lógica de negocio en servicios en lugar de controladores tiene varias ventajas:

   - **Separación de Responsabilidades:** Los servicios se encargan de la lógica de negocio, mientras que los controladores manejan la interacción con las solicitudes HTTP. Esto permite una separación clara entre la lógica de negocio y la gestión de las solicitudes.

   - **Reusabilidad:** Los servicios pueden ser reutilizados en diferentes controladores o módulos. Esto evita la duplicación de código y facilita la reutilización de la lógica de negocio en diferentes partes de la aplicación.

   - **Mantenimiento:** La lógica de negocio centralizada en servicios facilita el mantenimiento y la actualización del código. Los cambios en la lógica de negocio se realizan en un solo lugar en lugar de en múltiples controladores.

   - **Pruebas:** Los servicios pueden ser probados de forma independiente, lo que facilita la realización de pruebas unitarias y mejora la calidad del código.

2. **¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?**

   La inyección de dependencias está estrechamente relacionada con la modularidad y la capacidad de prueba de la aplicación de las siguientes maneras:

   - **Modularidad:** La inyección de dependencias permite que los módulos se mantengan independientes y desacoplados. Cada módulo puede definir sus propias dependencias y no necesita conocer los detalles de la implementación de otras partes de la aplicación.

   - **Flexibilidad:** Facilita la configuración de diferentes implementaciones para una interfaz o servicio, lo que permite cambiar la implementación sin modificar el código que depende de ella.

   - **Capacidad de Prueba:** La inyección de dependencias mejora la capacidad de prueba al permitir la sustitución de dependencias reales por objetos simulados (mocks) o stubs en pruebas unitarias. Esto facilita la prueba de unidades específicas de la aplicación sin depender de componentes externos.

   En resumen, la inyección de dependencias promueve una arquitectura más limpia y flexible, facilita la modularidad y mejora la capacidad de prueba de la aplicación.

---

### **2. Aplicación de Decoradores y Pipes**

- **Propuesta de Solución**:
   - Utilizar decoradores como `@Body`, `@Param`, y `@Query` para manejar datos de las solicitudes en el `LoansController`:
   ```typescript
   @Post()
   createLoan(@Body() createLoanDto: any) {
     return `Loan created for ${createLoanDto.userId}`;
   }
   ```

   - Implementar un `ValidationPipe` para validar los datos de entrada:
   ```typescript
   import { ValidationPipe } from '@nestjs/common';

   // En main.ts
   app.useGlobalPipes(new ValidationPipe());
   ```

- **Cascarita**: Asegúrate de que el `ValidationPipe` esté configurado correctamente y aplicado en la instancia de la aplicación.

**Preguntas:**

1. **¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?**

   Validar los datos de entrada es crucial en una aplicación que maneja transacciones financieras porque:

   - **Seguridad:** La validación ayuda a prevenir la entrada de datos maliciosos o erróneos que podrían comprometer la seguridad del sistema o exponerlo a ataques, como inyecciones SQL o ataques de tipo Cross-Site Scripting (XSS).

   - **Integridad de los Datos:** Asegura que los datos enviados por los usuarios cumplan con los requisitos y formatos esperados, manteniendo la integridad de los datos en la base de datos.

   - **Prevención de Errores:** Reduce la probabilidad de errores y problemas inesperados en la lógica de negocio al garantizar que los datos sean válidos antes de procesarlos.

   - **Experiencia del Usuario:** Proporciona una mejor experiencia del usuario al garantizar que los datos incorrectos sean rechazados y que los usuarios reciban mensajes de error claros cuando se produzcan problemas con la entrada de datos.

2. **¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?**

   Si un decorador está mal colocado o si los pipes no se aplican correctamente, pueden ocurrir varios problemas:

   - **Errores en el Enrutamiento o Manejo de Datos:** Los decoradores mal colocados pueden causar que las rutas no se definan correctamente o que los datos no se manejen adecuadamente, resultando en errores 404 o en la falta de procesamiento de datos.

   - **Fallos en la Validación:** Si los pipes no se aplican correctamente, los datos de entrada pueden no ser validados, lo que podría permitir que datos incorrectos o maliciosos lleguen al sistema, afectando la seguridad y la integridad de la aplicación.

   - **Comportamiento Inesperado:** La falta de configuración adecuada de decoradores y pipes puede llevar a un comportamiento inesperado en la aplicación, incluyendo fallos en la ejecución de métodos o respuestas incorrectas a las solicitudes.

   La correcta aplicación de decoradores y pipes es fundamental para el funcionamiento esperado de la aplicación y para garantizar la seguridad y la integridad de los datos procesados.

---

### **3. Configuración de Exception Filters**

- **Propuesta de Solución**:
   - Implementar filtros de excepción para manejar errores comunes:
   ```typescript
   import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

   @Catch(HttpException)
   export class HttpErrorFilter implements ExceptionFilter {
     catch(exception: HttpException, host: ArgumentsHost) {
       const ctx = host.switchToHttp();
       const response = ctx.getResponse();
       const status = exception.getStatus();

       response.status(status).json({
         statusCode: status,
         message: exception.message,
       });
     }
   }
   ```

   - Asegurarse de que los errores se manejen adecuadamente en las respuestas al usuario.

- **Cascarita**: Verifica que el filtro de excepción esté registrado correctamente en el módulo o aplicado globalmente.

**Preguntas:**

1. **¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?**

   El manejo adecuado de excepciones impacta de las siguientes maneras:

   - **Experiencia del Usuario:** Proporciona respuestas claras y coherentes cuando ocurren errores, lo que mejora la experiencia del usuario. Los usuarios reciben mensajes de error amigables y comprensibles en lugar de mensajes técnicos o errores del servidor que podrían ser confusos.

   - **Seguridad:** Ayuda a prevenir la exposición de información sensible o interna del sistema en los mensajes de error. Un manejo adecuado asegura que los errores se gestionen de manera segura sin revelar detalles que podrían ser utilizados para explotar vulnerabilidades.

   - **Estabilidad de la Aplicación:** Asegura que la aplicación maneje los errores de manera controlada, evitando fallos inesperados que podrían interrumpir el servicio o causar un mal funcionamiento en la aplicación.

2. **¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?**

   Tener un manejo centralizado de excepciones es importante porque:

   - **Consistencia:** Proporciona una forma uniforme de manejar errores en toda la aplicación. Los errores se gestionan de manera consistente y predecible, lo que facilita el mantenimiento y la comprensión del código.

   - **Mantenimiento:** Facilita el manejo y la modificación de la lógica de manejo de errores en un solo lugar. Si se necesitan cambios en la forma en que se gestionan las excepciones, se realizan en el filtro centralizado en lugar de en múltiples puntos del código.

   - **Escalabilidad:** Permite la expansión de la lógica de manejo de errores a medida que la aplicación crece. Los filtros de excepción centralizados se pueden adaptar fácilmente para manejar nuevos tipos de errores o ajustar las respuestas de error.

   - **Reusabilidad:** Los filtros de excepción se pueden reutilizar en diferentes partes de la aplicación, lo que reduce la duplicación de código y mejora la cohesión del sistema.

   El manejo centralizado de excepciones ayuda a crear aplicaciones más robustas, seguras y fáciles de mantener.
---