// Arrays con las opciones del select Proceso Elegido
export const tipoProceso = [
  { key: "MOT", value: "Motivo" },
  { key: "ENT", value: "Entrega" },
];

//  Array con las opciones del select del tipo de proceso Motivo
export const elegidoTipoProceso = {
  MOT: [
    { key: "DI", value: "Dirección Incorrecta" },
    { key: "ZNA", value: "Zona no Accesible" },
    { key: "TA", value: "Teléfono Apagado" },
  ],
  ENT: [{ key: "EA", value: "Entrega Exitosa" }],
};