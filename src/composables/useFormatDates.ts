import { format } from "date-fns";
import es from "date-fns/locale/es";


export default function useFormatDates() {


  function clienteDesde(fecha) {
    const date = new Date(fecha);
    return format(date, "'Cliente desde el 'dd MMMM, yyyy hh:mm a", {
      locale: es,
    });
  }


  function mostrarFecha(fecha) {
    const date = new Date(fecha);
    return format(date, "dd MMMM, yyyy hh:mm a", {
      locale: es,
    });
  }

  return {
    clienteDesde, mostrarFecha
  }
}