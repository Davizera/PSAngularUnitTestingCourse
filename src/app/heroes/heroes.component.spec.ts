import {HeroesComponent} from "./heroes.component";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {Observable, of} from "rxjs";
import SpyObj = jasmine.SpyObj;
import any = jasmine.any;
import anything = jasmine.anything;

describe("HeroesComponent", () => {
  let sut : HeroesComponent;
  let mockHeroService : SpyObj<any>;
  let HEROES : Hero[]

  beforeEach(() => {
    HEROES = [
      {id: 1, name: "Spider-man", strength: 20},
      {id: 2, name: "Batman", strength: 10},
      {id: 3, name: "Captain America", strength: 5},
    ]
    mockHeroService = jasmine.createSpyObj(["getHeroes", "addHero",  "deleteHero", "subscribe"]);
    sut = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it('should remove the indicated hero from the heroes list', function () {
      // arrange
      mockHeroService.deleteHero.and.returnValue(of(new Hero()));
      sut.heroes = HEROES;

      // act
      sut.delete(HEROES[2]);

      // assert
      expect(sut.heroes.includes(HEROES[2])).toBe(false);
    });

    it('should call deleteHero', function () {
      // arrange
      sut.heroes = HEROES;
      mockHeroService.deleteHero.and.returnValue(of(new Hero()));

      // act
      sut.delete(HEROES[2]);

      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalled();
    });

    it('should call deleteHero with correct parameter', function () {
      // arrange
      sut.heroes = HEROES;
      mockHeroService.deleteHero.and.returnValue(of(new Hero()));

      // act
      sut.delete(HEROES[2]);

      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
