const Manager = require('../lib/Manager');
 
describe('Manager', () => {
  it("should return an object containing properties 'name', 'id', 'email' and 'officeNumber' when called with the 'new' keyword", () => {
    // Act
    const obj = new Manager();
    // Assert
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("officeNumber" in obj).toEqual(true);
  });

  it("should set 'name' when created", () => {
    // Arrange
    const name = "Sandy";
    // Act
    const obj = new Manager(name);
    // Assert
    expect(obj.name).toEqual("Sandy");
  });

  it("should set 'id' when created", () => {
    // Arrange
    const id = 999;
    // Act
    const obj = new Manager("Foo", id);
    // Assert
    expect(obj.id).toEqual(id);
  });

  it("should set 'email' when created", () => {
    // Arrange
    const email = "foo@gmail.com";
    // Act
    const obj = new Manager("Foo", 0, email);
    // Assert
    expect(obj.email).toEqual(email);
  });

  it("should set 'officeNumber' when created", () => {
    // Arrange
    const officeNumber = 123;
    // Act
    const obj = new Manager("Foo", 0, "foo@gmail.com", officeNumber);
    // Assert
    expect(obj.officeNumber).toEqual(officeNumber);
  });

  it("should return the 'Manager' object's 'officeNumber' value", () => {
    // Arrange
    const officeNumber = 123;
    // Act
    const obj = new Manager("Foo", 0, "foo@gmail.com", officeNumber);
    // Assert
    expect(obj.getOfficeNumber()).toEqual(officeNumber);
  });

  it("should return 'Manager'", () => {
    // Act
    const obj = new Manager();
    // Assert
    expect(obj.getRole()).toEqual("Manager");
  });
});