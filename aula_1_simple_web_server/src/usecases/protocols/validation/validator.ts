export interface Validator {
  handle(input: unknown): Error;
}

export class NullableCheck implements Validator {
  handle(input: unknown): Error {
    if (!input) {
      throw new Error('Valor invalido.');
    }
    return;
  }
}

export class DateIsValid implements Validator {
  handle(input: unknown): Error {
    if (!this.isValidDate(input)) {
      throw new Error('Data invalida');
    }
    if (!this.isDateInThePast(input)) {
      throw new Error('Data is in the past');
    }
    return;
  }
  isValidDate(dateString) {
    return !isNaN(Date.parse(dateString));
  }
  isDateInThePast(dateString): boolean {
    const givenDate = new Date(dateString);

    // Get the current date
    const currentDate = new Date();

    // Compare the two dates using getTime() method and check if the given date is in the past
    return givenDate.getTime() < currentDate.getTime();
  }
}
