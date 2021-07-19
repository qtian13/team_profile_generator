const Employee = require('../lib/Employee');
 
describe('Employee', () => {
  it('should return the name set', () => {
    // Assert
    const name = "Sandy";
    const employee = new Employee(name);
    expect(employee.name).toBe('Sandy');
  });

  it('should return the id set', () => {
    // Assert
    const id = 999;
    const employee = new Employee("Foo", id);
    expect(employee.id).toBe(id);
  });

  it('should return email address set', () => {
    // Assert
    const email = "foo@gmail.com";
    const employee = new Employee("Foo", 0, email);
    expect(employee.email).toBe(email);
  });

  it('should return name of the object', () => {
    // Assert
    const name = "Sandy";
    const employee = new Employee(name);
    expect(employee.getName()).toBe('Sandy');
  });

  it('should return the id set', () => {
    // Assert
    const id = 999;
    const employee = new Employee("Foo", id);
    expect(employee.getId()).toBe(id);
  });

  it('should return the email set', () => {
    // Assert
    const email = "foo@gmail.com";
    const employee = new Employee("Foo", 0, email);
    expect(employee.getEmail()).toBe(email);
  });
});
