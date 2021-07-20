const Intern = require('../lib/Intern');
 
describe('Intern', () => {
  it("should return an object containing properties 'name', 'id', 'email' and 'school' when called with the 'new' keyword", () => {
    // Act
    const obj = new Intern();
    // Assert
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("school" in obj).toEqual(true);
  });

  it("should set 'name' when created", () => {
    // Arrange
    const name = "Sandy";
    // Act
    const obj = new Intern(name);
    // Assert
    expect(obj.name).toEqual("Sandy");
  });

  it("should set 'id' when created", () => {
    // Arrange
    const id = 999;
    // Act
    const obj = new Intern("Foo", id);
    // Assert
    expect(obj.id).toEqual(id);
  });

  it("should set 'email' when created", () => {
    // Arrange
    const email = "foo@gmail.com";
    // Act
    const obj = new Intern("Foo", 0, email);
    // Assert
    expect(obj.email).toEqual(email);
  });

  it("should set 'school' when created", () => {
    // Arrange
    const school = "Berkeley";
    // Act
    const obj = new Intern("Foo", 0, "foo@gmail.com", school);
    // Assert
    expect(obj.school).toEqual(school);
  });

  it("should return the 'Intern' object's 'school' value", () => {
    // Arrange
    const school = "Berkeley";
    // Act
    const obj = new Intern("Foo", 0, "foo@gmail.com", school);
    // Assert
    expect(obj.getSchool()).toEqual(school);
  });

  it("should return 'Intern'", () => {
    // Act
    const obj = new Intern();
    // Assert
    expect(obj.getRole()).toEqual("Intern");
  });
});