const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should return GitHub username set', () => {
    // Assert
    const username = "foo"
    const engineer = new Engineer("Foo", 0, "foo@gmail.com", username);
    expect(engineer.github).toBe(username);
  });

  it('should return the role of Engineer', () => {
    // Assert
    const engineer = new Engineer("Foo", 0, "foo@gmail.com", "foo");
    expect(engineer.getRole()).toBe('Engineer');
  });

  it('should return GitHub username set', () => {
    // Assert
    const username = "foo"
    const engineer = new Engineer("Foo", 0, "foo@gmail.com", username);
    expect(engineer.getGithub()).toBe(username);
  });
});
