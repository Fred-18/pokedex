import { BASE_URL } from "../config";
import axios from "axios";

export class apiPokemon {
  static async fetchPokemon() {
    const reponse = await axios.get(`${BASE_URL}/pokemon/generation/1`);
    return reponse.data;
  }
}
