let compra = () => {
  const accionCompra = alert(
    "Ve a la pestaña Buscar y busca tu libro de preferencia"
  );
};
let venta = () => {
  const accionVenta = alert(
    "Ve a la pestaña Vender y publica el libro que desees vender"
  );
};
let operacion = (op) => {
  console.log("operacion", op);
  switch (op) {
    case 1:
      compra();
      break;
    case 2:
      venta();
      break;
    default:
      principal();
  }
};

function llamarAction() {
  let pregunta = prompt(`Qué quiere hacer:
1_Comprar libros 
2_Vender libros`);

  operacion(Number(pregunta));
}

function principal() {
  llamarAction();
  console.log("Arrancamos");
}
principal();
