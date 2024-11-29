class Random {
  private characters = "abcdefghijklmnopqrstuvwxyz";
  private upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numbers = "0123456789";
  private symbols = "!@#$%^&*()_+";
  private baseLength = 10;

  numId(): number {
    let id = "";

    for (let i = 0; i < this.baseLength; i++) {
      const randomIndex = Math.floor(Math.random() * this.numbers.length);
      id = `${id}${this.numbers[randomIndex]}`;
    }

    return parseInt(id);
  }

  id(): string {
    const chars = `${this.characters}${this.upperCharacters}`;
    let id = "";

    for (let i = 0; i < this.baseLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id = `${id}${chars[randomIndex]}`;
    }

    return id;
  }

  strongId(): string {
    const allChars = `${this.characters}${this.upperCharacters}${this.numbers}${this.symbols}`;
    let id = "";

    for (let i = 0; i < this.baseLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      id = `${id}${allChars[randomIndex]}`;
    }

    return id;
  }

  PIN(): number {
    let pin = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * this.numbers.length);
      pin = `${pin}${this.numbers[randomIndex]}`;
    }

    return parseInt(pin.padStart(4, "0"));
  }
}

export const random = new Random();
