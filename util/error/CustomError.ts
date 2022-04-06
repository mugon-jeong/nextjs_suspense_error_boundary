export default class CustomError extends Error {
  name: string;
  constructor(message?: string) {
    super(message);
    this.name = new.target.name;
  }
}
