import AxiosAdapter from "../../infra/AxiosAdapter";
import { HomeInterface } from "./HomeInterface";

export class HomeService {
  constructor(private httpAdapter: AxiosAdapter, private url: string) {}

  public getItems = async (): Promise<any[]> => {
    const response = await this.httpAdapter.get(this.url);
    return response.data;
  };

  public filterList(context: HomeInterface): any[] {
    if (context.filtro) {
      const exp = new RegExp(context.filtro.trim(), "i");
      return context.fotos.filter((foto) => exp.test(foto.titulo));
    } else {
      return context.fotos;
    }
  }

}
