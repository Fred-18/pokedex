import { BASE_URL } from "../config";
import axios from "axios";

export class apiPokemon {
  static async fetchPokemon() {
    const reponse = await axios.get(`${BASE_URL}/pokemon/generation/1`);
    return reponse.data;
  }

  static async fetchTypes() {
    const reponse = await axios.get(`${BASE_URL}/types`);
    return reponse.data;
  }

  static async fetchByName(pokemonName) {
    const reponse = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
    console.log(reponse.data, "***");
    return reponse.data;
  }
}
