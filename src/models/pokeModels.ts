/* eslint-disable no-unused-vars */
export type HasId = {
  id: string;
};

export type ProtoPokeStructure = {
  name: string;
  order: number;
  weight: number;
  isFavorite: boolean;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class Pokemon implements PokeStructure {
  public isFavorite: boolean;

  constructor(
    public id: string,
    public name: string,
    public order: number,
    public weight: number
  ) {
    this.isFavorite = false;
  }
}
