const Manager = require('../lib/Manager');
 
describe('Manager', () => {
  it('should return office number set', () => {
    // Assert
    const officeNumber = 123;
    const manager = new Manager("Foo", 0, "foo@gmail.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });

  it('should return the role of Manager', () => {
    // Assert
    const manager = new Manager("Foo", 0, "foo@gmail.com", officeNumber);
    expect(manager.getRole()).toBe('Manager');
  });

  it('should return office number set', () => {
    // Assert
    const officeNumber = 123;
    const manager = new Manager("Foo", 0, "foo@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
});