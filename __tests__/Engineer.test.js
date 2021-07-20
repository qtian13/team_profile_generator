const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it("should return an object containing properties 'name', 'id', 'email' and 'github' when called with the 'new' keyword", () => {
    // Act
    const obj = new Engineer();
    // Assert
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("github" in obj).toEqual(true);
  });

  it("should set 'name' when created", () => {
    // Arrange
    const name = "Sandy";
    // Act
    const obj = new Engineer(name);
    // Assert
    expect(obj.name).toEqual("Sandy");
  });

  it("should set 'id' when created", () => {
    // Arrange
    const id = 999;
    // Act
    const obj = new Engineer("Foo", id);
    // Assert
    expect(obj.id).toEqual(id);
  });

  it("should set 'email' when created", () => {
    // Arrange
    const email = "foo@gmail.com";
    // Act
    const obj = new Engineer("Foo", 0, email);
    // Assert
    expect(obj.email).toEqual(email);
  });

  it("should set 'github' when created", () => {
    // Arrange
    const github = "foo";
    // Act
    const obj = new Engineer("Foo", 0, "foo@gmail.com", github);
    // Assert
    expect(obj.github).toEqual(github);
  });

  it("should return the 'Engineer' object's 'github' value", () => {
    // Arrange
    const github = "foo";
    // Act
    const obj = new Engineer("Foo", 0, "foo@gmail.com", github);
    // Assert
    expect(obj.getGithub()).toEqual(github);
  });

  it("should return 'Engineer'", () => {
    // Act
    const obj = new Engineer();
    // Assert
    expect(obj.getRole()).toEqual("Engineer");
  });
});
