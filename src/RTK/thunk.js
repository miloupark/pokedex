import { createAsyncThunk } from "@reduxjs/toolkit";

// 포켓몬의 species 데이터를 비동기로 가져오기
// - species 엔드포인트: 다국어 이름, 도감 설명
// - 이미지: 별도의 sprites 경로

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    // 1부터 maxPokemonId까지의 숫자 배열 생성
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    // 단일 포켓몬의 species 데이터를 가져오는 함수
    const fetchAPI = async (pokemonId) => {
      //  species 데이터 요청
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      // JSON 형태로 변환
      const data = await response.json();

      // 가져온 JSON에서 '한국어' 이름과 '한국어' 설명만 뽑기
      const getPokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      return getPokemonData; // 포켓몬 데이터 객체 반환
    };

    // 모든 ID에 대해 병렬 요청 → 모든 Promise가 끝나면 결과 배열 반환
    // Promise.all: 여러 비동기 작업을 동시에 실행하고, 모든 작업이 완료될 때까지 기다림
    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
