import React from 'react';
import { Accordion } from 'react-bootstrap';
import { TermsContainer } from './Terms.module.css';



function Terms() {
  

  return (
    <div>
      <div>
        <title> Arterest Terminos y Condiciones</title>
      </div>
      <div className={TermsContainer}>
        
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Términos y Condiciones </Accordion.Header>
            <Accordion.Body>
              Estos términos y condiciones y los anexos que explican los
              servicios del ecommerce Arterest (de ahora en más: “Términos y
              Condiciones”) regulan la relación entre Arterest y
              las personas que usan sus servicios (“Personas Usuarias”). <br />
              <br />
              Las Personas Usuarias aceptan estos Términos y Condiciones desde
              el momento en que se registran en el Sitio y participan del mismo.
               Cuando debamos hacer cambios importantes en nuestros
              servicios, publicaremos las modificaciones con 10 días corridos de
              anticipación para que las Personas Usuarias puedan revisarlas y
              seguir usando la pagina sin problemas. En ningún caso afectarán las
              operaciones que ya hayan finalizado.
              <br />
              <br />
              Las Personas Usuarias que no tengan obligaciones pendientes con
              Arterest o con otras Personas Usuarias, podrán
              finalizar la relación cancelando su
              cuenta.
              <br />
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Capacidad</Accordion.Header>
            <Accordion.Body>
              Podrán usar nuestros servicios las personas mayores de edad que
              tengan capacidad legal para contratar. Los menores de edad, a
              partir de los 13 años, sólo podrán utilizar su cuenta con
              autorización del representante legal, quien responderá por todas
              las acciones y obligaciones que se deriven de la utilización de
              esa cuenta y quien deberá velar por el uso responsable y adecuado
              de ella en atención a la madurez del menor de edad que autorice.
              <br /> <br />
            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> Registro y Cuenta</Accordion.Header>
            <Accordion.Body>
              Quien quiera usar nuestros servicios, deberá completar el
              formulario de registro con los datos que le sean requeridos. Al
              completarlo, se compromete a hacerlo de manera exacta, precisa y
              verdadera y a mantener sus datos siempre actualizados. La Persona
              Usuaria será la única responsable de la certeza de sus datos de
              registro. Sin perjuicio de la información brindada en el
              formulario, podremos solicitar y/o consultar información adicional
              para corroborar la identidad de la Persona Usuaria.
              <br /> <br />
              La cuenta es personal, única e intransferible, es decir que bajo
              ningún concepto se podrá vender o ceder a otra persona. Se accede
              a ella con la clave personal de seguridad que haya elegido y que
              deberá mantener bajo estricta confidencialidad. Por eso, la
              Persona Usuaria será la única responsable por las operaciones que
              se realicen en su cuenta. En caso de detectar un uso no autorizado
              de su cuenta,deberá notificar de forma inmediata y fehaciente a
              el administrador de Arterest.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Privacidad de datos</Accordion.Header>
            <Accordion.Body>
              En Arterest hacemos un uso responsable de la
              información personal, protegiendo la privacidad de las Personas
              Usuarias que nos confiaron sus datos y tomando las medidas
              necesarias para garantizar la seguridad.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Sanciones</Accordion.Header>
            <Accordion.Body>
              En caso que la Persona Usuaria incumpliera una ley o los Términos
              y Condiciones, podremos advertir, suspender, restringir o
              inhabilitar temporal o definitivamente su cuenta, sin perjuicio de
              otras sanciones que se establezcan en las reglas de uso
              particulares de los servicios de Arterest.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Responsabilidad</Accordion.Header>
            <Accordion.Body>
              Arterest será responsable por cualquier defecto en la
              prestación de su servicio, en la medida en que le sea imputable y
              con el alcance previsto en las leyes vigentes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header> Tarifas</Accordion.Header>
            <Accordion.Body>
              Arterest podrá cobrar por sus servicios y la Persona
              Usuaria se compromete a pagarlos a tiempo.
              <br />
              <br />
              Podremos modificar o eliminar las tarifas en cualquier momento con
              el debido preaviso establecido en la cláusula 2 de estos Términos
              y Condiciones. De la misma manera, podremos modificar las tarifas
              temporalmente por promociones en favor de las Personas Usuarias.
              <br />
              <br />
              La Persona Usuaria autoriza a Arterest a retener y/o
              debitar los fondos existentes y/o futuros de su cuenta y/o de las
              cuentas bancarias que haya registrado en ella, para saldar las
              tarifas impagas o cualquier otra deuda que pudiera tener.
              <br />
              <br />
              Para conocer el detalle de las tarifas de cada servicio, las
              Personas Usuarias deberán consultar los términos y condiciones
              correspondientes.
              <br />
              <br />
              En todos los casos se emitirá la factura de conformidad con los
              datos fiscales que las personas tengan cargados en su cuenta.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header> Propiedad Intelectual</Accordion.Header>
            <Accordion.Body>
              Arterest y/o sus sociedades relacionadas son
              propietarias de todos los derechos de propiedad intelectual sobre
              sus sitios, todo su contenido, servicios, productos, marcas,
              nombres comerciales, logos, diseños, imágenes, frases
              publicitarias, derechos de autor, dominios, programas de
              computación, códigos, desarrollos, software, bases de datos,
              información, tecnología, patentes y modelos de utilidad, diseños y
              modelos industriales, secretos comerciales, entre otros
              (“Propiedad Intelectual”) y se encuentran protegidos por leyes
              nacionales e internacionales.
              <br />
              <br />
              Aunque Arterest otorga permiso para usar sus
              productos y servicios conforme a lo previsto en los Términos y
              Condiciones, esto no implica una autorización para usar su
              Propiedad Intelectual, excepto consentimiento previo y expreso de
              Arterest y/o sus sociedades vinculadas. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Jurisdicción y Ley Aplicable</Accordion.Header>
            <Accordion.Body>
              Estos Términos y Condiciones se rigen por la ley argentina. Toda
              controversia derivada de su aplicación, interpretación, ejecución
              o validez será resuelta por los tribunales nacionales ordinarios
              competentes, con asiento en la Ciudad de Buenos Aires, salvo
              disposición específica de normas de orden público, como por
              ejemplo, legislación relativa al Consumidor. Para todos los
              efectos relacionados con estos Términos y Condiciones y con el uso
              del sitio, Arterest.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Terms;