export class UserService {
  async getUsers() {
    return fetch("http://localhost:7000/content")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
