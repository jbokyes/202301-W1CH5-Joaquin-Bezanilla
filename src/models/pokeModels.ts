/* eslint-disable no-unused-vars */
export type HasId = {
  id: string;
};

export type ProtoPokeStructure = {
  name: string;
  image: string;
  isFavorite: boolean;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class Pokemon implements PokeStructure {
  public isFavorite: boolean;
  public id!: string;

  constructor(public name: string, public image: string) {
    this.isFavorite = false;
  }
}
