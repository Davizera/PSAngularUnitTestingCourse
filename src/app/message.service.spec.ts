import {MessageService} from "./message.service";

describe("MessageService", () => {
  it("should be empty when initialized", () => {
    let sut = new MessageService();

    expect(sut.messages.length).toBe(0);
  });

  it('should add message correctly', function () {
    let sut = new MessageService();

    sut.add("Random message");

    expect(sut.messages.length).toBe(1);
  });

  it('should clear all messages', function () {
    let sut = new MessageService();
    sut.add("Random message");

    sut.clear();

    expect(sut.messages.length).toBe(0);
  });
});
