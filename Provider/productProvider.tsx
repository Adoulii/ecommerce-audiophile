import { serverUrl } from "../utils/Constant";
import axios from "axios";

export default class ProductsProvider {
  static async getProducts() {
    const response = await axios.get(serverUrl + "/products");
    return response.data;
    
  }
}
