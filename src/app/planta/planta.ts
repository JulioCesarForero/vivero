export class Planta {
  id                :number;
  nombre_comun      :string;
  nombre_cientifico :string;
  tipo              :string;
  altura_maxima     :number;
  clima             :string;
  sustrato_siembra  :string;

  public constructor(
    id                :number,
    nombre_comun      :string,
    nombre_cientifico :string,
    tipo              :string,
    altura_maxima     :number,
    clima             :string,
    sustrato_siembra  :string)

  {
    this.id                = id;
    this.nombre_comun      = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo              = tipo;
    this.altura_maxima     = altura_maxima;
    this.clima             = clima;
    this.sustrato_siembra  = sustrato_siembra;

  }

}

// id                 ": 1,
// nombre_comun       ": "Lengua de vaca",
// nombre_cientifico  ": "Sansevieria Trifasciata",
// tipo               ": "Interior",
// altura_maxima      ": 140,
// clima              ": "Templado, cálido",
// sustrato_siembra   ": "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
