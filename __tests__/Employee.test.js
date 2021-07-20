const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should return an object containing properties 'name', 'id', 'email' when called with the 'new' keyword", () => {
        // Act
        const obj = new Employee();

        // Assert
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
        // Arrange
        const name = "Sandy";
        // Act
        const obj = new Employee(name);
        // Assert
        expect(obj.name).toEqual("Sandy");
    });

    it("should set 'id' when created", () => {
        // Arrange
        const id = 999;
        // Act
        const obj = new Employee("Foo", id);
        // Assert
        expect(obj.id).toEqual(id);
    });

    it("should set 'email' when created", () => {
        // Arrange
        const email = "foo@gmail.com";
        // Act
        const obj = new Employee("Foo", 0, email);
        // Assert
        expect(obj.email).toEqual(email);
    });

    it("should return the 'Employee' object's 'name' value", () => {
        // Arrange
        const name = "Sandy";
        // Act
        const obj = new Employee(name);
        // Assert
        expect(obj.getName()).toEqual(name);
    });

    it("should return the 'Employee' object's 'id' value", () => {
        // Arrange
        const id = 999;
        // Act
        const obj = new Employee("Foo", id);
        // Assert
        expect(obj.getId()).toEqual(id);
    });

    it("should return the 'Employee' object's 'email' value", () => {
        // Arrange
        const email = "foo@gmail.com";
        // Act
        const obj = new Employee("Foo", 0, email);
        // Assert
        expect(obj.getEmail()).toEqual(email);
    });

    it("should return 'Employee'", () => {
        // Act
        const obj = new Employee();
        // Assert
        expect(obj.getRole()).toEqual("Employee");
    });
});
