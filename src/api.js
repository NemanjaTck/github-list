export default {
  user: {
    click: (login) =>
      fetch(`https://api.github.com/users/${login}`).then(response => response.json())
  }
}
