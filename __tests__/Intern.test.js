const Intern = require('../lib/Intern');
 
describe('Intern', () => {
  it('should return school set', () => {
    // Assert
    const school = "Berkeley"
    const intern = new Intern("Foo", 0, "foo@gmail.com", school);
    expect(intern.school).toBe(school);
  });

  it('should return the role of Intern', () => {
    // Assert
    const intern = new Intern("Foo", 0, "foo@gmail.com", "Berkeley");
    expect(intern.getRole()).toBe('Intern');
  });

  it('should return school set', () => {
    // Assert
    const school = "Berkeley"
    const intern = new Intern("Foo", 0, "foo@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
  });
});