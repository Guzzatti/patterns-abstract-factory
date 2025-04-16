import { DataLocal } from "./DataLocal";
import { DataExterna } from "./DataExterna";

export class DataAdapter extends DataLocal {
  private dataExterna: DataExterna;

  constructor(dataExterna: DataExterna) {
    const convertido = DataAdapter.converterParaLocal(dataExterna.getIsoDate());
    super(convertido);
    this.dataExterna = dataExterna;
  }

  private static converterParaLocal(isoDate: string): string {
    const [ano, mes, dia] = isoDate.split("-");
    return `${dia}/${mes}/${ano}`;
  }
}
