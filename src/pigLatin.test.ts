import { pigIt } from "./pigLatin";
describe("test pigIt function", () => {
  it("Empty string should return an empty string", () => {
    expect(pigIt("")).toEqual("");
  });
  it("Dave should return aveDay", () => {
    expect(pigIt("Dave")).toEqual("aveDay");
  });
  it("'Pig latin is cool' should return 'igPay atinlay siay oolcay'", () => {
    expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
  });  
  it("'Hello world !' should return 'elloHay orldway !'", () => {
    expect(pigIt("Hello world !")).toEqual("elloHay orldway !");
  });  
  it("'!*&%' should return '!*&%'", () => {
    expect(pigIt("!*&%")).toEqual("!*&%");
  }); 
  
});
