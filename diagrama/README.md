# Ejercicio 1.

![](https://github.com/sergiovp/react-meetups/blob/main/diagrama/images/i1.png)
![](https://github.com/sergiovp/react-meetups/blob/main/diagrama/images/i2.png)

Los problemas que identifico en la implementación anterior son los siguientes:

-   ¿El método **getTotal()** debe de estar implementado en la clase **RegisteredUser**? ¿Es incumbencia de la clase **RegisteredUser** tener implementado ese método?
    -   Yo diría que no, el método **getTotal()** debería de formar parte de la clase abstracta **Service** y que cada una de sus subclases lo implementara.
-   Al igual que _Service_ es una clase abstracta, ¿no podría serlo de igual forma la clase _Multimedia_?
    -   Yo creo que sí.

De esta forma, nos ahorraremos condicionales absurdas a la hora de calcular el total, comprobando el tipo de servicio o si el contenido es premium o no. Apoyamos así el primer principio _Single Responsibility Principle_ SOLID.

El diagrama, por tanto, quedaría de la siguiente forma:

![](https://github.com/sergiovp/react-meetups/blob/main/diagrama/images/i3.png)

Por tanto, la clase **RegisteredUser**, podría tener un método **getTotalPaid** implementado de la siguiente forma:

```
class RegisteredUser {
    getTotalPaid() {
        let total = 0;

        this.services.foreach((sercive) => {
            total += service.getTotal();
        });
        return total;
    }
}
```

Por otro lado, la clase services, tendría el método **getTotal** implementado así:

```
class Service {
    getTotal() {
        return content.getPrice();
    }
}
```
